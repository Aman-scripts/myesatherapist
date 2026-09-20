import React from "react";
import Image from "next/image";

export const TEAL_GRADIENT = "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)";
export const LATO = { fontFamily: "var(--font-lato), Lato, sans-serif" };

export function CtaButton({
  href = "/pricing/",
  children,
  className = "",
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex h-12 items-center justify-between gap-2 rounded-[30px] pl-[34px] pr-[3px] text-white font-sans font-semibold text-base leading-[26px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 transition-all ${className}`}
      style={{ backgroundImage: TEAL_GRADIENT }}
    >
      <span className="pr-4 whitespace-nowrap">{children}</span>
      <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#FAF7F2] shadow-[0px_3px_6px_rgba(0,0,0,0.15)] transition-transform group-hover:translate-x-0.5">
        <Image src="/common/send-icon.svg" alt="" width={22} height={22} className="h-[22px] w-[22px] object-contain" />
      </span>
    </a>
  );
}

export function GoldCallout({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex w-full overflow-hidden rounded-[10px] rounded-r-[30px] bg-[#E8B92C]/15 ${className}`}>
      <div className="w-[10px] sm:w-[13px] shrink-0 bg-[#E8B92C]" />
      <div className="flex flex-col gap-1 py-4 sm:py-5 px-4 sm:px-6">
        {title && (
          <h4 className="font-heading font-bold text-[18px] sm:text-[20px] leading-7 text-[#2E5A66] uppercase">{title}</h4>
        )}
        <p className="font-sans text-[13px] sm:text-sm font-medium leading-[22px] text-[#5F6B6F]">{children}</p>
      </div>
    </div>
  );
}

/** Card with gold top accent and a floating circular icon badge. */
export function FeatureCard({
  icon,
  title,
  description,
  headingFont = "heading",
  dark = false,
}: {
  icon: string;
  title: string;
  description?: string;
  headingFont?: "heading" | "lato";
  dark?: boolean;
}) {
  return (
    <div className="relative flex w-full flex-col">
      <div className="absolute inset-x-0 top-0 bottom-2 rounded-[20px] bg-[#E8B92C] shadow-[0px_2px_4px_rgba(0,0,0,0.15)]" />
      <div
        className={`relative mt-2 flex flex-1 flex-col items-center justify-center gap-2 rounded-[20px] px-5 pt-[56px] pb-8 text-center shadow-[0px_2px_4px_rgba(0,0,0,0.15)] ${
          dark ? "" : "bg-white"
        }`}
        style={dark ? { backgroundImage: TEAL_GRADIENT } : undefined}
      >
        {headingFont === "heading" ? (
          <h3 className={`font-heading font-bold text-xl xl:text-2xl leading-8 ${dark ? "text-[#FAF7F2]" : "text-[#2E5A66]"}`}>
            {title}
          </h3>
        ) : (
          <h3
            className="font-bold text-xl xl:text-2xl leading-[29px] tracking-[-0.017em] text-transparent bg-clip-text"
            style={{ backgroundImage: TEAL_GRADIENT, ...LATO }}
          >
            {title}
          </h3>
        )}
        {description && (
          <p className={`font-sans text-sm xl:text-base font-semibold leading-[26px] ${dark ? "text-[#FAF7F2]" : "text-[#5F6B6F]"}`}>
            {description}
          </p>
        )}
      </div>
      <div
        className={`absolute left-1/2 -translate-x-1/2 -top-8 z-10 flex h-[74.56px] w-[74.56px] items-center justify-center rounded-full shadow-[0px_1.89px_3.78px_rgba(0,0,0,0.25)] ${
          dark ? "" : "bg-white"
        }`}
        style={dark ? { backgroundImage: TEAL_GRADIENT } : undefined}
      >
        <Image src={icon} alt="" width={32} height={32} className="h-8 w-8 object-contain" />
      </div>
    </div>
  );
}
