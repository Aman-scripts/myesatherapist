"use client";

import React from "react";
import Image from "next/image";
import { StateData } from "@/data/statesData";

export function StateAvailableCitiesSection({ data }: { data: StateData }) {
  const stateName = data.name;
  const cities = data.cities || [];

  return (
    <section className="w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1279px] mx-auto">
        <div className="text-center max-w-[840px] mx-auto mb-10 sm:mb-12 lg:mb-14 space-y-3">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[44px] font-bold text-[#2E5A66] leading-[1.23] tracking-[-0.00015em]">
            Available Everywhere in {stateName}
          </h2>
          <p className="font-sans text-sm sm:text-base lg:text-[16px] text-[#5F6B6F] font-semibold leading-[26px] max-w-[760px] mx-auto">
            Our entire process runs through secure telehealth, which means we&apos;re available to clients across all cities and counties in {stateName}.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 sm:gap-y-10 gap-x-4 sm:gap-x-6 lg:gap-x-8 max-w-[1020px] mx-auto">
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
                />
              </div>
              <span className="font-heading text-base sm:text-lg lg:text-[20px] font-bold text-[#2E5A66] whitespace-nowrap leading-[28px] tracking-[-0.00015em]">
                {city.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
