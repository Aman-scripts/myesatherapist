const SITE_URL = "https://myesatherapist.com";

// Paths crawlers should not visit.
const DISALLOW = ["/api/", "/admin/", "/_next/", "/private/"];

export const revalidate = 3600;

export function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    ...DISALLOW.map((path) => `Disallow: ${path}`),
    "",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
