"use client";

import React from "react";
import Image from "next/image";

export function BlogMetaBar() {
  return (
    <div className="w-full max-w-[360px] sm:max-w-[460px] md:max-w-[1069px] mx-auto bg-white rounded-[20px] sm:rounded-[24px] shadow-[0px_4px_20px_rgba(0,0,0,0.08)] border border-[#EAE5DC] p-4 sm:p-5 md:py-3.5 md:px-5 lg:py-5 lg:px-6 xl:py-[20px] xl:px-[28px] relative z-20">
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between divide-y divide-[#EAE5DC]/70 md:divide-y-0 gap-0 md:gap-2">
        
        {/* 1. Written By */}
        <div className="flex items-center gap-3.5 sm:gap-4 md:gap-2.5 lg:gap-3.5 flex-1 min-w-0 justify-start py-3 first:pt-0 md:py-0">
          <div className="w-[46px] h-[46px] sm:w-[54px] sm:h-[54px] md:w-[46px] md:h-[46px] lg:w-[60px] lg:h-[60px] xl:w-[68px] xl:h-[68px] rounded-full overflow-hidden shrink-0 relative shadow-xs border border-[#EAE5DC]/60">
            <Image
              src="/blogs_trustbar-author.png"
              alt="Allyson Valley"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start min-w-0">
            <span className="font-sans font-semibold text-xs sm:text-sm md:text-[13px] lg:text-[15px] xl:text-[16px] text-[#2E5A66] leading-tight">
              Written by
            </span>
            <a
              href="#about-the-author"
              className="font-sans font-bold text-xs sm:text-sm md:text-[13px] lg:text-[14px] xl:text-[15px] text-transparent bg-clip-text bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] underline hover:opacity-80 transition-opacity whitespace-nowrap mt-0.5"
            >
              Allyson Valley
            </a>
            <span className="font-sans font-medium text-[11px] sm:text-xs md:text-[10px] lg:text-[11px] xl:text-[12px] text-[#5F6B6F] leading-tight whitespace-nowrap mt-0.5">
              Licensed Clinical Social Worker
            </span>
          </div>
        </div>

        {/* Desktop Divider 1 */}
        <div className="hidden md:block w-[1px] h-[40px] lg:h-[48px] xl:h-[54px] bg-[#5F6B6F]/20 shrink-0 mx-1 md:mx-1.5 lg:mx-3" />

        {/* 2. Published */}
        <div className="flex items-center gap-3.5 sm:gap-4 md:gap-2.5 lg:gap-3.5 flex-1 min-w-0 justify-start py-3 md:py-0">
          <div className="w-[46px] h-[46px] sm:w-[54px] sm:h-[54px] md:w-[46px] md:h-[46px] lg:w-[60px] lg:h-[60px] xl:w-[68px] xl:h-[68px] shrink-0 relative flex items-center justify-center">
            <Image
              src="/blogs_trustbar-publish.png"
              alt="Calendar Icon"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-start min-w-0">
            <span className="font-sans font-semibold text-xs sm:text-sm md:text-[13px] lg:text-[15px] xl:text-[16px] text-[#2E5A66] leading-tight">
              Published
            </span>
            <span className="font-sans font-bold text-xs sm:text-sm md:text-[13px] lg:text-[14px] xl:text-[15px] text-transparent bg-clip-text bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] whitespace-nowrap mt-0.5">
              June 19, 2026
            </span>
            <span className="font-sans font-medium text-[11px] sm:text-xs md:text-[10px] lg:text-[11px] xl:text-[12px] text-[#5F6B6F] leading-tight whitespace-nowrap mt-0.5">
              Last updated: June 19, 2026
            </span>
          </div>
        </div>

        {/* Desktop Divider 2 */}
        <div className="hidden md:block w-[1px] h-[40px] lg:h-[48px] xl:h-[54px] bg-[#5F6B6F]/20 shrink-0 mx-1 md:mx-1.5 lg:mx-3" />

        {/* 3. Medically Reviewed By */}
        <div className="flex items-center gap-3.5 sm:gap-4 md:gap-2.5 lg:gap-3.5 flex-1 min-w-0 justify-start py-3 last:pb-0 md:py-0">
          <div className="w-[46px] h-[46px] sm:w-[54px] sm:h-[54px] md:w-[46px] md:h-[46px] lg:w-[60px] lg:h-[60px] xl:w-[68px] xl:h-[68px] rounded-full overflow-hidden shrink-0 relative shadow-xs border border-[#EAE5DC]/60">
            <Image
              src="/blogs_medical_reviewer.png"
              alt="Max Phillips"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start min-w-0">
            <span className="font-sans font-semibold text-xs sm:text-sm md:text-[13px] lg:text-[15px] xl:text-[16px] text-[#2E5A66] leading-tight">
              Medically Reviewed by
            </span>
            <span className="font-sans font-bold text-xs sm:text-sm md:text-[13px] lg:text-[14px] xl:text-[15px] text-transparent bg-clip-text bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] underline whitespace-nowrap mt-0.5">
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
