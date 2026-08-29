"use client";

import React from "react";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: "/californina-esa-evalutation_schedule.svg",
    title: "Schedule an Evaluation",
    description:
      "Quick & Easy Scheduling. Choose a time that works for you to connect with a Hawaii-licensed mental health professional.",
    offsetClass: "md:translate-y-0",
  },
  {
    number: "02",
    icon: "/californina-esa-evalutation_clinicalevaluation.svg",
    title: "Complete Your Evaluation",
    description:
      "Confidential Clinical Evaluation. Participate in a private telehealth assessment where your emotional and mental health needs are evaluated.",
    offsetClass: "md:translate-y-8 lg:translate-y-12",
  },
  {
    number: "03",
    icon: "/californina-esa-evalutation_clinicaldetermination.svg",
    title: "Clinical Determination",
    description:
      "Evaluation-Based Decision. If clinically recommended, receive your legitimate, FHA-compliant Hawaii ESA letter from your licensed clinician.",
    offsetClass: "md:translate-y-16 lg:translate-y-24",
  },
];

const differentiators = [
  "HIPAA-compliant telehealth platforms protecting your privacy.",
  "No instant automated letters — genuine clinical evaluations only.",
  "Hawaii-licensed mental health professionals.",
  "100% compliant with Federal Housing Act & Hawaii regulations.",
];

export function HawaiiProcessSection() {
  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="process"
      className="w-full bg-[#FAF7F2] pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 scroll-mt-36 relative z-10"
    >
      <div className="max-w-[1260px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-[1050px] mx-auto mb-14 sm:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-bold text-[#1E3E47] leading-[1.18] tracking-tight mb-4 md:whitespace-nowrap"> How ESA Letter Process Works in Hawaii? </h2>
          <p className="font-sans text-sm sm:text-base lg:text-[16.5px] text-[#5F6B6F] font-medium leading-[1.65]">
            Our platform connects Hawaii residents with licensed mental health professionals for secure telehealth ESA evaluations in full accordance with state requirements and federal housing laws.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24 sm:mb-32 lg:mb-40 items-start">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`bg-white rounded-[28px] lg:rounded-[32px] p-7 sm:p-8 border border-[#EAE5DC] shadow-[0_10px_35px_rgba(0,0,0,0.035)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_45px_rgba(26,61,79,0.08)] min-h-[290px] sm:min-h-[310px] ${step.offsetClass}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-full bg-[#184F59] flex items-center justify-center shrink-0 shadow-sm">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={26}
                      height={26}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="font-heading text-4xl sm:text-5xl font-bold text-[#CBD5E1] tracking-tight">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-[22px] font-bold text-[#1E3E47] leading-[1.3] mb-3">
                  {step.title}
                </h3>

                <p className="font-sans text-xs sm:text-[13.5px] text-[#5F6B6F] leading-[1.65] font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Our Process Is Trusted Across Hawaii */}
        <div className="bg-[#FAF5EB] rounded-[32px] sm:rounded-[36px] border border-[#EFE8DC] p-8 sm:p-10 lg:p-12 max-w-[920px] mx-auto shadow-xs">
          <h3 className="font-heading text-xl sm:text-2xl lg:text-[28px] xl:text-3xl font-bold text-[#1E3E47] text-center mb-8 md:whitespace-nowrap">
            Why Our ESA Letter Process Is Trusted Across Hawaii?
          </h3>

          <div className="flex flex-col space-y-4 max-w-[540px] mx-auto">
            {differentiators.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-sans text-xs sm:text-sm lg:text-[15px] font-semibold text-[#1E3E47]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button & Subtext */}
        <div className="text-center mt-10 sm:mt-12">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-[#184F59] hover:bg-[#133F47] text-white font-bold text-base sm:text-[17px] shadow-[0_8px_25px_rgba(24,79,89,0.22)] transition-all duration-200 group cursor-pointer"
          >
            <span>Start your Free Evaluation</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-1" />
          </button>
          <p className="font-sans text-xs text-[#5F6B6F] font-medium mt-3">
            No hidden fees. HIPAA secure.
          </p>
        </div>

      </div>
    </section>
  );
}
