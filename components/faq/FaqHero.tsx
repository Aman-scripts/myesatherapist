import React from "react";
import { BreakpointImage } from "@/components/common/BreakpointImage";
import { DesktopScaleWrapper } from "@/components/common/DesktopScaleWrapper";

const HEADING = (
  <>
    ESA Questions?
    <br />
    We’re Here To Help.
  </>
);

const DESCRIPTION =
  "Have questions about Emotional Support Animals? Find simple, reliable answers to help you understand the ESA process.";

export function FaqHero() {
  return (
    <section className="relative z-30 w-full bg-background overflow-visible">
      <div className="sm:hidden relative w-full aspect-[390/780] min-h-[660px]">
        <BreakpointImage
          media="(max-width: 639px)"
          quality={80}
          src="/faq/faq_hero-section_mobile.webp"
          alt="ESA Questions? We’re Here To Help."
          fill
          className="object-cover object-bottom"
          sizes="(max-width: 639px) 100vw, 1px"
        />
        <div className="absolute inset-0 z-10 flex items-center px-5">
          <div className="flex flex-col items-start gap-3 max-w-[300px]">
            <h1 className="heading-h2 text-primary">{HEADING}</h1>
            <p className="body-text text-body-text">{DESCRIPTION}</p>
          </div>
        </div>
      </div>

      <div className="hidden sm:block lg:hidden relative w-full aspect-[834/1200] min-h-[780px]">
        <BreakpointImage
          media="(min-width: 640px) and (max-width: 1023px)"
          quality={80}
          src="/faq/faq_hero-section_tablet.webp"
          alt="ESA Questions? We’re Here To Help."
          fill
          className="object-cover object-bottom"
          sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
        />
        <div className="absolute inset-0 z-10 flex items-center px-10">
          <div className="flex flex-col items-start gap-4 max-w-[460px]">
            <h1 className="heading-h1 text-primary">{HEADING}</h1>
            <p className="body-large text-body-text">{DESCRIPTION}</p>
          </div>
        </div>
      </div>

      <DesktopScaleWrapper
        designHeight={737}
        designWidth={1440}
        wrapperClassName="bg-background overflow-hidden"
        background={
          <BreakpointImage
            media="(min-width: 1024px)"
            quality={80}
            src="/faq/faq_hero-section.webp"
            alt="ESA Questions? We're Here To Help"
            fill
            className="object-cover object-center"
            sizes="(min-width: 1024px) 100vw, 1px"
          />
        }
      >
        <div className="relative w-[1440px] h-[737px] flex items-center">
          <div className="pl-[82px] max-w-[680px] z-10 flex flex-col items-start gap-5">
            <h1 className="heading-h1 text-primary">{HEADING}</h1>
            <p className="body-large text-body-text max-w-[420px]">{DESCRIPTION}</p>
          </div>
        </div>
      </DesktopScaleWrapper>
    </section>
  );
}
