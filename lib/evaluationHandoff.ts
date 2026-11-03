import { STATE_INDEX } from "@/data/stateIndex";
import { heallyPortalUrl, SURVEY_STATE_SLUGS, surveyRegisterUrl } from "@/components/common/stateModalDestination";

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

  return heallyPortalUrl({
    abbreviation,
    firstName: lead.firstName,
    lastName: lead.lastName,
    email: lead.email,
    phone: lead.phone,
  });
}

export function trackHeallySubmit(email: string, stateAbbreviation: string) {
  const layer = ((window as Window & { dataLayer?: Record<string, string>[] }).dataLayer ??= []);
  layer.push({
    event: "heallyValidatedSubmit",
    user_email: email,
    user_state: stateAbbreviation,
  });
}
