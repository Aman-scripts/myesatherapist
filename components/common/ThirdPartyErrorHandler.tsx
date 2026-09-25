"use client";

import { useEffect } from "react";

/**
 * ThirdPartyErrorHandler
 *
 * Prevents non-fatal telemetry logger errors from third-party widgets
 * (specifically Tawk.to's `[Tawk/Logger]: Error report sent true`) from
 * triggering Next.js's development error overlay modal while preserving
 * standard console warning logs and allowing genuine application errors.
 */
export function ThirdPartyErrorHandler() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Ensure Tawk_API exists to avoid initialization reference issues
    const win = window as unknown as {
      Tawk_API?: Record<string, unknown>;
      Tawk_LoadStart?: Date;
    };
    win.Tawk_API = win.Tawk_API || {};
    win.Tawk_LoadStart = win.Tawk_LoadStart || new Date();

    const patchConsoleError = () => {
      const origError = console.error;
      if ((origError as unknown as { __tawkFiltered?: boolean }).__tawkFiltered) {
        return;
      }

      const filteredError = (...args: unknown[]) => {
        const first = args && args[0];
        const firstStr = typeof first === "string" ? first : "";
        if (
          firstStr.includes("[Tawk/Logger]") ||
          firstStr.includes("Tawk/Logger") ||
          firstStr.includes("tawk.to")
        ) {
          console.warn(...args);
          return;
        }
        origError.apply(console, args);
      };

      (filteredError as unknown as { __tawkFiltered?: boolean }).__tawkFiltered = true;
      console.error = filteredError;
    };

    patchConsoleError();

    const onError = (e: ErrorEvent) => {
      if (
        e &&
        ((e.message && (e.message.includes("tawk") || e.message.includes("Tawk"))) ||
          (e.filename && e.filename.includes("tawk")))
      ) {
        e.stopImmediatePropagation();
      }
    };

    const onRejection = (e: PromiseRejectionEvent) => {
      if (e && e.reason) {
        const reasonStr = String(e.reason?.message || e.reason || "");
        if (reasonStr.includes("tawk") || reasonStr.includes("Tawk")) {
          e.stopImmediatePropagation();
          e.preventDefault();
        }
      }
    };

    window.addEventListener("error", onError, true);
    window.addEventListener("unhandledrejection", onRejection, true);

    return () => {
      window.removeEventListener("error", onError, true);
      window.removeEventListener("unhandledrejection", onRejection, true);
    };
  }, []);

  return null;
}
