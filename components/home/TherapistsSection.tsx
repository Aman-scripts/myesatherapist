"use client";

import React from "react";
import Image from "next/image";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="4.98" cy="4.98" r="2.4" />
      <rect x="2.8" y="9.5" width="4.4" height="12.5" rx="0.5" />
      <path d="M10.5 9.5h4.2v1.8c.6-1.1 2-2.1 4.1-2.1 4.4 0 5.2 2.9 5.2 6.6v6.2h-4.4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6h-4.4V9.5z" />
    </svg>
  );
}

const therapists = [
  {
    name: "Robert Staaf",
    title: "Licensed Clinical Social Worker",
    bio: "LCSW licensed in 30+ states with extensive psychotherapy experience. Pet owner and advocate for animal-assisted mental health treatment.",
    licensedIn: "30+ States",
    method: "Video or Phone",
    focus: "Anxiety, Stress",
  },
  {
    name: "Robert Staaf",
    title: "Licensed Clinical Social Worker",
    bio: "LCSW licensed in 30+ states with extensive psychotherapy experience. Pet owner and advocate for animal-assisted mental health treatment.",
    licensedIn: "30+ States",
    method: "Video or Phone",
    focus: "Anxiety, Stress",
  },
];

function StatBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="relative flex-1 min-w-0 rounded-[14px] bg-white border border-[#E2E8F0] border-t-[3.5px] border-t-[#E8B92C] shadow-sm pt-4 sm:pt-5 pb-3 sm:pb-3.5 px-1 sm:px-2 text-center flex flex-col justify-center">
      {/* Small floating badge icon at top center */}
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center">
        <Image
          src="/therapist-section-badge.svg"
          alt=""
          width={14}
          height={13}
          unoptimized
          className="object-contain"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="text-[11px] sm:text-[13px] font-heading font-bold text-[#1A4D59] leading-tight">
        {label}
      </div>
      <div className="text-[10px] sm:text-[11px] font-semibold text-[#5F6B6F] mt-1 sm:mt-1.5 leading-tight">
        {value}
      </div>
    </div>
  );
}

export function TherapistsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14 space-y-3 max-w-[950px] mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-primary leading-tight lg:whitespace-nowrap">
            Our Licensed Mental Health Professionals
          </h2>
          <p className="text-[#5F6B6F] text-base sm:text-[18px] font-semibold max-w-[760px] mx-auto leading-relaxed">
            We connect individuals with licensed mental health professionals who
            are qualified to conduct evaluations and provide recommendations
            when clinically appropriate.
          </p>
        </div>

        {/* Therapist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {therapists.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[28px] overflow-hidden shadow-[0_10px_35px_-5px_rgba(26,61,79,0.12)] border border-[#E2E8F0] flex flex-col justify-between"
            >
              {/* Teal Header Bar */}
              <div className="bg-gradient-to-r from-[#184652] via-[#1A4D59] to-[#1D5E6A] px-4 sm:px-6 py-4 flex items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                  <div className="w-[56px] h-[56px] sm:w-[70px] sm:h-[70px] rounded-full border-[3px] border-[#E8B92C] overflow-hidden shrink-0 relative bg-white/10 shadow-sm">
                    <Image
                      src="/therapist-avatar.png"
                      alt={t.name}
                      fill
                      sizes="70px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-white font-heading font-bold text-base sm:text-xl truncate">
                      {t.name}
                    </div>
                    <div className="text-[#E8B92C] text-xs sm:text-sm font-semibold truncate">
                      {t.title}
                    </div>
                  </div>
                </div>

                {/* LinkedIn Badge */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E8B92C] hover:bg-[#dba81f] flex items-center justify-center shrink-0 shadow-sm transition-colors cursor-pointer">
                  <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#184652]" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-6 space-y-5 sm:space-y-6 flex-1 flex flex-col justify-between">
                {/* Bio text */}
                <p className="text-[#5F6B6F] text-sm sm:text-[15px] font-semibold leading-relaxed">
                  {t.bio}
                </p>

                {/* 3 Stat Badges */}
                <div className="flex items-stretch gap-1.5 sm:gap-3.5 pt-2">
                  <StatBadge label="Licensed In" value={t.licensedIn} />
                  <StatBadge label="Evaluation Method" value={t.method} />
                  <StatBadge label="Focus Areas" value={t.focus} />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  {/* Book Appointment */}
                  <a
                    href="#"
                    className="flex items-center justify-between pl-6 pr-2 py-2 rounded-full bg-[#184652] hover:bg-[#133741] text-white font-bold text-sm sm:text-[15px] transition-colors flex-1 shadow-sm"
                  >
                    <span>Book Appointment</span>
                    <span className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                      <Image src="/send-icon.svg" alt="" width={18} height={20} className="w-[18px] h-[20px]" />
                    </span>
                  </a>

                  {/* View Profile */}
                  <a
                    href="#"
                    className="flex items-center justify-between pl-6 pr-2 py-2 rounded-full bg-[#E8B92C] hover:bg-[#dba81f] text-[#184652] font-bold text-sm sm:text-[15px] transition-colors flex-1 shadow-sm"
                  >
                    <span>View Profile</span>
                    <span className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                      <Image src="/send-icon.svg" alt="" width={18} height={20} className="w-[18px] h-[20px]" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
