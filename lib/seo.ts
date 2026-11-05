import type { Metadata } from "next";
import { SEO_SETTINGS, sheetRobots } from "@/data/seoSettings";

export const SITE_NAME = "My ESA Therapist";
export const TWITTER_HANDLE = "@MyESATherapist";

const SHEET_PATH_ALIASES: Record<string, string> = {
  "/telehealth-consent/": "/consent-for-telehealth/",
  "/esa-doctors/dr-robert-staaf/": "/esa-doctors/dr-robert-staff/",
  "/contributors/allyson-valley/": "/author/allyson-valley/",
  "/contributors/mohammed-ziauddin/": "/author/mohammed-ziauddin/",
  "/contributors/kiera-conrad/": "/author/kiera-conrad/",
};

export function applySheetSeo(metadata: Metadata): Metadata {
  const canonical = metadata.alternates?.canonical;
  if (typeof canonical !== "string" || !canonical) return metadata;

  let pathname = "";
  try {
    pathname = new URL(canonical).pathname;
  } catch {
    return metadata;
  }

  const row = SEO_SETTINGS[pathname] ?? SEO_SETTINGS[SHEET_PATH_ALIASES[pathname] ?? ""];
  if (!row) return metadata;

  const description = row.description.trim() ? row.description : undefined;
  const openGraph = metadata.openGraph ?? {};
  const twitter = metadata.twitter ?? {};

  return {
    ...metadata,
    title: row.title,
    description: description ?? metadata.description,
    robots: sheetRobots(row.robots),
    openGraph: {
      ...openGraph,
      title: row.title,
      ...(description ? { description } : {}),
      url: typeof openGraph.url === "string" ? openGraph.url : canonical,
      siteName: SITE_NAME,
      locale: "en_US",
      type: row.ogType,
    },
    twitter: {
      ...twitter,
      card: "summary",
      title: row.title,
      ...(description ? { description } : {}),
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
    },
  };
}

export const CHARGE_AND_REFUND =
  "Your card is charged when you book. If the evaluation cannot be completed, you receive a full refund under our Refund Policy. A completed evaluation is non-refundable, whether or not a letter is issued.";

export const REFUND_NOTE =
  "100% Refund If No ESA Letter Is Issued";

export function statePageTitle(name: string, slug: string) {
  if (slug === "california") return "California ESA Letter | AB 468 | My ESA Therapist";
  const withOnline = `${name} ESA Letter Online | My ESA Therapist`;
  if (withOnline.length <= 60) return withOnline;
  const shorter = `${name} ESA Letter | My ESA Therapist`;
  return shorter.length <= 60 ? shorter : shorter.slice(0, 60).trim();
}

export function fitMetaTitle(title: string, max = 60) {
  if (title.length <= max) return title;
  const brand = " | My ESA Therapist";
  if (!title.endsWith(brand)) return title.slice(0, max).trim();
  const room = max - brand.length;
  let base = title.slice(0, -brand.length).trim();
  if (base.length > room) {
    base = base.slice(0, room);
    const cut = base.lastIndexOf(" ");
    if (cut > 24) base = base.slice(0, cut);
  }
  return `${base}${brand}`;
}

export function fitDescription(description: string, max = 155) {
  const clean = description.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const space = cut.lastIndexOf(" ");
  return `${(space > 80 ? cut.slice(0, space) : cut).trim()}.`;
}

export function pageSocial(options: {
  title: string;
  description: string;
  url: string;
  type?: "website" | "article";
  images?: {
    openGraph: NonNullable<Metadata["openGraph"]>["images"];
    twitter: NonNullable<Metadata["twitter"]>["images"];
  };
}): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      title: options.title,
      description: options.description,
      url: options.url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: options.type ?? "website",
      ...(options.images ? { images: options.images.openGraph } : {}),
    },
    twitter: {
      card: "summary",
      title: options.title,
      description: options.description,
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      ...(options.images ? { images: options.images.twitter } : {}),
    },
  };
}
