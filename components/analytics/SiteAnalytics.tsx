"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type DataLayerEvent = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

function push(event: DataLayerEvent) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

function labelOf(element: Element) {
  return (
    element.getAttribute("data-event-label") ||
    element.textContent?.replace(/\s+/g, " ").trim().slice(0, 80) ||
    ""
  );
}

/**
 * Sends route changes and click events to GTM. GA4 (G-4Y59YKVXPF) and
 * Microsoft Clarity are tags inside GTM-MRLDDQG.
 */
export function SiteAnalytics() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    push({
      event: "page_view",
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const element = (event.target as Element | null)?.closest("a, button");
      if (!element) return;
      const href = element.getAttribute("href") || "";
      const label = labelOf(element);
      const marked = element.getAttribute("data-event");

      if (marked === "cta_click") {
        push({ event: "cta_click", link_text: label, link_url: href, page_path: window.location.pathname });
      }
      if (href.startsWith("tel:")) {
        push({ event: "phone_click", link_text: label, link_url: href, page_path: window.location.pathname });
      }
      if (href.startsWith("mailto:")) {
        push({ event: "email_click", link_text: label, link_url: href, page_path: window.location.pathname });
      }
      if (/^https?:\/\//.test(href) && !href.includes("myesatherapist.")) {
        push({ event: "outbound_click", link_text: label, link_url: href, page_path: window.location.pathname });
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
