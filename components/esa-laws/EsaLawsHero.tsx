import React from "react";
import { ResponsiveHero, standardHeroBackgrounds } from "@/components/common/ResponsiveHero";
import { SiteBreadcrumbs } from "@/components/seo/SiteBreadcrumbs";

const HEADING = "Emotional Support Animal Laws by State and Federal Guidelines";
const DESCRIPTION =
  "Understand federal and state-level ESA regulations, housing rules, and evaluation requirements.";

export function EsaLawsHero() {
  return (
    <ResponsiveHero
      className="z-30"
      desktopHeight={618}
      tabletMinHeight="780px"
      backgrounds={standardHeroBackgrounds(
        "/hero-image-for-mobile-all.webp",
        "/esa-laws/esalaws-herosection-portrait.webp",
        "/esa-laws/esa-laws-hero-desktop.webp",
        { mobile: "object-top", tablet: "object-bottom", desktop: "object-right" },
      )}
    >
      <SiteBreadcrumbs className="mb-3 self-start sm:self-auto" />
      <h1 className="heading-h1 text-primary max-w-[320px] sm:max-w-[720px]">{HEADING}</h1>
      <p className="body-large text-body-text mx-auto mt-4 max-w-[320px] sm:mx-0 sm:max-w-[460px]">
        {DESCRIPTION}
      </p>
    </ResponsiveHero>
  );
}
