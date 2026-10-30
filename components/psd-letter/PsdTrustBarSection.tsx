"use client";

import React from "react";
import Image from "next/image";

const TEAL_GRADIENT = "var(--color-gradient)";

interface TrustCard {
  title: string;
  description: string;
  icon: string;
}

const trustCards: TrustCard[] = [
  {
    title: "HIPAA Compliant",
    description: "Your health information stays just between you and your provider",
    icon: "/ESA ICons/Glyph-3.svg",
  },
  {
    title: "Response Within 24-72 Hours",
    description: "Get timely updates throughout your evaluation journey",
    icon: "/ESA ICons/Icon-38.svg",
  },
  {
    title: "Licensed in All 50 States",
    description: "State-specific expertise for your PSD letter evaluation",
    icon: "/ESA ICons/Icon-24.svg",
  },
];

export function PsdTrustBarSection() {
  return (
    <section className="w-full bg-background pt-14 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-[854px] mx-auto mb-16 lg:mb-20 space-y-3">
          <h2 className="heading-h2 capitalize">
            Your PSD Letter Evaluation Starts with Trust
          </h2>
          <p className="body-large max-w-[700px] mx-auto">
            With My ESA Therapist, get complete guidance on your PSD letter evaluation based on your specific needs and circumstances.
          </p>
        </div>

        {/* 3 Elevated Cards in Grid (Figma Frame 1261153636) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-10 lg:gap-6 max-w-[1280px] mx-auto pt-4">
          {trustCards.map((card, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-[20px] pt-14 pb-8 px-3 sm:px-5 lg:px-3 xl:px-6 flex flex-col items-center text-center shadow-[0px_2px_4px_rgba(0,0,0,0.15)] border-t-[5px] border-t-accent hover:shadow-md transition-shadow"
            >
              {/* Floating Top Circular Badge (Figma Frame 1000011685) */}
              <div className="absolute -top-[37px] left-1/2 -translate-x-1/2 w-[74px] h-[74px] rounded-full bg-white shadow-[0px_1.88px_3.77px_rgba(0,0,0,0.25)] flex items-center justify-center z-10 border border-background">
                <Image
                  src={card.icon}
                  alt=""
                  width={32}
                  height={32}
                  unoptimized
                  className="icon-lg object-contain"
                />
              </div>

              {/* Card Title H3 */}
              <h3 className="heading-h3 capitalize text-color-gradient mb-2 text-center whitespace-nowrap">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="body-text max-w-[280px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
