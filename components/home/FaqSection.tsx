"use client";

import React, { useState } from "react";
import Image from "next/image";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

const faqs = [
  {
    num: "01.",
    q: "Is My ESA Therapist Legitimate?",
    a: "Yes. My ESA Therapist connects you directly with independent, state-licensed mental health professionals (LMHPs) who conduct clinical assessments in full compliance with federal Fair Housing Act (FHA) and HUD regulations. Every letter issued includes the clinician's official state license number, contact details, and clinical verification.",
  },
  {
    num: "02.",
    q: "How Does My ESA Therapist Work?",
    a: "Our process is simple and transparent: 1) Complete a confidential online pre-screening questionnaire; 2) Schedule a telehealth consultation with a licensed clinician in your state; 3) If qualified, receive your official ESA recommendation letter delivered securely via email.",
  },
  {
    num: "03.",
    q: "Is My Information Safe With My ESA?",
    a: "Yes. We take privacy extremely seriously. All personal and clinical information is encrypted, transmitted securely, and protected under strict HIPAA-compliant protocols. We will never share or sell your private information.",
  },
  {
    num: "04.",
    q: "What Are the Housing Protections for ESAs?",
    a: "Under the federal Fair Housing Act (FHA), housing providers are legally required to provide reasonable accommodation for individuals with an ESA letter from a licensed healthcare provider. This includes waiving pet deposits, monthly pet fees, and pet bans or breed restrictions.",
  },
  {
    num: "05.",
    q: "How Quickly Can I Receive My ESA Letter?",
    a: "After completing your telehealth evaluation with our licensed provider, approved ESA letters are delivered via secure digital PDF within 24 to 48 hours. Priority expedited delivery options are also available.",
  },
  {
    num: "06.",
    q: "What If I Don't Qualify for an ESA?",
    a: "We offer a 100% money-back satisfaction guarantee. If our licensed mental health professional evaluates your case and determines that an ESA is not clinically appropriate for your situation, you will receive a full refund.",
  },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="pt-12 sm:pt-16 lg:pt-16 xl:pt-24 pb-10 sm:pb-12 lg:pb-10 xl:pb-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-[1442px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Frame 1000011716: Section Header */}
        <div className="text-center max-w-[1254px] mx-auto mb-14 space-y-2">
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-[44px] font-bold text-[#2E5A66] leading-tight sm:leading-[46px] lg:leading-[54px] tracking-[-0.0066em]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#5F6B6F] text-base sm:text-[18px] font-semibold leading-[30px] font-sans">
            Get answers to common questions about ESA letters and our service.
          </p>
        </div>

        {/* Frame 1000011803: Content Row (Image + Accordions) */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-8 xl:gap-[60px] max-w-[1184px] mx-auto">
          {/* Left: image (380x540px on 1024px lg, 551x673px on 1440px xl, rounded-[20px]) */}
          <div className="w-full max-w-[551px] lg:w-[380px] xl:w-[551px] h-[360px] sm:h-[440px] lg:h-[540px] xl:h-[673px] relative rounded-[20px] overflow-hidden shrink-0 shadow-md">
            <Image
              src="/faq-section-image.png"
              alt="Person holding emotional support animal"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1280px) 551px, (min-width: 1024px) 380px, 90vw"
            />
          </div>

          {/* Right: Frame 1000011715 (Question Cards) */}
          <div className="w-full max-w-[566px] lg:max-w-none lg:flex-1 space-y-3.5 sm:space-y-5 xl:space-y-[25px] flex flex-col justify-center">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="w-full rounded-[20px] overflow-hidden shadow-sm transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full min-h-[58px] sm:min-h-[68px] xl:min-h-[74px] flex items-stretch text-left rounded-[20px] overflow-hidden transition-all duration-200 relative"
                    style={{ backgroundImage: TEAL_GRADIENT }}
                  >
                    {/* Gold Number Block: Frame 1000011949 (#E8B92C) */}
                    <div className="w-[56px] sm:w-[68px] xl:w-[78px] shrink-0 bg-[#E8B92C] flex items-center justify-center font-sans font-extrabold text-lg sm:text-xl xl:text-[28px] text-[#2E5A66] leading-none rounded-l-[20px] self-stretch">
                      {faq.num}
                    </div>

                    {/* Question Title Area & Plus Icon (+) */}
                    <div className="flex-1 py-2.5 sm:py-3 px-3.5 sm:px-6 flex items-center justify-between gap-3 sm:gap-4">
                      <span className="font-sans font-semibold text-sm sm:text-base xl:text-[18px] text-white leading-snug sm:leading-[26px] xl:leading-[30px]">
                        {faq.q}
                      </span>

                      {/* Figma Plus Icon (+) */}
                      <span
                        className={`w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 3V15M3 9H15"
                            stroke="#FAF7F2"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </button>

                  {/* Accordion Answer Content */}
                  {isOpen && (
                    <div className="bg-[#FAF7F2] px-5 sm:px-7 py-4 sm:py-5 text-sm sm:text-[16px] text-[#5F6B6F] font-sans font-medium leading-[24px] sm:leading-[26px] border border-[#2E5A66]/10 border-t-0 rounded-b-[20px] animate-fadeIn">
                      {faq.a}
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
