"use client";

import React from "react";
import Image from "next/image";

const stateCities = [
  { name: "Kansas City", icon: "/losangeles.svg" },
  { name: "St. Louis", icon: "/sanfrancisco.svg" },
  { name: "Springfield", icon: "/losangelestwo.svg" },
  { name: "Columbia", icon: "/losangelesfour.svg" },
  { name: "Independence", icon: "/losangelesthree.svg" },
  { name: "St. Charles", icon: "/sanfranciscotwo.svg" },
  { name: "Jefferson City", icon: "/sanfranciscothree.svg" },
  { name: "Joplin", icon: "/sanfranciscofour.svg" }
];

export function MissouriAvailableCitiesSection() {
  return (
    <section className="w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1060px] mx-auto">
        
        <div className="text-center max-w-[840px] mx-auto mb-10 sm:mb-12 lg:mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-bold text-[#1E3E47] leading-[1.2] tracking-tight">
            Available Everywhere in Missouri
          </h2>
          <p className="font-sans text-xs sm:text-sm lg:text-[15px] text-[#5F6B6F] font-medium leading-relaxed mt-3 max-w-[760px] mx-auto">
            Our entire process runs through secure telehealth, which means we're available to clients across all cities and counties in Missouri, from Kansas City and St. Louis to Springfield, Columbia, and Independence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-7 sm:gap-y-10 gap-x-3 sm:gap-x-6 lg:gap-x-8 max-w-[960px] mx-auto">
          {stateCities.map((city, idx) => (
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
