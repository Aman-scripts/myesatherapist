"use client";

import React from "react";
import { BreakpointImage } from "@/components/common/BreakpointImage";
import { ReviewBadges } from "@/components/common/ReviewBadges";
import { DesktopScaleWrapper } from "@/components/common/DesktopScaleWrapper";

export function PricingHero() {
  return (
    <section className="relative z-30 w-full bg-background overflow-visible">
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE PRICING HERO SECTION (< 640px)             */}
      {/* ---------------------------------------------------- */}
      <div className="sm:hidden relative w-full aspect-[390/780] min-h-[620px]">
        <BreakpointImage
          media="(max-width: 639px)"
            quality={90}
          src="/pricing/pricing_section-hero_section_mobile.webp"
          alt="Choose The Right ESA Package For You"
          fill
          className="object-cover object-bottom"
          sizes="(max-width: 639px) 100vw, 1px"
        />

        {/* Content Container at Top */}
        <div className="absolute inset-x-0 top-0 px-4 pt-6 text-center flex flex-col items-center z-10">
          {/* Stat Pills at top (Mobile) */}
          <div className="flex items-center justify-center gap-2 w-full max-w-[340px] mx-auto mb-4">
            <div className="flex-1 flex flex-col items-center justify-center bg-background py-2 px-1 rounded-full text-center shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-[#EAE5DC]/80">
              <span className="body-large text-color-gradient leading-none">64,739+</span>
              <span className="body-small text-[#949494] mt-0.5 whitespace-nowrap">ESA Evaluations</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center bg-background py-2 px-1 rounded-full text-center shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-[#EAE5DC]/80">
              <span className="body-large text-color-gradient leading-none">5+</span>
              <span className="body-small text-[#949494] mt-0.5 whitespace-nowrap">Years Serving</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center bg-background py-2 px-1 rounded-full text-center shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-[#EAE5DC]/80">
              <span className="body-large text-color-gradient leading-none">100%</span>
              <span className="body-small text-[#949494] mt-0.5 whitespace-nowrap">Moneyback</span>
            </div>
          </div>

          <h1 className="heading-h2 text-primary max-w-[320px]">
            Choose The Right ESA Package For You
          </h1>

          <p className="body-large text-body-text max-w-[300px] mx-auto mt-2">
            No hidden fees. No upfront charges. Your card is authorized at booking but only charged after your evaluation is completed.
          </p>

          <div className="mt-4 flex justify-center">
            <ReviewBadges />
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET PRICING HERO SECTION (640px to 1023px)     */}
      {/* ---------------------------------------------------- */}
      <div className="hidden sm:block lg:hidden relative w-full aspect-[834/1200] min-h-[780px]">
        <BreakpointImage
          media="(min-width: 640px) and (max-width: 1023px)"
            quality={90}
          src="/pricing/pricing_section-hero_section_tablet.webp"
          alt="Choose The Right ESA Package For You"
          fill
          className="object-cover object-bottom"
          sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
        />

        {/* Content Container at Top */}
        <div className="absolute inset-x-0 top-0 px-6 pt-10 text-center flex flex-col items-center z-10">
          {/* Stat Pills */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="flex flex-col items-center justify-center bg-background px-5 py-2.5 rounded-full text-center min-w-[150px] shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-[#EAE5DC]/80">
              <span className="body-large text-color-gradient leading-none">64,739+</span>
              <span className="body-small text-[#949494] mt-0.5 whitespace-nowrap">ESA Evaluations</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-background px-5 py-2.5 rounded-full text-center min-w-[130px] shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-[#EAE5DC]/80">
              <span className="body-large text-color-gradient leading-none">5+</span>
              <span className="body-small text-[#949494] mt-0.5 whitespace-nowrap">Years Serving</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-background px-5 py-2.5 rounded-full text-center min-w-[170px] shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-[#EAE5DC]/80">
              <span className="body-large text-color-gradient leading-none">100%</span>
              <span className="body-small text-[#949494] mt-0.5 whitespace-nowrap">Moneyback Guarantee</span>
            </div>
          </div>

          <h1 className="heading-h1 text-primary mt-6 max-w-xl">
            Choose The Right ESA Package For You
          </h1>

          <p className="body-large text-body-text max-w-md mx-auto mt-3">
            No hidden fees. No upfront charges. Your card is authorized at booking but only charged after your evaluation is completed by a licensed mental health professional.
          </p>

          <div className="mt-6 flex justify-center">
            <ReviewBadges />
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. DESKTOP PRICING HERO SECTION (1024px and up)      */}
      {/* ---------------------------------------------------- */}
      {/* ---------------------------------------------------- */}
      {/* 3. DESKTOP PRICING HERO SECTION (1024px and up)      */}
      {/* ---------------------------------------------------- */}
      <DesktopScaleWrapper
        designHeight={802}
        designWidth={1440}
        wrapperClassName="bg-background overflow-hidden"
        background={
          <BreakpointImage
            media="(min-width: 1024px)"
            quality={90}
            src="/pricing/pricing_section-hero_section.webp"
            alt="Choose The Right ESA Package For You"
            fill
            className="object-cover object-center"
            sizes="(min-width: 1024px) 100vw, 1px"
          />
        }
      >
        <div className="relative w-[1440px] h-[802px]">
          {/* Content Container Left-Aligned (Matches Figma Frame 1000011884) */}
          <div className="absolute left-[82px] top-[120px] max-w-[553px] z-10 flex flex-col items-start gap-[24px]">
            {/* Stat Pills at top (Frame 1000011901) */}
            <div className="flex items-center gap-3">
              <div className="inline-flex flex-col items-center justify-center px-4 py-3 bg-background rounded-full shadow-[0px_2px_4px_rgba(0,0,0,0.15)] border border-[#EAE5DC]/80 w-[176px] h-[77px]">
                <span className="body-large text-color-gradient leading-none">64,739+</span>
                <span className="body-small text-[#949494] mt-1 leading-tight whitespace-nowrap">ESA Evaluations</span>
              </div>
              <div className="inline-flex flex-col items-center justify-center px-4 py-3 bg-background rounded-full shadow-[0px_2px_4px_rgba(0,0,0,0.15)] border border-[#EAE5DC]/80 w-[176px] h-[77px]">
                <span className="body-large text-color-gradient leading-none">5+</span>
                <span className="body-small text-[#949494] mt-1 leading-tight whitespace-nowrap">Years Serving</span>
              </div>
              <div className="inline-flex flex-col items-center justify-center px-4 py-3 bg-background rounded-full shadow-[0px_2px_4px_rgba(0,0,0,0.15)] border border-[#EAE5DC]/80 w-[176px] h-[77px]">
                <span className="body-large text-color-gradient leading-none">100%</span>
                <span className="body-small text-[#949494] mt-1 leading-tight whitespace-nowrap">Moneyback Guarantee</span>
              </div>
            </div>

            <h1 className="heading-h1 text-primary max-w-[553px]">
              Choose The Right ESA Package For You
            </h1>

            <p className="body-large text-body-text max-w-[553px]">
              No hidden fees. No upfront charges. Your card is authorized at booking but only charged after your evaluation is completed by a licensed mental health professional.
            </p>

            <ReviewBadges />
          </div>
        </div>
      </DesktopScaleWrapper>
    </section>
  );
}
