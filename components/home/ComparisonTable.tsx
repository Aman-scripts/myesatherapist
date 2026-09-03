"use client";

import React from "react";
import Image from "next/image";

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
    icon: "/home/comparison-evaluations.svg",
    myEsa: "Evaluations by state licensed mental health professionals",
    others: "Often not licensed professionals",
    othersType: "cross",
  },
  {
    feature: "Determination",
    icon: "/home/comparison-determination.svg",
    myEsa: "Independent clinical evaluation & professional judgement",
    others: "Instant approval or no evaluation",
    othersType: "cross",
  },
  {
    feature: "Telehealth",
    icon: "/home/comparison-telehealth.svg",
    myEsa: "HIPAA-compliant teleheath for your privacy & secuirity",
    others: "Privacy may be lacking",
    othersType: "warning",
  },
  {
    feature: "Compliance",
    icon: "/home/comparison-compliance.svg",
    myEsa: "Aligned wih FHA & HUD guidance & best practices",
    others: "Often non-compliant with guidelines",
    othersType: "warning",
  },
  {
    feature: "Transparency",
    icon: "/home/comparison-transparency.svg",
    myEsa: "Clear steps & honest communication",
    others: "Unclear process or hidden fees",
    othersType: "cross",
  },
  {
    feature: "Privacy",
    icon: "/home/comparison-privacy.svg",
    myEsa: "Your information is encrypted and never shared",
    others: "Privacy protections may be weak",
    othersType: "cross",
  },
  {
    feature: "Nationwide",
    icon: "/home/comparisontable-nationwide.svg",
    myEsa: "Licensed providers in all U.S. states (where allowed)",
    others: "Limited or regional only",
    othersType: "warning",
  },
  {
    feature: "Trust",
    icon: "/home/comparisontable-trust&legacy.svg",
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
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-[44px] font-bold text-[#2E5A66] leading-tight sm:leading-[46px] lg:leading-[54px] tracking-[-0.0066em]">
            Compare to other ESA Letter Services
          </h2>
          <p className="text-[#5F6B6F] text-sm sm:text-base lg:text-[18px] font-semibold leading-relaxed sm:leading-[30px] font-sans">
            We set the standard for professional care, compliance, and trust.
          </p>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 1. MOBILE & TABLET 3-COLUMN LAYOUT (< 1024px)       */}
        {/* Matches Frame 1000012119 / Frame 1000011728 exactly */}
        {/* ---------------------------------------------------- */}
        <div className="block lg:hidden w-full max-w-[361px] sm:max-w-[600px] md:max-w-[680px] relative mx-auto pt-6">
          {/* Main Background Box (Frame 1000011728) */}
          <div className="w-full bg-[#FAF7F2] rounded-[20px] shadow-[0px_2px_5.2px_rgba(0,0,0,0.15)] relative z-0 pb-4">
            {/* Header Row */}
            <div className="flex items-center justify-between px-2 sm:px-6 h-[64px] sm:h-[72px]">
              {/* Features Heading */}
              <div className="w-[88px] sm:w-[150px] md:w-[170px] text-center">
                <h3 className="font-heading text-[15px] sm:text-lg md:text-xl font-bold text-[#2E5A66]">
                  Features
                </h3>
              </div>

              {/* Spacer for Center Elevated Card */}
              <div className="w-[130px] sm:w-[210px] md:w-[230px] shrink-0" />

              {/* Others Heading */}
              <div className="w-[96px] sm:w-[150px] md:w-[170px] text-center">
                <h3 className="font-heading text-[15px] sm:text-lg md:text-xl font-bold text-[#2E5A66]">
                  Others
                </h3>
              </div>
            </div>

            {/* Divider Rows */}
            <div className="divide-y divide-[#C8B9A7]/40">
              {comparisonRows.map((row, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between min-h-[94px] sm:min-h-[102px] px-2 sm:px-6"
                >
                  {/* Left Column: Feature Title */}
                  <div className="w-[88px] sm:w-[150px] md:w-[170px] flex items-center justify-center text-center">
                    <span className="font-heading font-bold text-[13.5px] sm:text-[15px] md:text-[16px] text-[#2E5A66] leading-tight">
                      {row.feature}
                    </span>
                  </div>

                  {/* Spacer for Center Card */}
                  <div className="w-[130px] sm:w-[210px] md:w-[230px] shrink-0" />

                  {/* Right Column: Others (Icon on Top + Text Below) */}
                  <div className="w-[96px] sm:w-[150px] md:w-[170px] flex flex-col items-center justify-center text-center px-1">
                    {row.othersType === "cross" ? <RedCrossIcon /> : <WarningOrangeIcon />}
                    <span className="font-sans italic font-normal text-[11px] sm:text-[12px] md:text-[13px] text-[#5F6B6F] leading-[15px] sm:leading-[16px] text-center mt-1.5">
                      {row.others}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Elevated Center Overlay Card: ESA Therapist (Frame 1000011729) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[134px] sm:w-[214px] md:w-[234px] bg-white rounded-[20px] shadow-[3px_3px_47.6px_1px_rgba(0,0,0,0.1)] z-10 overflow-hidden pb-4">
            {/* Top Teal Gradient Header Banner (Rectangle 8) */}
            <div
              className="h-[68px] sm:h-[76px] rounded-b-[20px] flex flex-col items-center justify-center px-2 text-center shadow-md"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <h3 className="font-heading font-bold text-[14.5px] sm:text-[17px] text-[#FAF7F2] leading-[17px] tracking-tight">
                ESA
                <br />
                Therapist
              </h3>
            </div>

            {/* Elevated Rows: Green Check on top + Description Below */}
            <div className="divide-y divide-[#C8B9A7]/30">
              {comparisonRows.map((row, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center text-center min-h-[94px] sm:min-h-[102px] px-2"
                >
                  <GreenCheckIcon />
                  <span className="font-sans italic font-normal text-[11px] sm:text-[12px] md:text-[13px] text-[#5F6B6F] leading-[15px] sm:leading-[16px] text-center mt-1.5">
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
          <div className="w-full bg-[#FAF7F2] rounded-[20px] shadow-[0_2px_6px_rgba(0,0,0,0.15)] pb-6 relative z-0">
            {/* Header Labels for FEATURES and OTHERS */}
            <div className="flex items-center justify-between pt-6 px-6 xl:px-12 h-[80px]">
              <div className="w-[250px] xl:w-[300px] text-center shrink-0">
                <h3 className="font-heading text-[20px] xl:text-[24px] font-bold text-[#2E5A66] leading-[32px]">
                  FEATURES
                </h3>
              </div>
              <div className="w-[340px] xl:w-[478px] shrink-0" />
              <div className="w-[250px] xl:w-[300px] text-center shrink-0">
                <h3 className="font-heading text-[20px] xl:text-[24px] font-bold text-[#2E5A66] leading-[32px]">
                  OTHERS
                </h3>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-[#C8B9A7]/30 px-4 xl:px-6">
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="flex items-center justify-between h-[64px] px-4 xl:px-6">
                  {/* Features Column */}
                  <div className="w-[250px] xl:w-[280px] shrink-0 flex items-center gap-2.5 xl:gap-3">
                    <div className="w-[30px] h-[30px] xl:w-[36px] xl:h-[36px] rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.25)] flex items-center justify-center shrink-0">
                      <Image
                        src={row.icon}
                        alt=""
                        width={18}
                        height={18}
                        unoptimized
                        className="object-contain w-4 h-4 xl:w-5 xl:h-5"
                      />
                    </div>
                    <span className="font-heading text-[16px] xl:text-[20px] font-bold text-[#2E5A66] leading-tight">
                      {row.feature}
                    </span>
                  </div>

                  {/* Empty space matching elevated column width */}
                  <div className="w-[340px] xl:w-[478px] shrink-0" />

                  {/* Others Column */}
                  <div className="w-[250px] xl:w-[300px] shrink-0 flex items-center justify-start gap-2.5 xl:gap-3 pl-2 xl:pl-4">
                    {row.othersType === "cross" ? <RedCrossIcon /> : <WarningOrangeIcon />}
                    <span className="text-[13px] xl:text-[16px] text-[#5F6B6F] font-normal leading-[18px] xl:leading-[24px] font-[family-name:var(--font-lato)] text-left">
                      {row.others}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Elevated Center Overlay Card: MY ESA THERAPIST */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-[-18px] w-[340px] xl:w-[478px] bg-white rounded-[20px] shadow-[3px_3px_48px_rgba(0,0,0,0.1)] z-10 overflow-hidden pb-4"
          >
            {/* Top Teal Gradient Header Banner */}
            <div
              className="h-[88px] xl:h-[91px] rounded-b-[20px] flex items-center justify-center px-4 xl:px-6 shadow-md"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <h3 className="font-heading text-[20px] xl:text-[24px] font-bold text-[#FAF7F2] tracking-wide">
                MY ESA THERAPIST
              </h3>
            </div>

            {/* Elevated Card Rows */}
            <div className="divide-y divide-[#C8B9A7]/20 pt-2">
              {comparisonRows.map((row, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 xl:gap-3 h-[64px] px-4 xl:px-6 text-left"
                >
                  <GreenCheckIcon />
                  <span className="text-[13px] xl:text-[16px] text-[#5F6B6F] font-medium leading-[18px] xl:leading-[22px] font-[family-name:var(--font-lato)]">
                    {row.myEsa}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-10 sm:mt-12">
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-between w-[179px] h-[48px] rounded-[30px] pl-6 pr-1.5 text-white font-semibold text-[16px] shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 transition-opacity"
            style={{ backgroundImage: TEAL_GRADIENT }}
          >
            <span className="font-sans">Get Started</span>
            <span className="w-[42px] h-[42px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
              <Image
                src="/common/send-icon.svg"
                alt=""
                width={22}
                height={24}
                className="w-[22px] h-[24px]"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
