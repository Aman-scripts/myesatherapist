"use client";

import React, { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "“Finally, a legitimate ESA service! My therapist was professional and understanding. Got my letter in under 24 hours and my landlord accepted it immediately.”",
    author: "Jason T., Texas",
    avatar: "/about_us-trusted-section-one.jpg",
  },
  {
    quote:
      "“The video consultation was smooth and respectful. The therapist listened to all my anxiety concerns and provided an official letter that answered every landlord requirement.”",
    author: "Sarah M., California",
    avatar: "/about_us-trusted-section-two.jpg",
  },
  {
    quote:
      "“Extremely transparent and HIPAA compliant. No hidden fees or fake ID card upselling like other sites. Truly professional healthcare service!”",
    author: "David K., Florida",
    avatar: "/about_us-trusted-section-one.jpg",
  },
];

export function AboutTestimonialSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = testimonials[activeIdx] || testimonials[0];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 xl:py-24 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-12 sm:mb-14 lg:mb-16 space-y-3 sm:space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[38px] xl:text-[44px] font-bold text-[#2E5A66] leading-tight lg:leading-[48px] xl:leading-[54px] tracking-[-0.00015em]">
            Trusted by Thousands of Pet Owners
          </h2>
          <p className="font-sans font-semibold text-sm sm:text-base lg:text-[16px] xl:text-[18px] text-[#5F6B6F] leading-relaxed lg:leading-[26px] xl:leading-[30px] max-w-[700px] mx-auto">
            See how our legitimate ESA evaluations have helped pet owners across the nation.
          </p>
        </div>

        {/* Testimonial Card Container */}
        <div className="max-w-[760px] xl:max-w-[820px] mx-auto flex flex-col items-center">
          {/* Gradient Speech Bubble Card */}
          <div className="relative w-full">
            <div
              className="w-full rounded-[20px] shadow-[0px_8px_24px_rgba(26,61,79,0.12)] p-5 sm:p-8 lg:p-10 flex flex-col items-center text-center space-y-3.5 sm:space-y-4 xl:space-y-5"
              style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              {/* 5 Stars */}
              <div className="flex items-center gap-1.5 justify-center">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Image
                    key={s}
                    src="/about_us-staricon-filled.svg"
                    alt="Star"
                    width={24}
                    height={24}
                    unoptimized
                    className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 xl:w-6 xl:h-6"
                  />
                ))}
              </div>

              {/* Quote Text */}
              <p className="font-sans font-semibold text-sm sm:text-base lg:text-[17px] xl:text-[18px] text-[#FAF7F2] leading-[24px] sm:leading-[26px] xl:leading-[30px] max-w-[720px]">
                {current.quote}
              </p>
            </div>

            {/* Bubble Pointer Arrow Tail */}
            <div className="w-0 h-0 border-l-[12px] sm:border-l-[14px] border-l-transparent border-r-[12px] sm:border-r-[14px] border-r-transparent border-t-[12px] sm:border-t-[14px] border-t-[#1D6E72] mx-auto" />
          </div>

          {/* Author Details */}
          <div className="flex flex-col items-center mt-4 sm:mt-5 space-y-2.5 text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 xl:w-16 xl:h-16 rounded-full border-3 sm:border-4 border-white shadow-md overflow-hidden relative bg-[#E8F0F1]">
              <Image
                src={current.avatar}
                alt={current.author}
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            <h4 className="font-heading font-bold text-lg sm:text-xl xl:text-2xl text-[#2E5A66]">
              {current.author}
            </h4>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5 pt-0.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`transition-all duration-200 rounded-full ${
                    activeIdx === idx
                      ? "w-5 sm:w-6 h-2 bg-[#2E5A66]"
                      : "w-2 h-2 bg-[#D9D9D9] hover:bg-[#AEBBBE]"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
