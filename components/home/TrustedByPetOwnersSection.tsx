"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { InitialsAvatar } from "@/components/common/InitialsAvatar";
import { ALL_REVIEWS } from "@/data/trustpilotReviews";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

interface TestimonialItem {
  quote: string;
  name: string;
  avatar?: string;
  /** Star rating out of 5 (defaults to 5). */
  rating?: number;
}

const TESTIMONIALS: TestimonialItem[] = ALL_REVIEWS.map((r) => ({ quote: r.quote, name: r.name, rating: r.rating }));

interface Props {
  bgColor?: string;
  stateName?: string;
  title?: string;
  subtitle?: string;
  testimonials?: TestimonialItem[];
}

export function TrustedByPetOwnersSection({
  bgColor = "bg-[#FFFFFF]",
  stateName,
  title,
  subtitle,
  testimonials,
}: Props) {
  const list = testimonials && testimonials.length > 0 ? testimonials : TESTIMONIALS;
  const [activeIdx, setActiveIdx] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 45;

  const nextSlide = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % list.length);
  }, [list.length]);

  const prevSlide = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + list.length) % list.length);
  }, [list.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };


  const current = list[activeIdx] || list[0];

  const displayTitle = title || (stateName ? `Trusted by Thousands of Pet Owners in ${stateName}` : "Trusted by Thousands of Pet Owners");
  const displaySubtitle = subtitle || "See why so many clients trust MY ESA for their ESA needs. Real stories from real people who experienced our process firsthand.";

  return (
    <section className={`w-full ${bgColor} py-14 sm:py-18 xl:py-[63px] overflow-hidden`}>
      <div className="max-w-[1436px] mx-auto px-4 sm:px-8 xl:px-[319px]">
        {/* Frame 1261153623: Inner Column */}
        <div className="max-w-[798px] mx-auto flex flex-col items-center gap-10">
          {/* Heading Container (709px x 130px) */}
          <div className="text-center max-w-[709px] mx-auto space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl xl:text-[44px] font-bold text-[#2E5A66] leading-tight xl:leading-[54px] tracking-[-0.00015em]">
              {displayTitle}
            </h2>
            <p className="font-sans font-semibold text-sm sm:text-base xl:text-[18px] text-[#5F6B6F] leading-relaxed xl:leading-[30px]">
              {displaySubtitle}
            </p>
          </div>

          {/* Reviews card (798px x 307px) */}
          <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="w-full max-w-[798px] flex flex-col items-center gap-6 select-none"
          >
            {/* Text+Stars: Gradient Speech Bubble */}
            <div className="w-full relative">
            <button
              type="button"
              onClick={prevSlide}
              className="absolute top-[calc(50%-7px)] -translate-y-1/2 -left-3 sm:-left-14 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#D5CEC4] bg-white text-[#2E5A66] hover:bg-[#FAF7F2] flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="absolute top-[calc(50%-7px)] -translate-y-1/2 -right-3 sm:-right-14 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#D5CEC4] bg-white text-[#2E5A66] hover:bg-[#FAF7F2] flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
            </button>
              <div
                className="w-full rounded-[20px] shadow-[0px_4px_10px_rgba(82,82,82,0.1)] p-6 sm:p-[24px] flex flex-col items-center text-center gap-3 transition-all duration-300 min-h-[148px]"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                {/* 5 Stars (24px) */}
                <div className="flex items-center justify-center gap-1 h-[24px]">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <svg key={s} width="24" height="24" viewBox="0 0 24 24" fill={s < (current.rating ?? 5) ? "#FDD264" : "#FFEEC1"} className="w-6 h-6">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-sans font-semibold text-[15px] sm:text-[16px] text-[#FAF7F2] leading-[24px] sm:leading-[26px] max-w-[750px] mx-auto">
                  {current.quote}
                </p>
              </div>

              {/* Centered Speech Bubble Tail */}
              <div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[14px] border-t-[#1D6E72] mx-auto" />
            </div>

            {/* Avatar + Name + Dots */}
            <div className="flex flex-col items-center gap-2">
              {/* Avatar (60px x 60px with 4px white border) */}
              <div className="w-[60px] h-[60px] rounded-full border-[4px] border-white shadow-[0_2px_8px_rgba(0,0,0,0.12)] overflow-hidden relative bg-[#E8F0F1] shrink-0">
                {current.avatar ? (
                  <Image
            quality={90} src={current.avatar} alt={current.name} fill className="object-cover" sizes="60px" />
                ) : (
                  <InitialsAvatar name={current.name} index={activeIdx} className="absolute inset-0 text-[20px]" />
                )}
              </div>

              {/* Name */}
              <h3 className="font-heading font-bold text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-[#2E5A66] text-center">
                {current.name}
              </h3>

              <div className="flex items-center justify-center gap-1 ">
                {list.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className="relative flex items-center justify-center w-6 h-6 cursor-pointer"
                    aria-label={`Go to review ${idx + 1}`}
                  >
                    <span
                      className={`block transition-all duration-300 rounded-full ${
                        activeIdx === idx
                          ? "w-[8px] h-[8px]"
                          : "w-[5px] h-[5px] bg-[#D9D9D9] hover:bg-[#BDBDBD]"
                      }`}
                      style={activeIdx === idx ? { backgroundImage: TEAL_GRADIENT } : undefined}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
