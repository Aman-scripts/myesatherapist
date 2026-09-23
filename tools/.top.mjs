import { writeFile } from "node:fs/promises";
import * as chromeLauncher from "chrome-launcher";
const [out, ...pages] = process.argv.slice(2);
const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless=new","--disable-gpu","--hide-scrollbars"] });
const list = await (await fetch(`http://127.0.0.1:${chrome.port}/json/list`)).json();
const ws = new WebSocket(list.find(t => t.type === "page").webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);
let id = 0; const pend = {};
ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && pend[m.id]) { pend[m.id](m.result); delete pend[m.id]; } };
const send = (method, params = {}) => new Promise(r => { pend[++id] = r; ws.send(JSON.stringify({ id, method, params })); });
const sleep = ms => new Promise(r => setTimeout(r, ms));
for (const [tag, base] of [["local", "http://localhost:3100"], ["live", "https://myesatherapist.vercel.app"]])
for (const p of pages) for (const [w, h] of [[390, 844], [800, 1000], [1440, 900]]) {
  await send("Emulation.setDeviceMetricsOverride", { width: w, height: h, deviceScaleFactor: 1, mobile: w < 600 });
  await send("Page.navigate", { url: base + p }); await sleep(3500);
  const r = await send("Page.captureScreenshot", { format: "jpeg", quality: 60 });
  await writeFile(`${out}/${tag}${p.replace(/\W+/g, "_")}${w}.jpg`, Buffer.from(r.data, "base64"));
}
ws.close(); await chrome.kill();
