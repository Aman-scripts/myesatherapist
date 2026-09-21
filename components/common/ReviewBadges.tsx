import React from "react";

const LATO = { fontFamily: "var(--font-lato), Lato, sans-serif" };
const STAR_PATH = "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";

function Star({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor" aria-hidden="true">
      <path d={STAR_PATH} />
    </svg>
  );
}

/** Five rating squares: four full, the last one half filled (rating 4.4). */
function StarRow({ color }: { color: string }) {
  return (
    <div className="flex items-center gap-1 min-[420px]:gap-1.5 sm:gap-2" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center" style={{ backgroundColor: color }}>
          <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
        </div>
      ))}
      <div className="relative flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center bg-[#CCCCCC]">
        <div className="absolute inset-y-0 left-0 w-1/2" style={{ backgroundColor: color }} />
        <Star className="relative h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
      </div>
    </div>
  );
}

function ReviewCard({
  color,
  label,
  score,
  href,
  widthClass,
}: {
  color: string;
  label: string;
  score: string;
  href: string;
  widthClass: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} - ${score} (opens in a new tab)`}
      className={`flex min-w-0 flex-1 flex-col items-center justify-center gap-2.5 rounded-[20px] border border-white/10 bg-white/55 px-1.5 pb-3 pt-3.5 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] backdrop-blur-[11.7px] transition-transform hover:-translate-y-0.5 sm:flex-none sm:px-6 sm:h-[105px] ${widthClass}`}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-1.5">
          <Star className="h-4 w-4 min-[420px]:h-[18px] min-[420px]:w-[18px] sm:h-[22px] sm:w-[22px] shrink-0" style={{ color }} />
          <span
            className="text-[11.5px] min-[420px]:text-[13px] sm:text-[16px] leading-5 tracking-[-0.017em] text-[#5F6B6F] whitespace-nowrap"
            style={LATO}
          >
            {label}
          </span>
        </div>
        <StarRow color={color} />
        <span className="text-[11px] sm:text-[12px] leading-5 tracking-[-0.017em] text-[#5F6B6F]" style={LATO}>
          {score}
        </span>
      </div>
    </a>
  );
}

/**
 * Trustpilot + ConsumerAffairs rating cards shown under the hero buttons on every page.
 * Frosted-glass cards, 4.5 of 5 stars.
 */
export function ReviewBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex w-full max-w-[438px] items-stretch gap-3 sm:gap-4 ${className}`}>
      <ReviewCard color="#00B67A" label="Trustpilot" score="Trustscore 4.4" href="https://www.trustpilot.com/review/myesatherapist.com" widthClass="sm:w-[201px]" />
      <ReviewCard color="#095691" label="ConsumerAffair Reviews" score="Reviews 4.4" href="https://www.consumeraffairs.com/pets/my-esa-therapist.html" widthClass="sm:w-[221px]" />
    </div>
  );
}
