"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "@/components/common/CtaButton";
import { DesktopScaleWrapper } from "@/components/common/DesktopScaleWrapper";

const TEAL_GRADIENT = "var(--color-gradient)";

export function EmotionalSupportSection() {
  return (
    <section className="relative overflow-hidden bg-white w-full pt-0 pb-8 sm:pb-12 lg:py-0">
      {/* Mobile & Tablet Image Container (Rendered FIRST on Mobile/Tablet with 0 top gap) */}
      <div className="lg:hidden w-full overflow-hidden">
        {/* Mobile Image (< 640px) */}
        <div className="sm:hidden w-full -mt-2.5">
          <Image
            quality={80} loading="lazy"
            src="/home/mobile-emotional-support.webp"
            alt="What is an Emotional Support Animal"
            width={390}
            height={425}
            className="w-full h-auto block"
          />
        </div>

        {/* Tablet Image (640px to 1023px) */}
        <div className="hidden sm:block w-full -mt-3.5">
          <Image
            quality={80} loading="lazy"
            src="/home/tablet-emotional-support-section.webp"
            alt="What is an Emotional Support Animal"
            width={834}
            height={521}
            className="w-full h-auto block"
          />
        </div>
      </div>

      {/* Mobile & Tablet Content Area (Renders AFTER image on Mobile/Tablet) */}
      <div className="lg:hidden w-full px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        <div className="space-y-3">
          <h2 className="heading-h2 capitalize">
            What Is An Emotional Support Animal?
          </h2>
          <div className="space-y-3">
            <p className="body-large">
              An emotional support animal (ESA) is an assistance animal that provides emotional support that helps alleviate one or more effects of a person&apos;s disability. Unlike a service animal, an ESA does not need to be trained to perform specific tasks for a person with a disability.
            </p>
            <p className="body-large">
              ESAs are recognized under certain housing laws, allowing individuals to live with them in places that might otherwise have pet restrictions. When documentation is needed, a qualified healthcare professional may provide reliable documentation supporting the disability-related need for an assistance animal.
            </p>
          </div>
        </div>

        {/* Action Buttons & Refund Reassurance */}
        <div className="space-y-2 flex flex-col items-center sm:items-start w-full">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
            <CtaButton
              href="/blog/esa-guide/emotional-support-animal/"
              variant="secondary"
              className="w-auto px-6"
            >
              Learn About ESA
            </CtaButton>
            <CtaButton href="#how-it-works" variant="accent" className="w-[192px]">
              Get Started
            </CtaButton>
          </div>
          <p className="body-small text-center sm:text-left">
            If not approved after your evaluation? You get a full refund.
          </p>
        </div>
      </div>

      {/* Desktop Container (>= 1024px) scaled proportionally to match 1440px design */}
      <DesktopScaleWrapper
        designWidth={1440}
        designHeight={760}
        className="hidden lg:block relative"
      >
        <div className="relative w-[1440px] h-[760px] flex items-center justify-between">
          {/* Left Content Area (Exact 737px Figma Frame) */}
          <div className="w-[737px] pl-[78px] pr-4 z-10 space-y-8 my-auto">
            <div className="space-y-3.5">
              <h2 className="heading-h2 capitalize">
                What Is An Emotional Support Animal?
              </h2>

              <div className="space-y-3.5">
                <p className="body-large">
                  An emotional support animal (ESA) is an assistance animal that provides emotional support that helps alleviate one or more effects of a person&apos;s disability. Unlike a service animal, an ESA does not need to be trained to perform specific tasks for a person with a disability.
                </p>
                <p className="body-large">
                  ESAs are recognized under certain housing laws, allowing individuals to live with them in places that might otherwise have pet restrictions. When documentation is needed, a qualified healthcare professional may provide reliable documentation supporting the disability-related need for an assistance animal.
                </p>
              </div>
            </div>

            {/* Action Buttons & Refund Reassurance */}
            <div className="space-y-2">
              <div className="flex flex-row items-center gap-6 pt-2">
                <CtaButton
                  href="/blog/esa-guide/emotional-support-animal/"
                  variant="secondary"
                  className="w-auto px-6"
                >
                  Learn About ESA
                </CtaButton>

                <CtaButton href="#how-it-works" variant="accent" className="w-[192px]">
                  Get Started
                </CtaButton>
              </div>
              <p className="body-small">
                If not approved after your evaluation? You get a full refund.
              </p>
            </div>
          </div>

          {/* Desktop Right Graphics (607px natural curved frame) */}
          <div className="w-[607px] absolute right-0 top-0 bottom-0 h-full pointer-events-none z-0">
            <Image
              quality={80} loading="lazy"
              src="/home/emotional-support-right-frame.webp"
              alt="Emotional support dog and woman"
              fill
              className="object-cover object-right"
              sizes="607px"
            />
          </div>

          {/* Bottom-right teal wave (Figma: 423 x 110, flush to the section's bottom-right corner) */}
          <div className="absolute z-10 pointer-events-none right-0 bottom-0 w-[423px] h-[110px]">
            <Image
              quality={80} loading="lazy"
              src="/home/emotional-support-section-bottom.svg"
              alt=""
              fill
              className="object-fill"
            />
          </div>

          {/* Bottom Paw Icon: sits on the teal wave in the bottom-right corner */}
          <div className="absolute z-20 pointer-events-none right-[20px] bottom-[2px] w-[84px] h-[84px]">
            <Image
              quality={80} loading="lazy"
              src="/home/emotional-support-section-bottom-paw-icon.svg"
              alt="Paw prints"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </DesktopScaleWrapper>
    </section>
  );
}
