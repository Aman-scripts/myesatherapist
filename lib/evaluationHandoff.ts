import { STATE_INDEX } from "@/data/stateIndex";
import { SURVEY_STATE_SLUGS, surveyRegisterUrl } from "@/components/common/stateModalDestination";

const STATE_TIMEZONES: Record<string, string> = {
  AL: "CST", AK: "AKST", AZ: "MST", AR: "CST", CA: "PST",
  CO: "MST", CT: "EST", DE: "EST", FL: "EST", GA: "EST",
  HI: "HST", ID: "MST", IL: "CST", IN: "EST", IA: "CST",
  KS: "CST", KY: "EST", LA: "CST", ME: "EST", MD: "EST",
  MA: "EST", MI: "EST", MN: "CST", MS: "CST", MO: "CST",
  MT: "MST", NE: "CST", NV: "PST", NH: "EST", NJ: "EST",
  NM: "MST", NY: "EST", NC: "EST", ND: "CST", OH: "EST",
  OK: "CST", OR: "PST", PA: "EST", RI: "EST", SC: "EST",
  SD: "CST", TN: "CST", TX: "CST", UT: "MST", VT: "EST",
  VA: "EST", WA: "PST", DC: "EST", WV: "EST", WI: "CST", WY: "MST",
};

export type EvaluationLead = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  stateName: string;
};

export type EvaluationErrors = Partial<
  Record<"firstName" | "lastName" | "email" | "phone" | "terms", string>
>;

const NAME_PATTERN = /^[a-zA-Z'\-\s]+$/;
const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;
const PHONE_PATTERN = /^\d{3}-\d{3}-\d{4}$/;

export function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  let formatted = "";
  if (digits.length > 0) formatted += digits.slice(0, 3);
  if (digits.length >= 4) formatted += `-${digits.slice(3, 6)}`;
  if (digits.length >= 7) formatted += `-${digits.slice(6, 10)}`;
  return formatted;
}

export function validateEvaluationLead(lead: EvaluationLead, termsAccepted: boolean): EvaluationErrors {
  const errors: EvaluationErrors = {};
  if (!NAME_PATTERN.test(lead.firstName.trim())) {
    errors.firstName = "Please enter a valid first name.";
  }
  if (!NAME_PATTERN.test(lead.lastName.trim())) {
    errors.lastName = "Please enter a valid last name.";
  }
  if (!EMAIL_PATTERN.test(lead.email.trim())) {
    errors.email = "Enter a valid email.";
  }
  if (!PHONE_PATTERN.test(lead.phone.trim())) {
    errors.phone = "Use format: 999-999-9999";
  }
  if (!termsAccepted) {
    errors.terms = "You must accept the terms.";
  }
  return errors;
}

function encodePreset(payload: object) {
  return btoa(unescape(encodeURIComponent(JSON.stringify(payload))))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

/** Survey site for the 29 listed states. Heally prefill for every other state. */
export function evaluationDestination(lead: EvaluationLead) {
  const entry = STATE_INDEX.find((state) => state.name === lead.stateName);
  const abbreviation = entry?.abbreviation || "CA";
  if (entry && SURVEY_STATE_SLUGS.has(entry.slug)) {
    return surveyRegisterUrl({
      firstName: lead.firstName,
      lastName: lead.lastName,
      email: lead.email,
      phone: lead.phone,
      state: lead.stateName,
    });
  }

  const payload = {
    first_name: lead.firstName.trim(),
    last_name: lead.lastName.trim(),
    email: lead.email.trim(),
    phone: lead.phone.trim(),
    state: abbreviation,
    state_of_evaluation: abbreviation,
    timezone: STATE_TIMEZONES[abbreviation] || "PST",
    extra_data: {
      "contact[contact_type]": "Web Form",
      "product[name]": "Eva",
    },
  };
  const preset = encodeURIComponent(encodePreset(payload));
  return `https://myesatherapist.getheally.com/patient_admin/prefill?redirect=sched&preset=${preset}`;
}

export function trackHeallySubmit(email: string, stateAbbreviation: string) {
  const layer = ((window as Window & { dataLayer?: Record<string, string>[] }).dataLayer ??= []);
  layer.push({
    event: "heallyValidatedSubmit",
    user_email: email,
    user_state: stateAbbreviation,
  });
}
