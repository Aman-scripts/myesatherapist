"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { serializeLd } from "@/lib/site";
import { cn } from "@/lib/utils";

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
  "telehealth-consent": "Consent for Telehealth",
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
  /^\/telehealth-consent\/?$/,
];

function titleCase(segment: string) {
  return segment
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const LETTER_PRODUCTS = ["esa-letter-online", "esa-letter-for-housing", "esa-letter-renewal"];

function isStateLetter(segment: string) {
  return segment.startsWith("esa-letter-") && !LETTER_PRODUCTS.includes(segment);
}

function labelFor(segment: string) {
  if (isStateLetter(segment)) {
    return titleCase(segment.slice("esa-letter-".length));
  }
  return LABELS[segment] ?? titleCase(segment);
}

export function SiteBreadcrumbs({
  className,
  includeSchema = true,
}: {
  className?: string;
  includeSchema?: boolean;
}) {
  const pathname = usePathname() || "/";
  if (pathname === "/") return null;
  if (OWN_BREADCRUMB.some((pattern) => pattern.test(pathname))) return null;

  const segments = pathname.split("/").filter(Boolean);
  const crumbs = [{ name: "Home", path: "/" }];

  const isState = segments.length === 1 && isStateLetter(segments[0]);
  if (isState) {
    crumbs.push({ name: "ESA by State", path: "/state/" });
    crumbs.push({ name: `ESA Letter ${labelFor(segments[0])}`, path: `/${segments[0]}/` });
  } else {
    segments.forEach((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join("/")}/`;
      crumbs.push({ name: labelFor(segment), path });
    });
  }

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
    <nav aria-label="Breadcrumb" className={cn("pointer-events-none", className)}>
      {includeSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeLd(schema) }} />
      )}
      <ol className="pointer-events-auto flex flex-wrap items-center gap-x-2 gap-y-1 font-manrope text-[15px] leading-[22px]">
        {crumbs.map((crumb, index) => {
          const current = index === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-primary/45" strokeWidth={2.25} />
              )}
              {current ? (
                <span aria-current="page" className="font-bold text-gold-600">
                  {crumb.name}
                </span>
              ) : (
                <Link prefetch={false} href={crumb.path} className="font-medium text-primary transition-colors hover:text-[#1D6E72]">
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
