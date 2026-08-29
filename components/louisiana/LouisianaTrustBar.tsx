"use client";

import React from "react";
import Image from "next/image";

export function LouisianaTrustBar() {
  const metrics = [
    {
      value: "7,300+",
      label: "Louisiana residents served",
      icon: "/trustbar-users.svg",
    },
    {
      value: "4.9 / 5",
      label: "Average verified rating",
      icon: "/trustbar-star.svg",
    },
    {
      value: "5+ yrs",
      label: "Serving Louisiana",
      icon: "/trustbar-badge.svg",
    },
    {
      value: "$149",
      label: "All-inclusive, no surprises",
      icon: "/trustbar-tag.svg",
    },
    {
      value: "30-day",
      label: "HB 407 compliant process",
      icon: "/trustbar-shield.svg",
    },
  ];

  return (
    <div className="w-full bg-[#1A4D59] py-4 sm:py-5 border-y border-[#184F59]/30">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-center justify-between">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 sm:gap-3.5 text-white/90 justify-center md:justify-start"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Image
                  src={m.icon}
                  alt=""
                  width={18}
                  height={18}
                  className="w-4 h-4 sm:w-4.5 sm:h-4.5 object-contain"
                />
              </div>
              <div>
                <div className="font-heading text-base sm:text-lg font-bold text-white leading-tight">
                  {m.value}
                </div>
                <div className="font-sans text-[11px] sm:text-xs text-white/80 font-medium leading-snug">
                  {m.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
