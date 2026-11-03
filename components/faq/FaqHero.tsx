import React from "react";
import { BreakpointImage } from "@/components/common/BreakpointImage";
import { DesktopScaleWrapper } from "@/components/common/DesktopScaleWrapper";
import { SiteBreadcrumbs } from "@/components/seo/SiteBreadcrumbs";

const HEADING = "Need Clarity About ESA Letters?";

const DESCRIPTION =
  "Have questions about emotional support animals? Find simple, reliable answers to help you understand the ESA process.";

export function FaqHero() {
  return (
    <section className="relative z-30 w-full bg-background overflow-visible">
      <h1 className="sr-only">Need Clarity About ESA Letters?</h1>
      <div className="sm:hidden relative w-full">
        <BreakpointImage
          media="(max-width: 639px)"
          quality={90}
          src="/faq/faq_hero-section_mobile.webp"
          alt="Need Clarity About ESA Letters?"
          fill
          className="object-cover object-bottom"
          sizes="100vw"
        />
        <div className="relative z-10 px-6 pt-10 pb-12 text-center flex flex-col items-center space-y-3">
          <SiteBreadcrumbs includeSchema={false} />
          <p aria-hidden="true" className="heading-h1 text-primary max-w-[280px]">{HEADING}</p>
          <p className="body-large text-body-text max-w-[320px]">{DESCRIPTION}</p>
        </div>
      </div>

      <div className="hidden sm:block lg:hidden relative w-full aspect-[834/1200] min-h-[780px]">
        <BreakpointImage
          media="(min-width: 640px) and (max-width: 1023px)"
          quality={90}
          src="/faq/faq_hero-section_tablet.webp"
          alt="Need Clarity About ESA Letters?"
          fill
          className="object-cover object-bottom"
          sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
        />
        <div className="absolute inset-0 z-10 flex items-center px-10">
          <div className="flex flex-col items-start gap-4 max-w-[460px]">
            <SiteBreadcrumbs includeSchema={false} />
            <p aria-hidden="true" className="heading-h1 text-primary">{HEADING}</p>
            <p className="body-large text-body-text">{DESCRIPTION}</p>
          </div>
        </div>
      </div>

      <DesktopScaleWrapper
        designHeight={526}
        designWidth={1440}
        wrapperClassName="bg-background overflow-hidden"
        background={
          <BreakpointImage
            media="(min-width: 1024px)"
            quality={90}
            src="/faq/esa-questions-hero-desktop.webp"
            alt="Need Clarity About ESA Letters?"
            fill
            className="object-cover object-right"
            sizes="(min-width: 1024px) 100vw, 1px"
          />
        }
      >
        <div className="relative w-[1440px] h-[526px] flex items-center">
          <div className="pl-[82px] max-w-[680px] z-10 flex flex-col items-start gap-5">
            <SiteBreadcrumbs />
            <p aria-hidden="true" className="heading-h1 text-primary">{HEADING}</p>
            <p className="body-large text-body-text max-w-[420px]">{DESCRIPTION}</p>
          </div>
        </div>
      </DesktopScaleWrapper>
    </section>
  );
}
