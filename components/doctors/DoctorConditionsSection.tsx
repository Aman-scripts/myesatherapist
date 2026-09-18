"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DoctorProfile } from "@/data/doctorsData";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

/** Map each condition label to an existing icon + image + position */
const CONDITION_MAP: Record<
  string,
  { icon: string; image: string; left: number; top: number; alignRight?: boolean; description: string }
> = {
  "Depressive Disorders": {
    icon: "/home/qualifying-conditions-depression.svg",
    image: "/qualifyingConditions_image/Depression.webp",
    left: 5.48,
    top: 4.55,
    description:
      "ESAs provide vital companionship, encourage daily routine, and help counteract feelings of isolation associated with depressive disorders.",
  },
  "Anxiety-Related Conditions": {
    icon: "/home/qualifying-conditions-anxiety-disorder.svg",
    image: "/qualifyingConditions_image/Anxiety Disorders.webp",
    left: 56.81,
    top: -0.24,
    description:
      "ESAs help lower elevated stress levels and provide grounding sensory stimulation during periods of intense anxiety.",
  },
  "Chronic Health Conditions": {
    icon: "/home/qualifying-conditions-other-ada.svg",
    image: "/qualifyingConditions_image/Other ADA Conditions.webp",
    left: 80.91,
    top: 20.31,
    alignRight: true,
    description:
      "Providing clinically recognized emotional support tailored to individual chronic health needs and functional impairments.",
  },
  "Stress-Related Symptoms": {
    icon: "/home/qualifying-conditions-mood-disorder.svg",
    image: "/qualifyingConditions_image/mood disoder.webp",
    left: 1.80,
    top: 42.0,
    description:
      "Companion animals help stabilize stress responses and provide consistent emotional grounding throughout daily life.",
  },
  "Sleep-Related Concerns": {
    icon: "/home/qualifying-conditions-adhd.svg",
    image: "/qualifyingConditions_image/adhd.webp",
    left: 82.5,
    top: 55.67,
    alignRight: true,
    description:
      "An ESA's calming presence can help establish a more settled bedtime routine and ease sleep-related distress.",
  },
  "Other Qualifying Health Conditions": {
    icon: "/home/qualifying-conditions-social-anxiety.svg",
    image: "/qualifyingConditions_image/socail Anxiety .webp",
    left: 28.01,
    top: 18.0,
    description:
      "ESAs offer meaningful emotional support for a broad range of qualifying health conditions as determined by a licensed provider.",
  },
  "Individual Psychotherapy": {
    icon: "/home/qualifying-conditions-depression.svg",
    image: "/qualifyingConditions_image/Depression.webp",
    left: 5.48,
    top: 4.55,
    description: "Individual Psychotherapy",
  },
  "Child and Family Welfare": {
    icon: "/home/qualifying-conditions-anxiety-disorder.svg",
    image: "/qualifyingConditions_image/Anxiety Disorders.webp",
    left: 56.81,
    top: -0.24,
    description: "Child and Family Welfare",
  },
  "Family Therapy": {
    icon: "/home/qualifying-conditions-other-ada.svg",
    image: "/qualifyingConditions_image/Other ADA Conditions.webp",
    left: 80.91,
    top: 20.31,
    alignRight: true,
    description: "Family Therapy",
  },
  "Mental Health Counseling": {
    icon: "/home/qualifying-conditions-mood-disorder.svg",
    image: "/qualifyingConditions_image/mood disoder.webp",
    left: 1.80,
    top: 42.0,
    description: "Mental Health Counseling",
  },
  "Animal-Assisted Therapy": {
    icon: "/home/qualifying-conditions-adhd.svg",
    image: "/qualifyingConditions_image/adhd.webp",
    left: 82.5,
    top: 55.67,
    alignRight: true,
    description: "Animal-Assisted Therapy",
  },
  "Clinical Social Work": {
    icon: "/home/qualifying-conditions-social-anxiety.svg",
    image: "/qualifyingConditions_image/socail Anxiety .webp",
    left: 28.01,
    top: 18.0,
    description: "Clinical Social Work",
  },
  "Anxiety": {
    icon: "/home/qualifying-conditions-anxiety-disorder.svg",
    image: "/qualifyingConditions_image/Anxiety Disorders.webp",
    left: 5.48,
    top: 4.55,
    description: "Anxiety",
  },
  "Depression": {
    icon: "/home/qualifying-conditions-depression.svg",
    image: "/qualifyingConditions_image/Depression.webp",
    left: 56.81,
    top: -0.24,
    description: "Depression",
  },
  "PTSD": {
    icon: "/home/qualifying-conditions-ptsd.svg",
    image: "/qualifyingConditions_image/ptsd.webp",
    left: 80.91,
    top: 20.31,
    alignRight: true,
    description: "PTSD",
  },
  "Stress Management": {
    icon: "/home/qualifying-conditions-mood-disorder.svg",
    image: "/qualifyingConditions_image/mood disoder.webp",
    left: 1.80,
    top: 42.0,
    description: "Stress Management",
  },
  "Mental Wellness Support": {
    icon: "/home/qualifying-conditions-social-anxiety.svg",
    image: "/qualifyingConditions_image/socail Anxiety .webp",
    left: 82.5,
    top: 55.67,
    alignRight: true,
    description: "Mental Wellness Support",
  },
  "ESA Evaluations": {
    icon: "/home/qualifying-conditions-other-ada.svg",
    image: "/qualifyingConditions_image/Other ADA Conditions.webp",
    left: 28.01,
    top: 18.0,
    description: "ESA Evaluations",
  },
  "Housing ESA Documentation": {
    icon: "/home/qualifying-conditions-adhd.svg",
    image: "/qualifyingConditions_image/adhd.webp",
    left: 45.0,
    top: 68.0,
    description: "Housing ESA Documentation",
  },
};

