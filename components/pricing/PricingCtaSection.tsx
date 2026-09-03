"use client";

import React from "react";
import Image from "next/image";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

export function PricingCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pb-0 pt-6 sm:pt-10">
      <div className="max-w-[1446px] mx-auto">
        <div
          className="relative min-h-[400px] rounded-none sm:rounded-[30px] overflow-hidden px-6 sm:px-12 lg:px-24 py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-10"
          style={{ backgroundImage: TEAL_GRADIENT }}
        >
          {/* Paw Prints Watermark Decorative overlay */}
          <div className="absolute right-[30%] top-[20%] w-[253px] h-[262px] opacity-15 pointer-events-none hidden lg:block">
            <svg viewBox="0 0 100 100" fill="#FAF7F2" className="w-full h-full">
              <path d="M50 20c-4 0-8 6-8 12s4 12 8 12 8-6 8-12-4-12-8-12zm-22 8c-3.5 0-7 5-7 11s3.5 11 7 11 7-5 7-11-3.5-11-7-11zm44 0c-3.5 0-7 5-7 11s3.5 11 7 11 7-5 7-11-3.5-11-7-11zm-56 22c-3 0-6 4.5-6 10s3 10 6 10 6-4.5 6-10-3-10-6-10zm68 0c-3 0-6 4.5-6 10s3 10 6 10 6-4.5 6-10-3-10-6-10zm-34 4c-12 0-22 9-22 20 0 8 7 16 22 16s22-8 22-16c0-11-10-20-22-20z" />
            </svg>
          </div>

          {/* Left Text Content */}
          <div className="max-w-[575px] z-10 space-y-6 text-center lg:text-left">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#FAF7F2] leading-tight lg:leading-[54px] tracking-[-0.00015em]">
              Need help with a PSD letter?
            </h2>

            <p className="font-sans font-semibold text-base sm:text-[18px] leading-relaxed sm:leading-[30px] text-[#FAF7F2]/90">
              Connect with a state-licensed mental health professional to discuss your needs and see if a psychiatric service dog letter may be right for you.
            </p>

            <div className="pt-2">
              <a
                href="#plans"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#E8B92C] shadow-[0px_1px_4px_#E8B92C] rounded-[12px] font-[family-name:var(--font-lato)] font-bold text-[18px] leading-[22px] transition-transform hover:scale-[1.02] cursor-pointer"
              >
                <span
                  className="bg-clip-text text-transparent font-bold"
                  style={{ backgroundImage: TEAL_GRADIENT }}
                >
                  Start your Evaluation
                </span>
              </a>
            </div>
          </div>

          {/* Right Image: Woman hugging golden retriever */}
          <div className="w-full max-w-[480px] lg:max-w-[580px] relative z-10 flex justify-center lg:justify-end">
            <Image
              src="/common/cta-banner-background.png"
              alt="Woman hugging a golden retriever dog"
              width={653}
              height={525}
              className="object-contain w-full h-auto max-h-[380px] lg:max-h-[460px] drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
