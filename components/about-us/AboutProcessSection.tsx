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
      "Create your account and choose a date and time that works for you to connect with a licensed mental health professional.",
  },
  {
    number: "2",
    image: "/esa-renewal/esa-renewal-processworks-step2.webp",
    title: "Speak With Professionals",
    description:
      "During the consultation, the professional reviews your emotional and mental health concerns and assesses whether an ESA is appropriate.",
  },
  {
    number: "3",
    image: "/esa-renewal/esa-renewal-processworks-step3.webp",
    title: "Clinical Determination",
    description:
      "ESA documentation is emailed when deemed clinically appropriate by the licensed professional. If not appropriate, no documentation is issued.",
  },
];

export function AboutProcessSection() {
  return (
    <section id="how-it-works" className="pt-10 sm:pt-14 lg:pt-16 xl:pt-20 pb-8 sm:pb-10 lg:pb-16 xl:pb-20 bg-background">
      <div className="max-w-[1276px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] px-5 py-8 sm:px-8 sm:py-12 md:px-6 lg:px-10 xl:px-[100px] lg:py-12 xl:py-[60px]">
          {/* Heading */}
          <div className="text-center mb-8 sm:mb-10 xl:mb-[72px] space-y-2">
            <h2 className="heading-h2 text-primary capitalize">
              How Does Our Online ESA Evaluation Work?
            </h2>
            <p className="body-large text-body-text max-w-3xl mx-auto">
              A simple 3-step process to complete your emotional support animal letter evaluation!
            </p>
          </div>

          {/* 3 Step Cards with connecting arrows */}
          <div className="relative">
            {/* Arrow 1 -> 2 (Desktop / Tablet) */}
            <div className="hidden md:block absolute top-[85px] lg:top-[113px] left-[33.33%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <svg viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[30px] lg:w-[60px] h-auto">
                <path d="M2 12H54" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" />
                <path d="M44 4L56 12L44 20" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Arrow 2 -> 3 (Desktop / Tablet) */}
            <div className="hidden md:block absolute top-[85px] lg:top-[113px] left-[66.66%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <svg viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[30px] lg:w-[60px] h-auto">
                <path d="M2 12H54" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" />
                <path d="M44 4L56 12L44 20" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-4 lg:gap-x-11 relative z-10">
              {steps.map((step, idx) => (
                <React.Fragment key={step.number}>
                  <div className="flex flex-col items-center text-center">
                    {/* Circular Image with inner container */}
                    <div className="relative w-[180px] h-[180px] md:w-[170px] md:h-[170px] lg:w-[228px] lg:h-[226px] shrink-0 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-[#EFFFF1] shadow-[0px_2px_4px_rgba(0,0,0,0.25)]" />
                      <div className="relative w-[156px] h-[156px] md:w-[148px] md:h-[148px] lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden">
                        <Image
                          quality={90}
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 200px, 166px"
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="space-y-2.5 pt-5 sm:pt-6 max-w-[340px] w-full flex flex-col items-center">
                      <h3 className="heading-h3 text-color-gradient capitalize lg:whitespace-nowrap">
                        {step.title}
                      </h3>
                      <p className="body-large max-w-[320px]">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Mobile Downward Arrow between steps */}
                  {idx < steps.length - 1 && (
                    <div className="md:hidden flex justify-center py-2" aria-hidden="true">
                      <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2V30" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" />
                        <path d="M4 22L12 32L20 22" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Get Started Button + Refund reassurance */}
          <div className="flex flex-col items-center mt-10 lg:mt-12 gap-2">
            <CtaButton href="/pricing/">Get Started</CtaButton>
            <p className="body-small text-center">
              If not approved after your evaluation? You get a full refund.
            </p>
          </div>

          {/* Payment note */}
          <div className="mt-6 flex justify-center">
            <div className="inline-block bg-[rgba(252,228,220,0.4)] rounded-[8px] px-6 py-2 sm:px-8 sm:py-2 body-small text-center border border-[#E76F51]/20">
              We authorize your payment first, but we will only charge it after your evaluation is completed.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
