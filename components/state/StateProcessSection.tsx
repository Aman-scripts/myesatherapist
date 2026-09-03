"use client";

import React from "react";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { StateData } from "@/data/statesData";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

export function StateProcessSection({ data }: { data: StateData }) {
  const stateName = data.name;

  const steps = [
    {
      number: "01",
      icon: "/states/californina-esa-evalutation_schedule.svg",
      title: "Schedule an Evaluation",
      description: `Create an account and schedule a telehealth appointment with a ${stateName}-licensed mental health professional.${
        data.abbreviation === "CA"
          ? " This begins the required 30‑day provider relationship under AB 468."
          : " Choose a convenient time for your evaluation session."
      }`,
      offsetClass: "md:translate-y-0",
    },
    {
      number: "02",
      icon: "/states/californina-esa-evalutation_clinicalevaluation.svg",
      title: "Clinical Evaluation & Ongoing Provider Relationship",
      description:
        "Meet privately via secure audio or video consultation. The clinician assesses your needs and maintains the therapeutic relationship throughout the required period.",
      offsetClass: "md:translate-y-10",
    },
    {
      number: "03",
      icon: "/states/californina-esa-evalutation_clinicaldetermination.svg",
      title: "Clinical Determination",
      description: `If the clinician determines that an ESA is appropriate after the ${
        data.abbreviation === "CA" ? "30‑day requirement" : "evaluation process"
      }, a compliant ESA letter is issued and delivered securely.`,
      offsetClass: "md:translate-y-20",
    },
  ];

  const differentiators = [
    "No instant or automated ESA letters issued.",
    data.abbreviation === "CA"
      ? "AB 468–compliant documentation."
      : "Legitimate, legally compliant documentation.",
    `${stateName} licensed mental health professionals only.`,
    "HIPAA‑compliant, secure telehealth platform.",
  ];

  return (
    <section
      id="process"
      className="w-full bg-[#FAF7F2] py-14 sm:py-18 lg:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-36 relative z-10"
    >
      {/* Frame 1000012002 */}
      <div className="max-w-[1283px] mx-auto flex flex-col items-center gap-14 sm:gap-16 lg:gap-20">
        {/* Frame 1000011447: Heading and Subtitle */}
        <div className="text-center max-w-[1030px] mx-auto space-y-3 sm:space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#2E5A66] leading-tight lg:leading-[54px] tracking-[-0.00015em]">
            How the {stateName} ESA Evaluation Process Works?
          </h2>
          <p className="font-sans font-semibold text-sm sm:text-base lg:text-[18px] text-[#5F6B6F] leading-relaxed sm:leading-[30px] max-w-[885px] mx-auto">
            Our platform helps {stateName} residents connect with licensed mental health professionals for ESA evaluations conducted through secure telehealth, in accordance with {data.abbreviation === "CA" ? "California’s AB 468 requirements" : `${stateName} state requirements`}.
          </p>
        </div>

        {/* Frame 1000011972: 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6 xl:gap-[26px] w-full max-w-[1283px] mx-auto items-start pb-6 md:pb-16 lg:pb-24">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`w-full max-w-[410px] mx-auto bg-white rounded-[30px] p-[24px_22px] border border-[#EAE5DC]/60 shadow-[0px_1px_7px_rgba(0,0,0,0.08)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_45px_rgba(26,61,79,0.08)] min-h-[303px] ${step.offsetClass}`}
            >
              {/* Frame 1000011971: Top row with Icon and Number */}
              <div className="flex items-center justify-between w-full mb-4">
                {/* Frame 1000011969: Icon Badge */}
                <div
                  className="w-[46px] h-[46px] rounded-[53px] flex items-center justify-center shrink-0 shadow-xs"
                  style={{ backgroundImage: TEAL_GRADIENT }}
                >
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>

                {/* Number 01 / 02 / 03 */}
                <span className="font-[family-name:var(--font-plus-jakarta-sans)] text-[46px] sm:text-[54px] font-bold text-[#5F6B6F] opacity-20 leading-[66px] tracking-tight">
                  {step.number}
                </span>
              </div>

              {/* Frame 1000011970: Title and Description */}
              <div className="space-y-2 flex-1">
                <h3 className="font-heading font-bold text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-[#2E5A66]">
                  {step.title}
                </h3>
                <p className="font-sans font-semibold text-[14px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[#5F6B6F]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Frame 1000011978: Why Our Process Is Different */}
        <div className="w-full max-w-[688px] mx-auto rounded-[30px] bg-[rgba(232,185,44,0.1)] p-6 sm:p-[25px_67px] flex flex-col items-center gap-6 shadow-xs">
          <h3 className="font-heading font-bold text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-[#2E5A66] text-center">
            Why Our Process Is Different
          </h3>

          {/* Frame 1000012001: Checklist */}
          <div className="flex flex-col items-start gap-2 w-full max-w-[554px]">
            {differentiators.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 w-full">
                {/* Frame 1000011979: Gradient Check Icon */}
                <div
                  className="w-5 h-5 rounded-[10px] text-white flex items-center justify-center shrink-0 shadow-xs"
                  style={{ backgroundImage: TEAL_GRADIENT }}
                >
                  <Check className="w-[11px] h-[11px] stroke-[3.5]" />
                </div>
                <span className="font-sans font-semibold text-[13px] sm:text-[14px] leading-[26px] text-[#5F6B6F]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Frame 1000011961: CTA Button and Subtitle */}
        <div className="flex flex-col items-center gap-2">
          <a
            href="#faq"
            className="w-full sm:w-[356px] h-[48px] rounded-[30px] text-white font-semibold text-[16px] leading-[26px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-center gap-2 transition-opacity hover:opacity-95"
            style={{ backgroundImage: TEAL_GRADIENT }}
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5] text-white" />
          </a>
          <p className="font-sans font-semibold text-[12px] leading-[26px] text-[#5F6B6F] text-center">
            No hidden fees. HIPAA secure.
          </p>
        </div>
      </div>
    </section>
  );
}
