import React from "react";
import { CtaButton, GoldCallout } from "./EsaOnlineShared";

export function EsaOnlineAllStates() {
  return (
    <section className="w-full bg-[#FAF7F2] py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1131px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-3">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[36px] xl:text-[44px] text-balance font-bold text-[#2E5A66] leading-[1.2] xl:leading-[54px] tracking-[-0.00015em] max-w-[915px]">
            Online ESA Letter Consultations Available in All 50 States
          </h2>
          <p className="font-sans text-base font-semibold leading-[26px] text-[#5F6B6F]">
            You’re connected with a licensed mental health professional in your state who conducts your ESA evaluation and may issue documentation when appropriate. ESA requirements vary by state; for example, California requires a 30-day therapeutic relationship before ESA documentation may be issued.
          </p>
        </div>

        <CtaButton href="/states/">View All 50 states</CtaButton>

        <GoldCallout className="text-left max-w-[1021px]">
          No matter where you live, you can be connected with a licensed mental health professional who conducts your ESA evaluation and may issue documentation.
        </GoldCallout>
      </div>
    </section>
  );
}
