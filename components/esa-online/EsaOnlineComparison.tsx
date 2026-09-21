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
        <div className="hidden lg:block relative w-full max-w-[1062px] rounded-[20px] bg-[#FAF7F2] shadow-[0px_2px_5px_rgba(0,0,0,0.15)]">
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

        {/* Mobile & tablet (< 1024px): raised center card */}
        <div className="block lg:hidden w-full max-w-[361px] sm:max-w-[600px] md:max-w-[680px] relative mx-auto pt-6">
          <div className="w-full bg-[#FAF7F2] rounded-[20px] shadow-[0px_2px_5.2px_rgba(0,0,0,0.15)] relative z-0 pb-4">
            <div className="flex items-center justify-between px-2 sm:px-6 h-[64px] sm:h-[72px]">
              <div className="w-[88px] sm:w-[150px] md:w-[170px] text-center">
                <h3 className="font-heading text-[15px] sm:text-lg md:text-xl font-bold text-[#2E5A66]">Features</h3>
              </div>
              <div className="w-[130px] sm:w-[210px] md:w-[230px] shrink-0" />
              <div className="w-[96px] sm:w-[150px] md:w-[170px] text-center">
                <h3 className="font-heading text-[15px] sm:text-lg md:text-xl font-bold text-[#2E5A66]">Others</h3>
              </div>
            </div>
            <div className="divide-y divide-[#C8B9A7]/40">
              {ROWS.map((row) => (
                <div key={row.feature} className="flex items-center justify-between h-[84px] sm:h-[92px] px-2 sm:px-6">
                  <div className="w-[88px] sm:w-[150px] md:w-[170px] flex items-center justify-center text-center">
                    <span className="font-heading font-bold text-[13.5px] sm:text-[15px] md:text-[16px] text-[#2E5A66] leading-tight">{row.feature}</span>
                  </div>
                  <div className="w-[130px] sm:w-[210px] md:w-[230px] shrink-0" />
                  <div className="w-[96px] sm:w-[150px] md:w-[170px] flex flex-col items-center justify-center text-center px-1 gap-1.5">
                    <Image src={`${P}-${row.other.type}-icon.svg`} alt="" width={22} height={22} className="h-[20px] w-[20px] sm:h-[22px] sm:w-[22px]" />
                    <span className="italic text-[11px] sm:text-[13px] text-[#5F6B6F] leading-[15px]" style={LATO}>{row.other.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-[-14px] w-[134px] sm:w-[214px] md:w-[234px] rounded-[20px] shadow-[3px_3px_47.6px_1px_rgba(0,0,0,0.1)] z-10 overflow-hidden"
            style={{ backgroundImage: TEAL_GRADIENT }}
          >
            <div className="h-[68px] sm:h-[76px] rounded-b-[20px] flex items-center justify-center px-2 text-center bg-[#1A3D4F]/35">
              <h3 className="font-heading font-bold text-[14.5px] sm:text-[17px] text-[#FAF7F2] leading-[17px] tracking-tight">
                MY ESA
                <br />
                THERAPIST
              </h3>
            </div>
            <div className="divide-y divide-[#C8B9A7]/25">
              {ROWS.map((row) => (
                <div key={row.feature} className="flex items-center justify-center h-[84px] sm:h-[92px]">
                  <GreenCheck />
                </div>
              ))}
            </div>
          </div>
        </div>

        <CtaButton href="/pricing/">Get Started</CtaButton>
      </div>
    </section>
  );
}
