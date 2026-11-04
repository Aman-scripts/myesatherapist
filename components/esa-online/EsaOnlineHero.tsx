import React from "react";
import Image from "next/image";
import { BreakpointImage } from "@/components/common/BreakpointImage";
import { CtaButton } from "./EsaOnlineShared";
import { ReviewBadges } from "@/components/common/ReviewBadges";
import { DesktopScaleWrapper } from "@/components/common/DesktopScaleWrapper";
import { SiteBreadcrumbs } from "@/components/seo/SiteBreadcrumbs";

const STATS = [
  { value: "64,739+", label: "ESA Evaluations" },
  { value: "7+", label: "Years Serving" },
  { value: "100%", label: "Moneyback Guarantee" },
];

function StatPills() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {STATS.map((pill) => (
        <div
          key={pill.label}
          className="inline-flex w-[176px] h-[77px] flex-col items-center justify-center rounded-full border border-[#EAE5DC]/80 bg-background px-4 py-3 shadow-[0px_2px_4px_rgba(0,0,0,0.15)]"
        >
          <span className="body-large text-color-gradient leading-none">{pill.value}</span>
          <span className="body-small mt-1 leading-tight whitespace-nowrap text-[#949494]">{pill.label}</span>
        </div>
      ))}
    </div>
  );
}

