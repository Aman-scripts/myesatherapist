"use client";

import React from "react";
import Image from "next/image";

const benefitsData = [
  {
    icon: "/psd-benfit-section-housesingupport.svg",
    title: "Housing Support",
    badge: "Most Requested",
    description:
      "May support housing approval for your psychiatric service dog in pet-restricted properties, subject to landlord approval. Your PSD letter provides documentation that many providers may request.",
    isDark: true,
  },
  {
    icon: "/psd-benfit-section-airtravel.svg",
    title: "Air Travel Documentation",
    description:
      "Provides documentation that may support your air travel needs, subject to airline policies and approval.",
    isDark: false,
  },
  {
    icon: "/psd-benfit-section-publicaccess.svg",
    title: "Public Access Information",
    description:
      "Offers documentation for public spaces when accompanied by your trained psychiatric service dog.",
    isDark: false,
  },
  {
    icon: "/psd-benfit-section-professionaldocument.svg",
    title: "Professional Documentation",
    description:
      "Official letter on letterhead from a state-licensed mental health professional with their credentials.",
    isDark: false,
  },
  {
    icon: "/psd-benfit-section-supportivedocument.svg",
    title: "Supportive Documentation",
    description:
      "Backup documentation regarding your condition to help support your needs as a service dog handler.",
    isDark: false,
  },
  {
    icon: "/psd-benfit-section-mentalhealth.svg",
    title: "Mental Health Consultation",
    description:
      "Professional assessment and consultation from licensed therapists who understand service dog considerations.",
    isDark: false,
  },
];

export function PsdBenefitsSection() {
  return (
    <section className="w-full bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Figma Frame 1000011754: 2-column layout on Desktop) */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-12 mb-16 lg:mb-20">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1E3E47] leading-[1.16] tracking-tight max-w-xl">
            Understanding your
            <br className="hidden sm:block" />
            {" "}PSD letter benefits
          </h2>
          <p className="text-[#5F6B6F] text-base lg:text-[17px] font-medium leading-[1.65] max-w-xl lg:mt-2 font-[family-name:var(--font-lato)]">
            Learn about the potential advantages of having professional documentation for your psychiatric service dog and how it supports your needs across housing, travel, and daily life.
          </p>
        </div>

        {/* 6 Grid Cards (2 Rows x 3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-7">
          {benefitsData.map((item, index) => (
            <div
              key={index}
              className={`relative pt-12 pb-9 px-6 sm:px-8 rounded-2xl flex flex-col items-center text-center transition-all duration-300 ${
                item.isDark
                  ? "bg-[#1E3E47] text-white border-t-4 border-t-[#D4AF37] border-x border-b border-[#1E3E47] shadow-lg"
                  : "bg-white text-[#1E3E47] border-t-4 border-t-[#D4AF37] border-x border-b border-[#EAE5DC] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-md"
              }`}
            >
              {/* Floating Top-Center Circle Badge Icon */}
              <div
                className={`absolute top-[-36px] left-1/2 -translate-x-1/2 w-[72px] h-[72px] rounded-full flex items-center justify-center ${
                  item.isDark
                    ? "bg-[#1E3E47] border-2 border-white/20 shadow-md"
                    : "bg-white border border-[#EAE5DC] shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                }`}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={34}
                  height={34}
                  className="object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>

              {/* Optional Top-Right "Most Requested" Pill Badge */}
              {item.badge && (
                <div className="absolute top-4 right-4 bg-white text-[#1E3E47] text-[11px] sm:text-[12px] font-bold px-3 py-1 rounded-full shadow-xs tracking-tight">
                  {item.badge}
                </div>
              )}

              {/* Card Title */}
              <h3
                className={`font-heading text-xl sm:text-[22px] font-bold mb-3.5 mt-2 ${
                  item.isDark ? "text-white" : "text-[#1E3E47]"
                }`}
              >
                {item.title}
              </h3>

              {/* Card Description */}
              <p
                className={`text-sm sm:text-[15px] font-medium leading-relaxed font-[family-name:var(--font-lato)] ${
                  item.isDark ? "text-white/90" : "text-[#5F6B6F]"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
