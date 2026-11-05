#!/usr/bin/env node

import { mkdir, writeFile } from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { spawn } from "node:child_process";
import * as chromeLauncher from "chrome-launcher";
import lighthouse from "lighthouse";

const PORT = process.env.LH_PORT || "3100";
const BASE_URL = `http://127.0.0.1:${PORT}`;
const OUT_DIR = path.resolve("lighthouse-reports");
const THRESHOLD = 95;

const args = process.argv.slice(2);
const skipBuild = args.includes("--skip-build");
const pagesArg = args.find((a) => a.startsWith("--pages="));

const DEFAULT_PAGES = [
  "/",
  "/about-us/",
  "/accessibility-statement/",
  "/blog/",
  "/blog/esa-guide/",
  "/blog/esa-training/",
  "/blog/qualifying-conditions/",
  "/telehealth-consent/",
  "/contact-us/",
  "/contributors/",
  "/contributors/awais-arshad/",
  "/contributors/max-phillips/",
  "/disclaimer/",
  "/editorial-policy/",
  "/esa-doctors/",
  "/esa-laws/",
  "/esa-laws/alabama/",
  "/esa-letter-for-housing/",
  "/esa-letter-online/",
  "/esa-letter-renewal/",
  "/frequently-asked-questions/",
  "/hipaa-compliance/",
  "/legal-reviewer/",
  "/policies/",
  "/pricing/",
  "/privacy-policy/",
  "/psd-letter/",
  "/refund-policy/",
  "/reviews/",
  "/state/",
  "/terms-of-use/",
  "/video-testimonials/",
  "/california/",
  "/texas/",
  "/new-york/",
  "/blog/esa-guide/how-to-verify-an-esa-letter/",
  "/blog/esa-guide/esa-for-children/",
  "/blog/esa-training/8-basic-obedience-commands-every-esa-should-know/",
  "/blog/qualifying-conditions/conditions-that-may-qualify-for-an-esa/",
  "/blog/qualifying-conditions/esa-for-anxiety/",
  "/esa-doctors/dr-leslie-k-gamble/",
  "/esa-doctors/dr-robert-staaf/",
  "/author/allyson-valley/",
  "/author/mohammed-ziauddin/",
  "/policies/privacy-policy/",
];

const PAGES = pagesArg
  ? pagesArg.replace("--pages=", "").split(",").filter(Boolean)
  : DEFAULT_PAGES;

const desktopConfig = {
  extends: "lighthouse:default",
  settings: {
    formFactor: "desktop",
    screenEmulation: {
      mobile: false,
      width: 1350,
      height: 940,
      deviceScaleFactor: 1,
      disabled: false,
    },
    throttling: {
      rttMs: 40,
      throughputKbps: 10240,
      cpuSlowdownMultiplier: 1,
      requestLatencyMs: 0,
      downloadThroughputKbps: 0,
      uploadThroughputKbps: 0,
    },
  },
};

