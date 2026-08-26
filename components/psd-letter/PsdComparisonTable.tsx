"use client";

import React from "react";
import Image from "next/image";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

function GreenCheckIcon() {
  return (
    <span className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] rounded-full bg-[#00BA00] flex items-center justify-center shrink-0 shadow-xs">
      <svg className="w-2.5 h-2 md:w-3 md:h-2.5" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 5.5L5 9L12.5 1.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}

function RedCrossIcon() {
  return (
    <span className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] rounded-full bg-[#FF5023] flex items-center justify-center shrink-0 shadow-xs">
      <svg className="w-2.5 h-2.5 md:w-3 md:h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L10 10M10 2L2 10" stroke="#FFF5F5" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </span>
  );
}

function WarningOrangeIcon() {
  return (
    <span className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] rounded-full bg-[#E8B92C] flex items-center justify-center shrink-0 shadow-xs">
      <svg className="w-3 h-3" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    icon: "/psdletter-comparisiontable-pubicaccess.svg",
    psd: { text: "Yes - ADA Protected", type: "check" },
    esa: { text: "No public access", type: "cross" },
  },
  {
    feature: "Housing Rights (FHA)",
    icon: "/psdletter-comparisiontable-housingrights.svg",
    psd: { text: "Yes", type: "check" },
    esa: { text: "Yes", type: "check" },
  },
  {
    feature: "Airline Travel",
    icon: "/psd-benfit-section-airtravel.svg",
    psd: { text: "Airline Dependent", type: "warning" },
    esa: { text: "Airline Dependent", type: "warning" },
  },
  {
    feature: "Dog Training",
    icon: "/psdletter-comparisiontable-dogtraining.svg",
    psd: { text: "Must perform tasks", type: "check" },
    esa: { text: "Not Required", type: "cross" },
  },
  {
    feature: "Restaurant & Stores",
    icon: "/psdletter-comparisiontable-restaurant.svg",
    psd: { text: "Allowed", type: "check" },
    esa: { text: "Not Allowed", type: "cross" },
  },
  {
    feature: "Therapist Letter",
    icon: "/psdletter-comparisiontable-therapistletter.svg",
    psd: { text: "Recommended", type: "check" },
    esa: { text: "Required for Housing", type: "check" },
  },
  {
    feature: "Animal Allowed",
    icon: "/psdletter-comparisiontable-animalallowed.svg",
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
    <section id="compare" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1441px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-[758px] mx-auto mb-12 space-y-3">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#2E5A66] leading-[54px] tracking-[-0.0066em]">
            PSD Letter vs ESA Letter
          </h2>
          <p className="text-[#5F6B6F] text-base sm:text-[18px] font-semibold leading-[30px] font-sans">
            We set the standard for professional care, compliance, and trust.
          </p>
        </div>

        {/* Tablet & Desktop Comparison Table Structure */}
        <div className="hidden md:block w-full max-w-[1100px] relative">
          {/* Main Background Frame: Beige/Cream for center & right columns */}
          <div className="w-full bg-[#FAF7F2] rounded-[24px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-[#EDE8DE] overflow-hidden">
            {/* Header Row for PSD Letter and ESA Letter */}
            <div className="grid grid-cols-12 items-center h-[76px] border-b border-[#E6DEC8]/50">
              {/* Spacer matching elevated Features column width */}
              <div className="col-span-4" />

              {/* PSD Letter Header */}
              <div className="col-span-4 text-center">
                <h3 className="font-heading text-[18px] lg:text-[22px] font-bold text-[#2E5A66]">
                  PSD Letter
                </h3>
              </div>

              {/* ESA Letter Header */}
              <div className="col-span-4 text-center">
                <h3 className="font-heading text-[18px] lg:text-[22px] font-bold text-[#2E5A66]">
                  ESA Letter
                </h3>
              </div>
            </div>

            {/* Table Rows for PSD & ESA */}
            <div className="divide-y divide-[#E6DEC8]/50">
              {psdComparisonRows.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 items-center h-[62px]"
                >
                  {/* Empty space matching elevated Features column */}
                  <div className="col-span-4" />

                  {/* PSD Letter Column */}
                  <div className="col-span-4 flex items-center justify-start gap-2.5 px-6 lg:px-8">
                    <StatusIcon type={row.psd.type} />
                    <span className="text-[13px] lg:text-[15px] text-[#5F6B6F] font-normal leading-snug font-sans italic">
                      {row.psd.text}
                    </span>
                  </div>

                  {/* ESA Letter Column */}
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

          {/* Elevated Left Card: FEATURES Column with White Body & Drop Shadow */}
          <div className="absolute left-0 top-0 w-[33.333%] bg-white rounded-[20px] shadow-[0_10px_35px_rgba(0,0,0,0.08)] border border-[#E2E8F0] z-10 overflow-hidden">
            {/* Top Dark Teal Header Box */}
            <div
              className="h-[76px] flex items-center justify-center px-6"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <h3 className="font-heading text-[18px] lg:text-[22px] font-bold text-white tracking-wide">
                Features
              </h3>
            </div>

            {/* White Body Rows */}
            <div className="divide-y divide-[#E2E8F0]">
              {psdComparisonRows.map((row, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 h-[62px] px-5 lg:px-6 bg-white"
                >
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

        {/* Mobile View (< 768px) */}
        <div className="md:hidden w-full space-y-6 max-w-xl mx-auto">
          {/* Card 1: PSD Letter */}
          <div className="bg-white rounded-3xl shadow-lg border border-[#2E5A66]/20 overflow-hidden">
            <div
              className="py-4 px-6 text-center text-white font-heading text-xl font-bold"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              PSD Letter
            </div>
            <div className="p-5 space-y-3.5 divide-y divide-slate-100">
              {psdComparisonRows.map((row, idx) => (
                <div key={idx} className="pt-3 first:pt-0 flex items-start gap-3">
                  <StatusIcon type={row.psd.type} />
                  <div>
                    <div className="font-heading font-bold text-[#2E5A66] text-sm">
                      {row.feature}
                    </div>
                    <div className="text-xs text-[#5F6B6F] mt-0.5 italic">
                      {row.psd.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: ESA Letter */}
          <div className="bg-[#FAF7F2] rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3.5 divide-y divide-[#C8B9A7]/30">
            <h3 className="font-heading text-lg font-bold text-[#2E5A66] text-center pb-1">
              ESA Letter
            </h3>
            {psdComparisonRows.map((row, idx) => (
              <div key={idx} className="pt-3 first:pt-0 flex items-start gap-3">
                <StatusIcon type={row.esa.type} />
                <div>
                  <div className="font-heading font-semibold text-slate-800 text-sm">
                    {row.feature}
                  </div>
                  <div className="text-xs text-[#5F6B6F] mt-0.5 italic">
                    {row.esa.text}
                  </div>
                </div>
              </div>
            ))}
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
                src="/send-icon.svg"
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
