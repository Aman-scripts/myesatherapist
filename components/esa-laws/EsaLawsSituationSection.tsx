import React from "react";
import Image from "next/image";

interface SituationEntry {
  image: string;
  title: string;
  description: string;
  bullets: string[];
}

const SITUATIONS: SituationEntry[] = [
  {
    image: "/esa-laws/esalaws-situation-apartments-rentals.png",
    title: "ESA Laws for Apartments & Rentals",
    description:
      "Under federal law, tenants with disabilities can request to keep an ESA in their apartment as a reasonable accommodation. This is usually done by providing an ESA letter from a licensed mental health professional who has conducted a clinical evaluation.",
    bullets: [
      "ESAs are not considered pets. They are exempt from pet fees, no-pet policies, and breed restrictions.",
      "A landlord cannot deny an ESA request unless they can prove that the animal poses an unmitigable threat or would cause significant property damage. They may also deny the request if it creates an undue administrative burden.",
    ],
  },
  {
    image: "/esa-laws/esalaws-situation-colleges-dorms.png",
    title: "ESA Laws for Colleges & Dorms",
    description:
      "The Fair Housing Act protects the rights of students with disabilities who attend public universities that receive federal funding. It allows them to keep an ESA in college housing or dormitories. Some private universities may have more restrictive standards.",
    bullets: [
      "Different universities and states may have additional requirements or restrictions for ESAs, especially regarding the animal's safety in dorms.",
      "Individuals should always research their university's policies and local regulations for ESAs. They should also coordinate with their university's health or disability support services.",
    ],
  },
  {
    image: "/esa-laws/esalaws-situation-landlords.png",
    title: "ESA Laws for Landlords",
    description:
      "Landlords must treat a valid ESA letter as reasonable-accommodation documentation, not as a pet request. Under the Fair Housing Act, a no-pet policy, breed restriction, or pet fee cannot be applied to a tenant's ESA once the request is properly supported.",
    bullets: [
      "A request can only be denied for a narrow set of reasons: an undue financial or administrative burden, a fundamental change to the housing, a direct threat to others' safety, or a likelihood of significant property damage.",
      "Landlords may ask for documentation confirming the disability-related need, but cannot demand medical records, a specific form, or details about the diagnosis, and cannot charge a pet deposit or monthly pet rent for the ESA.",
    ],
  },
  {
    image: "/esa-laws/esalaws-situation-tenants.png",
    title: "ESA Laws for Tenants",
    description:
      "Tenants with a disability-related need can request to live with an ESA even in housing with a strict no-pet policy, by submitting a reasonable accommodation request along with a valid ESA letter from a licensed mental health professional.",
    bullets: [
      "Tenants remain responsible for their ESA's behavior and for any damage beyond normal wear and tear, and may still need to meet local vaccination and licensing requirements.",
      "If a request is wrongly denied, tenants can file a housing discrimination complaint with the federal Office of Fair Housing and Equal Opportunity or their state's housing agency.",
    ],
  },
];

function SituationCard({ entry }: { entry: SituationEntry }) {
  return (
    <div className="w-full flex flex-col rounded-[20px] overflow-hidden bg-[#FAF7F2]">
      <div className="relative w-full aspect-[567/380]">
        <Image
          src={entry.image}
          alt={entry.title}
          fill
          unoptimized
          className="object-cover"
          sizes="(min-width: 1024px) 560px, 100vw"
        />
      </div>
      <div className="flex flex-col gap-3 sm:gap-4 p-5 sm:p-7">
        <h3 className="font-heading font-bold text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-[#2E5A66]">
          {entry.title}
        </h3>
        <p className="font-sans font-semibold text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[#5F6B6F]">
          {entry.description}
        </p>
        <ul className="flex flex-col gap-2 sm:gap-2.5">
          {entry.bullets.map((bullet, idx) => (
            <li
              key={idx}
              className="relative pl-5 font-sans font-semibold text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px] text-[#5F6B6F] before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#2E5A66]"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function EsaLawsSituationSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1178px] mx-auto flex flex-col items-center gap-10 sm:gap-14">
        <h2 className="font-heading font-bold text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.2] lg:leading-[54px] tracking-[-0.00015em] text-[#2E5A66] text-center">
          ESA Laws by Situation
        </h2>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {SITUATIONS.map((entry) => (
            <SituationCard key={entry.title} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
