/** Labels that start an evaluation. The hero state picker opts out. */
const EVALUATION_CTA_LABELS = new Set([
  "get started",
  "start evaluation",
  "start your evaluation",
  "start your esa evaluation",
  "start your esa evaluation now",
  "schedule your evaluation",
  "schedule consultation",
  "schedule consultation now",
  "schedule your esa assessment",
  "start your consultation",
  "start your application",
  "start your renewal online",
  "begin your renewal process",
  "book appointment",
  "book your appointment",
  "apply your esa letter",
  "apply your esa letter now",
  "apply esa letter now",
  "begin with esa letter evaluation",
  "renew your esa letter now",
  "talk with a licensed therapist",
  "find your eligibility",
  "find your eligibility in minutes",
]);

export const OPEN_STATE_MODAL_EVENT = "open-state-select-modal";

export type StateModalLetter = "esa" | "psd";

export function isEvaluationCtaLabel(label: string) {
  const text = label.replace(/\s+/g, " ").trim().toLowerCase();
  return EVALUATION_CTA_LABELS.has(text);
}

export function openStateSelectModal(letter?: StateModalLetter) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(OPEN_STATE_MODAL_EVENT, { detail: { letter } }));
}
