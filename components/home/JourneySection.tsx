"use client";

import React from "react";
import Image from "next/image";


const cards = [
  {
    stat: "80%",
    image: "/home/journey-section-one.webp",
    text: "Pet owners say their pets bring them happiness and emotional support.",
  },
  {
    stat: "84%",
    image: "/home/journey-section-two.webp",
    text: "Report a mostly positive impact on their mental health.",
  },
  {
    stat: "66%",
    image: "/home/journey-section-three.webp",
    text: "Believe their pets help reduce stress and promote calm.",
  },
];

export function JourneySection() {
  return (
    <section className="py-12 sm:py-16 xl:py-[72px] bg-[#FAF7F2]">
      <div className="max-w-[1033px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-8 sm:mb-10 xl:mb-[72px] space-y-2 max-w-[999px] mx-auto text-center">
          <h2 className="heading-h2 capitalize">
            Your ESA Journey Starts Here
          </h2>
          <p className="body-large">
            See how emotional support animals transform lives
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-[18px]">
          {cards.map((card) => (
            <div
              key={card.stat}
              className="rounded-[20px] overflow-hidden shadow-[0_15px_35px_-5px_rgba(26,61,79,0.2)] flex flex-col bg-[#1A3D4F]"
            >
              {/* Photo Area */}
              <div className="relative w-full h-[340px] sm:h-[370px] lg:h-[390px]">
                <Image
                  quality={90}
                  src={card.image}
                  alt={card.text}
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 333px, 100vw"
                />

                {/* Dark gradient overlay at bottom of photo for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

                {/* Overlaid content: Circular Icon Badge with stat inside + Gold Divider */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end pb-3 z-10">
                  {/* Circular Icon + Stat Badge (Figma: 103px x 103px, rgba(239, 255, 241, 0.8)) */}
                  <div className="w-[103px] h-[103px] rounded-full bg-[rgba(239,255,241,0.85)] shadow-md flex flex-col items-center justify-center p-1.5 backdrop-blur-[2px]">
                    <Image
                      quality={90}
                      src="/home/journey-section-icon.svg"
                      alt=""
                      width={38}
                      height={38}
                      className="w-[36px] h-[36px] object-contain"
                    />
                    <span className="heading-h3 leading-[32px] lg:leading-[36px]">
                      {card.stat}
                    </span>
                  </div>

                  {/* Gold Divider (Rectangle 6: width 80px, height 1px, #E8B92C) */}
                  <div className="w-20 h-[1px] bg-[#E8B92C] rounded-[10px] mt-2.5" />
                </div>
              </div>

              {/* Bottom Teal Gradient Block (Frame 29: 87px height, text 18px Manrope #FAF7F2) */}
              <div
                className="px-5 py-4 text-center flex-1 flex items-center justify-center min-h-[87px]"
                style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
              >
                <p className="body-large text-[#FAF7F2] max-w-[325px] mx-auto">
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
