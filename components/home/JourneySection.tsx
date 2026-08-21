"use client";

import React from "react";
import Image from "next/image";


const cards = [
  {
    stat: "80%",
    image: "/journey-section-one.png",
    text: "Pet owners say their pets bring them happiness and emotional support.",
  },
  {
    stat: "84%",
    image: "/journey-section-two.png",
    text: "Report a mostly positive impact on their mental health.",
  },
  {
    stat: "66%",
    image: "/journey-section-three.png",
    text: "Believe their pets help reduce stress and promote calm.",
  },
];

export function JourneySection() {
  return (
    <section className="py-14 sm:py-16 lg:py-[72px] bg-[#EEEBE0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 lg:mb-[72px] space-y-2 max-w-[999px] mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-primary leading-tight tracking-[-0.0066em]">
            Your ESA Journey Starts Here
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg font-semibold">
            See how emotional support animals transform lives
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-[18px]">
          {cards.map((card) => (
            <div
              key={card.stat}
              className="rounded-[24px] overflow-hidden shadow-[0_15px_35px_-5px_rgba(26,61,79,0.25)] flex flex-col bg-[#1A4D59]"
            >
              {/* Photo Area */}
              <div className="relative w-full h-[320px] sm:h-[350px] lg:h-[370px]">
                <Image
                  src={card.image}
                  alt={card.text}
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 380px, 100vw"
                />

                {/* Dark gradient overlay at bottom of photo for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                {/* Overlaid content: Icon badge, Stat, Gold Divider */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end pb-4 z-10">
                  {/* Circular Icon Badge */}
                  <div className="w-[72px] h-[72px] rounded-full bg-[#DCE7E1] shadow-md flex items-center justify-center mb-2.5">
                    <Image
                      src="/journey-section-icon.svg"
                      alt="Icon"
                      width={38}
                      height={38}
                      className="w-[38px] h-[38px] object-contain"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>

                  {/* Stat */}
                  <span className="font-heading text-5xl sm:text-[54px] lg:text-[58px] font-bold text-white leading-none tracking-[-0.01em] drop-shadow-md">
                    {card.stat}
                  </span>

                  {/* Gold Divider */}
                  <div className="w-24 h-[2.5px] bg-[#E8B92C] mt-2.5" />
                </div>
              </div>

              {/* Bottom Dark Teal Block */}
              <div className="bg-[#1A4D59] px-6 py-6 text-center flex-1 flex items-center justify-center">
                <p className="text-white text-base sm:text-[17px] font-medium leading-snug max-w-[290px] mx-auto">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
