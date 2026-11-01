"use client";

import React from "react";
import Image from "next/image";

export function DoctorsMatchingSection() {
  const steps = [
    {
      title: "Start Evaluation",
      desc: "Begin your secure online evaluation through our HIPAA-compliant platform.",
      icon: "/ESA ICons/Icon-18.svg",
    },
    {
      title: "Get Matched",
      desc: "We connect you with a licensed professional authorized to practice in your state.",
      icon: "/ESA ICons/Glyph-2.svg",
    },
    {
      title: "Receive Decision",
      desc: "Your licensed mental health professional provides an independent clinical assessment.",
      icon: "/ESA ICons/Icon-46.svg",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background w-full overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Frame 1000011447 (Header, gap: 8px) */}
        <div className="text-center mb-12 lg:mb-[80px] max-w-[987px] mx-auto flex flex-col items-center gap-[8px]">
          <h2 className="heading-h2 text-primary max-w-[742px]">
            How You&apos;re Matched With a Provider
          </h2>
          <p className="body-large text-body-text max-w-[987px]">
            When you begin an evaluation, we match you with a licensed mental health professional authorized to practice in your state.
          </p>
        </div>

        {/* Three process cards, icons sit inside each card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-[20px] max-w-[1272px] mx-auto items-stretch">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative w-full min-h-[210px] px-6 pt-6 pb-8 bg-white rounded-[24px] shadow-[0px_1px_7px_rgba(0,0,0,0.08)] flex flex-col items-start transition-all duration-300 hover:shadow-md"
            >
              <div className="mb-4 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0px_2px_6px_rgba(0,0,0,0.08)]">
                <Image src={step.icon} alt={step.title} width={28} height={28} unoptimized className="h-7 w-7 object-contain" />
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
