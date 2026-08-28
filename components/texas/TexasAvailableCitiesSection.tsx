"use client";

import React from "react";
import Image from "next/image";

const texasCities = [
  { name: "Houston", icon: "/losangeles.svg" },
  { name: "San Antonio", icon: "/sanfrancisco.svg" },
  { name: "Dallas", icon: "/losangelestwo.svg" },
  { name: "Austin", icon: "/losangelesfour.svg" },
  { name: "Fort Worth", icon: "/losangelesthree.svg" },
  { name: "El Paso", icon: "/sanfranciscotwo.svg" },
  { name: "Arlington", icon: "/sanfranciscothree.svg" },
  { name: "Corpus Christi", icon: "/sanfranciscofour.svg" },
  { name: "Plano", icon: "/losangeles.svg" },
  { name: "Lubbock", icon: "/sanfrancisco.svg" },
];

export function TexasAvailableCitiesSection() {
  return (
    <section className="w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1060px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-[840px] mx-auto mb-10 sm:mb-12 lg:mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-bold text-[#1E3E47] leading-[1.2] tracking-tight">
            Available Everywhere in Texas
          </h2>
          <p className="font-sans text-xs sm:text-sm lg:text-[15px] text-[#5F6B6F] font-medium leading-relaxed mt-3 max-w-[760px] mx-auto">
            Our evaluation process is conducted through secure telehealth, making our services available to clients across all cities and counties in Texas, from Houston to San Antonio, Dallas, Austin, and beyond.
          </p>
        </div>

        {/* Responsive Grid of Cities with Map Icons */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-7 sm:gap-y-10 gap-x-3 sm:gap-x-4 lg:gap-x-6 max-w-[1020px] mx-auto">
          {texasCities.map((city, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-2.5 lg:gap-3 text-center sm:text-left"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-[60px] lg:h-[60px] shrink-0">
                <Image
                  src={city.icon}
                  alt={`${city.name} Map`}
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
              <span className="font-heading text-sm sm:text-base lg:text-[17px] xl:text-[18px] font-bold text-[#1E3E47] whitespace-nowrap">
                {city.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
