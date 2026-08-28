"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export function AlaskaLawsSection() {
  return (
    <section className="w-full bg-[#FAF7F2] py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1060px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-[820px] mx-auto mb-8 sm:mb-10 lg:mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-bold text-[#1E3E47] leading-[1.2] tracking-tight mb-3">
            Alaska ESA Laws for Tenants and Landlords
          </h2>
          <p className="font-sans text-xs sm:text-sm lg:text-[14.5px] text-[#5F6B6F] font-medium leading-relaxed max-w-[760px] mx-auto">
            Housing providers in Alaska are required under federal Fair Housing Act guidelines to provide reasonable accommodation for tenants with legitimate ESA documentation from licensed professionals.
          </p>
        </div>

        {/* 2 White Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 xl:gap-8 mb-10 lg:mb-12">
          
          {/* White Card 1 (Left): Legal Foundation */}
          <div className="bg-white rounded-[20px] sm:rounded-[24px] lg:rounded-[26px] border border-[#EAE5DC] shadow-[0_4px_20px_rgba(0,0,0,0.025)] flex flex-col overflow-hidden">
            
            <div className="relative w-full aspect-[16/9] overflow-hidden shrink-0">
              <Image
                src="/esalaws-fairemployment-housing.png"
                alt="Legal Foundation"
                fill
                priority
                unoptimized
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="p-4.5 sm:p-5 lg:p-6 flex flex-col flex-1">
              <h3 className="font-heading text-lg sm:text-xl lg:text-[21px] xl:text-[23px] font-bold text-[#1E3E47] text-center mb-4 sm:mb-5 leading-snug">
                Legal Protection &amp; Guidelines
              </h3>

              <div className="space-y-4 flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#1E3E47] mb-1">
                      Fair Housing Act Rights
                    </h4>
                    <p className="font-sans text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
                      Federal Fair Housing Act guidelines protect tenants with valid ESA documentation from no-pet policies and extra fees.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#1E3E47] mb-1">
                      Licensed Healthcare Professional Letter
                    </h4>
                    <p className="font-sans text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
                      ESA letters must be issued on official letterhead by an Alaska-licensed provider following a professional evaluation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#1E3E47] mb-1">
                      No Extra Housing Charges
                    </h4>
                    <p className="font-sans text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
                      Landlords are prohibited from charging additional pet deposits or monthly pet fees for verified assistance animals.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* White Card 2 (Right): Housing Provider Rights and Responsibilities */}
          <div className="bg-white rounded-[20px] sm:rounded-[24px] lg:rounded-[26px] border border-[#EAE5DC] shadow-[0_4px_20px_rgba(0,0,0,0.025)] flex flex-col overflow-hidden">
            
            <div className="relative w-full aspect-[16/9] overflow-hidden shrink-0">
              <Image
                src="/esalaws-california-state.png"
                alt="Housing Provider Rights and Responsibilities"
                fill
                priority
                unoptimized
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="p-4.5 sm:p-5 lg:p-6 flex flex-col flex-1">
              <h3 className="font-heading text-lg sm:text-xl lg:text-[21px] xl:text-[23px] font-bold text-[#1E3E47] text-center mb-4 sm:mb-5 leading-snug">
                Landlord Verification &amp; Exceptions
              </h3>

              <div className="space-y-4 flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#1E3E47] mb-1">
                      Licensure Verification
                    </h4>
                    <p className="font-sans text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
                      Landlords may verify the license validity and contact information of the Alaska provider listed on the letter.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#1E3E47] mb-1">
                      Reasonable Accommodation Standards
                    </h4>
                    <p className="font-sans text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
                      Landlords must review accommodation requests promptly without unnecessary delays or unfair barriers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#1E3E47] mb-1">
                      Safety &amp; Property Exclusions
                    </h4>
                    <p className="font-sans text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
                      Requests can be legally denied if the animal poses a direct physical safety threat or causes major property damage.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Notice Box */}
        <div className="max-w-[840px] mx-auto bg-[#FCF6E8] rounded-[18px] sm:rounded-[22px] overflow-hidden flex items-stretch shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <div className="w-3.5 sm:w-4 bg-[#E5B627] shrink-0" />

          <div className="p-4 sm:p-5 lg:p-6 flex-1">
            <h3 className="font-heading text-sm sm:text-base lg:text-[17px] font-bold text-[#1E3E47] tracking-wider uppercase mb-1.5">
              IMPORTANT LEGAL NOTICE
            </h3>
            <p className="font-sans text-[11px] sm:text-xs lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
              Under federal and Alaska fair housing guidelines, an emotional support animal is recognized as an assistance animal for housing purposes. However, ESAs are not service animals under the ADA and do not have general public access rights to businesses, stores, or restaurants.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
