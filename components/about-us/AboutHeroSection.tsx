
import React from "react";
import { BreakpointImage } from "@/components/common/BreakpointImage";
import { DesktopScaleWrapper } from "@/components/common/DesktopScaleWrapper";
import { SiteBreadcrumbs } from "@/components/seo/SiteBreadcrumbs";

export function AboutHeroSection() {
  return (
    <section className="relative w-full bg-background overflow-hidden">
      <h1 className="sr-only">About My ESA Therapist</h1>
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE VIEW (< 640px)                             */}
      {/* Uses /about_us-mobile_hero_section.webp (390x768)     */}
      {/* ---------------------------------------------------- */}
      <div className="block sm:hidden relative w-full">
        <BreakpointImage
          media="(max-width: 639px)"
          quality={90}
          src="/Hero_image_for_mobile_all.webp"
          alt="About My ESA Therapist"
          fill
          className="object-cover object-bottom pointer-events-none"
          sizes="100vw"
        />

        {/* Content Container at Top */}
        <div className="relative z-10 px-6 pt-5 pb-[88px] text-center flex flex-col items-center space-y-3">
          <SiteBreadcrumbs className="self-start" includeSchema={false} />
          <p aria-hidden="true" className="heading-h1 text-primary max-w-[280px] text-[32px]! leading-[40px]!">
            About My ESA
            <br />
            Therapist
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
          quality={90}
          src="/about-us/about_us-tablet_hero_section.webp"
          alt="About My ESA Therapist"
          fill
          className="object-cover object-bottom pointer-events-none"
          sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
        />

        {/* Content Container at Top */}
        <div className="absolute inset-x-0 top-0 px-8 pt-8 text-center flex flex-col items-center z-10 space-y-4 max-w-[620px] mx-auto">
          <SiteBreadcrumbs className="self-start" includeSchema={false} />
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
        designHeight={640}
        className="hidden lg:block relative"
        fullBleedBackground={
          <BreakpointImage
            media="(min-width: 1024px)"
            quality={90}
            src="/about-us/hero-about-desktop.webp"
            alt="About My ESA Therapist"
            fill
            className="object-cover object-right"
            sizes="(min-width: 1024px) 100vw, 1px"
          />
        }
      >
        <div className="relative w-[1440px] h-[640px] flex items-center">
          <div className="relative z-10 px-[82px] py-16 w-full">
            <div className="w-[513px] flex flex-col items-start gap-4 text-left">
              <SiteBreadcrumbs className="-mb-1" />
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
