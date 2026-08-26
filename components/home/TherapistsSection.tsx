"use client";

import React, { useRef, useState, useEffect } from "react";
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
    id: 1,
    name: "Robert Staaf",
    title: "Licensed Clinical Social Worker",
    bio: "LCSW licensed in 30+ states with extensive psychotherapy experience. Pet owner and advocate for animal-assisted mental health treatment.",
    licensedIn: "30+ States",
    method: "Video or Phone",
    focus: "Anxiety, Stress",
  },
  {
    id: 2,
    name: "Robert Staaf",
    title: "Licensed Clinical Social Worker",
    bio: "LCSW licensed in 30+ states with extensive psychotherapy experience. Pet owner and advocate for animal-assisted mental health treatment.",
    licensedIn: "30+ States",
    method: "Video or Phone",
    focus: "Anxiety, Stress",
  },
  {
    id: 3,
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
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.querySelector("div[data-card]")?.clientWidth || 340;
    const gap = 24;
    const newIdx = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(Math.max(0, newIdx), therapists.length - 1));
  };

  const scrollToSlide = (idx: number) => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const cardWidth = el.querySelector("div[data-card]")?.clientWidth || 340;
    const gap = 24;
    el.scrollTo({
      left: idx * (cardWidth + gap),
      behavior: "smooth",
    });
    setActiveIndex(idx);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
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

        {/* Therapist Sliding Carousel Track */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {therapists.map((t, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={t.id}
                data-card
                onClick={() => scrollToSlide(idx)}
                className={`snap-center shrink-0 w-[300px] sm:w-[460px] lg:w-[520px] rounded-[24px] sm:rounded-[28px] overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? "border-2 border-[#E8B92C] shadow-[0_12px_36px_rgba(232,185,44,0.18)]"
                    : "border border-[#E2E8F0] shadow-[0_10px_35px_-5px_rgba(26,61,79,0.08)] opacity-95 hover:opacity-100"
                }`}
              >
                {/* Teal Header Bar */}
                <div className="bg-gradient-to-r from-[#184652] via-[#1A4D59] to-[#1D5E6A] px-4 sm:px-6 py-4 flex items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                    <div className="w-[56px] h-[56px] sm:w-[67px] sm:h-[67px] rounded-full border-[3px] border-[#E8B92C] overflow-hidden shrink-0 relative bg-white/10 shadow-sm">
                      <Image
                        src="/therapist-avatar.png"
                        alt={t.name}
                        fill
                        sizes="67px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-white font-heading font-bold text-base sm:text-[20px] leading-tight truncate">
                        {t.name}
                      </div>
                      <div className="text-[#E8B92C] text-xs sm:text-[14px] font-semibold truncate mt-1">
                        {t.title}
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn Badge */}
                  <div className="w-8 h-8 sm:w-[32px] sm:h-[32px] rounded-full bg-[#E8B92C] hover:bg-[#dba81f] flex items-center justify-center shrink-0 shadow-sm transition-colors">
                    <LinkedinIcon className="w-4 h-4 text-[#184652]" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-6 bg-white space-y-4 sm:space-y-6 flex-1 flex flex-col justify-between">
                  {/* Bio text */}
                  <p className="text-[#5F6B6F] text-xs sm:text-[14px] lg:text-[15px] font-semibold leading-relaxed">
                    {t.bio}
                  </p>

                  {/* 3 Stat Badges */}
                  <div className="flex items-stretch gap-1.5 sm:gap-3.5 pt-1">
                    <StatBadge label="Licensed In" value={t.licensedIn} />
                    <StatBadge label="Evaluation Method" value={t.method} />
                    <StatBadge label="Focus Areas" value={t.focus} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-6 sm:pt-8">
          {therapists.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              aria-label={`Go to therapist ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                idx === activeIndex
                  ? "w-5 h-2.5 bg-[#184652]"
                  : "w-2.5 h-2.5 bg-[#CBD5E1] hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        {/* Separated Bottom Action Buttons (Directly below Carousel & Dots) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 sm:pt-10">
          {/* Book Appointment */}
          <a
            href="#how-it-works"
            className="w-full sm:w-[225px] h-[48px] rounded-full bg-[#184652] hover:bg-[#133741] text-white font-bold text-[15px] sm:text-[16px] transition-all flex items-center justify-between pl-6 pr-2 shadow-sm"
          >
            <span>Book Appointment</span>
            <span className="w-[32px] h-[32px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
              <Image
                src="/send-icon.svg"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4 object-contain"
              />
            </span>
          </a>

          {/* View Profile */}
          <a
            href="#how-it-works"
            className="w-full sm:w-[168px] h-[48px] rounded-full bg-[#E8B92C] hover:bg-[#dba81f] text-[#184652] font-bold text-[15px] sm:text-[16px] transition-all flex items-center justify-between pl-6 pr-2 shadow-sm"
          >
            <span>View Profile</span>
            <span className="w-[32px] h-[32px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
              <Image
                src="/send-icon.svg"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4 object-contain"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
