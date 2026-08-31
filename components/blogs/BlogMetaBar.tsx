"use client";

import React from "react";
import Image from "next/image";

export function BlogMetaBar() {
  return (
    <div className="w-full max-w-[1069px] mx-auto bg-white rounded-[22px] shadow-[0px_1px_4px_rgba(0,0,0,0.15)] border border-[#EAE5DC]/60 px-4 py-4 sm:p-6 lg:py-[22px] lg:px-[27px] relative z-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-0">
        
        {/* 1. Written By */}
        <div className="flex items-center gap-3 sm:gap-3.5 lg:gap-4 flex-1 min-w-0 justify-start w-full md:w-auto md:pr-2 lg:pr-4">
          <div className="w-[56px] h-[56px] sm:w-[68px] sm:h-[68px] lg:w-[77px] lg:h-[77px] rounded-full overflow-hidden shrink-0 relative shadow-xs">
            <Image
              src="/blogs_trustbar-author.png"
              alt="Allyson Valley"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start min-w-0">
            <span className="font-sans font-semibold text-sm sm:text-base lg:text-[18px] text-[#2E5A66] leading-snug whitespace-nowrap">
              Written by
            </span>
            <a
              href="#about-the-author"
              className="font-sans font-semibold text-xs sm:text-sm lg:text-[14px] text-transparent bg-clip-text bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] underline hover:opacity-80 transition-opacity truncate max-w-full"
            >
              Allyson Valley
            </a>
            <span className="font-sans font-medium text-[11px] sm:text-xs lg:text-[12px] text-[#5F6B6F] leading-tight whitespace-nowrap">
              Licensed Clinical Social Worker
            </span>
          </div>
        </div>

        {/* Divider 1 */}
        <div className="hidden md:block w-[1px] h-[57px] bg-[#5F6B6F]/25 shrink-0 mx-2 lg:mx-3 xl:mx-4" />

        {/* 2. Published */}
        <div className="flex items-center gap-3 sm:gap-3.5 lg:gap-4 flex-1 min-w-0 justify-start w-full md:w-auto md:px-2 lg:px-4">
          <div className="w-[56px] h-[56px] sm:w-[68px] sm:h-[68px] lg:w-[77px] lg:h-[77px] shrink-0 relative flex items-center justify-center">
            <Image
              src="/blogs_trustbar-publish.png"
              alt="Calendar Icon"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-start min-w-0">
            <span className="font-sans font-semibold text-sm sm:text-base lg:text-[18px] text-[#2E5A66] leading-snug whitespace-nowrap">
              Published
            </span>
            <span className="font-sans font-semibold text-xs sm:text-sm lg:text-[14px] text-transparent bg-clip-text bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] whitespace-nowrap">
              June 19, 2026
            </span>
            <span className="font-sans font-medium text-[11px] sm:text-xs lg:text-[12px] text-[#5F6B6F] leading-tight whitespace-nowrap">
              Last updated: June 19, 2026
            </span>
          </div>
        </div>

        {/* Divider 2 */}
        <div className="hidden md:block w-[1px] h-[57px] bg-[#5F6B6F]/25 shrink-0 mx-2 lg:mx-3 xl:mx-4" />

        {/* 3. Medically Reviewed By */}
        <div className="flex items-center gap-3 sm:gap-3.5 lg:gap-4 flex-[1.15] min-w-0 justify-start w-full md:w-auto md:pl-2 lg:pl-4">
          <div className="w-[56px] h-[56px] sm:w-[68px] sm:h-[68px] lg:w-[77px] lg:h-[77px] rounded-full overflow-hidden shrink-0 relative shadow-xs">
            <Image
              src="/blogs_medical_reviewer.png"
              alt="Max Phillips"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start min-w-0">
            <span className="font-sans font-semibold text-sm sm:text-base lg:text-[18px] text-[#2E5A66] leading-snug whitespace-nowrap">
              Medically Reviewed by
            </span>
            <span className="font-sans font-semibold text-xs sm:text-sm lg:text-[14px] text-transparent bg-clip-text bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] underline whitespace-nowrap">
              Max Phillips
            </span>
            <span className="font-sans font-medium text-[11px] sm:text-xs lg:text-[12px] text-[#5F6B6F] leading-tight whitespace-nowrap">
              MSW, LCSW
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
