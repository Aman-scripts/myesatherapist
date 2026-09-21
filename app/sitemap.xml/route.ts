import { STATES_DATA } from "@/data/statesData";
import { BLOG_POSTS } from "@/data/blogsData";
import { AUTHORS_DATA } from "@/data/authorsData";
import { DOCTORS_DATA } from "@/data/doctorsData";

const SITE_URL = "https://myesatherapist.com";

// Regenerate at most once an hour; the list itself is built from the site's data files.
export const revalidate = 3600;

type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

interface SitemapEntry {
  path: string;
  changefreq: ChangeFreq;
  priority: number;
  lastmod?: Date;
}

function parseDate(value?: string): Date | undefined {
  if (!value) return undefined;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? undefined : d;
}

function startOfDayUtc(d: Date): Date {
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
}

function absolute(pathOrUrl: string): string {
  if (pathOrUrl.startsWith("http")) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [
    { path: "/", changefreq: "weekly", priority: 1.0 },

    // Core service pages
    { path: "/esa-letter-online/", changefreq: "monthly", priority: 0.9 },
    { path: "/esa-letter-for-housing/", changefreq: "monthly", priority: 0.9 },
    { path: "/psd-letter/", changefreq: "monthly", priority: 0.9 },
    { path: "/pricing/", changefreq: "monthly", priority: 0.9 },
    { path: "/esa-letter-renewal/", changefreq: "monthly", priority: 0.8 },

    // Company pages
    { path: "/about-us/", changefreq: "monthly", priority: 0.6 },
    { path: "/contact-us/", changefreq: "monthly", priority: 0.6 },
    { path: "/reviews/", changefreq: "monthly", priority: 0.6 },
    { path: "/video-testimonials/", changefreq: "monthly", priority: 0.6 },
    { path: "/frequently-asked-questions/", changefreq: "monthly", priority: 0.6 },
    { path: "/contributors/", changefreq: "monthly", priority: 0.6 },
    { path: "/contributors/max-phillips/", changefreq: "monthly", priority: 0.5 },
    { path: "/contributors/awais-arshad/", changefreq: "monthly", priority: 0.5 },
    { path: "/esa-doctors/", changefreq: "weekly", priority: 0.7 },

    // Resources
    { path: "/blog/", changefreq: "weekly", priority: 0.7 },
    { path: "/blog/esa-guide/", changefreq: "monthly", priority: 0.6 },
    { path: "/blog/esa-training/", changefreq: "monthly", priority: 0.6 },
    { path: "/blog/qualifying-conditions/", changefreq: "monthly", priority: 0.6 },
    { path: "/esa-laws/", changefreq: "weekly", priority: 0.7 },
    { path: "/esa-laws/alabama/", changefreq: "monthly", priority: 0.5 },
    { path: "/state/", changefreq: "weekly", priority: 0.7 },

    // Policies
    { path: "/privacy-policy/", changefreq: "yearly", priority: 0.3 },
    { path: "/terms-of-use/", changefreq: "yearly", priority: 0.3 },
    { path: "/refund-policy/", changefreq: "yearly", priority: 0.3 },
    { path: "/hipaa-compliance/", changefreq: "yearly", priority: 0.3 },
  ];

  // State landing pages
  for (const state of Object.values(STATES_DATA)) {
    entries.push({ path: `/esa-letter-${state.slug}/`, changefreq: "monthly", priority: 0.8 });
  }

  // Blog articles
  for (const post of BLOG_POSTS) {
    entries.push({
      path: post.canonicalUrl || post.url,
      changefreq: "monthly",
      priority: 0.6,
      lastmod: parseDate(post.lastUpdated),
    });
  }

  // Authors and doctors
  for (const author of AUTHORS_DATA) {
    entries.push({ path: `/author/${author.slug}/`, changefreq: "monthly", priority: 0.5 });
  }
  for (const doctor of DOCTORS_DATA) {
    entries.push({ path: `/esa-doctors/${doctor.slug}/`, changefreq: "monthly", priority: 0.5 });
  }

  // De-duplicate by absolute URL, keeping the first occurrence
  const seen = new Set<string>();
  return entries.filter((e) => {
    const key = absolute(e.path);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function GET() {
  const now = new Date();

  const urls = buildEntries()
    .map((e) => {
      const lastmod = startOfDayUtc(e.lastmod ?? now).toISOString();
      return [
        "  <url>",
        `    <loc>${escapeXml(absolute(e.path))}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${e.changefreq}</changefreq>`,
        `    <priority>${e.priority.toFixed(1)}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
