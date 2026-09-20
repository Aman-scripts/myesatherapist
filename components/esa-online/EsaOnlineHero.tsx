import React from "react";
import Image from "next/image";
import { CtaButton, LATO } from "./EsaOnlineShared";

const STAR = "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";

const MOBILE_STATS = [
  { value: "31,488+", label: "ESA Evaluations" },
  { value: "5+", label: "Years Serving" },
  { value: "4.9", label: "Verified Reviews" },
];

function ReviewCard({ color, label, score }: { color: string; label: string; score: string }) {
  return (
    <div className="bg-white/70 backdrop-blur-[12px] border border-white/60 rounded-[20px] px-4 sm:px-5 lg:px-3 xl:px-5 py-3 lg:py-2 xl:py-3 shadow-[0px_2px_6px_rgba(0,0,0,0.06)] flex flex-col items-center gap-1.5 min-w-[170px] sm:min-w-[190px] lg:min-w-[130px] xl:min-w-[190px]">
      <div className="flex items-center gap-1.5">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" style={{ color }} viewBox="0 0 24 24">
          <path d={STAR} />
        </svg>
        <span className="font-normal text-sm sm:text-[16px] lg:text-[13px] xl:text-[16px] text-[#5F6B6F]" style={LATO}>
          {label}
        </span>
      </div>
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <div key={s} className="w-5 h-5 flex items-center justify-center rounded-[2px]" style={{ backgroundColor: color }}>
            <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
              <path d={STAR} />
            </svg>
          </div>
        ))}
      </div>
      <span className="text-[12px] text-[#5F6B6F]" style={LATO}>
        {score}
      </span>
    </div>
  );
}

export function EsaOnlineHero({
  title = "Legitimate ESA Letter Online From a Licensed Therapist",
  description = "Begin with a secure, HIPAA-compliant telehealth evaluation designed to support a legitimate ESA letter when clinically appropriate. ESA letters are issued based on a licensed clinician’s professional judgment.",
  buttonText = "Start your ESA Evaluation",
  image = "/esa-online/esa-letter-online_herosection.png",
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
            <Image
              src={imageMobile!}
              alt={imageAlt}
              fill
              priority
              className="sm:hidden object-cover object-bottom"
              sizes="(max-width: 639px) 100vw, 1px"
            />
            <Image
              src={imageTablet!}
              alt={imageAlt}
              fill
              priority
              className="hidden sm:block lg:hidden object-cover object-bottom"
              sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
            />
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
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
                  <span className="font-sans font-semibold text-[9px] sm:text-[12px] text-[#949494] whitespace-nowrap">{s.label}</span>
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

          <div className={`flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-2 xl:gap-4 pt-1 ${stacked ? "hidden lg:flex" : ""}`}>
            <ReviewCard color="#00B67A" label="Trustpilot" score="Trustscore 4.4" />
            <ReviewCard color="#095691" label="ConsumerAffair Reviews" score="Reviews 4.4" />
          </div>
        </div>
      </div>
    </section>
  );
}
