import React from "react";
import Image from "next/image";
import { BreakpointImage } from "@/components/common/BreakpointImage";
import { ReviewBadges } from "@/components/common/ReviewBadges";
import { MobileHeroActionButtons } from "@/components/common/MobileHeroActionButtons";
import { HeroStateDropdown } from "@/components/common/HeroStateDropdown";
import { CtaButton } from "@/components/common/CtaButton";
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
          src="/Hero_image_for_mobile_all.png"
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

          <p className="body-small text-center mt-4 max-w-[260px]">
            If not approved after your evaluation?
            <br />
            You get a full refund.
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

          <div className="mt-5">
            <ReviewBadges />
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET PSD HERO SECTION (sm: to lg: / 640px-1023px) */}
      {/* Matches Screenshot 3 (iPad Pro 11)                   */}
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

        <div className="absolute inset-x-0 top-0 pt-16 px-6 text-center z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-3 flex-wrap justify-center">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 shadow-[0px_2px_4px_rgba(0,0,0,0.1)]"
              >
                <span className="body-strong text-primary">{stat.value}</span>
                <span className="body-text text-primary">{stat.label}</span>
              </div>
            ))}
          </div>

          <p aria-hidden="true" className="heading-h1 capitalize mx-auto max-w-lg mt-6">
            Psychiatric Service
            <br />
            Dog Letter Assistance
          </p>

          <p className="body-large max-w-md mx-auto mt-4">
            Connect with state-licensed mental health professionals to discuss your needs and explore if a psychiatric service dog letter may be appropriate for you.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap mt-6">
            <HeroStateDropdown />

            <CtaButton
              href="#pricing"
              variant="accent"
              className="w-auto"
            >
              Get Started
            </CtaButton>
          </div>

          <p className="body-small text-center mt-3">
            Not approved after your PSD evaluation? You get a full refund!
          </p>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. DESKTOP PSD HERO SECTION (lg: / 1024px and up)     */}
      {/* Matches Screenshot 1                                 */}
      {/* ---------------------------------------------------- */}
      <DesktopScaleWrapper
        designHeight={814}
        designWidth={1440}
        wrapperClassName="bg-background overflow-hidden"
        background={
          <BreakpointImage
            media="(min-width: 1024px)"
            quality={70}
            src="/psd-letter/psd-herosection-new.webp"
            alt="Psychiatric Service Dog Letter Assistance"
            fill
            className="object-cover object-left"
            sizes="(min-width: 1024px) 1440px, 1px"
          />
        }
      >
        <div className="relative w-[1440px] h-[814px] mx-auto">
          <div className="absolute top-[85px] right-[40px] w-[574px] flex flex-col items-center">
            <div className="flex w-full flex-col items-center">
              <div className="flex items-center gap-3 w-max justify-end self-end">
                {statsData.map((stat) => (
                  <div
                    key={stat.label}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-4 py-2 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] shrink-0"
                  >
                    <span className="body-strong text-primary">{stat.value}</span>
                    <span className="body-text text-primary">{stat.label}</span>
                  </div>
                ))}
              </div>

              <p aria-hidden="true" className="heading-h1 capitalize text-center mt-6">
                Psychiatric Service
                <br />
                Dog Letter Assistance
              </p>

              <p className="body-large text-center w-[463px] mt-4">
                Connect with state-licensed mental health professionals to discuss your needs and explore if a psychiatric service dog letter may be appropriate for you.
              </p>

              <div className="flex items-center justify-center gap-3 mt-6">
                <HeroStateDropdown
                  buttonClassName="flex items-center gap-2.5 px-[29px] py-3 rounded-[30px] bg-background body-text hover:bg-white transition-colors h-[54px] shrink-0 border border-primary cursor-pointer shadow-[0px_2px_4px_rgba(0,0,0,0.15)]"
                />

                <CtaButton
                  href="#pricing"
                  variant="accent"
                  className="w-[192px]"
                >
                  Get Started
                </CtaButton>
              </div>

              {/* Refund guarantee note */}
              <p className="body-small text-center w-[463px] pt-1">
                Not approved after your PSD evaluation? You get a full refund!
              </p>
            </div>

            <div className="mt-[24px]"><ReviewBadges /></div>
          </div>
        </div>
      </DesktopScaleWrapper>
    </section>
  );
}
