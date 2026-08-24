"use client";

import React from "react";
import Image from "next/image";

const mediaLogos = [
  "/asseenon-section-image-one.png",
  "/asseenon-section-image-two.png",
  "/asseenon-section-image-three.png",
  "/asseenon-section-image-four.png",
  "/asseenon-section-image-five.png",
  "/asseenon-section-image-six.png",
];

interface AsSeenOnSectionProps {
  bgColor?: string;
}

export function AsSeenOnSection({ bgColor = "bg-[#FAF7F2]" }: AsSeenOnSectionProps) {
  return (
    <section className={`py-8 sm:py-10 lg:py-12 ${bgColor} overflow-hidden relative`}>
      {/* Heading */}
      <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8 px-4">
        <div className="flex-1 h-px bg-gold max-w-[60px] sm:max-w-[80px]" />
        <h2 className="font-heading text-lg sm:text-2xl lg:text-[28px] font-bold text-primary text-center shrink-0 tracking-[-0.0042em]">
          As seen on
        </h2>
        <div className="flex-1 h-px bg-gold max-w-[60px] sm:max-w-[80px]" />
      </div>

      {/* Marquee track */}
      <div className="relative w-full overflow-hidden">
        {/* Subtle left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-12 z-10 bg-gradient-to-r from-[#FAF7F2] to-transparent" />
        {/* Subtle right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-12 z-10 bg-gradient-to-l from-[#FAF7F2] to-transparent" />

        <div className="flex w-max animate-marquee">
          {/* Track 1 */}
          <div className="flex items-center gap-5 sm:gap-8 lg:gap-10 pr-5 sm:pr-8 lg:pr-10 shrink-0">
            {mediaLogos.concat(mediaLogos).map((src, idx) => (
              <Image
                key={`t1-${idx}`}
                src={src}
                alt={`Media logo ${(idx % mediaLogos.length) + 1}`}
                width={220}
                height={70}
                unoptimized
                priority
                className="shrink-0 h-[42px] sm:h-[52px] lg:h-[62px] w-auto object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            ))}
          </div>

          {/* Track 2 (Identical Copy for Seamless -50% Loop) */}
          <div className="flex items-center gap-5 sm:gap-8 lg:gap-10 pr-5 sm:pr-8 lg:pr-10 shrink-0">
            {mediaLogos.concat(mediaLogos).map((src, idx) => (
              <Image
                key={`t2-${idx}`}
                src={src}
                alt={`Media logo ${(idx % mediaLogos.length) + 1}`}
                width={220}
                height={70}
                unoptimized
                priority
                className="shrink-0 h-[42px] sm:h-[52px] lg:h-[62px] w-auto object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
