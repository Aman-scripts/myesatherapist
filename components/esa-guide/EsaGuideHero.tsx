import React from "react";

export function EsaGuideHero() {
  return (
    <section className="w-full bg-[#FAF7F2]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16 md:grid-cols-12 md:items-center">
        {/* Left Column: Heading & Introduction */}
        <div className="md:col-span-7">
          <h1 className="max-w-[18ch] text-balance font-heading font-bold text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] tracking-tight leading-[1.15] text-[#2E5A66]">
            Emotional Support Animal Resource Center
          </h1>

          <p className="mt-5 max-w-[56ch] font-sans text-base sm:text-[17px] lg:text-[18px] leading-[26px] sm:leading-[28px] lg:leading-[30px] font-medium text-[#5F6B6F]">
            Understanding emotional support animals can feel overwhelming, especially with changing housing guidelines, online information, and common misconceptions surrounding ESA documentation.
          </p>
        </div>

        {/* Right Column: Educational Focus Card */}
        <div className="rounded-[24px] bg-[#2E5A66] p-6 sm:p-8 text-white md:col-span-5 shadow-md">
          <p className="font-heading font-bold text-2xl leading-snug text-white">
            Explore ESA educational resources
          </p>
          <p className="mt-2.5 font-sans text-sm sm:text-base leading-relaxed text-white/85">
            Find clear information about how emotional support animals differ from pets, how evaluations work, and the role licensed professionals play.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-sans">
            <span className="rounded-full bg-white/15 px-3.5 py-1 text-white font-semibold">
              ESA basics
            </span>
            <span className="rounded-full bg-white/15 px-3.5 py-1 text-white font-semibold">
              Mental wellness
            </span>
            <span className="rounded-full bg-[#E8B92C] px-3.5 py-1 font-bold text-[#1E3E47]">
              ESA responsibilities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
