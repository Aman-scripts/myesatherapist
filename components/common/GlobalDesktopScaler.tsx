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

    let lastWidth = window.innerWidth;

    function update() {
      const viewport = window.innerWidth;
      let styleEl = document.getElementById(SCALER_STYLE_ID) as HTMLStyleElement | null;

      if (viewport < MIN_DESKTOP_WIDTH || viewport >= DESIGN_WIDTH) {
        if (styleEl) styleEl.remove();
        lastCss = "";
        return;
      }

      const scale = root.clientWidth / DESIGN_WIDTH;
      const css =
        "html{overflow-y:scroll;overflow-x:hidden}" +
        `body{zoom:${scale};width:${DESIGN_WIDTH}px!important;min-width:${DESIGN_WIDTH}px;overflow-x:hidden}`;

      if (!styleEl) {
        styleEl = document.createElement("style");
        styleEl.id = SCALER_STYLE_ID;
        styleEl.textContent = css;
        document.head.appendChild(styleEl);
        lastCss = css;
        return;
      }

      if (css !== lastCss && styleEl.textContent !== css) {
        styleEl.textContent = css;
        lastCss = css;
      }
    }

    function onResize() {
      if (window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth;
        update();
      }
    }

    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return null;
}
