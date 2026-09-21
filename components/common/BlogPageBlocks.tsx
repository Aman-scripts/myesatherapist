import React from "react";
import { LATO } from "@/components/esa-online/EsaOnlineShared";

/** Centered section heading: 44/54 Playfair title with an optional subtitle. */
export function SectionHeader({
  title,
  subtitle,
  subtitleFont = "manrope",
  className = "",
  titleClassName = "",
  subtitleMaxWidth = "max-w-[1002px]",
}: {
  title: string;
  subtitle?: string;
  subtitleFont?: "manrope" | "lato";
  className?: string;
  titleClassName?: string;
  /** Tailwind max-width class for the subtitle. */
  subtitleMaxWidth?: string;
}) {
  return (
    <div className={`flex flex-col items-center gap-2 lg:gap-[0.6vw] xl:gap-2 text-center ${className}`}>
      <h2
        className={`font-heading font-bold text-[#2E5A66] text-[28px] leading-[36px] sm:text-4xl sm:leading-[46px] lg:text-[3.05vw] lg:leading-[3.75vw] xl:text-[44px] xl:leading-[54px] tracking-[-0.00015em] ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`${subtitleFont === "lato" ? "text-[#5F6B6F] text-base leading-7 sm:text-[20px] sm:leading-8 lg:text-[1.4vw] lg:leading-[2.2vw] xl:text-[20px] xl:leading-8 max-w-[1100px]" : "font-sans font-semibold text-[#5F6B6F] text-base leading-7 sm:text-[18px] sm:leading-[30px] lg:text-[1.25vw] lg:leading-[2.1vw] xl:text-[18px] xl:leading-[30px]"} ${subtitleFont === "lato" ? "" : subtitleMaxWidth}`}
          style={subtitleFont === "lato" ? LATO : undefined}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/** Soft gold callout: 19px gold bar on the left, optional heading, then text. */
export function GoldPill({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex w-full max-w-[982px] items-stretch overflow-hidden rounded-[20px] sm:rounded-l-[10px] sm:rounded-r-[30px] bg-[#E8B92C]/10 text-left ${className}`}
    >
      <div className="w-[12px] sm:w-[19px] shrink-0 bg-[#E8B92C] sm:rounded-l-[10px]" />
      <div className="flex min-h-[64px] flex-1 flex-col justify-center gap-1 py-3 pl-4 pr-5 sm:pl-6 lg:pl-[2vw] lg:pr-[3vw] xl:pl-6 xl:pr-[67px]">
        {title && (
          <h4 className="font-heading font-bold text-[18px] leading-7 sm:text-[20px] text-[#2E5A66]">{title}</h4>
        )}
        <p className="font-sans font-semibold text-sm leading-[24px] sm:text-base sm:leading-[26px] lg:text-[1.15vw] lg:leading-[1.9vw] xl:text-base xl:leading-[26px] text-[#5F6B6F]">
          {children}
        </p>
      </div>
    </div>
  );
}

/** White card with a gold top edge and a round icon badge overlapping the top. */
export function IconCard({
  icon,
  title,
  text,
  compact = false,
}: {
  icon: string;
  title: string;
  text: string;
  /** Four-up layout (mistakes) uses tighter type at 1024px. */
  compact?: boolean;
}) {
  return (
    <div className="flex h-full w-full flex-col pt-10">
      <div className="relative flex flex-1 flex-col">
      <div className="absolute inset-x-0 top-0 bottom-1 rounded-[20px] bg-[#E8B92C] shadow-[0px_2px_4px_rgba(0,0,0,0.15)]" />
      <div className="relative mt-2 flex flex-1 flex-col items-center rounded-[20px] bg-white px-6 pb-8 pt-[58px] text-center shadow-[0px_2px_4px_rgba(0,0,0,0.15)] lg:px-[1.3vw] lg:pb-[2vw] lg:pt-[4.4vw] xl:px-3.5 xl:pb-[37px] xl:pt-[62px]">
        <h3
          className={`font-bold leading-[29px] text-[#2E5A66] text-[22px] sm:text-2xl ${
            compact ? "lg:text-[1.75vw] lg:leading-[2.2vw]" : "lg:text-[1.9vw] lg:leading-[2.3vw]"
          } xl:text-[24px] xl:leading-[29px]`}
          style={LATO}
        >
          {title}
        </h3>
        <p
          className={`mt-2 font-sans font-semibold leading-[26px] text-[#5F6B6F] text-base ${
            compact ? "lg:text-[1.1vw] lg:leading-[1.9vw]" : "lg:text-[1.2vw] lg:leading-[2vw]"
          } xl:text-base xl:leading-[26px]`}
        >
          {text}
        </p>
      </div>
      <div className="absolute left-1/2 top-[-37px] z-10 flex h-[74.56px] w-[74.56px] -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-[0px_1.89px_3.78px_rgba(0,0,0,0.25)] lg:h-[5.6vw] lg:w-[5.6vw] lg:top-[-2.6vw] xl:h-[74.56px] xl:w-[74.56px] xl:top-[-37px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={icon} alt="" width={32} height={32} className="h-8 w-8 object-contain lg:h-[2.4vw] lg:w-[2.4vw] xl:h-8 xl:w-8" />
      </div>
      </div>
    </div>
  );
}
