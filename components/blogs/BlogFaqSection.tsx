"use client";

import React, { useState } from "react";
import Image from "next/image";

const TEAL_GRADIENT = "var(--color-gradient)";

export interface BlogFaqItem {
  q: string;
  a: React.ReactNode;
  num?: string;
  category?: string;
}

const DEFAULT_BLOG_FAQS: BlogFaqItem[] = [
  {
    num: "01.",
    q: "Is My ESA Therapist Legitimate?",
    a: "Yes. My ESA Therapist connects you directly with independent, state-licensed mental health professionals (LMHPs) who conduct clinical assessments in full compliance with federal Fair Housing Act (FHA) and HUD regulations. Every letter issued includes the clinician's official state license number, contact details, and clinical verification.",
  },
  {
    num: "02.",
    q: "How Does My ESA Therapist Work?",
    a: (
      <div>
        <p className="mb-2 body-large text-[18px] leading-[28px]">Our process is simple and transparent:</p>
        <ol className="list-decimal list-outside pl-5 space-y-1.5 body-large text-[18px] leading-[28px]">
          <li>Complete a confidential online pre-screening questionnaire</li>
          <li>Schedule a telehealth consultation with a licensed clinician in your state</li>
          <li>If qualified, receive your official ESA recommendation letter delivered securely via email.</li>
        </ol>
      </div>
    ),
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

interface BlogFaqSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  faqs?: BlogFaqItem[];
}

export function BlogFaqSection({
  id = "faqs",
  title = "Frequently Asked Questions",
  subtitle = "Get answers to common questions about ESA letters and our service.",
  faqs: customFaqs,
}: BlogFaqSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const rawList = customFaqs && customFaqs.length > 0 ? customFaqs : DEFAULT_BLOG_FAQS;
  const items = rawList.map((f, i) => ({
    ...f,
    num: f.num || `${String(i + 1).padStart(2, "0")}.`,
  }));

  return (
    <section id={id} className="w-full pt-10 sm:pt-14 pb-12 sm:pb-16 scroll-mt-28">
      {/* Anchor targets */}
      {id !== "faq" && <div id="faq" className="sr-only" />}
      {id !== "frequently-asked-questions" && <div id="frequently-asked-questions" className="sr-only" />}

      {/* Frame 1000011447: Section Header */}
      <div className="w-full max-w-[945px] flex flex-col items-start gap-2 mb-8 sm:mb-10">
        <h2 className="font-heading text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-primary leading-tight lg:leading-[54px] tracking-[-0.00015em] sm:whitespace-nowrap">
          Frequently Asked Questions
        </h2>
        {subtitle && (
          <p className="font-sans font-semibold text-[15px] sm:text-[18px] leading-[26px] sm:leading-[30px] text-body-text max-w-[588px]">
            {subtitle}
          </p>
        )}
      </div>

      {/* Frame 1261153828: Auto Layout Row (image 35 + FAQ Accordions) */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-[34px] w-full max-w-[950px]">
        {/* Left: image 35 (width: 349.93px, height: 612px, border-radius: 30.297px) */}
        <div className="w-full max-w-[350px] lg:w-[350px] h-[400px] sm:h-[480px] lg:h-[612px] shrink-0 relative rounded-[30px] overflow-hidden shadow-sm">
          <Image
            quality={90}
            src="/common/faq-section-image.webp"
            alt="Person with emotional support animal"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 350px, 90vw"
          />
        </div>

        {/* Right: Frame 1000011717 (FAQ Accordions) */}
        <div className="w-full max-w-[566px] flex-1 flex flex-col justify-center">
          {/* FAQ Accordions List */}
          <div className="space-y-3.5 sm:space-y-[18px] w-full">
            {items.map((faq, idx) => {
              const isOpen = openIdx === idx;
              const numStr = faq.num || `${String(idx + 1).padStart(2, "0")}.`;

              return (
                <div
                  key={`${faq.q}-${idx}`}
                  className="w-full rounded-[20px] overflow-hidden shadow-sm transition-all duration-200"
                >
                  {/* Question Header Card */}
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full min-h-[64px] sm:min-h-[74px] flex items-stretch text-left rounded-[20px] overflow-hidden transition-all duration-200 relative cursor-pointer"
                    style={{ backgroundImage: TEAL_GRADIENT }}
                  >
                    {/* Gold Number Badge: Frame 1000011949 (accent) */}
                    <div className="w-[64px] sm:w-[78px] shrink-0 bg-accent flex items-center justify-center font-sans font-extrabold text-xl sm:text-[28px] text-primary leading-none rounded-l-[20px] self-stretch">
                      {numStr}
                    </div>

                    {/* Question Title & Plus Icon */}
                    <div className="flex-1 py-3 px-3.5 sm:px-5 flex items-center justify-between gap-3">
                      <h3 className="heading-h3 text-white text-base sm:text-xl xl:text-[28px] leading-snug sm:leading-[32px] xl:leading-[36px] m-0 capitalize">
                        {faq.q}
                      </h3>

                      {/* Plus (+) Icon that rotates 45deg to (x) when open */}
                      <span
                        className={`w-5 h-5 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
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
                    <div className="bg-background px-5 sm:px-6 py-4 sm:py-5 body-large border border-primary/10 border-t-0 rounded-b-[20px] animate-fadeIn whitespace-pre-line">
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
