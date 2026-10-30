"use client";

import React from "react";
import Image from "next/image";

const ITEMS = [
  {
    src: "/video_testimonial/video_testimonial-trustsection-happyclient.webp",
    alt: "Happy Clients",
    value: "624+",
    label: "Happy Clients",
    iconClass: "w-[72px] h-[64px] sm:w-[88px] sm:h-[76px]",
  },
  {
    src: "/video_testimonial/video_testimonial-trustsection-rating.webp",
    alt: "Average Rating",
    value: "4.9/5",
    label: "Average Rating",
    iconClass: "w-[72px] h-[60px] sm:w-[88px] sm:h-[72px]",
  },
  {
    src: "/video_testimonial/video_testimonial-trustsection-acceptancerate.webp",
    alt: "Acceptance Rate",
    value: "100%",
    label: "Acceptance Rate",
    iconClass: "w-[68px] h-[68px] sm:w-[84px] sm:h-[84px]",
  },
] as const;

export function VideoTestimonialsTrustBar() {
  return (
    <div className="w-full max-w-[980px] mx-auto bg-white shadow-[0px_8px_24px_rgba(26,61,79,0.08)] rounded-[24px] py-4 sm:py-5 px-4 sm:px-8">
      <div className="flex flex-col sm:flex-row items-center">
        {ITEMS.map((item, index) => (
          <div key={item.label} className="flex items-center w-full sm:flex-1 min-w-0">
            {index > 0 && (
              <div className="hidden sm:block w-px h-16 bg-[#E4DFD6] shrink-0" />
            )}
            <div className="flex items-center justify-center gap-3 sm:gap-4 w-full py-2 sm:py-0 sm:px-5">
              <div className={`relative shrink-0 ${item.iconClass}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="heading-h2 text-[#1A3D4F]">
                  {item.value}
                </span>
                <span className="font-sans font-medium text-[18px] leading-[28px] text-[#5F6B6F] whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
