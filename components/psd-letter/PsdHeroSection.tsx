import React from "react";
import { ReviewBadges } from "@/components/common/ReviewBadges";
import { HeroStatPills } from "@/components/common/HeroStatPills";
import { HeroCtaGroup } from "@/components/common/HeroCtaGroup";
import { SiteBreadcrumbs } from "@/components/seo/SiteBreadcrumbs";
import { ResponsiveHero, standardHeroBackgrounds } from "@/components/common/ResponsiveHero";

const STATS = [
  { value: "64,739+", label: "Mental Health Evaluations" },
  { value: "7+", label: "Years Serving" },
  { value: "100%", label: "Moneyback Guarantee" },
];

const REFUND_NOTE = "Not approved after your PSD evaluation? You get a full refund!";
const HERO_SUBTITLE =
  "Connect with state-licensed mental health professionals to discuss your needs and explore if a psychiatric service dog letter may be appropriate for you.";

export function PsdHeroSection() {
  return (
    <ResponsiveHero
      className="z-30"
      centered={false}
      desktopHeight={814}
      tabletMinHeight="780px"
      backgrounds={standardHeroBackgrounds(
        "/hero-image-for-mobile-all.webp",
        "/psd-letter/psd-hero-section-tablet.webp",
        "/psd-letter/psd-herosection-new.webp",
        { mobile: "object-top", tablet: "object-center", desktop: "object-right" },
      )}
    >
      <SiteBreadcrumbs className="mb-4 self-start" />
      <div className="hidden items-center gap-3 sm:flex sm:flex-row sm:flex-wrap lg:justify-start">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="badge-hover flex h-[77px] min-w-[176px] flex-col items-center justify-center rounded-[30px] bg-background px-4 text-center shadow-[0px_2px_4px_rgba(0,0,0,0.1)]"
          >
            <span className="body-large leading-none text-color-gradient">{stat.value}</span>
            <span className="body-small mt-1 whitespace-nowrap text-body-text">{stat.label}</span>
          </div>
        ))}
      </div>
      <h1 className="heading-h1 text-primary mt-6 max-w-[340px] capitalize sm:max-w-[760px]">
        Psychiatric Service Dog
        <br />
        Letter Assistance
      </h1>
      <p className="body-large mx-auto mt-4 max-w-[340px] sm:mx-0 sm:max-w-[520px]">{HERO_SUBTITLE}</p>
      <HeroCtaGroup
        containerClassName="mt-6 flex flex-col items-center gap-3 sm:flex-row"
        ctaClassName="w-[192px]"
        defaultHref="#pricing"
      />
      <p className="body-small mt-3">{REFUND_NOTE}</p>
      <div className="mt-6 flex flex-col items-center gap-3 lg:items-start">
        <HeroStatPills stats={STATS} className="sm:hidden" />
        <ReviewBadges />
      </div>
    </ResponsiveHero>
  );
}
