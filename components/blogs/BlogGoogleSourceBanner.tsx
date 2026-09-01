"use client";

import React from "react";
import Image from "next/image";

export function BlogGoogleSourceBanner() {
  return (
    <section className="w-full bg-[#FAF7F2] pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      {/* Frame 1000012004: Container */}
      <div className="max-w-[1065px] mx-auto bg-white/40 sm:bg-white/20 backdrop-blur-xs rounded-[15px] shadow-[0px_1px_4px_rgba(103,103,103,0.1)] overflow-hidden flex flex-col sm:flex-row items-stretch min-h-[100px]">
        
        {/* Rectangle 25: Left Teal Accent Bar */}
        <div
          className="w-full sm:w-[17px] h-2 sm:h-auto shrink-0 rounded-t-[10px] sm:rounded-t-none sm:rounded-l-[10px]"
          style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
        />

        {/* Frame 1261153667: Content Area */}
        <div className="flex-1 p-5 sm:py-4 sm:pl-6 sm:pr-[67px] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          
          {/* Frame 1261153666: Google Logo & Text */}
          <div className="flex items-center gap-4 sm:gap-[22px] text-center sm:text-left">
            <div className="w-[50px] h-[46px] sm:w-[58px] sm:h-[52px] shrink-0 flex items-center justify-center">
              <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>

            {/* Frame 1000012015 */}
            <div className="space-y-0.5 max-w-[366px]">
              <h4 className="font-sans font-semibold text-sm sm:text-[16px] leading-[26px] text-[#2E5A66]">
                See our articles highlighted in Google Search
              </h4>
              <p className="font-sans font-semibold text-xs sm:text-[14px] leading-[26px] text-[#5F6B6F]">
                Add a supportive pet as a source - see results your way.
              </p>
            </div>
          </div>

          {/* Frame 1000011890: CTA Button */}
          <div className="shrink-0">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between pl-6 pr-1.5 w-[189px] h-[48px] rounded-[30px] text-white font-sans font-semibold text-base shadow-[0px_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 transition-all group"
              style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              <span>Add a Source</span>
              <span className="w-[42px] h-[42px] rounded-full bg-[#FAF7F2] shadow-[0px_3.03px_6.07px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform p-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
