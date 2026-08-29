"use client";

import React from "react";
import Image from "next/image";

const kansasCities = [
  { name: "Wichita", icon: "/losangeles.svg" },
  { name: "Overland Park", icon: "/sanfrancisco.svg" },
  { name: "Kansas City", icon: "/losangelestwo.svg" },
  { name: "Olathe", icon: "/losangelesfour.svg" },
  { name: "Topeka", icon: "/losangelesthree.svg" },
  { name: "Lawrence", icon: "/sanfranciscotwo.svg" },
  { name: "Shawnee", icon: "/sanfranciscothree.svg" },
  { name: "Manhattan", icon: "/sanfranciscofour.svg" },
];

export function KansasAvailableCitiesSection() {
  return (
    <section className="w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1060px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-[840px] mx-auto mb-10 sm:mb-12 lg:mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-bold text-[#1E3E47] leading-[1.2] tracking-tight">
            Available Everywhere in Kansas
          </h2>
          <p className="font-sans text-xs sm:text-sm lg:text-[15px] text-[#5F6B6F] font-medium leading-relaxed mt-3 max-w-[760px] mx-auto">
            Our entire process runs through secure telehealth, which means we&apos;re available to clients
            across all cities and counties in Kansas, from Wichita to Overland Park, Kansas City, and Topeka.
          </p>
        </div>

        {/* 4x2 Responsive Grid of Cities with Map Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-7 sm:gap-y-10 gap-x-3 sm:gap-x-6 lg:gap-x-8 max-w-[960px] mx-auto">
          {kansasCities.map((city, idx) => (
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
