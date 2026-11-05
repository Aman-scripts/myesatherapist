import { ReviewBadges } from "@/components/common/ReviewBadges";
import { HeroStatPills } from "@/components/common/HeroStatPills";
import { CtaButton } from "@/components/common/CtaButton";
import { SiteBreadcrumbs } from "@/components/seo/SiteBreadcrumbs";
import { ResponsiveHero, standardHeroBackgrounds } from "@/components/common/ResponsiveHero";

const HEADING_LINE_1 = "Renew Your ESA";
const HEADING_LINE_2 = "Letter Online";
const DESCRIPTION =
  "Connect with a state-licensed mental health professional to request an ESA letter renewal that reflects your current emotional and mental health–related needs.";

const PILLS = [
  { value: "64,739+", label: "ESA Evaluations" },
  { value: "7+", label: "Years Serving" },
  { value: "100%", label: "Moneyback Guarantee" },
];

export function EsaRenewalHero() {
  return (
    <ResponsiveHero
      className="z-30"
      centered
      desktopHeight={780}
      tabletMinHeight="860px"
      backgrounds={standardHeroBackgrounds(
        "/hero-image-for-mobile-all.webp",
        "/esa-renewal/esa-renwal-herosection-tablet.webp",
        "/esa-renewal/esa-renewal-herosection.webp",
        { mobile: "object-top", tablet: "object-bottom", desktop: "object-right" },
      )}
    >
      <SiteBreadcrumbs className="mb-4 self-start" />
      <div className="hidden items-center gap-3 sm:flex sm:flex-row sm:flex-wrap lg:justify-start">
        {PILLS.map((pill) => (
          <div
            key={pill.label}
            className="badge-hover flex h-[77px] min-w-[176px] flex-col items-center justify-center rounded-[30px] border border-[#EAE5DC]/80 bg-background px-4 text-center shadow-[0px_2px_4px_rgba(0,0,0,0.1)]"
          >
            <span className="body-large leading-none text-color-gradient">{pill.value}</span>
            <span className="body-small mt-1 whitespace-nowrap text-body-text">{pill.label}</span>
          </div>
        ))}
      </div>
      <h1 className="heading-h1 text-primary mt-5 max-w-[320px] sm:max-w-[560px]">
        {HEADING_LINE_1}
        <br />
        {HEADING_LINE_2}
      </h1>
      <p className="body-large text-body-text mx-auto mt-3 max-w-[320px] sm:mx-0 sm:max-w-[560px]">{DESCRIPTION}</p>
      <CtaButton href="#pricing" variant="accent" className="mt-5 w-auto min-w-[240px] sm:min-w-[280px]">
        Start Your Renewal Online
      </CtaButton>
      <div className="mt-6 flex flex-col items-center gap-3 lg:items-start">
        <HeroStatPills stats={PILLS} className="sm:hidden" />
        <ReviewBadges />
      </div>
    </ResponsiveHero>
  );
}
