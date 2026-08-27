"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export function CaliforniaLawsSection() {
  return (
    <section className="w-full bg-[#FAF7F2] py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1060px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-[780px] mx-auto mb-8 sm:mb-10 lg:mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-bold text-[#1E3E47] leading-[1.2] tracking-tight">
            Understanding ESA Laws in California
            <br className="hidden sm:inline" /> for Housing &amp; Tenant Rights
          </h2>
          <p className="font-sans text-xs sm:text-sm lg:text-[14.5px] text-[#5F6B6F] font-medium leading-relaxed mt-2.5 max-w-[700px] mx-auto">
            Explore how California and federal housing regulations apply to Emotional Support Animals
            (ESAs), and what protections may be available when an ESA is recommended as part of a
            documented, disability-related need.
          </p>
        </div>

        {/* 2 White Cards Grid (FEHA & AB 468) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 xl:gap-8 mb-10 lg:mb-12">
          
          {/* White Card 1 (Left): Fair Employment and Housing Act (FEHA) */}
          <div className="bg-white rounded-[20px] sm:rounded-[24px] lg:rounded-[26px] border border-[#EAE5DC] shadow-[0_4px_20px_rgba(0,0,0,0.025)] flex flex-col overflow-hidden">
            
            {/* Top Image: Flush to top, left & right borders with zero gap */}
            <div className="relative w-full aspect-[16/9] overflow-hidden shrink-0">
              <Image
                src="/esalaws-fairemployment-housing.png"
                alt="Fair Employment and Housing Act (FEHA)"
                fill
                priority
                unoptimized
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Padded Content Area Below Image */}
            <div className="p-4.5 sm:p-5 lg:p-6 flex flex-col flex-1">
              
              {/* Title */}
              <h3 className="font-heading text-lg sm:text-xl lg:text-[21px] xl:text-[23px] font-bold text-[#1E3E47] text-center mb-4 sm:mb-5 leading-snug">
                Fair Employment and Housing
                <br />
                Act (FEHA)
              </h3>

              {/* Checklist */}
              <div className="space-y-4 flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#1E3E47] mb-1">
                      Housing Accommodations for ESAs
                    </h4>
                    <p className="font-sans text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
                      Under FEHA, housing providers in California are required to consider reasonable
                      accommodation requests for emotional support animals when supported by appropriate
                      documentation. Decisions cannot be based solely on an animal&apos;s breed, size, or
                      weight.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#1E3E47] mb-1">
                      No Extra Fees for ESAs
                    </h4>
                    <p className="font-sans text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
                      When approved as a reasonable accommodation, an ESA is not treated as a pet.
                      Housing providers may not charge pet rent or deposits. Tenants remain responsible
                      for any damage caused by the animal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#1E3E47] mb-1">
                      Workplace Accommodations for ESAs
                    </h4>
                    <p className="font-sans text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
                      FEHA also allows employees with disabilities to request reasonable workplace
                      accommodations. However, approval depends on the specific job duties and workplace
                      conditions.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* White Card 2 (Right): California State Rules (AB 468) */}
          <div className="bg-white rounded-[20px] sm:rounded-[24px] lg:rounded-[26px] border border-[#EAE5DC] shadow-[0_4px_20px_rgba(0,0,0,0.025)] flex flex-col overflow-hidden">
            
            {/* Top Image: Flush to top, left & right borders with zero gap */}
            <div className="relative w-full aspect-[16/9] overflow-hidden shrink-0">
              <Image
                src="/esalaws-california-state.png"
                alt="California State Rules (AB 468)"
                fill
                priority
                unoptimized
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Padded Content Area Below Image */}
            <div className="p-4.5 sm:p-5 lg:p-6 flex flex-col flex-1">
              
              {/* Title */}
              <h3 className="font-heading text-lg sm:text-xl lg:text-[21px] xl:text-[23px] font-bold text-[#1E3E47] text-center mb-4 sm:mb-5 leading-snug">
                California State Rules
                <br />
                (AB 468)
              </h3>

              {/* Checklist */}
              <div className="space-y-4 flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#1E3E47] mb-1">
                      30-Day Provider Relationship
                    </h4>
                    <p className="font-sans text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
                      California law requires a licensed mental health professional to establish a
                      therapeutic relationship with a client for a minimum of 30 days before determining
                      whether an ESA recommendation is clinically appropriate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#1E3E47] mb-1">
                      Disclosure About ESAs
                    </h4>
                    <p className="font-sans text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
                      Clients must be informed that emotional support animals are not service animals and
                      that misrepresenting an animal as a service animal or an ESA may carry legal
                      consequences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#1E3E47] mb-1">
                      Required Evaluation &amp; License Details
                    </h4>
                    <p className="font-sans text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
                      The professional must conduct a clinical evaluation and include their license type,
                      license number, jurisdiction, and issuance date on the ESA letter.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Notice Box ("IMPORTANT LEGAL NOTICE") - Reduced size, matching Screenshot 2 */}
        <div className="max-w-[840px] mx-auto bg-[#FCF6E8] rounded-[18px] sm:rounded-[22px] overflow-hidden flex items-stretch shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          {/* Gold Vertical Accent Bar */}
          <div className="w-3.5 sm:w-4 bg-[#E5B627] shrink-0" />

          {/* Notice Content */}
          <div className="p-4 sm:p-5 lg:p-6 flex-1">
            <h3 className="font-heading text-sm sm:text-base lg:text-[17px] font-bold text-[#1E3E47] tracking-wider uppercase mb-1.5">
              IMPORTANT LEGAL NOTICE
            </h3>
            <p className="font-sans text-[11px] sm:text-xs lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
              Emotional support animals receive housing-related protections when approved as a reasonable
              accommodation but do not have public access rights. ESAs are generally not permitted in
              restaurants, retail spaces, or other locations that restrict animals. Airline policies
              regarding emotional support animals vary and change frequently. Most airlines no longer accept
              ESA letters for in-cabin travel, and travelers should confirm current requirements directly
              with their airline before making plans.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
