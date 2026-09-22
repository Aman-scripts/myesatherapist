"use client";

import React from "react";
import Image from "next/image";

export function VideoTestimonialsTrustBar() {
  return (
    <div className="w-full max-w-[933px] mx-auto bg-white shadow-[0px_2px_8px_rgba(0,0,0,0.12)] rounded-[22px] py-3.5 sm:py-4 lg:py-[20px] px-4 sm:px-7 border border-black/[0.04]">
      <div className="flex flex-col sm:flex-row items-center justify-between divide-y sm:divide-y-0 sm:divide-x divide-[#5F6B6F]/20 gap-3 sm:gap-0">
        
        {/* Item 1: 624+ Happy Clients */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 w-full sm:w-1/3 py-1.5 sm:py-0 sm:px-4">
          <div className="relative w-[65px] h-[60px] sm:w-[77px] sm:h-[71px] shrink-0">
            <Image
            quality={90}
              src="/video_testimonial/video_testimonial-trustsection-happyclient.webp"
              alt="Happy Clients"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="font-heading font-bold text-xl sm:text-[20px] leading-[26px] text-[#2E5A66]">
              624+
            </span>
            <span className="font-sans font-semibold text-xs leading-[22px] text-[#5F6B6F] whitespace-nowrap">
              Happy Clients
            </span>
          </div>
        </div>

        {/* Item 2: 4.9/5 Average Rating */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 w-full sm:w-1/3 py-1.5 sm:py-0 sm:px-4">
          <div className="relative w-[65px] h-[54px] sm:w-[77px] sm:h-[64px] shrink-0">
            <Image
            quality={90}
              src="/video_testimonial/video_testimonial-trustsection-rating.webp"
              alt="Average Rating"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="font-heading font-bold text-xl sm:text-[20px] leading-[26px] text-[#2E5A66]">
              4.9/5
            </span>
            <span className="font-sans font-semibold text-xs leading-[22px] text-[#5F6B6F] whitespace-nowrap">
              Average Rating
            </span>
          </div>
        </div>

        {/* Item 3: 100% Acceptance Rate */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 w-full sm:w-1/3 py-1.5 sm:py-0 sm:px-4">
          <div className="relative w-[65px] h-[65px] sm:w-[77px] sm:h-[77px] shrink-0">
            <Image
            quality={90}
              src="/video_testimonial/video_testimonial-trustsection-acceptancerate.webp"
              alt="Acceptance Rate"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="font-heading font-bold text-xl sm:text-[20px] leading-[26px] text-[#2E5A66]">
              100%
            </span>
            <span className="font-sans font-semibold text-xs leading-[22px] text-[#5F6B6F] whitespace-nowrap">
              Acceptance Rate
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
