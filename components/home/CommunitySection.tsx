"use client";

import React from "react";
import { CtaButton } from "@/components/common/CtaButton";

export function CommunitySection() {
  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="max-w-[1251px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Title */}
        <h2 className="heading-h2 capitalize max-w-[797px] mx-auto mb-6">
          My ESA Therapist Has Been Serving the Community Since 2019
        </h2>

        {/* Description Paragraphs */}
        <div className="space-y-4 body-large text-center max-w-[958px] mx-auto mb-10">
          <p>
            Since 2019, My ESA Therapist has connected individuals with licensed mental health professionals for emotional support animal (ESA) evaluations. If an ESA is determined to be clinically appropriate following an independent assessment, providers may issue documentation to support housing accommodation requests under applicable federal housing laws.
          </p>
          <p>
            Our network includes state-licensed mental health professionals who conduct independent telehealth evaluations in accordance with recognized clinical standards. Available in eligible U.S. states, every evaluation is based solely on professional clinical judgment and aligns with the Fair Housing Act and HUD guidance where applicable.
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <CtaButton href="#how-it-works" className="w-[179px]">
            Get Started
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
