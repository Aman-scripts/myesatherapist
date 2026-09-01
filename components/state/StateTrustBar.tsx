"use client";

import React from "react";
import { StateData } from "@/data/statesData";

export function StateTrustBar({ data }: { data: StateData }) {
  const stateName = data.name;
  const residentsCount = data.residentsServed || "6000+";

  const stat5 = data.trustStat5 || {
    value: "30 Day",
    label: "Compliance Practice",
  };

  const stats = [
    {
      value: residentsCount,
      label: `${stateName} Residents served`,
    },
    {
      value: "4.9/5.0",
      label: "Average Verified Ratings",
    },
    {
      value: "5+ years",
      label: `Serving ${stateName}`,
    },
    {
      value: "$149",
      label: "All inclusive, no surprises",
    },
    stat5,
  ];

  return (
    <div className="relative z-30 -mt-6 sm:-mt-10 lg:-mt-14 max-w-[1146px] mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto mb-8 sm:mb-12 lg:mb-16">
      {/* Floating Trust Banner Card Frame 1000011968 */}
      <div className="bg-white rounded-[22px] shadow-[0px_1px_4px_rgba(0,0,0,0.15)] py-[22px] px-[27px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 lg:gap-0 items-center lg:divide-x lg:divide-[#5F6B6F]/20">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-2 lg:px-4"
            >
              <div className="font-heading text-[24px] sm:text-[28px] font-extrabold text-[#2E5A66] leading-[36px] tracking-[-0.00015em]">
                {stat.value}
              </div>
              <div className="font-sans text-[14px] sm:text-[16px] font-semibold text-[#5F6B6F] leading-[22px] mt-1 text-center max-w-[170px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
