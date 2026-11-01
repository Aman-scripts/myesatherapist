import React from "react";
import { BreakpointImage } from "@/components/common/BreakpointImage";
import { DesktopScaleWrapper } from "@/components/common/DesktopScaleWrapper";

const HEADING = "What Our Clients Are Saying";
const DESCRIPTION =
  "Real experiences from people who found comfort and confidence through My ESA Therapist.";

export function ReviewsHeroSection() {
  return (
    <section className="relative z-30 w-full bg-background overflow-visible">
      <h1 className="sr-only">{HEADING}</h1>
      <div className="sm:hidden relative w-full aspect-[390/780] min-h-[660px]">
        <BreakpointImage
          media="(max-width: 639px)"
          quality={90}
          src="/reviews/reviews_phone-hero_section.webp"
          alt="What Our Clients Are Saying"
          fill
          className="object-cover object-bottom"
          sizes="(max-width: 639px) 100vw, 1px"
        />
        <div className="absolute inset-0 z-10 flex items-center px-5">
          <div className="flex flex-col items-start gap-3 max-w-[300px]">
            <p aria-hidden="true" className="heading-h2 text-primary">{HEADING}</p>
            <p className="body-large text-primary">{DESCRIPTION}</p>
          </div>
        </div>
      </div>

      <div className="hidden sm:block lg:hidden relative w-full aspect-[834/1100] min-h-[720px]">
        <BreakpointImage
          media="(min-width: 640px) and (max-width: 1023px)"
          quality={90}
          src="/reviews/reviews_tablet-hero_section.webp"
          alt="What Our Clients Are Saying"
          fill
          className="object-cover object-bottom"
          sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
        />
        <div className="absolute inset-0 z-10 flex items-center px-10">
          <div className="flex flex-col items-start gap-4 max-w-[440px]">
            <p aria-hidden="true" className="heading-h1 text-primary">{HEADING}</p>
            <p className="body-large text-body-text">{DESCRIPTION}</p>
          </div>
        </div>
      </div>

      <DesktopScaleWrapper
        designHeight={743}
        designWidth={1440}
        wrapperClassName="bg-background overflow-hidden"
        background={
          <BreakpointImage
            media="(min-width: 1024px)"
            quality={90}
            src="/reviews/reviews_hero-section.webp"
            alt="What Our Clients Are Saying"
            fill
            className="object-cover object-[86%_center]"
            sizes="(min-width: 1024px) 100vw, 1px"
          />
        }
      >
        <div className="relative w-[1440px] h-[743px] flex items-center">
          <div className="pl-[82px] max-w-[620px] z-10 flex flex-col items-start gap-5">
            <p aria-hidden="true" className="heading-h1 text-primary">{HEADING}</p>
            <p className="body-large text-body-text">{DESCRIPTION}</p>
          </div>
        </div>
      </DesktopScaleWrapper>
    </section>
  );
}
