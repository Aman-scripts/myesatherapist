"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

const FAQ_ITEMS = [
  {
    num: "01.",
    question: "When exactly is my card charged?",
    answer:
      "Your card is authorized when you book your appointment, but the charge is only finalized after your licensed mental health professional completes your clinical evaluation.",
  },
  {
    num: "02.",
    question: "What is included in the ID Card?",
    answer:
      "The ID Card includes your pet's photo, registered registration number, handler information, and a quick-verification QR code for landlords and housing providers.",
  },
  {
    num: "03.",
    question: "Are there any hidden fees?",
    answer:
      "No. Our pricing is 100% transparent. There are no recurring subscription charges, surprise consultation fees, or renewal lock-ins.",
  },
  {
    num: "04.",
    question: "What is the difference between ESA and PSD?",
    answer:
      "An Emotional Support Animal (ESA) provides companionship and comfort, protected under the Fair Housing Act. A Psychiatric Service Dog (PSD) is trained to perform specific tasks related to a mental health disability and has public access rights under the ADA and air travel rights under the ACAA.",
  },
  {
    num: "05.",
    question: "Can I add more than one pet?",
    answer:
      "Yes, you can add additional pets to your evaluation for an add-on fee during checkout. Each animal receives its own individualized clinical assessment and official documentation.",
  },
  {
    num: "06.",
    question: "Is My ESA Therapist Legitimate?",
    answer:
      "Yes. We exclusively connect you with independently licensed mental health practitioners in your state who perform real, thorough clinical consultations compliant with state and federal regulations.",
  },
];

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

export function PricingFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-12 sm:mb-16 space-y-3">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#2E5A66] leading-tight lg:leading-[54px] tracking-[-0.00015em]">
            Common Pricing Questions
          </h2>
          <p className="text-[#5F6B6F] text-sm sm:text-base lg:text-[18px] font-semibold leading-relaxed sm:leading-[30px] font-sans">
            Get answers to common questions about ESA letters and our service.
          </p>
        </div>

        {/* 2-Column Layout (Image Left + Accordions Right) */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-14">
          {/* Left Side: Nature / Dog Image */}
          <div className="w-full lg:w-[48%] max-w-[551px] aspect-[551/673] relative rounded-[20px] overflow-hidden shadow-lg shrink-0">
            <Image
              src="/common/faq-section-image.png"
              alt="Woman with golden retriever dog in forest"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 550px"
            />
          </div>

          {/* Right Side: Accordion Items */}
          <div className="w-full lg:w-[50%] flex flex-col gap-4 sm:gap-5">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-[20px] overflow-hidden shadow-md transition-all duration-300"
                  style={{ backgroundImage: TEAL_GRADIENT }}
                >
                  {/* Accordion Header */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full min-h-[74px] flex items-center justify-between text-left relative cursor-pointer pr-5 sm:pr-6"
                  >
                    {/* Left Gold Number Box */}
                    <div className="w-[64px] sm:w-[78px] self-stretch bg-[#E8B92C] flex items-center justify-center shrink-0 rounded-r-[12px] sm:rounded-r-[16px]">
                      <span className="font-sans font-extrabold text-[22px] sm:text-[28px] text-[#2E5A66] leading-none">
                        {item.num}
                      </span>
                    </div>

                    {/* Question Title */}
                    <span className="font-sans font-semibold text-[15px] sm:text-[18px] text-white leading-snug px-3 sm:px-4 flex-1">
                      {item.question}
                    </span>

                    {/* Plus / Minus Icon */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center text-[#FAF7F2] shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-[#FAF7F2]" />
                      ) : (
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-[#FAF7F2]" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Body */}
                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-6 pt-2 text-[#FAF7F2]/90 font-sans font-medium text-[14px] sm:text-[15px] leading-relaxed border-t border-white/10">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
