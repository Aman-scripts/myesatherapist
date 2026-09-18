import React from "react";

// Custom Pill Badge with standard styling
export function SectionBadge({ title }: { title: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white border border-[#E4E4E4] shadow-[0px_1px_0px_rgba(64,64,64,0.15)] text-[#5F6B6F] font-lato text-[14px] sm:text-[15px] leading-normal tracking-[-0.017em]">
      <span className="w-1.5 h-1.5 rounded-full bg-[#5F6B6F]/60" />
      <span>{title}</span>
    </div>
  );
}

// Gold-rimmed tag / credential badge (Figma Frame 1000011816 pattern)
export function GoldLipBadge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`inline-block pt-[4px] bg-[#E8B92C] rounded-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-0.5 duration-200 ${className}`}
    >
      <div className="bg-white rounded-[18px] px-3.5 sm:px-4 py-1.5 sm:py-2 text-center text-[#5F6B6F] font-lato text-[12px] leading-tight tracking-[-0.017em] shadow-xs">
        {children}
      </div>
    </div>
  );
}

// Gold-rimmed title + subtitle focus card
export function FocusCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="pt-[5px] bg-[#E8B92C] rounded-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-1 hover:shadow-md duration-200 flex-1 min-w-[200px] max-w-[260px]">
      <div className="bg-white rounded-[18px] py-4 px-5 text-center shadow-xs flex flex-col items-center justify-center min-h-[58px]">
        <h4 className="font-sans font-semibold text-[16px] leading-[24px] text-[#2E5A66]">
          {title}
        </h4>
        <p className="font-sans font-normal text-[12px] leading-[18px] text-[#5F6B6F] tracking-[-0.017em] mt-0.5">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
