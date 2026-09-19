import React from "react";
import { Check } from "lucide-react";

export function EsaTrainingDiySection() {
  return (
    <section className="w-full bg-[#FAF7F2] py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block rounded-full bg-[#2E5A66]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2E5A66] mb-3">
            Your Options
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[38px] leading-tight text-[#2E5A66]">
            Can You Train Your ESA Yourself?
          </h2>
          <p className="mt-3 font-sans text-base sm:text-lg text-[#5F6B6F]">
            Yes. Many owners successfully train their emotional support animals themselves.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Card 1: DIY Training */}
          <div className="overflow-hidden rounded-[20px] bg-white border border-[#2E5A66]/10 shadow-xs flex flex-col">
            <div className="bg-[#E8B92C] px-6 py-4.5 font-heading font-extrabold text-lg sm:text-xl text-[#1E3E47]">
              Tips for DIY Training
            </div>
            <div className="p-6 sm:p-7 flex-1">
              <ul className="space-y-4">
                {[
                  "Keep sessions short (5 to 10 minutes) so neither of you gets frustrated or overwhelmed.",
                  "Use positive reinforcement (treats, praise, play) rather than harsh correction or punishment.",
                  "Stay completely consistent with voice cues, hand signals, and household boundaries.",
                  "Practice in quiet, low-distraction spaces before gradually moving to busier environments.",
                ].map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-[15px] leading-relaxed text-[#5F6B6F]">
                    <span className="size-5 rounded-full bg-[#E8B92C]/20 text-[#1E3E47] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: Professional Training */}
          <div className="overflow-hidden rounded-[20px] bg-white border border-[#2E5A66]/10 shadow-xs flex flex-col">
            <div className="bg-[#2E5A66] px-6 py-4.5 font-heading font-extrabold text-lg sm:text-xl text-white">
              When to hire a professional
            </div>
            <div className="p-6 sm:p-7 flex-1 font-sans text-sm sm:text-[15px] leading-relaxed text-[#5F6B6F]">
              <p>
                If your animal shows anxiety or aggression, or progress has stalled. Costs vary by location and format (group classes vs. private sessions), so it&apos;s worth comparing a few local options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
