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
    label: "Anxiety Disorders",
    icon: "/qualifying-conditions-anxiety-disorder.svg",
    left: 29.42,
    top: 4.55,
    description:
      "ESAs help lower elevated stress levels and provide grounding sensory stimulation during periods of intense anxiety.",
  },
  {
    label: "Bipolar Disorders",
    icon: "/qualifying-conditions-bipoler-disorder.svg",
    left: 57.04,
    top: 8.85,
    description:
      "Providing consistent daily routine, emotional grounding, and a soothing presence across mood transitions.",
  },
  {
    label: "OCD",
    icon: "/qualifying-conditions-ocd.svg",
    left: 80.9,
    top: 15.31,
    alignRight: true,
    description:
      "Offering comforting distraction and reassuring sensory presence during compulsive distress cycles.",
  },
  {
    label: "Panic Disorders",
    icon: "/qualifying-conditions-panic-disorder.svg",
    left: 5.48,
    top: 15.31,
    description:
      "Emotional support animals may provide comfort and a calming presence during episodes of intense anxiety or panic.",
  },
  {
    label: "PTSD",
    icon: "/qualifying-conditions-ptsd.svg",
    left: 24.26,
    top: 32.78,
    description:
      "Emotional support animals offer deep grounding touch and security to help manage sudden trauma triggers and hyperarousal.",
  },
  {
    label: "Agoraphobia",
    icon: "/qualifying-conditions-agroraphobia.svg",
    left: 63.07,
    top: 32.78,
    description:
      "Serving as a confident, trusted companion that eases anxiety when leaving home or entering public spaces.",
  },
  {
    label: "Social Anxiety",
    icon: "/qualifying-conditions-social-anxiety.svg",
    left: 1.8,
    top: 39.47,
    description:
      "An ESA can help reduce social stress, offering non-judgmental companionship that eases discomfort in public or social situations.",
  },
  {
    label: "ADHD",
    icon: "/qualifying-conditions-adhd.svg",
    left: 86.15,
    top: 39.47,
    alignRight: true,
    description:
      "Helping establish grounding focus, soothing hyperactivity, and promoting emotional balance throughout the day.",
  },
  {
    label: "Mood Disorders",
    icon: "/qualifying-conditions-mood-disorder.svg",
    left: 5.09,
    top: 60.29,
    description:
      "Companion animals help stabilize mood swings and provide unconditional emotional support during challenging episodes.",
  },
  {
    label: "Other ADA Conditions",
    icon: "/qualifying-conditions-other-ada.svg",
    left: 76.21,
    top: 60.29,
    alignRight: true,
    description:
      "Providing clinically recognized emotional support and functional comfort tailored to individual mental health needs.",
  },
  {
    label: "Depression",
    icon: "/qualifying-conditions-depression.svg",
    left: 1.57,
    top: 84.93,
    description:
      "Having an ESA encourages daily routine, physical activity, and provides vital companionship that counteracts feelings of isolation and despair.",
  },
  {
    label: "Schizophrenia",
    icon: "/qualifying-conditions-schizpphrenia.svg",
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
    <section className="py-14 sm:py-16 lg:py-20 pb-24 sm:pb-28 lg:pb-32 bg-[#EEEBE0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14 space-y-3 max-w-[709px] mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-primary leading-tight tracking-[-0.006em]">
            Common Qualifying Conditions
          </h2>
          <p className="text-[#5F6B6F] text-base sm:text-lg font-semibold leading-relaxed">
            A licensed mental health professional will determine eligibility during your consultancy. These are some common conditions that may qualify under ADA.
          </p>
        </div>

        {/* Desktop / tablet: dog photo with hover-enabled floating badges */}
        <div className="hidden md:block relative mx-auto" style={{ maxWidth: 1278 }}>
          <div className="relative w-full" style={{ aspectRatio: "1278 / 418" }}>
            {/* Photo — Figma: left 19.56%, top 14.11%, width 60.88% of the stage, own 778/491 aspect */}
            <div
              className="absolute overflow-hidden pointer-events-none"
              style={{ left: "19.56%", top: "14.11%", width: "60.88%", aspectRatio: "778 / 491" }}
            >
              <Image
                src="/qualifying-conditions-section.png"
                alt="Dog qualifying as an emotional support animal"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 778px, 61vw"
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
                    className="flex items-center gap-3 bg-white rounded-[10px] pl-2 pr-4 h-12 shadow-[0_10px_25px_-10px_rgba(46,90,102,0.35)] w-fit text-[16px] font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer hover:scale-[1.02]"
                  >
                    <span className="w-[35px] h-[35px] rounded-full bg-[#E8EEF0] flex items-center justify-center shrink-0">
                      <Image
                        src={c.icon}
                        alt=""
                        width={20}
                        height={20}
                        unoptimized
                        className="object-contain"
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
                      className={`absolute top-full mt-3 ${
                        c.alignRight ? "right-0" : "left-0"
                      } w-[240px] bg-white rounded-[16px] p-3.5 shadow-[0_12px_36px_rgba(0,0,0,0.18)] border border-[#E2E8F0] z-50 animate-fadeIn pointer-events-auto`}
                    >
                      {/* Top Arrow Pointer */}
                      <div
                        className={`absolute -top-2 ${
                          c.alignRight ? "right-8" : "left-8"
                        } w-4 h-4 bg-white rotate-45 border-l border-t border-[#E2E8F0]`}
                      />

                      {/* Puppy Photo */}
                      <div className="relative w-full h-[105px] rounded-[10px] overflow-hidden bg-slate-100">
                        <Image
                          src="/qualifying-condtions-tag.png"
                          alt="Puppy resting"
                          fill
                          unoptimized
                          className="object-cover"
                          sizes="240px"
                        />
                      </div>

                      {/* Description */}
                      <p className="text-[#5F6B6F] text-[13px] font-medium leading-[20px] font-sans mt-2.5 text-left">
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
          <div className="relative w-full max-w-xs aspect-[778/491] overflow-hidden">
            <Image
              src="/qualifying-conditions-section.png"
              alt="Dog qualifying as an emotional support animal"
              fill
              className="object-cover"
              sizes="320px"
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
                    <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 bg-white rounded-[20px] p-5 shadow-2xl border border-slate-200 z-50 max-w-xs mx-auto animate-fadeIn">
                      <div className="relative w-full h-[140px] rounded-[12px] overflow-hidden mb-3">
                        <Image
                          src="/qualifying-condtions-tag.png"
                          alt="Puppy resting"
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-heading font-bold text-[#2E5A66] text-lg mb-1">
                        {c.label}
                      </h4>
                      <p className="text-[#5F6B6F] text-sm leading-relaxed font-sans mb-4">
                        {c.description}
                      </p>
                      <button
                        onClick={() => setHoveredCondition(null)}
                        className="w-full py-2 bg-[#2E5A66] text-white rounded-full text-sm font-bold"
                      >
                        Close
                      </button>
                    </div>
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
