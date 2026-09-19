import React from "react";

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

        {/* Bento grid */}
        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Tile: DIY heading */}
          <div className="col-span-full justify-self-center rounded-full bg-[#E8B92C] px-7 py-3.5 shadow-xs">
            <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white">
              Tips for DIY Training
            </h3>
          </div>

          {/* Tiles: individual tips */}
          {[
            "Keep sessions short (5 to 10 minutes) so neither of you gets frustrated or overwhelmed.",
            "Use positive reinforcement (treats, praise, play) rather than harsh correction or punishment.",
            "Stay completely consistent with voice cues, hand signals, and household boundaries.",
            "Practice in quiet, low-distraction spaces before gradually moving to busier environments.",
          ].map((tip, idx) => (
            <div
              key={idx}
              className="rounded-[22px] bg-white border border-[#2E5A66]/10 p-6 sm:p-7 shadow-xs flex flex-col gap-4"
            >
              <span className="size-9 rounded-full bg-[#E8B92C]/20 text-[#1E3E47] flex items-center justify-center font-bold text-sm">
                ✓
              </span>
              <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-[#5F6B6F]">
                {tip}
              </p>
            </div>
          ))}

          {/* Tile: professional help */}
          <div className="col-span-full rounded-[22px] bg-[#2E5A66] p-6 sm:p-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-10 shadow-xs">
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white lg:max-w-[34%] shrink-0">
              When to hire a professional
            </h3>
            <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-white/90">
              If your animal shows anxiety or aggression, or progress has stalled. Costs vary by location and format (group classes vs. private sessions), so it&apos;s worth comparing a few local options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
