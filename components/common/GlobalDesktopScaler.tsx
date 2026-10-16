"use client";

import { useEffect } from "react";

/**
 * GlobalDesktopScaler
 *
 * Cleanup helper: removes any legacy style tags or root styles previously set on html/body.
 * Desktop scaling is now handled directly by DesktopScaleWrapper per component.
 */
export function GlobalDesktopScaler() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const styleEl = document.getElementById("desktop-scaler-css");
    if (styleEl) styleEl.remove();

    if (document.documentElement.style.zoom) {
      document.documentElement.style.zoom = "";
      document.documentElement.style.width = "";
      document.documentElement.style.overflowX = "";
    }
    if (document.body && document.body.style.width) {
      document.body.style.width = "";
      document.body.style.overflowX = "";
    }
  }, []);

  return null;
}
