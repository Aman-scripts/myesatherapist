"use client";

import React from "react";
import Image from "next/image";

const trustCards = [
  {
    icon: "/ESA ICons/Glyph-3.svg",
    title: "HIPAA Compliant",
    description: "Your information stays private and confidential.",
  },
  {
    icon: "/ESA ICons/Icon-38.svg",
    title: "Response Within 24–72 Hours",
    description: "Timely responses, subject to provider availability.",
  },
  {
    icon: "/ESA ICons/Icon-24.svg",
    title: "Licensed In All 50 States",
    description: "Access providers licensed in your state.",
  },
];

export function AboutTrustBySection() {
  return (
    <section className="w-full bg-background pt-14 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading (Figma Frame 1261153977 Heading) */}
        <div className="text-center max-w-[854px] mx-auto mb-16 sm:mb-20 lg:mb-24 space-y-3 sm:space-y-4">
          <h2 className="heading-h2 text-primary">
            Why ESA Owners Trust Us
          </h2>
          <p className="body-large text-body-text max-w-[620px] mx-auto">
            We stand apart by providing legitimate, professional ESA evaluations conducted by licensed clinicians.
          </p>
        </div>

        {/* 3 Trust Cards (Figma Frame 1261153636) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 sm:gap-12 lg:gap-6 pt-2 max-w-[1280px] mx-auto">
          {trustCards.map((card, idx) => (
            <div key={idx} className="relative flex flex-col items-center">
              {/* Top Floating White Badge (Figma Frame 1000011685, 74.56x74.56px) */}
              <div className="absolute -top-9 z-10 w-[74px] h-[74px] rounded-full bg-white shadow-[0px_2px_6px_rgba(0,0,0,0.18)] flex items-center justify-center p-4 border border-[#EAE5DC]/60">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={34}
                  height={34}
                  unoptimized
                  className="object-contain w-[32px] h-[32px]"
                />
              </div>

              {/* Card Body with Gold Top Accent Bar (Figma Frame 1000011684 + 1000011683) */}
              <div className="w-full min-h-[175px] sm:min-h-[185px] lg:min-h-[195px] bg-white rounded-[20px] shadow-[0px_2px_8px_rgba(0,0,0,0.08)] border-t-[7px] border-t-accent pt-14 pb-7 px-3 sm:px-4 lg:px-3 xl:px-5 flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="heading-h3 text-color-gradient mb-2 text-center whitespace-nowrap">
                  {card.title}
                </h3>
                <p className="body-text text-body-text max-w-[260px] mx-auto">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
