"use client";

import React from "react";
import Image from "next/image";

export function VideoTestimonialsTrustBar() {
  return (
    <section className="relative w-full bg-[#FAF7F2] z-30 pointer-events-none">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Overlapping Card matching Figma Frame 1000011968 & Screenshot 1 */}
        <div className="relative -mt-10 sm:-mt-12 lg:-mt-[64px] mb-12 sm:mb-16 lg:mb-20 max-w-[933px] mx-auto bg-white shadow-[0px_1px_4px_rgba(0,0,0,0.15)] rounded-[22px] py-4 sm:py-5 lg:py-[22px] px-4 sm:px-7 pointer-events-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between divide-y sm:divide-y-0 sm:divide-x divide-[#5F6B6F]/25 gap-4 sm:gap-0">
            
            {/* Item 1: 624+ Happy Clients */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 w-full sm:w-1/3 py-2 sm:py-0 sm:px-4">
              <div className="relative w-[70px] h-[64px] sm:w-[77px] sm:h-[71px] shrink-0">
                <Image
                  src="/video_testimonial/video_testimonial-trustsection-happyclient.png"
                  alt="Happy Clients"
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-heading font-bold text-xl sm:text-[20px] leading-[28px] text-[#2E5A66]">
                  624+
                </span>
                <span className="font-sans font-semibold text-xs leading-[26px] text-[#5F6B6F] whitespace-nowrap">
                  Happy Clients
                </span>
              </div>
            </div>

            {/* Item 2: 4.9/5 Average Rating */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 w-full sm:w-1/3 py-2 sm:py-0 sm:px-4">
              <div className="relative w-[70px] h-[64px] sm:w-[77px] sm:h-[64px] shrink-0">
                <Image
                  src="/video_testimonial/video_testimonial-trustsection-rating.png"
                  alt="Average Rating"
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-heading font-bold text-xl sm:text-[20px] leading-[28px] text-[#2E5A66]">
                  4.9/5
                </span>
                <span className="font-sans font-semibold text-xs leading-[26px] text-[#5F6B6F] whitespace-nowrap">
                  Average Rating
                </span>
              </div>
            </div>

            {/* Item 3: 100% Acceptance Rate */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 w-full sm:w-1/3 py-2 sm:py-0 sm:px-4">
              <div className="relative w-[70px] h-[64px] sm:w-[77px] sm:h-[77px] shrink-0">
                <Image
                  src="/video_testimonial/video_testimonial-trustsection-acceptancerate.png"
                  alt="Acceptance Rate"
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-heading font-bold text-xl sm:text-[20px] leading-[28px] text-[#2E5A66]">
                  100%
                </span>
                <span className="font-sans font-semibold text-xs leading-[26px] text-[#5F6B6F] whitespace-nowrap">
                  Acceptance Rate
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
