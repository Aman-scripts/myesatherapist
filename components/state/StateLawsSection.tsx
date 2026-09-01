"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { StateData } from "@/data/statesData";

export function StateLawsSection({ data }: { data: StateData }) {
  const stateName = data.name;

  return (
    <section className="w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1279px] mx-auto">
        <div className="text-center max-w-[820px] mx-auto mb-10 sm:mb-12 lg:mb-14 space-y-3">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[44px] font-bold text-[#2E5A66] leading-[1.23] tracking-[-0.00015em]">
            Understanding ESA Laws in {stateName} for Housing &amp; Tenant Rights
          </h2>
          <p className="font-sans text-sm sm:text-base lg:text-[16px] text-[#5F6B6F] font-semibold leading-[26px] max-w-[813px] mx-auto">
            {data.lawsSubtitle ||
              `Explore how ${stateName} and federal housing regulations apply to Emotional Support Animals (ESAs), and what protections may be available when an ESA is recommended as part of a documented need.`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Fair Employment and Housing Act (FEHA) / Federal Guidelines */}
          <div className="bg-white rounded-[30px] border border-[#EAE5DC]/50 shadow-[0_4px_20px_rgba(0,0,0,0.025)] flex flex-col overflow-hidden">
            <div className="relative w-full h-[260px] sm:h-[313px] overflow-hidden shrink-0">
              <Image
                src="/esalaws-fairemployment-housing.png"
                alt="Fair Housing Act Guidelines"
                fill
                priority
                unoptimized
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="p-6 sm:p-8 lg:p-10 flex flex-col flex-1">
              <h3 className="font-heading text-xl sm:text-2xl lg:text-[28px] font-bold text-[#2E5A66] text-center mb-6 sm:mb-8 leading-[36px] tracking-[-0.00015em]">
                {data.card1Title || "Fair Housing Act & Tenant Rights"}
              </h3>

              <div className="space-y-6 flex-1 max-w-[498px] mx-auto">
                {(data.card1Items || [
                  {
                    title: "Housing Accommodations for ESAs",
                    description:
                      `Under applicable housing laws, housing providers in ${stateName} are required to consider reasonable accommodation requests for emotional support animals when supported by appropriate documentation.`,
                  },
                  {
                    title: "No Extra Fees for ESAs",
                    description:
                      "When approved as a reasonable accommodation, an ESA is not treated as a pet. Housing providers may not charge pet rent or deposits. Tenants remain responsible for any damage.",
                  },
                  {
                    title: "Workplace Accommodations for ESAs",
                    description:
                      "Relevant laws also allow employees with documented conditions to request workplace accommodations, subject to job duties and specific workplace policies.",
                  },
                ]).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-[10px] bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] text-white flex items-center justify-center shrink-0 mt-1">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-sans text-[16px] sm:text-[18px] font-semibold text-[#2E5A66] leading-[30px]">
                        {item.title}
                      </h4>
                      <p className="font-sans text-[13px] sm:text-[14px] text-[#5F6B6F] font-semibold leading-[26px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: State Rules & Requirements */}
          <div className="bg-white rounded-[30px] border border-[#EAE5DC]/50 shadow-[0_4px_20px_rgba(0,0,0,0.025)] flex flex-col overflow-hidden">
            <div className="relative w-full h-[260px] sm:h-[313px] overflow-hidden shrink-0">
              <Image
                src="/esalaws-california-state.png"
                alt="State Rules & Regulations"
                fill
                priority
                unoptimized
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="p-6 sm:p-8 lg:p-10 flex flex-col flex-1">
              <h3 className="font-heading text-xl sm:text-2xl lg:text-[28px] font-bold text-[#2E5A66] text-center mb-6 sm:mb-8 leading-[36px] tracking-[-0.00015em]">
                {data.card2Title || `${stateName} State Rules & Standards`}
              </h3>

              <div className="space-y-6 flex-1 max-w-[498px] mx-auto">
                {(data.card2Items || [
                  {
                    title: "Licensed Provider Relationship",
                    description:
                      `State regulations require a licensed mental health professional to establish a clinical relationship before determining whether an ESA recommendation is appropriate.`,
                  },
                  {
                    title: "Disclosure About ESAs",
                    description:
                      "Clients must be informed that emotional support animals are not service animals and that misrepresenting an animal as a service animal carries legal consequences.",
                  },
                  {
                    title: "Required Evaluation & License Details",
                    description:
                      `The professional must conduct a clinical evaluation and include their license type, number, jurisdiction, and issuance date on the ESA letter.`,
                  },
                ]).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-[10px] bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] text-white flex items-center justify-center shrink-0 mt-1">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-sans text-[16px] sm:text-[18px] font-semibold text-[#2E5A66] leading-[30px]">
                        {item.title}
                      </h4>
                      <p className="font-sans text-[13px] sm:text-[14px] text-[#5F6B6F] font-semibold leading-[26px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
