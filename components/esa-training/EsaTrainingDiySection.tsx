import React from "react";
import Image from "next/image";

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
            Yes. Many owners do it themselves.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Card 1: DIY Training */}
          <div className="overflow-hidden rounded-[20px] bg-white border border-[#EAE5DC] shadow-[0_4px_25px_rgba(46,90,102,0.08)] flex flex-col">
            {/* Image */}
            <div className="relative h-[200px] w-full shrink-0">
              <Image
                src="/esa-training/esa-training-bond.webp"
                alt="Owner doing DIY training with their emotional support animal"
                fill
                className="object-cover"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </div>
            {/* Content */}
            <div className="p-6 sm:p-7 flex flex-col flex-1">
              <h3 className="font-heading font-bold text-xl sm:text-[22px] text-[#1E3E47] mb-4">
                Tips for DIY training
              </h3>
              <ul className="space-y-3 flex-1">
                {[
                  "Keep sessions short, five to ten minutes, so neither of you gets frustrated",
                  "Use positive reinforcement (treats, praise, play), not punishment",
                  "Stay consistent with commands and cues",
                  "Practice in low-distraction spaces before moving to busier ones",
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2.5 font-sans text-sm sm:text-[15px] leading-relaxed text-[#5F6B6F]">
                    <span className="mt-1.5 shrink-0 size-1.5 rounded-full bg-[#E8B92C]" />
                    {tip}
                  </li>
                ))}
              </ul>

            </div>
          </div>

          {/* Card 2: Professional Training */}
          <div className="overflow-hidden rounded-[20px] bg-white border border-[#EAE5DC] shadow-[0_4px_25px_rgba(46,90,102,0.08)] flex flex-col">
            {/* Image */}
            <div className="relative h-[200px] w-full shrink-0">
              <Image
                src="/esa-training/esa-training-hero.webp"
                alt="Professional trainer working with an emotional support animal"
                fill
                className="object-cover"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </div>
            {/* Content */}
            <div className="p-6 sm:p-7 flex flex-col flex-1">
              <h3 className="font-heading font-bold text-xl sm:text-[22px] text-[#1E3E47] mb-4">
                When to hire a professional
              </h3>
              <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-[#5F6B6F] flex-1">
                If your animal shows anxiety or aggression, or progress has stalled. Costs vary by location and format (group classes vs. private sessions), so it&apos;s worth comparing a few local options.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
