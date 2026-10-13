"use client";

import React from "react";
import Image from "next/image";
import { CtaButton } from "@/components/common/CtaButton";


const steps = [
  {
    number: "1",
    image: "/esa-renewal/esa-renewal-processworks-step1.webp",
    title: "Set Up Your Appointment",
    description:
      "Create your account and choose a time that works for you to connect with a licensed mental health professional.",
  },
  {
    number: "2",
    image: "/esa-renewal/esa-renewal-processworks-step2.webp",
    title: "Speak With Professionals",
    description:
      "During the consultation, the professional reviews your emotional and mental health concerns and assesses whether an emotional support animal is appropriate.",
  },
  {
    number: "3",
    image: "/esa-renewal/esa-renewal-processworks-step3.webp",
    title: "Clinical Determination",
    description:
      "Following the professional evaluation, if deemed appropriate by the licensed professional, emotional support animal documentation is sent directly to your email. If not, no documentation is issued.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="pt-10 sm:pt-14 lg:pt-16 xl:pt-20 pb-8 sm:pb-10 lg:pb-16 xl:pb-20 bg-[#FAF7F2]">
      <div className="max-w-[1276px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] px-5 py-8 sm:px-8 sm:py-12 md:px-6 lg:px-10 xl:px-[142px] lg:py-12 xl:py-[60px]">
          {/* Heading */}
          <div className="text-center mb-8 sm:mb-10 xl:mb-[72px] space-y-2">
            <h2 className="font-heading text-2xl sm:text-4xl xl:text-[44px] font-bold text-[#2E5A66] leading-tight xl:leading-[54px] tracking-[-0.00015em]">
              How Online ESA Evaluation Works?
            </h2>
            <p className="text-[#5F6B6F] text-sm sm:text-base xl:text-[18px] leading-normal xl:leading-[30px] font-sans font-semibold max-w-3xl mx-auto">
              A simple 3-step process to complete your emotional support animal letter evaluation
            </p>
          </div>

          {/* 3 Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-6 lg:gap-x-11 lg:gap-y-12">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                {/* Circular Image with number badge */}
                <div className="relative w-[180px] h-[180px] md:w-[190px] md:h-[190px] lg:w-[228px] lg:h-[226px] shrink-0 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-[#EFFFF1] shadow-[0px_2px_4px_rgba(0,0,0,0.25)]" />
                  <div className="relative w-[156px] h-[156px] md:w-[166px] md:h-[166px] lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden">
                    <Image
                      quality={90}
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 200px, 166px"
                    />
                  </div>
                  {/* Number badge */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[44px] h-[44px] md:w-[52px] md:h-[52px] lg:w-[65px] lg:h-[65px] rounded-full bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] text-[#FAF7F2] font-bold text-xl md:text-2xl lg:text-[36px] flex items-center justify-center shadow-md">
                    {step.number}
                  </div>
                </div>

                {/* Text */}
                <div className="space-y-2 pt-5 sm:pt-6 max-w-[320px] w-full flex flex-col items-center">
                  <h5 className="font-heading text-lg md:text-xl lg:text-[24px] font-bold leading-tight lg:leading-[32px] bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] bg-clip-text text-transparent sm:whitespace-nowrap">
                    {step.title}
                  </h5>
                  <p className="text-xs sm:text-sm lg:text-[16px] text-[#5F6B6F] font-semibold leading-[22px] lg:leading-[26px] font-sans max-w-[273px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Get Started Button */}
          <div className="flex justify-center mt-10 lg:mt-12">
            <CtaButton href="#how-it-works">Get Started</CtaButton>
          </div>

          {/* Payment note */}
          <div className="mt-6 flex justify-center">
            <div className="inline-block bg-[rgba(252,228,220,0.4)] rounded-[8px] px-6 py-2 sm:px-8 sm:py-2 text-[14px] leading-[26px] font-semibold text-[#5F6B6F] text-center font-sans">
              We authorize your payment first, but only charge it after your evaluation is completed.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
