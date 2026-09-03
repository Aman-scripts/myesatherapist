"use client";

import React, { useState } from "react";
import Image from "next/image";

// Figma: linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)
const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

type Condition = {
  label: string;
  icon: string;
  /** percentage position within the Figma content frame (1278x418, node 1000011770) */
  left: number;
  top: number;
  alignRight?: boolean;
  description: string;
};

const conditions: Condition[] = [
  {
    label: "Agroraphobia",
    icon: "/home/qualifying-conditions-agroraphobia.svg",
    left: 56.81,
    top: -0.24,
    description:
      "Serving as a confident, trusted companion that eases anxiety when leaving home or entering public spaces.",
  },
  {
    label: "Anxiety Disorders",
    icon: "/home/qualifying-conditions-anxiety-disorder.svg",
    left: 29.42,
    top: 4.55,
    description:
      "ESAs help lower elevated stress levels and provide grounding sensory stimulation during periods of intense anxiety.",
  },
  {
    label: "Panic Disorders",
    icon: "/home/qualifying-conditions-panic-disorder.svg",
    left: 5.48,
    top: 15.31,
    description:
      "Emotional support animals may provide comfort and a calming presence during episodes of intense anxiety or panic.",
  },
  {
    label: "OCD",
    icon: "/home/qualifying-conditions-ocd.svg",
    left: 80.91,
    top: 15.31,
    alignRight: true,
    description:
      "Offering comforting distraction and reassuring sensory presence during compulsive distress cycles.",
  },
  {
    label: "Bipolar Disorders",
    icon: "/home/qualifying-conditions-bipoler-disorder.svg",
    left: 28.01,
    top: 29.67,
    description:
      "Providing consistent daily routine, emotional grounding, and a soothing presence across mood transitions.",
  },
  {
    label: "PTSD",
    icon: "/home/qualifying-conditions-ptsd.svg",
    left: 67.53,
    top: 29.67,
    description:
      "Emotional support animals offer deep grounding touch and security to help manage sudden trauma triggers and hyperarousal.",
  },
  {
    label: "Social Anxiety",
    icon: "/home/qualifying-conditions-social-anxiety.svg",
    left: 1.80,
    top: 39.47,
    description:
      "An ESA can help reduce social stress, offering non-judgmental companionship that eases discomfort in public or social situations.",
  },
  {
    label: "ADHD",
    icon: "/home/qualifying-conditions-adhd.svg",
    left: 86.15,
    top: 39.47,
    alignRight: true,
    description:
      "Helping establish grounding focus, soothing hyperactivity, and promoting emotional balance throughout the day.",
  },
  {
    label: "Mood Disorders",
    icon: "/home/qualifying-conditions-mood-disorder.svg",
    left: 5.09,
    top: 60.29,
    description:
      "Companion animals help stabilize mood swings and provide unconditional emotional support during challenging episodes.",
  },
  {
    label: "Other ADA Conditions",
    icon: "/home/qualifying-conditions-other-ada.svg",
    left: 76.21,
    top: 60.29,
    alignRight: true,
    description:
      "Providing clinically recognized emotional support and functional comfort tailored to individual mental health needs.",
  },
  {
    label: "Depression",
    icon: "/home/qualifying-conditions-depression.svg",
    left: 0.00,
    top: 84.93,
    description:
      "Having an ESA encourages daily routine, physical activity, and provides vital companionship that counteracts feelings of isolation and despair.",
  },
  {
    label: "Schizpphrenia",
    icon: "/home/qualifying-conditions-schizpphrenia.svg",
    left: 82.24,
    top: 84.93,
    alignRight: true,
    description:
      "Providing stable reality-anchoring companionship and reducing stress-induced emotional distress.",
  },
];

