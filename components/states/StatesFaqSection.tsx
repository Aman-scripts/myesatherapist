"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  id: string;
  num: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    num: "01.",
    question: "Which States Have the Strict ESA Laws?",
    answer:
      "States like California, Montana, Arkansas, Louisiana, and Iowa require ESA owners to have at least a 30-day relationship with their mental health professional before an ESA evaluation can be conducted.",
  },
  {
    id: "faq-2",
    num: "02.",
    question: "Can a Landlord Deny an ESA in Any State?",
    answer:
      "No. Under the Fair Housing Act (FHA), landlords cannot deny an emotional support animal (ESA) as long as you have a legitimate ESA letter based on an evaluation conducted by a licensed professional.",
  },
  {
    id: "faq-3",
    num: "03.",
    question: "Can an Online ESA Letter Be Valid in My State?",
    answer:
      "Yes, if the letter comes from a licensed mental health professional who conducts a legitimate telehealth evaluation. Documentation generated instantly or through automated processes without a proper clinical assessment may be rejected by housing providers.",
  },
  {
    id: "faq-4",
    num: "04.",
    question: "Do ESA Owners Need Additional Documentation in Certain States?",
    answer:
      "Generally, a valid ESA letter is sufficient in all 50 states. However, some states require an established 30-day patient-provider relationship with the licensed mental health professional conducting the evaluation. Many states also note that ESA letters expire after 12 months and must be renewed.",
  },
  {
    id: "faq-5",
    num: "05.",
    question: "Can I Use an ESA Letter From Another State?",
    answer:
      "You generally cannot use emotional support documentation issued by a professional licensed in another state. The evaluation must be completed by a mental health professional licensed in the state where you currently reside to meet state-specific requirements and Fair Housing Act (FHA) standards. States such as California, Arkansas, Iowa, Louisiana, and Montana also require an established patient–provider relationship. If you move, a new in-state evaluation is typically needed to remain compliant.",
  },
];

export function StatesFaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-[#FAF7F2] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 border-t border-[#EAE5DC]/60">
      <div className="max-w-[1260px] mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-[780px] mx-auto mb-12 lg:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] lg:leading-[54px] tracking-tight text-[#2E5A66] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="font-sans font-semibold text-base sm:text-lg leading-relaxed text-[#5F6B6F]">
            Answers to your most common questions about ESA assessment and housing rules by state.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Forest Dog Image */}
          <div className="lg:col-span-5 w-full relative min-h-[420px] lg:min-h-[640px] rounded-[20px] overflow-hidden shadow-md">
            <Image
              src="/common/faq-section-image.png"
              alt="Emotional support dog and owner in forest"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          {/* Right Column: 6 Gradient Accordion Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            {FAQ_ITEMS.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="w-full rounded-[20px] bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] text-white overflow-hidden shadow-md transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      {/* Gold Number Badge */}
                      <div className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-xl bg-[#E8B92C] flex items-center justify-center shrink-0 shadow-xs">
                        <span className="font-sans font-extrabold text-xl sm:text-2xl text-[#2E5A66]">
                          {faq.num}
                        </span>
                      </div>

                      {/* Question Text */}
                      <span className="font-sans font-semibold text-base sm:text-lg text-white group-hover:text-[#E8B92C] transition-colors leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    {/* Toggle Icon */}
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-[#E8B92C]" />
                      ) : (
                        <Plus className="w-5 h-5 text-white group-hover:text-[#E8B92C] transition-colors" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Answer Content */}
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-[#FAF7F2]/90 font-sans font-medium text-sm sm:text-base leading-relaxed border-t border-white/10">
                      <p>{faq.answer}</p>
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
