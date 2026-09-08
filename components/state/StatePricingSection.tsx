"use client";

import React from "react";
import Image from "next/image";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

function FeatureBadgeIcon() {
  return (
    <Image
      src="/home/price-section-badge.svg"
      alt=""
      width={16}
      height={16}
      className="shrink-0 w-4 h-4"
    />
  );
}

import { StateData } from "@/data/statesData";

interface StatePricingSectionProps {
  stateName?: string;
  data?: StateData;
}

export function StatePricingSection({ stateName, data }: StatePricingSectionProps) {
  const sectionTitle = data?.pricingTitle || (stateName ? `Emotional Support Animal Plans & Pricing in ${stateName}` : "Emotional Support Animal");
  const sectionSubtitle = data?.pricingSubtitle || "Choose the plan that fits your needs. All plans include essential features to get you started, with options to scale as you grow. No hidden fees and the flexibility to change anytime.";

  const plan1Title = data?.pricingPlan1Title || "ESA Letter";
  const plan1Description = data?.pricingPlan1Description || "Official ESA letter from a U.S.-licensed mental health professional, valid for housing accommodations under federal guidelines.";
  const plan1Price = data?.pricingPlan1Price || "$149";
  const plan1Features = data?.pricingPlan1Features || [
    "Phone consultation",
    "PSD letter if qualified",
    "Official clinic letterhead",
    "Licensed professional",
    "Email delivery",
  ];

  const plan2Title = data?.pricingPlan2Title || "ESA Letter + ID Card";
  const plan2Description = data?.pricingPlan2Description || "Everything in the ESA Letter package, plus an official ESA ID card for easy identification of your emotional support animal.";
  const plan2Price = data?.pricingPlan2Price || "$199";
  const plan2Features = data?.pricingPlan2Features || [
    "Video consultation",
    "PSD letter if qualified",
    "Licensed professional",
    "Priority 24-hour delivery",
    "Email delivery",
  ];

  return (
    <section id="pricing" className="py-14 sm:py-18 lg:py-22 bg-[#FAF7F2] relative z-10 overflow-visible">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-[950px] mx-auto mb-10 sm:mb-14 space-y-3">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#2E5A66] leading-tight lg:leading-[54px] tracking-[-0.00015em] sm:whitespace-nowrap">
            {sectionTitle}
          </h2>
          <p className="text-[#5F6B6F] text-sm sm:text-base lg:text-[18px] font-semibold leading-relaxed sm:leading-[30px] font-sans max-w-[709px] mx-auto">
            {sectionSubtitle}
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-8 w-full max-w-[660px] mx-auto">
          {/* 1. Starter Plan Card: ESA Letter */}
          <div className="w-full sm:w-[300px] min-h-[466px] bg-white rounded-[24px] border border-[#E1E1E1] p-7 sm:p-8 shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.1)] flex flex-col justify-between shrink-0">
            <div className="space-y-4">
              {/* Title & Description */}
              <div>
                <h3 className="font-heading text-[20px] font-bold text-[#2E5A66] leading-[28px]">
                  {plan1Title}
                </h3>
                <p className="text-[12px] text-[#666666] font-semibold leading-[20px] font-sans mt-1 min-h-[60px]">
                  {plan1Description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1.5 pt-1">
                <span className="font-heading text-[36px] font-bold text-[#2E5A66] leading-[44px] tracking-[-0.00015em]">
                  {plan1Price}
                </span>
                <span className="text-[14px] text-[#5F6B6F] font-semibold leading-[26px] font-sans">
                  /per user
                </span>
              </div>

              {/* Feature List */}
              <ul className="space-y-2.5 font-sans pt-2">
                {plan1Features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[14px] text-[#5F6B6F] font-normal leading-[17px] italic">
                    <FeatureBadgeIcon />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Button */}
            <div className="pt-6 text-center">
              <a
                href="#faq"
                className="inline-flex items-center justify-center w-[153px] h-[46px] rounded-[42px] text-white font-bold text-[18px] shadow-[0_1px_4px_#E8B92C] hover:opacity-95 transition-opacity"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                Get Started
              </a>
            </div>
          </div>

          {/* 2. Highlight Frame Card: ESA Letter + ID Card */}
          <div className="w-full sm:w-[308px] min-h-[522px] rounded-[28px] bg-[#E8B92C] pt-2.5 px-1 pb-1 shadow-[0px_8px_18px_rgba(0,0,0,0.1),0px_33px_33px_rgba(0,0,0,0.09),0px_73px_44px_rgba(0,0,0,0.05),0px_130px_52px_rgba(0,0,0,0.01)] flex flex-col items-center shrink-0">
            <div className="text-center text-[#2E5A66] text-[14px] font-bold tracking-[0.08em] uppercase pb-2 font-sans">
              BEST VALUE
            </div>

            <div className="w-full bg-white rounded-[24px] p-7 sm:p-8 shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.12)] flex flex-col justify-between min-h-[483px] flex-1">
              <div className="space-y-4">
                {/* Title & Description */}
                <div>
                  <h3 className="font-heading text-[20px] font-bold text-[#2E5A66] leading-[28px]">
                    {plan2Title}
                  </h3>
                  <p className="text-[12px] text-[#666666] font-semibold leading-[20px] font-sans mt-1 min-h-[60px]">
                    {plan2Description}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1.5 pt-1">
                  <span className="font-heading text-[36px] font-bold text-[#2E5A66] leading-[44px] tracking-[-0.00015em]">
                    {plan2Price}
                  </span>
                  <span className="text-[14px] text-[#5F6B6F] font-semibold leading-[26px] font-sans">
                    /per user
                  </span>
                </div>

                {/* Feature List */}
                <ul className="space-y-2.5 font-sans pt-2">
                  {plan2Features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[14px] text-[#5F6B6F] font-normal leading-[17px] italic">
                      <FeatureBadgeIcon />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 text-center">
                <a
                  href="#faq"
                  className="inline-flex items-center justify-center w-[153px] h-[46px] rounded-[42px] text-white font-bold text-[18px] shadow-[0_1px_4px_#E8B92C] hover:opacity-95 transition-opacity"
                  style={{ backgroundImage: TEAL_GRADIENT }}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
