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

interface ComparisonRow {
  feature: string;
  icon: string;
  psd: {
    text: string;
    type: "check" | "cross" | "warning";
  };
  esa: {
    text: string;
    type: "check" | "cross" | "warning";
  };
}

const psdComparisonRows: ComparisonRow[] = [
  {
    feature: "Public Access Rights",
    icon: "/psd-letter/psdletter-comparisiontable-pubicaccess.svg",
    psd: { text: "Yes - ADA Protected", type: "check" },
    esa: { text: "No public access", type: "cross" },
  },
  {
    feature: "Housing Rights (FHA)",
    icon: "/psd-letter/psdletter-comparisiontable-housingrights.svg",
    psd: { text: "Yes", type: "check" },
    esa: { text: "Yes", type: "check" },
  },
  {
    feature: "Airline Travel",
    icon: "/psd-letter/psd-benfit-section-airtravel.svg",
    psd: { text: "Airline Dependent", type: "warning" },
    esa: { text: "Airline Dependent", type: "warning" },
  },
  {
    feature: "Dog Training",
    icon: "/psd-letter/psdletter-comparisiontable-dogtraining.svg",
    psd: { text: "Must perform tasks", type: "check" },
    esa: { text: "Not Required", type: "cross" },
  },
  {
    feature: "Restaurant & Stores",
    icon: "/psd-letter/psdletter-comparisiontable-restaurant.svg",
    psd: { text: "Allowed", type: "check" },
    esa: { text: "Not Allowed", type: "cross" },
  },
  {
    feature: "Therapist Letter",
    icon: "/psd-letter/psdletter-comparisiontable-therapistletter.svg",
    psd: { text: "Recommended", type: "check" },
    esa: { text: "Required for Housing", type: "check" },
  },
  {
    feature: "Animal Allowed",
    icon: "/psd-letter/psdletter-comparisiontable-animalallowed.svg",
    psd: { text: "Dogs only", type: "cross" },
    esa: { text: "Most animals", type: "check" },
  },
];

function StatusIcon({ type }: { type: "check" | "cross" | "warning" }) {
  if (type === "check") return <GreenCheckIcon />;
  if (type === "cross") return <RedCrossIcon />;
  return <WarningOrangeIcon />;
}

