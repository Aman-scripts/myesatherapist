"use client";

import React from "react";
import { StateData } from "@/data/statesData";

export function StateTrustBar({ data }: { data: StateData }) {
  const stateName = data.name;
  const residentsCount = data.residentsServed || "6,500+";

  const stat5 = data.trustStat5 || {
    value: "Secure",
    label: "Online Evaluation",
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
    <div className="hidden lg:block relative z-30 -mt-[62px] mb-[58px] px-8 pointer-events-auto">
      {/* Figma: 1146px floating stat card overlapping the hero's bottom edge */}
      <div className="max-w-[1146px] mx-auto bg-white rounded-[30px] shadow-[0px_2px_14px_rgba(0,0,0,0.08)] py-[26px] px-6">
        <div className="grid grid-cols-5 items-center divide-x divide-line-200">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4">
              <div className="heading-h3 text-primary capitalize">{stat.value}</div>
              <div className="body-text text-body-text mt-1 max-w-[170px]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
