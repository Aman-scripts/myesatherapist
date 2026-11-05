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
      {bg && (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          {bg}
        </div>
      )}

      <div
        className={`relative z-10 mx-auto w-full ${className}`}
        style={{
          maxWidth: `${designWidth}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
