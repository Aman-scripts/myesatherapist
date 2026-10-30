"use client";

import React, { useState } from "react";
import Image from "next/image";

const TEAL_GRADIENT = "var(--color-gradient)";

export const ESA_LAWS_FAQS = [
  {
    num: "01.",
    q: "Are ESA Letters Legally Required?",
    a: "Under federal ESA law, housing providers can ask for reliable documentation when someone requests an ESA. In most cases, this is an ESA letter from a licensed medical professional. The letter is issued after a clinical evaluation of the individual, their disability, and their need for an ESA.",
  },
  {
    num: "02.",
    q: "Do ESA Laws Apply Nationwide?",
    a: "Federal ESA laws apply across all 50 states. Under the FHA, qualifying ESAs may be allowed as a reasonable housing accommodation without pet fees or pet restrictions. State laws may add requirements, such as a required provider relationship before an ESA letter can be issued.",
  },
  {
    num: "03.",
    q: "Are Online ESA Evaluations Legal?",
    a: "Yes. Online ESA evaluations are legal when conducted by a state-licensed healthcare professional through compliant telehealth. Instant approvals, guaranteed letters, or certificates and registrations issued without a clinical evaluation are not legitimate.",
  },
  {
    num: "04.",
    q: "Can ESA laws vary by state?",
    a: "Yes. Federal housing protections apply nationwide, but states may have additional rules for ESA requests, documentation, or provider requirements. Check your state’s current laws before requesting an ESA accommodation.",
  },
  {
    num: "05.",
    q: "What are the legal requirements for an ESA?",
    a: "An ESA request generally requires a qualifying disability-related need and, when that need is not apparent, reliable documentation from a qualified healthcare professional. State laws may impose additional requirements.",
  },
];

export function EsaLawsFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="w-full bg-background py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1178px] mx-auto">
        <div className="text-center max-w-[900px] mx-auto mb-10 sm:mb-14 space-y-2">
          <h2 className="font-heading text-[28px] sm:text-4xl lg:text-[44px] font-bold text-primary leading-tight sm:leading-[46px] lg:leading-[54px] tracking-[-0.0066em]">
            Common Questions About ESA Laws
          </h2>
          <p className="text-body-text text-[15px] sm:text-[18px] font-semibold leading-[26px] sm:leading-[30px] font-sans">
            Get clear answers to the most frequently asked questions about emotional support animal laws and regulations.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 xl:gap-[60px]">
          <div className="w-full max-w-[551px] lg:w-[380px] xl:w-[500px] h-[360px] sm:h-[440px] lg:h-[500px] xl:h-[540px] relative rounded-[20px] overflow-hidden shrink-0 shadow-md">
            <Image
            quality={75}
              src="/common/faq-section-image.webp"
              alt="Woman with her emotional support dog outdoors"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(min-width: 1280px) 500px, (min-width: 1024px) 380px, (max-width: 639px) 430px, 90vw"
            />
          </div>

          <div className="w-full max-w-[566px] lg:max-w-none lg:flex-1 space-y-4 sm:space-y-5 flex flex-col justify-center">
            {ESA_LAWS_FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="w-full rounded-[20px] overflow-hidden shadow-sm transition-all duration-200">
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full min-h-[58px] sm:min-h-[68px] xl:min-h-[74px] flex items-stretch text-left rounded-[20px] overflow-hidden transition-all duration-200 relative cursor-pointer"
                    style={{ backgroundImage: TEAL_GRADIENT }}
                    aria-expanded={isOpen}
                  >
                    <div className="w-[56px] sm:w-[68px] xl:w-[78px] shrink-0 bg-accent flex items-center justify-center font-sans font-extrabold text-lg sm:text-xl xl:text-[28px] text-[#29515B] leading-none rounded-l-[20px] self-stretch">
                      {faq.num}
                    </div>

                    <div className="flex-1 py-2.5 sm:py-3 px-3.5 sm:px-6 flex items-center justify-between gap-3 sm:gap-4">
                      <h3 className="heading-h3 text-white text-base sm:text-xl xl:text-[28px] leading-snug sm:leading-[32px] xl:leading-[36px] m-0 capitalize">
                        {faq.q}
                      </h3>
                      <span
                        className={`w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 3V15M3 9H15" stroke="var(--color-background)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="bg-white px-5 sm:px-7 py-4 sm:py-5 body-large border border-primary/10 border-t-0 rounded-b-[20px] animate-fadeIn">
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
