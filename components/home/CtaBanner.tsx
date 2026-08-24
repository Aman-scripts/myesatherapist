"use client";

import React from "react";
import Image from "next/image";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

type CtaBannerProps = {
  bgColor?: string;
};

export function CtaBanner({ bgColor = "bg-[#EEEBE0]" }: CtaBannerProps) {
  return (
    <section className={`relative w-full ${bgColor} pt-0 lg:pt-[125px] overflow-visible`}>
      {/* Full-width Teal Gradient Banner (Edge to Edge) */}
      <div
        className="w-full relative min-h-[400px]"
        style={{ backgroundImage: TEAL_GRADIENT }}
      >
        {/* Paw Prints: Flush with the bottom edge of teal banner */}
        <div className="absolute left-[35%] lg:left-[38%] xl:left-[42%] bottom-0 w-[180px] lg:w-[200px] xl:w-[254px] h-[120px] lg:h-[135px] xl:h-[169px] pointer-events-none z-0 hidden md:block">
          <Image
            src="/cta-section-paw.png"
            alt=""
            fill
            unoptimized
            priority
            className="object-contain object-bottom"
          />
        </div>

        {/* Overlapping Woman with Dog Photo (Flush with bottom edge of teal banner) */}
        <div className="hidden lg:block absolute right-0 bottom-0 w-[480px] lg:w-[520px] xl:w-[653px] h-[400px] lg:h-[430px] xl:h-[525px] pointer-events-none z-20">
          <Image
            src="/cta-banner-background.png"
            alt="Woman embracing emotional support dog"
            fill
            priority
            unoptimized
            className="object-contain object-right-bottom"
            sizes="(max-width: 1280px) 520px, 653px"
          />
        </div>

        <div className="max-w-[1442px] mx-auto px-6 sm:px-12 lg:px-[60px] xl:px-[104px] py-12 lg:py-[49px] relative min-h-[400px] flex items-center">
          {/* Left Text & CTA Area */}
          <div className="relative z-10 max-w-[575px] space-y-6 text-left">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[36px] xl:text-[44px] font-bold text-[#FAF7F2] leading-[44px] xl:leading-[54px] tracking-[-0.0066em] max-w-[431px]">
                Ready to Start Your ESA Evaluation?
              </h2>
              <p className="text-[#FAF7F2] text-base lg:text-[16px] xl:text-[18px] font-semibold leading-[26px] xl:leading-[30px] font-sans">
                If you believe an Emotional Support Animal may be appropriate for your situation, you can begin a professional evaluation today.
              </p>
            </div>

            {/* Button */}
            <div className="pt-2">
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center w-[226px] h-[46px] rounded-[58px] bg-[#E8B92C] shadow-[0_1px_4px_#E8B92C] hover:opacity-95 transition-opacity"
              >
                <span
                  className="font-[family-name:var(--font-lato)] font-bold text-[18px] leading-[22px] bg-clip-text text-transparent"
                  style={{ backgroundImage: TEAL_GRADIENT }}
                >
                  Start your Evaluation
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Photo fallback */}
        <div className="lg:hidden relative w-full h-[260px] sm:h-[320px] pointer-events-none">
          <Image
            src="/cta-banner-background.png"
            alt="Woman embracing emotional support dog"
            fill
            unoptimized
            priority
            className="object-contain object-bottom"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
