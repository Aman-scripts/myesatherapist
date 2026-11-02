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
      className={`relative w-full bg-background overflow-hidden ${
        stacked
          ? "grid lg:flex lg:items-center lg:min-h-[480px] xl:min-h-[619px]"
          : "flex items-center min-h-[560px] lg:min-h-[480px] xl:min-h-[619px]"
      }`}
    >
      {stacked && <div aria-hidden className="col-start-1 row-start-1 hidden aspect-[941/1672] sm:block lg:hidden" />}
      <div
        className={`absolute pointer-events-none z-0 ${
          stacked ? "inset-0 sm:inset-x-0 sm:bottom-0 sm:top-auto sm:h-auto sm:aspect-[941/1672] lg:inset-0 lg:aspect-auto lg:h-full" : "inset-0 w-full h-full"
        }`}
      >
        {stacked ? (
          <>
            <BreakpointImage
              media="(max-width: 639px)"
              quality={90}
              src="/Hero_image_for_mobile_all.webp"
              alt=""
              fill
              className="sm:hidden object-cover object-top"
              sizes="100vw"
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
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent lg:hidden" />
          </>
        )}
      </div>

      <div
        className={`relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-20 py-10 sm:py-14 lg:py-10 xl:py-16 ${
          stacked ? "col-start-1 row-start-1 pb-12 sm:pb-[80vw] lg:pb-10 xl:pb-16" : ""
        }`}
      >
        <div
          className={`max-w-[624px] lg:max-w-[440px] xl:max-w-[624px] space-y-3 sm:space-y-6 lg:space-y-4 xl:space-y-6 mx-auto text-center lg:mx-0 lg:text-left`}
        >
          <h1 className="heading-h1 text-primary max-w-[320px] mx-auto sm:max-w-none sm:mx-0 sm:text-5xl lg:text-[34px] xl:text-[56px]">
            {title}
          </h1>
          <p className="body-large text-body-text max-w-[320px] mx-auto sm:max-w-[626px] sm:mx-0">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
