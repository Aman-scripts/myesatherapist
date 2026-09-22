"use client";

import React from "react";
import Image from "next/image";

const IDEAL_POINTS = [
  "Individuals with an emotional support animal letter that is expiring or no longer current",
  "Those needing an updated evaluation from a state-licensed mental health professional",
  "People who no longer have access to their original ESA provider",
  "Individuals seeking a proper reassessment based on current circumstances",
  "Those who value ethical, independent professional review",
  "Anyone requesting updated documentation for housing accommodation purposes",
];

const NOT_INTENDED_POINTS = [
  "Anyone expecting guaranteed approval",
  "Individuals seeking automatic renewal without evaluation",
  "Those looking for shortcuts or workarounds",
  "Anyone attempting to bypass professional review",
  "Requests made for purposes outside housing accommodations",
];

export function EsaRenewalForWhom() {
  return (
    <section className="w-full bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1312px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-[850px] mx-auto mb-14 sm:mb-16 space-y-3">
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-[34px] xl:text-[44px] font-bold text-[#2E5A66] leading-tight sm:leading-[54px] lg:leading-[42px] xl:leading-[54px] tracking-tight">
            Who This Renewal Service is For?
          </h2>
          <p className="font-sans text-base sm:text-[18px] lg:text-[16px] xl:text-[18px] font-semibold text-[#5F6B6F] leading-[30px] lg:leading-[27px] xl:leading-[30px]">
            A renewal evaluation may be helpful for individuals in the following circumstances.
          </p>
        </div>

        {/* 2 Big Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-stretch">
          {/* Card 1: Ideal For (Green Tint) */}
          <div className="rounded-[30px] bg-[#27A64A]/10 border border-[#27A64A]/20 overflow-hidden shadow-sm flex flex-col">
            {/* Top Photo */}
            <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden">
              <Image
            quality={90}
                src="/esa-renewal/esa-renewal-whothisrenwalsection-idealfor.webp"
                alt="Woman holding dog while working at desk - ideal candidate"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8 lg:p-10 space-y-6 flex-1 flex flex-col">
              <h3 className="font-heading font-bold text-2xl sm:text-[28px] text-[#2E5A66] text-center">
                Ideal For
              </h3>

              <div className="space-y-4 sm:space-y-5 flex-1">
                {IDEAL_POINTS.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    {/* Teal Gradient Checkmark Circle */}
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] flex items-center justify-center shrink-0 mt-1 shadow-xs">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FAF7F2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>

                    <p className="font-sans text-sm sm:text-[16px] lg:text-[17px] font-semibold text-[#2E5A66] leading-[1.5]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Not Intended For (Red Tint) */}
          <div className="rounded-[30px] bg-[#FF383C]/10 border border-[#E42529]/20 overflow-hidden shadow-sm flex flex-col">
            {/* Top Photo */}
            <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden">
              <Image
            quality={90}
                src="/esa-renewal/esa-renewal-whothisrenwalsection-notintendedfor.webp"
                alt="Person looking stressed - not intended for"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8 lg:p-10 space-y-6 flex-1 flex flex-col">
              <h3 className="font-heading font-bold text-2xl sm:text-[28px] text-[#CC191D] text-center">
                Not Intended For
              </h3>

              <div className="space-y-4 sm:space-y-5 flex-1">
                {NOT_INTENDED_POINTS.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    {/* Red X Mark Circle */}
                    <div className="w-5 h-5 rounded-full bg-[#E42529] flex items-center justify-center shrink-0 mt-1 shadow-xs">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FAF7F2" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </div>

                    <p className="font-sans text-sm sm:text-[16px] lg:text-[17px] font-semibold text-[#CC191D] leading-[1.5]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
