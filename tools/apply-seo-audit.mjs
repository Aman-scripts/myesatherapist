import fs from "fs";
import path from "path";

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === "node_modules" || ent.name === ".next" || ent.name === ".git") continue;
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, out);
    else if (/\.(ts|tsx|js|mjs|txt|md)$/.test(ent.name)) out.push(full);
  }
  return out;
}

const refund =
  "If your evaluation cannot be completed, you receive a full refund. Completed evaluations are non-refundable.";

const replacements = [
  ["Not approved after your ESA evaluation? You get a full refund!.", refund],
  ["Not approved after your ESA evaluation? You get a full refund!", refund],
  ["You get a full refund!.", "You receive a full refund if the evaluation cannot be completed."],
  ["full refund!.", "full refund."],
  ["ESA Letter + ID Card", "ESA Letter + PSD Letter Combo"],
  ["PSD Letter + ID Card", "PSD Letter"],
  ["Our Licensed Mental Health Professionals", "Our Licensed Clinicians"],
  ["Which States Have the Strict ESA Laws?", "Which States Have the Strictest ESA Laws?"],
  ["If not approved after your evaluation?", "If your evaluation cannot be completed,"],
  ["https://myesatherapist.com/author/allyson-valley", "https://myesatherapist.com/contributors/allyson-valley"],
  ["https://myesatherapist.com/author/mohammed-ziauddin", "https://myesatherapist.com/contributors/mohammed-ziauddin"],
  ["https://myesatherapist.com/author/kiera-conrad", "https://myesatherapist.com/contributors/kiera-conrad"],
  ['href: "/author/allyson-valley/"', 'href: "/contributors/allyson-valley/"'],
  ['href: "/author/mohammed-ziauddin/"', 'href: "/contributors/mohammed-ziauddin/"'],
  ["bioHref=\"/author/mohammed-ziauddin/\"", "bioHref=\"/contributors/mohammed-ziauddin/\""],
  ["/esa-doctors/dr-robert-staff/", "/esa-doctors/dr-robert-staaf/"],
  ["Dr. Robert Staaf, Licensed Clinical Social Worker", "Robert Staaf, Licensed Clinical Social Worker"],
  ['"credentials": "Licensed Clinical Social Worker"', '"credentials": "Ph.D., LPC-MHSP"'],
  [
    "options to scale as you grow. No hidden fees and the flexibility to change anytime.",
    "Each plan is a one-time evaluation. No subscriptions and no ID cards.",
  ],
  [
    "Your card is authorized at booking to hold your appointment slot, but the actual charge only occurs after your telehealth evaluation is completed and you are approved by the licensed professional. If not approved, no charge is made.",
    "Your card is charged when you book. If the evaluation cannot be completed, you receive a full refund. A completed evaluation is non-refundable, whether or not a letter is issued.",
  ],
  [
    "Card is authorized at booking to hold the appointment slot. The charge is only collected after the telehealth evaluation is completed and the individual is approved by the licensed professional. If not approved, no charge is made.",
    "Your card is charged when you book. If the evaluation cannot be completed, you receive a full refund. A completed evaluation is non-refundable, whether or not a letter is issued.",
  ],
  [
    "The ID card is a supplementary identification document for your ESA or PSD. It makes it easier to identify your animal to landlords and property managers. Note that ID cards alone do not convey legal rights -- the letter remains the primary legal document.",
    "No plan includes an ID card. ID cards, registries, and certificates are not legal proof of an assistance animal. The letter is the clinical document.",
  ],
  ["What is included in the ID Card?", "Do any plans include an ESA ID card?"],
  ["Official ESA ID card for your animal", "PSD letter if clinically appropriate"],
  [
    "plus an official ESA ID card for easy identification of your emotional support animal.",
    "plus a PSD letter when a licensed clinician determines it is appropriate. ID cards are not included.",
  ],
  ["with ID Card", ""],
  ["/states/californina-esa-evalutation_schedule.svg", "/states/california-esa-evaluation-schedule.svg"],
  ["/states/californina-esa-evalutation_clinicalevaluation.svg", "/states/california-esa-evaluation-clinical.svg"],
  ["/states/californina-esa-evalutation_clinicaldetermination.svg", "/states/california-esa-evaluation-determination.svg"],
  ["/states/californina-scams-alert-icon.svg", "/states/california-scams-alert-icon.svg"],
  ["hippa_log.webp", "hipaa-logo.webp"],
  ["/ESA ICons/", "/esa-icons/"],
  ["/As Seen on Images/", "/as-seen-on/"],
];

let changed = 0;
for (const file of walk(process.cwd())) {
  if (file.endsWith("apply-seo-audit.mjs")) continue;
  let text = fs.readFileSync(file, "utf8");
  const original = text;
  for (const [from, to] of replacements) text = text.split(from).join(to);
  if (text !== original) {
    fs.writeFileSync(file, text);
    changed += 1;
  }
}
console.log("files changed", changed);
