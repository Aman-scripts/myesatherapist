import React from "react";
import Image from "next/image";
import { CtaButton, LATO, TEAL_GRADIENT } from "./EsaOnlineShared";

const P = "/esa-online/esa-letter-online_howmyesatherapistcompare";

type Other = { type: "warning" | "cross"; text: string };

const ROWS: { feature: string; other: Other }[] = [
  { feature: "Licensed evaluations", other: { type: "warning", text: "Varies" } },
  { feature: "State-specific licensing", other: { type: "warning", text: "Varies" } },
  { feature: "HIPAA-compliant platform", other: { type: "warning", text: "Varies" } },
  { feature: "Phone & video options", other: { type: "warning", text: "Limited" } },
  { feature: "HUD-compliant", other: { type: "warning", text: "Varies" } },
  { feature: "Full refund", other: { type: "warning", text: "Varies" } },
  { feature: "Renewals", other: { type: "cross", text: "Not Available" } },
];

function GreenCheck() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-label="Included">
      <circle cx="11" cy="11" r="10" fill="#0FC10F" />
      <path d="M6.5 11.3l3 3 6-6.3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function EsaOnlineComparison() {
  return (
    <section id="compare" className="w-full bg-white py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1100px] mx-auto px-3 sm:px-6 lg:px-8 flex flex-col items-center gap-10">
        <div className="text-center flex flex-col gap-3 max-w-[944px]">
          <h2
            className="text-2xl sm:text-4xl lg:text-[38px] xl:text-[46px] font-bold text-[#2E5A66] leading-tight lg:leading-[64px]"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            How My ESA Therapist Compare to Other ESA Letter Services
          </h2>
          <p className="text-[#5F6B6F] text-base sm:text-[20px] leading-8 italic" style={LATO}>
            We set the standard for professional care, compliance, and trust.
          </p>
        </div>

        {/* Comparison table */}
        <div className="relative w-full max-w-[1062px] rounded-[20px] bg-[#FAF7F2] shadow-[0px_2px_5px_rgba(0,0,0,0.15)]">
          <div className="grid grid-cols-[1fr_130px_1fr] sm:grid-cols-[1fr_180px_1fr] md:grid-cols-[1fr_260px_1fr] lg:grid-cols-[1fr_297px_1fr]">
            {/* Header row */}
            <div className="flex h-[64px] items-center justify-center text-[#2E5A66] font-bold text-lg sm:text-2xl" style={LATO}>
              FEATURES
            </div>
            <div
              className="-mt-3 flex h-[76px] items-center justify-center rounded-t-[20px] text-center text-[#FAF7F2] font-bold text-sm sm:text-xl md:text-2xl leading-tight px-2 shadow-[0px_4px_12px_rgba(0,0,0,0.2)] relative z-10"
              style={{ backgroundImage: TEAL_GRADIENT, ...LATO }}
            >
              MY ESA THERAPIST
            </div>
            <div className="flex h-[64px] items-center justify-center text-[#2E5A66] font-bold text-lg sm:text-2xl" style={LATO}>
              OTHERS
            </div>

            {ROWS.map((row, idx) => {
              const last = idx === ROWS.length - 1;
              return (
                <React.Fragment key={row.feature}>
                  <div className="flex h-[56px] sm:h-[64px] items-center gap-2 sm:gap-3 border-t border-[#C8B9A7]/50 pl-3 sm:pl-8 pr-1">
                    <span className="hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-[0px_1px_4px_rgba(0,0,0,0.25)]">
                      <Image src={`${P}allicon.svg`} alt="" width={24} height={24} className="h-6 w-6" />
                    </span>
                    <span className="text-[#2E5A66] font-bold text-sm sm:text-xl leading-tight" style={LATO}>
                      {row.feature}
                    </span>
                  </div>
                  <div
                    className={`flex h-[56px] sm:h-[64px] items-center justify-center border-t border-white/15 relative z-10 shadow-[0px_4px_12px_rgba(0,0,0,0.15)] ${
                      last ? "rounded-b-[20px]" : ""
                    }`}
                    style={{ backgroundImage: TEAL_GRADIENT }}
                  >
                    <GreenCheck />
                  </div>
                  <div className="flex h-[56px] sm:h-[64px] items-center justify-center border-t border-[#C8B9A7]/50 px-2">
                    <div className="flex w-[130px] sm:w-[160px] items-center gap-2 sm:gap-3">
                      <Image
                        src={`${P}-${row.other.type}-icon.svg`}
                        alt=""
                        width={22}
                        height={22}
                        className="h-[22px] w-[22px] shrink-0"
                      />
                      <span className="text-[#5F6B6F] italic text-sm sm:text-lg" style={LATO}>
                        {row.other.text}
                      </span>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <CtaButton href="/pricing/">Get Started</CtaButton>
      </div>
    </section>
  );
}
