import React from "react";

export function EsaTrainingHero() {
  return (
    <section className="w-full bg-[#2E5A66]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16 md:grid-cols-12 md:items-start">
        {/* Left Column: Heading & Description */}
        <div className="md:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white mb-5">
            <span className="size-1.5 rounded-full bg-[#E8B92C]" />
            ESA Training Guide
          </span>
          <h1 className="max-w-[20ch] text-balance font-heading font-bold text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] tracking-tight leading-[1.15] text-white">
            Does Your ESA Actually Need{" "}
            <span className="text-[#E8B92C]">Training?</span>
          </h1>
          <p className="mt-5 max-w-[52ch] font-sans text-base sm:text-[17px] lg:text-[18px] leading-[26px] sm:leading-[28px] lg:leading-[30px] font-medium text-white/90">
            Wondering whether your emotional support animal needs training? Here's the honest, complete answer, including what changed in 2026 and what it means for your housing rights.
          </p>
        </div>

        {/* Right Column: Key Takeaway Card */}
        <aside className="rounded-[20px] bg-white overflow-hidden shadow-lg border border-[#E8B92C]/35 md:col-span-5">
          <div className="bg-[#E8B92C] px-6 py-3 text-[11px] font-extrabold uppercase tracking-[1.4px] text-[#2E5A66]">
            Key Takeaway
          </div>
          <div className="px-6 py-6">
            <h2 className="font-heading font-extrabold text-[22px] leading-[1.25] text-[#2E5A66] mb-2.5">
              No. Training isn't legally required.
            </h2>
            <p className="font-sans text-sm leading-[1.65] text-[#5F6B6F] mb-5">
              The Fair Housing Act has never required ESAs to be trained. But behavior, documentation, and a current letter matter more than ever since HUD's 2026 enforcement shift.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "No pet fees for a legitimate ESA. That hasn't changed.",
                "HUD shifted enforcement on May 22, 2026 toward trained, task-specific animals.",
                "A current letter from a licensed professional still holds legal footing.",
              ].map((item) => (
                <li
                  key={item}
                  className="relative pl-9 font-sans text-sm leading-[1.55] text-[#2E5A66] bg-[#E8B92C]/10 rounded-lg border-l-[3px] border-[#E8B92C] py-2.5 pr-3"
                >
                  <span className="absolute left-3 top-[10px] font-extrabold text-[#E8B92C] text-[13px]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
