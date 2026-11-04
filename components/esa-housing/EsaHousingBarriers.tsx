import { CtaButton } from "@/components/common/CtaButton";
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

function StatCard({ stat, className = "" }: { stat: (typeof STATS)[number]; className?: string }) {
  return (
    <FeatureCard
      className={`h-full ${className}`}
      icon={stat.icon}
      stat={stat.stat}
      iconAlt={stat.alt}
      iconW={stat.w}
      iconH={stat.h}
      description={stat.description}
      footer={
        <CtaButton
          href={stat.source.href}
          target="_blank"
          rel="noopener noreferrer"
          variant="accent"
          className="mt-3 w-auto min-w-[168px]"
        >
          View Source
        </CtaButton>
      }
    />
  );
}

export function EsaHousingBarriers() {
  return (
    <section className="w-full bg-background py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-14">
        <SectionHeader title="Housing Barriers for Renters Who Rely on Emotional Support Animals">
          Renters who rely on emotional support animals face fewer housing options, higher costs, and added stress. These barriers aren’t minor inconveniences, they can directly undermine emotional well-being and housing stability.
        </SectionHeader>

        <div className="w-full pt-2">
          <div className="grid grid-cols-1 items-stretch gap-y-14 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4">
            {STATS.map((s) => (
              <StatCard key={s.alt} stat={s} />
            ))}
          </div>
        </div>

        <p className={`${SECTION_LEAD} text-center max-w-[1208px]`}>
          For individuals with emotional or mental health conditions, an animal may be essential to managing symptoms and maintaining stability. When housing policies restrict access to that support, the issue falls within disability-related protections under the Fair Housing Act, which establishes enforceable rights for renters who require an emotional support animal.
        </p>
      </div>
    </section>
  );
}
