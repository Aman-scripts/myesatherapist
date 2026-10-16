"use client";

import { useEffect } from "react";

/**
 * GlobalDesktopScaler
 *
 * Proportionally scales the entire 1440px desktop design globally across all pages
 * on screens between 1024px and 1439px.
 *
 * Because this applies zoom to the document root, every page, section, typography token,
 * margin, badge, and image proportionally matches the 1440px Figma layout without awkward
 * wrapping, distortion, or clipping.
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
        const scale = width / 1440;
        document.documentElement.style.zoom = `${scale}`;
        document.documentElement.style.width = "1440px";
        document.documentElement.style.overflowX = "hidden";
        if (document.body) {
          document.body.style.width = "1440px";
          document.body.style.overflowX = "hidden";
        }
      } else {
        document.documentElement.style.zoom = "";
        document.documentElement.style.width = "";
        document.documentElement.style.overflowX = "";
        if (document.body) {
          document.body.style.width = "";
          document.body.style.overflowX = "";
        }
      }
    }

    updateDesktopScale();
    window.addEventListener("resize", updateDesktopScale);
    return () => {
      window.removeEventListener("resize", updateDesktopScale);
      if (typeof document !== "undefined") {
        document.documentElement.style.zoom = "";
        document.documentElement.style.width = "";
        document.documentElement.style.overflowX = "";
        if (document.body) {
          document.body.style.width = "";
          document.body.style.overflowX = "";
        }
      }
    };
  }, []);

  return null;
}