export function PsdComparisonTable() {
  return (
    <section id="compare" className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1441px] mx-auto px-3 sm:px-6 lg:px-12 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-[758px] mx-auto mb-10 sm:mb-12 lg:mb-14 space-y-3">
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-[44px] font-bold text-[#2E5A66] leading-tight sm:leading-[46px] lg:leading-[54px] tracking-[-0.0066em]">
            PSD Letter vs ESA Letter
          </h2>
          <p className="text-[#5F6B6F] text-sm sm:text-base lg:text-[18px] font-semibold leading-relaxed sm:leading-[30px] font-sans">
            We set the standard for professional care, compliance, and trust.
          </p>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 1. MOBILE & TABLET 3-COLUMN LAYOUT (< 1024px)       */}
        {/* ---------------------------------------------------- */}
        <div className="block lg:hidden w-full max-w-[361px] sm:max-w-[600px] md:max-w-[680px] relative mx-auto pt-6">
          {/* Main Background Box */}
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

              {/* ESA Letter Heading */}
              <div className="w-[96px] sm:w-[150px] md:w-[170px] text-center">
                <h3 className="font-heading text-[15px] sm:text-lg md:text-xl font-bold text-[#2E5A66]">
                  ESA Letter
                </h3>
              </div>
            </div>

            {/* Divider Rows */}
            <div className="divide-y divide-[#C8B9A7]/40">
              {psdComparisonRows.map((row, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between min-h-[94px] sm:min-h-[102px] px-2 sm:px-6"
                >
                  {/* Left Column: Feature Title */}
                  <div className="w-[88px] sm:w-[150px] md:w-[170px] flex items-center justify-center text-center">
                    <span className="font-heading font-bold text-[13px] sm:text-[14.5px] md:text-[16px] text-[#2E5A66] leading-tight">
                      {row.feature}
                    </span>
                  </div>

                  {/* Spacer for Center Card */}
                  <div className="w-[130px] sm:w-[210px] md:w-[230px] shrink-0" />

                  {/* Right Column: ESA Letter (Icon on Top + Text Below) */}
                  <div className="w-[96px] sm:w-[150px] md:w-[170px] flex flex-col items-center justify-center text-center px-1">
                    <StatusIcon type={row.esa.type} />
                    <span className="font-sans italic font-normal text-[11px] sm:text-[12px] md:text-[13px] text-[#5F6B6F] leading-[15px] sm:leading-[16px] text-center mt-1.5">
                      {row.esa.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Elevated Center Overlay Card: PSD Letter */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[134px] sm:w-[214px] md:w-[234px] bg-white rounded-[20px] shadow-[3px_3px_47.6px_1px_rgba(0,0,0,0.1)] z-10 overflow-hidden pb-4">
            {/* Top Teal Gradient Header Banner */}
            <div
              className="h-[68px] sm:h-[76px] rounded-b-[20px] flex flex-col items-center justify-center px-2 text-center shadow-md"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <h3 className="font-heading font-bold text-[14.5px] sm:text-[17px] text-[#FAF7F2] leading-[17px] tracking-tight">
                PSD
                <br />
                Letter
              </h3>
            </div>

            {/* Elevated Rows: Status Icon on top + Description Below */}
            <div className="divide-y divide-[#C8B9A7]/30">
              {psdComparisonRows.map((row, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center text-center min-h-[94px] sm:min-h-[102px] px-2"
                >
                  <StatusIcon type={row.psd.type} />
                  <span className="font-sans italic font-normal text-[11px] sm:text-[12px] md:text-[13px] text-[#5F6B6F] leading-[15px] sm:leading-[16px] text-center mt-1.5">
                    {row.psd.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 2. DESKTOP VIEW (>= 1024px)                          */}
        {/* ---------------------------------------------------- */}
        <div className="hidden lg:block w-full max-w-[1100px] relative">
          {/* Main Background Frame */}
          <div className="w-full bg-[#FAF7F2] rounded-[24px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-[#EDE8DE] overflow-hidden pb-4">
            {/* Header Row */}
            <div className="grid grid-cols-12 items-center h-[76px] border-b border-[#E6DEC8]/50">
              <div className="col-span-4" />
              <div className="col-span-4 text-center">
                <h3 className="font-heading text-[18px] lg:text-[22px] font-bold text-[#2E5A66]">
                  PSD Letter
                </h3>
              </div>
              <div className="col-span-4 text-center">
                <h3 className="font-heading text-[18px] lg:text-[22px] font-bold text-[#2E5A66]">
                  ESA Letter
                </h3>
              </div>
            </div>

            {/* Table Rows for PSD & ESA */}
            <div className="divide-y divide-[#E6DEC8]/50">
              {psdComparisonRows.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 items-center h-[62px]">
                  <div className="col-span-4" />
                  <div className="col-span-4 flex items-center justify-start gap-2.5 px-6 lg:px-8">
                    <StatusIcon type={row.psd.type} />
                    <span className="text-[13px] lg:text-[15px] text-[#5F6B6F] font-normal leading-snug font-sans italic">
                      {row.psd.text}
                    </span>
                  </div>
                  <div className="col-span-4 flex items-center justify-start gap-2.5 px-6 lg:px-8">
                    <StatusIcon type={row.esa.type} />
                    <span className="text-[13px] lg:text-[15px] text-[#5F6B6F] font-normal leading-snug font-sans italic">
                      {row.esa.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Elevated Left Card: FEATURES Column */}
          <div className="absolute left-0 top-0 w-[33.333%] bg-white rounded-[20px] shadow-[0_10px_35px_rgba(0,0,0,0.08)] border border-[#E2E8F0] z-10 overflow-hidden pb-4">
            <div
              className="h-[76px] flex items-center justify-center px-6"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <h3 className="font-heading text-[18px] lg:text-[22px] font-bold text-white tracking-wide">
                Features
              </h3>
            </div>
            <div className="divide-y divide-[#E2E8F0]">
              {psdComparisonRows.map((row, idx) => (
                <div key={idx} className="flex items-center gap-3 h-[62px] px-5 lg:px-6 bg-white">
                  <div className="w-[32px] h-[32px] rounded-full bg-[#FAF7F2] border border-[#E2E8F0] shadow-xs flex items-center justify-center shrink-0">
                    <Image
                      src={row.icon}
                      alt=""
                      width={18}
                      height={18}
                      unoptimized
                      className="object-contain w-4 h-4 lg:w-[18px] lg:h-[18px]"
                    />
                  </div>
                  <span className="font-heading text-[13px] lg:text-[15px] font-bold text-[#2E5A66] leading-tight">
                    {row.feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-10 sm:mt-12">
          <a
            href="#pricing"
            className="inline-flex items-center justify-between min-w-[210px] h-[48px] rounded-[30px] pl-6 pr-1.5 text-white font-semibold text-[15px] sm:text-[16px] shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 transition-opacity"
            style={{ backgroundImage: TEAL_GRADIENT }}
          >
            <span className="font-sans mr-3">Start Your Consultation</span>
            <span className="w-[36px] h-[36px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
              <Image
                src="/common/send-icon.svg"
                alt=""
                width={18}
                height={20}
                className="w-[18px] h-[20px]"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
