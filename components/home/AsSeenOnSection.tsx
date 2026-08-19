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

// Duplicate so the scroll loop is seamless
const marqueeLogos = [...mediaLogos, ...mediaLogos];

export function AsSeenOnSection() {
  return (
    <section className="py-10 sm:py-12 lg:py-[39px] bg-warm-bg overflow-hidden">
      {/* Heading */}
      <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8 px-4">
        <div className="flex-1 h-px bg-gold max-w-[80px]" />
        <h2 className="font-heading text-xl sm:text-2xl lg:text-[28px] font-bold text-primary text-center shrink-0 tracking-[-0.0042em]">
          As seen on
        </h2>
        <div className="flex-1 h-px bg-gold max-w-[80px]" />
      </div>

      {/* Marquee track */}
      <div className="relative w-full">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#FAF7F2] to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#FAF7F2] to-transparent" />

        <div className="flex overflow-hidden">
          <div
            className="flex items-center gap-10 sm:gap-14 lg:gap-20 animate-marquee"
            style={{ willChange: "transform" }}
          >
            {marqueeLogos.map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt={`Media logo ${(idx % mediaLogos.length) + 1}`}
                width={280}
                height={90}
                className="shrink-0 h-[36px] sm:h-[44px] lg:h-[60px] w-auto object-contain opacity-75 hover:opacity-100 transition-opacity duration-200"
                sizes="280px"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
