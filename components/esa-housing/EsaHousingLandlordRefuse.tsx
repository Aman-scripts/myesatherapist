import React from "react";
import Image from "next/image";
import { SectionHeader } from "./EsaHousingShared";

const REASONS = [
  {
    title: "Invalid Or Unverifiable ESA Documentation",
    icon: "/ESA ICons/Icon-17.svg",
    description:
      "A landlord may deny an ESA request if the letter is fraudulent, outdated, or issued by an unlicensed provider. ESA documentation must come from a properly licensed mental health professional.",
  },
  {
    title: "Health Or Safety Conflicts",
    icon: "/ESA ICons/Glyph-2.svg",
    description:
      "If another resident has a documented medical condition that could be significantly affected, a landlord may evaluate whether accommodations can be made without compromising health or safety.",
  },
  {
    title: "Behavior Or Safety Concerns",
    icon: "/ESA ICons/Icon-44.svg",
    description:
      "An ESA may be restricted if it displays aggressive behavior, causes repeated disturbances, or poses a genuine safety risk to others within the property.",
  },
  {
    title: "Lack Of Reasonable Accommodation",
    icon: "/ESA ICons/Icon-20.svg",
    description:
      "If accommodating the ESA would impose an undue burden due to space, structural, or operational limitations, a landlord may deny the request.",
  },
  {
    title: "Property Damage Responsibility",
    icon: "/ESA ICons/Icon-21.svg",
    description:
      "While pet deposits cannot be charged for ESAs, tenants remain responsible for covering the cost of any actual damage caused by their animal.",
  },
];

export function EsaHousingLandlordRefuse() {
  return (
    <section className="w-full bg-background py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12">
        <SectionHeader title="When Can a Landlord Refuse Your ESA?" titleMax="max-w-[644px]" leadMax="max-w-[1062px]">
          Although the Fair Housing Act offers important protections for tenants with Emotional Support Animals, there are limited circumstances where a housing provider may lawfully deny an ESA request. Knowing these situations can help set realistic expectations and prevent misunderstandings.
        </SectionHeader>

        <div className="w-full max-w-[1062px] overflow-hidden rounded-[30px] shadow-[0px_1px_4px_rgba(0,0,0,0.06)]">
          <div className="relative w-full aspect-[1983/793]">
            <Image
            quality={75}
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
                <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-[0px_1px_4px_rgba(0,0,0,0.12)]">
                  <Image src={r.icon} alt={r.title} width={22} height={22} unoptimized className="h-[22px] w-[22px] object-contain" />
                </span>
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
