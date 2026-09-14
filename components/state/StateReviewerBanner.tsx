"use client";

import React from "react";
import Image from "next/image";

interface StateReviewerBannerProps {
  reviewerName?: string;
  updatedDate?: string;
  reviewerImage?: string;
  reviewerLinkedin?: string;
  className?: string;
}

export function StateReviewerBanner({
  reviewerName = "Max Phillips",
  updatedDate = "May 12, 2026",
  reviewerImage = "/author/max-phill.webp",
  reviewerLinkedin = "https://www.linkedin.com/in/max-phillips-883485a5/",
  className = "",
}: StateReviewerBannerProps) {
  return (
    <section className={`w-full bg-[#FAF7F2] py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-[850px] mx-auto">
        <div
          className="w-full rounded-[20px] py-5 sm:py-[24px] px-6 sm:px-[40px] md:px-[60px] lg:px-[113px] shadow-[0px_4px_25px_rgba(26,61,79,0.12)] flex items-center justify-center sm:justify-start"
          style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 lg:gap-[40px] text-center sm:text-left">
            {/* Avatar with white 4px border */}
            <a
              href={reviewerLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[76px] h-[76px] sm:w-[89px] sm:h-[89px] rounded-full border-[3.5px] sm:border-[4px] border-[#FFFFFF] overflow-hidden shrink-0 shadow-sm hover:opacity-95 transition-opacity block cursor-pointer"
            >
              <Image
                src={reviewerImage}
                alt={`Content reviewed by ${reviewerName}`}
                fill
                priority
                unoptimized
                className="object-cover object-center"
                sizes="89px"
              />
            </a>

            {/* Text details */}
            <div className="flex flex-col items-center sm:items-start space-y-1 sm:space-y-1.5">
              <h3 className="font-heading font-bold text-xl sm:text-[22px] lg:text-[24px] leading-tight sm:leading-[32px] text-[#FAF7F2] flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1">
                <span>Content reviewed by</span>
                {reviewerLinkedin ? (
                  <a
                    href={reviewerLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 hover:text-[#E8B92C] transition-colors cursor-pointer"
                  >
                    <span className="group-hover:text-[#E8B92C] transition-colors">
                      {reviewerName}
                    </span>
                    <span className="w-5 h-5 rounded-full bg-[#E8B92C] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                      <svg className="w-3 h-3 text-[#1A3D4F]" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="4.98" cy="4.98" r="2.4" />
                        <rect x="2.8" y="9.5" width="4.4" height="12.5" rx="0.5" />
                        <path d="M10.5 9.5h4.2v1.8c.6-1.1 2-2.1 4.1-2.1 4.4 0 5.2 2.9 5.2 6.6v6.2h-4.4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6h-4.4V9.5z" />
                      </svg>
                    </span>
                  </a>
                ) : (
                  <span>{reviewerName}</span>
                )}
              </h3>
              <p className="font-sans font-semibold text-xs sm:text-[14px] leading-tight sm:leading-[26px] text-[#FAF7F2]">
                Last updated: {updatedDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
