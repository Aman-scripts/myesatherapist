"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is My ESA Therapist Legitimate?",
    a: "Yes. My ESA Therapist connects you with independent, U.S.-licensed mental health professionals authorized to evaluate ESA eligibility. All documentation is issued in compliance with applicable federal guidelines.",
  },
  {
    q: "How Does My ESA Therapist Work?",
    a: "You schedule an appointment, speak with a licensed mental health professional via telehealth, and if clinically appropriate, receive ESA documentation by email.",
  },
  {
    q: "Is My Information Safe With My ESA?",
    a: "Absolutely. We use HIPAA-compliant systems to ensure your personal and health information remains confidential and protected.",
  },
  {
    q: "What Conditions Qualify for an ESA?",
    a: "A licensed mental health professional determines eligibility during your consultation based on conditions such as anxiety, depression, PTSD, and other ADA-recognized conditions.",
  },
  {
    q: "How Long Does the Process Take?",
    a: "Most evaluations are completed within 24-48 hours of your appointment, with documentation delivered directly to your email if clinically appropriate.",
  },
  {
    q: "What Is an ESA Letter?",
    a: "An ESA letter is official documentation from a licensed mental health professional stating that you have a condition that may benefit from an emotional support animal.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14 space-y-2">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-ink-soft text-sm sm:text-base font-sans font-semibold">
            Get answers to common questions about ESA letters and our service.
          </p>
        </div>

        {/* 2-col layout: left image, right FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start max-w-5xl mx-auto">
          {/* Left: image */}
          <div className="relative rounded-[20px] overflow-hidden min-h-[300px] lg:min-h-[673px] w-full">
            <Image
              src="/faq-section-image.png"
              alt="Person with emotional support animal"
              fill
              sizes="(max-width: 1024px) 100vw, 460px"
              className="object-cover"
            />
          </div>

          {/* Right: FAQ list */}
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="overflow-hidden rounded-[20px]">
                <button
                  onClick={() => setOpen(open === idx ? null : idx)}
                  className="w-full flex items-stretch text-left bg-gradient-to-br from-[#1A3D4F] to-[#1D6E72] rounded-[20px]"
                >
                  {/* Gold number block */}
                  <div className="w-[64px] sm:w-[78px] shrink-0 bg-gold flex items-center justify-center font-heading font-extrabold text-primary text-xl sm:text-2xl rounded-l-[20px]">
                    {String(idx + 1).padStart(2, "0")}.
                  </div>
                  {/* Teal label area */}
                  <div className="flex-1 text-white font-sans font-semibold text-sm sm:text-base px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3">
                    <span>{faq.q}</span>
                    <span className="w-6 h-6 shrink-0 rounded-full bg-white/15 flex items-center justify-center">
                      {open === idx ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </span>
                  </div>
                </button>
                {/* Answer */}
                {open === idx && (
                  <div className="bg-warm-bg px-5 sm:px-6 py-4 text-sm text-ink-soft font-sans leading-relaxed border border-primary/10 border-t-0 rounded-b-[20px]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
