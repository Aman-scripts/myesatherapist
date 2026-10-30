"use client";

import React from "react";
import Image from "next/image";
import { PricingSection } from "@/components/home/PricingSection";

const PLAN_INTRO =
  "Choose the plan that fits your needs. All plans include essential features to get you started, with options to scale as you grow. No hidden fees and the flexibility to change anytime.";

export function PricingPlansSection() {
  return (
    <div id="plans">
      <PricingSection
        ctaHref="#evaluation"
        heading="Emotional Support Animal"
        descriptionOverride={PLAN_INTRO}
        showTabs={false}
        maxCards={2}
        popularCardIndex={1}
        showDog={false}
        sectionClassName="pt-16 lg:pt-24 pb-6"
      />
      <PricingSection
        sectionId="pricing-psd"
        defaultPlan="psd"
        ctaHref="#evaluation"
        heading="Psychiatric Service Dog"
        descriptionOverride={PLAN_INTRO}
        showTabs={false}
        maxCards={2}
        popularCardIndex={1}
        showDog={false}
        sectionClassName="pt-6 pb-8 lg:pb-12"
      />

      <section className="pb-16 sm:pb-20 lg:pb-24 bg-background relative z-10 overflow-visible">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================================================== */}
        {/* ADD-ON BANNER: More Than One Pet? (Frame 1000012004) */}
        {/* ==================================================== */}
        <div className="max-w-[1065px] mx-auto bg-white rounded-[18px] shadow-[0px_2px_10px_rgba(103,103,103,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 py-4 sm:py-5">
          <div className="flex items-center gap-4 sm:gap-5 flex-1 min-w-0">
            <div className="hidden sm:block w-[10px] h-[64px] rounded-full bg-primary shrink-0" />
            <Image
              src="/pricing/pricingsection_Addpetbutton-icon.svg"
              alt=""
              width={64}
              height={64}
              unoptimized
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain shrink-0"
            />
            <div className="flex flex-col justify-center min-w-0">
              <h4 className="font-sans font-bold text-[18px] leading-[26px] text-primary">
                More Than One Pet?
              </h4>
              <p className="font-sans font-medium text-[14px] leading-[22px] text-[#6B7280]">
                Each additional animal requires its own clinical evaluation and documentation. Select this add-on at checkout to cover a second or additional pet.
              </p>
            </div>
          </div>
          <a
            href="#add-pet"
            className="inline-flex items-center gap-2 pl-5 pr-2 h-[42px] rounded-full bg-primary text-white font-sans font-semibold text-[15px] leading-[22px] shrink-0 hover:opacity-90 transition-opacity"
          >
            <span>Add a Pet</span>
            <Image
              src="/pricing/pricingsection_Addpetbutton-icon.svg"
              alt=""
              width={26}
              height={26}
              unoptimized
              className="w-[26px] h-[26px] object-contain shrink-0"
            />
          </a>
        </div>
      </div>
      </section>
    </div>
  );
}
