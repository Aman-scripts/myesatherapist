/**
 * Origin used for absolute featured-image URLs.
 * Testing serves images from the Vercel host. Set NEXT_PUBLIC_SITE_URL to
 * https://myesatherapist.com when the site is on the main domain.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://myesatherapist.vercel.app"
).replace(/\/$/, "");

export function assetUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

/** JSON-LD string with featured-image hosts pointed at SITE_URL. Emails are left unchanged. */
export function serializeLd(schema: unknown) {
  return JSON.stringify(schema).replaceAll(
    "https://myesatherapist.com/images/",
    `${SITE_URL}/images/`,
  );
}
