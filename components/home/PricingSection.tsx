"use client";

import React from "react";
import Image from "next/image";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

function FeatureBadgeIcon() {
  return (
    <Image
      src="/price-section-badge.svg"
      alt=""
      width={16}
      height={16}
      className="shrink-0"
      style={{ width: "auto", height: "auto" }}
    />
  );
}

interface PricingSectionProps {
  bgColor?: string;
}

export function PricingSection({ bgColor = "bg-[#EEEBE0]" }: PricingSectionProps) {
  return (
    <section id="pricing" className={`py-16 lg:py-24 ${bgColor} relative overflow-hidden`}>
      <div className="max-w-[1442px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Centered) */}
        <div className="text-center max-w-[709px] mx-auto mb-14 space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#2E5A66] leading-[54px] tracking-[-0.0066em]">
            Plans &amp; Pricing
          </h2>
          <p className="text-[#5F6B6F] text-base sm:text-[18px] font-semibold leading-[30px] font-sans">
            Choose the plan that fits your needs. All plans include essential features to get you started, with options to scale as you grow. No hidden fees and the flexibility to change anytime.
          </p>
        </div>

        {/* Center Container for Both Cards + Floating Dog Paw */}
        <div className="relative max-w-[624px] mx-auto">
          {/* Both Cards Centered */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-6 sm:gap-4 relative z-10">
            {/* 1. Starter / Basic Plan Card */}
            <div className="w-full sm:w-[300px] bg-white rounded-[24px] border border-[#E1E1E1] p-8 shadow-[0_8px_16px_rgba(0,0,0,0.06)] flex flex-col justify-between h-[398px] shrink-0">
              <div>
                {/* Title & Subtitle */}
                <div className="space-y-1">
                  <h3 className="font-heading text-[20px] font-bold text-[#2E5A66] leading-[28px]">
                    Basic
                  </h3>
                  <p className="text-[14px] text-[#666666] font-semibold leading-[26px] font-sans">
                    Ideal for small projects
                  </p>
                </div>

                {/* Price */}
                <div className="mt-4 mb-6">
                  <span className="font-heading text-[24px] font-bold text-[#2E5A66] leading-[32px]">
                    $99
                  </span>
                </div>

                {/* Feature List */}
                <ul className="space-y-2.5 font-sans">
                  <li className="flex items-center gap-2 text-[14px] text-[#5F6B6F] font-normal leading-[17px]">
                    <FeatureBadgeIcon />
                    <span>Phone consultation</span>
                  </li>
                  <li className="flex items-center gap-2 text-[14px] text-[#5F6B6F] font-normal leading-[17px]">
                    <FeatureBadgeIcon />
                    <span>PSD letter if qualified</span>
                  </li>
                  <li className="flex items-center gap-2 text-[14px] text-[#5F6B6F] font-normal leading-[17px]">
                    <FeatureBadgeIcon />
                    <span>Official clinic letterhead</span>
                  </li>
                  <li className="flex items-center gap-2 text-[14px] text-[#5F6B6F] font-normal leading-[17px]">
                    <FeatureBadgeIcon />
                    <span>Licensed professional</span>
                  </li>
                  <li className="flex items-center gap-2 text-[14px] text-[#5F6B6F] font-normal leading-[17px]">
                    <FeatureBadgeIcon />
                    <span>Email delivery</span>
                  </li>
                </ul>
              </div>

              {/* Action Button & Note */}
              <div className="pt-4 text-center space-y-1.5">
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center w-[153px] h-[46px] rounded-[42px] text-white font-bold text-[18px] shadow-[0_2px_6px_rgba(232,185,44,0.3)] hover:opacity-95 transition-opacity"
                  style={{ backgroundImage: TEAL_GRADIENT }}
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* 2. Professional / Standard Plan Card (MOST POPULAR) */}
            <div className="w-full sm:w-[308px] rounded-[28px] bg-[#E8B92C] pt-2.5 px-1 pb-1 shadow-[0_8px_18px_rgba(0,0,0,0.08),0_33px_33px_rgba(0,0,0,0.06),0_73px_44px_rgba(0,0,0,0.03)] flex flex-col items-center shrink-0">
              <div className="text-center text-[#2E5A66] text-[14px] font-bold tracking-[1.12px] uppercase pb-2 font-sans">
                MOST POPULAR
              </div>

              <div className="w-full bg-white rounded-[24px] p-8 shadow-[0_2px_4px_rgba(0,0,0,0.08)] flex flex-col justify-between h-[398px]">
                <div>
                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h3 className="font-heading text-[20px] font-bold text-[#2E5A66] leading-[28px]">
                      Standard
                    </h3>
                    <p className="text-[14px] text-[#666666] font-semibold leading-[26px] font-sans">
                      Ideal for small projects
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mt-4 mb-6">
                    <span className="font-heading text-[24px] font-bold text-[#2E5A66] leading-[32px]">
                      $149
                    </span>
                    <span className="text-[14px] text-[#5F6B6F] font-semibold leading-[26px] font-sans">
                      /per user
                    </span>
                  </div>

                  {/* Feature List */}
                  <ul className="space-y-2.5 font-sans">
                    <li className="flex items-center gap-2 text-[14px] text-[#5F6B6F] font-normal leading-[17px]">
                      <FeatureBadgeIcon />
                      <span>Video consultation</span>
                    </li>
                    <li className="flex items-center gap-2 text-[14px] text-[#5F6B6F] font-normal leading-[17px]">
                      <FeatureBadgeIcon />
                      <span>PSD letter if qualified</span>
                    </li>
                    <li className="flex items-center gap-2 text-[14px] text-[#5F6B6F] font-normal leading-[17px]">
                      <FeatureBadgeIcon />
                      <span>Licensed professional</span>
                    </li>
                    <li className="flex items-center gap-2 text-[14px] text-[#5F6B6F] font-normal leading-[17px]">
                      <FeatureBadgeIcon />
                      <span>Priority 24-hour delivery</span>
                    </li>
                    <li className="flex items-center gap-2 text-[14px] text-[#5F6B6F] font-normal leading-[17px]">
                      <FeatureBadgeIcon />
                      <span>Email delivery</span>
                    </li>
                  </ul>
                </div>

                {/* Action Button */}
                <div className="pt-4 text-center">
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center justify-center w-[205px] h-[46px] rounded-[42px] text-white font-bold text-[18px] shadow-[0_2px_6px_rgba(232,185,44,0.3)] hover:opacity-95 transition-opacity"
                    style={{ backgroundImage: TEAL_GRADIENT }}
                  >
                    Start Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Dog Paw & Human Hand Image (Positioned directly to the right without shifting centered cards) */}
          <div className="hidden lg:block absolute left-[85%] lg:left-[88%] xl:left-[100%] top-[70px] lg:top-[60px] xl:top-[45px] w-[280px] lg:w-[340px] xl:w-[441px] h-auto pointer-events-none z-0 -ml-5">
            <Image
              src="/pricing-section-dog.png"
              alt="Dog giving paw to woman hand"
              width={441}
              height={376}
              priority
              unoptimized
              className="object-contain object-left w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
