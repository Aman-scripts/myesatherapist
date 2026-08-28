"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    stepNumber: "01",
    title: "Complete Online Assessment",
    description:
      "Fill out a brief, confidential questionnaire about your mental health needs and how an emotional support animal assists you daily.",
    icon: "/howitworks-cardone.svg",
  },
  {
    stepNumber: "02",
    title: "Evaluation by a Licensed Professional",
    description:
      "A licensed mental health professional licensed to practice in Wyoming reviews your assessment during a telehealth consultation.",
    icon: "/howitworks-cardtwo.svg",
  },
  {
    stepNumber: "03",
    title: "Receive Your Official ESA Letter",
    description:
      "If clinically recommended, receive your official ESA documentation compliant with federal Fair Housing Act guidelines.",
    icon: "/howitworks-cardthree.svg",
  },
];

export function WyomingProcessSection() {
  return (
    <section className="w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-[840px] mx-auto mb-10 sm:mb-12 lg:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-bold text-[#1E3E47] leading-[1.2] tracking-tight">
            How to Request an ESA Letter in Wyoming?
          </h2>
          <p className="font-sans text-xs sm:text-sm lg:text-[15px] text-[#5F6B6F] font-medium leading-relaxed mt-3 max-w-[760px] mx-auto">
            Our telehealth evaluation process is designed to be straightforward, secure, and fully compliant with Wyoming state and federal regulations.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-white rounded-[24px] p-6 sm:p-7 lg:p-8 border border-[#EAE5DC] shadow-[0_4px_25px_rgba(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_12px_35px_rgba(26,61,79,0.08)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Step Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-heading text-xs font-bold text-[#184F59] uppercase tracking-wider bg-[#E7F5EE] px-3 py-1 rounded-full">
                  Step {step.stepNumber}
                </span>
                <div className="w-12 h-12 relative flex items-center justify-center">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="font-heading text-lg sm:text-xl lg:text-[22px] font-bold text-[#1E3E47] mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#5F6B6F] font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Yellow Callout Banner */}
        <div className="mt-10 sm:mt-12 max-w-[960px] mx-auto bg-[#FAF7F2] rounded-[16px] p-4 sm:p-5 border border-[#EAE5DC] shadow-xs flex items-center gap-4">
          <div className="w-2 h-12 bg-[#E8B92C] rounded-full shrink-0" />
          <p className="font-sans text-xs sm:text-sm text-[#5F6B6F] font-medium leading-relaxed">
            <strong className="text-[#1E3E47]">Important Note:</strong> ESA letters issued by My ESA Therapist are written by clinicians licensed to practice in Wyoming and strictly follow established telehealth and mental health evaluation standards.
          </p>
        </div>

      </div>
    </section>
  );
}
