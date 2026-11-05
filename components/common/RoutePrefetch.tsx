"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

const warmed = new Set<string>();

type PrefetchRoute = (href: string, options?: { kind: "auto" | "full" }) => void;

function normalizePath(href: string) {
  const path = href.split("#")[0]?.split("?")[0] ?? "";
  if (!path.startsWith("/") || path.startsWith("//")) return "";
  return path.length > 1 && !path.endsWith("/") ? `${path}/` : path;
}

function pathFromEvent(event: Event) {
  const target = event.target;
  if (!(target instanceof Element)) return "";
  const anchor = target.closest("a");
  if (!(anchor instanceof HTMLAnchorElement)) return "";
  if (anchor.target && anchor.target !== "_self") return "";
  const href = anchor.getAttribute("href");
  if (!href) return "";
  return normalizePath(href);
}

export function RoutePrefetch() {
  const pathname = usePathname();
  const router = useRouter();
  const routerRef = useRef(router);
  routerRef.current = router;

  useEffect(() => {
    const prefetch = (href: string) => {
      const path = normalizePath(href);
      if (!path || path === pathname || warmed.has(path)) return;
      warmed.add(path);
      (routerRef.current.prefetch as PrefetchRoute)(path, { kind: "full" });
    };

    let hovered = "";
    let hoverTimer = 0;
    const onPointerOver = (event: Event) => {
      const path = pathFromEvent(event);
      if (!path || path === pathname) return;
      hovered = path;
      window.clearTimeout(hoverTimer);
      hoverTimer = window.setTimeout(() => {
        if (hovered === path) prefetch(path);
      }, 160);
    };
    document.addEventListener("pointerover", onPointerOver, true);
    return () => {
      window.clearTimeout(hoverTimer);
      document.removeEventListener("pointerover", onPointerOver, true);
    };
  }, [pathname]);

  return null;
}
