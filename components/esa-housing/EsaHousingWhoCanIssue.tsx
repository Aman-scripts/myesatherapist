import React from "react";
import { FeatureCard, GoldCallout } from "@/components/esa-online/EsaOnlineShared";
import { SectionHeader } from "./EsaHousingShared";

const ICON = "/esa-housing/esa-letter-housing_whocanissueesalettersection-allcards-icon.svg";

const CARDS = [
  { title: "Licensed Psychiatrist (MD or DO)", description: "Medical doctors trained in mental health who can evaluate emotional or psychiatric conditions." },
  { title: "Licensed Psychologist (PhD or PsyD)", description: "Doctoral-level professionals who assess mental and emotional health through clinical evaluation." },
  { title: "Licensed Therapist (LMFT or LCSW)", description: "Master’s-level clinicians who provide counseling and assess emotional or behavioral concerns." },
  { title: "Licensed Professional Counselor (LPC / LCPC)", description: "State-licensed mental health counselors trained to evaluate emotional challenges." },
  { title: "Licensed Clinical Social Worker (LCSW)", description: "Professionals with advanced training in mental health assessment and counseling" },
  { title: "Psychiatric Mental Health Nurse (PMHN / PMHNP)", description: "Advanced practice nurses specializing in mental health who can evaluate psychiatric conditions." },
];

export function EsaHousingWhoCanIssue() {
  return (
    <section className="w-full bg-[#FAF7F2] py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-14">
        <SectionHeader title="Who Can Issue an ESA Letter for Housing?" titleMax="max-w-[644px]" leadMax="max-w-[1062px]">
          Only licensed mental health professionals (LMHPs) are authorized to evaluate ESA requests and issue valid ESA letters for housing. The professional must be licensed and permitted to practice in the state where the evaluation takes place.
        </SectionHeader>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 pt-2">
          {CARDS.map((card) => (
            <FeatureCard key={card.title} icon={ICON} iconW={40} iconH={40} {...card} />
          ))}
        </div>

        <GoldCallout title="Important" className="max-w-[984px]">
          Not every consultation results in an ESA letter. A licensed mental health professional must independently evaluate your emotional or mental health needs and determine whether emotional support is clinically appropriate based on professional judgment and applicable state guidelines.
        </GoldCallout>
      </div>
    </section>
  );
}
