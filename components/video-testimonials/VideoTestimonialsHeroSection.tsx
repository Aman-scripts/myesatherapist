import React from "react";
import { ResponsiveHero, standardHeroBackgrounds } from "@/components/common/ResponsiveHero";
import { SiteBreadcrumbs } from "@/components/seo/SiteBreadcrumbs";
import { VideoTestimonialsTrustBar } from "@/components/video-testimonials/VideoTestimonialsTrustBar";

export function VideoTestimonialsHeroSection() {
  return (
    <ResponsiveHero
      className="z-20"
      desktopHeight={571}
      tabletMinHeight="720px"
      contentClassName="pb-[168px] sm:pb-16 lg:pb-10"
      backgrounds={standardHeroBackgrounds(
        "/hero-image-for-mobile-all.webp",
        "/video-testimonial/video-testimonial-herosection-tablet.webp",
        "/video-testimonial/client-stories-hero-desktop.webp",
      )}
      overlay={
        <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 px-4">
          <VideoTestimonialsTrustBar />
        </div>
      }
    >
      <SiteBreadcrumbs className="mb-3 self-start sm:self-auto" />
      <h1 className="heading-h1 text-primary max-w-[320px] sm:max-w-[620px]">
        Real Stories,
        <br />
        Real Impact
      </h1>
      <p className="body-large text-body-text mx-auto mt-4 max-w-[320px] sm:mx-0 sm:max-w-[520px]">
        Hear directly from our clients as they share their experiences with My ESA Therapist and the support they received throughout their ESA evaluation journey.
      </p>
    </ResponsiveHero>
  );
}
