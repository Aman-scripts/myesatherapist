import React from "react";
import { BreakpointImage } from "@/components/common/BreakpointImage";
import { DesktopScaleWrapper } from "@/components/common/DesktopScaleWrapper";

const HEADING = "Emotional Support Animal Laws by State and Federal Guidelines";
const DESCRIPTION =
  "Understand federal and state-level ESA regulations, housing rules, and evaluation requirements.";
const HERO_IMAGE = "/esa-laws/esalaws-herosection-portrait.webp";

export function EsaLawsHero() {
  return (
    <section className="relative z-30 w-full bg-background overflow-visible">
      <div className="sm:hidden relative w-full">
        <BreakpointImage
          media="(max-width: 639px)"
          quality={90}
          src="/Hero_image_for_mobile_all.webp"
          alt=""
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="relative z-10 px-6 pt-10 pb-12 text-center flex flex-col items-center space-y-3">
          <h1 className="heading-h1 text-primary max-w-[320px]">{HEADING}</h1>
          <p className="body-large text-body-text max-w-[320px]">{DESCRIPTION}</p>
        </div>
      </div>

      <div className="hidden sm:block lg:hidden relative w-full aspect-[834/1200] min-h-[780px]">
        <BreakpointImage
          media="(min-width: 640px) and (max-width: 1023px)"
          quality={90}
          src={HERO_IMAGE}
          alt="Woman reading ESA Laws guide with her emotional support dog"
          fill
          className="object-cover object-bottom"
          sizes="(min-width: 640px) and (max-width: 1023px) 834px, 1px"
        />
        <div className="absolute inset-0 z-10 flex items-center px-10">
          <div className="flex flex-col items-start gap-4 max-w-[520px]">
            <h1 className="heading-h1 text-primary">{HEADING}</h1>
            <p className="body-large text-body-text max-w-[440px]">{DESCRIPTION}</p>
          </div>
        </div>
      </div>

      <DesktopScaleWrapper
        designHeight={618}
        designWidth={1440}
        wrapperClassName="bg-background overflow-hidden"
        background={
          <BreakpointImage
            media="(min-width: 1024px)"
            quality={90}
            src="/esa-laws/esa-laws-hero-desktop.webp"
            alt="Woman reading ESA Laws guide with her emotional support dog"
            fill
            className="object-cover object-right"
            sizes="(min-width: 1024px) 100vw, 1px"
          />
        }
      >
        <div className="relative w-[1440px] h-[618px] flex items-center">
          <div className="pl-[82px] w-[720px] z-10 flex flex-col items-start gap-5">
            <h1 className="heading-h1 text-primary">{HEADING}</h1>
            <p className="body-large text-body-text max-w-[460px]">{DESCRIPTION}</p>
          </div>
        </div>
      </DesktopScaleWrapper>
    </section>
  );
}
