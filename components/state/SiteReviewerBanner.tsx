"use client";

import { usePathname } from "next/navigation";
import { StateReviewerBanner } from "@/components/state/StateReviewerBanner";

/** Individual articles under /blog/. Listing pages such as /blog/ still show the reviewer. */
const BLOG_ARTICLE = /^\/blog\/(?:esa-guide|esa-training|qualifying-conditions)\/[^/]+\/?$/;

export function SiteReviewerBanner() {
  const pathname = usePathname() || "";
  if (BLOG_ARTICLE.test(pathname)) return null;
  return <StateReviewerBanner />;
}
