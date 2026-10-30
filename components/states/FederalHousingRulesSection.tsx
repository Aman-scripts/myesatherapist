"use client";

import React from "react";
import { CtaButton } from "@/components/common/CtaButton";

export function FederalHousingRulesSection() {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#EAE5DC]/60 overflow-hidden">
      {/* Frame 1000011447 */}
      <div className="max-w-[1254px] mx-auto flex flex-col items-center text-center gap-2">
        
        {/* Federal Housing Protections & State ESA Rules */}
        <h2 className="heading-h2 text-primary max-w-[955px] mb-2">
          Federal Housing Protections & State ESA Rules
        </h2>

        {/* Body Description Text */}
        <div className="max-w-[1044px] flex flex-col gap-3 body-large text-body-text text-center mb-8">
          <p>
            The Fair Housing Act (FHA) ensures your right to live with an emotional support animal in housing. Valid documentation must come from a licensed healthcare professional who can assess your need for an emotional support animal. Certain states have additional requirements.
          </p>
          <p>
            For instance, Arkansas, California, Iowa, Louisiana, and Montana require a minimum 30-day patient–provider relationship before a professional can provide ESA documentation.
          </p>
        </div>

        {/* Frame 1000011891: CTA Button */}
        <CtaButton
          href="/pricing/"
          className="w-auto min-w-[246px]"
        >
          Get Started
        </CtaButton>

      </div>
    </section>
  );
}
