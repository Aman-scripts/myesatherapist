

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface StateReviewerBannerProps {
  reviewerName?: string;
  updatedDate?: string;
  reviewerImage?: string;
  reviewerHref?: string;
  reviewerLinkedin?: string;
  className?: string;
  /** Profile pages have a 382px sidebar, so the card lines up with the article column. */
  variant?: "default" | "profile";
}

const REVIEWER_PROFILES: Record<string, { href: string; linkedin: string }> = {
  "Robert Staaf": {
    href: "/esa-doctors/robert-staaf/",
    linkedin: "https://www.linkedin.com/in/robert-staaf-b57b53333/",
  },
  "Max Phillips": {
    href: "/contributors/max-phillips/",
    linkedin: "https://www.linkedin.com/in/max-phillips-883485a5/",
  },
};

export function StateReviewerBanner({
  reviewerName = "Robert Staaf",
  updatedDate = "November 3, 2026",
  reviewerImage = "/images/doctors/robert-staff-dr.webp",
  reviewerHref,
  reviewerLinkedin,
  className = "",
  variant = "default",
}: StateReviewerBannerProps) {
  const reviewerProfile = REVIEWER_PROFILES[reviewerName];
  const profileHref = reviewerHref || reviewerProfile?.href;
  const linkedinHref = reviewerLinkedin || reviewerProfile?.linkedin;

  const profile = variant === "profile";

  return (
    <section
      className={
        profile
          ? `w-full bg-background px-4 pt-2 pb-10 sm:px-8 sm:pt-4 lg:px-0 lg:pl-[382px] lg:pb-14 ${className}`
          : `w-full bg-background pt-10 pb-6 sm:pb-4 lg:pb-2 px-4 sm:px-6 lg:px-8 ${className}`
      }
    >
      <div className={profile ? "w-full lg:max-w-[1055px] lg:px-[74px]" : "max-w-[850px] mx-auto"}>
        <div
          className={`w-full rounded-[20px] py-5 sm:py-[24px] shadow-[0px_4px_25px_rgba(26,61,79,0.12)] flex items-center justify-center sm:justify-start ${
            profile ? "px-6 sm:px-8 lg:px-10" : "px-6 sm:px-[40px] md:px-[60px] lg:px-[113px]"
          }`}
          style={{ background: "var(--color-gradient)" }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 lg:gap-[40px] text-center sm:text-left">
            {/* Avatar with white 4px border */}
            {profileHref ? (
              <Link
                prefetch={false}
                href={profileHref}
                aria-label={`${reviewerName} profile`}
                className="relative w-[76px] h-[76px] sm:w-[89px] sm:h-[89px] rounded-full border-[3.5px] sm:border-[4px] border-[#FFFFFF] overflow-hidden shrink-0 shadow-sm hover:opacity-95 transition-opacity block cursor-pointer"
              >
                <Image
                  quality={90}
                  loading="lazy"
                  src={reviewerImage}
                  alt={`Content reviewed by ${reviewerName}`}
                  fill
                  className="object-cover object-center"
                  sizes="89px"
                />
              </Link>
            ) : (
              <div className="relative w-[76px] h-[76px] sm:w-[89px] sm:h-[89px] rounded-full border-[3.5px] sm:border-[4px] border-[#FFFFFF] overflow-hidden shrink-0 shadow-sm">
                <Image
                  quality={90}
                  loading="lazy"
                  src={reviewerImage}
                  alt={`Content reviewed by ${reviewerName}`}
                  fill
                  className="object-cover object-center"
                  sizes="89px"
                />
              </div>
            )}

            {/* Text details */}
            <div className="flex flex-col items-center sm:items-start space-y-1 sm:space-y-1.5">
              <h3 className="font-heading font-bold text-xl sm:text-[22px] lg:text-[24px] leading-tight sm:leading-[32px] text-background flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1">
                <span>Content reviewed by</span>
                {profileHref ? (
                  <Link
                    prefetch={false}
                    href={profileHref}
                    className="text-accent hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    {reviewerName}
                  </Link>
                ) : (
                  <span className="text-accent">{reviewerName}</span>
                )}
                {linkedinHref ? (
                  <a
                    href={linkedinHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${reviewerName} LinkedIn profile`}
                    className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0 shadow-xs hover:scale-110 transition-transform"
                  >
                    <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <circle cx="4.98" cy="4.98" r="2.4" />
                      <rect x="2.8" y="9.5" width="4.4" height="12.5" rx="0.5" />
                      <path d="M10.5 9.5h4.2v1.8c.6-1.1 2-2.1 4.1-2.1 4.4 0 5.2 2.9 5.2 6.6v6.2h-4.4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6h-4.4V9.5z" />
                    </svg>
                  </a>
                ) : null}
              </h3>
              <p className="font-sans font-semibold text-xs sm:text-[14px] leading-tight sm:leading-[26px] text-background">
                Last updated: {updatedDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
