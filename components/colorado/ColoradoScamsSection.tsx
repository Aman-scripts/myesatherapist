"use client";

import React from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";

export function ColoradoScamsSection() {
  return (
    <section className="w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1060px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-[840px] mx-auto mb-8 sm:mb-10 lg:mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-bold text-[#1E3E47] leading-[1.2] tracking-tight">
            Colorado ESA Scams: What&apos;s Real and What&apos;s Fake
          </h2>
          <p className="font-sans text-xs sm:text-sm lg:text-[15px] text-[#5F6B6F] font-medium leading-relaxed mt-3 max-w-[760px] mx-auto">
            Protecting yourself from ESA scams in Colorado starts with knowing what the law requires. A little clarity can save you money and ensure your ESA documentation is fully legitimate and compliant.
          </p>
        </div>

        {/* Warning Notice Box */}
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
                Important: No Official ESA Registry Exists
              </h3>
              <p className="font-sans text-xs sm:text-[13px] lg:text-[13.5px] text-[#5F6B6F] font-medium leading-relaxed">
                Colorado does not have any government-approved ESA registry, certification system, or official database, and neither does any other state. Any website claiming to “register” or “certify” your ESA is not legitimate.
              </p>
            </div>
          </div>
        </div>

        {/* 2 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 xl:gap-8">
          
          {/* Left Card: What You Actually Need */}
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
                What You Actually Need
              </h3>

              <div className="space-y-5 flex-1">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#1E3E47] mb-1">
                      ESA Documentation from a Licensed Therapist
                    </h4>
                    <p className="font-sans text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
                      You must have a valid ESA Documentation written by a Colorado-licensed mental health professional.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#1E3E47] mb-1">
                      Mental Health Evaluation
                    </h4>
                    <p className="font-sans text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
                      A proper assessment from a licensed professional to determine your emotional or psychological need for an ESA.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#1E3E47] mb-1">
                      Ongoing Therapeutic Relationship
                    </h4>
                    <p className="font-sans text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
                      Continued care and documentation support with your mental health provider.
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
                Common ESA Scams to Watch Out For
              </h3>

              <div className="space-y-4 sm:space-y-4.5 flex-1">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#D9383A] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#D9383A] pt-0.5 leading-snug">
                    Sell ESA “registration” or “certification”.
                  </h4>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#D9383A] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#D9383A] pt-0.5 leading-snug">
                    Sell fake ESA badges or ID cards.
                  </h4>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#D9383A] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#D9383A] pt-0.5 leading-snug">
                    Promise instant ESA approval without an evaluation.
                  </h4>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#D9383A] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#D9383A] pt-0.5 leading-snug">
                    Provide letters with missing details or no therapist credentials.
                  </h4>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#D9383A] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#D9383A] pt-0.5 leading-snug">
                    Claim guaranteed housing approval with zero requirements.
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
