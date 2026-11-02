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

export type ModalLetter = "esa" | "psd";

export function letterFromPath(pathname: string): ModalLetter {
  return pathname.includes("/psd-letter") ? "psd" : "esa";
}

/** Where the modal's Get Started button goes after a state is chosen. */
export function stateModalDestination(letter: ModalLetter, slug: string): string {
  if (letter === "psd") return PSD_SURVEY_URL;
  return `/esa-letter-${slug}/`;
}
