"use client";

import React from "react";
import Image from "next/image";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

type CtaBannerProps = {
  bgColor?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
};

export function CtaBanner({
  bgColor = "bg-[#FAF7F2]",
  title = "Ready to Start Your ESA Evaluation?",
  description = "If you believe an Emotional Support Animal may be appropriate for your situation, you can begin a professional evaluation today.",
  buttonText = "Start your Evaluation",
  buttonHref = "#how-it-works",
}: CtaBannerProps) {
  return (
    <section className={`relative w-full ${bgColor} pt-0 lg:pt-8 xl:pt-[125px] overflow-visible`}>
      {/* Full-width Teal Gradient Banner (Edge to Edge) */}
      <div
        className="w-full relative min-h-[400px]"
        style={{ backgroundImage: TEAL_GRADIENT }}
      >
        {/* Paw Prints: Flush with the bottom edge of teal banner, centered in clear gap on 1024px */}
        <div className="absolute left-[35%] lg:left-[28%] xl:left-[41%] bottom-0 w-[160px] lg:w-[175px] xl:w-[240px] h-[110px] lg:h-[120px] xl:h-[160px] pointer-events-none z-0 hidden md:block">
          <Image
            src="/common/cta-section-paw.png"
            alt=""
            fill
            unoptimized
            priority
            className="object-contain object-bottom"
          />
        </div>

        {/* Overlapping Woman with Dog Photo (Flush with bottom edge of teal banner) */}
        <div className="hidden lg:block absolute right-0 bottom-0 w-[480px] lg:w-[490px] xl:w-[653px] h-[390px] lg:h-[410px] xl:h-[525px] pointer-events-none z-20">
          <Image
            src="/common/cta-banner-background.png"
            alt="Woman embracing emotional support dog"
            fill
            priority
            unoptimized
            className="object-contain object-right-bottom"
            sizes="(max-width: 1280px) 490px, 653px"
          />
        </div>

        <div className="max-w-[1442px] mx-auto px-6 sm:px-12 lg:px-[60px] xl:px-[104px] py-12 lg:py-[49px] relative min-h-[400px] flex items-center">
          {/* Left Text & CTA Area */}
          <div className="relative z-10 max-w-[575px] space-y-6 text-left">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[36px] xl:text-[44px] font-bold text-[#FAF7F2] leading-[44px] xl:leading-[54px] tracking-[-0.0066em] max-w-[431px]">
                {title}
              </h2>
              <p className="text-[#FAF7F2] text-base lg:text-[16px] xl:text-[18px] font-semibold leading-[26px] xl:leading-[30px] font-sans">
                {description}
              </p>
            </div>

            {/* Button */}
            <div className="pt-2">
              <a
                href={buttonHref}
                className="inline-flex items-center justify-center w-[226px] h-[46px] rounded-[58px] bg-[#E8B92C] shadow-[0_1px_4px_#E8B92C] hover:opacity-95 transition-opacity"
              >
                <span
                  className="font-[family-name:var(--font-lato)] font-bold text-[18px] leading-[22px] bg-clip-text text-transparent"
                  style={{ backgroundImage: TEAL_GRADIENT }}
                >
                  {buttonText}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Photo fallback */}
        <div className="lg:hidden relative w-full h-[260px] sm:h-[320px] pointer-events-none">
          <Image
            src="/common/cta-banner-background.png"
            alt="Woman embracing emotional support dog"
            fill
            unoptimized
            priority
            className="object-contain object-bottom"
            sizes="(max-width: 1023px) 100vw, 1px"
          />
        </div>
      </div>
    </section>
  );
}
