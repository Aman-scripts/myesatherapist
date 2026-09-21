import type { Metadata } from "next";

const SITE = "https://myesatherapist.com";

/** Feature / Open Graph card images in public/og, keyed by file name. Value is [width, height]. */
const SIZES: Record<string, [number, number]> = {
  "about-us": [1640, 940],
  "blog-hub-page": [1672, 941],
  "customer-reviews": [1671, 941],
  "esa-by-state": [1536, 1024],
  "esa-guide": [1672, 941],
  "esa-laws": [1536, 1024],
  "esa-letter-cost": [1536, 1024],
  "esa-letter-for-housing": [1671, 941],
  "esa-letter-online": [1672, 941],
  "esa-letter-renewal": [1536, 1024],
  "homepage": [1536, 1024],
  "our-therapist": [1536, 1024],
  "psd-letter": [1672, 941],
  "state-alabama": [596, 842],
  "state-alaska": [596, 842],
  "state-arizona": [596, 842],
  "state-arkansas": [596, 842],
  "state-california": [596, 842],
  "state-colorado": [596, 842],
  "state-connecticut": [596, 842],
  "state-delaware": [596, 842],
  "state-florida": [596, 842],
  "state-georgia": [596, 842],
  "state-guam": [596, 842],
  "state-hawaii": [596, 842],
  "state-idaho": [596, 842],
  "state-illinois": [596, 842],
  "state-indiana": [596, 842],
  "state-iowa": [596, 842],
  "state-kansas": [596, 842],
  "state-kentucky": [596, 842],
  "state-louisiana": [596, 842],
  "state-maine": [596, 842],
  "state-maryland": [596, 842],
  "state-massachusetts": [596, 842],
  "state-michigan": [596, 842],
  "state-minnesota": [596, 842],
  "state-mississippi": [596, 842],
  "state-missouri": [596, 842],
  "state-montana": [596, 842],
  "state-nebraska": [596, 842],
  "state-nevada": [596, 842],
  "state-new-hampshire": [596, 842],
  "state-new-jersey": [596, 842],
  "state-new-mexico": [596, 842],
  "state-new-york": [596, 842],
  "state-north-carolina": [596, 842],
  "state-north-dakota": [596, 842],
  "state-ohio": [596, 842],
  "state-oklahoma": [596, 842],
  "state-oregon": [596, 842],
  "state-pennsylvania": [596, 842],
  "state-puerto-rico": [596, 842],
  "state-rhode-island": [596, 842],
  "state-south-carolina": [596, 842],
  "state-south-dakota": [596, 842],
  "state-tennessee": [596, 842],
  "state-texas": [596, 842],
  "state-utah": [596, 842],
  "state-virginia": [596, 842],
  "state-washington": [596, 842],
  "state-west-virginia": [596, 842],
  "state-wisconsin": [596, 842],
  "state-wyoming": [596, 842],
  "video-testimonials": [1672, 941],
  "blog-how-to-verify-an-esa-letter": [1200, 800],
  "blog-is-esa-registration-legit": [1536, 1024],
  "blog-esa-for-children": [1081, 1081],
  "blog-esa-letter-sample": [1024, 576],
  "blog-hud-guidance-for-emotional-support-animals": [2048, 1365],
  "blog-can-landlords-deny-emotional-support-animals": [1200, 1200],
  "blog-emotional-support-animal": [2560, 1440],
  "blog-conditions-that-may-qualify-for-an-esa": [1201, 901],
  "blog-esa-for-anxiety": [1201, 801],
  "blog-8-basic-obedience-commands-every-esa-should-know": [1200, 800],
};

export type SocialImageKey = keyof typeof SIZES;

export function hasSocialImage(key: string) {
  return key in SIZES;
}

/**
 * Open Graph + Twitter image fields for a page. Spread into the metadata:
 *   openGraph: { ...socialImage("homepage", alt).openGraph }
 */
export function socialImage(key: string, alt: string) {
  const size = SIZES[key];
  if (!size) throw new Error(`Unknown social image: ${key}`);
  const url = `${SITE}/og/${key}.webp`;
  return {
    openGraph: [{ url, width: size[0], height: size[1], alt, type: "image/webp" }] as NonNullable<
      NonNullable<Metadata["openGraph"]>["images"]
    >,
    twitter: [url] as NonNullable<NonNullable<Metadata["twitter"]>["images"]>,
  };
}

const PAGE_TYPE = /WebPage|CollectionPage|ProfilePage|AboutPage|ContactPage|FAQPage/;

/**
 * Points a page's JSON-LD at its feature image (the same file as the OG card).
 * Updates an existing #primaryimage ImageObject, or adds one and links it from the page node;
 * BlogPosting nodes get it as `image`. The schema object itself is not modified.
 */
export function withFeatureImage<T>(schema: T, key: string, caption?: string): T {
  const size = SIZES[key];
  const graph = (schema as { "@graph"?: unknown })?.["@graph"];
  if (!size) return schema;

  // Standalone page object (not a @graph): attach the image directly.
  if (!Array.isArray(graph)) {
    const single = schema as Record<string, any>;
    const types = ([] as string[]).concat(single?.["@type"] ?? []);
    if (!types.some((t) => PAGE_TYPE.test(t))) return schema;
    const imageUrl = `${SITE}/og/${key}.webp`;
    return {
      ...single,
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: imageUrl,
        contentUrl: imageUrl,
        width: size[0],
        height: size[1],
        ...(caption && { caption }),
      },
      thumbnailUrl: imageUrl,
    } as T;
  }

  const isArticle = key.startsWith("blog-") && key !== "blog-hub-page";
  const url = `${SITE}/og/${key}.webp`;
  const next = structuredClone(schema) as { "@graph": Record<string, any>[] };
  const nodes = next["@graph"];
  const typesOf = (n: Record<string, any>) => ([] as string[]).concat(n["@type"] ?? []);

  const existing = nodes.find((n) => typesOf(n).includes("ImageObject") && String(n["@id"] ?? "").endsWith("#primaryimage"));
  if (existing) {
    Object.assign(existing, { url, contentUrl: url, width: size[0], height: size[1] });
  } else if (!isArticle) {
    const page = nodes.find((n) => typesOf(n).some((t) => PAGE_TYPE.test(t)));
    if (page) {
      const pageUrl = String(page.url ?? String(page["@id"] ?? "").split("#")[0]) || `${SITE}/`;
      const id = `${pageUrl}#primaryimage`;
      nodes.push({
        "@type": "ImageObject",
        "@id": id,
        url,
        contentUrl: url,
        width: size[0],
        height: size[1],
        ...(caption && { caption }),
      });
      page.primaryImageOfPage = { "@id": id };
      page.thumbnailUrl = url;
    }
  }

  if (isArticle) {
    for (const n of nodes) if (typesOf(n).some((t) => /BlogPosting|Article/.test(t))) n.image = url;
  }
  return next as T;
}
