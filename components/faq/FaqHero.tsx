import React from "react";
import { ResponsiveHero, standardHeroBackgrounds } from "@/components/common/ResponsiveHero";
import { SiteBreadcrumbs } from "@/components/seo/SiteBreadcrumbs";

const HEADING = "Need Clarity About ESA Letters?";
const DESCRIPTION =
  "Have questions about emotional support animals? Find simple, reliable answers to help you understand the ESA process.";

export function FaqHero() {
  return (
    <ResponsiveHero
      className="z-30"
      desktopHeight={526}
      tabletMinHeight="780px"
      backgrounds={standardHeroBackgrounds(
        "/faq/faq-hero-section-mobile.webp",
        "/faq/faq-hero-section-tablet.webp",
        "/faq/esa-questions-hero-desktop.webp",
        { mobile: "object-bottom", tablet: "object-center", desktop: "object-right" },
      )}
    >
      <SiteBreadcrumbs className="mb-3 self-start sm:self-auto" />
      <h1 className="heading-h1 text-primary max-w-[320px] sm:max-w-[680px]">{HEADING}</h1>
      <p className="body-large text-body-text mx-auto mt-4 max-w-[320px] sm:mx-0 sm:max-w-[420px]">
        {DESCRIPTION}
      </p>
    </ResponsiveHero>
  );
}
