"use client";

import React from "react";

const stats = [
  {
    value: "6000+",
    label: "California Residents served",
  },
  {
    value: "4.9/5.0",
    label: "Average Verified Ratings",
  },
  {
    value: "5+ years",
    label: "Serving California",
  },
  {
    value: "$149",
    label: "All inclusive, no surprises",
  },
  {
    value: "30 Day",
    label: "AB 468 Compliance Practice",
  },
];

export function CaliforniaTrustBar() {
  return (
    <div className="hidden lg:block relative z-30 -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto mb-8 sm:mb-12 lg:mb-16">
      {/* Floating Trust Banner Card centered between Hero and Process Section */}
      <div className="bg-white rounded-[24px] lg:rounded-[32px] border border-[#EAE5DC] shadow-[0_16px_48px_rgba(26,61,79,0.09)] py-6 sm:py-7 px-4 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 lg:gap-0 items-center lg:divide-x lg:divide-[#EAE5DC]">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col items-center text-center px-2 lg:px-4"
            >
              <div className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#1E3E47] leading-none tracking-tight">
                {stat.value}
              </div>
              <div className="font-sans text-xs sm:text-[13px] font-medium text-[#5F6B6F] mt-2.5 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
