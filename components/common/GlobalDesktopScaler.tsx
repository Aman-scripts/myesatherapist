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

      if (width >= 1024 && width < 1440) {
        const scale = width / 1440;
        document.documentElement.style.zoom = `${scale}`;
      } else {
        document.documentElement.style.zoom = "";
      }
    }

    updateDesktopScale();
    window.addEventListener("resize", updateDesktopScale);
    return () => {
      window.removeEventListener("resize", updateDesktopScale);
      if (typeof document !== "undefined") {
        document.documentElement.style.zoom = "";
      }
    };
  }, []);

  return null;
}
