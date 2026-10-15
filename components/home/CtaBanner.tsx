"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { CtaButton } from "@/components/common/CtaButton";

const TEAL_GRADIENT = "var(--color-gradient)";

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
  bgColor = "bg-background",
  className = "",
  titleClassName = "",
  eyebrow,
  title = "Ready to Start Your ESA Evaluation?",
  description = "If you believe an emotional support animal may be appropriate for your situation, you can begin a professional evaluation today.",
  note,
  disclaimer,
  buttonText = "Start Your Evaluation",
  buttonHref = "#how-it-works",
}: CtaBannerProps) {
  return (
    <section className={`relative w-full ${bgColor} pt-0 lg:pt-[8.7vw] xl:pt-[125px] pb-16 sm:pb-20 lg:pb-24 xl:pb-[96px] overflow-visible ${className}`}>
      {/* Full-width Teal Gradient Banner (Edge to Edge) */}
      <div
        className="w-full relative min-h-[404px] lg:min-h-[28vw] xl:min-h-[404px] color-gradient"
      >
        {/* Paw Prints: Flush with the bottom edge of teal banner, centered in clear gap on 1024px */}
        <div className="absolute left-[35%] lg:left-[41%] bottom-0 w-[160px] lg:w-[16.7vw] xl:w-[240px] h-[110px] lg:h-[11.1vw] xl:h-[160px] pointer-events-none z-0 hidden md:block">
          <Image
            quality={90}
            src="/common/cta-section-paw.webp"
            alt=""
            fill
            sizes="240px"
            className="object-contain object-bottom"
          />
        </div>

        {/* Overlapping Woman with Dog Photo (Flush with bottom edge of teal banner) */}
        <div className="hidden lg:block absolute right-0 bottom-0 w-[480px] lg:w-[45.3vw] xl:w-[653px] h-[390px] lg:h-[36.5vw] xl:h-[525px] pointer-events-none z-20">
          <Image
            quality={90}
            src="/common/cta-banner-background.webp"
            alt="Woman embracing emotional support dog"
            fill
            className="object-contain object-right-bottom"
            sizes="(max-width: 1280px) 490px, 653px"
          />
        </div>

        <div className="max-w-[1442px] mx-auto px-6 sm:px-12 lg:px-[7.2vw] xl:px-[104px] py-12 lg:py-[3.4vw] xl:py-[49px] relative min-h-[404px] lg:min-h-[28vw] xl:min-h-[404px] flex items-center">
          {/* Left Text & CTA Area */}
          <div className="relative z-10 max-w-[575px] lg:max-w-[50vw] xl:max-w-[737px] space-y-6 lg:space-y-[1.7vw] xl:space-y-6 text-left">
            <div className="space-y-4">
              {eyebrow && (
                <div className="text-accent body-small font-bold tracking-wider uppercase">
                  {eyebrow}
                </div>
              )}
              <h2 className={cn("heading-h2 text-background capitalize max-w-[540px] lg:max-w-[47vw] xl:max-w-[680px] whitespace-pre-line", titleClassName)}>
                {title}
              </h2>
              <p className="text-background body-large max-w-[380px] sm:max-w-[430px] lg:max-w-full">
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
                <p className="text-accent body-text pt-1">
                  {note}
                </p>
              )}
            </div>

            {/* Button */}
            <div className="pt-2">
              <CtaButton
                href={buttonHref}
                variant="accent"
                className="w-auto min-w-[240px]"
              >
                {buttonText}
              </CtaButton>
            </div>

            {/* Optional Disclaimer */}
            {disclaimer && (
              <p className="text-background body-small pt-1 max-w-[560px]">
                {disclaimer}
              </p>
            )}
          </div>
        </div>

        {/* Mobile Photo fallback */}
        <div className="lg:hidden relative w-full h-[260px] sm:h-[320px] pointer-events-none">
          <Image
            quality={90}
            src="/common/cta-banner-background.webp"
            alt="Woman embracing emotional support dog"
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 1023px) 100vw, 1px"
          />
        </div>
      </div>
    </section>
  );
}
