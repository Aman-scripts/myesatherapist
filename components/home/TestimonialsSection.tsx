"use client";

import React from "react";
import Image from "next/image";
import { Send } from "lucide-react";

const testimonials = [
  {
    name: "Marianne C",
    quote:
      '"I received a legitimate letter that was approved by my landlord in no time. Myla gets to stay with me, and that means everything."',
  },
  {
    name: "Marianne C",
    quote:
      '"I received a legitimate letter that was approved by my landlord in no time. Myla gets to stay with me, and that means everything."',
  },
  {
    name: "Marianne C",
    quote:
      '"I received a legitimate letter that was approved by my landlord in no time. Myla gets to stay with me, and that means everything."',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14 space-y-2">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-primary">
            See What Our Clients Say
          </h2>
          <p className="text-ink-soft text-sm sm:text-base font-sans font-semibold">
            Here&rsquo;s what our clients say about their experience.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative rounded-[20px] overflow-hidden shadow-[0_10px_30px_-8px_rgba(46,90,102,0.2)] h-[419px]"
            >
              {/* Photo */}
              <Image
                src="/testimonial-client-photo.png"
                alt={t.name}
                fill
                sizes="(max-width: 640px) 100vw, 340px"
                className="object-cover"
              />
              {/* Gradient overlay for name */}
              <div className="absolute inset-x-0 bottom-[143px] h-[160px] bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute left-4 sm:left-6 bottom-[160px]">
                <span className="font-heading text-2xl sm:text-[28px] font-bold text-white">
                  {t.name}
                </span>
              </div>
              {/* Teal quote box */}
              <div className="absolute inset-x-0 bottom-0 h-[143px] bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] px-5 sm:px-6 py-4 flex items-center">
                <p className="text-warm-bg text-sm font-sans font-semibold leading-relaxed">
                  {t.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots + Button */}
        <div className="flex flex-col items-center gap-5 mt-10">
          <div className="flex items-center gap-2">
            <div className="w-[5px] h-[5px] rounded-full bg-gold" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-[5px] h-[5px] rounded-full bg-gold" />
          </div>
          <a
            href="#"
            className="flex items-center gap-3 px-7 py-3 rounded-full bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] text-white font-sans font-semibold text-sm sm:text-base hover:opacity-90 transition-opacity shadow-md"
          >
            See More Reviews
            <span className="w-6 h-6 rounded-full border-2 border-white/40 flex items-center justify-center">
              <Send className="w-3.5 h-3.5 text-white -rotate-12" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
