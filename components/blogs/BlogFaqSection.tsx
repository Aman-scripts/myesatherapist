"use client";

import React, { useState } from "react";

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
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const items = customFaqs && customFaqs.length > 0 ? customFaqs : DEFAULT_BLOG_FAQS;

  return (
    <section id={id} className="w-full pt-10 sm:pt-14 pb-12 sm:pb-16 scroll-mt-28">
      {/* Anchor targets */}
      {id !== "faq" && <div id="faq" className="sr-only" />}
      {id !== "frequently-asked-questions" && <div id="frequently-asked-questions" className="sr-only" />}

      {/* Frame 1000011447: Section Header */}
      <div className="w-full max-w-[951px] flex flex-col items-start gap-2 mb-8 sm:mb-10">
        <h2 className="heading-h2 text-primary">
          {title}
        </h2>
        {subtitle && (
          <p className="body-large text-body-text max-w-[588px]">
            {subtitle}
          </p>
        )}
      </div>

      {/* Full-width FAQ Accordions: Frame 1000011828 (width: 951px) */}
      <div className="w-full max-w-[951px] space-y-4 sm:space-y-5">
        {items.map((faq, idx) => {
          const isOpen = openIdx === idx;

          return (
            <div
              key={`${faq.q}-${idx}`}
              className="w-full rounded-[20px] overflow-hidden shadow-[0px_2px_4px_rgba(0,0,0,0.08)] transition-all duration-200"
            >
              {/* Question Header Card */}
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full min-h-[64px] sm:min-h-[74px] px-6 sm:px-8 py-4 sm:py-[19px] flex items-center justify-between text-left rounded-[20px] transition-all duration-200 cursor-pointer group"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                {/* Question Title in heading-h3 (Playfair Display 28px/36px) */}
                <h3 className="heading-h3 text-white m-0 pr-4 flex-1">
                  {faq.q}
                </h3>

                {/* Plus (+) Icon that rotates 45deg to (x) when open */}
                <span
                  className={`w-6 h-6 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : "group-hover:scale-110"
                  }`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M9 3V15M3 9H15"
                      stroke="#FAF7F2"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              {/* Accordion Answer Content */}
              {isOpen && (
                <div className="bg-background px-6 sm:px-8 py-5 sm:py-6 body-large text-body-text border border-primary/10 border-t-0 rounded-b-[20px] animate-fadeIn whitespace-pre-line">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
