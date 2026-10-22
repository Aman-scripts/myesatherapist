"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CtaButton } from "@/components/common/CtaButton";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="4.98" cy="4.98" r="2.4" />
      <rect x="2.8" y="9.5" width="4.4" height="12.5" rx="0.5" />
      <path d="M10.5 9.5h4.2v1.8c.6-1.1 2-2.1 4.1-2.1 4.4 0 5.2 2.9 5.2 6.6v6.2h-4.4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6h-4.4V9.5z" />
    </svg>
  );
}

export interface Therapist {
  id?: number | string;
  name: string;
  title: string;
  bio: string;
  licensedIn: string;
  method?: string;
  focus: string;
  avatar?: string;
  linkedin?: string;
}

export function getTherapistAvatar(t: Therapist): string {
  if (t.avatar && t.avatar !== "/common/therapist-avatar.webp") return t.avatar;
  const lower = t.name.toLowerCase();
  if (lower.includes("robert") || lower.includes("staaf")) {
    return "/doctors/Robert_Staff_Dr.webp";
  }
  if (lower.includes("leslie") || lower.includes("gamble")) {
    return "/doctors/Leslie_kgamble_Dr.webp";
  }
  if (lower.includes("gaurav") || lower.includes("patel")) {
    return "/doctors/Gaurav_patel_Dr.webp";
  }
  return t.avatar || "/common/therapist-avatar.webp";
}

export function getTherapistLinkedin(t: Therapist): string {
  if (t.linkedin) return t.linkedin;
  const lower = t.name.toLowerCase();
  if (lower.includes("robert") || lower.includes("staaf")) {
    return "https://www.linkedin.com/in/robert-staaf-b57b53333/";
  }
  if (lower.includes("leslie") || lower.includes("gamble")) {
    return "https://www.linkedin.com/in/leslie-gamble-727571366";
  }
  if (lower.includes("gaurav") || lower.includes("patel")) {
    return "https://www.linkedin.com/in/gaurav-patel-m-d-b5565916";
  }
  return "https://www.linkedin.com/company/myesatherapist/";
}

/** Internal doctor profile page for a therapist. */
export function getTherapistProfileHref(t: Therapist): string {
  const lower = t.name.toLowerCase();
  if (lower.includes("robert") || lower.includes("staaf")) return "/esa-doctors/dr-robert-staff/";
  if (lower.includes("leslie") || lower.includes("gamble")) return "/esa-doctors/dr-leslie-k-gamble/";
  if (lower.includes("gaurav") || lower.includes("patel")) return "/esa-doctors/dr-gaurav-patel/";
  return "/esa-doctors/";
}

const defaultTherapists: Therapist[] = [
  {
    id: 1,
    name: "Robert Staaf",
    title: "Licensed Clinical Social Worker",
    bio: "LCSW with extensive psychotherapy experience. Pet owner and advocate for animal-assisted mental health treatment.",
    licensedIn: "30+ States",
    method: "Video or Phone",
    focus: "Anxiety & Stress",
    avatar: "/doctors/Robert_Staff_Dr.webp",
    linkedin: "https://www.linkedin.com/in/robert-staaf-b57b53333/",
  },
  {
    id: 2,
    name: "Leslie K. Gamble",
    title: "Licensed Independent Clinical Social Worker",
    bio: "Licensed therapist with 13 years of healthcare experience serving individuals, couples, and families with flexible, goal-focused care.",
    licensedIn: "15+ States",
    method: "Video or Phone",
    focus: "Depression & PTSD",
    avatar: "/doctors/Leslie_kgamble_Dr.webp",
    linkedin: "https://www.linkedin.com/in/leslie-gamble-727571366",
  },
  {
    id: 3,
    name: "Gaurav Patel, MD",
    title: "Family Medicine Physician",
    bio: "Board-certified family medicine physician with experience providing evidence-based, patient-focused care across inpatient, urgent care, outpatient, and telemedicine settings.",
    licensedIn: "17 States",
    method: "Video or Phone",
    focus: "Chronic Conditions & Sleep Concerns",
    avatar: "/doctors/Gaurav_patel_Dr.webp",
    linkedin: "https://www.linkedin.com/in/gaurav-patel-m-d-b5565916",
  },
];

function StatBadge({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: string;
}) {
  const iconSrc =
    icon ||
    (label.toLowerCase().includes("licensed")
      ? "/home/doctor_professionals_licensedin_icon.svg"
      : label.toLowerCase().includes("evaluation") || label.toLowerCase().includes("method")
      ? "/home/doctor_professionals_evaluationmethod_icon.svg"
      : label.toLowerCase().includes("focus") || label.toLowerCase().includes("area")
      ? "/home/doctor_professionals_focusarea_icon.svg"
      : "/common/therapist-section-badge.svg");

  return (
    <div className="relative flex-1 min-w-0 rounded-[7.6px] bg-accent pt-[3px] shadow-[0px_0.76px_1.52px_rgba(0,0,0,0.15)] flex flex-col">
      <div className="bg-white rounded-[7.6px] pt-[20px] sm:pt-[22px] pb-2 px-1 sm:px-2 text-center flex-1 flex flex-col justify-start items-center relative shadow-[0px_0.76px_1.52px_rgba(0,0,0,0.15)] min-h-[62px] sm:min-h-[66px]">
        {/* Floating badge icon at top center */}
        <div className="absolute -top-[15px] sm:-top-[16px] left-1/2 -translate-x-1/2 w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] rounded-full bg-white shadow-[0px_0.95px_1.89px_rgba(0,0,0,0.25)] flex items-center justify-center z-10 border border-background">
          <Image
            src={iconSrc}
            alt=""
            width={16}
            height={16}
            unoptimized
            className="object-contain w-3.5 h-3.5 sm:w-4 sm:h-4"
          />
        </div>
        <div className="body-small text-color-gradient truncate w-full">
          {label}
        </div>
        <div className="body-small truncate w-full">
          {value}
        </div>
      </div>
    </div>
  );
}

