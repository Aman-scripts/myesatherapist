"use client";

import React from "react";
import Image from "next/image";
import { CtaButton } from "@/components/common/CtaButton";

const TEAL_GRADIENT = "var(--color-gradient)";

interface Step {
  stepNumber: string;
  image: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    stepNumber: "1",
    image: "/esa-renewal/esa-renewal-processworks-step1.webp",
    title: "Set Up Your Appointment",
    description:
      "Create an account and choose an available appointment time to connect with a state-licensed mental health professional.",
  },
  {
    stepNumber: "2",
    image: "/esa-renewal/esa-renewal-processworks-step2.webp",
    title: "Speak With Professionals",
    description:
      "During the evaluation, the provider discusses how your emotional support animal has been supporting you and whether continued support may still be needed.",
  },
  {
    stepNumber: "3",
    image: "/esa-renewal/esa-renewal-processworks-step3.webp",
    title: "Provider Review and Outcome",
    description:
      "After the evaluation, the licensed professional independently determines whether renewing the documentation may be appropriate. If issued, the updated letter is delivered electronically.",
  },
];

export function EsaRenewalHowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-background py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-[1054px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-[18px]">
        <div className="w-full max-w-[999px] flex flex-col items-center gap-14 lg:gap-[72px]">
          {/* Section Header (Frame 5) */}
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="heading-h2">
              How The ESA Letter Renewal Process Works
            </h2>
            <p className="body-large">
              Complete a simple three-step online process to request an emotional support animal letter renewal conducted by a licensed mental health professional.
            </p>
          </div>

          {/* 3 Steps: circle graphic + title + description */}
          <div className="w-full shrink-0 grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8 justify-items-center">
            {STEPS.map((step) => (
              <div key={step.stepNumber} className="flex w-full max-w-[273px] lg:max-w-[360px] flex-col items-center">
                {/* Circular Graphic with Number Badge (Frame 1000011454) */}
                <div className="relative h-[251px] w-[228px]">
                  {/* Mint Glow Circle */}
                  <div className="absolute left-0 top-0 h-[226px] w-[228px] rounded-full bg-[#EFFFF1]/80 shadow-[0px_2px_4px_rgba(0,0,0,0.25)]" />

                  {/* Inner Round Image */}
                  <div className="absolute left-[14px] top-[13px] h-[200px] w-[200px] overflow-hidden rounded-full">
                    <Image
            quality={90}
                      src={step.image}
                      alt={`Step ${step.stepNumber}: ${step.title}`}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>

                  {/* Step Number Badge */}
                  <div
                    className="absolute bottom-0 left-1/2 flex h-[65px] w-[65px] -translate-x-1/2 items-center justify-center rounded-full text-background font-bold font-heading text-[32px] leading-none"
                    style={{ backgroundImage: TEAL_GRADIENT }}
                  >
                    {step.stepNumber}
                  </div>
                </div>

                {/* Title and Description */}
                <div className="mt-6 flex w-full flex-col items-center gap-2 text-center">
                  <h3 className="heading-h3 text-[#1A3D4F] whitespace-nowrap">
                    {step.title}
                  </h3>
                  <p className="body-text">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button (Frame 1000011890) */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <CtaButton href="#pricing" variant="accent" className="w-auto min-w-[180px]">
            Get Started
          </CtaButton>
          <p className="font-sans font-medium text-[14px] leading-[22px] text-body-text text-center">
            If not approved after your evaluation? You get a full refund.
          </p>
          <p className="mt-1 rounded-full bg-[#FDECEC] px-5 py-2 text-center font-sans font-medium text-[14px] leading-[22px] text-[#8A3A3A]">
            We authorize your payment first, but only charge it after your evaluation is completed.
          </p>
        </div>
      </div>
    </section>
  );
}