export function QualifyingConditions() {
  const [hoveredCondition, setHoveredCondition] = useState<string | null>(null);

  return (
    <section className="py-14 sm:py-16 lg:py-20 pb-28 sm:pb-32 lg:pb-36 bg-[#FAF7F2] overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14 space-y-3 max-w-[709px] mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#2E5A66] leading-tight tracking-[-0.006em]">
            Common Qualifying Conditions
          </h2>
          <p className="text-[#5F6B6F] text-base sm:text-lg font-semibold leading-relaxed">
            A licensed mental health professional will determine eligibility during your consultancy. These are some common conditions that may qualify under ADA.
          </p>
        </div>

        {/* Desktop / tablet: dog photo with hover-enabled floating badges */}
        <div className="hidden md:block relative mx-auto" style={{ maxWidth: 1278 }}>
          <div className="relative w-full" style={{ aspectRatio: "1278 / 418" }}>
            {/* Photo: frf 1 from Figma */}
            <div
              className="absolute overflow-hidden pointer-events-none"
              style={{ left: "11.50%", top: "7.89%", width: "74.49%", aspectRatio: "952 / 493" }}
            >
              <Image
                src="/home/qualifying-conditions.png"
                alt="Woman and dog on sofa qualifying for ESA"
                fill
                priority
                className="object-contain"
                sizes="(min-width: 1024px) 952px, 75vw"
              />
            </div>

            {/* Interactive Floating Condition Badges with Hover Trigger */}
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

                  {/* Popover Card (Shown on Hover/Active) */}
                  {isVisible && (
                    <div
                      className={`absolute ${
                        c.top > 55 ? "bottom-full mb-2" : "top-full mt-2"
                      } ${
                        c.alignRight ? "right-0" : "left-0"
                      } w-[170px] lg:w-[210px] xl:w-[230px] bg-white rounded-[10px] lg:rounded-[14px] p-2.5 lg:p-3 shadow-[0_12px_36px_rgba(0,0,0,0.18)] border border-[#E2E8F0] z-50 animate-fadeIn pointer-events-auto`}
                    >
                      {/* Arrow Pointer */}
                      <div
                        className={`absolute ${
                          c.top > 55
                            ? "-bottom-1.5 border-r border-b"
                            : "-top-1.5 border-l border-t"
                        } ${
                          c.alignRight ? "right-6" : "left-6"
                        } w-3 h-3 lg:w-3.5 lg:h-3.5 bg-white rotate-45 border-[#E2E8F0]`}
                      />

                      {/* Puppy Photo */}
                      <div className="relative w-full h-[65px] lg:h-[80px] xl:h-[95px] rounded-[6px] lg:rounded-[8px] overflow-hidden bg-slate-100">
                        <Image
                          src="/home/qualifying-condtions-tag.png"
                          alt="Puppy resting"
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

        {/* Mobile: stacked photo + wrapping badge grid */}
        <div className="md:hidden flex flex-col items-center gap-8">
          <div className="relative w-full max-w-sm aspect-[952/493] overflow-hidden">
            <Image
              src="/home/qualifying-conditions.png"
              alt="Woman and dog on sofa qualifying for ESA"
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

                  {/* Mobile Modal/Popover */}
                  {isVisible && (
                    <>
                      {/* Backdrop overlay */}
                      <div
                        className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 animate-fadeIn"
                        onClick={() => setHoveredCondition(null)}
                      />
                      <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 bg-white rounded-[16px] px-3.5 pt-2.5 pb-3.5 sm:px-4 sm:pt-3 sm:pb-4 shadow-[0_12px_40px_rgba(0,0,0,0.2)] border border-slate-100 z-50 w-full max-w-[260px] mx-auto animate-fadeIn">
                        {/* Top Close Row (Zero Collision) */}
                        <div className="flex justify-end mb-1.5">
                          <button
                            type="button"
                            onClick={() => setHoveredCondition(null)}
                            aria-label="Close"
                            className="p-1 -mr-1 text-[#5F6B6F] hover:text-slate-900 transition-colors cursor-pointer"
                          >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.5 1.5L1.5 12.5M1.5 1.5L12.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        </div>

                        {/* Image */}
                        <div className="relative w-full h-[115px] rounded-[12px] overflow-hidden mb-3">
                          <Image
                            src="/home/qualifying-condtions-tag.png"
                            alt="Puppy resting"
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>

                        {/* Description text matching mockup */}
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
