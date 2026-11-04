import React from "react";
import { ResponsiveHero, standardHeroBackgrounds } from "@/components/common/ResponsiveHero";
import { SiteBreadcrumbs } from "@/components/seo/SiteBreadcrumbs";

const DESCRIPTION =
  "Providing legitimate, HIPAA-compliant ESA evaluations through state-licensed mental health professionals across all 50 states.";

export function AboutHeroSection() {
  return (
    <ResponsiveHero
      className="z-30 overflow-hidden"
      desktopHeight={640}
      tabletMinHeight="720px"
      centered={false}
      backgrounds={standardHeroBackgrounds(
        "/hero-image-for-mobile-all.webp",
        "/about-us/about-us-tablet-hero-section.webp",
        "/about-us/hero-about-desktop.webp",
      )}
    >
      <SiteBreadcrumbs className="mb-3 self-start sm:self-auto" />
      <h1 className="heading-h1 text-primary max-w-[320px] sm:max-w-[620px]">About My ESA Therapist</h1>
      <p className="body-large text-body-text mx-auto mt-4 max-w-[320px] sm:mx-0 sm:max-w-[500px]">
        {DESCRIPTION}
      </p>
    </ResponsiveHero>
  );
}
