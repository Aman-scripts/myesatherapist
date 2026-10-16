"use client";

import React, { useState } from "react";
import Image from "next/image";

// Figma: var(--color-gradient)
const TEAL_GRADIENT = "var(--color-gradient)";

type Condition = {
  label: string;
  icon: string;
  image: string;
  /** percentage position within the Figma content frame (1278x418, node 1000011770) */
  left: number;
  top: number;
  alignRight?: boolean;
  description: string;
};

const conditions: Condition[] = [
  {
    label: "Agoraphobia",
    icon: "/home/qualifying-conditions-agroraphobia.svg",
    image: "/qualifyingConditions_image/agoraphobea.webp",
    left: 56.81,
    top: -0.24,
    description:
      "Staying home can feel safer than facing certain environments. An ESA may provide companionship and emotional reassurance during challenging periods.",
  },
  {
    label: "Anxiety Disorders",
    icon: "/home/qualifying-conditions-anxiety-disorder.svg",
    image: "/qualifyingConditions_image/Anxiety Disorders.webp",
    left: 29.42,
    top: 4.55,
    description:
      "When persistent worry becomes difficult to manage, an ESA may provide companionship and a comforting presence throughout everyday routines.",
  },
  {
    label: "Panic Disorders",
    icon: "/home/qualifying-conditions-panic-disorder.svg",
    image: "/qualifyingConditions_image/panic disoder.webp",
    left: 5.48,
    top: 15.31,
    description:
      "During episodes of intense fear, an ESA can offer a calming presence and emotional reassurance when distress becomes overwhelming.",
  },
  {
    label: "OCD",
    icon: "/home/qualifying-conditions-ocd.svg",
    image: "/qualifyingConditions_image/ocd.webp",
    left: 80.91,
    top: 15.31,
    alignRight: true,
    description:
      "Living with intrusive thoughts or compulsive behaviors can feel exhausting. An ESA can provide steady companionship through difficult moments.",
  },
  {
    label: "Bipolar Disorders",
    icon: "/home/qualifying-conditions-bipoler-disorder.svg",
    image: "/qualifyingConditions_image/biloper disoder.webp",
    left: 28.01,
    top: 29.67,
    description:
      "Consistent companionship from an ESA may offer emotional comfort and a reassuring presence during challenging changes in mood.",
  },
  {
    label: "PTSD",
    icon: "/home/qualifying-conditions-ptsd.svg",
    image: "/qualifyingConditions_image/ptsd.webp",
    left: 67.53,
    top: 29.67,
    description:
      "For someone coping with trauma-related distress, an ESA can offer comfort, companionship, and a familiar source of emotional reassurance.",
  },
  {
    label: "Social Anxiety",
    icon: "/home/qualifying-conditions-social-anxiety.svg",
    image: "/qualifyingConditions_image/socail Anxiety .webp",
    left: 1.80,
    top: 39.47,
    description:
      "Having an ESA nearby may provide a sense of comfort and support when social situations feel particularly stressful or overwhelming.",
  },
  {
    label: "ADHD",
    icon: "/home/qualifying-conditions-adhd.svg",
    image: "/qualifyingConditions_image/adhd.webp",
    left: 86.15,
    top: 39.47,
    alignRight: true,
    description:
      "Beyond companionship, an ESA can provide emotional comfort during periods of frustration, overwhelm, or difficulty managing everyday challenges.",
  },
  {
    label: "Mood Disorders",
    icon: "/home/qualifying-conditions-mood-disorder.svg",
    image: "/qualifyingConditions_image/mood disoder.webp",
    left: 5.09,
    top: 60.29,
    description:
      "An ESA can become a comforting part of daily life, offering companionship during periods of emotional changes or low mood.",
  },
  {
    label: "Other Mental Health Conditions",
    icon: "/home/qualifying-conditions-other-ada.svg",
    image: "/qualifyingConditions_image/Other ADA Conditions.webp",
    left: 76.21,
    top: 60.29,
    alignRight: true,
    description:
      "Other mental health conditions may involve emotional support needs that a licensed professional can evaluate when considering an ESA.",
  },
  {
    label: "Depression",
    icon: "/home/qualifying-conditions-depression.svg",
    image: "/qualifyingConditions_image/Depression.webp",
    left: 0.00,
    top: 84.93,
    description:
      "Feelings of loneliness can become especially difficult during depression. An ESA may provide companionship and a comforting presence at home.",
  },
  {
    label: "Schizophrenia",
    icon: "/home/qualifying-conditions-schizpphrenia.svg",
    image: "/qualifyingConditions_image/Schizpphrenia.webp",
    left: 82.24,
    top: 84.93,
    alignRight: true,
    description:
      "For individuals managing schizophrenia, an ESA may offer familiar companionship and emotional comfort as they navigate everyday experiences.",
  },
];

