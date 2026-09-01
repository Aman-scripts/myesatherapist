"use client";

import React from "react";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { StateData } from "@/data/statesData";

export function StateProcessSection({ data }: { data: StateData }) {
  const stateName = data.name;

  const steps = [
    {
      number: "01",
      icon: "/californina-esa-evalutation_schedule.svg",
      title: "Schedule an Evaluation",
      description: `Choose a convenient time to speak with a licensed mental health professional authorized to practice in ${stateName}.`,
      offsetClass: "md:translate-y-0",
    },
    {
      number: "02",
      icon: "/californina-esa-evalutation_clinicalevaluation.svg",
      title: "Complete Your Evaluation",
      description:
        "Join a confidential session via secure phone or video call. During the consultation, the clinician will assess your mental health history and current emotional concerns to determine whether an emotional support animal would be beneficial.",
      offsetClass: "md:translate-y-8 lg:translate-y-12",
    },
    {
      number: "03",
      icon: "/californina-esa-evalutation_clinicaldetermination.svg",
      title: "Clinical Determination",
      description:
        "Following the evaluation, the licensed professional renders an independent decision. If appropriate, your ESA letter will be delivered to you via secure email.",
      offsetClass: "md:translate-y-16 lg:translate-y-24",
    },
  ];

  const differentiators = [
    "No promises of instant or guaranteed ESA approvals.",
    `Evaluations conducted by licensed mental health professionals in ${stateName}.`,
    "Secure telehealth platform designed to meet HIPAA privacy standards.",
    "ESA documentation issued only after an independent clinical determination.",
  ];

  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="process"
      className="w-full bg-[#FAF7F2] pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 scroll-mt-36 relative z-10"
    >
      <div className="max-w-[1260px] mx-auto">
        <div className="text-center max-w-[1050px] mx-auto mb-14 sm:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-bold text-[#2E5A66] leading-[1.18] tracking-tight mb-4 md:whitespace-nowrap">
            How ESA Letter Process Works in {stateName}?
          </h2>
          <p className="font-sans text-sm sm:text-base lg:text-[18px] text-[#5F6B6F] font-semibold leading-[1.65]">
            We connect {stateName} residents with licensed mental health professionals for personalized emotional wellness assessments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24 sm:mb-32 lg:mb-40 items-start">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`bg-white rounded-[28px] lg:rounded-[30px] p-7 sm:p-8 border border-[#EAE5DC] shadow-[0px_1px_7px_rgba(0,0,0,0.08)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_45px_rgba(26,61,79,0.08)] min-h-[290px] sm:min-h-[310px] ${step.offsetClass}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm"
                    style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                  >
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={26}
                      height={26}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="font-heading text-4xl sm:text-5xl font-bold text-[#5F6B6F]/20 tracking-tight">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-[22px] lg:text-[24px] font-bold text-[#2E5A66] leading-[1.3] mb-3">
                  {step.title}
                </h3>

                <p className="font-sans text-xs sm:text-[13.5px] lg:text-[16px] text-[#5F6B6F] leading-[26px] font-semibold">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[rgba(232,185,44,0.1)] rounded-[30px] p-8 sm:p-10 lg:p-12 max-w-[895px] mx-auto shadow-xs">
          <h3 className="font-heading text-xl sm:text-2xl lg:text-[24px] xl:text-[28px] font-bold text-[#2E5A66] text-center mb-8 md:whitespace-nowrap">
            Why {stateName} Residents Choose Our ESA Letter Process?
          </h3>

          <div className="flex flex-col space-y-4 max-w-[660px] mx-auto">
            {differentiators.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3.5">
                <div
                  className="w-5 h-5 rounded-full text-white flex items-center justify-center shrink-0 shadow-xs"
                  style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="font-sans text-xs sm:text-sm lg:text-[14px] font-semibold text-[#5F6B6F]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-white font-semibold text-base sm:text-[16px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 transition-all duration-200 group"
            style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 stroke-[2] text-[#FAF7F2] transition-transform group-hover:translate-x-1" />
          </button>
          <p className="font-sans text-xs text-[#5F6B6F] font-semibold mt-3">
            No hidden fees. HIPAA secure.
          </p>
        </div>
      </div>
    </section>
  );
}
