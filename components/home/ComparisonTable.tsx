"use client";

import React from "react";
import Image from "next/image";
import { CtaButton } from "@/components/common/CtaButton";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

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
    <span className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px] rounded-full bg-[#E8B92C] flex items-center justify-center shrink-0 shadow-xs">
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
    icon: "/home/comparison-evaluations.svg",
    myEsa: "Evaluations by state licensed mental health professionals",
    others: "Often not licensed professionals",
    othersType: "cross",
  },
  {
    feature: "Determination",
    desktopFeature: "Clinical Determination",
    icon: "/home/comparison-determination.svg",
    myEsa: "Independent clinical evaluation & professional judgement",
    others: "Instant approval or no evaluation",
    othersType: "cross",
  },
  {
    feature: "Telehealth",
    desktopFeature: "Secure Telehealth",
    icon: "/home/comparison-telehealth.svg",
    myEsa: "HIPAA-compliant teleheath for your privacy & secuirity",
    others: "Privacy may be lacking",
    othersType: "warning",
  },
  {
    feature: "Compliance",
    desktopFeature: "Compliance-focused",
    icon: "/home/comparison-compliance.svg",
    myEsa: "Aligned wih FHA & HUD guidance & best practices",
    others: "Often non-compliant with guidelines",
    othersType: "warning",
  },
  {
    feature: "Transparency",
    desktopFeature: "Transparent process",
    icon: "/home/comparison-transparency.svg",
    myEsa: "Clear steps & honest communication",
    others: "Unclear process or hidden fees",
    othersType: "cross",
  },
  {
    feature: "Privacy",
    desktopFeature: "Privacy Protection",
    icon: "/home/comparison-privacy.svg",
    myEsa: "Your information is encrypted and never shared",
    others: "Privacy protections may be weak",
    othersType: "cross",
  },
  {
    feature: "Nationwide",
    desktopFeature: "Nationwide Access",
    icon: "/home/comparisontable-nationwide.svg",
    myEsa: "Licensed providers in all U.S. states (where allowed)",
    others: "Limited or regional only",
    othersType: "warning",
  },
  {
    feature: "Trust",
    desktopFeature: "Trsut & Legitimacy",
    icon: "/home/comparisontable-trust-legacy.svg",
    myEsa: "Trusted by thousands since 2019",
    others: "Unknown sources or reviews",
    othersType: "cross",
  },
];

