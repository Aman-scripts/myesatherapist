"use client";

import React from "react";
import Image from "next/image";
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

  return (
    <section className="w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center max-w-[840px] mx-auto mb-10 sm:mb-12 lg:mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[38px] xl:text-[44px] font-bold text-[#2E5A66] leading-[1.2] tracking-tight">
            Psychiatric Service Dogs vs. Emotional
            <br className="hidden sm:inline" /> Support Animals in {stateName}
          </h2>
          <p className="font-sans text-xs sm:text-sm lg:text-[16px] text-[#5F6B6F] font-semibold leading-relaxed mt-3 max-w-[760px] mx-auto">
            Understanding the differences between Psychiatric Service Dogs (PSDs) and Emotional Support Animals (ESAs) will help you select the support that best meets your mental health needs in {stateName}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-5 xl:gap-8 mb-10 lg:mb-12">
          <div className="bg-white rounded-[22px] sm:rounded-[26px] lg:rounded-[28px] border border-[#EAE5DC] shadow-[0_4px_20px_rgba(0,0,0,0.025)] flex flex-col sm:flex-row overflow-hidden">
            <div className="relative w-full sm:w-[32%] lg:w-[28%] xl:w-[34%] aspect-[4/3] sm:aspect-auto shrink-0 overflow-hidden">
              <Image
                src="/home/emotionalsupportnanimal.png"
                alt="Emotional Support Animals (ESA)"
                fill
                priority
                unoptimized
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            </div>

            <div className="p-4 sm:p-4 lg:p-4.5 xl:p-5 flex flex-col justify-between flex-1 min-w-0">
              <div>
                <h3 className="font-heading text-lg sm:text-xl lg:text-[19px] xl:text-[22px] font-bold text-[#2E5A66] mb-3 leading-snug">
                  Emotional Support Animals
                  <br />
                  (ESA)
                </h3>
                <ul className="space-y-2 mb-4">
                  {esaBullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5F6B6F] shrink-0 mt-1.5" />
                      <span className="font-sans text-[11px] sm:text-[11.5px] lg:text-[11.5px] xl:text-[13px] text-[#5F6B6F] font-semibold leading-tight">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-1 sm:gap-1.5 pt-1 flex-nowrap">
                <span className="font-sans text-[9px] sm:text-[10px] lg:text-[9.5px] xl:text-[11px] font-semibold text-[#1A3D4F] bg-[#E7F5EE] px-1.5 sm:px-2 lg:px-1.5 xl:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap shrink-0">
                  Housing Rights
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] lg:text-[9.5px] xl:text-[11px] font-semibold text-[#1A3D4F] bg-[#E7F5EE] px-1.5 sm:px-2 lg:px-1.5 xl:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap shrink-0">
                  No Pet Fees
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] lg:text-[9.5px] xl:text-[11px] font-semibold text-[#1A3D4F] bg-[#E7F5EE] px-1.5 sm:px-2 lg:px-1.5 xl:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap shrink-0">
                  Emotional Support
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[22px] sm:rounded-[26px] lg:rounded-[28px] border border-[#EAE5DC] shadow-[0_4px_20px_rgba(0,0,0,0.025)] flex flex-col sm:flex-row overflow-hidden">
            <div className="relative w-full sm:w-[32%] lg:w-[28%] xl:w-[34%] aspect-[4/3] sm:aspect-auto shrink-0 overflow-hidden">
              <Image
                src="/psd-letter/psychiatricservicedogs.png"
                alt="Psychiatric Service Dogs (PSD)"
                fill
                priority
                unoptimized
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            </div>

            <div className="p-4 sm:p-4 lg:p-4.5 xl:p-5 flex flex-col justify-between flex-1 min-w-0">
              <div>
                <h3 className="font-heading text-lg sm:text-xl lg:text-[19px] xl:text-[22px] font-bold text-[#2E5A66] mb-3 leading-snug">
                  Psychiatric Service Dogs
                  <br />
                  (PSD)
                </h3>
                <ul className="space-y-2 mb-4">
                  {psdBullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5F6B6F] shrink-0 mt-1.5" />
                      <span className="font-sans text-[11px] sm:text-[11.5px] lg:text-[11.5px] xl:text-[13px] text-[#5F6B6F] font-semibold leading-tight">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-1 sm:gap-1.5 pt-1 flex-nowrap">
                <span className="font-sans text-[9px] sm:text-[10px] lg:text-[9.5px] xl:text-[11px] font-semibold text-[#1A3D4F] bg-[#E7F5EE] px-1.5 sm:px-2 lg:px-1.5 xl:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap shrink-0">
                  Full Public Access
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] lg:text-[9.5px] xl:text-[11px] font-semibold text-[#1A3D4F] bg-[#E7F5EE] px-1.5 sm:px-2 lg:px-1.5 xl:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap shrink-0">
                  Trained Tasks
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] lg:text-[9.5px] xl:text-[11px] font-semibold text-[#1A3D4F] bg-[#E7F5EE] px-1.5 sm:px-2 lg:px-1.5 xl:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap shrink-0">
                  ADA Protected
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Frame 1000012004: Bottom Callout Box */}
        <div className="relative w-full max-w-[959px] mx-auto rounded-[30px] bg-[rgba(232,185,44,0.1)] overflow-hidden flex flex-row items-center pr-4 sm:pr-8 md:pr-[67px] gap-3 sm:gap-[24px]">
          {/* Rectangle 25: Left Accent */}
          <div className="w-[14px] sm:w-[19px] self-stretch min-h-[140px] sm:min-h-[181px] bg-[#E8B92C] shrink-0 rounded-l-[10px]" />

          {/* Frame 1000012015: Content Area */}
          <div className="py-5 sm:py-8 flex flex-col justify-center items-start gap-1 max-w-[849px] flex-1">
            <h3 className="font-heading font-bold text-[18px] sm:text-[20px] leading-[26px] sm:leading-[28px] text-[#2E5A66]">
              Getting a Psychiatric Service Dog in {stateName}
            </h3>
            <p className="font-sans font-medium text-[13px] sm:text-[14px] leading-[20px] sm:leading-[22px] text-[#5F6B6F]">
              Qualifying for a Psychiatric Service Dog requires documentation of a psychiatric disability and completion of task-specific training. Training timelines and costs vary depending on the provider and the specific tasks required. Individuals exploring this option may choose to work with qualified professionals for evaluation, documentation, and guidance. Our platform can help connect individuals with appropriately licensed mental health professionals who can assist with the initial assessment process and discuss next steps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
