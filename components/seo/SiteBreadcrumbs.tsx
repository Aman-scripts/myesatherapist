"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

const ACRONYMS = new Set(["esa", "psd", "hud", "faq", "hipaa", "adhd", "ptsd"]);

function titleCase(segment: string) {
  return segment
    .split("-")
    .filter(Boolean)
    .map((word) => {
      const lower = word.toLowerCase();
      if (ACRONYMS.has(lower)) return lower.toUpperCase();
      if (lower === "faqs") return "FAQs";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
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
  onDark = false,
}: {
  className?: string;
  includeSchema?: boolean;
  onDark?: boolean;
}) {
  const pathname = usePathname() || "/";
  if (pathname === "/") return null;
  if (OWN_BREADCRUMB.some((pattern) => pattern.test(pathname))) return null;

  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] === "blog" && segments.length > 2) {
    segments.pop();
  }
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
    <nav aria-label="Breadcrumb" className={cn("pointer-events-none flex w-full min-w-0 max-w-full overflow-hidden max-lg:justify-center max-lg:!self-center", className)}>
      {includeSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeLd(schema) }} />
      )}
      <ol className="pointer-events-auto no-scrollbar flex w-max min-w-0 max-w-full flex-nowrap items-center justify-center gap-x-1.5 overflow-x-auto font-manrope sm:gap-x-2 lg:w-auto lg:justify-start lg:overflow-visible">
        {crumbs.map((crumb, index) => {
          const current = index === crumbs.length - 1;
          return (
            <li
              key={crumb.path}
              className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-[14px]! leading-[22px]! sm:gap-3 sm:text-[16px]! sm:leading-[26px]!"
            >
              {index > 0 && (
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="currentColor"
                  aria-hidden="true"
                  className={cn(
                    "shrink-0",
                    onDark ? "text-primary/45 lg:text-background" : "text-body-text",
                  )}
                >
                  <path d="M2 1.5L6 4L2 6.5V1.5Z" />
                </svg>
              )}
              {current ? (
                <span aria-current="page" className="font-bold text-accent">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={crumb.path}
                  className={cn(
                    "font-medium transition-colors",
                    onDark
                      ? "text-primary hover:text-[#1D6E72] lg:text-[#FAF7F2]! lg:hover:text-white!"
                      : "text-primary hover:text-[#1D6E72]",
                  )}
                >
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
