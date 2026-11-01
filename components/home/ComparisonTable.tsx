"use client";

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
    icon: "/ESA ICons/Icon-33.svg",
    myEsa: "Evaluations by state-licensed mental health professionals",
    others: "May not involve licensed mental health professionals",
    othersType: "cross",
  },
  {
    feature: "Determination",
    desktopFeature: "Clinical Determination",
    icon: "/ESA ICons/Icon-18.svg",
    myEsa: "Independent clinical evaluation and professional judgment",
    others: "May offer instant approval without a proper evaluation",
    othersType: "cross",
  },
  {
    feature: "Telehealth",
    desktopFeature: "Secure Telehealth",
    icon: "/ESA ICons/Icon-15.svg",
    myEsa: "HIPAA-compliant telehealth designed for privacy and security",
    others: "Privacy and security practices may vary",
    othersType: "warning",
  },
  {
    feature: "Compliance",
    desktopFeature: "Compliance-Focused",
    icon: "/ESA ICons/Icon-17.svg",
    myEsa: "Focused on applicable FHA, HUD, and professional requirements",
    others: "May not follow applicable guidelines",
    othersType: "warning",
  },
  {
    feature: "Transparency",
    desktopFeature: "Transparent Process",
    icon: "/ESA ICons/Icon-26.svg",
    myEsa: "Clear steps and straightforward communication",
    others: "Process or fees may not always be clear",
    othersType: "cross",
  },
  {
    feature: "Privacy",
    desktopFeature: "Privacy Protection",
    icon: "/ESA ICons/Glyph-3.svg",
    myEsa: "Personal information is protected through secure systems",
    others: "Privacy protections may vary",
    othersType: "cross",
  },
  {
    feature: "Nationwide",
    desktopFeature: "Nationwide Access",
    icon: "/ESA ICons/Icon-24.svg",
    myEsa: "Licensed providers available across all U.S. states, where allowed",
    others: "Availability may be limited by location",
    othersType: "warning",
  },
  {
    feature: "Trust",
    desktopFeature: "Trust & Legitimacy",
    icon: "/ESA ICons/Icon-19.svg",
    myEsa: "Serving clients since 2019 with licensed professionals",
    others: "Provider credentials or reputation may be unclear",
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
            <div className="grid grid-cols-[1fr_124px_1fr] sm:grid-cols-[1fr_214px_1fr] md:grid-cols-[1fr_234px_1fr] items-center h-[62px] sm:h-[70px]">
              <h3 className="font-heading font-bold text-center text-xs sm:text-base text-primary">Features</h3>
              <div />
              <h3 className="font-heading font-bold text-center text-xs sm:text-base text-primary">Others</h3>
            </div>

            <div className="divide-y divide-[#C8B9A7]/60 border-t border-[#C8B9A7]/60">
              {comparisonRows.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-[1fr_124px_1fr] sm:grid-cols-[1fr_214px_1fr] md:grid-cols-[1fr_234px_1fr] items-center h-[116px] sm:h-[114px]"
                >
                  <div className="px-1 sm:px-2 flex items-center justify-center text-center min-w-0">
                    <h4 className="font-heading font-bold text-center text-[10.5px] sm:text-[13px] md:text-sm leading-tight text-primary break-words">{row.feature}</h4>
                  </div>
                  <div />
                  <div className="px-1.5 sm:px-2 flex flex-col items-center justify-center text-center gap-1">
                    {row.othersType === "cross" ? <RedCrossIcon /> : <WarningOrangeIcon />}
                    <span className="font-sans font-medium text-[10.5px] sm:text-[12px] md:text-[13px] leading-[14px] sm:leading-[17px] text-body-text">
                      {row.others}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Raised center card: ESA Therapist */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-[-14px] w-[124px] sm:w-[214px] md:w-[234px] rounded-[20px] shadow-[3px_3px_47.6px_1px_rgba(0,0,0,0.1)] z-10 overflow-hidden color-gradient"
          >
            <div className="h-[76px] sm:h-[84px] rounded-b-[20px] flex items-center justify-center px-3 text-center bg-[#1A3D4F]/35">
              <h3 className="heading-h4 text-background text-center leading-tight text-sm sm:text-base">
                ESA
                <br />
                Therapist
              </h3>
            </div>
            <div className="divide-y divide-[#C8B9A7]/25">
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="h-[116px] sm:h-[114px] px-1.5 sm:px-2.5 flex flex-col items-center justify-center text-center gap-1">
                  <GreenCheckIcon />
                  <span className="font-sans font-medium text-[10.5px] sm:text-[12px] md:text-[13px] leading-[14px] sm:leading-[17px] text-background">
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
          designWidth={1440}
          designHeight={665}
          className="hidden lg:block relative"
        >
          <div className="relative w-[1440px] pt-[17px] pb-[16px] flex justify-center">
            <div className="w-[1440px] relative">
              {/* Main Background Frame */}
              <div className="w-full bg-background rounded-[20px] shadow-[0_2px_5.2px_rgba(0,0,0,0.15)] pb-[14px] relative z-0">
                {/* Header Labels for FEATURES and OTHERS */}
                <div className="flex items-center px-[25px] h-[74px]">
                  <div className="w-[320px] text-center shrink-0">
                    <p className="heading-h3">
                      FEATURES
                    </p>
                  </div>
                  <div className="w-[580px] shrink-0" />
                  <div className="w-[490px] text-center shrink-0">
                    <p className="heading-h3">
                      OTHERS
                    </p>
                  </div>
                </div>

                {/* Table Rows */}
                <div className="divide-y divide-[#C8B9A7]/60 mx-6 border-t border-[#C8B9A7]/60">
                  {comparisonRows.map((row, idx) => (
                    <div key={idx} className="flex items-center h-[60px] px-[25px]">
                      {/* Features Column: 320px */}
                      <div className="w-[320px] shrink-0 flex items-center gap-3.5">
                        <div className="w-[36px] h-[36px] rounded-full bg-white shadow-[0_1px_1.5px_rgba(0,0,0,0.25)] flex items-center justify-center shrink-0">
                          <Image
                            src={row.icon}
                            alt={row.desktopFeature}
                            width={24}
                            height={24}
                            unoptimized
                            className="icon-md object-contain"
                          />
                        </div>
                        <h4 className="heading-h4 whitespace-nowrap">
                          {row.desktopFeature}
                        </h4>
                      </div>

                      {/* Empty spacer matching elevated card exactly: 580px */}
                      <div className="w-[580px] shrink-0" />

                      {/* Others Column: 490px */}
                      <div className="w-[490px] shrink-0 flex items-center justify-start gap-3 pl-6">
                        {row.othersType === "cross" ? <RedCrossIcon /> : <WarningOrangeIcon />}
                        <span className="body-text text-left whitespace-nowrap">
                          {row.others}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Elevated Center Card: MY ESA THERAPIST (teal, precisely aligned over spacer from x=345px to 925px) */}
              <div
                className="absolute left-[345px] top-[-17px] bottom-[-16px] w-[580px] rounded-[20px] shadow-[3px_3px_47.6px_1px_rgba(0,0,0,0.1)] z-10 overflow-hidden color-gradient"
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
          <CtaButton href="#how-it-works">Get Started</CtaButton>
          <p className="body-small text-center">
            If not approved after your evaluation? You get a full refund.
          </p>
        </div>
      </div>
    </section>
  );
}
