import React from "react";
import Image from "next/image";
import { BreakpointImage } from "@/components/common/BreakpointImage";

export function EsaLawsStateHero({
  title,
  description,
  image = "/esalawsblog/esalaws_herosection.webp",
  imageMobile,
  imageTablet,
  imageAlt = "",
}: {
  title: string;
  description: string;
  image?: string;
  /** Portrait artwork for < sm. With imageTablet, the hero uses a centered stacked layout below lg. */
  imageMobile?: string;
  /** Portrait artwork for sm to < lg. */
  imageTablet?: string;
  imageAlt?: string;
}) {
  const stacked = Boolean(imageMobile && imageTablet);

  return (
    <section
      className={`relative w-full bg-[#FAF7F2] overflow-hidden ${
        stacked
          ? "grid lg:flex lg:items-center lg:min-h-[480px] xl:min-h-[619px]"
          : "flex items-center min-h-[560px] lg:min-h-[480px] xl:min-h-[619px]"
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
              className="hidden lg:block object-cover lg:object-[35%_center] xl:object-center"
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
              className="object-cover object-[75%_center] sm:object-right lg:object-[35%_center] xl:object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/95 via-[#FAF7F2]/80 to-transparent lg:hidden" />
          </>
        )}
      </div>

      <div
        className={`relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-20 py-10 sm:py-14 lg:py-10 xl:py-16 ${
          stacked ? "col-start-1 row-start-1 pb-[80vw] sm:pb-[80vw] lg:pb-10 xl:pb-16" : ""
        }`}
      >
        <div
          className={`max-w-[624px] lg:max-w-[440px] xl:max-w-[624px] space-y-5 sm:space-y-6 lg:space-y-4 xl:space-y-6 ${
            stacked ? "mx-auto lg:mx-0 text-center lg:text-left" : ""
          }`}
        >
          <h1 className="font-heading text-[26px] sm:text-5xl lg:text-[34px] xl:text-[56px] font-bold text-[#2E5A66] leading-[1.14] tracking-[-0.0002em]">
            {title}
          </h1>
          <p className="font-sans text-[12.5px] sm:text-base lg:text-[13px] xl:text-[18px] text-[#5F6B6F] font-semibold leading-[1.65] max-w-[626px]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
