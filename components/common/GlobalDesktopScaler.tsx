"use client";

import { useEffect } from "react";

const SCALER_STYLE_ID = "desktop-scaler-css";
const DESIGN_WIDTH = 1440;
const MIN_DESKTOP_WIDTH = 1024;

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
