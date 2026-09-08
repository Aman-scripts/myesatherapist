"use client";

import React from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";
import { StateData } from "@/data/statesData";

export function StateScamsSection({ data }: { data: StateData }) {
  const stateName = data.name;

  const defaultWhatYouNeed = [
    {
      title: "ESA Letter from a Licensed Provider",
      description: `Your ESA letter ${stateName} must come after a proper evaluation by a mental health professional licensed in the state.`,
    },
    {
      title: "Clinical Mental Health Evaluation",
      description: "A comprehensive assessment of your emotional or mental health condition is a required part of the ESA review process.",
    },
    {
      title: "Verified Therapeutic Relationship",
      description: "An ongoing or clearly established provider-patient relationship helps confirm the validity of the recommendation.",
    },
  ];

  const defaultCommonScams = [
    "Advertise “ESA registrations” or suggest there is an official certification system.",
    "Sell unofficial ESA letters, ID cards, badges, or animal accessories.",
    "Provide immediate ESA approvals without a proper clinical evaluation.",
    "Claim guaranteed acceptance or approval by landlords or housing providers.",
    `Operate without licensed ${stateName} mental health professionals.`,
  ];

  const title = data.scamsTitle || `${stateName} ESA Scams: What's Real vs. Fake`;
  const subtitle = data.scamsSubtitle || `Getting an idea of the common ESA scams in ${stateName} can help you save yourself from fake websites and false certifications and registrations online.`;
  const alertTitle = data.scamsAlertTitle || "Important: No Official ESA Registry Exists";
  const alertText = data.scamsAlertText || `There is no state or federal registry, certification system, database, or official ESA ID in ${stateName} or anywhere else in the United States.`;
  const whatYouNeedTitle = data.scamsWhatYouNeedTitle || "What You Actually Need";
  const whatYouNeedItems = data.scamsWhatYouNeedItems && data.scamsWhatYouNeedItems.length > 0
    ? data.scamsWhatYouNeedItems
    : defaultWhatYouNeed;
  const commonTitle = data.scamsCommonTitle || "Common ESA Scams";
  const commonSubtitle = data.scamsCommonSubtitle;
  const commonItems = data.scamsCommonItems && data.scamsCommonItems.length > 0
    ? data.scamsCommonItems
    : defaultCommonScams;

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1060px] mx-auto">
        <div className="text-center max-w-[840px] mx-auto mb-8 sm:mb-10 lg:mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-bold text-[#2E5A66] leading-[1.2] tracking-tight">
            {title}
          </h2>
          <p className="font-sans text-xs sm:text-sm lg:text-[16px] text-[#5F6B6F] font-semibold leading-relaxed mt-3 max-w-[760px] mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="max-w-[840px] mx-auto bg-[#FFF0F0] rounded-[18px] sm:rounded-[22px] overflow-hidden flex items-stretch shadow-[0_4px_20px_rgba(0,0,0,0.02)] mb-10 sm:mb-12 lg:mb-14">
          <div className="w-3.5 sm:w-4 bg-[#D9383A] shrink-0" />
          <div className="p-4 sm:p-5 lg:p-6 flex items-center gap-3.5 sm:gap-4 flex-1">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 shrink-0">
              <Image
                src="/states/californina-scams-alert-icon.svg"
                alt="Alert Icon"
                fill
                unoptimized
                className="object-contain"
                sizes="40px"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-sans text-sm sm:text-base lg:text-[16.5px] font-bold text-[#D9383A] mb-1">
                {alertTitle}
              </h3>
              <p className="font-sans text-xs sm:text-[13px] lg:text-[14px] text-[#5F6B6F] font-semibold leading-relaxed">
                {alertText}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 xl:gap-8">
          <div className="bg-[#EFF6F3] rounded-[20px] sm:rounded-[24px] lg:rounded-[26px] border border-[#E1EFE9] shadow-[0_4px_25px_rgba(0,0,0,0.025)] flex flex-col overflow-hidden">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden shrink-0">
              <Image
                src="/states/california-scams-whatyouneed.png"
                alt="What You Actually Need for an ESA"
                fill
                priority
                unoptimized
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="p-5 sm:p-6 lg:p-7 flex flex-col flex-1">
              <h3 className="font-heading text-xl sm:text-2xl lg:text-[23px] xl:text-[28px] font-bold text-[#2E5A66] text-center mb-6 sm:mb-7 leading-snug">
                {whatYouNeedTitle}
              </h3>

              <div className="space-y-5 flex-1">
                {whatYouNeedItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div
                      className="w-5 h-5 rounded-full text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs"
                      style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="font-sans text-xs sm:text-[13.5px] lg:text-[16px] font-bold text-[#2E5A66] mb-1">
                        {item.title}
                      </h4>
                      <p className="font-sans text-[11px] sm:text-[12px] lg:text-[14px] text-[#5F6B6F] font-semibold leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#FFF0F0] rounded-[20px] sm:rounded-[24px] lg:rounded-[26px] border border-[#FCDADA] shadow-[0_4px_25px_rgba(0,0,0,0.025)] flex flex-col overflow-hidden">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden shrink-0">
              <Image
                src="/states/california-scams-commonesascams.png"
                alt="Common ESA Scams to avoid"
                fill
                priority
                unoptimized
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="p-5 sm:p-6 lg:p-7 flex flex-col flex-1">
              <h3 className="font-heading text-xl sm:text-2xl lg:text-[23px] xl:text-[28px] font-bold text-[#D9383A] text-center mb-5 sm:mb-6 leading-snug">
                {commonTitle}
              </h3>

              {commonSubtitle && (
                <h4 className="font-sans text-sm sm:text-base lg:text-[16px] font-bold text-[#2E5A66] text-left mb-4">
                  {commonSubtitle}
                </h4>
              )}

              <div className="space-y-4 sm:space-y-4.5 flex-1">
                {commonItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-[#D9383A] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <X className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <p className="font-sans text-xs sm:text-[13.5px] lg:text-[14.5px] font-semibold text-[#5F6B6F] pt-0.5 leading-snug">
                      {item}
                    </p>
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
