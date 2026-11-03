import React from "react";
import { BreakpointImage } from "@/components/common/BreakpointImage";
import { ReviewBadges } from "@/components/common/ReviewBadges";
import { MobileHeroActionButtons } from "@/components/common/MobileHeroActionButtons";
import { HeroCtaGroup } from "@/components/common/HeroCtaGroup";
import { DesktopScaleWrapper } from "@/components/common/DesktopScaleWrapper";

const MOBILE_HERO_BG = "/Hero_image_for_mobile_all.webp";
const DESKTOP_HERO_BG = "/psd-letter/psd-herosection-new.webp";

const desktopStats = [
  { value: "64,739+", label: "ESA Evaluations" },
  { value: "7+", label: "Years Serving" },
  { value: "100%", label: "Moneyback Guarantee" },
];

const mobileStats = [
  { value: "7+", label: "Years Serving" },
  { value: "64,739+", label: "ESA Evaluations" },
  { value: "100%", label: "Moneyback Guarantee" },
];

const REFUND_NOTE = "Not approved after your PSD evaluation? You get a full refund!";
const HERO_SUBTITLE =
  "Connect with state-licensed mental health professionals to discuss your needs and explore if a psychiatric service dog letter may be appropriate for you.";

export function PsdHeroSection() {
  return (
    <section className="relative z-30 w-full bg-background">
      <h1 className="sr-only">Psychiatric Service Dog Letter Assistance</h1>
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE PSD HERO SECTION (sm:hidden / < 640px)     */}
      {/* Matches Screenshot 2 (Figma iPhone 13 & 14)          */}
      {/* ---------------------------------------------------- */}
      <div className="sm:hidden relative w-full bg-background">
        <BreakpointImage
          media="(max-width: 639px)"
          quality={70}
          src={MOBILE_HERO_BG}
          alt=""
          fill
          className="object-cover object-top"
          sizes="100vw"
        />

        <div className="relative z-10 px-4 pt-8 pb-10 text-center flex flex-col items-center">
          <p aria-hidden="true" className="heading-h1 capitalize mx-auto max-w-[340px] text-[28px]! leading-[36px]!">
            Psychiatric Service Dog
            <br />
            Letter Assistance
          </p>

          <p className="body-large max-w-[300px] mx-auto mt-3">
            {HERO_SUBTITLE}
          </p>

          <MobileHeroActionButtons
            className="mt-5"
            placeholder="Select your State"
            surveyOnStart
          />

          <p className="body-small mt-4 max-w-[260px]">
            Not approved after your PSD evaluation?
            <br />
            You get a full refund!
          </p>

          <div className="mt-4 flex flex-col items-center gap-3">
            {mobileStats.map((stat) => (
              <div
                key={stat.label}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-5 py-2 shadow-[0px_2px_4px_rgba(0,0,0,0.1)]"
              >
                <span className="body-strong text-primary">{stat.value}</span>
                <span className="body-text text-primary">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 w-full max-w-[360px]">
            <ReviewBadges className="mx-auto max-w-none justify-center" />
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET PSD HERO SECTION (sm:block lg:hidden)      */}
      {/* Matches Screenshot 3 (Figma Tablet 834x1200)         */}
      {/* ---------------------------------------------------- */}
      <div className="hidden sm:flex lg:hidden relative w-full aspect-[834/1200] min-h-[780px] max-h-[1050px] overflow-hidden">
        <BreakpointImage
          media="(min-width: 640px) and (max-width: 1023px)"
          quality={70}
          src="/psd-letter/psd-hero-section-tablet.webp"
          alt="Psychiatric Service Dog Letter Assistance"
          fill
          className="object-cover object-center"
          sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
        />

        <div className="absolute inset-x-0 top-0 z-10 flex flex-col items-center px-6 pt-16 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {desktopStats.map((stat) => (
              <div
                key={stat.label}
                className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 shadow-[0px_2px_4px_rgba(0,0,0,0.1)]"
              >
                <span className="body-strong text-primary">{stat.value}</span>
                <span className="body-text text-primary">{stat.label}</span>
              </div>
            ))}
          </div>

          <p aria-hidden="true" className="heading-h1 capitalize mx-auto mt-6 max-w-lg">
            Psychiatric Service
            <br />
            Dog Letter Assistance
          </p>

          <p className="body-large mx-auto mt-4 max-w-md">
            {HERO_SUBTITLE}
          </p>

          <HeroCtaGroup
            containerClassName="mt-6 flex flex-wrap items-center justify-center gap-3"
            ctaClassName="w-auto"
            defaultHref="#pricing"
          />

          <p className="body-small mt-3">{REFUND_NOTE}</p>

          <ReviewBadges className="mt-6" />
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. DESKTOP PSD HERO SECTION (lg:block / >= 1024px)   */}
      {/* Matches Screenshot 1 (Figma Desktop 1440x737)        */}
      {/* ---------------------------------------------------- */}
      <DesktopScaleWrapper
        designHeight={814}
        designWidth={1440}
        wrapperClassName="bg-background overflow-hidden"
        background={
          <BreakpointImage
            media="(min-width: 1024px)"
            quality={70}
            src={DESKTOP_HERO_BG}
            alt="Woman with her psychiatric service dog"
            fill
            className="object-cover object-right"
            sizes="(min-width: 1024px) 100vw, 1px"
          />
        }
      >
        <div className="relative mx-auto h-[814px] w-[1440px]">
          <div className="absolute left-[80px] top-[72px] z-10 flex w-[760px] flex-col items-start">
            <div className="flex items-center gap-3">
              {desktopStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex h-[77px] min-w-[176px] shrink-0 flex-col items-center justify-center rounded-[30px] bg-background px-4 text-center shadow-[0px_2px_4px_rgba(0,0,0,0.15)]"
                >
                  <span className="body-large leading-none text-color-gradient">{stat.value}</span>
                  <span className="body-small mt-1 whitespace-nowrap text-[#6B6B6B]">{stat.label}</span>
                </div>
              ))}
            </div>

            <p aria-hidden="true" className="heading-h1 mt-6 capitalize text-primary">
              Psychiatric Service Dog
              <br />
              Letter Assistance
            </p>

            <p className="body-large mt-4 max-w-[520px]">
              {HERO_SUBTITLE}
            </p>

            <HeroCtaGroup
              containerClassName="mt-6 flex items-center gap-3"
              dropdownClassName="flex h-[54px] shrink-0 cursor-pointer items-center gap-2.5 rounded-[30px] border border-primary bg-background px-[29px] py-3 body-text shadow-[0px_2px_4px_rgba(0,0,0,0.15)] transition-colors hover:bg-white"
              ctaClassName="w-[192px]"
              defaultHref="#pricing"
            />

            <p className="body-small mt-3">{REFUND_NOTE}</p>

            <div className="mt-6">
              <ReviewBadges />
            </div>
          </div>
        </div>
      </DesktopScaleWrapper>
    </section>
  );
}
