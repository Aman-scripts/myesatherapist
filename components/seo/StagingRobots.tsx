"use client";

import { useEffect } from "react";

/** Staging hosts stay crawlable so the noindex tag can be seen, then drop out of the index. */
export function StagingRobots() {
  useEffect(() => {
    if (!window.location.hostname.endsWith(".vercel.app")) return;
    const content = "noindex, nofollow";
    const metas = document.querySelectorAll('meta[name="robots"], meta[name="googlebot"]');
    metas.forEach((node) => node.setAttribute("content", content));
    if (metas.length === 0) {
      const meta = document.createElement("meta");
      meta.name = "robots";
      meta.content = content;
      document.head.appendChild(meta);
    }
  }, []);

  return null;
}
