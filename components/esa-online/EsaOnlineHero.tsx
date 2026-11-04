import React from "react";
import { BreakpointImage } from "@/components/common/BreakpointImage";
import { CtaButton } from "./EsaOnlineShared";
import { ReviewBadges } from "@/components/common/ReviewBadges";
import { HeroStatPills } from "@/components/common/HeroStatPills";
import { SiteBreadcrumbs } from "@/components/seo/SiteBreadcrumbs";

const STATS = [
  { value: "64,739+", label: "ESA Evaluations" },
  { value: "7+", label: "Years Serving" },
  { value: "100%", label: "Moneyback Guarantee" },
];

export function EsaOnlineHero({
  title = "Legitimate ESA Letter Online From a Licensed Therapist",
  description = "Begin with a secure, HIPAA-compliant telehealth evaluation designed to support a legitimate ESA letter when clinically appropriate. Licensed clinicians issue ESA letters based on their professional judgment.",
  buttonText = "Start Your ESA Evaluation",
  image = "/esa-online/esa-letter-online-herosection.webp",
  imageAlt = "Legitimate ESA letter online from a licensed therapist",
  buttonHref = "/pricing/",
  imageMobile,
  imageTablet,
  showStats = false,
  refundText = "Not approved after your ESA evaluation? You get a full refund!.",
  desktopHeight = 723,
}: {
  title?: string;
  description?: string;
  buttonText?: string;
  image?: string;
  imageAlt?: string;
  buttonHref?: string;
  imageMobile?: string;
  imageTablet?: string;
  showStats?: boolean;
  refundText?: string;
  desktopHeight?: number;
} = {}) {
  const stacked = Boolean(imageMobile && imageTablet);
  const height = showStats ? 820 : desktopHeight;

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {stacked ? (
          <>
            <BreakpointImage
              media="(max-width: 639px)"
              quality={90}
              src={imageMobile!}
              alt=""
              fill
              className="object-cover object-top sm:hidden"
              sizes="(max-width: 639px) 100vw, 1px"
            />
            <BreakpointImage
              media="(min-width: 640px) and (max-width: 1023px)"
              quality={90}
              src={imageTablet!}
              alt=""
              fill
              className="hidden object-cover object-bottom sm:block lg:hidden"
              sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
            />
            <BreakpointImage
              media="(min-width: 1024px)"
              quality={90}
              src={image}
              alt={imageAlt}
              fill
              className="hidden object-cover object-center lg:block"
              sizes="(min-width: 1024px) 100vw, 1px"
            />
          </>
        ) : (
          <>
            <BreakpointImage
              media="(min-width: 0px)"
              quality={90}
              src={image}
              alt={imageAlt}
              fill
              className="object-cover object-[75%_center] sm:object-right lg:object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent lg:hidden" />
          </>
        )}
      </div>

      <div
        className={`responsive-hero-copy relative z-10 flex flex-col px-5 py-10 lg:mx-auto lg:w-[1440px] lg:justify-center lg:py-16 lg:pl-[82px] lg:pr-20 ${
          showStats
            ? "items-center text-center sm:items-start sm:px-8 sm:py-14 sm:text-left"
            : "items-center px-5 text-center lg:items-start lg:text-left"
        } ${stacked ? "pb-[70vw] sm:pb-[80vw] lg:pb-16" : ""}`}
        style={
          {
            "--hero-tablet": stacked ? "auto" : "620px",
            "--hero-desktop": `${height}px`,
          } as React.CSSProperties
        }
      >
        <div className={`flex w-full max-w-[640px] flex-col gap-5 ${showStats ? "items-center sm:items-start" : "mx-auto items-center lg:mx-0 lg:items-start"}`}>
          <SiteBreadcrumbs className="self-start" />
          {showStats && (
            <div className="hidden items-center gap-3 sm:flex sm:flex-row sm:flex-wrap">
              {STATS.map((pill) => (
                <div
                  key={pill.label}
                  className="flex h-[77px] min-w-[176px] flex-col items-center justify-center rounded-[30px] border border-[#EAE5DC]/80 bg-background px-4 text-center shadow-[0px_2px_4px_rgba(0,0,0,0.1)]"
                >
                  <span className="body-large leading-none text-color-gradient">{pill.value}</span>
                  <span className="body-small mt-1 whitespace-nowrap text-[#949494]">{pill.label}</span>
                </div>
              ))}
            </div>
          )}
          <h1 className="heading-h1 text-primary max-w-[320px] sm:max-w-[620px]">{title}</h1>
          <p className="body-large text-body-text max-w-[320px] sm:max-w-[626px]">{description}</p>
          <CtaButton href={buttonHref} variant={showStats ? "accent" : undefined} className="w-auto min-w-[240px]">
            {buttonText}
          </CtaButton>
          {showStats && <p className="body-small text-body-text max-w-[280px] sm:max-w-none">{refundText}</p>}
          {showStats && <HeroStatPills stats={STATS} className="sm:hidden" />}
          {(showStats || !stacked) && <ReviewBadges />}
        </div>
      </div>
    </section>
  );
}
