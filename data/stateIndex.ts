// Lightweight state directory (slug/name/abbreviation only) for client
// components that render state pickers/dropdowns/grids. Deliberately
// decoupled from statesData.ts, which pulls in every state's full page
// content plus 47 JSON-LD schema graphs — importing that module from a
// "use client" component ships all of it to the browser even when only
// the state names are ever rendered.
export interface StateIndexEntry {
  slug: string;
  name: string;
  abbreviation: string;
}

export const STATE_INDEX: StateIndexEntry[] = [
  { slug: "alabama", name: "Alabama", abbreviation: "AL" },
  { slug: "alaska", name: "Alaska", abbreviation: "AK" },
  { slug: "arizona", name: "Arizona", abbreviation: "AZ" },
  { slug: "arkansas", name: "Arkansas", abbreviation: "AR" },
  { slug: "california", name: "California", abbreviation: "CA" },
  { slug: "colorado", name: "Colorado", abbreviation: "CO" },
  { slug: "connecticut", name: "Connecticut", abbreviation: "CT" },
  { slug: "delaware", name: "Delaware", abbreviation: "DE" },
  { slug: "florida", name: "Florida", abbreviation: "FL" },
  { slug: "georgia", name: "Georgia", abbreviation: "GA" },
  { slug: "hawaii", name: "Hawaii", abbreviation: "HI" },
  { slug: "idaho", name: "Idaho", abbreviation: "ID" },
  { slug: "illinois", name: "Illinois", abbreviation: "IL" },
  { slug: "indiana", name: "Indiana", abbreviation: "IN" },
  { slug: "iowa", name: "Iowa", abbreviation: "IA" },
  { slug: "kansas", name: "Kansas", abbreviation: "KS" },
  { slug: "kentucky", name: "Kentucky", abbreviation: "KY" },
  { slug: "louisiana", name: "Louisiana", abbreviation: "LA" },
  { slug: "maine", name: "Maine", abbreviation: "ME" },
  { slug: "maryland", name: "Maryland", abbreviation: "MD" },
  { slug: "massachusetts", name: "Massachusetts", abbreviation: "MA" },
  { slug: "michigan", name: "Michigan", abbreviation: "MI" },
  { slug: "minnesota", name: "Minnesota", abbreviation: "MN" },
  { slug: "mississippi", name: "Mississippi", abbreviation: "MS" },
  { slug: "missouri", name: "Missouri", abbreviation: "MO" },
  { slug: "montana", name: "Montana", abbreviation: "MT" },
  { slug: "nebraska", name: "Nebraska", abbreviation: "NE" },
  { slug: "nevada", name: "Nevada", abbreviation: "NV" },
  { slug: "new-hampshire", name: "New Hampshire", abbreviation: "NH" },
  { slug: "new-jersey", name: "New Jersey", abbreviation: "NJ" },
  { slug: "new-mexico", name: "New Mexico", abbreviation: "NM" },
  { slug: "new-york", name: "New York", abbreviation: "NY" },
  { slug: "north-carolina", name: "North Carolina", abbreviation: "NC" },
  { slug: "north-dakota", name: "North Dakota", abbreviation: "ND" },
  { slug: "ohio", name: "Ohio", abbreviation: "OH" },
  { slug: "oklahoma", name: "Oklahoma", abbreviation: "OK" },
  { slug: "oregon", name: "Oregon", abbreviation: "OR" },
  { slug: "pennsylvania", name: "Pennsylvania", abbreviation: "PA" },
  { slug: "south-carolina", name: "South Carolina", abbreviation: "SC" },
  { slug: "south-dakota", name: "South Dakota", abbreviation: "SD" },
  { slug: "texas", name: "Texas", abbreviation: "TX" },
  { slug: "utah", name: "Utah", abbreviation: "UT" },
  { slug: "virginia", name: "Virginia", abbreviation: "VA" },
  { slug: "washington", name: "Washington", abbreviation: "WA" },
  { slug: "west-virginia", name: "West Virginia", abbreviation: "WV" },
  { slug: "wisconsin", name: "Wisconsin", abbreviation: "WI" },
  { slug: "wyoming", name: "Wyoming", abbreviation: "WY" },
];

export const STATE_INDEX_BY_SLUG: Record<string, StateIndexEntry> = Object.fromEntries(
  STATE_INDEX.map((s) => [s.slug, s])
);
