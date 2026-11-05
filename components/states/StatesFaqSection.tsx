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
    question: "Which States Have Strict ESA Laws?",
    answer:
      "Some states have additional rules addressing ESA documentation, misrepresentation, or housing accommodations. However, federal Fair Housing Act protections generally apply nationwide, subject to eligibility requirements and applicable exceptions.",
  },
  {
    id: "faq-2",
    num: "02.",
    question: "Can a Landlord Deny an ESA in Any State?",
    answer:
      "A landlord generally cannot deny a valid ESA accommodation request solely because of a no-pet policy. However, denial may be permitted in certain circumstances, such as undue hardship, direct threats, or significant property damage.",
  },
  {
    id: "faq-3",
    num: "03.",
    question: "Can an Online ESA Letter Be Valid in My State?",
    answer:
      "Yes. An online ESA letter may be valid if it follows applicable requirements and is provided by a qualified mental health professional licensed or otherwise authorized to practice in your state after an appropriate evaluation.",
  },
  {
    id: "faq-4",
    num: "04.",
    question: "Do ESA Owners Need Additional Documentation in Certain States?",
    answer:
      "Some states have additional documentation rules, including requirements related to the professional relationship or evaluation process. However, there is no universal federal ESA certificate or registration requirement for housing.",
  },
  {
    id: "faq-5",
    num: "05.",
    question: "Can I Use an ESA Letter From Another State?",
    answer:
      "An ESA letter from another state may not automatically meet your state's requirements. The professional issuing it must be appropriately licensed or authorized to practice where you live, and the documentation must meet applicable standards.",
  },
];

export function StatesFaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 border-t border-[#EAE5DC]/60">
      <div className="max-w-[1260px] mx-auto">
        
        <div className="flex flex-col items-center text-center max-w-[780px] mx-auto mb-12 lg:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] lg:leading-[54px] tracking-tight text-primary mb-3">
            Frequently Asked Questions
          </h2>
          <p className="font-sans font-semibold text-base sm:text-lg leading-relaxed text-body-text">
            Explore ESA letter information by state, including local requirements, housing rights, applicable laws, and the process for getting an ESA letter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <div className="lg:col-span-5 w-full relative min-h-[420px] lg:min-h-[640px] rounded-[20px] overflow-hidden shadow-md">
            <Image
            quality={90}
              src="/common/faq-section-image.webp"
              alt="Emotional support dog and owner in forest"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            {FAQ_ITEMS.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <details
                  key={faq.id}
                  open={isOpen}
                  className="w-full rounded-[20px] color-gradient text-white overflow-hidden shadow-md transition-all duration-300"
                >
                  <summary
                    onClick={(event) => {
                      event.preventDefault();
                      toggleFaq(faq.id);
                    }}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer gap-4 group list-none [&::-webkit-details-marker]:hidden"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-xl bg-accent flex items-center justify-center shrink-0 shadow-xs">
                        <span className="font-sans font-extrabold text-xl sm:text-2xl text-primary">
                          {faq.num}
                        </span>
                      </div>

                      <h3 className="heading-h3 text-white group-hover:text-accent transition-colors text-base sm:text-xl xl:text-[28px] leading-snug sm:leading-[32px] xl:leading-[36px] m-0 capitalize">
                        {faq.question}
                      </h3>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-accent" />
                      ) : (
                        <Plus className="w-5 h-5 text-white group-hover:text-accent transition-colors" />
                      )}
                    </div>
                  </summary>

                  <div className="px-6 pb-6 pt-1 font-sans font-medium text-[16px] leading-[26px] text-background border-t border-white/10">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
