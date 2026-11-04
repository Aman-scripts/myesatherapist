import React from "react";
import { ResponsiveHero, standardHeroBackgrounds } from "@/components/common/ResponsiveHero";
import { SiteBreadcrumbs } from "@/components/seo/SiteBreadcrumbs";

const HEADING = "What Our Clients Are Saying";
const DESCRIPTION =
  "Real experiences from people who found comfort and confidence through My ESA Therapist.";

export function ReviewsHeroSection() {
  return (
    <ResponsiveHero
      className="z-30"
      desktopHeight={565}
      tabletMinHeight="720px"
      backgrounds={standardHeroBackgrounds(
        "/hero-image-for-mobile-all.webp",
        "/reviews/reviews-tablet-hero-section.webp",
        "/reviews/clients-testimonial-hero-desktop.webp",
      )}
    >
      <SiteBreadcrumbs className="mb-3 self-start sm:self-auto" />
      <h1 className="heading-h1 text-primary max-w-[320px] sm:max-w-[620px]">{HEADING}</h1>
      <p className="body-large text-body-text mx-auto mt-4 max-w-[320px] sm:mx-0 sm:max-w-[440px]">
        {DESCRIPTION}
      </p>
    </ResponsiveHero>
  );
}
