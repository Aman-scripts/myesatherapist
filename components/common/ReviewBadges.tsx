import React from "react";

const STAR_POLYGON = "12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26";

function StarIcon({ className = "w-4 h-4 text-white" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
      <polygon points={STAR_POLYGON} />
    </svg>
  );
}

export function ReviewBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-stretch gap-2 sm:gap-3 xl:gap-4 w-full max-w-[470px] ${className}`}>

      <a
        href="https://www.trustpilot.com/review/myesatherapist.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Trustpilot Trustscore 4.0 (opens in a new tab)"
        className="badge-hover box-border flex flex-col justify-center items-center py-2 sm:py-2.5 xl:py-3 px-1.5 sm:px-4 xl:px-6 w-[118px] sm:w-[195px] xl:w-[201px] min-h-[88px] sm:h-[102px] xl:h-[105px] rounded-[16px] sm:rounded-[20px] bg-white/55 border border-white/20 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-[11.7px] cursor-pointer shrink-0"
      >
        <div className="flex items-center gap-1.5 mb-1.5 xl:mb-2">
          <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#00B67A] fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <polygon points={STAR_POLYGON} />
          </svg>
          <span className="body-small text-body-text whitespace-nowrap sm:hidden">Trustpilot</span>
          <span className="body-text text-body-text hidden sm:inline">Trustpilot</span>
        </div>

        <div className="flex items-center gap-1 sm:gap-1.5 xl:gap-2 mb-1 xl:mb-1.5" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-3.5 h-3.5 sm:w-[22px] sm:h-[22px] xl:w-[24px] xl:h-[24px] bg-[#00B67A] flex items-center justify-center rounded-[2px]"
            >
              <StarIcon className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 xl:w-4 xl:h-4 text-white" />
            </div>
          ))}
          <div className="w-3.5 h-3.5 sm:w-[22px] sm:h-[22px] xl:w-[24px] xl:h-[24px] bg-[#CCCCCC] flex items-center justify-center rounded-[2px]">
            <StarIcon className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 xl:w-4 xl:h-4 text-white" />
          </div>
        </div>

        <span className="body-small text-body-text text-center">
          Trustscore 4.0
        </span>
      </a>

      <a
        href="https://www.consumeraffairs.com/pets/my-esa-therapist.html"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ConsumerAffairs Reviews 4.9 (opens in a new tab)"
        className="badge-hover box-border flex flex-col justify-center items-center py-2 sm:py-2.5 xl:py-3 px-2 sm:px-4 xl:px-6 min-w-0 flex-1 sm:flex-none sm:w-[235px] xl:w-[253px] min-h-[88px] sm:h-[102px] xl:h-[105px] rounded-[16px] sm:rounded-[20px] bg-white/55 border border-white/20 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-[11.7px] cursor-pointer"
      >
        <div className="flex items-center gap-1.5 mb-1.5 xl:mb-2">
          <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#095691] fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <polygon points={STAR_POLYGON} />
          </svg>
          <span className="body-small text-body-text whitespace-nowrap sm:hidden">ConsumerAffairs</span>
          <span className="body-text text-body-text whitespace-nowrap hidden sm:inline">ConsumerAffairs</span>
        </div>

        <div className="flex items-center gap-1 sm:gap-1.5 xl:gap-2 mb-1 xl:mb-1.5" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-3.5 h-3.5 sm:w-[22px] sm:h-[22px] xl:w-[24px] xl:h-[24px] bg-[#095691] flex items-center justify-center rounded-[2px]"
            >
              <StarIcon className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 xl:w-4 xl:h-4 text-white" />
            </div>
          ))}
          <div className="w-3.5 h-3.5 sm:w-[22px] sm:h-[22px] xl:w-[24px] xl:h-[24px] bg-[#095691] flex items-center justify-center rounded-[2px]">
            <StarIcon className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 xl:w-4 xl:h-4 text-white" />
          </div>
        </div>

        <span className="body-small text-body-text text-center">
          Reviews 4.9
        </span>
      </a>

    </div>
  );
}

