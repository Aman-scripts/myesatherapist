import { writeFile } from "node:fs/promises";
import * as chromeLauncher from "chrome-launcher";
import lighthouse from "lighthouse";
const BASE = process.env.BASE; const FF = process.env.FF || "mobile";
const desktop = { extends: "lighthouse:default", settings: { formFactor: "desktop", screenEmulation: { mobile: false, width: 1350, height: 940, deviceScaleFactor: 1, disabled: false }, throttling: { rttMs: 40, throughputKbps: 10240, cpuSlowdownMultiplier: 1, requestLatencyMs: 0, downloadThroughputKbps: 0, uploadThroughputKbps: 0 } } };
const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless=new","--no-sandbox","--disable-gpu"] });
const all = {};
for (const p of process.argv.slice(2)) {
  try {
    const r = await lighthouse(BASE + p, { port: chrome.port, onlyCategories: ["performance","accessibility","best-practices","seo"], logLevel: "error" }, FF === "desktop" ? desktop : undefined);
    const l = r.lhr, c = l.categories, a = l.audits;
    const s = k => Math.round((c[k]?.score ?? 0) * 100);
    const m = { FCP: a["first-contentful-paint"].displayValue, LCP: a["largest-contentful-paint"].displayValue, TBT: a["total-blocking-time"].displayValue, CLS: a["cumulative-layout-shift"].displayValue, SI: a["speed-index"].displayValue };
    const lcpEl = a["largest-contentful-paint-element"]?.details?.items?.[0]?.items?.[0]?.node?.snippet?.slice(0,160);
    const fails = Object.values(a).filter(x => x.score !== null && x.score < 0.9 && x.scoreDisplayMode !== "informative" && x.scoreDisplayMode !== "notApplicable" && x.scoreDisplayMode !== "manual").map(x => x.id + (x.displayValue ? `(${x.displayValue})` : ""));
    all[p] = { perf: s("performance"), a11y: s("accessibility"), bp: s("best-practices"), seo: s("seo"), m, lcpEl, fails };
    await writeFile(process.env.OUT + "." + p.replace(/\W+/g, "_") + ".json", JSON.stringify(l));
    console.log(p, `perf=${all[p].perf} a11y=${all[p].a11y} bp=${all[p].bp} seo=${all[p].seo}`, JSON.stringify(m));
  } catch (e) { console.log(p, "ERR", e.message); }
}
await chrome.kill();
await writeFile(process.env.OUT, JSON.stringify(all, null, 2));
