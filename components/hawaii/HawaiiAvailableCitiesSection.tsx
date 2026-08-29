"use client";

import React from "react";
import Image from "next/image";

const hawaiiCities = [
  { name: "Honolulu", icon: "/losangeles.svg" },
  { name: "Maui", icon: "/sanfrancisco.svg" },
  { name: "Hilo", icon: "/losangelestwo.svg" },
  { name: "Kona", icon: "/losangelesfour.svg" },
  { name: "Kauai", icon: "/losangelesthree.svg" },
  { name: "Pearl City", icon: "/sanfranciscotwo.svg" },
  { name: "Kaneohe", icon: "/sanfranciscothree.svg" },
  { name: "Mililani", icon: "/sanfranciscofour.svg" },
];

export function HawaiiAvailableCitiesSection() {
  return (
    <section className="w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1060px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-[840px] mx-auto mb-10 sm:mb-12 lg:mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-bold text-[#1E3E47] leading-[1.2] tracking-tight">
            Available Everywhere in Hawaii
          </h2>
          <p className="font-sans text-xs sm:text-sm lg:text-[15px] text-[#5F6B6F] font-medium leading-relaxed mt-3 max-w-[760px] mx-auto">
            Our platform connects residents across all Hawaiian islands with licensed mental health professionals for secure telehealth ESA evaluations, from Honolulu across to Maui, Hilo, Kona, and Kauai.
          </p>
        </div>

        {/* 4x2 Responsive Grid of Cities with Map Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-7 sm:gap-y-10 gap-x-3 sm:gap-x-6 lg:gap-x-8 max-w-[960px] mx-auto">
          {hawaiiCities.map((city, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3 lg:gap-4 text-center sm:text-left"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-[68px] lg:h-[68px] shrink-0">
                <Image
                  src={city.icon}
                  alt={`${city.name} Map`}
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
              <span className="font-heading text-sm sm:text-base lg:text-[19px] xl:text-[20px] font-bold text-[#1E3E47] whitespace-nowrap">
                {city.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