export function ComparisonTable() {
  return (
    <section id="compare" className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1441px] mx-auto px-3 sm:px-6 lg:px-12 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-[758px] mx-auto mb-10 sm:mb-12 lg:mb-14 space-y-3">
          <h2 className="heading-h2 text-[#2E5A66] capitalize">
            Compare To Other ESA Letter Services
          </h2>
          <p className="body-large text-[#5F6B6F]">
            We set the standard for professional care, compliance, and trust.
          </p>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 1. MOBILE & TABLET 3-COLUMN LAYOUT (< 1024px)       */}
        {/* Matches Frame 1000012119 / Frame 1000011728 exactly */}
        {/* ---------------------------------------------------- */}
        <div className="block lg:hidden w-full max-w-[361px] sm:max-w-[600px] md:max-w-[680px] relative mx-auto pt-[14px]">
          {/* Cream frame with Features / Others columns */}
          <div className="w-full bg-[#FAF7F2] rounded-[20px] shadow-[0px_2px_5.2px_rgba(0,0,0,0.15)] relative z-0 pb-3">
            <div className="grid grid-cols-[1fr_124px_1fr] sm:grid-cols-[1fr_214px_1fr] md:grid-cols-[1fr_234px_1fr] items-center h-[62px] sm:h-[70px]">
              <h3 className="heading-h4 text-[#2E5A66] text-center">Features</h3>
              <div />
              <h3 className="heading-h4 text-[#2E5A66] text-center">Others</h3>
            </div>

            <div className="divide-y divide-[#C8B9A7]/60 border-t border-[#C8B9A7]/60">
              {comparisonRows.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-[1fr_124px_1fr] sm:grid-cols-[1fr_214px_1fr] md:grid-cols-[1fr_234px_1fr] items-center h-[102px] sm:h-[108px]"
                >
                  <div className="px-2 flex items-center justify-center text-center">
                    <h4 className="heading-h4 text-[#2E5A66] text-center text-xs sm:text-sm">{row.feature}</h4>
                  </div>
                  <div />
                  <div className="px-2 flex flex-col items-center justify-center text-center gap-1.5">
                    {row.othersType === "cross" ? <RedCrossIcon /> : <WarningOrangeIcon />}
                    <span className="body-small text-[#5F6B6F]">
                      {row.others}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Raised center card: ESA Therapist */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-[-14px] w-[124px] sm:w-[214px] md:w-[234px] rounded-[20px] shadow-[3px_3px_47.6px_1px_rgba(0,0,0,0.1)] z-10 overflow-hidden"
            style={{ backgroundImage: TEAL_GRADIENT }}
          >
            <div className="h-[76px] sm:h-[84px] rounded-b-[20px] flex items-center justify-center px-3 text-center bg-[#1A3D4F]/35">
              <h3 className="heading-h4 text-[#FAF7F2] text-center leading-tight">
                ESA
                <br />
                Therapist
              </h3>
            </div>
            <div className="divide-y divide-[#C8B9A7]/25">
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="h-[102px] sm:h-[108px] px-2.5 flex flex-col items-center justify-center text-center gap-1.5">
                  <GreenCheckIcon />
                  <span className="body-small text-[#FAF7F2]">
                    {row.myEsa}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 2. DESKTOP VIEW (>= 1024px)                          */}
        {/* Full Spacious Horizontal Row Layout                  */}
        {/* ---------------------------------------------------- */}
        <div className="hidden lg:block w-full max-w-[1210px] relative">
          {/* Main Background Frame */}
          <div className="w-full bg-[#FAF7F2] rounded-[20px] shadow-[0_2px_5.2px_rgba(0,0,0,0.15)] pb-[27px] relative z-0">
            {/* Header Labels for FEATURES and OTHERS */}
            <div className="flex items-center justify-between pt-[25px] px-6 xl:px-12 h-[74px]">
              <div className="w-[220px] xl:w-[300px] text-center shrink-0">
                <h3 className="heading-h3 text-[#2E5A66]">
                  FEATURES
                </h3>
              </div>
              <div className="w-[400px] xl:w-[478px] shrink-0" />
              <div className="w-[220px] xl:w-[340px] text-center shrink-0">
                <h3 className="heading-h3 text-[#2E5A66]">
                  OTHERS
                </h3>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-[#C8B9A7]/60 mx-4 xl:mx-[18px] border-t border-[#C8B9A7]/60">
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="flex items-center justify-between h-[61px] px-3 xl:px-[10px]">
                  {/* Features Column */}
                  <div className="w-[220px] xl:w-[280px] shrink-0 flex items-center gap-3 xl:gap-[26px]">
                    <div className="w-[30px] h-[30px] xl:w-[36px] xl:h-[36px] rounded-full bg-white shadow-[0_1px_1.5px_rgba(0,0,0,0.25)] flex items-center justify-center shrink-0">
                      <Image
                        src={row.icon}
                        alt=""
                        width={18}
                        height={18}
                        unoptimized
                        className="object-contain w-4 h-4 xl:w-[18px] xl:h-[18px]"
                      />
                    </div>
                    <h4 className="heading-h4 text-[#2E5A66]">
                      {row.desktopFeature}
                    </h4>
                  </div>

                  {/* Empty space matching elevated column width */}
                  <div className="w-[400px] xl:w-[478px] shrink-0" />

                  {/* Others Column */}
                  <div className="w-[220px] xl:w-[340px] shrink-0 flex items-center justify-start gap-2 xl:gap-3 pl-1 xl:pl-4">
                    {row.othersType === "cross" ? <RedCrossIcon /> : <WarningOrangeIcon />}
                    <span className="body-small xl:body-text text-[#5F6B6F] text-left">
                      {row.others}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Elevated Center Card: MY ESA THERAPIST (teal, extends above and below the frame) */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-[-17px] bottom-[-28px] w-[400px] xl:w-[478px] rounded-[20px] shadow-[3px_3px_47.6px_1px_rgba(0,0,0,0.1)] z-10 overflow-hidden"
            style={{ backgroundImage: TEAL_GRADIENT }}
          >
            <div className="h-[91px] rounded-b-[20px] flex items-center justify-center px-4 bg-[#1A3D4F]/35">
              <h3 className="heading-h3 text-[#FAF7F2]">
                MY ESA THERAPIST
              </h3>
            </div>

            <div className="divide-y divide-[#C8B9A7]/25 pt-0">
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="flex items-center gap-2.5 xl:gap-3 h-[61px] px-4 xl:px-5 text-left">
                  <span className="shrink-0">
                    <GreenCheckIcon />
                  </span>
                  <span className="min-w-0 body-small xl:body-text text-[#FAF7F2]">
                    {row.myEsa}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center gap-2">
          <CtaButton href="#how-it-works">Get Started</CtaButton>
          <p className="body-small text-[#5F6B6F] text-center">
            If not approved after your evaluation? You get a full refund.
          </p>
        </div>
      </div>
    </section>
  );
}
