"use client";

import React from "react";
import Image from "next/image";

export function BlogGoogleSourceBanner({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full max-w-[951px] bg-white/40 sm:bg-white/20 backdrop-blur-xs rounded-[15px] shadow-[0px_1px_4px_rgba(103,103,103,0.1)] overflow-hidden flex flex-col sm:flex-row items-stretch min-h-[90px] sm:min-h-[100px] mt-6 sm:mt-8 ${className}`}>
      
      {/* Rectangle 25: Left Teal Accent Bar */}
      <div
        className="w-full sm:w-[17px] h-2 sm:h-auto shrink-0 rounded-t-[10px] sm:rounded-t-none sm:rounded-l-[10px]"
        style={{ background: "var(--color-gradient)" }}
      />

      {/* Frame 1261153667: Content Area */}
      <div className="flex-1 p-4 sm:py-3.5 sm:pl-5 sm:pr-6 lg:pr-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        
        {/* Frame 1261153666: Google Logo & Text */}
        <div className="flex items-center gap-3 sm:gap-4 text-center sm:text-left">
          <div className="w-[44px] h-[44px] sm:w-[52px] sm:h-[48px] shrink-0 flex items-center justify-center">
            <svg className="w-9 h-9 sm:w-11 sm:h-11" viewBox="0 0 24 24">
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
          <div className="space-y-0.5 max-w-[366px] lg:max-w-none">
            <h4 className="heading-h4 text-primary">
              See our articles highlighted in Google Search
            </h4>
            <p className="body-text text-body-text lg:whitespace-nowrap">
              Add My ESA Therapist as a source - see results your way.
            </p>
          </div>
        </div>

        {/* Frame 1000011890: CTA Button */}
        <div className="shrink-0">
          <a
            href="https://www.google.com/preferences/source?q=myesatherapist.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between pl-5 pr-1.5 w-auto min-w-[178px] h-[48px] rounded-[30px] text-white body-large shadow-[0px_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 transition-all group gap-2.5"
            style={{ background: "var(--color-gradient)" }}
          >
            <span className="whitespace-nowrap">Add a Source</span>
            <span className="w-[38px] h-[38px] rounded-full bg-background shadow-[0px_3.03px_6.07px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform p-1.5">
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
  );
}
