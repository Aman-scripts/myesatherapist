"use client";

import React from "react";
import { BreakpointImage } from "@/components/common/BreakpointImage";
import { DesktopScaleWrapper } from "@/components/common/DesktopScaleWrapper";

export function AboutHeroSection() {
  return (
    <section className="relative w-full bg-background overflow-hidden">
      <h1 className="sr-only">About My ESA Therapist</h1>
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE VIEW (< 640px)                             */}
      {/* Uses /about_us-mobile_hero_section.webp (390x768)     */}
      {/* ---------------------------------------------------- */}
      <div className="block sm:hidden relative w-full aspect-[390/768] min-h-[580px] overflow-hidden">
        <BreakpointImage
          media="(max-width: 639px)"
          quality={80}
          src="/about-us/about_us-mobile_hero_section.webp"
          alt="About My ESA Therapist"
          fill
          className="object-cover object-bottom pointer-events-none"
          sizes="(max-width: 639px) 100vw, 1px"
        />

        {/* Content Container at Top */}
        <div className="absolute inset-x-0 top-0 px-6 pt-10 text-center flex flex-col items-center z-10 space-y-3">
          <p aria-hidden="true" className="heading-h2 text-primary max-w-[320px]">
            About My ESA Therapist
          </p>
          <p className="body-large text-body-text max-w-[320px]">
            Providing legitimate, HIPAA-compliant ESA evaluations through state-licensed mental health professionals across all 50 states.
          </p>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET VIEW (640px - 1023px)                      */}
      {/* Uses /about_us-tablet_hero_section.webp (834x1226)    */}
      {/* ---------------------------------------------------- */}
      <div className="hidden sm:flex lg:hidden relative w-full aspect-[834/1226] min-h-[720px] max-h-[960px] overflow-hidden">
        <BreakpointImage
          media="(min-width: 640px) and (max-width: 1023px)"
          quality={80}
          src="/about-us/about_us-tablet_hero_section.webp"
          alt="About My ESA Therapist"
          fill
          className="object-cover object-bottom pointer-events-none"
          sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
        />

        {/* Content Container at Top */}
        <div className="absolute inset-x-0 top-0 px-8 pt-16 text-center flex flex-col items-center z-10 space-y-4 max-w-[620px] mx-auto">
          <p aria-hidden="true" className="heading-h1 text-primary">
            About My ESA Therapist
          </p>
          <p className="body-large text-body-text max-w-[500px]">
            Providing legitimate, HIPAA-compliant ESA evaluations through state-licensed mental health professionals across all 50 states.
          </p>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. DESKTOP VIEW (>= 1024px)                          */}
      {/* Uses /hero_section-about_us.webp (Figma 1440x751)     */}
      {/* ---------------------------------------------------- */}
      <DesktopScaleWrapper
        designWidth={1440}
        designHeight={751}
        className="hidden lg:block relative"
        fullBleedBackground={
          <BreakpointImage
            media="(min-width: 1024px)"
            quality={80}
            src="/about-us/hero_section-about_us.webp"
            alt="About My ESA Therapist"
            fill
              className="object-cover object-right"
            sizes="(min-width: 1024px) 100vw, 1px"
          />
        }
      >
        <div className="relative w-[1440px] h-[751px] flex items-center">
          {/* Content Container (Figma Frame 1000011884 / Frame 1000011902) */}
          <div className="relative z-10 px-[82px] py-[185px] w-full">
            <div className="w-[513px] flex flex-col items-start gap-4 text-left">
              <p aria-hidden="true" className="heading-h1 text-primary capitalize leading-[58px]">
                About My ESA Therapist
              </p>
              <p className="body-large text-body-text max-w-[470px]">
                Providing legitimate, HIPAA-compliant ESA evaluations through state-licensed mental health professionals across all 50 states.
              </p>
            </div>
          </div>
        </div>
      </DesktopScaleWrapper>
    </section>
  );
}
