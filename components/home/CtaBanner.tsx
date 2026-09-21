"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

type CtaBannerProps = {
  bgColor?: string;
  className?: string;
  titleClassName?: string;
  eyebrow?: string;
  title?: string;
  description?: React.ReactNode;
  note?: string;
  disclaimer?: string;
  buttonText?: string;
  buttonHref?: string;
};

export function CtaBanner({
  bgColor = "bg-[#FAF7F2]",
  className = "",
  titleClassName = "",
  eyebrow,
  title = "Ready to Start Your ESA Evaluation?",
  description = "If you believe an Emotional Support Animal may be appropriate for your situation, you can begin a professional evaluation today.",
  note,
  disclaimer,
  buttonText = "Start your Evaluation",
  buttonHref = "#how-it-works",
}: CtaBannerProps) {
  return (
    <section className={`relative w-full ${bgColor} pt-0 lg:pt-[8.7vw] xl:pt-[125px] overflow-visible ${className}`}>
      {/* Full-width Teal Gradient Banner (Edge to Edge) */}
      <div
        className="w-full relative min-h-[400px] lg:min-h-[27.8vw] xl:min-h-[400px]"
        style={{ backgroundImage: TEAL_GRADIENT }}
      >
        {/* Paw Prints: Flush with the bottom edge of teal banner, centered in clear gap on 1024px */}
        <div className="absolute left-[35%] lg:left-[41%] bottom-0 w-[160px] lg:w-[16.7vw] xl:w-[240px] h-[110px] lg:h-[11.1vw] xl:h-[160px] pointer-events-none z-0 hidden md:block">
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
        <div className="hidden lg:block absolute right-0 bottom-0 w-[480px] lg:w-[45.3vw] xl:w-[653px] h-[390px] lg:h-[36.5vw] xl:h-[525px] pointer-events-none z-20">
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

        <div className="max-w-[1442px] mx-auto px-6 sm:px-12 lg:px-[7.2vw] xl:px-[104px] py-12 lg:py-[3.4vw] xl:py-[49px] relative min-h-[400px] lg:min-h-[27.8vw] xl:min-h-[400px] flex items-center">
          {/* Left Text & CTA Area */}
          <div className="relative z-10 max-w-[575px] lg:max-w-[50vw] xl:max-w-[720px] space-y-6 lg:space-y-[1.7vw] xl:space-y-6 text-left">
            <div className="space-y-4">
              {eyebrow && (
                <div className="text-[#E8B92C] font-sans font-bold text-sm sm:text-base tracking-wider uppercase">
                  {eyebrow}
                </div>
              )}
              <h2 className={cn("font-heading text-3xl sm:text-4xl lg:text-[3.05vw] xl:text-[44px] font-bold text-[#FAF7F2] leading-[44px] lg:leading-[3.75vw] xl:leading-[54px] tracking-[-0.0066em] max-w-[540px] lg:max-w-[47vw] xl:max-w-[680px] whitespace-pre-line", titleClassName)}>
                {title}
              </h2>
              <p className="text-[#FAF7F2] text-base lg:text-[1.25vw] xl:text-[18px] font-semibold leading-[26px] lg:leading-[2.08vw] xl:leading-[30px] font-sans max-w-[380px] sm:max-w-[430px] lg:max-w-full">
                {typeof description === "string" && description.includes("\n") ? (
                  description.split("\n").map((line, i, arr) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </React.Fragment>
                  ))
                ) : (
                  description
                )}
              </p>
              {note && (
                <p className="text-[#E8B92C] text-sm sm:text-[15px] lg:text-[16px] font-semibold leading-relaxed font-sans pt-1">
                  {note}
                </p>
              )}
            </div>

            {/* Button */}
            <div className="pt-2">
              <a
                href={buttonHref}
                className="inline-flex items-center justify-center min-w-[226px] px-6 h-[46px] rounded-[58px] bg-[#E8B92C] shadow-[0_1px_4px_#E8B92C] hover:opacity-95 transition-opacity"
              >
                <span
                  className="font-[family-name:var(--font-lato)] font-bold text-[18px] leading-[22px] bg-clip-text text-transparent whitespace-nowrap"
                  style={{ backgroundImage: TEAL_GRADIENT }}
                >
                  {buttonText}
                </span>
              </a>
            </div>

            {/* Optional Disclaimer */}
            {disclaimer && (
              <p className="text-[#FAF7F2]/75 text-xs sm:text-[13px] font-sans leading-relaxed pt-1 max-w-[560px]">
                {disclaimer}
              </p>
            )}
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
