"use client";

import React from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";

export function IdahoScamsSection() {
  return (
    <section className="w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1060px] mx-auto">
        
        <div className="text-center max-w-[840px] mx-auto mb-8 sm:mb-10 lg:mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-bold text-[#1E3E47] leading-[1.2] tracking-tight">
            ESA Letters in Idaho: Facts vs. Misconceptions
          </h2>
          <p className="font-sans text-xs sm:text-sm lg:text-[15px] text-[#5F6B6F] font-medium leading-relaxed mt-3 max-w-[760px] mx-auto">
            Understanding how emotional support animal regulations function in Idaho can help individuals avoid misleading information, false claims, and untrustworthy providers.
          </p>
        </div>

        <div className="max-w-[840px] mx-auto bg-[#FFF0F0] rounded-[18px] sm:rounded-[22px] overflow-hidden flex items-stretch shadow-[0_4px_20px_rgba(0,0,0,0.02)] mb-10 sm:mb-12 lg:mb-14">
          <div className="w-3.5 sm:w-4 bg-[#D9383A] shrink-0" />

          <div className="p-4 sm:p-5 lg:p-6 flex items-center gap-3.5 sm:gap-4 flex-1">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 shrink-0">
              <Image
                src="/californina-scams-alert-icon.svg"
                alt="Alert Icon"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-sans text-sm sm:text-base lg:text-[16.5px] font-bold text-[#D9383A] mb-1">
                Important Notice: No Official ESA Registry Exists
              </h3>
              <p className="font-sans text-xs sm:text-[13px] lg:text-[13.5px] text-[#5F6B6F] font-medium leading-relaxed">
                There is no state or federal ESA registration system in Idaho. Any website offering ID cards, certificates, “official registries,” or instant approvals should be approached with caution. A legitimate ESA letter can only be issued by a licensed mental health professional after completing an appropriate clinical evaluation.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 xl:gap-8">
          
          {/* Left Card: What Is Truly Required */}
          <div className="bg-[#EFF6F3] rounded-[20px] sm:rounded-[24px] lg:rounded-[26px] border border-[#E1EFE9] shadow-[0_4px_25px_rgba(0,0,0,0.025)] flex flex-col overflow-hidden">
            
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden shrink-0">
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

            <div className="p-5 sm:p-6 lg:p-7 flex flex-col flex-1">
              <h3 className="font-heading text-xl sm:text-2xl lg:text-[23px] xl:text-[25px] font-bold text-[#1E3E47] text-center mb-6 sm:mb-7 leading-snug">
                What Is Truly Required in Idaho
              </h3>

              <div className="space-y-5 flex-1">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#1E3E47] mb-1">
                      Evaluation by an Idaho-Licensed Professional
                    </h4>
                    <p className="font-sans text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
                      An ESA letter must be issued by a licensed mental health professional in Idaho after a detailed clinical assessment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#1E3E47] mb-1">
                      Recognized Mental Health Condition
                    </h4>
                    <p className="font-sans text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
                      The individual should have a diagnosable condition that meaningfully impacts daily life, with the recommendation connecting animal support to symptoms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#1E3E47] mb-1">
                      Established Client Relationship
                    </h4>
                    <p className="font-sans text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
                      A valid ESA letter relies on a genuine provider-client relationship formed through proper consultation with valid credentials.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Card: Common ESA Scams */}
          <div className="bg-[#FFF0F0] rounded-[20px] sm:rounded-[24px] lg:rounded-[26px] border border-[#FCDADA] shadow-[0_4px_25px_rgba(0,0,0,0.025)] flex flex-col overflow-hidden">
            
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden shrink-0">
              <Image
                src="/california-scams-commonesascams.png"
                alt="Common ESA Scams to avoid"
                fill
                priority
                unoptimized
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="p-5 sm:p-6 lg:p-7 flex flex-col flex-1">
              <h3 className="font-heading text-xl sm:text-2xl lg:text-[23px] xl:text-[25px] font-bold text-[#D9383A] text-center mb-6 sm:mb-7 leading-snug">
                Common ESA Scams
              </h3>

              <div className="space-y-4 sm:space-y-4.5 flex-1">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#D9383A] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#D9383A] pt-0.5 leading-snug">
                    Claim your ESA can be &ldquo;officially registered&rdquo; in an Idaho database.
                  </h4>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#D9383A] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#D9383A] pt-0.5 leading-snug">
                    Promote ID cards, vests, tags, or certificates as mandatory legal proof.
                  </h4>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#D9383A] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#D9383A] pt-0.5 leading-snug">
                    Provide instant approvals without evaluation by an Idaho clinician.
                  </h4>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#D9383A] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#D9383A] pt-0.5 leading-snug">
                    Issue ESA letters without a legitimate provider-client relationship.
                  </h4>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#D9383A] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#D9383A] pt-0.5 leading-snug">
                    Guarantee landlord approval without individualized review.
                  </h4>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
