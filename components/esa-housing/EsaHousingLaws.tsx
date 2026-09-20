import React from "react";
import Image from "next/image";
import { FeatureCard, GoldCallout } from "@/components/esa-online/EsaOnlineShared";
import { CheckCircle, SectionHeader } from "./EsaHousingShared";

const ICON = "/esa-housing/esa-letter-housing_housinglawssection-allcards-icon.svg";

const COLUMNS = [
  {
    title: "Your Rights",
    image: "/esa-housing/esa-letter-housing_housinglawssection-yourright.png",
    alt: "Woman with her emotional support dog at home",
    items: [
      "Live with your ESA in no-pet buildings",
      "No pet deposits or monthly pet rent",
      "No breed, size, or weight restrictions",
      "Protected from housing discrimination",
    ],
  },
  {
    title: "Your Landlord’s Obligatory Rights",
    image: "/esa-housing/esa-letter-housing_housinglawssection-landlordobligatory.png",
    alt: "Landlord reviewing a lease agreement with a tenant and her dog",
    items: [
      "No breed, size, or weight restrictions",
      "Must not require special training, certification, or licensing for your ESA",
      "Must not deny housing because your ESA is an emotional support animal",
      "Must respect privacy and cannot demand detailed medical records beyond a valid ESA letter",
    ],
  },
];

const CARDS = [
  { title: "No Discrimination", description: "Landlords cannot discriminate against an ESA based on its size, weight, or breed." },
  { title: "No Pet Policies", description: "Landlords must allow ESAs even if there’s a general “no-pet” policy." },
  { title: "No Pet Fees", description: "Landlords cannot impose pet rent, pet fees, or deposits for tenants with a valid ESA letter." },
];

export function EsaHousingLaws() {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-14">
        <SectionHeader title="Housing Laws That Protect Emotional Support Animals">
          Emotional Support Animals (ESAs) are protected under federal housing laws that recognize the important role they play in supporting individuals with mental or emotional disabilities. These laws ensure that individuals are not unfairly denied housing or charged extra fees because of their ESA. They also require housing providers to make reasonable accommodations to support tenants’ needs.
        </SectionHeader>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          {COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col overflow-hidden rounded-[30px] bg-[#FAF7F2] shadow-[0px_1px_4px_rgba(0,0,0,0.06)]">
              <div className="relative w-full aspect-[1983/793]">
                <Image src={col.image} alt={col.alt} fill className="object-cover" sizes="(min-width: 1024px) 620px, 100vw" />
              </div>
              <div className="flex flex-col items-center gap-6 px-6 sm:px-10 pt-8 pb-10 flex-1">
                <h3 className="font-heading text-2xl sm:text-[28px] font-bold text-[#2E5A66] leading-9 text-center">{col.title}</h3>
                <ul className="w-full flex flex-col gap-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle />
                      <span className="font-sans font-semibold text-base sm:text-[18px] leading-[30px] text-[#2E5A66]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-14 pt-2">
          {CARDS.map((card) => (
            <FeatureCard key={card.title} icon={ICON} headingFont="lato" {...card} />
          ))}
        </div>

        <div className="w-full max-w-[980px] flex flex-col gap-8">
          <GoldCallout title="Important">
            Under the Americans with Disabilities Act (ADA), Emotional Support Animals are not classified as service animals because they are not individually trained to perform specific tasks. ESA housing protections mainly come under the Fair Housing Act (FHA), not the ADA.
          </GoldCallout>
          <GoldCallout>
            “Housing providers cannot refuse to make reasonable accommodations in rules, policies, practices, or services when such accommodations may be necessary to afford a person with a disability the equal opportunity to use and enjoy a dwelling.” – U.S. Department of Housing and Urban Development
          </GoldCallout>
        </div>
      </div>
    </section>
  );
}
