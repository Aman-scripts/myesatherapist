"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { CtaButton } from "@/components/common/CtaButton";

const reviews = [
  {
    id: "vId0sRVPY0I",
    name: "Constance",
    quote:
      "“Looking for an ESA letter in Houston was stressful until I found My ESA Therapist. The process was fast, legitimate, and stress-free.”",
  },
  {
    id: "gxdipq0J2No",
    name: "Leighann",
    quote:
      "“The doctor was kind and patient during my consultation. The entire experience was smooth, legitimate, and completely stress-free.”",
  },
  {
    id: "Mjf33Y0NvVc",
    name: "April E",
    quote:
      "“Customer service was responsive from the start. The consultation was authentic, licensed, and completed without any hassle.”",
  },
];

const TEAL_GRADIENT = "var(--color-gradient)";

export function YouTubePlayIcon({ className }: { className?: string }) {
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

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function TestimonialsSection({
  title = "See What Our Clients Say",
  subtitle = "Here’s what our clients say about their experience.",
  buttonText = "See More Reviews",
  buttonHref = "/reviews",
}: TestimonialsSectionProps = {}) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      if (width > 0) {
        const index = Math.round(scrollLeft / (width * 0.85));
        setCurrentIndex(Math.min(index, reviews.length - 1));
      }
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const child = scrollRef.current.children[index] as HTMLElement;
      if (child) {
        child.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
        setCurrentIndex(index);
      }
    }
  };

  return (
    <section className="py-16 lg:py-20 xl:py-24 bg-background overflow-hidden">
      {/* Frame 1000011700: Section Container */}
      <div className="max-w-[1251px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-10 lg:gap-14 xl:gap-[72px]">
        {/* Frame 1000011447: Section Header */}
        <div className="flex flex-col items-center text-center gap-2 max-w-[512px] mx-auto">
          <h2 className="heading-h2 capitalize">
            {title}
          </h2>
          <p className="body-large max-w-[432px]">
            {subtitle}
          </p>
        </div>

        {/* Frame 1000011697: Content Wrapper (Cards + Dots + CTA Button) */}
        <div className="flex flex-col items-center gap-8 w-full max-w-[1005px]">
          {/* Frame 1000011695: Cards + Dots Wrapper */}
          <div className="flex flex-col items-center gap-4 w-full max-w-[1005px]">
            {/* Frame 1000011695: Cards Row */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex lg:grid lg:grid-cols-3 gap-6 lg:gap-5 xl:gap-[45px] w-full max-w-[1005px] overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-2 lg:pb-0 px-2 lg:px-0 scrollbar-none justify-items-center"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {reviews.map((review) => {
                const isPlaying = activeVideo === review.id;

                return (
                  <div
                    key={review.id}
                    className="w-[85vw] sm:w-[320px] lg:w-[300px] xl:w-[306px] h-[419px] shrink-0 snap-center bg-white rounded-[20px] overflow-hidden shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex flex-col justify-between relative"
                  >
                    {/* Top Area: Video / Thumbnail (276px high to match 419px - 143px = 276px exactly) */}
                    <div
                      className="relative w-full h-[276px] shrink-0 bg-black cursor-pointer group overflow-hidden"
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
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                          />

                          {/* Frame 28: Gradient Overlay */}
                          <div
                            className="absolute inset-x-0 bottom-0 h-[150px] pointer-events-none"
                            style={{
                              background:
                                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.95) 100%)",
                            }}
                          />

                          {/* YouTube Center Play Button */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <YouTubePlayIcon className="w-16 h-12 drop-shadow-lg transition-transform duration-200 group-hover:scale-110" />
                          </div>

                          {/* Client Name (Playfair Display 28px/36px) */}
                          <div className="absolute inset-x-0 bottom-[11px] text-center z-10 px-3 pointer-events-none">
                            <h4 className="heading-h3 text-white text-center drop-shadow-md">
                              {review.name}
                            </h4>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Frame 29: Solid Teal Gradient Quote Box (143px high exactly) */}
                    <div
                      className="w-full h-[143px] shrink-0 flex flex-col items-center justify-center px-[17.5px] rounded-b-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.25)] color-gradient selection:bg-white/30 selection:text-white"
                    >
                      <p className="body-text text-background text-center w-[271px] max-w-[271px] selection:bg-white/30 selection:text-white">
                        {review.quote}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Frame 123: Pagination Dots */}
            <div className="flex items-center justify-center gap-[6px] h-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="relative flex items-center justify-center p-0 cursor-pointer"
                >
                  <span
                    className={`block transition-all duration-300 rounded-full ${
                      currentIndex === idx
                        ? "w-[8px] h-[8px] bg-primary"
                        : "w-[5px] h-[5px] bg-accent opacity-50 hover:opacity-100"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Frame 1000011890: CTA Button */}
          <div className="flex flex-col items-center">
            <CtaButton href={buttonHref} className="w-auto">
              {buttonText}
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
