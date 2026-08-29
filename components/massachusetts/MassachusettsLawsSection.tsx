"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export function MassachusettsLawsSection() {
  return (
    <section className="w-full bg-[#FAF7F2] py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1060px] mx-auto">
        <div className="text-center max-w-[820px] mx-auto mb-8 sm:mb-10 lg:mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-bold text-[#1E3E47] leading-[1.2] tracking-tight mb-3">
            Housing Accommodations For Emotional Support Animals in Massachusetts
          </h2>
          <p className="font-sans text-xs sm:text-sm lg:text-[14.5px] text-[#5F6B6F] font-medium leading-relaxed max-w-[760px] mx-auto">
            Under federal and state rules in Massachusetts, individuals with emotional support animal documentation from a licensed mental health professional are entitled to fair housing protections.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 xl:gap-8 mb-10 lg:mb-12">
          {/* Card 1: Federal Housing Guidelines */}
          <div className="bg-white rounded-[20px] sm:rounded-[24px] lg:rounded-[26px] border border-[#EAE5DC] shadow-[0_4px_20px_rgba(0,0,0,0.025)] flex flex-col overflow-hidden">
            <div className="relative w-full aspect-[16/9] overflow-hidden shrink-0">
              <Image
                src="/esalaws-fairemployment-housing.png"
                alt="Federal Housing Guidelines"
                fill
                priority
                unoptimized
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="p-4.5 sm:p-5 lg:p-6 flex flex-col flex-1">
              <h3 className="font-heading text-lg sm:text-xl lg:text-[21px] xl:text-[23px] font-bold text-[#1E3E47] text-center mb-4 sm:mb-5 leading-snug">
                Federal Housing Guidelines
              </h3>

              <div className="space-y-4 flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#1E3E47] mb-1">
                      Reasonable Accommodation Requirement
                    </h4>
                    <p className="font-sans text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
                      Under the Fair Housing Act, landlords must review ESA accommodation requests and allow residents with valid documentation to live with their emotional support animals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#1E3E47] mb-1">
                      Documentation From Licensed Professionals
                    </h4>
                    <p className="font-sans text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
                      Housing providers may request credible documentation from a licensed mental health professional confirming the individual&apos;s need for an ESA due to a mental health condition.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#1E3E47] mb-1">
                      Equal Housing Opportunity Protections
                    </h4>
                    <p className="font-sans text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
                      Federal housing rules ensure individuals with qualifying mental health conditions are not unfairly denied housing because they rely on an emotional support animal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Housing Provider Roles */}
          <div className="bg-white rounded-[20px] sm:rounded-[24px] lg:rounded-[26px] border border-[#EAE5DC] shadow-[0_4px_20px_rgba(0,0,0,0.025)] flex flex-col overflow-hidden">
            <div className="relative w-full aspect-[16/9] overflow-hidden shrink-0">
              <Image
                src="/esalaws-california-state.png"
                alt="Housing Provider Roles & Responsibilities"
                fill
                priority
                unoptimized
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="p-4.5 sm:p-5 lg:p-6 flex flex-col flex-1">
              <h3 className="font-heading text-lg sm:text-xl lg:text-[21px] xl:text-[23px] font-bold text-[#1E3E47] text-center mb-4 sm:mb-5 leading-snug">
                Housing Provider Roles &amp; Responsibilities
              </h3>

              <div className="space-y-4 flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#1E3E47] mb-1">
                      Reviewing ESA Accommodation Requests
                    </h4>
                    <p className="font-sans text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
                      Housing providers should evaluate ESA requests individually and fairly, considering supporting documentation before making decisions regarding emotional support animals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#1E3E47] mb-1">
                      Respecting Tenant Privacy
                    </h4>
                    <p className="font-sans text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
                      Landlords may verify ESA documentation but should not request detailed medical histories beyond confirming the presence of a qualifying condition.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[14px] font-bold text-[#1E3E47] mb-1">
                      Avoiding Unnecessary Delays
                    </h4>
                    <p className="font-sans text-[11px] sm:text-[12px] lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
                      Housing providers are expected to respond to ESA accommodation requests in a timely manner and communicate clearly with tenants.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Notice Box */}
        <div className="max-w-[840px] mx-auto bg-[#FCF6E8] rounded-[18px] sm:rounded-[22px] overflow-hidden flex items-stretch shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <div className="w-3.5 sm:w-4 bg-[#E5B627] shrink-0" />
          <div className="p-4 sm:p-5 lg:p-6 flex-1">
            <h3 className="font-heading text-sm sm:text-base lg:text-[17px] font-bold text-[#1E3E47] tracking-wider uppercase mb-1.5">
              IMPORTANT LEGAL NOTICE
            </h3>
            <p className="font-sans text-[11px] sm:text-xs lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
              Under the Fair Housing Act, emotional support animals are allowed in housing in Massachusetts with valid documentation. However, ESAs do not have automatic public access rights under the Americans with Disabilities Act. Airline travel rules vary and ESAs are subject to individual carrier guidelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
