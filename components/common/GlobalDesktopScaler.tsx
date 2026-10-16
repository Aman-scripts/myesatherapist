"use client";

import { useEffect } from "react";

const SCALER_STYLE_ID = "desktop-scaler-css";
const DESIGN_WIDTH = 1440;
const MIN_DESKTOP_WIDTH = 1024;

/**
 * GlobalDesktopScaler
 *
 * Keeps the 1440px desktop design scaled to fit screens between 1024px and
 * 1439px on every page. The inline script in app/layout.tsx applies the same
 * <style> before first paint; this component only keeps it in sync on resize.
 *
 * Zoom is applied to <body>, never <html>, so html.clientWidth always reports
 * the real usable viewport width (excluding the scrollbar) and the measurement
 * never feeds back into itself.
 */
export function GlobalDesktopScaler() {
  useEffect(() => {
    const root = document.documentElement;
    let lastCss = "";

    function update() {
      // Breakpoint decision uses innerWidth so it matches CSS media queries (lg = 1024px).
      const viewport = window.innerWidth;
      let styleEl = document.getElementById(SCALER_STYLE_ID) as HTMLStyleElement | null;

      if (viewport < MIN_DESKTOP_WIDTH || viewport >= DESIGN_WIDTH) {
        if (styleEl) styleEl.remove();
        lastCss = "";
        return;
      }

      if (!styleEl) {
        styleEl = document.createElement("style");
        styleEl.id = SCALER_STYLE_ID;
        styleEl.textContent = "html{overflow-y:scroll;overflow-x:hidden}";
        document.head.appendChild(styleEl);
      }

      const scale = root.clientWidth / DESIGN_WIDTH;
      const css =
        "html{overflow-y:scroll;overflow-x:hidden}" +
        `body{zoom:${scale};width:${DESIGN_WIDTH}px!important;min-width:${DESIGN_WIDTH}px;overflow-x:hidden}`;
      if (css !== lastCss || styleEl.textContent !== css) {
        styleEl.textContent = css;
        lastCss = css;
      }
    }

    update();
    window.addEventListener("resize", update);
    const observer = new ResizeObserver(update);
    observer.observe(root);

    // Intentionally does not remove the style on cleanup: the root layout never
    // unmounts, and removing it (e.g. during React Strict Mode re-runs) would
    // flash the unscaled 1440px layout.
    return () => {
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, []);

  return null;
}