function run(cmd, cmdArgs, opts = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, cmdArgs, { stdio: "inherit", shell: true, ...opts });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} ${cmdArgs.join(" ")} exited with code ${code}`));
    });
    child.on("error", reject);
  });
}

function waitForServer(url, timeoutMs = 60000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tryOnce = () => {
      const req = http.get(url, (res) => {
        res.resume();
        resolve();
      });
      req.on("error", () => {
        if (Date.now() - start > timeoutMs) {
          reject(new Error(`Server at ${url} did not start within ${timeoutMs}ms`));
        } else {
          setTimeout(tryOnce, 500);
        }
      });
      req.setTimeout(2000, () => req.destroy());
    };
    tryOnce();
  });
}

function killTree(child) {
  return new Promise((resolve) => {
    if (process.platform === "win32") {
      spawn("taskkill", ["/pid", String(child.pid), "/T", "/F"], { stdio: "ignore" }).on(
        "exit",
        () => resolve()
      );
    } else {
      child.kill("SIGTERM");
      resolve();
    }
  });
}

async function auditPage(chromePort, urlPath, formFactor) {
  const url = new URL(urlPath, BASE_URL).toString();
  const config = formFactor === "desktop" ? desktopConfig : undefined;
  const result = await lighthouse(
    url,
    {
      port: chromePort,
      onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
      logLevel: "error",
    },
    config
  );
  const { categories } = result.lhr;
  return {
    url: urlPath,
    formFactor,
    performance: Math.round((categories.performance?.score ?? 0) * 100),
    accessibility: Math.round((categories.accessibility?.score ?? 0) * 100),
    bestPractices: Math.round((categories["best-practices"]?.score ?? 0) * 100),
    seo: Math.round((categories.seo?.score ?? 0) * 100),
    report: result.report,
    lhr: result.lhr,
  };
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  let serverProcess;
  if (!skipBuild) {
    console.log("Building production bundle...");
    await run(process.platform === "win32" ? "npm.cmd" : "npm", ["run", "build"]);
  }

  console.log(`Starting production server on port ${PORT}...`);
  serverProcess = spawn(process.platform === "win32" ? "npx.cmd" : "npx", ["next", "start", "-H", "127.0.0.1", "-p", PORT], {
    stdio: "inherit",
    shell: true,
  });
  await waitForServer(BASE_URL);

  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless=new", "--no-sandbox", "--disable-gpu"],
  });

  const results = [];
  try {
    for (const pagePath of PAGES) {
      for (const formFactor of ["mobile", "desktop"]) {
        process.stdout.write(`Auditing ${pagePath} (${formFactor})... `);
        try {
          const result = await auditPage(chrome.port, pagePath, formFactor);
          results.push(result);
          console.log(`perf=${result.performance} a11y=${result.accessibility} bp=${result.bestPractices} seo=${result.seo}`);
          if (result.performance < THRESHOLD || result.accessibility < THRESHOLD || result.bestPractices < THRESHOLD || result.seo < THRESHOLD) {
            const safeName = (pagePath.replace(/\//g, "_") || "_home").replace(/^_|_$/g, "") || "home";
            await writeFile(path.join(OUT_DIR, `${safeName}-${formFactor}.html`), result.report);
            await writeFile(
              path.join(OUT_DIR, `${safeName}-${formFactor}.json`),
              JSON.stringify(result.lhr, null, 2)
            );
          }
        } catch (err) {
          console.log(`ERROR: ${err.message}`);
          results.push({ url: pagePath, formFactor, performance: null, accessibility: null, bestPractices: null, seo: null, error: err.message });
        }
      }
    }
  } finally {
    await chrome.kill();
    await killTree(serverProcess);
  }

  console.log(`\n=== Lighthouse Summary (threshold: ${THRESHOLD}) ===`);
  const failing = [];
  for (const r of results) {
    const pPass = r.performance !== null && r.performance >= THRESHOLD;
    const aPass = r.accessibility !== null && r.accessibility >= THRESHOLD;
    const bpPass = r.bestPractices !== null && r.bestPractices >= THRESHOLD;
    const sPass = r.seo !== null && r.seo >= THRESHOLD;
    if (!pPass || !aPass || !bpPass || !sPass) failing.push(r);
    console.log(
      `${r.url.padEnd(52)} ${r.formFactor.padEnd(8)} perf=${String(r.performance).padEnd(4)}${pPass ? "PASS" : "FAIL"}  a11y=${String(r.accessibility).padEnd(4)}${aPass ? "PASS" : "FAIL"}  bp=${String(r.bestPractices).padEnd(4)}${bpPass ? "PASS" : "FAIL"}  seo=${String(r.seo).padEnd(4)}${sPass ? "PASS" : "FAIL"}`
    );
  }
  console.log(`\n${failing.length} of ${results.length} audits below ${THRESHOLD}.`);
  if (failing.length > 0) {
    console.log(`Full reports for failing pages saved to ${OUT_DIR}`);
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
