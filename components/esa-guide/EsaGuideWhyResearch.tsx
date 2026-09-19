import React from "react";
import Image from "next/image";

export function EsaGuideWhyResearch() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:grid-cols-2 lg:items-center">
        {/* Left: Text copy */}
        <div>
          <span className="text-xs sm:text-sm font-sans font-bold uppercase tracking-wider text-[#2E5A66]">
            Why people research ESAs
          </span>
          <h2 className="mt-3 text-balance font-heading font-bold text-2xl sm:text-3xl lg:text-[38px] leading-tight text-[#2E5A66]">
            Why People Research Emotional Support Animals?
          </h2>
          <p className="mt-5 font-sans text-base sm:text-lg leading-relaxed text-[#5F6B6F]">
            People explore emotional support animal resources for many different reasons. Some individuals are seeking information about housing accommodations, while others are interested in learning how emotional companionship may support emotional well-being.
          </p>
          <p className="mt-4 font-sans text-base sm:text-lg leading-relaxed text-[#5F6B6F]">
            Educational ESA content can help people make informed decisions while encouraging responsible ownership and professional guidance.
          </p>
        </div>

        {/* Right: Companion Image */}
        <div className="overflow-hidden rounded-[20px] shadow-sm bg-[#FAF7F2]">
          <Image
            src="/esa-guide/esa-featured.jpg"
            loading="lazy"
            width={1200}
            height={912}
            alt="Emotional companionship with a support animal"
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
