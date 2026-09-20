"use client";

import React, { useState } from "react";
import { FAQ_DATA, FAQ_FILTERS, type FaqFilter } from "./faqData";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

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
    <section id="faq-list" className="w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-[1016px] mx-auto space-y-4 sm:space-y-6">
        {/* Topic Filters */}
        <div
          className="flex flex-nowrap gap-2.5 sm:gap-3 overflow-x-auto no-scrollbar -mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-0 py-2"
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
                className={`shrink-0 whitespace-nowrap px-4 sm:px-6 lg:px-5 py-2 sm:py-2.5 lg:py-3 rounded-full font-sans font-semibold text-sm sm:text-base lg:text-sm xl:text-base shadow-sm transition-colors cursor-pointer ${
                  active ? "bg-[#2E5A66] text-white" : "bg-white text-[#2E5A66] hover:bg-[#2E5A66]/10"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

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
                {/* Gold Number Badge (Frame 1000011949: #E8B92C) */}
                <div className="w-[60px] sm:w-[74px] xl:w-[78px] shrink-0 bg-[#E8B92C] flex items-center justify-center font-sans font-extrabold text-xl sm:text-2xl xl:text-[28px] text-[#2E5A66] leading-none rounded-l-[20px] self-stretch">
                  {String(idx + 1).padStart(2, "0")}.
                </div>

                {/* Question Title & Plus/Minus Icon */}
                <div className="flex-1 py-3 sm:py-4 px-4 sm:px-6 xl:px-7 flex items-center justify-between gap-3 sm:gap-4">
                  <span className="font-sans font-semibold text-sm sm:text-base xl:text-[18px] text-white leading-snug sm:leading-[26px] xl:leading-[30px] pr-2">
                    {faq.question}
                  </span>

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
                        stroke="#FAF7F2"
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
                <div className="bg-[#FAF7F2] px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-[16px] text-[#5F6B6F] font-sans font-medium leading-[26px] sm:leading-[28px] border border-[#2E5A66]/15 border-t-0 rounded-b-[20px] animate-fadeIn whitespace-pre-line">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
