import React from "react";

const STAR_POLYGON = "12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26";

function StarIcon({ className = "w-4 h-4 text-white" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
      <polygon points={STAR_POLYGON} />
    </svg>
  );
}

/**
 * Trustpilot + ConsumerAffairs rating cards matching exact Figma design (Frame 1261153791).
 * Total width: 470px, Height: 105px, Gap: 16px.
 * Frosted-glass backdrop, Manrope font, and interactive click-through links.
 */
export function ReviewBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 sm:gap-4 max-w-[470px] ${className}`}>
      
      {/* ─── Trustpilot Card (Frame 1000011803) ─── */}
      <a
        href="https://www.trustpilot.com/review/myesatherapist.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Trustpilot - Trustscore 4.0 (opens in a new tab)"
        className="box-border flex flex-col justify-center items-center py-3 px-4 sm:px-6 w-[190px] sm:w-[201px] h-[105px] rounded-[20px] bg-white/55 border border-white/20 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-[11.7px] transition-transform hover:-translate-y-0.5 hover:shadow-[0px_4px_12px_rgba(0,0,0,0.12)] cursor-pointer"
      >
        {/* Header: Star + Trustpilot */}
        <div className="flex items-center gap-1.5 mb-2">
          <svg className="w-5 h-5 text-[#00B67A] fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <polygon points={STAR_POLYGON} />
          </svg>
          <span className="font-sans font-semibold text-[15px] sm:text-[16px] leading-[26px] text-[#5F6B6F]">
            Trustpilot
          </span>
        </div>

        {/* 5 Stars Grid (4 Green #00B67A, 1 Grey #CCCCCC) */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] bg-[#00B67A] flex items-center justify-center rounded-[2px]"
            >
              <StarIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </div>
          ))}
          {/* 5th Star: Grey */}
          <div className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] bg-[#CCCCCC] flex items-center justify-center rounded-[2px]">
            <StarIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </div>
        </div>

        {/* Score */}
        <span className="font-sans font-normal text-[13px] sm:text-[14px] leading-[26px] text-[#5F6B6F] text-center">
          Trustscore 4.0
        </span>
      </a>

      {/* ─── ConsumerAffairs Card (Frame 1000011802) ─── */}
      <a
        href="https://www.consumeraffairs.com/pets/my-esa-therapist.html"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ConsumerAffair Reviews - Reviews 4.8 (opens in a new tab)"
        className="box-border flex flex-col justify-center items-center py-3 px-4 sm:px-6 w-[220px] sm:w-[253px] h-[105px] rounded-[20px] bg-white/55 border border-white/20 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-[11.7px] transition-transform hover:-translate-y-0.5 hover:shadow-[0px_4px_12px_rgba(0,0,0,0.12)] cursor-pointer"
      >
        {/* Header: Star + ConsumerAffair Reviews */}
        <div className="flex items-center gap-1.5 mb-2">
          <svg className="w-5 h-5 text-[#095691] fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <polygon points={STAR_POLYGON} />
          </svg>
          <span className="font-sans font-semibold text-[15px] sm:text-[16px] leading-[26px] text-[#5F6B6F] whitespace-nowrap">
            ConsumerAffair Reviews
          </span>
        </div>

        {/* 5 Stars Grid (4 Blue #095691, 1 Split 75% Blue/Grey) */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] bg-[#095691] flex items-center justify-center rounded-[2px]"
            >
              <StarIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </div>
          ))}
          {/* 5th Star: 75% filled for 4.8 score (Figma Rectangle 21 18px on 24px) */}
          <div className="relative w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] bg-[#CCCCCC] rounded-[2px] overflow-hidden flex items-center justify-center">
            <div className="absolute inset-y-0 left-0 w-[75%] bg-[#095691]" />
            <StarIcon className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </div>
        </div>

        {/* Score */}
        <span className="font-sans font-normal text-[13px] sm:text-[14px] leading-[26px] text-[#5F6B6F] text-center">
          Reviews 4.8
        </span>
      </a>

    </div>
  );
}

