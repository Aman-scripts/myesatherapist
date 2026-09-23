import * as chromeLauncher from "chrome-launcher";
const pages = process.argv.slice(2);
const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless=new","--disable-gpu"] });
const list = await (await fetch(`http://127.0.0.1:${chrome.port}/json/list`)).json();
const ws = new WebSocket(list.find(t => t.type === "page").webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);
let id = 0; const pend = {}; let reqs = [];
ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && pend[m.id]) { pend[m.id](m.result); delete pend[m.id]; } if (m.method === "Network.requestWillBeSent") reqs.push(m.params.request.url); };
const send = (method, params = {}) => new Promise(r => { pend[++id] = r; ws.send(JSON.stringify({ id, method, params })); });
const sleep = ms => new Promise(r => setTimeout(r, ms));
await send("Network.enable"); await send("Network.setCacheDisabled", { cacheDisabled: true });
for (const [w, dpr] of [[412, 1.75], [800, 1], [1350, 1]]) {
  await send("Emulation.setDeviceMetricsOverride", { width: w, height: 900, deviceScaleFactor: dpr, mobile: w < 600 });
  for (const p of pages) {
    reqs = []; await send("Page.navigate", { url: "http://localhost:3100" + p }); await sleep(2500);
    const hero = reqs.filter(u => /hero|herosection|hero_section/i.test(decodeURIComponent(u))).map(u => decodeURIComponent(u).replace(/.*url=/, "").replace(/&q=.*/, ""));
    const lcp = await send("Runtime.evaluate", { returnByValue: true, awaitPromise: true, expression: `new Promise(r=>{new PerformanceObserver(l=>{const e=l.getEntries().at(-1);r((e.url||e.element?.tagName||'').replace(/.*url=/,'').slice(0,70))}).observe({type:'largest-contentful-paint',buffered:true});setTimeout(()=>r('none'),1500)})` });
    console.log(w, p, "| hero reqs:", hero.join(" , ") || "-", "| LCP:", decodeURIComponent(lcp.result.value));
  }
}
ws.close(); await chrome.kill();
