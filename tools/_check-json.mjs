const res = await fetch("http://localhost:3000/");
const html = await res.text();
const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
let match;
let count = 0;
while ((match = re.exec(html))) {
  count += 1;
  try {
    JSON.parse(match[1]);
    console.log("ldjson", count, "ok", match[1].length);
  } catch (error) {
    console.log("ldjson", count, "FAIL", error.message);
    console.log(match[1].slice(0, 300));
  }
}
console.log("ldjson count", count, "status", res.status, "html", html.length);
