import React from "react";
import Image from "next/image";
import { BreakpointImage } from "@/components/common/BreakpointImage";
import { CtaButton } from "./EsaOnlineShared";
import { ReviewBadges } from "@/components/common/ReviewBadges";

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
    <section
      className={`relative w-full bg-[#FAF7F2] overflow-hidden ${
        stacked
          ? "grid lg:flex lg:items-center lg:min-h-[480px] xl:min-h-[723px]"
          : "flex items-center min-h-[580px] sm:min-h-[620px] lg:min-h-[480px] xl:min-h-[723px]"
      }`}
    >
      {stacked && <div aria-hidden className="lg:hidden col-start-1 row-start-1 aspect-[941/1672]" />}
      <div
        className={`absolute pointer-events-none z-0 ${
          stacked ? "inset-x-0 bottom-0 aspect-[941/1672] lg:inset-0 lg:aspect-auto lg:h-full" : "inset-0 w-full h-full"
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
              className="hidden sm:block lg:hidden object-cover object-bottom"
              sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
            />
            <BreakpointImage
              media="(min-width: 1024px)"
              src={image}
              alt={imageAlt}
              fill
              quality={100}
              className="hidden lg:block object-cover lg:object-[25%_center] xl:object-center"
              sizes="(min-width: 1024px) 100vw, 1px"
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
              className="object-cover object-[75%_center] sm:object-right md:object-center lg:object-[25%_center] xl:object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/95 via-[#FAF7F2]/80 to-transparent lg:hidden" />
          </>
        )}
      </div>

      <div
        className={`relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-20 py-10 sm:py-14 lg:py-12 xl:py-16 ${
          stacked ? "col-start-1 row-start-1 pb-[80vw] sm:pb-[80vw] lg:pb-12 xl:pb-16" : ""
        }`}
      >
        <div
          className={`max-w-[626px] lg:max-w-[420px] xl:max-w-[626px] space-y-6 sm:space-y-8 lg:space-y-4 xl:space-y-6 ${
            stacked ? "mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start" : ""
          }`}
        >
          {stacked && (
            <div className="lg:hidden flex items-center justify-center gap-2 sm:gap-3 w-full max-w-[360px] sm:max-w-[513px]">
              {MOBILE_STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex-1 rounded-[30px] bg-[#FAF7F2] border border-white/80 shadow-[0px_2px_4px_rgba(0,0,0,0.12)] py-1.5 sm:py-2.5 px-1 flex flex-col items-center"
                >
                  <span
                    className="font-heading font-bold text-[15px] sm:text-[22px] leading-tight text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                  >
                    {s.value}
                  </span>
                  <span className="font-sans font-semibold text-[9px] sm:text-[12px] text-[#707070] whitespace-nowrap">{s.label}</span>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-3.5 sm:space-y-6">
            <h1 className="font-heading text-[26px] sm:text-5xl lg:text-[34px] xl:text-[56px] font-bold text-[#2E5A66] leading-[1.14] tracking-[-0.0002em]">
              {title}
            </h1>
            <p className="font-sans text-[12.5px] sm:text-base lg:text-[13px] xl:text-[18px] text-[#5F6B6F] font-semibold leading-[1.65] max-w-[626px]">
              {description}
            </p>
          </div>

          <CtaButton href={buttonHref}>{buttonText}</CtaButton>

          <div className={`pt-1 ${stacked ? "hidden lg:block" : ""}`}>
            <ReviewBadges />
          </div>
        </div>
      </div>
    </section>
  );
}
