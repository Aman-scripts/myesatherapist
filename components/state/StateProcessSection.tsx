"use client";

import React from "react";
import Image from "next/image";
import { StateData } from "@/data/statesData";
import { CtaButton } from "@/components/common/CtaButton";

function processIcon(src: string) {
  if (src.includes("schedule")) return "/ESA ICons/Icon-16.svg";
  if (src.includes("clinicalevaluation")) return "/ESA ICons/Icon-18.svg";
  if (src.includes("clinicaldetermination")) return "/ESA ICons/Glyph-2.svg";
  return src;
}

export function StateProcessSection({ data }: { data: StateData }) {
  const stateName = data.name;

  const defaultSteps = [
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

  const steps = data.processSteps && data.processSteps.length > 0
    ? data.processSteps.map((s, idx) => ({
        ...s,
        offsetClass: idx === 0 ? "md:translate-y-0" : idx === 1 ? "md:translate-y-10" : "md:translate-y-20",
      }))
    : defaultSteps;

  const differentiators = data.processDifferentiators || [
    "No instant or automated ESA letters issued.",
    data.abbreviation === "CA"
      ? "AB 468–compliant documentation."
      : "Legitimate, legally compliant documentation.",
    `${stateName} licensed mental health professionals only.`,
    "HIPAA‑compliant, secure telehealth platform.",
  ];

  const title = data.processTitle || `How the ${stateName} ESA Evaluation Process Works?`;
  const subtitle = data.processSubtitle || `Our platform helps ${stateName} residents connect with licensed mental health professionals for ESA evaluations conducted through secure telehealth, in accordance with ${data.abbreviation === "CA" ? "California’s AB 468 requirements" : `${stateName} state requirements`}.`;

  return (
    <section
      id="process"
      className="w-full bg-background py-14 sm:py-18 lg:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-36 relative z-10"
    >
      {/* Frame 1000012002 */}
      <div className="max-w-[1283px] mx-auto flex flex-col items-center gap-14 sm:gap-16 lg:gap-20">
        {/* Frame 1000011447: Heading and Subtitle */}
        <div className="text-center max-w-[1030px] mx-auto space-y-3 sm:space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-primary leading-tight lg:leading-[54px] tracking-[-0.00015em]">
            {title}
          </h2>
          <p className="font-sans font-semibold text-sm sm:text-base lg:text-[18px] text-body-text leading-relaxed sm:leading-[30px] max-w-[885px] mx-auto">
            {subtitle}
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
              <div className="flex items-center w-full mb-4">
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.15)]">
                  <Image
                    quality={90}
                    src={processIcon(step.icon)}
                    alt=""
                    width={24}
                    height={24}
                    unoptimized
                    className="h-6 w-6 object-contain"
                  />
                </div>
              </div>

              {/* Frame 1000011970: Title and Description */}
              <div className="space-y-2 flex-1">
                <h3 className="font-heading font-bold text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-primary">
                  {step.title}
                </h3>
                <p className="font-sans font-semibold text-[14px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-body-text">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Frame 1000011978: Why Our Process Is Different / Unique */}
        <div className="w-full max-w-[760px] mx-auto rounded-[30px] bg-[rgba(232,185,44,0.1)] p-6 sm:p-[25px_45px] flex flex-col items-center gap-6 shadow-xs">
          <h3 className="font-heading font-bold text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-primary text-center">
            {data.processDifferentiatorsTitle || "Why Our Process Is Different"}
          </h3>

          {/* Frame 1000012001: Checklist */}
          <div className="flex flex-col items-start gap-2.5 w-full max-w-[620px]">
            {differentiators.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5 w-full">
                {/* Frame 1000011979: Gradient Check Icon */}
                <Image
                  src="/ESA ICons/Icon-46.svg"
                  alt=""
                  width={20}
                  height={20}
                  unoptimized
                  className="mt-0.5 h-5 w-5 shrink-0 object-contain"
                />
                <span className="font-sans font-semibold text-[13px] sm:text-[14px] leading-relaxed text-body-text">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Process Note if provided */}
          {data.processNote && (
            <div className="w-full bg-white/80 rounded-[16px] p-4 border border-accent/40 mt-2">
              <p className="font-sans text-xs sm:text-[13px] font-semibold text-body-text leading-relaxed">
                {data.processNote}
              </p>
            </div>
          )}
        </div>

        {/* Frame 1000011961: CTA Button and Subtitle */}
        <div className="flex flex-col items-center gap-2">
          <CtaButton href="/pricing/">Start Your Free Evaluation</CtaButton>
          <p className="font-sans font-semibold text-[12px] leading-[26px] text-body-text text-center">
            If not approved after your evaluation? You get a full refund.
          </p>
        </div>
      </div>
    </section>
  );
}
