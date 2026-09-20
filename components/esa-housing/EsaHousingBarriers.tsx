import React from "react";
import { FeatureCard } from "@/components/esa-online/EsaOnlineShared";
import { SectionHeader, SECTION_LEAD } from "./EsaHousingShared";

const P = "/esa-housing/esa-letter-housing_housingbarrierssection-";

const STATS = [
  { icon: `${P}70-icon.svg`, w: 50, h: 28, description: "of renters with pets settle for lower-quality housing due to limited options." },
  { icon: `${P}72-icon.svg`, w: 47, h: 28, description: "of renters say pet-friendly housing is hard to find." },
  { icon: `${P}8-icon.svg`, w: 34, h: 25, description: "of U.S. rental housing is truly pet-inclusive." },
  { icon: `${P}200-icon.svg`, w: 71, h: 24, description: "higher average cost for pet-friendly housing" },
];

export function EsaHousingBarriers() {
  return (
    <section className="w-full bg-[#FAF7F2] py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-14">
        <SectionHeader title="Housing Barriers for Renters Who Rely on Emotional Support Animals">
          Renters who rely on emotional support animals face fewer housing options, higher costs, and added stress. These barriers aren’t minor inconveniences, they can directly undermine emotional well-being and housing stability.
        </SectionHeader>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14 pt-2">
          {STATS.map((s) => (
            <FeatureCard key={s.icon} icon={s.icon} iconW={s.w} iconH={s.h} description={s.description} />
          ))}
        </div>

        <p className={`${SECTION_LEAD} text-center max-w-[1208px]`}>
          For individuals with emotional or mental health conditions, an animal may be essential to managing symptoms and maintaining stability. When housing policies restrict access to that support, the issue falls within disability-related protections under the Fair Housing Act, which establishes enforceable rights for renters who require an emotional support animal.
        </p>
      </div>
    </section>
  );
}
