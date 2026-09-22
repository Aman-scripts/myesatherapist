"use client";

import React from "react";
import Image from "next/image";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

const BULLET_POINTS = [
  "100% HIPAA Compliant & Confidential",
  "Licensed Professionals in All 50 States",
  "Official Letter on Professional Letterhead",
  "Quick 24-72 Hour Response for Qualified Individuals",
];

function CheckmarkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="9" fill="#E8B92C" />
      <path
        d="M5.5 9.2L7.8 11.5L12.5 6.5"
        stroke="#1A3D4F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function PsdCtaSection() {
  return (
    <section className="relative w-full bg-[#FAF7F2] pt-0 lg:pt-8 xl:pt-[125px] overflow-visible">
      {/* Full-width Teal Gradient Banner */}
      <div
        className="w-full relative min-h-[440px]"
        style={{ backgroundImage: TEAL_GRADIENT }}
      >
        {/* Paw Prints Background Accent */}
        <div className="absolute left-[35%] lg:left-[28%] xl:left-[41%] bottom-0 w-[160px] lg:w-[175px] xl:w-[240px] h-[110px] lg:h-[120px] xl:h-[160px] pointer-events-none z-0 hidden md:block opacity-40">
          <Image
            quality={90}
            src="/common/cta-section-paw.webp"
            alt=""
            fill
            priority
            className="object-contain object-bottom"
          />
        </div>

        {/* Overlapping Woman with Dog Photo on Desktop */}
        <div className="hidden lg:block absolute right-0 bottom-0 w-[480px] lg:w-[490px] xl:w-[653px] h-[390px] lg:h-[430px] xl:h-[530px] pointer-events-none z-20">
          <Image
            quality={90}
            src="/common/cta-banner-background.webp"
            alt="Woman embracing psychiatric service dog"
            fill
            priority
            className="object-contain object-right-bottom"
            sizes="(max-width: 1280px) 490px, 653px"
          />
        </div>

        <div className="max-w-[1442px] mx-auto px-6 sm:px-12 lg:px-[60px] xl:px-[104px] py-12 lg:py-[49px] relative min-h-[440px] flex items-center">
          {/* Left Text & CTA Area */}
          <div className="relative z-10 max-w-[580px] lg:max-w-[650px] xl:max-w-[720px] space-y-6 text-left">
            <div className="space-y-3">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[36px] xl:text-[44px] font-bold text-[#FAF7F2] leading-[44px] xl:leading-[54px] tracking-[-0.0066em]">
                Need Help with a PSD Letter?
              </h2>
              <p className="text-[#FAF7F2] text-base lg:text-[16px] xl:text-[18px] font-semibold leading-[26px] xl:leading-[30px] font-sans">
                Connect with a state-licensed mental health professional to discuss your needs and see if a psychiatric service dog letter may be right for you.
              </p>
            </div>

            {/* 4 Feature Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 pb-1">
              {BULLET_POINTS.map((point, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <span className="shrink-0 flex items-center justify-center">
                    <CheckmarkIcon />
                  </span>
                  <span className="text-[#FAF7F2] text-sm sm:text-[15px] font-medium font-sans">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons: Schedule Consultation + Phone */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center min-w-[240px] px-6 h-[48px] rounded-[58px] bg-[#E8B92C] shadow-[0_1px_4px_#E8B92C] hover:opacity-95 transition-opacity"
              >
                <span
                  className="font-[family-name:var(--font-lato)] font-bold text-[17px] sm:text-[18px] leading-[22px] bg-clip-text text-transparent whitespace-nowrap"
                  style={{ backgroundImage: TEAL_GRADIENT }}
                >
                  Schedule Consultation Now
                </span>
              </a>

              <a
                href="tel:+18884124041"
                className="inline-flex items-center justify-center gap-2 px-5 h-[48px] rounded-[58px] border border-[#FAF7F2]/40 bg-white/10 backdrop-blur-xs text-[#FAF7F2] hover:bg-white/20 transition-all font-sans font-semibold text-[15px] sm:text-[16px]"
              >
                <PhoneIcon />
                <span>Call +1 (888) 412-4041</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Photo fallback */}
        <div className="lg:hidden relative w-full h-[260px] sm:h-[320px] pointer-events-none">
          <Image
            quality={90}
            src="/common/cta-banner-background.webp"
            alt="Woman embracing psychiatric service dog"
            fill
            priority
            className="object-contain object-bottom"
            sizes="(max-width: 1023px) 100vw, 1px"
          />
        </div>
      </div>
    </section>
  );
}