export function EsaOnlineHero({
  title = "Legitimate ESA Letter Online From a Licensed Therapist",
  description = "Begin with a secure, HIPAA-compliant telehealth evaluation designed to support a legitimate ESA letter when clinically appropriate. Licensed clinicians issue ESA letters based on their professional judgment.",
  buttonText = "Start Your ESA Evaluation",
  image = "/esa-online/esa-letter-online_herosection.webp",
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
  /** Portrait artwork for < sm. With imageTablet, the hero switches to a centered stacked layout below lg. */
  imageMobile?: string;
  /** Portrait artwork for sm to < lg. */
  imageTablet?: string;
  /** Stat pills, gold button, refund line, and review badges from the Figma heroes. */
  showStats?: boolean;
  refundText?: string;
  /** Desktop canvas height in the 1440px design. Match the desktop artwork aspect ratio. */
  desktopHeight?: number;
} = {}) {
  const stacked = Boolean(imageMobile && imageTablet);

  return (
    <>
      <h1 className={showStats ? "sr-only" : "sr-only max-lg:hidden"}>{title}</h1>
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE & TABLET HERO (< 1024px)                   */}
      {/* ---------------------------------------------------- */}
      <section
        className={`lg:hidden relative w-full bg-background overflow-hidden ${
          stacked
            ? "grid"
            : "flex items-center min-h-[580px] sm:min-h-[620px]"
        }`}
      >
        {stacked && <div aria-hidden className="col-start-1 row-start-1 hidden aspect-[941/1672] sm:block" />}
        <div
          className={`absolute pointer-events-none z-0 ${
            stacked ? "inset-0 sm:inset-x-0 sm:bottom-0 sm:top-auto sm:h-auto sm:aspect-[941/1672]" : "inset-0 w-full h-full"
          }`}
        >
          {stacked ? (
            <>
              <BreakpointImage
                media="(max-width: 639px)"
                quality={90}
                src={imageMobile!}
                alt={imageAlt}
                fill
                className="sm:hidden object-cover object-top"
                sizes="(max-width: 639px) 430px, 1px"
              />
              <BreakpointImage
                media="(min-width: 640px) and (max-width: 1023px)"
                quality={90}
                src={imageTablet!}
                alt={imageAlt}
                fill
                className="hidden sm:block object-cover object-bottom"
                sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
              />
            </>
          ) : (
            <>
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                quality={90}
                className="object-cover object-[75%_center] sm:object-right md:object-center"
                sizes="(max-width: 639px) 430px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
            </>
          )}
        </div>

        <div
          className={`relative z-10 w-full mx-auto px-5 sm:px-8 py-10 sm:py-14 ${
            stacked ? "col-start-1 row-start-1 pb-12 sm:pb-[80vw]" : ""
          }`}
        >
          <div
            className={`max-w-[640px] ${
              showStats
                ? "flex flex-col items-start gap-5 text-left"
                : `space-y-6 sm:space-y-8 ${stacked ? "mx-auto text-center flex flex-col items-center" : ""}`
            }`}
          >
            <SiteBreadcrumbs className={showStats ? "self-start" : undefined} includeSchema={false} />
            {showStats ? (
              <>
                <div className="flex w-full flex-col items-center text-center sm:hidden">
                  <p aria-hidden="true" className="heading-h1 text-primary max-w-[320px]">{title}</p>
                  <p className="body-large text-body-text max-w-[320px] mt-3">{description}</p>
                  <CtaButton href={buttonHref} variant="accent" className="mt-5 w-auto min-w-[240px]">
                    {buttonText}
                  </CtaButton>
                  <p className="body-small text-body-text mt-4 max-w-[280px]">
                    {refundText}
                  </p>
                  <div className="mt-5 flex flex-col items-center gap-3">
                    {[
                      { value: "7+", label: "Years Serving" },
                      { value: "64,739+", label: "ESA Evaluations" },
                      { value: "100%", label: "Moneyback Guarantee" },
                    ].map((pill) => (
                      <div
                        key={pill.label}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-5 py-2 shadow-[0px_2px_4px_rgba(0,0,0,0.1)]"
                      >
                        <span className="body-strong text-primary">{pill.value}</span>
                        <span className="body-text text-primary">{pill.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 w-full max-w-[360px]">
                    <ReviewBadges className="mx-auto max-w-none justify-center" />
                  </div>
                </div>
                <div className="hidden sm:flex flex-col items-start gap-5 text-left">
                  <StatPills />
                  <p aria-hidden="true" className="heading-h1 text-primary">{title}</p>
                  <p className="body-large text-body-text">{description}</p>
                  <CtaButton href={buttonHref} variant="accent" className="w-auto min-w-[240px]">
                    {buttonText}
                  </CtaButton>
                  <p className="body-small text-body-text">
                    {refundText}
                  </p>
                  <ReviewBadges />
                </div>
              </>
            ) : (
              <>
                <div className="space-y-3.5 sm:space-y-6">
                  <h1 className="heading-h1 text-primary">{title}</h1>
                  <p className="font-sans text-[12.5px] sm:text-base text-body-text font-semibold leading-[1.65] max-w-[626px]">
                    {description}
                  </p>
                </div>

                <CtaButton href={buttonHref}>{buttonText}</CtaButton>

                {!stacked && (
                  <div className="pt-1">
                    <ReviewBadges />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. DESKTOP HERO (>= 1024px)                          */}
      {/* DesktopScaleWrapper for exact 1024px-1440px layout   */}
      {/* ---------------------------------------------------- */}
      <DesktopScaleWrapper
        designWidth={1440}
        designHeight={showStats ? 820 : desktopHeight}
        className="hidden lg:block relative"
        fullBleedBackground={
          <BreakpointImage
            media="(min-width: 1024px)"
            src={image}
            alt={imageAlt}
            fill
            quality={90}
            className="object-cover object-center"
            sizes="(min-width: 1024px) 100vw, 1px"
          />
        }
      >
        <div
          className="relative w-[1440px] flex items-center"
          style={{ height: showStats ? 820 : desktopHeight }}
        >
          <div className="relative z-10 w-full pl-[82px] pr-20 py-16">
            {showStats ? (
              <div className="max-w-[640px] flex flex-col items-start gap-5">
                <SiteBreadcrumbs />
                <StatPills />
                <p aria-hidden="true" className="heading-h1 text-primary max-w-[620px]">{title}</p>
                <p className="body-large text-body-text max-w-[560px]">{description}</p>
                <CtaButton href={buttonHref} variant="accent" className="w-auto min-w-[260px]">
                  {buttonText}
                </CtaButton>
                <p className="body-small text-body-text">
                  {refundText}
                </p>
                <ReviewBadges />
              </div>
            ) : (
              <div className="max-w-[626px] space-y-6">
                <SiteBreadcrumbs />
                <div className="space-y-6">
                  <p aria-hidden="true" className="heading-h1 text-primary">{title}</p>
                  <p className="body-large text-body-text max-w-[626px]">{description}</p>
                </div>
                <CtaButton href={buttonHref}>{buttonText}</CtaButton>
                <div className="pt-1">
                  <ReviewBadges />
                </div>
              </div>
            )}
          </div>
        </div>
      </DesktopScaleWrapper>
    </>
  );
}
