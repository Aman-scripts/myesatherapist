"use client";

import React from "react";
import Image from "next/image";

export function EsaRenewalImportantCallout() {
  return (
    <section className="w-full bg-[#FAF7F2] py-8 sm:py-12">
      <div className="max-w-[1099px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Frame 1000012004 */}
        <div className="flex flex-col items-center text-center sm:text-left sm:flex-row sm:items-center gap-4 sm:gap-6 rounded-[24px] sm:rounded-l-[10px] sm:rounded-r-[30px] bg-[#FF383C]/10 py-6 sm:py-8 px-6 sm:pl-0 sm:pr-[67px] lg:pr-10 xl:pr-[67px]">
          {/* Rectangle 25: red left accent bar (full height) */}
          <div className="hidden sm:block self-stretch -my-6 sm:-my-8 w-[19px] shrink-0 rounded-l-[10px] bg-[#E42529]" />

          {/* Warning icon (fi_3253080) */}
          <Image
            quality={90}
            src="/esa-renewal/esa-renewal-redalerticon.svg"
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 shrink-0"
          />

          {/* Texts (Frame 1000012015) */}
          <div className="flex flex-1 flex-col justify-center gap-2">
            <div className="flex flex-col gap-1">
              <h3 className="font-heading font-bold text-[20px] leading-7 text-[#CC191D]">
                Important
              </h3>
              <p className="font-sans text-sm font-medium leading-[22px] text-[#5F6B6F]">
                Payment provides access to a professional evaluation only. The licensed mental health professional independently determines whether ESA letters may be issued based on their clinical judgment.
              </p>
            </div>
            <p className="font-sans text-sm font-medium leading-[22px] text-[#5F6B6F]">
              Disclaimer: We authorize your payment first, but only charge it after your evaluation is completed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
