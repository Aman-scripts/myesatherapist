"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "“Finally, a legitimate ESA service! My therapist was professional and understanding. Got my letter in under 24 hours and my landlord accepted it immediately.”",
    name: "Jason T., Texas",
    location: "Texas",
    avatar: "/about_us-trusted-section-one.jpg",
  },
  {
    quote:
      "“The video consultation was smooth and respectful. The therapist listened to all my anxiety concerns and provided an official letter that answered every landlord requirement.”",
    name: "Sarah M., California",
    location: "California",
    avatar: "/about_us-trusted-section-two.jpg",
  },
  {
    quote:
      "“Extremely transparent and HIPAA compliant. No hidden fees or fake ID card upselling like other sites. Truly professional healthcare service!”",
    name: "David K., Florida",
    location: "Florida",
    avatar: "/about_us-trusted-section-one.jpg",
  },
];

export function AboutTestimonialSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

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
        {/* Carousel Container                                   */}
        {/* ---------------------------------------------------- */}
        <div className="max-w-[360px] sm:max-w-[500px] md:max-w-[620px] lg:max-w-[720px] mx-auto flex flex-col items-center">
          {/* Main Card Wrapper */}
          <div className="w-full">
            {/* Gradient Speech Bubble Box */}
            <div
              className="w-full rounded-[20px] shadow-[0px_4px_16px_rgba(26,61,79,0.12)] p-6 sm:p-7 md:p-8 flex flex-col items-start text-left space-y-3.5 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              {/* Top Row: Google Logo + 5 Golden Stars */}
              <div className="flex items-center gap-2.5">
                {/* Google "G" Icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>

                {/* 5 Golden Yellow Stars */}
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} width="20" height="20" viewBox="0 0 24 24" fill="#FDD264">
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
                <Image
                  src={current.avatar}
                  alt={current.name}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              {/* Name and State */}
              <div className="flex flex-col text-left">
                <h4 className="font-heading font-bold text-[18px] sm:text-[20px] text-[#2C2C2C] leading-tight">
                  {current.name}
                </h4>
                <span className="font-sans font-normal text-[14px] sm:text-[16px] text-[#777777] mt-0.5">
                  {current.location}
                </span>
              </div>
            </div>

            {/* Carousel Navigation Arrows */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#D5CEC4] bg-white text-[#2E5A66] hover:bg-[#FAF7F2] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#D5CEC4] bg-white text-[#2E5A66] hover:bg-[#FAF7F2] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                aria-label="Next Review"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
              </button>
            </div>
          </div>

          {/* Pagination Indicators */}
          <div className="flex items-center gap-1.5 mt-5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`transition-all duration-200 rounded-full cursor-pointer ${
                  activeIdx === idx
                    ? "w-6 h-2 bg-[#2E5A66]"
                    : "w-2 h-2 bg-[#D9D9D9] hover:bg-[#AEBBBE]"
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
