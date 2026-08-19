"use client";

import React from "react";

export function LicensedProviderSection() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#EEEBE0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 lg:mb-12 space-y-3 max-w-[880px] mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[44px] font-bold text-primary leading-tight tracking-[-0.006em] sm:whitespace-nowrap">
            Hear From a Licensed ESA Provider
          </h2>
          <p className="text-[#5F6B6F] text-base sm:text-lg font-semibold leading-relaxed max-w-[650px] mx-auto">
            Nervous about your first evaluation? A licensed provider explains how ESA evaluations work, what questions you may be asked, and how the process helps you feel comfortable and supported.
          </p>
        </div>

        {/* YouTube Video Player */}
        <div className="max-w-[920px] mx-auto">
          <div className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-[28px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(46,90,102,0.25)] bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/z139gKZv4_Y?si=nUFjllSWk94YCftz"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
