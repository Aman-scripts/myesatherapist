"use client";

import React from "react";
import Image from "next/image";
import { PricingSection } from "@/components/home/PricingSection";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

export function PricingPlansSection() {
  return (
    <div id="plans">
      {/* Shared three-card Plans & Pricing section (same as the home page) */}
      <PricingSection ctaHref="#evaluation" />

      <section className="pb-16 sm:pb-20 lg:pb-24 bg-[#FAF7F2] relative z-10 overflow-visible">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================================================== */}
        {/* ADD-ON BANNER: More Than One Pet? (Frame 1000012004) */}
        {/* ==================================================== */}
        <div className="max-w-[1065px] mx-auto bg-white/40 backdrop-blur-md rounded-[15px] border border-white/60 shadow-[0px_1px_4px_rgba(103,103,103,0.1)] overflow-hidden flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 sm:p-0 sm:pr-8">
          <div className="flex items-center gap-4 sm:gap-6 flex-1">
            {/* Gradient accent bar */}
            <div
              className="hidden sm:block w-[17px] min-h-[115px] self-stretch rounded-l-[10px] shrink-0"
              style={{ backgroundImage: TEAL_GRADIENT }}
            />

            {/* Pet illustration icon */}
            <div className="w-[60px] sm:w-[78px] h-[60px] sm:h-[79px] shrink-0 relative flex items-center justify-center">
              <Image
            quality={90}
                src="/pricing/pricingsection_Addpetbutton-icon.svg"
                alt="Add a pet"
                width={78}
                height={79}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Text description */}
            <div className="flex flex-col justify-center">
              <h4 className="text-[16px] font-semibold text-[#2E5A66] font-sans leading-[26px]">
                More Than One Pet?
              </h4>
              <p className="text-[13px] sm:text-[14px] text-[#5F6B6F] font-semibold leading-[20px] sm:leading-[26px] font-sans max-w-[658px]">
                Each additional animal requires its own clinical evaluation and documentation. Select this add-on at checkout to cover a second or additional pet.
              </p>
            </div>
          </div>

          {/* Add a Pet CTA button */}
          <div className="shrink-0 self-center sm:self-auto">
            <a
              href="#add-pet"
              className="flex items-center gap-2 pl-6 pr-1.5 py-1.5 rounded-[30px] text-white font-semibold text-[16px] leading-[26px] font-sans transition-opacity hover:opacity-90 shadow-[0px_2px_4px_rgba(0,0,0,0.15)] h-[48px]"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <span>Add a Pet</span>
              <span className="w-[38px] h-[38px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image
            quality={90}
                  src="/pricing/pricing_section_morethanonepet_tag.webp"
                  alt=""
                  width={24}
                  height={24}
                  className="w-5 h-5 object-contain"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}
