

import React from "react";
import Image from "next/image";
import { CtaButton } from "@/components/common/CtaButton";
import { DesktopScaleWrapper } from "@/components/common/DesktopScaleWrapper";

const TEAL_GRADIENT = "var(--color-gradient)";

function GreenCheckIcon() {
  return (
    <span className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px] rounded-full bg-[#00BA00] flex items-center justify-center shrink-0 shadow-xs">
      <svg className="w-2.5 h-2 sm:w-2.5 sm:h-2 lg:w-3.5 lg:h-3" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 5.5L5 9L12.5 1.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}

function RedCrossIcon() {
  return (
    <span className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px] rounded-full bg-[#FF5023] flex items-center justify-center shrink-0 shadow-xs">
      <svg className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L10 10M10 2L2 10" stroke="#FFF5F5" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </span>
  );
}

function WarningOrangeIcon() {
  return (
    <span className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px] rounded-full bg-accent flex items-center justify-center shrink-0 shadow-xs">
      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 3.5V7.5M7 10.5H7.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </span>
  );
}

const comparisonRows = [
  {
    feature: "Evaluations",
    desktopFeature: "Licensed Evaluations",
    icon: "/esa-icons/icon-33.svg",
    myEsa: "State-Licensed Evaluations",
    others: "Unlicensed Providers",
    othersType: "cross",
  },
  {
    feature: "Determination",
    desktopFeature: "Clinical Determination",
    icon: "/esa-icons/icon-18.svg",
    myEsa: "Independent Clinical Assessment",
    others: "No Proper Evaluation",
    othersType: "cross",
  },
  {
    feature: "Telehealth",
    desktopFeature: "Secure Telehealth",
    icon: "/esa-icons/icon-15.svg",
    myEsa: "HIPAA-Compliant Telehealth",
    others: "Varying Privacy Standards",
    othersType: "warning",
  },
  {
    feature: "Compliance",
    desktopFeature: "Compliance-Focused",
    icon: "/esa-icons/icon-17.svg",
    myEsa: "FHA and HUD Compliance",
    others: "Guideline Noncompliance",
    othersType: "warning",
  },
  {
    feature: "Transparency",
    desktopFeature: "Transparent Process",
    icon: "/esa-icons/icon-26.svg",
    myEsa: "Clear Evaluation Process",
    others: "Unclear Process or Fees",
    othersType: "cross",
  },
  {
    feature: "Privacy",
    desktopFeature: "Privacy Protection",
    icon: "/esa-icons/glyph-3.svg",
    myEsa: "Secure Data Protection",
    others: "Limited Privacy Protection",
    othersType: "cross",
  },
  {
    feature: "Nationwide",
    desktopFeature: "Nationwide Access",
    icon: "/esa-icons/icon-24.svg",
    myEsa: "Nationwide Licensed Providers",
    others: "Location-Based Availability",
    othersType: "warning",
  },
  {
    feature: "Trust",
    desktopFeature: "Trust & Legitimacy",
    icon: "/esa-icons/icon-19.svg",
    myEsa: "Serving Clients Since 2019",
    others: "Unverified Provider Credentials",
    othersType: "cross",
  },
];

