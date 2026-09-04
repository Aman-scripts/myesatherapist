"use client";

import React from "react";
import Image from "next/image";

interface StateReviewerBannerProps {
  reviewerName?: string;
  updatedDate?: string;
  reviewerImage?: string;
}

export function StateReviewerBanner({
  reviewerName = "Dr. Nicole",
  updatedDate = "May 12, 2026",
  reviewerImage = "/blogs/dr-nicole-reviewer.jpg",
}: StateReviewerBannerProps) {
  return (
    <section className="w-full bg-[#FAF7F2] pt-8 sm:pt-10 lg:pt-14 pb-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[850px] mx-auto">
        <div
          className="w-full rounded-[20px] py-5 sm:py-[24px] px-6 sm:px-[40px] md:px-[60px] lg:px-[113px] shadow-[0px_4px_25px_rgba(26,61,79,0.12)] flex items-center justify-center sm:justify-start"
          style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 lg:gap-[40px] text-center sm:text-left">
            {/* Avatar with white 4px border */}
            <div className="relative w-[76px] h-[76px] sm:w-[89px] sm:h-[89px] rounded-full border-[3.5px] sm:border-[4px] border-[#FFFFFF] overflow-hidden shrink-0 shadow-sm">
              <Image
                src={reviewerImage}
                alt={`Content reviewed by ${reviewerName}`}
                fill
                priority
                unoptimized
                className="object-cover object-center"
                sizes="89px"
              />
            </div>

            {/* Text details */}
            <div className="flex flex-col items-center sm:items-start space-y-1 sm:space-y-1.5">
              <h3 className="font-heading font-bold text-xl sm:text-[22px] lg:text-[24px] leading-tight sm:leading-[32px] text-[#FAF7F2]">
                Content reviewed by {reviewerName}
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
