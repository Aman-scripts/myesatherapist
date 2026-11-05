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
      contentClassName="lg:pt-[196px]"
      backgrounds={standardHeroBackgrounds(
        "/hero-image-for-mobile-all.webp",
        "/about-us/about-us-tablet-hero-section.webp",
        "/about-us/hero-about-desktop.webp",
      )}
    >
      <div className="flex w-full max-w-[320px] flex-col items-center text-center sm:max-w-[513px] sm:items-start sm:text-left">
        <SiteBreadcrumbs className="mb-3 self-start sm:self-auto" />
        <h1 className="heading-h1 text-primary max-w-[320px] sm:max-w-[513px] lg:max-w-[430px]">
          About My ESA Therapist
        </h1>
        <p className="body-large text-body-text mt-4 max-w-[320px] sm:mt-6 sm:max-w-[470px]">
          {DESCRIPTION}
        </p>
      </div>
    </ResponsiveHero>
  );
}
