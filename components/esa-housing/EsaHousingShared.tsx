import React from "react";

/*
 * Shared type styles. From `lg` up, sizes scale with the viewport (vw) and cap at their 1440px
 * design values, so image-beside-text sections stay proportional to the 1440px design.
 */
export const SECTION_H2 =
  "font-heading text-3xl sm:text-4xl xl:text-[44px] font-bold text-[#2E5A66] leading-[1.2] xl:leading-[54px] tracking-[-0.00015em]";
export const SECTION_LEAD = "font-sans text-base sm:text-[18px] text-[#5F6B6F] font-semibold leading-[30px]";

export const SCALED_H2 =
  "font-heading text-3xl sm:text-4xl lg:text-[length:min(3.06vw,44px)] font-bold text-[#2E5A66] leading-[1.2] lg:leading-[min(3.75vw,54px)] tracking-[-0.00015em]";
export const SCALED_P =
  "font-sans text-base sm:text-[18px] lg:text-[length:min(1.25vw,18px)] text-[#5F6B6F] font-semibold leading-[1.67]";

export function SectionHeader({
  title,
  children,
  titleMax = "max-w-[912px]",
  leadMax = "max-w-[1002px]",
}: {
  title: string;
  children?: React.ReactNode;
  titleMax?: string;
  leadMax?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h2 className={`${SECTION_H2} ${titleMax}`}>{title}</h2>
      {children && <p className={`${SECTION_LEAD} ${leadMax}`}>{children}</p>}
    </div>
  );
}

export function CheckCircle({ color = "#1D6E72" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-[5px] shrink-0" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill={color} />
      <path d="M5.7 10.2l3 3 5.6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
