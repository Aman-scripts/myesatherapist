"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { STATES_DATA } from "@/data/statesData";

const POPULAR_STATES = Object.values(STATES_DATA);
const TRUSTPILOT_GREEN = "#00B67A";
const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";

function StarMark({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function TrustpilotStars() {
  return (
    <div className="flex gap-1.5">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="w-5 h-5 xl:w-6 xl:h-6 flex items-center justify-center shrink-0 rounded-[2px]"
          style={{ backgroundColor: TRUSTPILOT_GREEN }}
        >
          <StarMark className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-white" />
        </div>
      ))}
      <div
        className="relative w-5 h-5 xl:w-6 xl:h-6 shrink-0 overflow-hidden rounded-[2px]"
        style={{ backgroundColor: "#CCCCCC" }}
      >
        <div className="absolute inset-y-0 left-0 w-1/2" style={{ backgroundColor: TRUSTPILOT_GREEN }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <StarMark className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-white" />
        </div>
      </div>
    </div>
  );
}

const statsData = [
  { value: "51,488+", label: "ESA Evaluations" },
  { value: "5+", label: "Years Serving" },
  { value: "4.9", label: "Verified Reviews" },
];

export function FaqHero() {
  const router = useRouter();
  const [selectedState, setSelectedState] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRefMobile = useRef<HTMLDivElement>(null);
  const dropdownRefTablet = useRef<HTMLDivElement>(null);
  const dropdownRefDesktop = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      const isInside =
        (dropdownRefMobile.current && dropdownRefMobile.current.contains(target)) ||
        (dropdownRefTablet.current && dropdownRefTablet.current.contains(target)) ||
        (dropdownRefDesktop.current && dropdownRefDesktop.current.contains(target));

      if (!isInside) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleStateSelect = (slug: string) => {
    setSelectedState(slug);
    setIsDropdownOpen(false);
    router.push(`/${slug}`);
  };

  return (
    <section className="relative z-30 w-full bg-[#FAF7F2] overflow-visible">
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE FAQ HERO SECTION (< 640px)                 */}
      {/* ---------------------------------------------------- */}
      <div className="sm:hidden relative w-full aspect-[390/780] min-h-[660px]">
        <Image
          src="/faq/faq_hero-section_mobile.png"
          alt="ESA Questions? We’re here to Help."
          fill
          priority
          className="object-cover object-bottom"
          sizes="(max-width: 639px) 100vw, 1px"
        />

        {/* Content Container (Frame 1000011884: w 336px, top 70px) */}
        <div className="absolute inset-x-0 top-0 pt-6 px-4 flex flex-col items-center z-10">
          <div className="w-full max-w-[336px] flex flex-col items-center gap-[16px]">
            {/* Stat Pills at top (Mobile Trustbar) */}
            <div className="flex items-center justify-center gap-[8px] w-full max-w-[336px]">
              {statsData.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex-1 h-[44px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col justify-center items-center px-1"
                >
                  <span
                    className="font-heading font-bold text-[15px] leading-tight bg-clip-text text-transparent"
                    style={{ backgroundImage: TEAL_GRADIENT }}
                  >
                    {stat.value}
                  </span>
                  <span className="font-sans font-semibold text-[9.5px] leading-tight text-[#949494] whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Heading (Playfair Display 28px, line-height 36px, color #2E5A66) */}
            <h1 className="w-full max-w-[376px] font-heading font-bold text-[28px] leading-[36px] text-center tracking-[-0.00015em] text-[#2E5A66]">
              ESA Questions? We’re here to Help.
            </h1>

            {/* Subheading (Manrope 14px, line-height 26px, color #5F6B6F) */}
            <p className="w-full max-w-[331px] font-sans font-semibold text-[14px] leading-[26px] text-center text-[#5F6B6F]">
              Have questions about Emotional Support Animals? Find simple, reliable answers to help you understand the ESA process.
            </p>

            {/* Frame 7: Stacked Action Buttons (width 246px, gap 16px) */}
            <div className="flex flex-col items-center justify-center gap-[16px] w-[246px]">
              {/* Frame 2: Start your State (width 246px, height 54px) */}
              <div className="relative w-[246px] z-30" ref={dropdownRefMobile}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-[246px] h-[54px] rounded-[30px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-between px-[20px] cursor-pointer hover:bg-white transition-colors"
                >
                  <div className="flex items-center gap-[8px]">
                    <Image
                      src="/home/hero-section-map.svg"
                      alt=""
                      width={18}
                      height={22}
                      unoptimized
                      className="shrink-0 object-contain w-[16px] h-[20px]"
                    />
                    <span
                      className="font-sans font-semibold text-[16px] leading-[30px] bg-clip-text text-transparent truncate max-w-[140px]"
                      style={{ backgroundImage: TEAL_GRADIENT }}
                    >
                      {selectedState ? STATES_DATA[selectedState]?.name || "Start your State" : "Start your State"}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-[#2E5A66] shrink-0 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {isDropdownOpen && (
                  <div
                    className="absolute left-0 top-full mt-1.5 w-full max-h-[260px] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-white rounded-xl shadow-[0px_10px_25px_rgba(0,0,0,0.18)] border border-[#EAE5DC] z-[100] p-2"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    <div className="py-1">
                      {POPULAR_STATES.map((state) => (
                        <button
                          key={state.slug}
                          type="button"
                          onClick={() => handleStateSelect(state.slug)}
                          className="w-full text-left px-3 py-2 text-xs font-sans font-medium text-neutral-700 hover:bg-[#FAF7F2] hover:text-[#1A3D4F] rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                        >
                          <span>{state.name}</span>
                          <span className="text-[10px] text-neutral-400">{state.abbreviation}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Frame 1000011890: Get Started (width 179px, height 48px) */}
              <a
                href="#faq-list"
                className="w-[179px] h-[48px] rounded-[30px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-between pl-[28px] pr-[3px] text-white hover:opacity-95 transition-opacity"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                <span className="font-sans font-semibold text-[16px] leading-[26px] text-white">
                  Get Started
                </span>
                <span className="w-[42.48px] h-[42.48px] rounded-full bg-[#FAF7F2] shadow-[0px_3.03px_6.07px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                  <Image src="/common/send-icon.svg" alt="" width={18} height={20} className="w-[18px] h-[20px]" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET FAQ HERO SECTION (640px to 1023px)         */}
      {/* Matches Frame 1000011884: w 678px, h 340px, top 149px */}
      {/* ---------------------------------------------------- */}
      <div className="hidden sm:block lg:hidden relative w-full aspect-[834/1200] min-h-[780px]">
        <Image
          src="/faq/faq_hero-section_tablet.png"
          alt="ESA Questions? We’re here to Help."
          fill
          priority
          className="object-cover object-bottom"
          sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 1px"
        />

        {/* Content Container (Frame 1000011884: 678px x 340px, top 100px) */}
        <div className="absolute inset-x-0 top-0 pt-10 px-6 flex flex-col items-center z-10">
          <div className="w-full max-w-[678px] flex flex-col items-center gap-[24px]">
            {/* Frame 1000011901: Stat Pills Row (w 513px, h 53px, gap 12px) */}
            <div className="flex items-center justify-center gap-[12px] w-[513px] h-[53px]">
              {statsData.map((stat, idx) => (
                <div
                  key={idx}
                  className="w-[163px] h-[53px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col justify-center items-center px-[10px]"
                >
                  <span
                    className="font-heading font-bold text-[24px] leading-[32px] bg-clip-text text-transparent"
                    style={{ backgroundImage: TEAL_GRADIENT }}
                  >
                    {stat.value}
                  </span>
                  <span className="font-sans font-semibold text-[12px] leading-tight text-[#949494] whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Heading (Playfair Display 44px, line-height 54px, color #2E5A66) */}
            <h1 className="w-full max-w-[470px] font-heading font-bold text-[40px] sm:text-[44px] leading-[54px] text-center tracking-[-0.00015em] text-[#2E5A66]">
              ESA Questions? We’re here to Help.
            </h1>

            {/* Subheading (Manrope 18px, line-height 30px, color #5F6B6F) */}
            <p className="w-full max-w-[678px] font-sans font-semibold text-[16px] sm:text-[18px] leading-[30px] text-center text-[#5F6B6F]">
              Have questions about Emotional Support Animals? Find simple, reliable answers to help you understand the ESA process.
            </p>

            {/* Frame 7: Action Row (width 450px, height 54px, gap 25px) */}
            <div className="flex items-center justify-center gap-[25px] w-full max-w-[450px] h-[54px]">
              {/* Frame 2: Start your State (width 246px, height 54px) */}
              <div className="relative w-[246px] z-30" ref={dropdownRefTablet}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-[246px] h-[54px] rounded-[30px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-between px-[22px] cursor-pointer hover:bg-white transition-colors"
                >
                  <div className="flex items-center gap-[8px]">
                    <Image
                      src="/home/hero-section-map.svg"
                      alt=""
                      width={18}
                      height={22}
                      unoptimized
                      className="shrink-0 object-contain w-[16px] h-[20px]"
                    />
                    <span
                      className="font-sans font-semibold text-[17px] leading-[30px] bg-clip-text text-transparent truncate max-w-[145px]"
                      style={{ backgroundImage: TEAL_GRADIENT }}
                    >
                      {selectedState ? STATES_DATA[selectedState]?.name || "Start your State" : "Start your State"}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-[#2E5A66] shrink-0 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {isDropdownOpen && (
                  <div
                    className="absolute left-0 top-full mt-2 w-[260px] max-h-[280px] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-white rounded-xl shadow-[0px_10px_25px_rgba(0,0,0,0.18)] border border-[#EAE5DC] z-[100] p-2"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    <div className="py-1">
                      {POPULAR_STATES.map((state) => (
                        <button
                          key={state.slug}
                          type="button"
                          onClick={() => handleStateSelect(state.slug)}
                          className="w-full text-left px-3 py-2 text-xs font-sans font-medium text-neutral-700 hover:bg-[#FAF7F2] hover:text-[#1A3D4F] rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                        >
                          <span>{state.name}</span>
                          <span className="text-xs text-neutral-400">{state.abbreviation}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Frame 1000011890: Get Started (width 179px, height 48px) */}
              <a
                href="#faq-list"
                className="w-[179px] h-[48px] rounded-[30px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-between pl-[28px] pr-[3px] text-white hover:opacity-95 transition-opacity"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                <span className="font-sans font-semibold text-[16px] leading-[26px] text-white">
                  Get Started
                </span>
                <span className="w-[42.48px] h-[42.48px] rounded-full bg-[#FAF7F2] shadow-[0px_3.03px_6.07px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                  <Image src="/common/send-icon.svg" alt="" width={18} height={20} className="w-[18px] h-[20px]" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. DESKTOP FAQ HERO SECTION (>= 1024px)              */}
      {/* Matches Frame 1000011884                             */}
      {/* ---------------------------------------------------- */}
      <div className="hidden lg:block relative w-full aspect-[1440/737] min-h-[640px] xl:min-h-0">
        <Image
          src="/faq/faq_hero-section.png"
          alt="ESA Questions? We're Here to Help"
          fill
          priority
          className="object-cover object-center"
          sizes="(min-width: 1024px) 100vw, 1px"
        />

        {/* Content Container Left-Aligned (Frame 1000011884: left 82px, top 136px) */}
        <div className="absolute left-[5%] xl:left-[82px] top-[10%] xl:top-[120px] max-w-[553px] z-10 flex flex-col items-start gap-[24px]">
          {/* Stat Pills (Frame 1000011901) */}
          <div className="flex items-center gap-3 w-full max-w-[513px]">
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                className="flex-1 h-[53px] bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded-[30px] flex flex-col items-center justify-center px-2 py-1 border border-white/60"
              >
                <span className="font-heading font-bold text-[22px] xl:text-[24px] leading-tight text-[#1A3D4F]">
                  {stat.value}
                </span>
                <span className="font-sans font-semibold text-[11px] xl:text-[12px] text-[#5F6B6F] leading-none mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Heading (Playfair Display 56px, leading 64px) */}
          <h1 className="font-heading font-bold text-[36px] lg:text-[44px] xl:text-[56px] leading-[1.14] xl:leading-[64px] tracking-[-0.0002em] text-[#1A3D4F]">
            ESA Questions?
            <br />
            We’re here to Help.
          </h1>

          {/* Subtitle (Manrope 18px, leading 30px) */}
          <p className="font-sans font-semibold text-[15px] xl:text-[18px] leading-[26px] xl:leading-[30px] text-[#5F6B6F] max-w-[553px]">
            Have questions about Emotional Support Animals? Find simple, reliable answers to help you understand the ESA process.
          </p>

          {/* Action Row: State Selector + Get Started (Frame 7) */}
          <div className="flex items-center gap-4 xl:gap-[25px] flex-wrap">
            {/* Start your State Dropdown (Frame 2) */}
            <div className="relative z-30" ref={dropdownRefDesktop}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="h-[54px] px-6 xl:px-[34px] rounded-full bg-[#FAF7F2] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-between gap-3 border border-[#EAE5DC] hover:bg-white transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/home/hero-section-map.svg"
                    alt=""
                    width={18}
                    height={22}
                    unoptimized
                    className="shrink-0 object-contain w-[16px] h-[20px]"
                  />
                  <span className="font-sans font-semibold text-base xl:text-[18px] text-[#1A3D4F]">
                    {selectedState ? STATES_DATA[selectedState]?.name || "Start your State" : "Start your State"}
                  </span>
                </div>
                <ChevronDown className={`w-4 h-4 text-[#1A3D4F] shrink-0 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute left-0 top-full mt-2 w-[280px] max-h-[340px] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-white rounded-2xl shadow-[0px_12px_32px_rgba(0,0,0,0.18)] border border-[#EAE5DC] z-[100] p-2"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  <div className="py-1">
                    {POPULAR_STATES.map((state) => (
                      <button
                        key={state.slug}
                        type="button"
                        onClick={() => handleStateSelect(state.slug)}
                        className="w-full text-left px-3 py-2 text-sm font-sans font-medium text-neutral-700 hover:bg-[#FAF7F2] hover:text-[#1A3D4F] rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                      >
                        <span>{state.name}</span>
                        <span className="text-xs text-neutral-400 font-mono">{state.abbreviation}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Get Started CTA Button (Frame 1000011890) */}
            <a
              href="#faq-list"
              className="h-[54px] pl-7 pr-1.5 rounded-full shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-between gap-3 text-white font-sans font-semibold text-base hover:opacity-95 transition-opacity"
              style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              <span>Get Started</span>
              <span className="w-[42px] h-[42px] rounded-full bg-[#FAF7F2] shadow-[0px_3.03px_6.07px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image src="/common/send-icon.svg" alt="" width={19} height={21} className="w-[18px] h-[20px]" />
              </span>
            </a>
          </div>

          {/* Trustpilot Glassmorphism Box (Frame 1000011802) */}
          <div
            className="w-[201px] h-[105px] rounded-[20px] p-3 flex flex-col justify-center items-center gap-2 border border-white/40 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] mt-1"
            style={{
              background: "rgba(255, 255, 255, 0.55)",
              backdropFilter: "blur(11.7px)",
              WebkitBackdropFilter: "blur(11.7px)",
            }}
          >
            <div className="flex items-center gap-1.5">
              <StarMark className="w-5 h-5" style={{ color: TRUSTPILOT_GREEN }} />
              <span className="font-lato text-base text-[#5F6B6F]">Trustpilot</span>
            </div>
            <TrustpilotStars />
            <div className="flex items-center gap-2 text-xs font-lato text-[#5F6B6F] whitespace-nowrap">
              <span>Trustscore 4.4</span>
              <span>•</span>
              <span>23,900 reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

