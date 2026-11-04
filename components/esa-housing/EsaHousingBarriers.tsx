import React from "react";
import { FeatureCard } from "@/components/esa-online/EsaOnlineShared";
import { SectionHeader, SECTION_LEAD } from "./EsaHousingShared";

const P = "/esa-housing/esa-letter-housing_housingbarrierssection-";

const PIHI_DATA_2025 = {
  label: "PIHI – Pets & Housing Data 2025",
  href: "https://www.petsandhousing.org/pets-housing-2025-data-report/",
};

const STATS: Array<{
  alt: string;
  description: string;
  source: { label: string; href: string };
  stat?: string;
  icon?: string;
  w?: number;
  h?: number;
}> = [
  {
    stat: "59%",
    alt: "59%",
    description: "Renters say pet-friendly housing is unaffordable.",
    source: PIHI_DATA_2025,
  },
  {
    icon: `${P}72-icon.svg`,
    alt: "72%",
    w: 47,
    h: 28,
    description: "of renters say pet-friendly housing is hard to find.",
    source: PIHI_DATA_2025,
  },
  {
    icon: `${P}8-icon.svg`,
    alt: "8%",
    w: 34,
    h: 25,
    description: "of U.S. rental housing is truly pet-inclusive.",
    source: {
      label: "PIHI – Pets in Rental Housing 2025 Outlook (PDF)",
      href: "https://www.petsandhousing.org/wp-content/uploads/2025/08/Pets-in-Rental-Housing-2025-Outlook.pdf",
    },
  },
  {
    icon: `${P}200-icon.svg`,
    alt: "$200",
    w: 71,
    h: 24,
    description: "higher average cost for pet-friendly housing",
    source: {
      label: "https://jlsp.law.columbia.edu/wp-content/blogs.dir/213/files/2019/04/Vol52-OReilly-Jones.pdf",
      href: "https://jlsp.law.columbia.edu/wp-content/blogs.dir/213/files/2019/04/Vol52-OReilly-Jones.pdf",
    },
  },
];

export function EsaHousingBarriers() {
  return (
    <section className="w-full bg-background py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-14">
        <SectionHeader title="Housing Barriers for Renters Who Rely on Emotional Support Animals">
          Renters who rely on emotional support animals face fewer housing options, higher costs, and added stress. These barriers aren’t minor inconveniences, they can directly undermine emotional well-being and housing stability.
        </SectionHeader>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 pt-2">
          {STATS.map((s) => (
            <div key={s.alt} className="row-span-2 grid grid-rows-subgrid gap-y-3 pb-12 lg:pb-0">
              <FeatureCard
                className="h-full"
                icon={s.icon}
                stat={s.stat}
                iconAlt={s.alt}
                iconW={s.w}
                iconH={s.h}
                description={s.description}
              />
              <p className="body-small px-1 text-center text-body-text">
                Source:{" "}
                <a
                  href={s.source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 [overflow-wrap:anywhere]"
                >
                  {s.source.label}
                </a>
              </p>
            </div>
          ))}
        </div>

        <p className={`${SECTION_LEAD} text-center max-w-[1208px]`}>
          For individuals with emotional or mental health conditions, an animal may be essential to managing symptoms and maintaining stability. When housing policies restrict access to that support, the issue falls within disability-related protections under the Fair Housing Act, which establishes enforceable rights for renters who require an emotional support animal.
        </p>
      </div>
    </section>
  );
}
