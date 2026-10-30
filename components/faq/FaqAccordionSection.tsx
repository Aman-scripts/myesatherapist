"use client";

import React, { useState } from "react";
import { FAQ_DATA, FAQ_FILTERS, FAQ_FILTER_LABELS, type FaqFilter } from "./faqData";

const TEAL_GRADIENT = "var(--color-gradient)";

export function FaqAccordionSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [filter, setFilter] = useState<FaqFilter>("All Topics");

  const visibleFaqs = FAQ_DATA.filter((faq) => filter === "All Topics" || faq.category === filter);
  const availableFilters = FAQ_FILTERS.filter(
    (f) => f === "All Topics" || FAQ_DATA.some((faq) => faq.category === f),
  );

  const selectFilter = (f: FaqFilter) => {
    setFilter(f);
    setOpenIdx(0);
  };

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq-list" className="w-full bg-background py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-[1016px] mx-auto flex flex-col items-center gap-8 sm:gap-10">
        <div className="flex flex-col items-center gap-4 text-center max-w-[720px]">
          <h2 className="heading-h2 text-primary">Frequently Asked Questions</h2>
          <p className="body-large text-body-text">
            Have questions about Emotional Support Animals? Find simple, reliable answers to help you understand the ESA process.
          </p>
        </div>

        {/* Topic Filters */}
        <div
          className="flex flex-wrap justify-center gap-2.5 sm:gap-3 w-full py-1"
          role="group"
          aria-label="Filter FAQs by topic"
        >
          {availableFilters.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                onClick={(e) => {
                  selectFilter(f);
                  e.currentTarget.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                }}
                aria-pressed={active}
                className={`shrink-0 whitespace-nowrap px-5 py-2.5 rounded-full font-sans font-semibold text-[14px] leading-[22px] border transition-colors cursor-pointer ${
                  active
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-primary border-[#EAE5DC] hover:bg-primary/5"
                }`}
              >
                {FAQ_FILTER_LABELS[f]}
              </button>
            );
          })}
        </div>

        <div className="w-full flex flex-col gap-4">
        {visibleFaqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={faq.question}
              className="w-full rounded-[20px] overflow-hidden shadow-sm transition-all duration-200"
            >
              {/* Accordion Trigger Header */}
              <button
                type="button"
                onClick={() => toggleAccordion(idx)}
                className="w-full min-h-[64px] sm:min-h-[74px] flex items-stretch text-left rounded-[20px] overflow-hidden transition-all duration-200 relative cursor-pointer group"
                style={{ backgroundImage: TEAL_GRADIENT }}
                aria-expanded={isOpen}
              >
                {/* Gold Number Badge (Frame 1000011949: accent) */}
                <div className="w-[60px] sm:w-[74px] xl:w-[78px] shrink-0 bg-accent flex items-center justify-center font-sans font-extrabold text-xl sm:text-2xl xl:text-[28px] text-[#29515B] leading-none rounded-l-[20px] self-stretch">
                  {String(idx + 1).padStart(2, "0")}.
                </div>

                {/* Question Title & Plus/Minus Icon */}
                <div className="flex-1 py-3 sm:py-4 px-4 sm:px-6 xl:px-7 flex items-center justify-between gap-3 sm:gap-4">
                  <h3 className="heading-h3 text-white text-base sm:text-xl xl:text-[28px] leading-snug sm:leading-[32px] xl:leading-[36px] pr-2 m-0 capitalize">
                    {faq.question}
                  </h3>

                  {/* Plus Icon (+) with smooth rotate */}
                  <span
                    className={`w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] flex items-center justify-center shrink-0 transition-transform duration-300 ${
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

              {/* Accordion Body */}
              {isOpen && (
                <div className="bg-background px-6 sm:px-8 py-5 sm:py-6 body-large border border-primary/15 border-t-0 rounded-b-[20px] animate-fadeIn whitespace-pre-line">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
