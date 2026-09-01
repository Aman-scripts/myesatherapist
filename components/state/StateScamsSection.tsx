"use client";

import React from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";
import { StateData } from "@/data/statesData";

export function StateScamsSection({ data }: { data: StateData }) {
  const stateName = data.name;

  return (
    <section className="w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1279px] mx-auto">
        <div className="text-center max-w-[840px] mx-auto mb-10 sm:mb-12 lg:mb-14 space-y-3">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[44px] font-bold text-[#2E5A66] leading-[1.23] tracking-[-0.00015em]">
            {stateName} ESA Scams: What&apos;s Real vs. Fake
          </h2>
          <p className="font-sans text-sm sm:text-base lg:text-[16px] text-[#5F6B6F] font-semibold leading-[26px] max-w-[760px] mx-auto">
            Getting an idea of the common ESA scams in {stateName} can help you save yourself from fake websites and false certifications and registrations online.
          </p>
        </div>

        {/* Warning Alert Banner */}
        <div className="max-w-[895px] mx-auto bg-[#FFF0F0] rounded-[20px] overflow-hidden flex items-stretch shadow-[0_4px_20px_rgba(0,0,0,0.02)] mb-10 sm:mb-12 lg:mb-14">
          <div className="w-[14px] bg-[#D9383A] shrink-0" />
          <div className="p-4 sm:p-5 lg:p-6 flex items-center gap-4 flex-1">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0">
              <Image
                src="/californina-scams-alert-icon.svg"
                alt="Alert Icon"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="font-sans text-[15px] sm:text-[16px] font-bold text-[#D9383A] leading-[22px]">
                Important: No Official ESA Registry Exists
              </h3>
              <p className="font-sans text-[13px] sm:text-[14px] text-[#5F6B6F] font-semibold leading-[24px]">
                There is no state or federal registry, certification system, database, or official ESA ID in {stateName} or anywhere else in the United States.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-[1140px] mx-auto">
          {/* Card 1: What You Actually Need */}
          <div className="bg-white rounded-[30px] border border-[#EAE5DC]/50 shadow-[0_4px_25px_rgba(0,0,0,0.025)] flex flex-col overflow-hidden">
            <div className="relative w-full h-[240px] sm:h-[280px] overflow-hidden shrink-0">
              <Image
                src="/california-scams-whatyouneed.png"
                alt="What You Actually Need for an ESA"
                fill
                priority
                unoptimized
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="p-6 sm:p-8 flex flex-col flex-1">
              <h3 className="font-heading text-xl sm:text-2xl lg:text-[24px] font-bold text-[#2E5A66] text-center mb-6 leading-[32px] tracking-[-0.00015em]">
                What You Actually Need
              </h3>

              <div className="space-y-5 flex-1">
                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-sans text-[15px] sm:text-[16px] font-semibold text-[#2E5A66] leading-[24px]">
                      A Clinical Evaluation
                    </h4>
                    <p className="font-sans text-[13px] sm:text-[14px] text-[#5F6B6F] font-semibold leading-[22px]">
                      A consultation with an {stateName}-licensed mental health professional who evaluates your need for an ESA.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-sans text-[15px] sm:text-[16px] font-semibold text-[#2E5A66] leading-[24px]">
                      A Legitimate Signed Letter
                    </h4>
                    <p className="font-sans text-[13px] sm:text-[14px] text-[#5F6B6F] font-semibold leading-[22px]">
                      A written recommendation on professional letterhead with the clinician&apos;s license details and contact information.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#1A3D4F] to-[#1D6E72] text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-sans text-[15px] sm:text-[16px] font-semibold text-[#2E5A66] leading-[24px]">
                      Compliant Timeline
                    </h4>
                    <p className="font-sans text-[13px] sm:text-[14px] text-[#5F6B6F] font-semibold leading-[22px]">
                      Compliance with {stateName} state standards for valid clinical provider relationships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: What to Avoid */}
          <div className="bg-white rounded-[30px] border border-[#EAE5DC]/50 shadow-[0_4px_25px_rgba(0,0,0,0.025)] flex flex-col overflow-hidden">
            <div className="relative w-full h-[240px] sm:h-[280px] overflow-hidden shrink-0">
              <Image
                src="/california-scams-whattoavoid.png"
                alt="What to Avoid with ESA Scams"
                fill
                priority
                unoptimized
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="p-6 sm:p-8 flex flex-col flex-1">
              <h3 className="font-heading text-xl sm:text-2xl lg:text-[24px] font-bold text-[#D9383A] text-center mb-6 leading-[32px] tracking-[-0.00015em]">
                What to Avoid
              </h3>

              <div className="space-y-5 flex-1">
                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#D9383A] text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                    <X className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-sans text-[15px] sm:text-[16px] font-semibold text-[#D9383A] leading-[24px]">
                      &ldquo;Instant Approval&rdquo; Services
                    </h4>
                    <p className="font-sans text-[13px] sm:text-[14px] text-[#5F6B6F] font-semibold leading-[22px]">
                      Websites claiming to issue valid ESA letters within minutes without clinician interaction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#D9383A] text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                    <X className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-sans text-[15px] sm:text-[16px] font-semibold text-[#D9383A] leading-[24px]">
                      Registries &amp; ID Cards
                    </h4>
                    <p className="font-sans text-[13px] sm:text-[14px] text-[#5F6B6F] font-semibold leading-[22px]">
                      Paid badges, certificates, vests, or ID cards that claim to make your pet an official ESA.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#D9383A] text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                    <X className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-sans text-[15px] sm:text-[16px] font-semibold text-[#D9383A] leading-[24px]">
                      Out-of-State Providers
                    </h4>
                    <p className="font-sans text-[13px] sm:text-[14px] text-[#5F6B6F] font-semibold leading-[22px]">
                      Clinicians not licensed in {stateName} cannot legally issue compliant documentation for {stateName} residents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
