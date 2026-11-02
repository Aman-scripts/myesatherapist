import React from "react";
import Image from "next/image";
import { BreakpointImage } from "@/components/common/BreakpointImage";
import { ReviewBadges } from "@/components/common/ReviewBadges";
import { MobileHeroActionButtons } from "@/components/common/MobileHeroActionButtons";
import { HeroCtaGroup } from "@/components/common/HeroCtaGroup";
import { DesktopScaleWrapper } from "@/components/common/DesktopScaleWrapper";

const TEAL_GRADIENT = "var(--color-gradient)";
const TRUSTPILOT_GREEN = "#00B67A";

const statsData = [
  { value: "51,488+", label: "Mental Health Evaluations" },
  { value: "7+", label: "Years Serving" },
  { value: "100%", label: "Moneyback Guarantee" },
];

const mobileStats = [
  { value: "7+", label: "Years Serving" },
  { value: "64,739+", label: "Mental Health Evaluations" },
  { value: "100%", label: "Moneyback Guarantee" },
];

export function PsdHeroSection() {
  return (
    <section className="relative z-30 w-full bg-background">
      <h1 className="sr-only">Psychiatric Service Dog Letter Assistance</h1>
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE PSD HERO SECTION (sm:hidden / < 640px)     */}
      {/* Matches Screenshot 2 (Figma iPhone 13 & 14)          */}
      {/* ---------------------------------------------------- */}
      <div className="sm:hidden relative w-full">
        <BreakpointImage
          media="(max-width: 639px)"
          quality={70}
          src="/psd-letter/psd-herosection-mobile.webp"
          alt="Psychiatric Service Dog Letter Assistance"
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
            Connect with state-licensed mental health professionals to discuss your needs and explore if a psychiatric service dog letter.
          </p>

          <MobileHeroActionButtons
            className="mt-5"
            getStartedHref="#pricing"
            placeholder="Select your State"
          />

          <p className="body-small mt-4 max-w-[280px]">
            Not approved after your PSD evaluation? You get a full refund!.
          </p>

          {/* Guarantee Pills */}
          <div className="mt-5 flex flex-col items-center gap-3">
            {mobileStats.map((stat, i) => (
              <div
                key={stat.label}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-5 py-2.5 shadow-[0px_2px_4px_rgba(0,0,0,0.1)]"
              >
                {i === 2 ? (
                  <span className="font-semibold text-primary">{stat.value}</span>
                ) : (
                  <span className="font-semibold text-color-gradient">{stat.value}</span>
                )}
                <span className="text-sm font-medium text-primary">{stat.label}</span>
              </div>
            ))}
          </div>

          <ReviewBadges className="mt-6 flex-col gap-3" />
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET PSD HERO SECTION (sm:block lg:hidden)      */}
      {/* Matches Screenshot 3 (Figma Tablet 834x1200)         */}
      {/* ---------------------------------------------------- */}
      <div className="hidden sm:block lg:hidden relative w-full aspect-[834/1200] min-h-[780px]">
        <BreakpointImage
          media="(min-width: 640px) and (max-width: 1023px)"
          quality={70}
          src="/psd-letter/psd-hero-section-tablet.webp"
          alt="Psychiatric Service Dog Letter Assistance"
          fill
          className="object-cover object-bottom"
          sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
        />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-16 px-6 text-center">
          <p aria-hidden="true" className="heading-h1 capitalize max-w-[620px]">
            Psychiatric Service Dog
            <br />
            Letter Assistance
          </p>

          <p className="body-large text-body-text max-w-[540px] mt-4">
            Connect with state-licensed mental health professionals to discuss your needs and explore if a psychiatric service dog letter is right for you.
          </p>

          <HeroCtaGroup
            containerClassName="flex items-center justify-center gap-3 flex-wrap mt-6"
            ctaClassName="w-auto"
            defaultHref="#pricing"
          />

          <p className="body-small text-body-text max-w-[420px] mt-4">
            Not approved after your PSD evaluation? You get a full refund!.
          </p>

          {/* Tablet Stats Pills */}
          <div className="flex items-center justify-center gap-3 flex-wrap mt-6">
            {statsData.map((stat, i) => (
              <div
                key={stat.label}
                className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 shadow-[0px_2px_4px_rgba(0,0,0,0.1)]"
              >
                {i === 2 ? (
                  <span className="font-semibold text-primary">{stat.value}</span>
                ) : (
                  <span className="font-semibold text-color-gradient">{stat.value}</span>
                )}
                <span className="text-sm font-medium text-primary">{stat.label}</span>
              </div>
            ))}
          </div>

          <ReviewBadges className="mt-6 flex-row gap-6" />
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. DESKTOP PSD HERO SECTION (lg:block / >= 1024px)   */}
      {/* Matches Screenshot 1 (Figma Desktop 1440x737)        */}
      {/* ---------------------------------------------------- */}
      <DesktopScaleWrapper
        designHeight={737}
        designWidth={1440}
        wrapperClassName="bg-background overflow-hidden"
        background={
          <BreakpointImage
            media="(min-width: 1024px)"
            quality={70}
            src="/psd-letter/psd-hero-section.webp"
            alt="Psychiatric Service Dog Letter Assistance"
            fill
            className="object-cover object-bottom"
            sizes="(min-width: 1024px) 100vw, 1px"
          />
        }
      >
        <div className="relative w-[1440px] h-[737px] flex items-center">
          {/* Left Content Area (Frame 1000011929: left: 91px, top: 121px, width: 624px) */}
          <div className="absolute left-[91px] top-[121px] w-[624px] flex flex-col z-10">
            <p aria-hidden="true" className="heading-h1 capitalize text-primary text-[48px]! leading-[56px]!">
              Psychiatric Service Dog
              <br />
              Letter Assistance
            </p>

            <p className="body-large text-body-text max-w-[539px] mt-4">
              Connect with state-licensed mental health professionals to discuss your needs and explore if a psychiatric service dog letter is right for you.
            </p>

            {/* Desktop CTA Group */}
            <HeroCtaGroup
              containerClassName="mt-6 flex items-center gap-3"
              dropdownClassName="flex items-center gap-2.5 px-[29px] py-3 rounded-[30px] bg-background body-text hover:bg-white transition-colors h-[54px] shrink-0 border border-primary cursor-pointer shadow-[0px_2px_4px_rgba(0,0,0,0.15)]"
              ctaClassName="w-[192px]"
              defaultHref="#pricing"
            />

            <p className="body-small text-body-text mt-3">
              Not approved after your PSD evaluation? You get a full refund!.
            </p>

            {/* Stats Row */}
            <div className="mt-8 flex items-center gap-3">
              {statsData.map((stat, i) => (
                <div
                  key={stat.label}
                  className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 shadow-[0px_2px_4px_rgba(0,0,0,0.1)]"
                >
                  {i === 2 ? (
                    <span className="font-semibold text-primary">{stat.value}</span>
                  ) : (
                    <span className="font-semibold text-color-gradient">{stat.value}</span>
                  )}
                  <span className="text-xs font-medium text-primary">{stat.label}</span>
                </div>
              ))}
            </div>

            <ReviewBadges className="mt-6 flex-row gap-6" />
          </div>
        </div>
      </DesktopScaleWrapper>
    </section>
  );
}
