"use client";

import React from "react";
import Image from "next/image";

export function WyomingTrustBar() {
  return (
    <section className="w-full bg-[#184F59] py-4 lg:py-5 border-y border-[#184F59]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center divide-x divide-white/10">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center p-2">
            <span className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E8B92C]">
              1,200+
            </span>
            <span className="text-xs sm:text-sm text-white/90 font-medium mt-1 font-sans">
              Wyoming Residents Served
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center p-2">
            <span className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E8B92C]">
              100%
            </span>
            <span className="text-xs sm:text-sm text-white/90 font-medium mt-1 font-sans">
              State-Licensed LMHPs
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center p-2">
            <span className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E8B92C]">
              4.9 / 5
            </span>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-xs sm:text-sm text-white/90 font-medium font-sans">
                Verified Client Ratings
              </span>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-center p-2">
            <span className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E8B92C]">
              FHA
            </span>
            <span className="text-xs sm:text-sm text-white/90 font-medium mt-1 font-sans">
              Protected by FHA &amp; State Laws
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
