import fs from "fs";
import path from "path";

function walk(d, a = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (e.name === "node_modules" || e.name === ".next") continue;
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, a);
    else if (/\.(tsx|jsx)$/.test(e.name)) a.push(p);
  }
  return a;
}

const names = [
  "Icon-1.svg",
  "Icon-2.svg",
  "Icon-3.svg",
  "Icon-4.svg",
  "Icon-5.svg",
  "Icon-6.svg",
  "Icon-8.svg",
  "Icon-21.svg",
  "housingbarrierssection-",
];

const files = [...walk("components"), ...walk("app")];
for (const f of files) {
  const t = fs.readFileSync(f, "utf8");
  if (!names.some((n) => t.includes(n))) continue;
  const re = /<(Image|img)\b[\s\S]*?\/>/g;
  let m;
  while ((m = re.exec(t))) {
    const tag = m[0];
    const src = (tag.match(/src=(\{[^}]+\}|"[^"]*")/) || [])[1] || "";
    const interesting = names.some((n) => tag.includes(n) || src.includes("icon") || src.includes("Icon"));
    if (!interesting) continue;
    const alt = (tag.match(/alt=(\{[^}]+\}|"[^"]*"|'[^']*')/) || [])[1];
    const empty = !alt || alt === '""' || alt === "''" || alt.includes('?? ""') || alt === '{""}';
    if (!empty && !names.some((n) => tag.includes(n))) continue;
    const line = t.slice(0, m.index).split("\n").length;
    console.log(
      `${empty ? "EMPTY" : "ok   "} ${path.relative(".", f)}:${line} alt=${alt || "NONE"} src=${src.slice(0, 90)}`
    );
  }
}
