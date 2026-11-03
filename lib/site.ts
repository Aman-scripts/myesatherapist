/**
 * Origin used for absolute URLs, including metadata and featured images.
 * Override with NEXT_PUBLIC_SITE_URL only for a temporary preview host.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://myesatherapist.com"
).replace(/\/$/, "");

export function assetUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

/** JSON-LD string with featured-image hosts pointed at SITE_URL. Emails are left unchanged. */
export function serializeLd(schema: unknown) {
  return JSON.stringify(schema)
    .replaceAll(
      "https://myesatherapist.com/images/logo/my-esa-therapist-logo.webp",
      `${SITE_URL}/common/myesa-logo.svg`,
    )
    .replaceAll(
      "https://myesatherapist.com/images/",
      `${SITE_URL}/images/`,
    );
}
