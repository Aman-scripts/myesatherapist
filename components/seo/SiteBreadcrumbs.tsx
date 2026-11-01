"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { serializeLd } from "@/lib/site";

const CANONICAL_ORIGIN = "https://myesatherapist.com";

const LABELS: Record<string, string> = {
  "about-us": "About Us",
  "contact-us": "Contact Us",
  "esa-doctors": "Our Therapists",
  "esa-letter-online": "ESA Letter Online",
  "esa-letter-for-housing": "ESA Letter for Housing",
  "esa-letter-renewal": "ESA Letter Renewal",
  "psd-letter": "PSD Letter",
  pricing: "ESA Letter Cost",
  reviews: "Customer Reviews",
  "video-testimonials": "Video Testimonials",
  "frequently-asked-questions": "FAQs",
  contributors: "Contributors",
  blog: "Blog",
  "esa-guide": "ESA Guide",
  "esa-training": "ESA Training",
  "qualifying-conditions": "Qualifying Conditions",
  "esa-laws": "ESA Laws",
  state: "ESA Letter by State",
  author: "Authors",
  "privacy-policy": "Privacy Policy",
  "terms-of-use": "Terms of Use",
  "refund-policy": "Refund Policy",
  "hipaa-compliance": "HIPAA Compliance",
  disclaimer: "Medical Disclaimer",
  "editorial-policy": "Editorial Policy",
  "accessibility-statement": "Accessibility Statement",
  "consent-for-telehealth": "Consent for Telehealth",
  "legal-reviewer": "Legal Reviewer",
  "max-phillips": "Max Phillips",
  "awais-arshad": "Awais Arshad",
};

const OWN_BREADCRUMB = [
  /^\/blog\/[^/]+\/[^/]+\/?$/,
  /^\/policies\//,
  /^\/privacy-policy\/?$/,
  /^\/terms-of-use\/?$/,
  /^\/refund-policy\/?$/,
  /^\/hipaa-compliance\/?$/,
  /^\/disclaimer\/?$/,
  /^\/editorial-policy\/?$/,
  /^\/accessibility-statement\/?$/,
  /^\/consent-for-telehealth\/?$/,
];

function titleCase(segment: string) {
  return segment
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function labelFor(segment: string) {
  if (
    segment.startsWith("esa-letter-") &&
    !["esa-letter-online", "esa-letter-for-housing", "esa-letter-renewal"].includes(segment)
  ) {
    return titleCase(segment.slice("esa-letter-".length));
  }
  return LABELS[segment] ?? titleCase(segment);
}

export function SiteBreadcrumbs() {
  const pathname = usePathname() || "/";
  if (pathname === "/") return null;
  if (OWN_BREADCRUMB.some((pattern) => pattern.test(pathname))) return null;

  const segments = pathname.split("/").filter(Boolean);
  const crumbs = [{ name: "Home", path: "/" }];

  const isState = segments.length === 1 && segments[0].startsWith("esa-letter-") && labelFor(segments[0]) !== LABELS[segments[0]];
  if (isState) crumbs.push({ name: "ESA Letter by State", path: "/state/" });

  segments.forEach((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join("/")}/`;
    crumbs.push({ name: labelFor(segment), path });
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${CANONICAL_ORIGIN}${crumb.path === "/" ? "/" : crumb.path}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="bg-background border-b border-black/5">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeLd(schema) }} />
      <ol className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] py-2.5 flex flex-wrap items-center gap-2 body-small text-body-text">
        {crumbs.map((crumb, index) => {
          const current = index === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden="true" className="text-body-text/60">
                  /
                </span>
              )}
              {current ? (
                <span aria-current="page" className="text-primary font-semibold">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.path} className="hover:text-primary transition-colors">
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
