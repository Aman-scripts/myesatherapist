"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SHOW_DELAY_MS = 400;
const HIDE_AFTER_MS = 45000;

function isPageNavigation(anchor: HTMLAnchorElement) {
  if (anchor.target && anchor.target !== "_self") return false;
  if (anchor.hasAttribute("download")) return false;

  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return false;
  }

  let url: URL;
  try {
    url = new URL(href, window.location.href);
  } catch {
    return false;
  }

  if (url.origin !== window.location.origin) return false;
  return url.pathname !== window.location.pathname || url.search !== window.location.search;
}

export function NavigationProgress() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const timers = useRef({ show: 0, hide: 0 });

  useEffect(() => {
    window.clearTimeout(timers.current.show);
    window.clearTimeout(timers.current.hide);
    setVisible(false);
  }, [pathname]);

  useEffect(() => {
    const clearTimers = () => {
      window.clearTimeout(timers.current.show);
      window.clearTimeout(timers.current.hide);
    };

    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!(anchor instanceof HTMLAnchorElement) || !isPageNavigation(anchor)) return;

      const from = window.location.pathname;
      clearTimers();
      timers.current.show = window.setTimeout(() => {
        if (window.location.pathname === from) setVisible(true);
      }, SHOW_DELAY_MS);
      timers.current.hide = window.setTimeout(() => setVisible(false), HIDE_AFTER_MS);
    };

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      clearTimers();
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[80] flex items-center justify-center bg-background"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="absolute inset-x-0 top-0 h-1 overflow-hidden bg-primary/15">
        <div className="nav-progress-bar h-full bg-accent" />
      </div>
      <Image
        src="/common/myesa-logo.svg"
        alt=""
        width={171}
        height={71}
        unoptimized
        priority
        className="h-16 w-auto"
      />
    </div>
  );
}
