import Image from "next/image";
import { CtaButton, LATO, TEAL_GRADIENT } from "./EsaOnlineShared";

const P = "/esa-online/esa-letter-online_howmyesatherapistcompare";

type Other = { type: "warning" | "cross"; text: string };

const ROWS: { feature: string; icon: string; other: Other }[] = [
  { feature: "Licensed Evaluations", icon: "/ESA ICons/Icon-33.svg", other: { type: "warning", text: "Varies" } },
  { feature: "State-Specific Licensing", icon: "/ESA ICons/Icon-13.svg", other: { type: "warning", text: "Varies" } },
  { feature: "HIPAA-Compliant Platform", icon: "/ESA ICons/Glyph-3.svg", other: { type: "warning", text: "Varies" } },
  { feature: "Phone & Video Options", icon: "/ESA ICons/Icon-15.svg", other: { type: "warning", text: "Limited" } },
  { feature: "HUD-Compliant", icon: "/ESA ICons/Icon-25.svg", other: { type: "warning", text: "Varies" } },
  { feature: "Full Refund", icon: "/ESA ICons/Icon-21.svg", other: { type: "warning", text: "Varies" } },
  { feature: "Renewals", icon: "/ESA ICons/Icon-22.svg", other: { type: "cross", text: "Not Available" } },
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
          <h2 className="heading-h2">
            How My ESA Therapist Compare To Other ESA Letter Services
          </h2>
          <p className="body-large">
            We set the standard for professional care, compliance, and trust.
          </p>
        </div>

        {/* Desktop: cream frame with a raised center column */}
        <div className="hidden lg:block relative w-full max-w-[1062px] pt-5 pb-5">
          <div className="w-full rounded-[20px] bg-background shadow-[0px_2px_5px_rgba(0,0,0,0.15)]">
            <div className="grid grid-cols-[1fr_297px_1fr] items-center h-[72px]">
              <h3 className="heading-h3 text-center">FEATURES</h3>
              <div />
              <h3 className="heading-h3 text-center">OTHERS</h3>
            </div>
            <div className="divide-y divide-[#C8B9A7]/60 border-t border-[#C8B9A7]/60 mx-6">
              {ROWS.map((row) => (
                <div key={row.feature} className="grid grid-cols-[1fr_297px_1fr] items-center h-[64px]">
                  <div className="flex items-center gap-3 pl-6 pr-2 min-w-0">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-[0px_1px_4px_rgba(0,0,0,0.25)]">
                      <Image quality={90} src={row.icon} alt="" width={20} height={20} unoptimized className="h-5 w-5 object-contain" />
                    </span>
                    <h4 className="heading-h4 text-primary">
                      {row.feature}
                    </h4>
                  </div>
                  <div />
                  <div className="flex items-center justify-center px-2">
                    <div className="flex w-[170px] items-center gap-3">
                      <Image
                        quality={90}
                        src={`${P}-${row.other.type}-icon.svg`}
                        alt=""
                        width={22}
                        height={22}
                        className="h-[22px] w-[22px] shrink-0"
                      />
                      <span className="text-body-text text-[18px] leading-7" style={LATO}>
                        {row.other.text}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="absolute left-1/2 top-0 bottom-0 z-10 w-[297px] -translate-x-1/2 overflow-hidden rounded-[20px] shadow-[3px_3px_47.6px_1px_rgba(0,0,0,0.12)]"
            style={{ backgroundImage: TEAL_GRADIENT }}
          >
            <div className="flex h-[92px] items-center justify-center bg-[#1A3D4F]/35 pt-5">
              <h3 className="heading-h3 text-background text-center">MY ESA THERAPIST</h3>
            </div>
            <div className="divide-y divide-white/15">
              {ROWS.map((row) => (
                <div key={row.feature} className="flex h-[64px] items-center justify-center">
                  <GreenCheck />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile & tablet (< 1024px): raised center card */}
        <div className="block lg:hidden w-full max-w-[361px] sm:max-w-[600px] md:max-w-[680px] relative mx-auto pt-6">
          <div className="w-full bg-background rounded-[20px] shadow-[0px_2px_5.2px_rgba(0,0,0,0.15)] relative z-0 pb-4">
            <div className="flex items-center justify-between px-2 sm:px-6 h-[64px] sm:h-[72px]">
              <div className="w-[88px] sm:w-[150px] md:w-[170px] text-center">
                <h3 className="font-heading text-[15px] sm:text-lg md:text-xl font-bold text-primary">Features</h3>
              </div>
              <div className="w-[130px] sm:w-[210px] md:w-[230px] shrink-0" />
              <div className="w-[96px] sm:w-[150px] md:w-[170px] text-center">
                <h3 className="font-heading text-[15px] sm:text-lg md:text-xl font-bold text-primary">Others</h3>
              </div>
            </div>
            <div className="divide-y divide-[#C8B9A7]/40">
              {ROWS.map((row) => (
                <div key={row.feature} className="flex items-center justify-between h-[84px] sm:h-[92px] px-2 sm:px-6">
                  <div className="w-[88px] sm:w-[150px] md:w-[170px] flex items-center justify-center text-center">
                    <span className="font-heading font-bold text-[13.5px] sm:text-[15px] md:text-[16px] text-primary leading-tight">{row.feature}</span>
                  </div>
                  <div className="w-[130px] sm:w-[210px] md:w-[230px] shrink-0" />
                  <div className="w-[96px] sm:w-[150px] md:w-[170px] flex flex-col items-center justify-center text-center px-1 gap-1.5">
                    <Image
            quality={90} src={`${P}-${row.other.type}-icon.svg`} alt={row.other.text} width={22} height={22} className="h-[20px] w-[20px] sm:h-[22px] sm:w-[22px]" />
                    <span className="body italic text-center text-body-text" style={LATO}>{row.other.text}</span>
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
              <h3 className="font-heading font-bold text-[14.5px] sm:text-[17px] text-background leading-[17px] tracking-tight">
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

        <div className="flex flex-col items-center gap-3">
          <CtaButton variant="accent">Get Started</CtaButton>
          <p className="body-small text-center">
            If not approved after your evaluation? You get a full refund.
          </p>
        </div>
      </div>
    </section>
  );
}
