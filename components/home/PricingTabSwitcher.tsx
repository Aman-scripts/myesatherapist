"use client";

import React, { useState } from "react";

export function PricingTabSwitcher({
  esaLabel,
  psdLabel,
  esaContent,
  psdContent,
  defaultTab = "esa",
}: {
  esaLabel: string;
  psdLabel: string;
  esaContent: React.ReactNode;
  psdContent: React.ReactNode;
  defaultTab?: "esa" | "psd";
}) {
  const [active, setActive] = useState<"esa" | "psd">(defaultTab);

  return (
    <>
      <div
        className="flex w-full max-w-[386px] h-[59px] items-center rounded-full bg-white p-[4px_7px] shadow-sm"
        role="tablist"
        aria-label="Letter type"
      >
        <button
          type="button"
          role="tab"
          aria-selected={active === "esa"}
          onClick={() => setActive("esa")}
          className={`flex-1 h-[51px] rounded-full body-large font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center ${
            active === "esa"
              ? "bg-primary text-background shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.12)]"
              : "text-primary hover:bg-primary/5"
          }`}
        >
          {esaLabel}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={active === "psd"}
          onClick={() => setActive("psd")}
          className={`flex-1 h-[51px] rounded-full body-large font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center ${
            active === "psd"
              ? "bg-primary text-background shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.12)]"
              : "text-primary hover:bg-primary/5"
          }`}
        >
          {psdLabel}
        </button>
      </div>

      <div className={`w-full flex flex-col items-center ${active === "esa" ? "block" : "hidden"}`}>{esaContent}</div>
      <div className={`w-full flex flex-col items-center ${active === "psd" ? "block" : "hidden"}`}>{psdContent}</div>
    </>
  );
}
