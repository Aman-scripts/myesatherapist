import React from "react";
import { HeartPulse, Sun, Shield } from "lucide-react";

const CONDITIONS = [
  {
    condition: "Anxiety & Panic Attacks",
    icon: HeartPulse,
    desc: "Teaching your animal to settle calmly beside you or lie across your lap (deep pressure touch), which can help regulate breathing, lower pulse, and ground you during overwhelming episodes.",
  },
  {
    condition: "Depression",
    icon: Sun,
    desc: "Building a dependable morning and evening care routine around feeding, outdoor walks, and grooming, giving purposeful structure to days that might otherwise feel shapeless.",
  },
  {
    condition: "PTSD & Trauma",
    icon: Shield,
    desc: "Establishing a predictable, stress-free home setting where your animal's relaxed, attentive presence serves as an immediate environmental safety cue and grounding anchor.",
  },
];

export function EsaTrainingConditionsSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block rounded-full bg-[#2E5A66]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2E5A66] mb-3">
            Condition-Specific Support
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[38px] leading-tight text-[#2E5A66]">
            ESA Training for Specific Mental Health Conditions
          </h2>
        </div>

        {/* 3 Condition Cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          {CONDITIONS.map(({ condition, icon: Icon, desc }) => (
            <div
              key={condition}
              className="flex flex-col justify-between rounded-[20px] bg-[#FAF7F2] border border-[#2E5A66]/10 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="size-12 rounded-2xl bg-white text-[#2E5A66] border border-[#2E5A66]/12 flex items-center justify-center mb-5 shadow-2xs">
                  <Icon className="size-6 text-[#2E5A66]" />
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-[#2E5A66] mb-3">
                  {condition}
                </h3>
                <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-[#5F6B6F]">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-sans text-sm sm:text-base leading-relaxed text-[#5F6B6F] max-w-2xl mx-auto">
          This isn't task-specific service dog training. It's shaping everyday companion habits and gentle routines around the natural therapeutic support your animal already provides.
        </p>
      </div>
    </section>
  );
}
