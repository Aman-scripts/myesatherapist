import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Alternate paths that should resolve to one canonical, trailing-slash URL. */
const ALIASES: Record<string, string> = {
  "/home": "/",
  "/home/": "/",
  "/about": "/about-us/",
  "/about/": "/about-us/",
  "/contact": "/contact-us/",
  "/contact/": "/contact-us/",
  "/faq": "/frequently-asked-questions/",
  "/faq/": "/frequently-asked-questions/",
  "/states": "/state/",
  "/states/": "/state/",
  "/esa-letter-by-state": "/state/",
  "/esa-letter-by-state/": "/state/",
  "/disclaimer-and-policies": "/disclaimer/",
  "/disclaimer-and-policies/": "/disclaimer/",
  "/consent-for-telehealth": "/telehealth-consent/",
  "/consent-for-telehealth/": "/telehealth-consent/",
};

function applyStagingRobots(response: NextResponse, request: NextRequest) {
  const host = request.headers.get("host") || "";
  if (host.endsWith(".vercel.app")) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const lower = pathname.toLowerCase();
  const target = ALIASES[lower] ?? (lower !== pathname ? lower : null);
  if (!target || target === pathname) {
    return applyStagingRobots(NextResponse.next(), request);
  }

  const url = request.nextUrl.clone();
  url.pathname = target;
  return applyStagingRobots(NextResponse.redirect(url, 308), request);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|api/|.*\\..*).*)"],
};
