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

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

export function PsdBenefitsSection() {
  return (
    <section className="w-full bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Figma Frame 1000011754: 2-column layout on Desktop) */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-12 mb-16 lg:mb-20">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#2E5A66] leading-tight lg:leading-[54px] tracking-tight max-w-xl">
            Understanding your
            <br className="hidden sm:block" />
            {" "}PSD letter benefits
          </h2>
          <p className="text-[#5F6B6F] text-base lg:text-[18px] font-semibold leading-relaxed lg:leading-[30px] max-w-xl lg:mt-2 font-sans">
            Learn about the potential advantages of having professional documentation for your psychiatric service dog and how it supports your needs across housing, travel, and daily life.
          </p>
        </div>

        {/* 6 Grid Cards (2 Rows x 3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-7 pt-6">
          {benefitsData.map((item, index) => (
            <div
              key={index}
              className={`relative pt-14 pb-9 px-6 sm:px-8 rounded-[20px] flex flex-col items-center text-center shadow-[0px_2px_4px_rgba(0,0,0,0.15)] transition-all duration-300 ${
                item.isDark
                  ? "text-[#FAF7F2] border-t-[5px] border-t-[#E8B92C]"
                  : "bg-white text-[#2E5A66] border-t-[5px] border-t-[#E8B92C]"
              }`}
              style={item.isDark ? { backgroundImage: TEAL_GRADIENT } : {}}
            >
              {/* Floating Top-Center Circle Badge Icon */}
              <div
                className={`absolute -top-[40px] left-1/2 -translate-x-1/2 w-[80px] h-[80px] rounded-full flex items-center justify-center z-20 ${
                  item.isDark
                    ? "bg-[#FAF7F2] shadow-[0px_2.5px_5px_rgba(0,0,0,0.25)]"
                    : "bg-white shadow-[0px_2.5px_5px_rgba(0,0,0,0.25)]"
                }`}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={38}
                  height={38}
                  className="object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>

              {/* Top-Right "Most Requested" Pill Badge */}
              {item.badge && (
                <div className="absolute -top-3.5 right-3 sm:right-4 md:right-5 bg-[#FAF7F2] border-[0.2px] border-[#2E5A66] text-[#2E5A66] text-[12px] sm:text-[13px] font-bold px-3.5 sm:px-4 py-1 rounded-[12px] shadow-xs tracking-tight font-sans z-10 whitespace-nowrap">
                  {item.badge}
                </div>
              )}

              {/* Card Title */}
              <h3
                className={`font-heading text-xl sm:text-[24px] font-bold mb-3 mt-2 leading-tight ${
                  item.isDark ? "text-[#FAF7F2]" : "bg-clip-text text-transparent"
                }`}
                style={!item.isDark ? { backgroundImage: TEAL_GRADIENT } : {}}
              >
                {item.title}
              </h3>

              {/* Card Description */}
              <p
                className={`text-sm sm:text-[16px] font-semibold leading-[24px] sm:leading-[26px] font-sans ${
                  item.isDark ? "text-[#FAF7F2]/90" : "text-[#5F6B6F]"
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
