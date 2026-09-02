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
    question: "Is My ESA Therapist Legitimate?",
    answer:
      "Yes, 100%. My ESA Therapist connects you with fully licensed mental health professionals (LMFT, LCSW, LPC, LPCC, Clinical Psychologists) licensed specifically in your state. Every ESA evaluation meets all federal Fair Housing Act (FHA) regulations and individual state legal standards.",
  },
  {
    id: "faq-2",
    num: "02.",
    question: "How Does My ESA Therapist Work?",
    answer:
      "First, you complete a confidential online assessment. Next, you are paired with a state-licensed therapist for a telehealth consultation. Once approved, your official, signed ESA letter is issued with your therapist's license and direct contact information.",
  },
  {
    id: "faq-3",
    num: "03.",
    question: "Is My Information Safe With My ESA?",
    answer:
      "Absolutely. Our entire platform is strictly HIPAA-compliant and protected with 256-bit SSL encryption. Your medical information, personal data, and consultation details remain private and confidential between you and your licensed healthcare provider.",
  },
  {
    id: "faq-4",
    num: "04.",
    question: "What Rights Does an ESA Letter Provide?",
    answer:
      "An official ESA letter grants you protection under the federal Fair Housing Act (FHA). Landlords, housing authorities, and property managers must provide reasonable accommodation, allowing your emotional support animal in no-pet housing and waiving all pet fees, pet rent, and pet deposits.",
  },
  {
    id: "faq-5",
    num: "05.",
    question: "Can Landlords Reject a Valid ESA Letter?",
    answer:
      "Under the Fair Housing Act, landlords cannot deny legitimate ESA letters written by state-licensed healthcare providers, unless very narrow legal exemptions apply (such as an animal posing a direct safety threat or owner-occupied buildings with four or fewer units).",
  },
  {
    id: "faq-6",
    num: "06.",
    question: "How Fast Can I Receive My ESA Letter?",
    answer:
      "After completing your clinical evaluation and receiving therapist approval, your digital ESA letter is typically delivered within 24 to 48 hours. Physical hard copies with clinic letterhead can also be shipped directly to your mailing address.",
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
        <div className="flex flex-col items-center text-center max-w-[680px] mx-auto mb-12 lg:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] lg:leading-[54px] tracking-tight text-[#2E5A66] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="font-sans font-semibold text-base sm:text-lg leading-relaxed text-[#5F6B6F]">
            Get answers to common questions about ESA letters and our service.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Forest Dog Image */}
          <div className="lg:col-span-5 w-full relative min-h-[420px] lg:min-h-[640px] rounded-[20px] overflow-hidden shadow-md">
            <Image
              src="/faq-section-image.png"
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
