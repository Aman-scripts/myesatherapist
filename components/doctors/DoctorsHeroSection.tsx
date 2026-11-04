import React from "react";
import { ResponsiveHero, standardHeroBackgrounds } from "@/components/common/ResponsiveHero";
import { SiteBreadcrumbs } from "@/components/seo/SiteBreadcrumbs";

const HEADING = "Meet Our Licensed Clinicians";
const DESCRIPTION =
  "My ESA Therapist works with a network of independent, state-licensed mental health professionals who conduct emotional support animal (ESA) evaluations through secure telehealth sessions.";

export function DoctorsHeroSection() {
  return (
    <ResponsiveHero
      className="z-30"
      desktopHeight={762}
      tabletMinHeight="720px"
      backgrounds={standardHeroBackgrounds(
        "/hero-image-for-mobile-all.webp",
        "/doctors/doctors-hero-section-tablet.webp",
        "/doctors/esa-doctors-hero-desktop.webp",
      )}
    >
      <SiteBreadcrumbs className="mb-3 self-start sm:self-auto" />
      <h1 className="heading-h1 text-primary max-w-[320px] sm:max-w-[640px]">{HEADING}</h1>
      <p className="body-large text-body-text mx-auto mt-4 max-w-[320px] sm:mx-0 sm:max-w-[560px]">
        {DESCRIPTION}
      </p>
    </ResponsiveHero>
  );
}
