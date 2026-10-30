import { BreakpointImage } from "@/components/common/BreakpointImage";
import { DesktopScaleWrapper } from "@/components/common/DesktopScaleWrapper";
import { ReviewBadges } from "@/components/common/ReviewBadges";
import { CtaButton } from "@/components/common/CtaButton";

const HEADING_LINE_1 = "Renew Your ESA";
const HEADING_LINE_2 = "Letter Online";
const DESCRIPTION =
  "Connect with a state-licensed mental health professional to request an ESA letter renewal that reflects your current emotional and mental health–related needs.";

const PILLS = [
  { value: "64,739+", label: "ESA Evaluations" },
  { value: "5+", label: "Years Serving" },
  { value: "100%", label: "Moneyback Guarantee" },
];

function StatPills() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {PILLS.map((pill) => (
        <div
          key={pill.label}
          className="min-w-[148px] rounded-[24px] bg-background/95 border border-white/80 shadow-[0px_2px_4px_rgba(0,0,0,0.12)] px-5 py-2.5 flex flex-col items-center"
        >
          <span className="font-heading font-bold text-[22px] leading-tight text-[#1A3D4F]">{pill.value}</span>
          <span className="font-sans font-semibold text-[12px] leading-[16px] text-[#6B6B6B]">{pill.label}</span>
        </div>
      ))}
    </div>
  );
}

function HeroCopy() {
  return (
    <div className="flex flex-col items-start gap-5">
      <StatPills />
      <h1 className="heading-h1 text-[#1A3D4F] max-w-[560px]">
        {HEADING_LINE_1}
        <br />
        {HEADING_LINE_2}
      </h1>
      <p className="body-large text-[#1A3D4F] max-w-[560px]">{DESCRIPTION}</p>
      <CtaButton href="#pricing" variant="accent" className="w-auto min-w-[280px]">
        Start Your Renewal Online
      </CtaButton>
      <p className="font-sans font-medium text-[14px] leading-[22px] text-[#1A3D4F]">
        If not approved after your evaluation? You get a full refund.
      </p>
      <ReviewBadges />
    </div>
  );
}

export function EsaRenewalHero() {
  return (
    <section className="relative z-30 w-full bg-background overflow-visible">
      <div className="sm:hidden relative w-full min-h-[820px]">
        <BreakpointImage
          media="(max-width: 639px)"
          quality={80}
          src="/esa-renewal/esa-renwal-herosection_mobile.webp"
          alt="Renew Your ESA Letter Online"
          fill
          className="object-cover object-bottom"
          sizes="(max-width: 639px) 100vw, 1px"
        />
        <div className="absolute inset-0 z-10 flex items-center px-5 pb-16">
          <div className="max-w-[340px]">
            <HeroCopy />
          </div>
        </div>
      </div>

      <div className="hidden sm:block lg:hidden relative w-full min-h-[860px]">
        <BreakpointImage
          media="(min-width: 640px) and (max-width: 1023px)"
          quality={80}
          src="/esa-renewal/esa-renwal-herosection_tablet.webp"
          alt="Renew Your ESA Letter Online"
          fill
          className="object-cover object-bottom"
          sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
        />
        <div className="absolute inset-0 z-10 flex items-center px-10 pb-10">
          <div className="max-w-[520px]">
            <HeroCopy />
          </div>
        </div>
      </div>

      <DesktopScaleWrapper
        designWidth={1440}
        designHeight={780}
        wrapperClassName="bg-background overflow-hidden"
        background={
          <BreakpointImage
            media="(min-width: 1024px)"
            quality={80}
            src="/esa-renewal/esa-renewal-herosection.webp"
            alt="Renew Your ESA Letter Online"
            fill
            className="object-cover object-right"
            sizes="(min-width: 1024px) 100vw, 1px"
          />
        }
      >
        <div className="relative w-[1440px] h-[780px] flex items-center">
          <div className="pl-[82px] max-w-[760px] z-10">
            <HeroCopy />
          </div>
        </div>
      </DesktopScaleWrapper>
    </section>
  );
}
