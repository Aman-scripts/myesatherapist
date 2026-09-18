"use client";

import React from "react";
import { DoctorProfile } from "@/data/doctorsData";

interface DoctorTrustBarProps {
  doctor: DoctorProfile;
}

export function DoctorTrustBar({ doctor }: DoctorTrustBarProps) {
  const stats = doctor.trustStats || [
    {
      value: "6,000+",
      label: "Clients Evaluated",
    },
    {
      value: "4.9/5.0",
      label: "Average Verified Ratings",
    },
    {
      value: `${doctor.stats.years} years`,
      label: "Clinical Experience",
    },
    {
      value: "$149",
      label: "All inclusive, no surprises",
    },
    {
      value: "Compliant",
      label: "State Board & FHA Practice",
    },
  ];

  return (
    <div className="relative z-30 -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
      {/* Floating Trust Banner Card centered between Hero and Content Section */}
      <div className="bg-white rounded-[24px] lg:rounded-[32px] border border-[#EAE5DC] shadow-[0_16px_48px_rgba(26,61,79,0.09)] py-6 sm:py-7 px-4 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 lg:gap-0 items-center lg:divide-x lg:divide-[#EAE5DC]">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center px-2 lg:px-4 ${
                idx === 4 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <div className="font-heading text-xl sm:text-2xl lg:text-[28px] xl:text-[34px] font-bold text-[#2E5A66] leading-none tracking-tight whitespace-nowrap">
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