interface TherapistsSectionProps {
  title?: string;
  subtitle?: string;
  licensureNote?: string;
  refundText?: string | null;
  therapistsList?: Therapist[];
  bgColor?: string;
  className?: string;
}

export function TherapistsSection({
  title = "Our Licensed Mental Health Professionals",
  subtitle = "We connect individuals with licensed mental health professionals who are qualified to conduct evaluations and provide recommendations when clinically appropriate.",
  licensureNote = "A Note on Licensure Levels: Depending on their state of origin, a social worker or counselor may have a variety of titles, such as Licensed Clinical Social Worker (LCSW), Licensed Independent Clinical Social Worker (LICSW), etc. These are comparable licensure levels.",
  refundText = "If not approved after your evaluation? You get a full refund.",
  therapistsList,
  bgColor = "bg-white",
  className = "",
}: TherapistsSectionProps) {
  const therapists = therapistsList && therapistsList.length > 0 ? therapistsList : defaultTherapists;
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth < 640 ? 1 : 2);
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, therapists.length - cardsPerView);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const card = el.querySelector("div[data-card]") as HTMLElement;
    if (!card) return;
    const cardWidth = card.clientWidth;
    const style = window.getComputedStyle(el);
    const gap = parseFloat(style.columnGap || style.gap) || 24;
    const scrollLeft = el.scrollLeft;
    const newIdx = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(Math.max(0, newIdx), maxIndex));
  };

  const scrollToSlide = (idx: number) => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const card = el.querySelector("div[data-card]") as HTMLElement;
    if (!card) return;
    const cardWidth = card.clientWidth;
    const style = window.getComputedStyle(el);
    const gap = parseFloat(style.columnGap || style.gap) || 24;
    const clampedIdx = Math.min(Math.max(0, idx), maxIndex);
    el.scrollTo({
      left: clampedIdx * (cardWidth + gap),
      behavior: "smooth",
    });
    setActiveIndex(clampedIdx);
  };

  const handlePrev = () => {
    scrollToSlide(activeIndex - 1);
  };

  const handleNext = () => {
    scrollToSlide(activeIndex + 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [maxIndex]);

  return (
    <section className={`py-16 lg:py-20 xl:py-24 ${bgColor} overflow-hidden ${className}`}>
      <div className="max-w-[1279px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 lg:mb-10 space-y-3 max-w-[852px] mx-auto">
          <h2 className="heading-h2 capitalize">
            {title}
          </h2>
          <p className="body-large max-w-[813px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Licensure Note */}
        {licensureNote && (
          <div className="max-w-[950px] mx-auto mb-10 p-4 sm:p-4.5 rounded-[16px] bg-background border border-accent/30 text-center">
            <p className="body-small leading-relaxed">
              {/^A Note on Licensure Levels:?/i.test(licensureNote) ? (
                <>
                  <strong className="font-bold text-primary">
                    {licensureNote.match(/^A Note on Licensure Levels:?/i)?.[0]}
                  </strong>{" "}
                  {licensureNote.replace(/^A Note on Licensure Levels:?\s*/i, "")}
                </>
              ) : (
                licensureNote
              )}
            </p>
          </div>
        )}

        {/* Therapist Carousel with Navigation Arrows */}
        <div className="relative flex items-center justify-center gap-3 sm:gap-4 lg:gap-5 w-full">
          {/* Desktop/Tablet Prev Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous therapist"
            className={`hidden sm:flex w-11 h-11 xl:w-12 xl:h-12 rounded-full bg-background items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all ${
              activeIndex === 0
                ? "opacity-35 cursor-not-allowed"
                : "hover:bg-accent hover:text-primary hover:shadow-[0_4px_12px_rgba(232,185,44,0.3)] hover:scale-105 cursor-pointer"
            }`}
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>

          {/* Viewport Wrapper: sized so exactly 2 cards fit side-by-side */}
          <div className="w-full max-w-[1070px] overflow-hidden">
            <div
              ref={scrollRef}
              className="flex items-stretch gap-5 sm:gap-6 lg:gap-8 xl:gap-[32px] overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 pt-3 px-1"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {therapists.map((t, idx) => {
                return (
                  <div
                    key={t.id ?? `${t.name}-${idx}`}
                    data-card
                    onClick={() => scrollToSlide(idx)}
                    className="snap-start shrink-0 w-[86vw] sm:w-[calc(50%-12px)] lg:w-[519px] lg:min-h-[355px] rounded-[30px] overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer border-2 border-accent bg-white shadow-[0px_1px_4px_rgba(0,0,0,0.15)]"
                  >
                    {/* Teal Header Bar */}
                    <div
                      className="px-4 sm:px-6 py-3.5 sm:py-4 xl:h-[92px] flex items-center justify-between gap-3 sm:gap-4 color-gradient"
                    >
                      <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                        <div className="w-[56px] h-[56px] sm:w-[67px] sm:h-[67px] rounded-full border-[2.82px] border-accent overflow-hidden shrink-0 relative bg-white/10 shadow-sm">
                          <Image
                            quality={90}
                            src={getTherapistAvatar(t)}
                            alt={t.name}
                            fill
                            sizes="67px"
                            className="object-cover object-center"
                          />
                        </div>
                        <div className="min-w-0">
                          <h3 className="heading-h3 text-background truncate">
                            {t.name}
                          </h3>
                          <div className="text-accent body-large truncate mt-0.5">
                            {t.title}
                          </div>
                        </div>
                      </div>

                      {/* LinkedIn Badge */}
                      <a
                        href={getTherapistLinkedin(t)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`${t.name} LinkedIn Profile`}
                        className="w-8 h-8 rounded-full bg-accent hover:bg-[#dba81f] flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 cursor-pointer"
                      >
                        <LinkedinIcon className="w-4 h-4 text-primary" />
                      </a>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 sm:p-6 bg-white space-y-5 flex-1 flex flex-col justify-between">
                      {/* Bio text */}
                      <p className="body-text">
                        {t.bio}
                      </p>

                      {/* 3 Stat Badges */}
                      <div className="flex items-stretch gap-2 sm:gap-3.5 pt-3 sm:pt-3.5">
                        <StatBadge
                          label="Licensed In"
                          value={t.licensedIn}
                          icon="/home/doctor_professionals_licensedin_icon.svg"
                        />
                        <StatBadge
                          label="Evaluation Method"
                          value={t.method || "Video or Phone"}
                          icon="/home/doctor_professionals_evaluationmethod_icon.svg"
                        />
                        <StatBadge
                          label="Focus Areas"
                          value={t.focus}
                          icon="/home/doctor_professionals_focusarea_icon.svg"
                        />
                      </div>

                      {/* View Profile CTA Button INSIDE the Card */}
                      <div className="pt-2 flex justify-center">
                        <CtaButton
                          href={getTherapistProfileHref(t)}
                          variant="accent"
                          className="w-[192px]"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Profile
                        </CtaButton>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop/Tablet Next Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={activeIndex >= maxIndex}
            aria-label="Next therapist"
            className={`hidden sm:flex w-11 h-11 xl:w-12 xl:h-12 rounded-full bg-background items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all ${
              activeIndex >= maxIndex
                ? "opacity-35 cursor-not-allowed"
                : "hover:bg-accent hover:text-primary hover:shadow-[0_4px_12px_rgba(232,185,44,0.3)] hover:scale-105 cursor-pointer"
            }`}
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>
        </div>

        {/* Mobile Controls Bar (Prev + Dots + Next) */}
        <div className="flex sm:hidden items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous therapist"
            className={`w-9 h-9 rounded-full bg-background flex items-center justify-center shadow-xs transition-opacity ${
              activeIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-accent cursor-pointer"
            }`}
          >
            <ChevronLeft className="w-4 h-4 text-primary" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="w-5 h-5 flex items-center justify-center cursor-pointer"
              >
                <span
                  className={`block transition-all duration-300 rounded-full ${
                    idx === activeIndex
                      ? "w-5 h-2 bg-[#184652]"
                      : "w-2 h-2 bg-[#CBD5E1]"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={activeIndex >= maxIndex}
            aria-label="Next therapist"
            className={`w-9 h-9 rounded-full bg-background flex items-center justify-center shadow-xs transition-opacity ${
              activeIndex >= maxIndex ? "opacity-30 cursor-not-allowed" : "hover:bg-accent cursor-pointer"
            }`}
          >
            <ChevronRight className="w-4 h-4 text-primary" />
          </button>
        </div>

        {/* Desktop Carousel Pagination Dots */}
        <div className="hidden sm:flex items-center justify-center gap-2.5 pt-6 sm:pt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="relative flex items-center justify-center w-6 h-6 cursor-pointer"
            >
              <span
                className={`block transition-all duration-300 rounded-full ${
                  idx === activeIndex
                    ? "w-6 h-2.5 bg-[#184652]"
                    : "w-2.5 h-2.5 bg-[#CBD5E1] hover:bg-[#94A3B8]"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Bottom Book Appointment Button */}
        <div className="flex flex-col items-center gap-2 pt-8 sm:pt-10">
          <CtaButton href="#how-it-works" className="w-[232px]">
            Book Appointment
          </CtaButton>
          {refundText && (
            <p className="body-small text-center">
              {refundText}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
