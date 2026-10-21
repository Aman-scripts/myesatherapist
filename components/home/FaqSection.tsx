"use client";

import React, { useState } from "react";
import Image from "next/image";

const TEAL_GRADIENT = "var(--color-gradient)";

const defaultFaqs = [
  {
    num: "01.",
    q: "Is My ESA Therapist Legitimate?",
    a: "Yes. My ESA Therapist connects individuals directly with independent, state-licensed mental health professionals (LMHPs) who conduct clinical assessments designed to support applicable Fair Housing Act requirements and relevant HUD guidance.",
  },
  {
    num: "02.",
    q: "How Does My ESA Therapist Work?",
    a: (
      <div>
        <p className="mb-2 body-large">Our process is simple and transparent:</p>
        <ol className="list-decimal list-outside pl-5 space-y-1.5 body-large">
          <li>Complete a confidential online pre-screening questionnaire</li>
          <li>Schedule a telehealth consultation with a licensed clinician in your state</li>
          <li>If qualified, receive your official ESA recommendation letter delivered securely via email.</li>
        </ol>
      </div>
    ),
  },
  {
    num: "03.",
    q: "Is My Information Safe With My ESA Therapist?",
    a: "Yes. We take privacy extremely seriously. All personal and clinical information is encrypted, transmitted securely, and protected under strict HIPAA-compliant protocols. We will never share or sell your private information.",
  },
  {
    num: "04.",
    q: "What are the Housing Protections for ESAs?",
    a: "Under the Fair Housing Act, individuals with disabilities may request a reasonable accommodation to keep an assistance animal when the animal is needed because of their disability. When the disability or disability-related need is not readily apparent, reliable documentation from a healthcare professional may help support the request.",
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

export interface FaqItem {
  num?: string;
  q: string;
  a: React.ReactNode;
}

interface FaqSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  faqs?: FaqItem[];
  bg?: string;
}

export function FaqSection({
  id = "faq",
  title = "Frequently Asked Questions",
  subtitle = "Get answers to common questions about ESA letters and our service.",
  faqs: customFaqs,
  bg = "bg-background",
}: FaqSectionProps = {}) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const rawList = customFaqs && customFaqs.length > 0 ? customFaqs : defaultFaqs;
  const items = rawList.map((f, i) => ({
    ...f,
    num: f.num || `${String(i + 1).padStart(2, "0")}.`,
  }));

  return (
    <section id={id} className={`pt-12 sm:pt-16 lg:pt-16 xl:pt-24 pb-10 sm:pb-12 lg:pb-10 xl:pb-24 ${bg} relative`}>
      {id !== "faq" && <div id="faq" className="sr-only" />}
      <div className="max-w-[1442px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Frame 1000011716: Section Header */}
        <div className="text-center max-w-[1254px] mx-auto mb-14 space-y-2">
          <h2 className="heading-h2 capitalize">
            {title}
          </h2>
          {subtitle && (
            <p className="body-large">
              {subtitle}
            </p>
          )}
        </div>

        {/* Frame 1000011803: Content Row (Image + Accordions) */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-8 xl:gap-[60px] max-w-[1184px] mx-auto relative">
          {/* Left: image (centered on mobile/tablet, sticky on desktop) */}
          <div className="w-full max-w-[551px] lg:w-[380px] xl:w-[551px] h-[360px] sm:h-[440px] lg:h-[540px] xl:h-[673px] shrink-0 self-center mx-auto lg:self-start lg:mx-0 lg:sticky lg:top-[104px]">
            <div className="relative w-full h-full rounded-[20px] overflow-hidden shadow-md">
              <Image
                quality={90}
                src="/common/faq-section-image.webp"
                alt="Person holding emotional support animal"
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 551px, (min-width: 1024px) 380px, 90vw"
              />
            </div>
          </div>

          {/* Right: Frame 1000011715 (Question Cards) */}
          <div className="w-full max-w-[566px] lg:max-w-none lg:flex-1 space-y-3.5 sm:space-y-5 xl:space-y-[25px] flex flex-col justify-center">
            {items.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="w-full rounded-[20px] overflow-hidden shadow-sm transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full min-h-[58px] sm:min-h-[68px] xl:min-h-[74px] flex items-stretch text-left rounded-[20px] overflow-hidden transition-all duration-200 relative color-gradient"
                  >
                    {/* Gold Number Block: Frame 1000011949 (accent) */}
                    <div className="w-[56px] sm:w-[68px] xl:w-[78px] shrink-0 bg-accent flex items-center justify-center heading-h3 text-primary leading-none rounded-l-[20px] self-stretch">
                      {faq.num}
                    </div>

                    {/* Question Title Area & Plus Icon (+) */}
                    <div className="flex-1 py-2.5 sm:py-3 px-3.5 sm:px-6 flex items-center justify-between gap-3 sm:gap-4">
                      <h3 className="heading-h3 text-white m-0 capitalize">
                        {faq.q}
                      </h3>

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
                            stroke="var(--color-background)"
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
                    <div className="bg-background px-5 sm:px-7 py-4 sm:py-5 body-large border border-primary/10 border-t-0 rounded-b-[20px] animate-fadeIn whitespace-pre-line">
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
