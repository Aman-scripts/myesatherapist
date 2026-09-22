"use client";

import React from "react";
import Image from "next/image";

const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

export function EsaRenewalHousingSection() {
  return (
    <section className="w-full bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 sm:space-y-10">
        {/* Title */}
        <h2 className="font-heading text-2xl sm:text-4xl lg:text-[34px] xl:text-[44px] font-bold text-[#2E5A66] leading-tight sm:leading-[54px] lg:leading-[42px] xl:leading-[54px] tracking-tight max-w-[980px] mx-auto">
          Renewals for Housing Accommodation Requests
        </h2>

        {/* Text Body */}
        <div className="space-y-4 max-w-[960px] mx-auto text-base sm:text-lg text-[#5F6B6F] font-semibold leading-[1.7] font-sans">
          <p>
            Landlords or property managers may ask for a current emotional support animal letter when reviewing an accommodation request. Renewed documentation helps show that your ESA evaluation is up to date and reflects your present circumstances, when permitted by law.
          </p>
          <p className="text-sm sm:text-base text-[#5F6B6F]">
            <strong className="text-[#2E5A66]">Important:</strong> Approval from a licensed provider does not guarantee landlord acceptance, as housing decisions can vary. ESA documentation must be based on an evaluation by a state-licensed mental health professional, not self-diagnosis. Current documentation from a licensed provider may help support your request during the housing review process.
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <a
            href="#pricing"
            className="group inline-flex h-12 items-center justify-between gap-2 rounded-[30px] pl-[34px] pr-[3px] text-white font-semibold text-base leading-[26px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 transition-all"
            style={{ backgroundImage: TEAL_GRADIENT }}
          >
            <span className="pr-8">Begin your Renewal Process</span>
            <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#FAF7F2] shadow-[0px_3px_6px_rgba(0,0,0,0.15)] transition-transform group-hover:translate-x-0.5">
              <Image
            quality={90}
                src="/common/send-icon.svg"
                alt=""
                width={22}
                height={22}
                className="h-[22px] w-[22px] object-contain"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
