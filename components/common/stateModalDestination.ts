import { STATE_INDEX_BY_SLUG } from "@/data/stateIndex";

/** The 29 states that continue on the survey site instead of Heally. */
export const SURVEY_STATE_SLUGS = new Set([
  "maryland",
  "virginia",
  "florida",
  "massachusetts",
  "maine",
  "minnesota",
  "oklahoma",
  "utah",
  "connecticut",
  "north-carolina",
  "vermont",
  "illinois",
  "idaho",
  "alabama",
  "texas",
  "washington-dc",
  "new-jersey",
  "michigan",
  "mississippi",
  "south-carolina",
  "kentucky",
  "nevada",
  "arizona",
  "new-mexico",
  "colorado",
  "indiana",
  "rhode-island",
  "montana",
  "pennsylvania",
]);

export const PSD_SURVEY_URL = "https://staging.survey.myesatherapist.com/";

export type SurveyRegisterFields = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  state?: string;
};

/** Survey register URL. Password stays off the link; the person sets it there. */
export function surveyRegisterUrl(fields: SurveyRegisterFields = {}) {
  const params = new URLSearchParams();
  const add = (key: string, value?: string) => {
    const trimmed = value?.trim();
    if (trimmed) params.set(key, trimmed);
  };
  add("firstName", fields.firstName);
  add("lastName", fields.lastName);
  add("email", fields.email);
  const phone = fields.phone?.replace(/\D/g, "");
  if (phone) params.set("phone", phone);
  add("state", fields.state);
  const query = params.toString();
  return query ? `${PSD_SURVEY_URL}?${query}` : PSD_SURVEY_URL;
}

export type ModalLetter = "esa" | "psd";

export function letterFromPath(pathname: string): ModalLetter {
  return pathname.includes("/psd-letter") ? "psd" : "esa";
}

/** Where the modal's Get Started button goes after a state is chosen. */
export function stateModalDestination(letter: ModalLetter, slug: string): string {
  if (letter === "psd") {
    return surveyRegisterUrl({ state: STATE_INDEX_BY_SLUG[slug]?.name });
  }
  return `/esa-letter-${slug}/`;
}
