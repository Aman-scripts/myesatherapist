import React from "react";
import { BreakpointImage } from "@/components/common/BreakpointImage";
import { cn } from "@/lib/utils";

export type HeroBackground = {
  media: string;
  src: string;
  className: string;
  sizes: string;
};

type ResponsiveHeroProps = {
  backgrounds: HeroBackground[];
  desktopHeight: number;
  tabletMinHeight?: string;
  className?: string;
  contentClassName?: string;
  /** Vertically center the copy on tablet and desktop. */
  centered?: boolean;
  overlay?: React.ReactNode;
  children: React.ReactNode;
};

export function ResponsiveHero({
  backgrounds,
  desktopHeight,
  tabletMinHeight = "720px",
  className,
  contentClassName,
  centered = true,
  overlay,
  children,
}: ResponsiveHeroProps) {
  return (
    <section className={cn("relative w-full overflow-visible bg-background", className)}>
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {backgrounds.map((image) => (
          <BreakpointImage
            key={`${image.media}-${image.src}`}
            media={image.media}
            quality={90}
            src={image.src}
            alt=""
            fill
            className={image.className}
            sizes={image.sizes}
          />
        ))}
      </div>
      <div
        className={cn(
          "responsive-hero-copy relative z-10 flex flex-col items-center px-6 pb-12 pt-10 text-center",
          "sm:items-start sm:px-10 sm:text-left",
          centered ? "sm:justify-center" : "sm:justify-start sm:pt-12",
          "lg:mx-auto lg:w-[1440px] lg:px-0 lg:pl-[82px]",
          centered ? "lg:justify-center" : "lg:justify-start lg:pt-[92px]",
          contentClassName,
        )}
        style={
          {
            "--hero-tablet": tabletMinHeight,
            "--hero-desktop": `${desktopHeight}px`,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
      {overlay}
    </section>
  );
}

export function standardHeroBackgrounds(
  mobileSrc: string,
  tabletSrc: string,
  desktopSrc: string,
  positions?: { mobile?: string; tablet?: string; desktop?: string },
): HeroBackground[] {
  return [
    {
      media: "(max-width: 639px)",
      src: mobileSrc,
      className: `object-cover sm:hidden ${positions?.mobile ?? "object-top"}`,
      sizes: "(max-width: 639px) 100vw, 1px",
    },
    {
      media: "(min-width: 640px) and (max-width: 1023px)",
      src: tabletSrc,
      className: `hidden object-cover sm:block lg:hidden ${positions?.tablet ?? "object-center"}`,
      sizes: "(min-width: 640px) and (max-width: 1023px) 100vw, 1px",
    },
    {
      media: "(min-width: 1024px)",
      src: desktopSrc,
      className: `hidden object-cover lg:block ${positions?.desktop ?? "object-right"}`,
      sizes: "(min-width: 1024px) 100vw, 1px",
    },
  ];
}
