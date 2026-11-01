import React from "react";

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
 * Container for 1440px desktop layouts that allows full-bleed backgrounds while
 * keeping content centered and overflow-visible. Global proportional scaling
 * between 1024px and 1440px is handled globally by GlobalDesktopScaler on <body>,
 * guaranteeing an exact 1:1 match with the 1440px Figma design.
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

  return (
    <div className={`hidden lg:block relative w-full overflow-visible ${wrapperClassName}`}>
      {/* Optional full-bleed background for screens wider than designWidth */}
      {bg && (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          {bg}
        </div>
      )}

      {/* 1440px Design Canvas */}
      <div
        className={`relative z-10 mx-auto ${className}`}
        style={{
          width: `${designWidth}px`,
          maxWidth: `${designWidth}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
