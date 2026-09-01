"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { StateData } from "@/data/statesData";

export function StatePsdVsEsaSection({ data }: { data: StateData }) {
  const stateName = data.name;

  const esaBullets = [
    "Provide emotional comfort and support for conditions such as anxiety, depression, PTSD, and related mental health challenges.",
    `Do not need specialized task training, but housing protections require a valid ESA letter from an ${stateName}-licensed mental health professional.`,
    "Protected under the Fair Housing Act (FHA), which allows approved individuals to reside with their ESA in housing that normally limits pets.",
    "Not subject to standard pet fees, such as pet rent or deposits, once the accommodation is properly approved.",
  ];

  const psdBullets = [
    "Specially trained to perform certain tasks, such as stopping panic attacks or reminding handlers to take medication.",
    "Safeguarded by the Americans with Disabilities Act (ADA).",
    "Entitled to full public access rights, including to places of employment, stores, and other public spaces where dogs are normally forbidden.",
  ];

  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1279px] mx-auto">
        <div className="text-center max-w-[840px] mx-auto mb-10 sm:mb-12 lg:mb-14 space-y-3">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[44px] font-bold text-[#2E5A66] leading-[1.23] tracking-[-0.00015em]">
            Psychiatric Service Dogs vs. Emotional Support Animals in {stateName}
          </h2>
          <p className="font-sans text-sm sm:text-base lg:text-[16px] text-[#5F6B6F] font-semibold leading-[26px] max-w-[760px] mx-auto">
            Understanding the differences between Psychiatric Service Dogs (PSDs) and Emotional Support Animals (ESAs) will help you select the support that best meets your mental health needs in {stateName}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-10 lg:mb-12">
          {/* Card 1: ESA */}
          <div className="bg-white rounded-[30px] border border-[#EAE5DC]/50 shadow-[0_4px_20px_rgba(0,0,0,0.025)] flex flex-col sm:flex-row overflow-hidden">
            <div className="relative w-full sm:w-[35%] lg:w-[32%] xl:w-[36%] aspect-[4/3] sm:aspect-auto shrink-0 overflow-hidden">
              <Image
                src="/emotionalsupportnanimal.png"
                alt="Emotional Support Animals (ESA)"
                fill
                priority
                unoptimized
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            </div>

            <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 min-w-0">
              <div>
                <h3 className="font-heading text-xl sm:text-2xl lg:text-[24px] font-bold text-[#2E5A66] mb-4 leading-[32px] tracking-[-0.00015em]">
                  Emotional Support Animals (ESA)
                </h3>
                <ul className="space-y-3 mb-6">
                  {esaBullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5F6B6F] shrink-0 mt-2" />
                      <span className="font-sans text-[13px] sm:text-[14px] text-[#5F6B6F] font-semibold leading-[24px]">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <button
                  onClick={scrollToForm}
                  className="w-full sm:w-auto px-6 h-[44px] rounded-[30px] bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] hover:opacity-95 text-white font-semibold text-[15px] leading-[26px] font-sans shadow-[0px_2px_4px_rgba(0,0,0,0.15)] transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5] text-[#FAF7F2] transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: PSD */}
          <div className="bg-white rounded-[30px] border border-[#EAE5DC]/50 shadow-[0_4px_20px_rgba(0,0,0,0.025)] flex flex-col sm:flex-row overflow-hidden">
            <div className="relative w-full sm:w-[35%] lg:w-[32%] xl:w-[36%] aspect-[4/3] sm:aspect-auto shrink-0 overflow-hidden">
              <Image
                src="/psychiatricservicedogs.png"
                alt="Psychiatric Service Dogs (PSD)"
                fill
                priority
                unoptimized
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            </div>

            <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 min-w-0">
              <div>
                <h3 className="font-heading text-xl sm:text-2xl lg:text-[24px] font-bold text-[#2E5A66] mb-4 leading-[32px] tracking-[-0.00015em]">
                  Psychiatric Service Dogs (PSD)
                </h3>
                <ul className="space-y-3 mb-6">
                  {psdBullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5F6B6F] shrink-0 mt-2" />
                      <span className="font-sans text-[13px] sm:text-[14px] text-[#5F6B6F] font-semibold leading-[24px]">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <button
                  onClick={scrollToForm}
                  className="w-full sm:w-auto px-6 h-[44px] rounded-[30px] bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] hover:opacity-95 text-white font-semibold text-[15px] leading-[26px] font-sans shadow-[0px_2px_4px_rgba(0,0,0,0.15)] transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5] text-[#FAF7F2] transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
