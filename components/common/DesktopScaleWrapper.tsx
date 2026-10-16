"use client";

import React, { useState, useEffect } from "react";

interface DesktopScaleWrapperProps {
  children: React.ReactNode;
  designHeight?: number;
  designWidth?: number;
  className?: string;
  wrapperClassName?: string;
  background?: React.ReactNode;
  fullBleedBackground?: React.ReactNode;
}

/**
 * DesktopScaleWrapper
 * 
 * Ensures that any desktop section designed for 1440px in Figma maintains
 * its exact 1440px visual proportions on laptop/desktop screen sizes from 1024px up to 1439px.
 *
 * Scales the inner 1440px canvas to fit 100% of the available screen width,
 * preserving all exact absolute coordinates, typography, images, badges, and curves without clipping.
 */
export function DesktopScaleWrapper({
  children,
  designWidth = 1440,
  className = "",
  wrapperClassName = "",
  background,
  fullBleedBackground,
}: DesktopScaleWrapperProps) {
  const bg = background ?? fullBleedBackground;

  const [scale, setScale] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const isDesktop =
        (typeof window.matchMedia === "function" &&
          window.matchMedia("(min-width: 1024px)").matches) ||
        window.innerWidth >= 990;
      if (isDesktop && window.innerWidth < designWidth) {
        return window.innerWidth / designWidth;
      }
    }
    return 1;
  });

  useEffect(() => {
    function updateScale() {
      const isDesktop =
        (typeof window.matchMedia === "function" &&
          window.matchMedia("(min-width: 1024px)").matches) ||
        window.innerWidth >= 990;
      if (isDesktop && window.innerWidth < designWidth) {
        setScale(window.innerWidth / designWidth);
      } else {
        setScale(1);
      }
    }

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [designWidth]);

  return (
    <div
      className={`hidden lg:block relative w-full overflow-hidden ${wrapperClassName}`}
      style={{ maxWidth: "100vw" }}
    >
      {/* Optional full-bleed background for screens wider than designWidth */}
      {bg && (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {bg}
        </div>
      )}

      {/* 1440px Design Canvas */}
      <div
        className={`relative z-10 mx-auto ${className}`}
        style={{
          width: `${designWidth}px`,
          maxWidth: `${designWidth}px`,
          ...(scale < 1 ? { zoom: scale } : {}),
        }}
      >
        {children}
      </div>
    </div>
  );
}
