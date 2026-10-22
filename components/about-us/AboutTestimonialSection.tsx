"use client";

import React, { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { InitialsAvatar } from "@/components/common/InitialsAvatar";

interface TestimonialItem {
  id: number;
  name: string;
  rating: number;
  quote: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "Jason T., Texas",
    rating: 5,
    quote:
      "“Finally, a legitimate ESA service! My therapist was professional and understanding. Got my letter in under 24 hours and my landlord accepted it immediately.”",
  },
  {
    id: 2,
    name: "Laura P., Florida",
    rating: 5,
    quote:
      "“Quick consultation, professional licensed therapist, and my landlord accepted the letter immediately with zero complications.”",
  },
  {
    id: 3,
    name: "Michael R., California",
    rating: 5,
    quote:
      "“The evaluation felt respectful and thorough. Having a licensed clinician in my state assess my situation gave me complete confidence.”",
  },
  {
    id: 4,
    name: "Sarah W., Illinois",
    rating: 5,
    quote:
      "“Transparent pricing, no hidden recurring fees, and excellent support throughout property manager verification. Truly life-changing!”",
  },
  {
    id: 5,
    name: "David K., New York",
    rating: 5,
    quote:
      "“The telehealth session was simple and comfortable. Received my official ESA recommendation securely and on time as promised.”",
  },
];

function GoldStarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
        fill="#FDD264"
      />
    </svg>
  );
}

export function AboutTestimonialSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 45;

  const nextSlide = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
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

  const current = TESTIMONIALS[activeIdx] || TESTIMONIALS[0];

  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20 xl:py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Frame 1261153623: Section Header */}
        <div className="text-center max-w-[709px] mx-auto mb-10 sm:mb-12 space-y-3 sm:space-y-4">
          <h2 className="heading-h2 text-primary">
            Trusted By Thousands Of Pet Owners
          </h2>
          <p className="body-large text-body-text">
            See why so many clients trust MY ESA for their ESA needs.
            <br className="hidden sm:inline" />{" "}
            Real stories from real people who experienced our process firsthand.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="max-w-[808px] mx-auto flex flex-col items-center select-none"
        >
          {/* Main Speech Bubble Wrapper with Navigation Chevrons */}
          <div className="relative w-full">
            {/* Left Chevron Button */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute -left-3 sm:-left-6 md:-left-12 lg:-left-14 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#D5CEC4] bg-white text-primary hover:bg-background flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
            </button>

            {/* Right Chevron Button */}
            <button
              type="button"
              onClick={nextSlide}
              className="absolute -right-3 sm:-right-6 md:-right-12 lg:-right-14 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#D5CEC4] bg-white text-primary hover:bg-background flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
            </button>

            {/* Gradient Card (Union / Rectangle 68) */}
            <div
              className="relative w-full rounded-[20px] p-6 sm:py-7 sm:px-8 md:py-8 md:px-12 flex flex-col items-center text-center shadow-[0px_4px_10px_rgba(82,82,82,0.1)] transition-all duration-300 selection:bg-white/30 selection:text-white"
              style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              {/* 5 Centered Golden Stars */}
              <div className="flex items-center justify-center gap-1 mb-2.5 sm:mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <GoldStarIcon key={s} />
                ))}
              </div>

              {/* Quote Text */}
              <p className="body-text text-background max-w-[760px] mx-auto leading-relaxed selection:bg-white/30 selection:text-white">
                {current.quote}
              </p>
            </div>

            {/* Bubble Triangle Tail Pointing Down toward Avatar */}
            <div className="flex justify-center -mt-[1px]">
              <svg width="36" height="14" viewBox="0 0 36 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 14L4 0H32L18 14Z" fill="#1D6E72" />
              </svg>
            </div>
          </div>

          {/* Reviewer Profile: Initials Avatar + Name */}
          <div className="flex flex-col items-center text-center mt-3.5 sm:mt-4">
            {/* Circular Initials Avatar */}
            <div className="w-[60px] h-[60px] rounded-full shadow-md overflow-hidden relative border-[3px] border-white shrink-0 flex items-center justify-center bg-[#E8F0F1]">
              <InitialsAvatar
                name={current.name}
                index={activeIdx}
                className="w-full h-full heading-h4"
              />
            </div>

            {/* Name, State */}
            <h3 className="heading-h4 text-primary mt-2">
              {current.name}
            </h3>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className="flex items-center justify-center p-1 cursor-pointer"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span
                  className={`block rounded-full transition-all duration-200 ${
                    activeIdx === idx
                      ? "w-2 h-2 color-gradient"
                      : "w-1.5 h-1.5 bg-[#D9D9D9] hover:bg-[#AEBBBE]"
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
