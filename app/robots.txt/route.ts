import { headers } from "next/headers";
import { SITE_URL } from "@/lib/site";

export const revalidate = 3600;

export async function GET() {
  const host = (await headers()).get("host") || "";
  const staging = host.endsWith(".vercel.app");
  const body = staging
    ? ["User-agent: *", "Disallow: /", ""].join("\n")
    : [
        "User-agent: *",
        "Allow: /",
        "Disallow: /api/",
        "",
        `Host: ${SITE_URL}`,
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
