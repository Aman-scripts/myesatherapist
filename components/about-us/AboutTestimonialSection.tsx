"use client";

import React, { useState, useCallback } from "react";
import { InitialsAvatar } from "@/components/common/InitialsAvatar";
import { ALL_REVIEWS } from "@/data/trustpilotReviews";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = ALL_REVIEWS.map((r) => ({
  quote: r.quote,
  name: r.name,
  location: r.location,
  rating: r.rating,
  source: r.source,
}));

export function AboutTestimonialSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 45;

  const nextSlide = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

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


  const current = testimonials[activeIdx] || testimonials[0];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 xl:py-24 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-10 sm:mb-14 lg:mb-16 space-y-3 sm:space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[38px] xl:text-[44px] font-bold text-[#2E5A66] leading-tight lg:leading-[48px] xl:leading-[54px] tracking-[-0.00015em]">
            Trusted by Thousands of Pet Owners
          </h2>
          <p className="font-sans font-semibold text-sm sm:text-base lg:text-[16px] xl:text-[18px] text-[#5F6B6F] leading-relaxed lg:leading-[26px] xl:leading-[30px] max-w-[700px] mx-auto">
            See how our legitimate ESA evaluations have helped pet owners across the nation.
          </p>
        </div>

        {/* ---------------------------------------------------- */}
        {/* Carousel Container (with Touch Swipe)               */}
        {/* ---------------------------------------------------- */}
        <div
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="max-w-[360px] sm:max-w-[500px] md:max-w-[620px] lg:max-w-[720px] mx-auto flex flex-col items-center select-none cursor-grab active:cursor-grabbing"
        >
          {/* Main Card Wrapper */}
          <div className="w-full">
            {/* Gradient Speech Bubble Box */}
            <div
              className="relative w-full rounded-[20px] shadow-[0px_4px_16px_rgba(26,61,79,0.12)] p-6 sm:p-7 md:p-8 flex flex-col items-start text-left space-y-3.5 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              <button
                type="button"
                onClick={prevSlide}
                className="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-14 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#D5CEC4] bg-white text-[#2E5A66] hover:bg-[#FAF7F2] flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-14 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#D5CEC4] bg-white text-[#2E5A66] hover:bg-[#FAF7F2] flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
              </button>
              {/* Top Row: Google Logo + 5 Golden Stars */}
              <div className="flex items-center gap-2.5">
                {/* Google "G" Icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill={current.source === "consumeraffairs" ? "#095691" : "#00B67A"} className="shrink-0" aria-hidden="true">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>

                {/* 5 Golden Yellow Stars */}
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} width="20" height="20" viewBox="0 0 24 24" fill={s <= current.rating ? "#FDD264" : "#FFEEC1"}>
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Quote Text */}
              <p className="font-sans font-semibold text-[15px] sm:text-[16px] md:text-[17px] text-[#FAF7F2] leading-[25px] sm:leading-[26px]">
                {current.quote}
              </p>
            </div>

            {/* Bubble Triangle Tail on the Left Edge (pointing to avatar) */}
            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-[#1D6E72] ml-[34px] sm:ml-[42px]" />
          </div>

          {/* Author Details Row: Avatar on Left + Name & State on Right */}
          <div className="w-full flex items-center justify-between mt-3 px-1">
            <div className="flex items-center gap-3.5 sm:gap-4">
              {/* Circular Avatar */}
              <div className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-full shadow-md overflow-hidden relative bg-[#E8F0F1] shrink-0 border-2 border-white">
                <InitialsAvatar name={current.name} index={activeIdx} className="absolute inset-0 text-[18px] sm:text-[20px]" />
              </div>

              {/* Name and State */}
              <div className="flex flex-col text-left">
                <h3 className="font-heading font-bold text-[18px] sm:text-[20px] text-[#2C2C2C] leading-tight">
                  {current.name}
                </h3>
                <span className="font-sans font-normal text-[14px] sm:text-[16px] text-[#747474] mt-0.5">
                  {current.location}
                </span>
              </div>
            </div>

          </div>

          {/* Pagination Indicators */}
          <div className="flex items-center gap-1.5 mt-5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className="relative flex items-center justify-center w-6 h-6 cursor-pointer"
                aria-label={`Go to review ${idx + 1}`}
              >
                <span
                  className={`block transition-all duration-200 rounded-full ${
                    activeIdx === idx
                      ? "w-6 h-2 bg-[#2E5A66]"
                      : "w-2 h-2 bg-[#D9D9D9] hover:bg-[#AEBBBE]"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
