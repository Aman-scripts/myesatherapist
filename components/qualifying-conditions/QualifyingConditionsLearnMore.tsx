import React from "react";
import { CtaButton } from "@/components/esa-online/EsaOnlineShared";
import { SectionHeader } from "@/components/common/BlogPageBlocks";

const GUIDES = [
  {
    label: "What DSM-5 Conditions May Qualify for an ESA",
    href: "/blog/qualifying-conditions/conditions-that-may-qualify-for-an-esa/",
  },
  {
    label: "Can I Get an Emotional Support Animal for Anxiety",
    href: "/blog/qualifying-conditions/esa-for-anxiety/",
  },
];

export function QualifyingConditionsLearnMore() {
  return (
    <section className="w-full bg-[#FAF7F2]">
      <div className="mx-auto flex w-full max-w-[1065px] flex-col items-center gap-8 px-4 sm:px-8 lg:px-[5vw] xl:px-0">
        <SectionHeader
          title="Learn More About ESA Eligibility"
          subtitle="Understanding whether a mental health condition may support the need for an emotional support animal can help you know what to expect during an ESA evaluation. Eligibility is based on your individual symptoms, functional impact, and the clinical judgment of a licensed mental health professional. Explore these detailed guides to better understand qualifying conditions, DSM-5 criteria, and the ESA evaluation process."
          subtitleMaxWidth="max-w-[1065px]"
          className="gap-8 lg:gap-[2.4vw] xl:gap-8"
        />
        <div className="flex w-full flex-col items-center justify-center gap-4 lg:flex-row lg:gap-[2.2vw] xl:gap-8">
          {GUIDES.map((guide) => (
            <CtaButton key={guide.href} href={guide.href} className="w-full max-w-[473px] lg:w-auto lg:max-w-none">
              {guide.label}
            </CtaButton>
          ))}
        </div>
      </div>
    </section>
  );
}
