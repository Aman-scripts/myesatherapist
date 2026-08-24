"use client";

import React, { useState } from "react";
import Image from "next/image";

const reviews = [
  {
    id: "vId0sRVPY0I",
    name: "Marianne C",
    quote:
      "“I received a legitimate letter that was approved by my landlord in no time. Myla gets to stay with me, and that means everything.”",
  },
  {
    id: "gxdipq0J2No",
    name: "David K",
    quote:
      "“The evaluation was simple, professional, and thorough. I felt truly listened to and supported throughout the entire process.”",
  },
  {
    id: "Mjf33Y0NvVc",
    name: "Sarah M",
    quote:
      "“Having my ESA documentation gave me peace of mind in my apartment. The telehealth consultation was quick and very reassuring.”",
  },
];

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

function YouTubePlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 68 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M66.52 7.74c-.78-2.93-3.09-5.24-6.02-6.02C55.22 0 34 0 34 0S12.78 0 7.5 1.72c-2.93.78-5.24 3.09-6.02 6.02C0 13.02 0 24 0 24s0 10.98 1.48 16.26c.78 2.93 3.09 5.24 6.02 6.02C12.78 48 34 48 34 48s21.22 0 26.5-1.72c2.93-.78 5.24-3.09 6.02-6.02C68 34.98 68 24 68 24s0-10.98-1.48-16.26z"
        fill="#FF0000"
      />
      <polygon points="45,24 27,14 27,34" fill="#FFFFFF" />
    </svg>
  );
}

export function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-[#EEEBE0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 space-y-2.5 max-w-[850px] mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1A3D4F] leading-tight tracking-[-0.006em]">
            See What Our Clients Say
          </h2>
          <p className="text-[#5F6B6F] text-base sm:text-[18px] font-semibold leading-relaxed">
            Here’s what our clients say about their experience.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1100px] mx-auto">
          {reviews.map((review) => {
            const isPlaying = activeVideo === review.id;

            return (
              <div
                key={review.id}
                className="bg-white rounded-[28px] overflow-hidden shadow-[0_15px_35px_-5px_rgba(26,61,79,0.18)] border border-[#E2E8F0] flex flex-col"
              >
                {/* Video Area (Top) */}
                <div
                  className="relative w-full aspect-[9/12] sm:aspect-[9/11] bg-black cursor-pointer group overflow-hidden"
                  onClick={() => setActiveVideo(review.id)}
                >
                  {isPlaying ? (
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${review.id}?autoplay=1&rel=0`}
                      title={review.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      {/* Video Thumbnail */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://img.youtube.com/vi/${review.id}/hqdefault.jpg`}
                        alt={review.name}
                        className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                      />

                      {/* Dark Gradient Overlay for Name Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

                      {/* YouTube Center Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <YouTubePlayIcon className="w-16 h-12 drop-shadow-lg transition-transform duration-200 group-hover:scale-110" />
                      </div>

                      {/* Client Name at bottom of video */}
                      <div className="absolute inset-x-0 bottom-4 text-center z-10 px-4">
                        <span className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-[-0.01em] drop-shadow-md">
                          {review.name}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Solid Dark Teal Quote Box (Bottom) */}
                <div className="bg-[#1A4D59] px-6 py-6 text-center flex-1 flex items-center justify-center min-h-[140px]">
                  <p className="text-white text-sm sm:text-base font-semibold leading-relaxed max-w-[300px] mx-auto">
                    {review.quote}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots Pagination + See More Reviews CTA */}
        <div className="flex flex-col items-center gap-6 mt-12 lg:mt-14">
          <div className="flex items-center gap-2">
            <div className="w-[6px] h-[6px] rounded-full bg-[#E8B92C]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#1A3D4F]" />
            <div className="w-[6px] h-[6px] rounded-full bg-[#E8B92C]" />
          </div>

          <a
            href="#"
            className="flex items-center gap-3 pl-7 pr-2 py-2 rounded-full text-white font-semibold text-base transition-opacity hover:opacity-90 shadow-md min-h-[48px]"
            style={{ backgroundImage: TEAL_GRADIENT }}
          >
            <span>See More Reviews</span>
            <span className="w-[36px] h-[36px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
              <Image src="/send-icon.svg" alt="" width={19} height={21} className="w-[19px] h-[21px]" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
