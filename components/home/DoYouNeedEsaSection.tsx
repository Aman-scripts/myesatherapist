"use client";

import React from "react";
import Image from "next/image";
import { CtaButton } from "@/components/common/CtaButton";
import { DesktopScaleWrapper } from "@/components/common/DesktopScaleWrapper";

const TEAL_GRADIENT = "var(--color-gradient)";

export function DoYouNeedEsaSection() {
  const points = [
    "Feeling persistent anxiety, depression, or stress that impacts daily life.",
    "Difficulty coping with emotional challenges on your own",
    "Experiencing frequent loneliness or isolation",
    "Noticing that being around animals naturally brings you comfort or a sense of calm",
    "Struggling to maintain emotional balance during stressful situations",
  ];

  return (
    <section className="relative overflow-hidden bg-white w-full pt-0 pb-0 lg:py-0">
      {/* Desktop & Laptop Container */}
      <DesktopScaleWrapper
        designWidth={1440}
        designHeight={701}
        className="hidden lg:block relative"
      >
        <div className="relative w-[1440px] h-[701px] flex items-center justify-between">
          {/* Left Content Area */}
          <div className="w-[737px] pl-[78px] pr-4 my-auto py-0 z-10 flex flex-col justify-center shrink-0 space-y-5">
            <div className="space-y-4">
              <h2 className="heading-h2 capitalize">
                Do You Need An Emotional Support Animal?
              </h2>

              <div className="space-y-3">
                <p className="body-large">
                  You might consider an emotional support animal if you face challenges that affect your emotional or mental well-being. Situations that could indicate a need for an ESA include:
                </p>

                <ul className="body-large space-y-1.5 list-none pl-0">
                  {points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-primary font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <p className="body-large pt-0.5">
                  It’s important to note that an ESA should only be recommended following a proper evaluation by a licensed mental health professional. Documentation obtained without professional guidance may not be valid or recognized under housing laws.
                </p>
              </div>
            </div>

            {/* CTA Button & Refund Reassurance */}
            <div className="pt-4 space-y-2">
              <CtaButton href="#how-it-works">Get Started</CtaButton>
              <p className="body-small">
                If not approved after your evaluation? You get a full refund.
              </p>
            </div>
          </div>

          {/* Right Visual Frame: Exact 594x701 proportions matching Figma */}
          <div className="relative shrink-0 pointer-events-none w-[594px] h-[701px] z-0">
            {/* Background Decorative Line SVG */}
            <div className="absolute left-0 top-[15px] w-[81px] h-[669px] z-0">
              <Image
                quality={90}
                src="/home/doyouneed-emotional-support-section-line.svg"
                alt=""
                width={81}
                height={669}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Main Photo (Natural aspect ratio, un-cropped) */}
            <div className="absolute right-0 top-0 w-[571px] h-[701px] z-10">
              <Image
                quality={90}
                src="/home/doyouneed-esa-perfect-v3.webp"
                alt="Emotional support dog and owner"
                fill
                className="object-contain object-right"
                sizes="571px"
              />
            </div>

            {/* Floating Circle Badge at Curve Apex */}
            <div className="absolute left-[-14px] top-[335px] w-[73px] h-[73px] z-20 drop-shadow-[0_2px_6px_rgba(0,0,0,0.18)]">
              <Image
                quality={90}
                src="/home/doyouneed-emotional-support-icon.svg"
                alt="ESA Badge"
                width={73}
                height={73}
                className="object-contain rounded-full bg-[#FDFBF7] w-full h-full"
              />
            </div>
          </div>
        </div>
      </DesktopScaleWrapper>

      {/* Mobile / Tablet View (Rendered with 0 top gap) */}
      <div className="lg:hidden w-full overflow-hidden">
        {/* Full-width Image Container (Edge to Edge, Image FIRST) */}
        <div className="w-full">
          {/* Mobile Image (< 640px) */}
          <div className="sm:hidden w-full -mt-2.5">
            <Image
            quality={90}
              src="/home/mobile-do-you-need-emotional-support.webp"
              alt="Do You Need an Emotional Support Animal"
              width={390}
              height={475}
              className="w-full h-auto block"
            />
          </div>

          {/* Tablet Image (640px to 1023px) */}
          <div className="hidden sm:block w-full -mt-3.5">
            <Image
            quality={90}
              src="/home/tablet-do-you-need-emotional-support.webp"
              alt="Do You Need an Emotional Support Animal"
              width={834}
              height={533}
              className="w-full h-auto block"
            />
          </div>
        </div>

        {/* Text & Button Container (Text SECOND) */}
        <div className="px-4 sm:px-6 max-w-3xl mx-auto pt-6 sm:pt-8 pb-3 sm:pb-4 space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <h2 className="heading-h2 capitalize">
              Do You Need An Emotional Support Animal?
            </h2>

            <div className="space-y-3">
              <p className="body-large">
                You might consider an emotional support animal if you face challenges that affect your emotional or mental well-being. Situations that could indicate a need for an ESA include:
              </p>

              <ul className="body-large space-y-1.5 list-none pl-0">
                {points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-primary font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="body-large pt-2">
                It’s important to note that an ESA should only be recommended following a proper evaluation by a licensed mental health professional. Documentation obtained without professional guidance may not be valid or recognized under housing laws.
              </p>
            </div>
          </div>

          {/* Action Button & Refund Reassurance */}
          <div className="flex flex-col items-center gap-2 pt-2">
            <CtaButton href="#how-it-works">Get Started</CtaButton>
            <p className="body-small text-center">
              If not approved after your evaluation? You get a full refund.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