export function ComparisonTable() {
  return (
    <section id="compare" className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1441px] mx-auto px-3 sm:px-6 lg:px-2 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-[758px] mx-auto mb-10 sm:mb-12 lg:mb-14 space-y-3">
          <h2 className="heading-h2 capitalize">
            Compare Our Approach to Other ESA Letter Services
          </h2>
          <p className="body-large">
            See how our licensed professionals, secure process, and commitment to responsible ESA evaluations set us apart.
          </p>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 1. MOBILE & TABLET 3-COLUMN LAYOUT (< 1024px)       */}
        {/* Matches Frame 1000012119 / Frame 1000011728 exactly */}
        {/* ---------------------------------------------------- */}
        {/* ---------------------------------------------------- */}
        {/* 1. MOBILE & TABLET 3-COLUMN LAYOUT (< 1024px)       */}
        {/* Matches Frame 1000012119 / Frame 1000011728 exactly */}
        {/* ---------------------------------------------------- */}
        <div className="block lg:hidden w-full max-w-[370px] sm:max-w-[620px] md:max-w-[700px] relative mx-auto pt-[14px]">
          {/* Cream frame with Features / Others columns */}
          <div className="w-full bg-background rounded-[20px] shadow-[0px_2px_5.2px_rgba(0,0,0,0.15)] relative z-0 pb-3">
            <div className="grid grid-cols-[minmax(0,1.28fr)_132px_minmax(0,0.86fr)] sm:grid-cols-[1fr_214px_1fr] md:grid-cols-[1fr_234px_1fr] items-center h-[62px] sm:h-[70px]">
              <h3 className="font-heading font-bold text-center text-xs sm:text-base text-primary">Features</h3>
              <div />
              <h3 className="font-heading font-bold text-center text-xs sm:text-base text-primary">Others</h3>
            </div>

            <div className="divide-y divide-[#C8B9A7]/60 border-t border-[#C8B9A7]/60">
              {comparisonRows.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-[minmax(0,1.28fr)_132px_minmax(0,0.86fr)] sm:grid-cols-[1fr_214px_1fr] md:grid-cols-[1fr_234px_1fr] items-center h-16 sm:h-[80px]"
                >
                  <div className="px-2 sm:px-2 flex items-center justify-center text-center min-w-0">
                    <h4 className="font-heading font-bold text-center text-[11px] sm:text-[13px] md:text-sm leading-tight text-primary">{row.feature}</h4>
                  </div>
                  <div />
                  <div className="px-1.5 sm:px-2 flex flex-col items-center justify-center text-center gap-1">
                    {row.othersType === "cross" ? <RedCrossIcon /> : <WarningOrangeIcon />}
                    <span className="hidden sm:block font-sans font-medium text-[12px] md:text-[13px] leading-[17px] text-body-text">
                      {row.others}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Raised center card sits on the middle track, right of center, so feature labels stay clear. */}
          <div
            className="absolute top-0 bottom-[-14px] w-[132px] sm:w-[214px] md:w-[234px] left-[calc((100%-132px)*1.28/2.14)] sm:left-1/2 sm:-translate-x-1/2 rounded-[20px] shadow-[3px_3px_47.6px_1px_rgba(0,0,0,0.1)] z-10 overflow-hidden color-gradient"
          >
            <div className="h-[76px] sm:h-[84px] rounded-b-[20px] flex items-center justify-center px-3 text-center bg-[#1A3D4F]/35">
              <h3 className="font-heading font-bold text-background text-center leading-[30px] text-[24px]! sm:text-[26px]!">
                My ESA
                <br />
                Therapist
              </h3>
            </div>
            <div className="divide-y divide-[#C8B9A7]/25">
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="h-16 sm:h-[80px] px-1.5 sm:px-2.5 flex flex-col items-center justify-center text-center gap-1">
                  <GreenCheckIcon />
                  <span className="hidden sm:block font-sans font-medium text-[12px] md:text-[13px] leading-[17px] text-background">
                    {row.myEsa}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 2. DESKTOP VIEW (>= 1024px)                          */}
        {/* ---------------------------------------------------- */}
        {/* 2. DESKTOP VIEW (>= 1024px)                          */}
        {/* Full Spacious Horizontal Row Layout with scaling     */}
        {/* ---------------------------------------------------- */}
        <DesktopScaleWrapper
          designWidth={1020}
          designHeight={665}
          className="hidden lg:block relative"
        >
          <div className="relative w-[1020px] pt-[17px] pb-[16px] flex justify-center">
            <div className="w-[1020px] relative">
              {/* Main Background Frame */}
              <div className="w-full bg-background rounded-[20px] shadow-[0_2px_5.2px_rgba(0,0,0,0.15)] pb-[14px] relative z-0">
                {/* Header Labels for FEATURES and OTHERS */}
                <div className="flex items-center px-[25px] h-[74px]">
                  <div className="w-[300px] text-center shrink-0">
                    <p className="heading-h3">
                      FEATURES
                    </p>
                  </div>
                  <div className="w-[350px] shrink-0" />
                  <div className="w-[320px] text-center shrink-0">
                    <p className="heading-h3">
                      OTHERS
                    </p>
                  </div>
                </div>

                {/* Table Rows */}
                <div className="divide-y divide-[#C8B9A7]/60 mx-[25px] border-t border-[#C8B9A7]/60">
                  {comparisonRows.map((row, idx) => (
                    <div key={idx} className="flex items-center h-[60px]">
                      {/* Features Column */}
                      <div className="w-[300px] shrink-0 flex items-center gap-3.5">
                        <div className="w-[36px] h-[36px] rounded-full bg-white shadow-[0_1px_1.5px_rgba(0,0,0,0.25)] flex items-center justify-center shrink-0">
                          <Image quality={90}
                            src={row.icon}
                            alt={row.desktopFeature}
                            width={24}
          sizes="24px"
                            height={24}
                            unoptimized
                            className="icon-md object-contain"
                          />
                        </div>
                        <span className="heading-h4 whitespace-nowrap">
                          {row.desktopFeature}
                        </span>
                      </div>

                      {/* Spacer matches the elevated card width */}
                      <div className="w-[350px] shrink-0" />

                      {/* Others Column */}
                      <div className="w-[320px] shrink-0 flex items-center justify-start gap-3 pl-5">
                        {row.othersType === "cross" ? <RedCrossIcon /> : <WarningOrangeIcon />}
                        <span className="body-text text-left whitespace-nowrap">
                          {row.others}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Elevated Center Card sits over the middle spacer */}
              <div
                className="absolute left-[325px] top-[-17px] bottom-[-16px] w-[350px] rounded-[20px] shadow-[3px_3px_47.6px_1px_rgba(0,0,0,0.1)] z-10 overflow-hidden color-gradient"
              >
                <div className="h-[91px] flex items-center justify-center px-4 bg-[#1A3D4F]/35">
                  <h3 className="heading-h3 text-background">
                    MY ESA THERAPIST
                  </h3>
                </div>

                <div className="divide-y divide-[#C8B9A7]/25 pt-0">
                  {comparisonRows.map((row, idx) => (
                    <div key={idx} className="flex items-center gap-3 h-[60px] px-4 text-left">
                      <span className="shrink-0">
                        <GreenCheckIcon />
                      </span>
                      <span className="min-w-0 body-text text-background whitespace-nowrap">
                        {row.myEsa}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DesktopScaleWrapper>

        {/* Bottom CTA Button */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center gap-2">
          <CtaButton href="#how-it-works">Start your ESA Evaluation</CtaButton>
          <p className="body-small text-center">
            100% Refund If No ESA Letter Is Issued
          </p>
        </div>
      </div>
    </section>
  );
}
