"use client";

import React from "react";
import Image from "next/image";
import { MapPin, ChevronDown } from "lucide-react";

// Trustpilot green (brand-locked, not part of the site palette)
const TRUSTPILOT_GREEN = "#00B67A";

// Figma: linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)
const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

// Trustpilot star mark (5-point star), used both standalone and inside the rating squares
function StarMark({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

// Figma: 4 full green squares (24x24) + 1 half-filled square (12px green / 12px gray), no corner radius
function TrustpilotStars() {
  return (
    <div className="flex gap-2">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="w-6 h-6 flex items-center justify-center shrink-0" style={{ backgroundColor: TRUSTPILOT_GREEN }}>
          <StarMark className="w-4 h-4 text-white" />
        </div>
      ))}
      <div className="relative w-6 h-6 shrink-0 overflow-hidden" style={{ backgroundColor: "#CCCCCC" }}>
        <div className="absolute inset-y-0 left-0 w-1/2" style={{ backgroundColor: TRUSTPILOT_GREEN }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <StarMark className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-warm-bg">
      {/* Figma source photo is 1441x744 (ratio ~1.937) with the heart/paw decorations baked in */}
      <div className="relative w-full aspect-[3/4] sm:aspect-[1441/744] min-h-[620px] sm:min-h-0">
        <Image
          src="/hero-section.png"
          alt="Woman embracing her emotional support golden retriever outdoors"
          fill
          priority
          className="object-cover object-[68%_center] sm:object-center"
          sizes="100vw"
        />

        {/* Legibility scrim, mobile only — desktop text sits over the image's own open sky/grass area */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBF3DC]/80 via-[#FBF3DC]/25 to-transparent sm:hidden pointer-events-none" />

        {/* Content — positioned at the exact Figma offsets: left 5.69%, top 12.37%, width 47.05% of the photo */}
        <div className="absolute inset-x-0 top-0 px-4 pt-14 sm:px-0 sm:pt-0 sm:inset-0">
          <div className="sm:absolute sm:left-[5.69%] sm:top-[12.37%] sm:w-[47.05%]">
            {/* Stat Pills */}
            <div className="flex items-center gap-2 sm:gap-[0.83%] flex-wrap">
              {[
                { value: "51,488+", label: "ESA Evaluations" },
                { value: "5+", label: "Years Serving" },
                { value: "4.9", label: "Verified Reviews" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center bg-[#FAF7F2] px-4 sm:px-0 py-2 sm:py-0 rounded-[30px] text-center sm:w-[11.31%] sm:aspect-[163/53] sm:min-w-[110px]"
                >
                  <span
                    className="font-heading text-lg sm:text-2xl font-bold leading-none bg-clip-text text-transparent"
                    style={{ backgroundImage: TEAL_GRADIENT }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-[#5F6B6F] mt-1 whitespace-nowrap">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Headline — first two lines teal gradient, third line gray, exactly as in Figma */}
            <h1 className="font-heading text-[30px] leading-[1.15] sm:text-[36px] lg:text-[44px] xl:text-[52px] font-bold tracking-[-0.011em] mt-6">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                Emotional Support
                <br />
                Animal Evaluations
                <br />
              </span>
              <span className="text-[#5F6B6F]">by Licensed Professionals</span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-[16px] leading-[1.35] sm:leading-[1.625] text-[#5F6B6F] font-semibold max-w-md sm:max-w-none mt-4 font-[family-name:var(--font-lato)]">
              Connect with US licensed mental health professionals for ESA evaluation conducted through secure telehealth and aligned with federal housing guidelines.
            </p>

            {/* Action Row */}
            <div className="flex items-center gap-3 flex-wrap mt-6">
              {/* State Dropdown */}
              <button className="flex items-center gap-2.5 px-5 sm:px-[29px] py-3 sm:py-0 rounded-[30px] bg-[#FAF7F2] font-semibold text-sm sm:text-[18px] hover:bg-white transition-colors min-h-[44px] sm:h-[54px]">
                <Image
                  src="/hero-section-map.svg"
                  alt=""
                  width={16}
                  height={21}
                  unoptimized
                  className="shrink-0 object-contain"
                />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                  Start your State
                </span>
                <ChevronDown className="w-4 h-4 text-primary shrink-0" />
              </button>

              {/* Get Started Button */}
              <a
                href="#how-it-works"
                className="flex items-center gap-3 pl-6 pr-2 py-2 rounded-[30px] text-white font-semibold text-sm sm:text-[16px] transition-opacity hover:opacity-90 min-h-[44px] sm:h-[48px]"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                Get Started
                <span className="w-[42px] h-[42px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                  <Image src="/send-icon.svg" alt="" width={18} height={20} />
                </span>
              </a>
            </div>

            {/* Trustpilot Badge — semi-transparent white card (55% opacity) over the warm photo, Figma: 201x105, cr20 */}
            <div className="hidden sm:flex flex-col items-center gap-[8px] bg-white/55 backdrop-blur-sm rounded-[20px] w-[230px] px-[18px] pt-[11px] pb-[9px] mt-[30px]">
              <div className="flex items-center gap-[6px]">
                <StarMark className="w-[20px] h-[19px]" style={{ color: TRUSTPILOT_GREEN }} />
                <span className="text-[16px] text-[#5F6B6F] font-[family-name:var(--font-lato)]">Trustpilot</span>
              </div>
              <TrustpilotStars />
              <div className="flex items-center gap-[10px] text-xs text-[#5F6B6F] font-[family-name:var(--font-lato)] whitespace-nowrap">
                <span className="font-semibold">Trustscore 4.4</span>
                <span>23,900 reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
