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
      description: `Create an account and schedule a telehealth appointment with a ${stateName}-licensed mental health professional.`,
      offsetClass: "md:translate-y-0",
    },
    {
      number: "02",
      icon: "/californina-esa-evalutation_clinicalevaluation.svg",
      title: "Clinical Evaluation & Ongoing Care",
      description:
        "Meet privately via secure audio or video consultation. The clinician assesses your needs and maintains the therapeutic relationship throughout the evaluation process.",
      offsetClass: "md:translate-y-6 lg:translate-y-10",
    },
    {
      number: "03",
      icon: "/californina-esa-evalutation_clinicaldetermination.svg",
      title: "Clinical Determination",
      description:
        "If the clinician determines that an ESA is appropriate after the evaluation, a compliant ESA letter is issued and delivered securely.",
      offsetClass: "md:translate-y-12 lg:translate-y-20",
    },
  ];

  const differentiators = [
    "No instant or automated ESA letters issued.",
    `${stateName}-compliant documentation.`,
    `${stateName} licensed mental health professionals only.`,
    "HIPAA‑compliant, secure telehealth platform.",
  ];

  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="process"
      className="w-full bg-[#FAF7F2] pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 scroll-mt-24 relative z-10"
    >
      <div className="max-w-[1283px] mx-auto">
        <div className="text-center max-w-[1030px] mx-auto mb-12 sm:mb-16 space-y-2 sm:space-y-3">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[44px] font-bold text-[#2E5A66] leading-[1.23] tracking-[-0.00015em]">
            How the {stateName} ESA Evaluation Process Works?
          </h2>
          <p className="font-sans text-sm sm:text-base lg:text-[18px] text-[#5F6B6F] font-semibold leading-[1.67] max-w-[885px] mx-auto">
            Our platform helps {stateName} residents connect with licensed mental health professionals for ESA evaluations conducted through secure telehealth, in accordance with applicable requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-24 lg:mb-32 items-start">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`bg-white rounded-[30px] p-[24px_22px] shadow-[0px_1px_7px_rgba(0,0,0,0.08)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_45px_rgba(26,61,79,0.08)] min-h-[290px] sm:min-h-[310px] ${step.offsetClass}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-[46px] h-[46px] rounded-full bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] flex items-center justify-center shrink-0 shadow-sm">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="font-heading text-[54px] leading-[66px] font-bold text-[#5F6B6F]/20 tracking-tight">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-heading text-[20px] sm:text-[24px] font-bold text-[#2E5A66] leading-[32px] mb-2 tracking-[-0.00015em]">
                  {step.title}
                </h3>

                <p className="font-sans text-[14px] sm:text-[16px] text-[#5F6B6F] leading-[26px] font-semibold">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[rgba(232,185,44,0.1)] rounded-[30px] p-6 sm:p-8 lg:py-[25px] lg:px-[67px] max-w-[688px] mx-auto">
          <h3 className="font-heading text-[20px] sm:text-[24px] font-bold text-[#2E5A66] leading-[32px] text-center mb-6 tracking-[-0.00015em]">
            Why Our Process Is Different
          </h3>

          <div className="flex flex-col space-y-2 sm:space-y-2.5 max-w-[554px] mx-auto">
            {differentiators.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="font-sans text-[14px] leading-[26px] font-semibold text-[#5F6B6F]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center gap-2 max-w-[356px] w-full h-[48px] rounded-[30px] bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] hover:opacity-95 text-white font-semibold text-[16px] leading-[26px] font-sans shadow-[0px_2px_4px_rgba(0,0,0,0.15)] transition-all duration-200 group mx-auto"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5] text-[#FAF7F2] transition-transform group-hover:translate-x-1" />
          </button>
          <p className="font-sans text-[12px] leading-[26px] text-[#5F6B6F] font-semibold mt-2">
            No hidden fees. HIPAA secure.
          </p>
        </div>
      </div>
    </section>
  );
}
