import React from "react";
import Image from "next/image";
import { CheckCircle, SectionHeader } from "./EsaHousingShared";

const REASONS = [
  {
    title: "Invalid or Unverifiable ESA Documentation",
    description:
      "A landlord may deny an ESA request if the letter is fraudulent, outdated, or issued by an unlicensed provider. ESA documentation must come from a properly licensed mental health professional.",
  },
  {
    title: "Health or Safety Conflicts",
    description:
      "If another resident has a documented medical condition that could be significantly affected, a landlord may evaluate whether accommodations can be made without compromising health or safety.",
  },
  {
    title: "Behavior or Safety Concerns",
    description:
      "An ESA may be restricted if it displays aggressive behavior, causes repeated disturbances, or poses a genuine safety risk to others within the property.",
  },
  {
    title: "Lack of Reasonable Accommodation",
    description:
      "If accommodating the ESA would impose an undue burden due to space, structural, or operational limitations, a landlord may deny the request.",
  },
  {
    title: "Property Damage Responsibility",
    description:
      "While pet deposits cannot be charged for ESAs, tenants remain responsible for covering the cost of any actual damage caused by their animal.",
  },
];

export function EsaHousingLandlordRefuse() {
  return (
    <section className="w-full bg-[#FAF7F2] py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12">
        <SectionHeader title="When Can a Landlord Refuse Your ESA?" titleMax="max-w-[644px]" leadMax="max-w-[1062px]">
          Although the Fair Housing Act offers important protections for tenants with Emotional Support Animals, there are limited circumstances where a housing provider may lawfully deny an ESA request. Knowing these situations can help set realistic expectations and prevent misunderstandings.
        </SectionHeader>

        <div className="w-full max-w-[1062px] overflow-hidden rounded-[30px] shadow-[0px_1px_4px_rgba(0,0,0,0.06)]">
          <div className="relative w-full aspect-[1983/793]">
            <Image
            quality={90}
              src="/esa-housing/esa-letter-housing_landlordrefusesesa.webp"
              alt="Tenant and her dog being refused by a landlord holding a denied notice"
              fill
              className="object-cover"
              sizes="(min-width: 1100px) 1062px, 100vw"
            />
          </div>

          <ul className="flex flex-col gap-5 bg-[#E42529]/10 px-5 sm:px-12 lg:px-[72px] pt-8 pb-10">
            {REASONS.map((r) => (
              <li key={r.title} className="flex items-start gap-4">
                <CheckCircle color="#E42529" />
                <div className="flex flex-col">
                  <h3 className="font-sans font-semibold text-base sm:text-[18px] leading-[30px] text-[#CC191D]">{r.title}</h3>
                  <p className="font-sans font-semibold text-[13px] sm:text-[14px] leading-[26px] text-[#5D686C]">{r.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
