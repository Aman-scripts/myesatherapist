"use client";

import React from "react";
import Image from "next/image";

export function DoctorsMatchingSection() {
  const steps = [
    {
      title: "Start Evaluation",
      desc: "Begin your secure online ESA evaluation through our HIPAA-compliant platform, available to individuals in all 50 states.",
      icon: "/ESA ICons/Icon-18.svg",
      desktopOffsetClass: "lg:translate-y-0",
    },
    {
      title: "Get Matched",
      desc: "We connect you with a licensed professional authorized to practice in your state, with telehealth sessions by video or phone.",
      icon: "/ESA ICons/Icon-25.svg",
      desktopOffsetClass: "lg:translate-y-[40px]",
    },
    {
      title: "Receive Decision",
      desc: "Your therapist provides an independent clinical assessment. We do not influence clinical decisions. Approval is never guaranteed.",
      icon: "/ESA ICons/Icon-46.svg",
      desktopOffsetClass: "lg:translate-y-[80px]",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background w-full overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Frame 1000011447 (Header, gap: 8px) */}
        <div className="text-center mb-12 lg:mb-[80px] max-w-[987px] mx-auto flex flex-col items-center gap-[8px]">
          <h2 className="heading-h2 text-primary max-w-[742px]">
            How You&apos;re Matched With A Provider
          </h2>
          <p className="body-large text-body-text max-w-[987px]">
            When you begin an evaluation, you are matched with a licensed mental health professional authorized in your state.
          </p>
        </div>

        {/* Frame 1000011972 (3 Process Cards with cascading offset, width: 1272px, height: 379px) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-[20px] max-w-[1272px] mx-auto pb-6 sm:pb-12 lg:pb-[90px]">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`relative w-full min-h-[210px] mt-8 px-6 pb-6 pt-10 bg-white rounded-[24px] shadow-[0px_1px_7px_rgba(0,0,0,0.08)] flex flex-col justify-end transition-all duration-300 hover:shadow-md ${step.desktopOffsetClass}`}
            >
              <div className="absolute -top-7 left-6 w-[58px] h-[58px] rounded-full bg-white shadow-[0px_2px_6px_rgba(0,0,0,0.12)] flex items-center justify-center">
                <Image src={step.icon} alt="" width={28} height={28} unoptimized className="w-7 h-7 object-contain" />
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <h3 className="heading-h4 text-primary">
                  {step.title}
                </h3>
                <p className="body-text text-body-text">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
