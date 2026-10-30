import React from "react";
import { FeatureCard, GoldCallout } from "@/components/esa-online/EsaOnlineShared";
import { SectionHeader } from "./EsaHousingShared";

const CARDS = [
  {
    icon: "/ESA ICons/Glyph-2.svg",
    title: "Licensed Psychiatrist (MD Or DO)",
    description: "Medical doctors (MD or DO) trained in mental health who can evaluate emotional or psychiatric conditions.",
  },
  {
    icon: "/ESA ICons/Icon-41.svg",
    title: "Licensed Psychologist (PhD Or PsyD)",
    description: "Doctoral-level professionals (PhD or PsyD) who assess mental and emotional health through a structured clinical evaluation.",
  },
  {
    icon: "/ESA ICons/Icon-34.svg",
    title: "Licensed Therapist (LMFT Or LCSW)",
    description: "Master’s-level clinicians who provide counseling and assess emotional or behavioral concerns under their state license.",
  },
  {
    icon: "/ESA ICons/Icon-33.svg",
    title: "Licensed Professional Counselor (LPC / LCPC)",
    description: "State-licensed mental health counselors trained to evaluate emotional challenges and whether emotional support is clinically appropriate.",
  },
  {
    icon: "/ESA ICons/Icon-8.svg",
    title: "Licensed Clinical Social Worker (LCSW)",
    description: "Licensed professionals with advanced training in mental health assessment, counseling, and evaluating emotional support needs.",
  },
  {
    icon: "/ESA ICons/Icon-18.svg",
    title: "Psychiatric Mental Health Nurse (PMHN / PMHNP)",
    description: "Advanced practice nurses specializing in mental health who can evaluate emotional and psychiatric conditions.",
  },
];

export function EsaHousingWhoCanIssue() {
  return (
    <section className="w-full bg-background py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-14">
        <SectionHeader title="Who Can Issue an ESA Letter for Housing?" titleMax="max-w-[644px]" leadMax="max-w-[1062px]">
          Only licensed mental health professionals (LMHPs) are authorized to evaluate ESA requests and issue valid ESA letters for housing. The professional must be licensed and permitted to practice in the state where the evaluation takes place.
        </SectionHeader>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 pt-2">
          {CARDS.map((card) => (
            <FeatureCard key={card.title} iconW={36} iconH={36} {...card} />
          ))}
        </div>

        <GoldCallout title="Important" className="max-w-[984px]">
          Not every consultation results in an ESA letter. A licensed mental health professional must independently evaluate your emotional or mental health needs and determine whether emotional support is clinically appropriate based on professional judgment and applicable state guidelines.
        </GoldCallout>
      </div>
    </section>
  );
}