interface QualifyingConditionsProps {
  className?: string;
  id?: string;
  title?: string;
  description?: string;
}

export function QualifyingConditions({
  className = "",
  id = "qualifying-conditions",
  title = "Conditions That May Be Considered During an ESA Evaluation",
  description = "A licensed mental health professional will assess whether an emotional support animal may be appropriate based on your individual needs. These are some mental health conditions that may support the need for an ESA.",
}: QualifyingConditionsProps = {}) {
  const [hoveredCondition, setHoveredCondition] = useState<string | null>(null);

  return (
    <section id={id} className={`pt-12 sm:pt-16 xl:pt-20 pb-14 sm:pb-16 md:pb-0 color-background overflow-visible ${className}`}>
      <div className="max-w-[1278px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 xl:mb-14 space-y-2.5 max-w-[709px] mx-auto">
          <h2 className="heading-h2 capitalize">
            {title}
          </h2>
          <p className="body-large">
            {description}
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
                quality={90}
                src="/home/qualifying-conditions.webp"
                alt="Woman and dog on sofa qualifying for ESA"
                fill
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
                    className="flex items-center gap-1.5 md:gap-1.5 lg:gap-2 xl:gap-3 bg-white rounded-[6px] md:rounded-[6px] lg:rounded-[8px] xl:rounded-[10px] pl-1 md:pl-1 lg:pl-1.5 xl:pl-2 pr-2.5 md:pr-2.5 lg:pr-3.5 xl:pr-4 h-[28px] md:h-[28px] lg:h-[36px] xl:h-12 shadow-[0_4px_12px_-6px_rgba(46,90,102,0.35)] lg:shadow-[0_6px_18px_-8px_rgba(46,90,102,0.35)] xl:shadow-[0_10px_25px_-10px_rgba(46,90,102,0.35)] w-fit whitespace-nowrap transition-all duration-200 cursor-pointer hover:scale-[1.02]"
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
                      className="body-large bg-clip-text text-transparent"
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

                      {/* Condition Photo */}
                      <div className="relative w-full h-[65px] lg:h-[80px] xl:h-[95px] rounded-[6px] lg:rounded-[8px] overflow-hidden bg-slate-100">
                        <Image
                          quality={90}
                          src={c.image}
                          alt={c.label}
                          fill
                          className="object-cover"
                          sizes="230px"
                        />
                      </div>

                      {/* Description */}
                      <p className="body-small mt-2 text-left">
                        {c.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {/* The photo extends past the badge box; this spacer makes the section end at the photo edge (no gap) */}
          <div aria-hidden className="pointer-events-none" style={{ paddingTop: "8.44%" }} />
        </div>

        {/* Mobile: stacked photo + wrapping badge grid */}
        <div className="md:hidden flex flex-col items-center gap-8">
          <div className="relative w-full max-w-sm aspect-[952/493] overflow-hidden">
            <Image
            quality={90}
              src="/home/qualifying-conditions.webp"
              alt="Woman and dog on sofa qualifying for ESA"
              fill
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
                    className="flex items-center gap-3 bg-white rounded-[10px] pl-2 pr-4 h-12 shadow-[0_10px_25px_-10px_rgba(46,90,102,0.35)] w-fit whitespace-nowrap cursor-pointer"
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
                      className="body-large bg-clip-text text-transparent"
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
                            className="p-1 -mr-1 text-body-text hover:text-slate-900 transition-colors cursor-pointer"
                          >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.5 1.5L1.5 12.5M1.5 1.5L12.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        </div>

                        {/* Image */}
                        <div className="relative w-full h-[115px] rounded-[12px] overflow-hidden mb-3">
                          <Image
            quality={90}
                            src={c.image}
                            alt={c.label}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Description text matching mockup */}
                        <p className="body-small text-left">
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
