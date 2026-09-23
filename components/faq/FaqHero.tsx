import React from "react";
import { BreakpointImage } from "@/components/common/BreakpointImage";
import { ReviewBadges } from "@/components/common/ReviewBadges";

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
  return (
    <section className="relative z-30 w-full bg-[#FAF7F2] overflow-visible">
      {/* ---------------------------------------------------- */}
      {/* 1. MOBILE FAQ HERO SECTION (< 640px)                 */}
      {/* ---------------------------------------------------- */}
      <div className="sm:hidden relative w-full aspect-[390/780] min-h-[660px]">
        <BreakpointImage
          media="(max-width: 639px)"
            quality={90}
          src="/faq/faq_hero-section_mobile.webp"
          alt="ESA Questions? We’re here to Help."
          fill
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
                  <span className="font-sans font-semibold text-[9.5px] leading-tight text-[#707070] whitespace-nowrap">
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
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET FAQ HERO SECTION (640px to 1023px)         */}
      {/* Matches Frame 1000011884: w 678px, h 340px, top 149px */}
      {/* ---------------------------------------------------- */}
      <div className="hidden sm:block lg:hidden relative w-full aspect-[834/1200] min-h-[780px]">
        <BreakpointImage
          media="(min-width: 640px) and (max-width: 1023px)"
            quality={90}
          src="/faq/faq_hero-section_tablet.webp"
          alt="ESA Questions? We’re here to Help."
          fill
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
                  <span className="font-sans font-semibold text-[12px] leading-tight text-[#707070] whitespace-nowrap">
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
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. DESKTOP FAQ HERO SECTION (>= 1024px)              */}
      {/* Matches Frame 1000011884                             */}
      {/* ---------------------------------------------------- */}
      <div className="hidden lg:block relative w-full aspect-[1440/737] min-h-[640px] xl:min-h-0">
        <BreakpointImage
          media="(min-width: 1024px)"
            quality={90}
          src="/faq/faq_hero-section.webp"
          alt="ESA Questions? We're Here to Help"
          fill
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
          <h1 className="font-heading font-bold text-[36px] lg:text-[44px] xl:text-[56px] leading-[1.14] xl:leading-[64px] tracking-[-0.0002em] text-[#2E5A66]">
            ESA Questions?
            <br />
            We’re here to Help.
          </h1>

          {/* Subtitle (Manrope 18px, leading 30px) */}
          <p className="font-sans font-semibold text-[15px] xl:text-[18px] leading-[26px] xl:leading-[30px] text-[#5F6B6F] max-w-[553px]">
            Have questions about Emotional Support Animals? Find simple, reliable answers to help you understand the ESA process.
          </p>

          {/* Trustpilot Glassmorphism Box (Frame 1000011802) */}
          <div className="mt-1"><ReviewBadges /></div>
        </div>
      </div>
    </section>
  );
}

