"use client";

import React from "react";
import Image from "next/image";
import { PricingSection } from "@/components/home/PricingSection";

const PLAN_INTRO =
  "Choose the plan that fits your needs. All plans include essential features to get you started, with options to scale as you grow. No hidden fees and the flexibility to change anytime.";

export function PricingPlansSection({
  ctaHref = "#evaluation",
  addPetHref = "#add-pet",
}: {
  ctaHref?: string;
  addPetHref?: string;
} = {}) {
  return (
    <div id="plans">
      <PricingSection
        ctaHref={ctaHref}
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
        ctaHref={ctaHref}
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
        <div className="max-w-[1065px] mx-auto bg-white rounded-[20px] shadow-[0px_2px_10px_rgba(103,103,103,0.08)] flex items-stretch gap-4 sm:gap-5 pl-4 sm:pl-5 pr-4 sm:pr-8 py-4 sm:py-5">
          <div className="hidden sm:block w-[7px] self-stretch rounded-full bg-primary shrink-0 my-1" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 flex-1 min-w-0">
            <div className="flex items-center gap-4 sm:gap-5 flex-1 min-w-0">
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
                <p className="font-sans font-medium text-[14px] leading-[22px] text-[#5F6B6F] max-w-[620px]">
                  Each additional animal requires its own clinical evaluation and documentation.
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  Select this add-on at checkout to cover a second or additional pet.
                </p>
              </div>
            </div>
            <a
              href={addPetHref}
              className="inline-flex items-center justify-center h-[48px] px-8 rounded-full border border-primary bg-white text-primary font-sans font-semibold text-[16px] leading-[22px] shrink-0 hover:bg-background transition-colors"
            >
              Add A Pet
            </a>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}
