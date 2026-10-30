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
    image: "/esa-laws/esalaws-situation-apartments-rentals.webp",
    title: "ESA Laws for Apartments & Rentals",
    description:
      "Under the Fair Housing Act, people with disabilities can request an assistance animal, including an emotional support animal (ESA), as a reasonable accommodation when the animal is needed because of their disability.",
    bullets: [
      "Assistance animals are not considered pets under the FHA, and qualifying animals are generally exempt from pet fees, pet deposits, and no-pet policies.",
      "A housing provider may request reliable supporting information when the disability or disability-related need is not apparent.",
      "A request may be denied when legally recognized grounds apply, such as an undue financial or administrative burden, a fundamental alteration, a direct threat that cannot be reduced through reasonable accommodation, or significant physical damage that cannot be prevented or reduced.",
    ],
  },
  {
    image: "/esa-laws/esalaws-situation-colleges-dorms.webp",
    title: "ESA Laws for Colleges & Dorms",
    description:
      "Students with disabilities may request an assistance animal as a reasonable accommodation in college or university housing when applicable federal disability and fair housing laws cover the housing.",
    bullets: [
      "Depending on the institution and housing program, the Fair Housing Act, Section 504, and the ADA may apply.",
      "Universities may have their own accommodation procedures and may request appropriate supporting documentation.",
      "Students should check with their housing or disability services office for the specific ESA accommodation process and campus requirements.",
    ],
  },
  {
    image: "/esa-laws/esalaws-situation-landlords.webp",
    title: "ESA Laws for Landlords",
    description:
      "Housing providers generally must consider a qualifying assistance-animal request as a reasonable accommodation, including an exception to a no-pet policy.",
    bullets: [
      "Landlords may request reliable disability-related information when the disability or need for the animal is not apparent and supporting information is reasonably necessary.",
      "Landlords generally cannot charge pet fees or pet deposits for a qualifying assistance animal.",
      "Tenants may still be responsible for actual property damage caused by their assistance animal when applicable law allows comparable charges for tenant-caused damage.",
      "A landlord may deny a request only when the applicable legal requirements for denial are met.",
    ],
  },
  {
    image: "/esa-laws/esalaws-situation-tenants.webp",
    title: "ESA Laws for Tenants",
    description:
      "Some housing situations are exempt from certain Fair Housing Act requirements, although other federal, state, or local protections may still apply.",
    bullets: [
      "Certain owner-occupied properties with no more than four independently occupied units may be exempt.",
      "Certain single-family homes rented directly by qualifying private owners may be exempt, subject to specific federal conditions.",
      "Certain housing owned or operated by qualifying religious organizations or private clubs may also be exempt.",
      "Tenants may remain responsible for actual damage caused by an assistance animal when applicable law permits comparable charges for tenant-caused damage.",
    ],
  },
];

function SituationCard({ entry }: { entry: SituationEntry }) {
  return (
    <div className="w-full flex flex-col rounded-[20px] overflow-hidden bg-background [content-visibility:auto] [contain-intrinsic-size:1px_450px]">
      <div className="relative w-full aspect-[567/380]">
        <Image
            quality={75}
          src={entry.image}
          alt={entry.title}
          fill
          className="object-cover"
          loading="lazy"
          sizes="(min-width: 1024px) 560px, (max-width: 639px) 430px, 100vw"
        />
      </div>
      <div className="flex flex-col gap-3 sm:gap-4 p-5 sm:p-7">
        <h3 className="font-heading font-bold text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-primary">
          {entry.title}
        </h3>
        <p className="font-sans font-semibold text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-body-text">
          {entry.description}
        </p>
        <ul className="flex flex-col gap-2 sm:gap-2.5">
          {entry.bullets.map((bullet, idx) => (
            <li
              key={idx}
              className="relative pl-5 font-sans font-semibold text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px] text-body-text before:content-['•'] before:absolute before:left-0 before:top-0 before:text-primary"
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
        <h2 className="font-heading font-bold text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.2] lg:leading-[54px] tracking-[-0.00015em] text-primary text-center">
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
