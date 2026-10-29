"use client";

import React from "react";
import Image from "next/image";
import { CtaButton } from "@/components/common/CtaButton";

const stepsData = [
  {
    number: "1",
    icon: "/ESA ICons/Icon-38.svg",
    title: "Schedule Consultation",
    description:
      "Complete our simple online form to request a consultation with a licensed mental health professional in your state.",
  },
  {
    number: "2",
    icon: "/ESA ICons/Icon-15.svg",
    title: "Meet Your Therapist",
    description:
      "Connect with a licensed professional via secure video or phone. They'll assess whether a PSD letter may be appropriate for you.",
  },
  {
    number: "3",
    icon: "/ESA ICons/Icon-17.svg",
    title: "Letter if Qualified",
    description:
      "If you qualify, you may receive your PSD letter within 24-72 hours via email, signed by your licensed professional.",
  },
];

const TEAL_GRADIENT = "var(--color-gradient)";

export function PsdProcessSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Section Header (2-Column Layout on Desktop matching Frame 1000011750) */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-12 mb-12 lg:mb-16">
          <h2 className="heading-h2 capitalize max-w-xl">
            A Simple, Secure, <br className="hidden sm:block" />
            Three-Step Process
          </h2>
          <p className="body-large max-w-xl lg:mt-2">
            From consultation to letter delivery, everything happens online. No paperwork, no waiting rooms — just a clear path to professional documentation.
          </p>
        </div>

        {/* 2. Main Center Photo Container with Floating Heart-Paw Badges (Figma: 768x384, rounded-30px) */}
        <div className="relative w-full max-w-[768px] mx-auto mb-16 lg:mb-20">
          <div className="relative aspect-[2/1] w-full rounded-[20px] sm:rounded-[30px] overflow-hidden shadow-lg border border-gray-100">
            <Image
              quality={95}
              src="/psd-letter/psd-three-steps.webp"
              alt="Woman smiling with psychiatric service dog"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          {/* Floating Circle Badge - Top Right Edge */}
          <div className="absolute top-[18%] -right-3.5 sm:-right-5 lg:-right-7 w-[46px] h-[46px] sm:w-[58px] sm:h-[58px] lg:w-[73px] lg:h-[73px] z-20 pointer-events-none drop-shadow-md">
            <Image
              src="/psd-letter/psdprocess-section-icon.svg"
              alt=""
              width={73}
              height={73}
              unoptimized
              className="object-contain w-full h-full"
            />
          </div>

          {/* Floating Circle Badge - Bottom Left Edge */}
          <div className="absolute bottom-[18%] -left-3.5 sm:-left-5 lg:-left-7 w-[46px] h-[46px] sm:w-[58px] sm:h-[58px] lg:w-[73px] lg:h-[73px] z-20 pointer-events-none drop-shadow-md">
            <Image
              src="/psd-letter/psdprocess-section-icon.svg"
              alt=""
              width={73}
              height={73}
              unoptimized
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* 3. Three Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8 max-w-[1140px] mx-auto">
          {stepsData.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-[20px] md:rounded-[24px] p-6 sm:p-7 lg:p-8 flex flex-col items-center text-center shadow-[0px_2px_4px_rgba(0,0,0,0.15)]"
            >
              {/* Step Number Circle Badge at Top-Left */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-accent text-[#29515B] font-heading font-bold text-sm sm:text-base lg:text-lg flex items-center justify-center shadow-[0px_2px_4px_rgba(58,58,58,0.25)]">
                {step.number}
              </div>

              {/* Step Icon Container */}
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-[#AEBBBE33] flex items-center justify-center mb-4 sm:mb-5 mt-2 sm:mt-3 shrink-0">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={32}
                  height={32}
                  unoptimized
                  className="icon-lg object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>

              {/* Step Title */}
              <h3 className="heading-h3 capitalize text-color-gradient mb-2 sm:mb-3">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="body-text">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* 4. Bottom CTA Pill Button */}
        <div className="flex flex-col items-center gap-2 mt-12 sm:mt-16">
          <CtaButton
            href="#pricing"
            className="w-auto min-w-[200px]"
          >
            Start Your Consultation
          </CtaButton>
          <p className="body-small text-center">
            If not approved after your evaluation? You get a full refund.
          </p>
        </div>

      </div>
    </section>
  );
}
