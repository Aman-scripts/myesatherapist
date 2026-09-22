"use client";

import React from "react";
import Image from "next/image";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

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
    <section id="how-it-works" className="w-full bg-[#FAF7F2] py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-[1054px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-[18px]">
        <div className="w-full max-w-[999px] flex flex-col items-center gap-14 lg:gap-[72px]">
          {/* Section Header (Frame 5) */}
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-[34px] xl:text-[44px] font-bold text-[#2E5A66] leading-tight lg:leading-[42px] xl:leading-[54px] tracking-[-0.00015em]">
              How the ESA Letter Renewal Process Works?
            </h2>
            <p className="font-sans text-base sm:text-[18px] lg:text-[16px] xl:text-[18px] font-semibold text-[#5F6B6F] leading-[30px] lg:leading-[27px] xl:leading-[30px]">
              Complete a simple three-step online process to request an emotional support animal letter renewal conducted by a licensed mental health professional.
            </p>
          </div>

          {/* 3 Steps: circle graphic + title + description */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-10 lg:gap-x-[90px] justify-items-center">
            {STEPS.map((step) => (
              <div key={step.stepNumber} className="flex w-full max-w-[273px] flex-col items-center">
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
                    className="absolute bottom-0 left-1/2 flex h-[65px] w-[65px] -translate-x-1/2 items-center justify-center rounded-full text-[#FAF7F2] font-bold text-[36px] tracking-[-0.017em]"
                    style={{ backgroundImage: TEAL_GRADIENT, fontFamily: "Helvetica, Arial, sans-serif" }}
                  >
                    {step.stepNumber}
                  </div>
                </div>

                {/* Title and Description */}
                <div className="mt-6 flex w-full flex-col items-center gap-2 text-center">
                  <h3
                    className="font-bold text-2xl lg:text-[20px] xl:text-2xl leading-[29px] tracking-[-0.017em] text-transparent bg-clip-text"
                    style={{ backgroundImage: TEAL_GRADIENT, fontFamily: "var(--font-lato), Lato, sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="font-sans text-base lg:text-[14px] xl:text-base text-[#5F6B6F] font-semibold leading-[26px] lg:leading-[23px] xl:leading-[26px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button (Frame 1000011890) */}
        <a
          href="#pricing"
          className="group mt-2 inline-flex h-12 items-center justify-between gap-2 rounded-[30px] pl-[34px] pr-[3px] text-white font-semibold text-base leading-[26px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 transition-all"
          style={{ backgroundImage: TEAL_GRADIENT }}
        >
          <span className="pr-8">Begin your Renewal Process</span>
          <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#FAF7F2] shadow-[0px_3px_6px_rgba(0,0,0,0.15)] transition-transform group-hover:translate-x-0.5">
            <Image
            quality={90}
              src="/common/send-icon.svg"
              alt=""
              width={22}
              height={22}
              className="h-[22px] w-[22px] object-contain"
            />
          </span>
        </a>
      </div>
    </section>
  );
}
