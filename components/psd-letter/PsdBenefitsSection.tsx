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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-7 pt-6">
          {benefitsData.map((item, index) => (
            <div
              key={index}
              className={`relative pt-14 pb-9 px-6 sm:px-8 rounded-[24px] flex flex-col items-center text-center transition-all duration-300 ${
                item.isDark
                  ? "bg-gradient-to-b from-[#113642] via-[#174653] to-[#1D5E6A] text-white border-t-[5px] border-t-[#E8B92C] shadow-[0_12px_40px_rgba(20,50,60,0.22)]"
                  : "bg-white text-[#184652] border-t-[5px] border-t-[#E8B92C] border-x border-b border-[#EAE5DC] shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-md"
              }`}
            >
              {/* Floating Top-Center Circle Badge Icon */}
              <div
                className={`absolute -top-[40px] left-1/2 -translate-x-1/2 w-[80px] h-[80px] rounded-full flex items-center justify-center z-20 ${
                  item.isDark
                    ? "bg-gradient-to-b from-[#113642] to-[#1D5E6A] border border-white/20 shadow-[0_6px_20px_rgba(0,0,0,0.25)]"
                    : "bg-white border border-[#EAE5DC] shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                }`}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={36}
                  height={36}
                  className="object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>

              {/* Top-Right "Most Requested" Pill Badge Floating on Top Edge with Clear Margin */}
              {item.badge && (
                <div className="absolute -top-3.5 right-3 sm:right-4 md:right-5 bg-[#FCFAF7] border border-[#E2E8F0] text-[#184652] text-[12px] sm:text-[13px] font-bold px-3.5 sm:px-4 py-1.5 rounded-[12px] sm:rounded-[14px] shadow-sm tracking-tight font-sans z-10 whitespace-nowrap">
                  {item.badge}
                </div>
              )}

              {/* Card Title */}
              <h3
                className={`font-heading text-2xl sm:text-[26px] font-bold mb-3.5 mt-1 leading-tight ${
                  item.isDark ? "text-white" : "text-[#184652]"
                }`}
              >
                {item.title}
              </h3>

              {/* Card Description */}
              <p
                className={`text-sm sm:text-[15px] font-medium leading-[24px] sm:leading-[25px] font-[family-name:var(--font-lato)] ${
                  item.isDark ? "text-white/95" : "text-[#5F6B6F]"
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
