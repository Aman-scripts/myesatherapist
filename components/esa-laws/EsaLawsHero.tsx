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
      <div className="sm:hidden relative w-full aspect-[390/780] min-h-[660px]">
        <BreakpointImage
          media="(max-width: 639px)"
          quality={70}
          src={HERO_IMAGE}
          alt="Woman reading ESA Laws guide with her emotional support dog"
          fill
          className="object-cover object-bottom"
          sizes="(max-width: 639px) 430px, 1px"
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
          quality={75}
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
        designHeight={797}
        designWidth={1440}
        wrapperClassName="bg-background overflow-hidden"
        background={
          <BreakpointImage
            media="(min-width: 1024px)"
            quality={80}
            src="/esa-laws/esalaws-herosection.webp"
            alt="Woman reading ESA Laws guide with her emotional support dog"
            fill
            className="object-cover object-center"
            sizes="(min-width: 1024px) 100vw, 1px"
          />
        }
      >
        <div className="relative w-[1440px] h-[797px] flex items-center">
          <div className="pl-[82px] w-[720px] z-10 flex flex-col items-start gap-5">
            <h1 className="heading-h1 text-primary">{HEADING}</h1>
            <p className="body-large text-body-text max-w-[460px]">{DESCRIPTION}</p>
          </div>
        </div>
      </DesktopScaleWrapper>
    </section>
  );
}