interface DoctorConditionsSectionProps {
  doctor: DoctorProfile;
  className?: string;
  id?: string;
}

export function DoctorConditionsSection({
  doctor,
  className = "",
  id = "doctor-conditions",
}: DoctorConditionsSectionProps) {
  const conditionsData = doctor.conditionsSection;
  const [hoveredCondition, setHoveredCondition] = useState<string | null>(null);

  if (!conditionsData) return null;

  const conditions = conditionsData.conditions.map((label) => ({
    label,
    ...(CONDITION_MAP[label] ?? {
      icon: "/home/qualifying-conditions-other-ada.svg",
      image: "/qualifyingConditions_image/Other ADA Conditions.webp",
      left: 50,
      top: 50,
      description: label,
    }),
  }));

  return (
    <section
      id={id}
      className={`py-14 sm:py-16 lg:py-20 pb-28 sm:pb-32 lg:pb-36 bg-[#FAF7F2] overflow-visible ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14 space-y-3 max-w-[709px] mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#2E5A66] leading-tight tracking-[-0.006em]">
            {conditionsData.heading}
          </h2>
          <p className="text-[#5F6B6F] text-base sm:text-lg font-semibold leading-relaxed">
            {conditionsData.description}
          </p>
        </div>

        {/* Desktop: qualifying-conditions image with floating badge overlay */}
        <div className="hidden md:block relative mx-auto" style={{ maxWidth: 1278 }}>
          <div className="relative w-full" style={{ aspectRatio: "1278 / 418" }}>

            {/* Background photo */}
            <div
              className="absolute overflow-hidden pointer-events-none"
              style={{ left: "11.50%", top: "7.89%", width: "74.49%", aspectRatio: "952 / 493" }}
            >
              <Image
                src="/home/qualifying-conditions.png"
                alt="Qualifying conditions for ESA"
                fill
                priority
                className="object-contain"
                sizes="(min-width: 1024px) 952px, 75vw"
              />
            </div>

            {/* Floating condition badges */}
            {conditions.map((c) => {
              const isVisible = hoveredCondition === c.label;
              return (
                <div
                  key={c.label}
                  className="absolute group"
                  style={{
                    left: `${c.left}%`,
                    top: `${c.top}%`,
                    zIndex: isVisible ? 40 : 20,
                  }}
                  onMouseEnter={() => setHoveredCondition(c.label)}
                  onMouseLeave={() => setHoveredCondition(null)}
                >
                  {/* Badge */}
                  <div
                    onClick={() => setHoveredCondition(c.label)}
                    className="flex items-center gap-1.5 md:gap-1.5 lg:gap-2 xl:gap-3 bg-white rounded-[6px] md:rounded-[6px] lg:rounded-[8px] xl:rounded-[10px] pl-1 md:pl-1 lg:pl-1.5 xl:pl-2 pr-2.5 md:pr-2.5 lg:pr-3.5 xl:pr-4 h-[28px] md:h-[28px] lg:h-[36px] xl:h-12 shadow-[0_4px_12px_-6px_rgba(46,90,102,0.35)] lg:shadow-[0_6px_18px_-8px_rgba(46,90,102,0.35)] xl:shadow-[0_10px_25px_-10px_rgba(46,90,102,0.35)] w-fit text-[10.5px] md:text-[10.5px] lg:text-[13px] xl:text-[16px] font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer hover:scale-[1.02]"
                  >
                    <span className="w-[20px] h-[20px] md:w-[20px] md:h-[20px] lg:w-[26px] lg:h-[26px] xl:w-[35px] xl:h-[35px] rounded-full bg-[#E8EEF0] flex items-center justify-center shrink-0">
                      <Image
                        src={c.icon}
                        alt=""
                        width={20}
                        height={20}
                        unoptimized
                        className="object-contain w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5"
                      />
                    </span>
                    <span
                      className="bg-clip-text text-transparent"
                      style={{ backgroundImage: TEAL_GRADIENT }}
                    >
                      {c.label}
                    </span>
                  </div>

                  {/* Hover popover */}
                  {isVisible && (
                    <div
                      className={`absolute ${
                        c.top > 55 ? "bottom-full mb-2" : "top-full mt-2"
                      } ${
                        c.alignRight ? "right-0" : "left-0"
                      } w-[170px] lg:w-[210px] xl:w-[230px] bg-white rounded-[10px] lg:rounded-[14px] p-2.5 lg:p-3 shadow-[0_12px_36px_rgba(0,0,0,0.18)] border border-[#E2E8F0] z-50 animate-fadeIn pointer-events-auto`}
                    >
                      {/* Arrow */}
                      <div
                        className={`absolute ${
                          c.top > 55
                            ? "-bottom-1.5 border-r border-b"
                            : "-top-1.5 border-l border-t"
                        } ${
                          c.alignRight ? "right-6" : "left-6"
                        } w-3 h-3 lg:w-3.5 lg:h-3.5 bg-white rotate-45 border-[#E2E8F0]`}
                      />
                      {/* Condition photo */}
                      <div className="relative w-full h-[65px] lg:h-[80px] xl:h-[95px] rounded-[6px] lg:rounded-[8px] overflow-hidden bg-slate-100">
                        <Image
                          src={c.image}
                          alt={c.label}
                          fill
                          unoptimized
                          className="object-cover"
                          sizes="230px"
                        />
                      </div>
                      {/* Description */}
                      <p className="text-[#5F6B6F] text-[10.5px] lg:text-[12px] font-medium leading-[15px] lg:leading-[17px] font-sans mt-2 text-left">
                        {c.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: image + badge pills grid */}
        <div className="md:hidden flex flex-col items-center gap-8">
          <div className="relative w-full max-w-sm aspect-[952/493] overflow-hidden">
            <Image
              src="/home/qualifying-conditions.png"
              alt="Qualifying conditions for ESA"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 384px"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {conditions.map((c) => {
              const isVisible = hoveredCondition === c.label;
              return (
                <div key={c.label} className="relative">
                  <button
                    onClick={() => setHoveredCondition(isVisible ? null : c.label)}
                    className="flex items-center gap-3 bg-white rounded-[10px] pl-2 pr-4 h-12 shadow-[0_10px_25px_-10px_rgba(46,90,102,0.35)] w-fit text-[15px] font-semibold whitespace-nowrap"
                  >
                    <span className="w-[32px] h-[32px] rounded-full bg-[#E8EEF0] flex items-center justify-center shrink-0">
                      <Image
                        src={c.icon}
                        alt=""
                        width={18}
                        height={18}
                        unoptimized
                        className="object-contain"
                        style={{ width: "auto", height: "auto" }}
                      />
                    </span>
                    <span
                      className="bg-clip-text text-transparent"
                      style={{ backgroundImage: TEAL_GRADIENT }}
                    >
                      {c.label}
                    </span>
                  </button>

                  {isVisible && (
                    <>
                      <div
                        className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 animate-fadeIn"
                        onClick={() => setHoveredCondition(null)}
                      />
                      <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 bg-white rounded-[16px] px-3.5 pt-2.5 pb-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.2)] border border-slate-100 z-50 w-full max-w-[260px] mx-auto animate-fadeIn">
                        <div className="flex justify-end mb-1.5">
                          <button
                            type="button"
                            onClick={() => setHoveredCondition(null)}
                            aria-label="Close"
                            className="p-1 -mr-1 text-[#5F6B6F] hover:text-slate-900 transition-colors cursor-pointer"
                          >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M12.5 1.5L1.5 12.5M1.5 1.5L12.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        </div>
                        <div className="relative w-full h-[115px] rounded-[12px] overflow-hidden mb-3">
                          <Image src={c.image} alt={c.label} fill unoptimized className="object-cover" />
                        </div>
                        <p className="text-[#5F6B6F] text-[13px] leading-[19px] font-sans font-medium text-left">
                          {c.description}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
