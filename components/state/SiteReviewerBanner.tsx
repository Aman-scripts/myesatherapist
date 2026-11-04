"use client";

import { usePathname } from "next/navigation";
import { StateReviewerBanner } from "@/components/state/StateReviewerBanner";

/** Individual articles under /blog/. Listing pages such as /blog/ still show the reviewer. */
const BLOG_ARTICLE = /^\/blog\/(?:esa-guide|esa-training|qualifying-conditions)\/[^/]+\/?$/;
const CONTRIBUTOR_PROFILE = /^\/contributors\/[^/]+\/?$/;
const PROFILE_PAGE = /^\/legal-reviewer\/?$/;
const DOCTORS_PAGE = /^\/esa-doctors(?:\/[^/]+)?\/?$/;
const ESA_LAWS_PAGE = /^\/esa-laws(?:\/alabama)?\/?$/;

export function SiteReviewerBanner() {
  const pathname = usePathname() || "";
  if (BLOG_ARTICLE.test(pathname) || DOCTORS_PAGE.test(pathname) || CONTRIBUTOR_PROFILE.test(pathname)) return null;

  if (ESA_LAWS_PAGE.test(pathname)) {
    return (
      <StateReviewerBanner
        variant="default"
        reviewerName="Awais Arshad"
        reviewLabel="Legally Reviewed by"
        reviewerImage="/legal-reviewer/legal-reviwer.webp"
        reviewerHref="/contributors/awais-arshad/"
        reviewerLinkedin="https://www.linkedin.com/in/awais-arshad-a51b31113/"
      />
    );
  }

  return <StateReviewerBanner variant={PROFILE_PAGE.test(pathname) ? "profile" : "default"} />;
}
