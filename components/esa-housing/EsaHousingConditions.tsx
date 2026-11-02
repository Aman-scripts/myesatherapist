import React from "react";
import Image from "next/image";
import { SectionHeader } from "./EsaHousingShared";

const CONDITIONS = [
  { label: "Anxiety Disorders", icon: "/ESA ICons/Icon-21.svg" },
  { label: "Depression", icon: "/ESA ICons/Icon-3.svg" },
  { label: "PTSD", icon: "/ESA ICons/Icon-2.svg" },
  { label: "Bipolar Disorder", icon: "/ESA ICons/Icon-4.svg" },
  { label: "OCD", icon: "/ESA ICons/Icon-6.svg" },
  { label: "Panic Disorders", icon: "/ESA ICons/Icon-1.svg" },
  { label: "ADHD", icon: "/ESA ICons/Icon-5.svg" },
  { label: "Social Anxiety", icon: "/ESA ICons/Icon-8.svg" },
];

export function EsaHousingConditions() {
  return (
    <section className="w-full bg-background py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12">
        <SectionHeader title="Conditions Commonly Considered During an ESA Evaluation" leadMax="max-w-[1062px]">
          Emotional Support Animals may be considered for individuals experiencing DSM-recognized emotional or mental health conditions such as anxiety, depression, or PTSD. Eligibility is not based on diagnosis alone and depends on an individualized evaluation by a licensed mental health professional.
        </SectionHeader>

        <ul className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CONDITIONS.map((condition) => (
            <li key={condition.label} className="flex items-center gap-3 rounded-[20px] bg-white px-4 py-4 shadow-[0px_2px_4px_rgba(0,0,0,0.08)]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background">
                <Image src={condition.icon} alt="" width={22} height={22} unoptimized className="h-[22px] w-[22px] object-contain" />
              </span>
              <span className="font-sans font-semibold text-base leading-[26px] text-primary">{condition.label}</span>
            </li>
          ))}
        </ul>

        <p className="body-large text-body-text text-center max-w-[1062px]">
          This list is not comprehensive, and having one of these conditions does not automatically qualify someone for an ESA. Eligibility depends on an individualized evaluation by a licensed mental health professional who reviews whether emotional support is clinically appropriate for your situation.
        </p>
      </div>
    </section>
  );
}
