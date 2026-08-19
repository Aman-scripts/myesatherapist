"use client";

import React from "react";
import Image from "next/image";
import {
  Brain,
  HeartPulse,
  Activity,
  Home,
  Users,
  FileCheck2,
  Waves,
  Zap,
  Gauge,
  Puzzle,
  CloudRain,
  RotateCcw,
  type LucideIcon,
} from "lucide-react";

// Figma: linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)
const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

type Condition = {
  label: string;
  Icon: LucideIcon;
  /** percentage position within the Figma content frame (1278x418, node 1000011770) */
  left: number;
  top: number;
};

const conditions: Condition[] = [
  { label: "Anxiety Disorders", Icon: Waves, left: 29.42, top: 4.55 },
  { label: "Bipolar Disorders", Icon: Activity, left: 57.04, top: 8.85 },
  { label: "OCD", Icon: RotateCcw, left: 80.9, top: 15.31 },
  { label: "Panic Disorders", Icon: HeartPulse, left: 5.48, top: 15.31 },
  { label: "PTSD", Icon: Brain, left: 24.26, top: 32.78 },
  { label: "Agoraphobia", Icon: Home, left: 63.07, top: 32.78 },
  { label: "Social Anxiety", Icon: Users, left: 1.8, top: 39.47 },
  { label: "ADHD", Icon: Zap, left: 86.15, top: 39.47 },
  { label: "Mood Disorders", Icon: Gauge, left: 5.09, top: 60.29 },
  { label: "Other ADA Conditions", Icon: FileCheck2, left: 76.21, top: 60.29 },
  { label: "Depression", Icon: CloudRain, left: 1.57, top: 84.93 },
  { label: "Schizophrenia", Icon: Puzzle, left: 82.24, top: 84.93 },
];

function ConditionBadge({ label, Icon }: { label: string; Icon: LucideIcon }) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-[10px] pl-2 pr-4 h-12 shadow-[0_10px_25px_-10px_rgba(46,90,102,0.35)] w-fit text-[16px] font-semibold whitespace-nowrap">
      <span className="w-[35px] h-[35px] rounded-full bg-[#AEBBBE] flex items-center justify-center shrink-0">
        <Icon className="w-[18px] h-[18px] text-primary" strokeWidth={2} />
      </span>
      <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
        {label}
      </span>
    </div>
  );
}

export function QualifyingConditions() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 pb-24 sm:pb-28 lg:pb-32 bg-[#EEEBE0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14 space-y-3 max-w-[709px] mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-primary leading-tight tracking-[-0.006em]">
            Common Qualifying Questions
          </h2>
          <p className="text-[#5F6B6F] text-base sm:text-lg font-semibold leading-relaxed">
            A licensed mental health professional will determine eligibility during your consultancy. These are some common conditions that may qualify under ADA.
          </p>
        </div>

        {/* Desktop / tablet: dog photo with floating badges positioned to match Figma exactly (content frame 1278x418) */}
        <div className="hidden md:block relative mx-auto" style={{ maxWidth: 1278 }}>
          <div className="relative w-full" style={{ aspectRatio: "1278 / 418" }}>
            {/* Photo — Figma: left 19.56%, top 14.11%, width 60.88% of the stage, own 778/491 aspect */}
            <div
              className="absolute overflow-hidden"
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
            {conditions.map((c) => (
              <div key={c.label} className="absolute" style={{ left: `${c.left}%`, top: `${c.top}%` }}>
                <ConditionBadge label={c.label} Icon={c.Icon} />
              </div>
            ))}
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
            {conditions.map((c) => (
              <ConditionBadge key={c.label} label={c.label} Icon={c.Icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
