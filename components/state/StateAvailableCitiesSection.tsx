"use client";

import React from "react";
import Image from "next/image";
import { StateData } from "@/data/statesData";

export function StateAvailableCitiesSection({ data }: { data: StateData }) {
  const stateName = data.name;
  const cities = data.cities || [];
  const title = data.citiesTitle || `Available Everywhere in ${stateName}`;
  const subtitle = data.citiesSubtitle || `Our entire process runs through secure telehealth, which means we're available to clients across all cities and counties in ${stateName}.`;

  const hasDescriptions = cities.some((c) => !!c.description);

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[840px] mx-auto mb-10 sm:mb-12 lg:mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-bold text-[#2E5A66] leading-[1.2] tracking-tight">
            {title}
          </h2>
          <p className="font-sans text-xs sm:text-sm lg:text-[16px] text-[#5F6B6F] font-semibold leading-relaxed mt-3 max-w-[760px] mx-auto">
            {subtitle}
          </p>
        </div>

        {hasDescriptions ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-[1280px] mx-auto">
            {cities.map((city, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] rounded-[22px] sm:rounded-[24px] p-5 sm:p-6 border border-[#EAE5DC]/70 flex flex-col items-start gap-3.5 shadow-xs hover:shadow-md transition-all duration-300 h-full"
              >
                <div className="flex items-center gap-3.5 w-full">
                  <div className="relative w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0">
                    <Image
                      src={city.icon}
                      alt={`${city.name} Map`}
                      fill
                      unoptimized
                      className="object-contain"
                      sizes="56px"
                    />
                  </div>
                  <span className="font-heading text-base sm:text-lg lg:text-[19px] font-bold text-[#2E5A66] leading-snug">
                    {city.name}
                  </span>
                </div>
                {city.description && (
                  <p className="font-sans text-[13px] sm:text-[14px] lg:text-[14.5px] text-[#5F6B6F] font-medium leading-relaxed flex-1">
                    {city.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-7 sm:gap-y-10 gap-x-3 sm:gap-x-6 lg:gap-x-8 max-w-[960px] mx-auto">
            {cities.map((city, idx) => (
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
                    sizes="68px"
                  />
                </div>
                <span className="font-heading text-sm sm:text-base lg:text-[19px] xl:text-[20px] font-bold text-[#2E5A66] whitespace-nowrap">
                  {city.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
