import React from "react";
import Image from "next/image";
import { BreakpointImage } from "@/components/common/BreakpointImage";
import { CtaButton } from "./EsaOnlineShared";
import { ReviewBadges } from "@/components/common/ReviewBadges";
import { DesktopScaleWrapper } from "@/components/common/DesktopScaleWrapper";

const MOBILE_STATS = [
  { value: "31,488+", label: "ESA Evaluations" },
  { value: "5+", label: "Years Serving" },
  { value: "4.9", label: "Verified Reviews" },
];

export function EsaOnlineHero({
  title = "Legitimate ESA Letter Online From a Licensed Therapist",
  description = "Begin with a secure, HIPAA-compliant telehealth evaluation designed to support a legitimate ESA letter when clinically appropriate. ESA letters are issued based on a licensed clinician’s professional judgment.",
  buttonText = "Start your ESA Evaluation",
  image = "/esa-online/esa-letter-online_herosection.webp",
  imageAlt = "Legitimate ESA letter online from a licensed therapist",
  buttonHref = "/pricing/",
  imageMobile,
  imageTablet,
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
} = {}) {
  const stacked = Boolean(imageMobile && imageTablet);

  return (
    <>
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
        {stacked && <div aria-hidden className="col-start-1 row-start-1 aspect-[941/1672]" />}
        <div
          className={`absolute pointer-events-none z-0 ${
            stacked ? "inset-x-0 bottom-0 aspect-[941/1672]" : "inset-0 w-full h-full"
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
                className="sm:hidden object-cover object-bottom"
                sizes="(max-width: 639px) 100vw, 1px"
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
                quality={100}
                className="object-cover object-[75%_center] sm:object-right md:object-center"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
            </>
          )}
        </div>

        <div
          className={`relative z-10 w-full mx-auto px-5 sm:px-8 py-10 sm:py-14 ${
            stacked ? "col-start-1 row-start-1 pb-[80vw] sm:pb-[80vw]" : ""
          }`}
        >
          <div
            className={`max-w-[626px] space-y-6 sm:space-y-8 ${
              stacked ? "mx-auto text-center flex flex-col items-center" : ""
            }`}
          >
            {stacked && (
              <div className="flex items-center justify-center gap-2 sm:gap-3 w-full max-w-[360px] sm:max-w-[513px]">
                {MOBILE_STATS.map((s) => (
                  <div
                    key={s.label}
                    className="flex-1 rounded-[30px] bg-background border border-white/80 shadow-[0px_2px_4px_rgba(0,0,0,0.12)] py-1.5 sm:py-2.5 px-1 flex flex-col items-center"
                  >
                    <span
                      className="font-heading font-bold text-[15px] sm:text-[22px] leading-tight text-transparent bg-clip-text"
                      style={{ backgroundImage: "var(--color-gradient)" }}
                    >
                      {s.value}
                    </span>
                    <span className="font-sans font-semibold text-[9px] sm:text-[12px] text-[#707070] whitespace-nowrap">{s.label}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-3.5 sm:space-y-6">
              <h1 className="font-heading text-[26px] sm:text-5xl font-bold text-primary leading-[1.14] tracking-[-0.0002em]">
                {title}
              </h1>
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
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. DESKTOP HERO (>= 1024px)                          */}
      {/* DesktopScaleWrapper for exact 1024px-1440px layout   */}
      {/* ---------------------------------------------------- */}
      <DesktopScaleWrapper
        designWidth={1440}
        designHeight={723}
        className="hidden lg:block relative"
        fullBleedBackground={
          <BreakpointImage
            media="(min-width: 1024px)"
            src={image}
            alt={imageAlt}
            fill
            quality={100}
            className="object-cover object-center"
            sizes="(min-width: 1024px) 100vw, 1px"
          />
        }
      >
        <div className="relative w-[1440px] h-[723px] flex items-center">
          <div className="relative z-10 w-full px-20 py-16">
            <div className="max-w-[626px] space-y-6">
              <div className="space-y-6">
                <h1 className="font-heading text-[56px] font-bold text-primary leading-[1.14] tracking-[-0.0002em]">
                  {title}
                </h1>
                <p className="font-sans text-[18px] text-body-text font-semibold leading-[1.65] max-w-[626px]">
                  {description}
                </p>
              </div>

              <CtaButton href={buttonHref}>{buttonText}</CtaButton>

              <div className="pt-1">
                <ReviewBadges />
              </div>
            </div>
          </div>
        </div>
      </DesktopScaleWrapper>
    </>
  );
}
