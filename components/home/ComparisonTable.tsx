"use client";

import React from "react";
import Image from "next/image";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

function GreenCheckIcon() {
  return (
    <span className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] lg:w-[24px] lg:h-[24px] xl:w-[26px] xl:h-[26px] rounded-full bg-[#00BA00] flex items-center justify-center shrink-0 shadow-xs">
      <svg className="w-2.5 h-2 md:w-3 md:h-2.5 lg:w-3.5 lg:h-3" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 5.5L5 9L12.5 1.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}

function RedCrossIcon() {
  return (
    <span className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] lg:w-[24px] lg:h-[24px] xl:w-[26px] xl:h-[26px] rounded-full bg-[#FF5023] flex items-center justify-center shrink-0 shadow-xs">
      <svg className="w-2.5 h-2.5 md:w-3 md:h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L10 10M10 2L2 10" stroke="#FFF5F5" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </span>
  );
}

function WarningOrangeIcon() {
  return (
    <span className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] lg:w-[24px] lg:h-[24px] xl:w-[26px] xl:h-[26px] rounded-full bg-[#E8B92C] flex items-center justify-center shrink-0 shadow-xs">
      <svg className="w-3 h-3" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 3.5V7.5M7 10.5H7.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </span>
  );
}

const comparisonRows = [
  {
    feature: "Evaluations",
    icon: "/comparison-evaluations.svg",
    myEsa: "Evaluations by state licensed mental health professionals",
    others: "Often not licensed professionals",
    othersType: "cross",
  },
  {
    feature: "Determination",
    icon: "/comparison-determination.svg",
    myEsa: "Independent clinical evaluation & professional judgement",
    others: "Instant approval or no evaluation",
    othersType: "cross",
  },
  {
    feature: "Telehealth",
    icon: "/comparison-telehealth.svg",
    myEsa: "HIPAA-compliant teleheath for your privacy & secuirity",
    others: "Privacy may be lacking",
    othersType: "warning",
  },
  {
    feature: "Compliance-focused",
    icon: "/comparison-compliance.svg",
    myEsa: "Aligned wih FHA & HUD guidance & best practices",
    others: "Often non-compliant with guidelines",
    othersType: "warning",
  },
  {
    feature: "Transparency",
    icon: "/comparison-transparency.svg",
    myEsa: "Clear steps & honest communication",
    others: "Unclear process or hidden fees",
    othersType: "cross",
  },
  {
    feature: "Privacy",
    icon: "/comparison-privacy.svg",
    myEsa: "Your information is encrypted and never shared",
    others: "Privacy protections may be weak",
    othersType: "cross",
  },
  {
    feature: "Nationwide",
    icon: "/comparisontable-nationwide.svg",
    myEsa: "Licensed providers in all U.S. states (where allowed)",
    others: "Limited or regional only",
    othersType: "warning",
  },
  {
    feature: "Trust & Legitimacy",
    icon: "/comparisontable-trust&legacy.svg",
    myEsa: "Trusted by thousands since 2019",
    others: "Unknown sources or reviews",
    othersType: "cross",
  },
];

export function ComparisonTable() {
  return (
    <section id="compare" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1441px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-[758px] mx-auto mb-12 space-y-3">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#2E5A66] leading-[54px] tracking-[-0.0066em]">
            Compare to other ESA Letter Services
          </h2>
          <p className="text-[#5F6B6F] text-base sm:text-[18px] font-semibold leading-[30px] font-sans">
            We set the standard for professional care, compliance, and trust.
          </p>
        </div>

        {/* Tablet & Desktop Comparison Table Structure */}
        <div className="hidden md:block w-full max-w-[1210px] relative">
          {/* Main Background Frame */}
          <div className="w-full bg-[#FAF7F2] rounded-[20px] shadow-[0_2px_6px_rgba(0,0,0,0.15)] pb-6 relative z-0">
            {/* Header Labels for FEATURES and OTHERS */}
            <div className="flex items-center justify-between pt-6 px-3 md:px-4 lg:px-6 xl:px-12 h-[75px] md:h-[75px] lg:h-[80px]">
              <div className="w-[190px] md:w-[210px] lg:w-[250px] xl:w-[300px] text-center shrink-0">
                <h3 className="font-heading text-[16px] md:text-[17px] lg:text-[20px] xl:text-[24px] font-bold text-[#2E5A66] leading-[32px]">
                  FEATURES
                </h3>
              </div>
              <div className="w-[240px] md:w-[260px] lg:w-[340px] xl:w-[478px] shrink-0" /> {/* Spacer for elevated center card */}
              <div className="w-[190px] md:w-[210px] lg:w-[250px] xl:w-[300px] text-center shrink-0">
                <h3 className="font-heading text-[16px] md:text-[17px] lg:text-[20px] xl:text-[24px] font-bold text-[#2E5A66] leading-[32px]">
                  OTHERS
                </h3>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-[#C8B9A7]/30 px-2 md:px-3 lg:px-4 xl:px-6">
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="flex items-center justify-between h-[61px] px-1 md:px-2 xl:px-6">
                  {/* Features Column */}
                  <div className="w-[190px] md:w-[210px] lg:w-[250px] xl:w-[280px] shrink-0 flex items-center gap-1.5 md:gap-2 lg:gap-2.5 xl:gap-3">
                    <div className="w-[24px] h-[24px] md:w-[26px] md:h-[26px] lg:w-[30px] lg:h-[30px] xl:w-[36px] xl:h-[36px] rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.25)] flex items-center justify-center shrink-0">
                      <Image
                        src={row.icon}
                        alt=""
                        width={18}
                        height={18}
                        unoptimized
                        className="object-contain w-3.5 h-3.5 md:w-4 md:h-4 xl:w-5 xl:h-5"
                      />
                    </div>
                    <span className="font-heading text-[12px] md:text-[13px] lg:text-[15px] xl:text-[20px] font-bold text-[#2E5A66] leading-tight">
                      {row.feature}
                    </span>
                  </div>

                  {/* Empty space matching elevated column width */}
                  <div className="w-[240px] md:w-[260px] lg:w-[340px] xl:w-[478px] shrink-0" />

                  {/* Others Column */}
                  <div className="w-[190px] md:w-[210px] lg:w-[250px] xl:w-[300px] shrink-0 flex items-center justify-start gap-1.5 md:gap-2 xl:gap-2.5 pl-1 md:pl-2 xl:pl-4">
                    {row.othersType === "cross" ? (
                      <RedCrossIcon />
                    ) : (
                      <WarningOrangeIcon />
                    )}
                    <span className="text-[10.5px] md:text-[11px] lg:text-[13px] xl:text-[16px] text-[#5F6B6F] font-normal leading-[14px] md:leading-[15px] lg:leading-[18px] xl:leading-[24px] font-[family-name:var(--font-lato)] text-left">
                      {row.others}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Elevated Center Overlay Card: MY ESA THERAPIST */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-[-18px] w-[240px] md:w-[260px] lg:w-[340px] xl:w-[478px] bg-white rounded-[20px] shadow-[3px_3px_48px_rgba(0,0,0,0.1)] z-10 overflow-hidden pb-4"
          >
            {/* Top Teal Gradient Header Banner */}
            <div
              className="h-[84px] md:h-[84px] lg:h-[88px] xl:h-[91px] rounded-b-[20px] flex items-center justify-center px-2 md:px-3 xl:px-6 shadow-md"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <h3 className="font-heading text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-bold text-[#FAF7F2] tracking-wide">
                MY ESA THERAPIST
              </h3>
            </div>

            {/* Elevated Card Rows */}
            <div className="divide-y divide-[#C8B9A7]/20 pt-2">
              {comparisonRows.map((row, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 md:gap-2 lg:gap-2.5 xl:gap-3 h-[61px] px-2.5 md:px-3 lg:px-4 xl:px-6 text-left"
                >
                  <GreenCheckIcon />
                  <span className="text-[10.5px] md:text-[11px] lg:text-[13px] xl:text-[16px] text-[#5F6B6F] font-medium leading-[14px] md:leading-[15px] lg:leading-[18px] xl:leading-[22px] font-[family-name:var(--font-lato)]">
                    {row.myEsa}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Responsive View (< 768px) */}
        <div className="md:hidden w-full space-y-6 max-w-xl mx-auto">
          {/* Card 1: My ESA Therapist (Highlighted) */}
          <div className="bg-white rounded-3xl shadow-xl border-2 border-[#2E5A66]/20 overflow-hidden">
            <div
              className="py-5 px-6 text-center text-white font-heading text-2xl font-bold"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              MY ESA THERAPIST
            </div>
            <div className="p-6 space-y-4 divide-y divide-slate-100">
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="pt-3 first:pt-0 flex items-start gap-3">
                  <GreenCheckIcon />
                  <div>
                    <div className="font-heading font-bold text-[#2E5A66] text-base">
                      {row.feature}
                    </div>
                    <div className="text-sm text-[#5F6B6F] mt-0.5">
                      {row.myEsa}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Other Services */}
          <div className="bg-[#FAF7F2] rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 divide-y divide-[#C8B9A7]/30">
            <h3 className="font-heading text-xl font-bold text-[#2E5A66] text-center pb-2">
              Other ESA Services
            </h3>
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="pt-3 first:pt-0 flex items-start gap-3">
                {row.othersType === "cross" ? <RedCrossIcon /> : <WarningOrangeIcon />}
                <div>
                  <div className="font-heading font-semibold text-slate-800 text-sm">
                    {row.feature}
                  </div>
                  <div className="text-xs text-[#5F6B6F] mt-0.5">
                    {row.others}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12">
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-between w-[179px] h-[48px] rounded-[30px] pl-6 pr-1.5 text-white font-semibold text-[16px] shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 transition-opacity"
            style={{ backgroundImage: TEAL_GRADIENT }}
          >
            <span className="font-sans">Get Started</span>
            <span className="w-[42px] h-[42px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
              <Image
                src="/send-icon.svg"
                alt=""
                width={22}
                height={22}
                className="translate-x-[1px]"
                style={{ width: "auto", height: "auto" }}
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
