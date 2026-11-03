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
export const PSD_SCHEDULE_URL =
  "https://myesatherapist.videovisitmd.com/f/vshop-signIN?straitTo=schedule";

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

function encodePreset(payload: object) {
  return btoa(unescape(encodeURIComponent(JSON.stringify(payload))))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

/** Heally scheduling portal. Personal fields are included when the lead form collected them. */
export function heallyPortalUrl(fields: {
  abbreviation: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}) {
  const abbreviation = fields.abbreviation || "CA";
  const payload = {
    first_name: fields.firstName?.trim() ?? "",
    last_name: fields.lastName?.trim() ?? "",
    email: fields.email?.trim() ?? "",
    phone: fields.phone?.trim() ?? "",
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

/** Survey for the 29 listed states. VideoVisit scheduling for every other state. */
export function psdStateDestination(slug: string) {
  const entry = STATE_INDEX_BY_SLUG[slug];
  if (entry && SURVEY_STATE_SLUGS.has(entry.slug)) {
    return surveyRegisterUrl({ state: entry.name });
  }
  return PSD_SCHEDULE_URL;
}

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
    return psdStateDestination(slug);
  }
  return `/esa-letter-${slug}/`;
}
