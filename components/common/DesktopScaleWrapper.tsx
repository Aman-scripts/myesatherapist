"use client";

import React, { useState, useEffect } from "react";

interface DesktopScaleWrapperProps {
  children: React.ReactNode;
  designHeight: number;
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
 * At 1024px screen width: scale = 1024 / 1440 = 0.7111
 * Visual width = 1440 * (1024 / 1440) = 1024px (100% screen width)
 * Visual height = designHeight * scale
 *
 * Every coordinate, font size, gap, badge, and element remains 100% identical to the 1440px design.
 * On screens >= 1440px, it renders at native 1440px and centers itself horizontally.
 */
export function DesktopScaleWrapper({
  children,
  designHeight,
  designWidth = 1440,
  className = "",
  wrapperClassName = "",
  background,
  fullBleedBackground,
}: DesktopScaleWrapperProps) {
  const bg = background ?? fullBleedBackground;
  const [scale, setScale] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const updateScale = () => {
      const w = window.innerWidth;
      if (w >= 1024 && w < designWidth) {
        setScale(w / designWidth);
      } else {
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [designWidth]);

  const scaledHeight = Math.round(designHeight * scale);

  return (
    <div
      className={`hidden lg:block relative w-full overflow-hidden ${wrapperClassName}`}
      style={{
        height: isMounted && scale < 1 ? `${scaledHeight}px` : `${designHeight}px`,
      }}
    >
      {/* Optional full-bleed background for screens wider than designWidth */}
      {bg && (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {bg}
        </div>
      )}

      {/* 1440px Design Canvas */}
      <div
        className={`relative z-10 origin-top-left ${className}`}
        style={{
          width: `${designWidth}px`,
          height: `${designHeight}px`,
          transform: isMounted && scale < 1 ? `scale(${scale})` : undefined,
          marginLeft: !isMounted || scale === 1 ? "auto" : 0,
          marginRight: !isMounted || scale === 1 ? "auto" : 0,
        }}
      >
        {children}
      </div>
    </div>
  );
}
