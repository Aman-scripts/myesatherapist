#!/usr/bin/env node
// Lighthouse audit: builds the production app, serves it, and runs
// Performance + Accessibility audits (mobile + desktop) against every
// unique page template plus representative samples of each dynamic route.
//
// Usage:
//   npm run lighthouse            # build + start + audit + teardown
//   npm run lighthouse -- --skip-build   # reuse existing .next build
//   npm run lighthouse -- --pages=/,/about/   # audit only specific paths

import { mkdir, writeFile } from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { spawn } from "node:child_process";
import * as chromeLauncher from "chrome-launcher";
import lighthouse from "lighthouse";

const PORT = process.env.LH_PORT || "3100";
const BASE_URL = `http://localhost:${PORT}`;
const OUT_DIR = path.resolve("lighthouse-reports");
const THRESHOLD = 95;

const args = process.argv.slice(2);
const skipBuild = args.includes("--skip-build");
const pagesArg = args.find((a) => a.startsWith("--pages="));

// One entry per unique page template, plus 2-3 representative instances of
// every dynamic route ([state], blog post categories, doctors, authors,
// policies). Auditing every generated page (100+) is redundant since
// instances of the same template share the same layout/components.
const DEFAULT_PAGES = [
  "/",
  "/about/",
  "/about-us/",
  "/accessibility-statement/",
  "/blog/",
  "/blog/esa-guide/",
  "/blog/esa-training/",
  "/blog/qualifying-conditions/",
  "/consent-for-telehealth/",
  "/contact/",
  "/contact-us/",
  "/contributors/",
  "/contributors/awais-arshad/",
  "/contributors/max-phillips/",
  "/disclaimer/",
  "/disclaimer-and-policies/",
  "/editorial-policy/",
  "/esa-doctors/",
  "/esa-laws/",
  "/esa-laws/alabama/",
  "/esa-letter-by-state/",
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
  "/states/",
  "/terms-of-use/",
  "/video-testimonials/",
  // dynamic route samples
  "/california/",
  "/texas/",
  "/new-york/",
  "/blog/esa-guide/how-to-verify-an-esa-letter/",
  "/blog/esa-guide/esa-for-children/",
  "/blog/esa-training/8-basic-obedience-commands-every-esa-should-know/",
  "/blog/qualifying-conditions/conditions-that-may-qualify-for-an-esa/",
  "/blog/qualifying-conditions/esa-for-anxiety/",
  "/esa-doctors/dr-leslie-k-gamble/",
  "/esa-doctors/dr-robert-staff/",
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
    { port: chromePort, onlyCategories: ["performance", "accessibility"], logLevel: "error" },
    config
  );
  const { categories } = result.lhr;
  return {
    url: urlPath,
    formFactor,
    performance: Math.round((categories.performance?.score ?? 0) * 100),
    accessibility: Math.round((categories.accessibility?.score ?? 0) * 100),
    report: result.report,
    lhr: result.lhr,
  };
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  let serverProcess;
  if (!skipBuild) {
    console.log("Building production bundle...");
    await run("npx", ["next", "build"]);
  }

  console.log(`Starting production server on port ${PORT}...`);
  serverProcess = spawn("npx", ["next", "start", "-p", PORT], {
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
          console.log(`perf=${result.performance} a11y=${result.accessibility}`);
          if (result.performance < THRESHOLD || result.accessibility < THRESHOLD) {
            const safeName = (pagePath.replace(/\//g, "_") || "_home").replace(/^_|_$/g, "") || "home";
            await writeFile(path.join(OUT_DIR, `${safeName}-${formFactor}.html`), result.report);
            await writeFile(
              path.join(OUT_DIR, `${safeName}-${formFactor}.json`),
              JSON.stringify(result.lhr, null, 2)
            );
          }
        } catch (err) {
          console.log(`ERROR: ${err.message}`);
          results.push({ url: pagePath, formFactor, performance: null, accessibility: null, error: err.message });
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
    if (!pPass || !aPass) failing.push(r);
    console.log(
      `${r.url.padEnd(58)} ${r.formFactor.padEnd(8)} perf=${String(r.performance).padEnd(5)}${pPass ? "PASS" : "FAIL"}   a11y=${String(r.accessibility).padEnd(5)}${aPass ? "PASS" : "FAIL"}`
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
