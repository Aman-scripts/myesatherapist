"use client";

import { usePathname } from "next/navigation";
import { StateReviewerBanner } from "@/components/state/StateReviewerBanner";

/** Individual articles under /blog/. Listing pages such as /blog/ still show the reviewer. */
const BLOG_ARTICLE = /^\/blog\/(?:esa-guide|esa-training|qualifying-conditions)\/[^/]+\/?$/;
const CONTRIBUTOR_PROFILE = /^\/contributors\/[^/]+\/?$/;
const PROFILE_PAGE = /^\/legal-reviewer\/?$/;
const DOCTORS_PAGE = /^\/esa-doctors(?:\/[^/]+)?\/?$/;

export function SiteReviewerBanner() {
  const pathname = usePathname() || "";
  if (BLOG_ARTICLE.test(pathname) || DOCTORS_PAGE.test(pathname) || CONTRIBUTOR_PROFILE.test(pathname)) return null;
  return <StateReviewerBanner variant={PROFILE_PAGE.test(pathname) ? "profile" : "default"} />;
}
