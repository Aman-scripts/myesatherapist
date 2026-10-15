"use client";

import React from "react";
import { CtaButton } from "@/components/common/CtaButton";

const TEAL_GRADIENT = "var(--color-gradient)";

export function EsaRenewalHousingSection() {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 sm:space-y-10">
        {/* Title */}
        <h2 className="font-heading text-2xl sm:text-4xl lg:text-[34px] xl:text-[44px] font-bold text-primary leading-tight sm:leading-[54px] lg:leading-[42px] xl:leading-[54px] tracking-tight max-w-[980px] mx-auto">
          Renewals for Housing Accommodation Requests
        </h2>

        {/* Text Body */}
        <div className="space-y-4 max-w-[960px] mx-auto text-base sm:text-lg text-body-text font-semibold leading-[1.7] font-sans">
          <p>
            Landlords or property managers may ask for a current emotional support animal letter when reviewing an accommodation request. Renewed documentation helps show that your ESA evaluation is up to date and reflects your present circumstances, when permitted by law.
          </p>
          <p className="text-sm sm:text-base text-body-text">
            <strong className="text-primary">Important:</strong> Approval from a licensed provider does not guarantee landlord acceptance, as housing decisions can vary. ESA documentation must be based on an evaluation by a state-licensed mental health professional, not self-diagnosis. Current documentation from a licensed provider may help support your request during the housing review process.
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <CtaButton
            href="#pricing"
            className="w-auto min-w-[270px]"
          >
            Begin your Renewal Process
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
