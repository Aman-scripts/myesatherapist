"use client";

import { useEffect } from "react";

const SCALER_STYLE_ID = "desktop-scaler-css";

function setScalerStyle(scale: number | null) {
  if (typeof document === "undefined") return;
  let styleEl = document.getElementById(SCALER_STYLE_ID) as HTMLStyleElement | null;
  if (scale !== null) {
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = SCALER_STYLE_ID;
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = `html { zoom: ${scale}; width: 1440px !important; overflow-x: hidden !important; } body { width: 1440px !important; overflow-x: hidden !important; }`;
  } else if (styleEl) {
    styleEl.remove();
  }

  // Clear any legacy inline styles on html/body if present
  if (document.documentElement.style.zoom) {
    document.documentElement.style.zoom = "";
    document.documentElement.style.width = "";
    document.documentElement.style.overflowX = "";
  }
  if (document.body && document.body.style.width) {
    document.body.style.width = "";
    document.body.style.overflowX = "";
  }
}

/**
 * GlobalDesktopScaler
 *
 * Proportionally scales the entire 1440px desktop design globally across all pages
 * on screens between 1024px and 1439px via an injected <style> tag.
 *
 * Using an injected <style> tag completely avoids React hydration attribute mismatch
 * warnings on <html> and <body>.
 */
export function GlobalDesktopScaler() {
  useEffect(() => {
    function updateDesktopScale() {
      if (typeof window === "undefined") return;
      const width = window.innerWidth;

      const isDesktop =
        (typeof window.matchMedia === "function" &&
          window.matchMedia("(min-width: 1024px)").matches) ||
        width >= 1000;
      const isWide =
        typeof window.matchMedia === "function" &&
        window.matchMedia("(min-width: 1440px)").matches;

      if (isDesktop && !isWide) {
        setScalerStyle(width / 1440);
      } else {
        setScalerStyle(null);
      }
    }

    updateDesktopScale();
    window.addEventListener("resize", updateDesktopScale);
    return () => {
      window.removeEventListener("resize", updateDesktopScale);
      setScalerStyle(null);
    };
  }, []);

  return null;
}
