"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { STATES_DATA } from "@/data/statesData";

const POPULAR_STATES = Object.values(STATES_DATA);
const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";
const TRUSTPILOT_GREEN = "#00B67A";

const statsData = [
  { value: "51,488+", label: "ESA Evaluations" },
  { value: "5+", label: "Years Serving" },
  { value: "4.9", label: "Verified Reviews" },
];

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
        <div key={i} className="w-5 h-5 xl:w-6 xl:h-6 flex items-center justify-center shrink-0 rounded-[2px]" style={{ backgroundColor: TRUSTPILOT_GREEN }}>
          <StarMark className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-white" />
        </div>
      ))}
      <div className="relative w-5 h-5 xl:w-6 xl:h-6 shrink-0 overflow-hidden rounded-[2px]" style={{ backgroundColor: "#CCCCCC" }}>
        <div className="absolute inset-y-0 left-0 w-1/2" style={{ backgroundColor: TRUSTPILOT_GREEN }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <StarMark className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-white" />
        </div>
      </div>
    </div>
  );
}

export function PsdHeroSection() {
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
    <section className="relative z-30 w-full bg-[#FAF7F2]">
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE PSD HERO SECTION (sm:hidden / < 640px)     */}
      {/* Matches Screenshot 2 (Figma iPhone 13 & 14)          */}
      {/* ---------------------------------------------------- */}
      <div className="sm:hidden relative w-full aspect-[390/740] min-h-[580px] max-h-[760px] overflow-hidden">
        <Image
          src="/psd-letter/psd-herosection-mobile.png"
          alt="Psychiatric Service Dog Letter Assistance"
          fill
          priority
          className="object-cover object-bottom"
          sizes="100vw"
        />

        {/* Content Container at Top */}
        <div className="absolute inset-x-0 top-0 px-3 pt-6 text-center flex flex-col items-center z-10">
          {/* Stat Pills at top (Mobile) */}
          <div className="flex items-center justify-center gap-2 w-full max-w-[340px] mx-auto mb-3.5">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="flex-1 flex flex-col items-center justify-center bg-[#FAF7F2] py-1.5 px-1 rounded-[24px] text-center shadow-xs"
              >
                <span
                  className="font-heading text-[16px] font-bold leading-none bg-clip-text text-transparent"
                  style={{ backgroundImage: TEAL_GRADIENT }}
                >
                  {stat.value}
                </span>
                <span className="text-[9.5px] font-semibold text-[#5F6B6F] mt-0.5 whitespace-nowrap">{stat.label}</span>
              </div>
            ))}
          </div>

          <h1 className="font-heading text-[24px] font-bold tracking-[-0.011em] leading-[1.2] max-w-xs mx-auto">
            <span className="text-[#2E5A66]">
              Psychiatric Service
            </span>
            <br />
            <span className="text-[#2E5A66]">Dog </span>
            <span className="text-[#5F6B6F]">Letter Assistance</span>
          </h1>

          <p className="text-[12.5px] leading-relaxed text-[#5F6B6F] font-semibold max-w-[290px] mx-auto mt-2.5 font-sans">
            Connect with state-licensed mental health professionals to discuss your needs and explore if a psychiatric service dog letter.
          </p>

          {/* Stacked Action Buttons */}
          <div className="flex flex-col items-center gap-2.5 mt-4 w-full max-w-[250px]">
            {/* State Dropdown */}
            <div className="relative w-full z-30" ref={dropdownRefMobile}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between px-5 h-[46px] w-full rounded-[30px] bg-[#FAF7F2] font-semibold text-sm shadow-sm hover:bg-white transition-colors border border-[#EAE5DC]"
              >
                <span className="flex items-center gap-2">
                  <Image
                    src="/home/hero-section-map.svg"
                    alt=""
                    width={16}
                    height={21}
                    unoptimized
                    className="shrink-0 object-contain w-[14px] h-[18px]"
                  />
                  <span className="bg-clip-text text-transparent truncate max-w-[140px]" style={{ backgroundImage: TEAL_GRADIENT }}>
                    {selectedState ? STATES_DATA[selectedState]?.name || "Start your State" : "Start your State"}
                  </span>
                </span>
                <ChevronDown className={`w-4 h-4 text-primary shrink-0 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
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

            {/* Get Started CTA Button */}
            <a
              href="#pricing"
              className="flex items-center justify-between pl-6 pr-1.5 h-[46px] w-full rounded-[30px] text-white font-semibold text-sm transition-opacity hover:opacity-90 shadow-sm"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              <span>Get Started</span>
              <span className="w-[34px] h-[34px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image src="/common/send-icon.svg" alt="" width={17} height={19} className="w-[17px] h-[19px]" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET PSD HERO SECTION (sm: to lg: / 640-1023px) */}
      {/* Matches Screenshot 2                                 */}
      {/* ---------------------------------------------------- */}
      <div className="hidden sm:block lg:hidden relative w-full aspect-[834/1190] min-h-[880px]">
        <Image
          src="/psd-letter/psd-hero-section-tablet.png"
          alt="Psychiatric Service Dog Letter Assistance"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />

        <div className="absolute inset-x-0 top-0 px-6 pt-10 text-center flex flex-col items-center z-10">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center bg-[#FAF7F2] px-4 py-2 rounded-[30px] text-center min-w-[120px] shadow-xs"
              >
                <span
                  className="font-heading text-xl font-bold leading-none bg-clip-text text-transparent"
                  style={{ backgroundImage: TEAL_GRADIENT }}
                >
                  {stat.value}
                </span>
                <span className="text-[11px] font-semibold text-[#5F6B6F] mt-1 whitespace-nowrap">{stat.label}</span>
              </div>
            ))}
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-[-0.011em] mt-6 leading-tight max-w-xl mx-auto">
            <span className="text-[#2E5A66]">
              Psychiatric Service
            </span>
            <br />
            <span className="text-[#2E5A66]">Dog </span>
            <span className="text-[#5F6B6F]">Letter Assistance</span>
          </h1>

          <p className="text-sm sm:text-base leading-relaxed text-[#5F6B6F] font-semibold tracking-normal align-middle max-w-md mx-auto mt-4 font-sans">
            Connect with state-licensed mental health professionals to discuss your needs and explore if a psychiatric service dog letter.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap mt-6">
            {/* State Dropdown */}
            <div className="relative z-30" ref={dropdownRefTablet}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2.5 px-6 py-3 rounded-[30px] bg-[#FAF7F2] font-semibold text-base hover:bg-white transition-colors min-h-[48px] shadow-sm border border-[#EAE5DC]"
              >
                <Image
                  src="/home/hero-section-map.svg"
                  alt=""
                  width={16}
                  height={21}
                  unoptimized
                  className="shrink-0 object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                  {selectedState ? STATES_DATA[selectedState]?.name || "Start your State" : "Start your State"}
                </span>
                <ChevronDown className={`w-4 h-4 text-primary shrink-0 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
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

            <a
              href="#pricing"
              className="flex items-center gap-3 pl-6 pr-2 py-2 rounded-[30px] text-white font-semibold text-base transition-opacity hover:opacity-90 min-h-[48px] shadow-sm"
              style={{ backgroundImage: TEAL_GRADIENT }}
            >
              Get Started
              <span className="w-[38px] h-[38px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                <Image src="/common/send-icon.svg" alt="" width={20} height={22} className="w-[20px] h-[22px]" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. DESKTOP PSD HERO SECTION (lg: / 1024px and up)     */}
      {/* Matches Screenshot 1                                 */}
      {/* ---------------------------------------------------- */}
      <div className="hidden lg:block relative w-full aspect-[1440/814] min-h-[580px] xl:min-h-0">
        <Image
          src="/psd-letter/psd-herosection-new.png"
          alt="Psychiatric Service Dog Letter Assistance"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0">
          <div className="absolute left-[4%] xl:left-[5.69%] top-[6%] xl:top-[12.37%] w-[42%] xl:w-[47.05%]">
            <div className="flex items-center gap-[0.83%] flex-wrap">
              {statsData.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center bg-[#FAF7F2] py-1.5 xl:py-2 rounded-[30px] text-center w-[31%] aspect-[163/53] min-w-[95px] xl:min-w-[110px]"
                >
                  <span
                    className="font-heading text-lg lg:text-xl xl:text-2xl font-bold leading-none bg-clip-text text-transparent"
                    style={{ backgroundImage: TEAL_GRADIENT }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[10px] xl:text-xs font-semibold text-[#5F6B6F] mt-0.5 xl:mt-1 whitespace-nowrap">{stat.label}</span>
                </div>
              ))}
            </div>

            <h1 className="font-heading text-[32px] lg:text-[40px] xl:text-[56px] font-bold tracking-[-0.0002em] leading-[1.14] mt-4 xl:mt-6">
              <span className="text-[#2E5A66]">Psychiatric Service</span>
              <br />
              <span className="text-[#2E5A66]">Dog </span>
              <span className="text-[#5F6B6F]">Letter Assistance</span>
            </h1>

            <p className="text-[13.5px] lg:text-[15px] xl:text-[18px] leading-[1.55] xl:leading-[30px] text-[#5F6B6F] font-semibold tracking-normal align-middle max-w-none mt-3 xl:mt-4 font-sans">
              Connect with state-licensed mental health professionals to discuss your needs and explore if a psychiatric service dog letter.
            </p>

            <div className="flex items-center gap-2.5 xl:gap-3 flex-wrap mt-4 xl:mt-6">
              {/* State Dropdown */}
              <div className="relative z-30" ref={dropdownRefDesktop}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 xl:gap-2.5 px-4 xl:px-[29px] py-2.5 xl:py-3 rounded-[30px] bg-[#FAF7F2] font-semibold text-[14.5px] xl:text-[18px] hover:bg-white transition-colors h-[46px] xl:h-[54px] shrink-0 border border-[#EAE5DC] cursor-pointer"
                >
                  <Image
                    src="/home/hero-section-map.svg"
                    alt=""
                    width={16}
                    height={21}
                    unoptimized
                    className="shrink-0 object-contain"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <span className="bg-clip-text text-transparent" style={{ backgroundImage: TEAL_GRADIENT }}>
                    {selectedState ? STATES_DATA[selectedState]?.name || "Start your State" : "Start your State"}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-primary shrink-0 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
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

              <a
                href="#pricing"
                className="flex items-center gap-2.5 xl:gap-3 pl-4 lg:pl-5 xl:pl-6 pr-1.5 lg:pr-2 py-1.5 lg:py-2 rounded-[30px] text-white font-semibold text-[14.5px] xl:text-[16px] transition-opacity hover:opacity-90 h-[46px] xl:h-[48px] shrink-0"
                style={{ backgroundImage: TEAL_GRADIENT }}
              >
                Get Started
                <span className="w-[36px] h-[36px] xl:w-[42px] xl:h-[42px] rounded-full bg-[#FAF7F2] shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                  <Image src="/common/send-icon.svg" alt="" width={22} height={24} className="w-[19px] h-[21px] xl:w-[22px] xl:h-[24px]" />
                </span>
              </a>
            </div>

            <div className="flex flex-col items-center gap-[6px] xl:gap-[8px] bg-white/55 backdrop-blur-sm rounded-[20px] w-[210px] xl:w-[230px] px-3.5 xl:px-[18px] py-2 xl:pt-[11px] xl:pb-[9px] mt-4 xl:mt-[30px]">
              <div className="flex items-center gap-[6px]">
                <StarMark className="w-[18px] h-[17px] xl:w-[20px] xl:h-[19px]" style={{ color: TRUSTPILOT_GREEN }} />
                <span className="text-[14px] xl:text-[16px] text-[#5F6B6F] font-[family-name:var(--font-lato)]">Trustpilot</span>
              </div>
              <TrustpilotStars />
              <div className="flex items-center gap-[8px] xl:gap-[10px] text-[11px] xl:text-xs text-[#5F6B6F] font-[family-name:var(--font-lato)] whitespace-nowrap">
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
