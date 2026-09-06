"use client";

import React, { useState } from "react";
import Image from "next/image";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

const FAQS = [
  {
    num: "01.",
    q: "Are ESA Letters Legally Required?",
    a: "Yes, in the sense that housing providers are legally allowed to request reliable, disability-related documentation before granting a reasonable accommodation. A valid ESA letter, issued by a licensed mental health professional after a proper clinical evaluation, is the only way to establish that eligibility under the Fair Housing Act — there is no separate registration, certificate, or ID card required by law.",
  },
  {
    num: "02.",
    q: "Can Landlords Deny ESAs?",
    a: "Only in limited circumstances. Under federal law, a landlord can deny an ESA request if the animal would create an undue financial or administrative burden, fundamentally change the nature of the housing, pose a direct threat to others' health and safety, or cause significant property damage — even with reasonable accommodations in place. Outside of these exceptions, housing providers must waive no-pet policies, pet fees, and breed or size restrictions for a properly documented ESA.",
  },
  {
    num: "03.",
    q: "Do ESA Laws Apply Nationwide?",
    a: "The Fair Housing Act sets a federal baseline that applies in all 50 states, so tenants everywhere have the right to request an ESA as a reasonable accommodation. However, many states layer on additional rules — such as minimum evaluation periods, in-state licensing requirements for the issuing clinician, or penalties for misrepresenting an animal as an ESA — so it's worth checking your specific state's requirements.",
  },
  {
    num: "04.",
    q: "Are Online ESA Evaluations Legal?",
    a: "Yes, a licensed mental health professional can conduct a valid clinical evaluation through telehealth, and an ESA letter issued this way is legally recognized under the Fair Housing Act. What makes an evaluation legitimate isn't whether it happens online or in person — it's whether a properly licensed clinician actually assesses your condition, rather than issuing a letter after a brief questionnaire with no real clinical review.",
  },
];

export function EsaLawsFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#FAF7F2] py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1178px] mx-auto">
        <div className="text-center max-w-[900px] mx-auto mb-10 sm:mb-14 space-y-2">
          <h2 className="font-heading text-[28px] sm:text-4xl lg:text-[44px] font-bold text-[#2E5A66] leading-tight sm:leading-[46px] lg:leading-[54px] tracking-[-0.0066em]">
            Common Questions About ESA Laws
          </h2>
          <p className="text-[#5F6B6F] text-[15px] sm:text-[18px] font-semibold leading-[26px] sm:leading-[30px] font-sans">
            Get clear answers to the most frequently asked questions about emotional support animal regulations.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 xl:gap-[60px]">
          <div className="w-full max-w-[551px] lg:w-[380px] xl:w-[500px] h-[360px] sm:h-[440px] lg:h-[500px] xl:h-[540px] relative rounded-[20px] overflow-hidden shrink-0 shadow-md">
            <Image
              src="/common/faq-section-image.png"
              alt="Woman with her emotional support dog outdoors"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 500px, (min-width: 1024px) 380px, 90vw"
            />
          </div>

          <div className="w-full max-w-[566px] lg:max-w-none lg:flex-1 space-y-4 sm:space-y-5 flex flex-col justify-center">
            {FAQS.map((faq, idx) => {
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
                    <div className="w-[56px] sm:w-[68px] xl:w-[78px] shrink-0 bg-[#E8B92C] flex items-center justify-center font-sans font-extrabold text-lg sm:text-xl xl:text-[28px] text-[#2E5A66] leading-none rounded-l-[20px] self-stretch">
                      {faq.num}
                    </div>

                    <div className="flex-1 py-2.5 sm:py-3 px-3.5 sm:px-6 flex items-center justify-between gap-3 sm:gap-4">
                      <span className="font-sans font-semibold text-sm sm:text-base xl:text-[18px] text-white leading-snug sm:leading-[26px] xl:leading-[30px]">
                        {faq.q}
                      </span>
                      <span
                        className={`w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 3V15M3 9H15" stroke="#FAF7F2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="bg-white px-5 sm:px-7 py-4 sm:py-5 text-sm sm:text-[16px] text-[#5F6B6F] font-sans font-medium leading-[24px] sm:leading-[26px] border border-[#2E5A66]/10 border-t-0 rounded-b-[20px] animate-fadeIn">
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
