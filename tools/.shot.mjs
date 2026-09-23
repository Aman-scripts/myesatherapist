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
for (const p of pages) for (const [w, h] of [[390, 900], [800, 1000]]) {
  await send("Emulation.setDeviceMetricsOverride", { width: w, height: h, deviceScaleFactor: 1, mobile: w < 600 });
  await send("Page.navigate", { url: "http://localhost:3100" + p }); await sleep(2500);
  // scroll through so lazy images load, then to the bottom
  await send("Runtime.evaluate", { expression: "(async()=>{for(let y=0;y<document.body.scrollHeight;y+=600){scrollTo(0,y);await new Promise(r=>setTimeout(r,60))}const f=document.querySelector('footer');scrollTo(0,f.getBoundingClientRect().top+scrollY-innerHeight*0.6)})()", awaitPromise: true });
  await sleep(1200);
  const r = await send("Page.captureScreenshot", { format: "png" });
  const name = `${out}/${p.replace(/\W+/g, "_")}-${w}.png`;
  await writeFile(name, Buffer.from(r.data, "base64")); console.log(name);
}
ws.close(); await chrome.kill();
