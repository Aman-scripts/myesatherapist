"use client";

import React from "react";
import Image from "next/image";

export function BlogMetaBar() {
  return (
    <div className="w-full max-w-[360px] sm:max-w-[420px] md:max-w-[1069px] mx-auto bg-white rounded-[22px] sm:rounded-[24px] shadow-[0px_2px_10px_rgba(0,0,0,0.06)] border border-[#EAE5DC] p-5 sm:p-6 md:py-3.5 md:px-4 lg:py-5 lg:px-6 xl:py-[22px] xl:px-[27px] relative z-20">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-5 md:gap-1 lg:gap-2">
        
        {/* 1. Written By */}
        <div className="flex items-center gap-3.5 sm:gap-4 md:gap-2.5 lg:gap-3.5 flex-1 min-w-0 justify-start w-full md:w-auto">
          <div className="w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] md:w-[46px] md:h-[46px] lg:w-[62px] lg:h-[62px] xl:w-[74px] xl:h-[74px] rounded-full overflow-hidden shrink-0 relative shadow-xs">
            <Image
              src="/blogs_trustbar-author.png"
              alt="Allyson Valley"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start min-w-0">
            <span className="font-sans font-semibold text-sm sm:text-base md:text-[13px] lg:text-[16px] xl:text-[18px] text-[#2E5A66] leading-tight whitespace-nowrap">
              Written by
            </span>
            <a
              href="#about-the-author"
              className="font-sans font-semibold text-xs sm:text-sm md:text-[12px] lg:text-[13px] xl:text-[14px] text-transparent bg-clip-text bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] underline hover:opacity-80 transition-opacity whitespace-nowrap mt-0.5"
            >
              Allyson Valley
            </a>
            <span className="font-sans font-medium text-[11px] sm:text-xs md:text-[10px] lg:text-[11px] xl:text-[12px] text-[#5F6B6F] leading-tight whitespace-nowrap mt-0.5">
              Licensed Clinical Social Worker
            </span>
          </div>
        </div>

        {/* Divider 1 */}
        <div className="hidden md:block w-[1px] h-[40px] lg:h-[50px] xl:h-[57px] bg-[#5F6B6F]/20 shrink-0 mx-1 md:mx-1.5 lg:mx-3" />

        {/* 2. Published */}
        <div className="flex items-center gap-3.5 sm:gap-4 md:gap-2.5 lg:gap-3.5 flex-1 min-w-0 justify-start w-full md:w-auto">
          <div className="w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] md:w-[46px] md:h-[46px] lg:w-[62px] lg:h-[62px] xl:w-[74px] xl:h-[74px] shrink-0 relative flex items-center justify-center">
            <Image
              src="/blogs_trustbar-publish.png"
              alt="Calendar Icon"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-start min-w-0">
            <span className="font-sans font-semibold text-sm sm:text-base md:text-[13px] lg:text-[16px] xl:text-[18px] text-[#2E5A66] leading-tight whitespace-nowrap">
              Published
            </span>
            <span className="font-sans font-semibold text-xs sm:text-sm md:text-[12px] lg:text-[13px] xl:text-[14px] text-transparent bg-clip-text bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] whitespace-nowrap mt-0.5">
              June 19, 2026
            </span>
            <span className="font-sans font-medium text-[11px] sm:text-xs md:text-[10px] lg:text-[11px] xl:text-[12px] text-[#5F6B6F] leading-tight whitespace-nowrap mt-0.5">
              Last updated: June 19, 2026
            </span>
          </div>
        </div>

        {/* Divider 2 */}
        <div className="hidden md:block w-[1px] h-[40px] lg:h-[50px] xl:h-[57px] bg-[#5F6B6F]/20 shrink-0 mx-1 md:mx-1.5 lg:mx-3" />

        {/* 3. Medically Reviewed By */}
        <div className="flex items-center gap-3.5 sm:gap-4 md:gap-2.5 lg:gap-3.5 flex-1 min-w-0 justify-start w-full md:w-auto">
          <div className="w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] md:w-[46px] md:h-[46px] lg:w-[62px] lg:h-[62px] xl:w-[74px] xl:h-[74px] rounded-full overflow-hidden shrink-0 relative shadow-xs">
            <Image
              src="/blogs_medical_reviewer.png"
              alt="Max Phillips"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start min-w-0">
            <span className="font-sans font-semibold text-sm sm:text-base md:text-[13px] lg:text-[16px] xl:text-[18px] text-[#2E5A66] leading-tight whitespace-nowrap">
              Medically Reviewed by
            </span>
            <span className="font-sans font-semibold text-xs sm:text-sm md:text-[12px] lg:text-[13px] xl:text-[14px] text-transparent bg-clip-text bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] underline whitespace-nowrap mt-0.5">
              Max Phillips
            </span>
            <span className="font-sans font-medium text-[11px] sm:text-xs md:text-[10px] lg:text-[11px] xl:text-[12px] text-[#5F6B6F] leading-tight whitespace-nowrap mt-0.5">
              MSW, LCSW
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
