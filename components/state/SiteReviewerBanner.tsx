"use client";

import { usePathname } from "next/navigation";
import { StateReviewerBanner } from "@/components/state/StateReviewerBanner";

/** Individual articles under /blog/. Listing pages such as /blog/ still show the reviewer. */
const BLOG_ARTICLE = /^\/blog\/(?:esa-guide|esa-training|qualifying-conditions)\/[^/]+\/?$/;
const PROFILE_PAGE = /^\/(?:contributors\/[^/]+|legal-reviewer)\/?$/;
const DOCTORS_PAGE = /^\/esa-doctors(?:\/[^/]+)?\/?$/;

export function SiteReviewerBanner() {
  const pathname = usePathname() || "";
  if (BLOG_ARTICLE.test(pathname) || DOCTORS_PAGE.test(pathname)) return null;
  return <StateReviewerBanner variant={PROFILE_PAGE.test(pathname) ? "profile" : "default"} />;
}
