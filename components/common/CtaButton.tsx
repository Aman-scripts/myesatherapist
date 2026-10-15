import React from "react";
import Link from "next/link";
import Image from "next/image";

export function SendIcon({ className = "w-[22px] h-[22px] xl:w-[24px] xl:h-[24px]" }: { className?: string }) {
  return (
    <Image
      src="/common/send-icon.svg"
      alt=""
      width={24}
      height={24}
      unoptimized
      className={`object-contain ${className}`}
    />
  );
}

export interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  target?: string;
  rel?: string;
  children?: React.ReactNode;
  className?: string;
  iconClassName?: string;
  showIcon?: boolean;
  variant?: "primary" | "secondary" | "accent";
}

/**
 * Common Figma Frame 1000011890 CTA Pill Button
 * - Dimensions: w-[179px] default (or custom w-[...]), h-[48px]
 * - Background: var(--color-gradient) (primary) / var(--color-background) (secondary) / var(--color-accent) (accent)
 * - Radius: 30px
 * - Shadow: 0px 2px 4px rgba(0, 0, 0, 0.15)
 * - Padding: pl-6 xl:pl-[30px] pr-[8px] xl:pr-[8px] (balanced right padding around circular badge per Screenshot 3)
 * - Typography: Manrope, 600, 16px (mobile) / 18px (desktop body-large) - NEVER 14px
 * - Circular badge: 38px-40px, bg-background, shadow 0px 3px 6px rgba(0, 0, 0, 0.15)
 * - Vector: Paper airplane send icon with gold accent shadow, prominent 22px-24px
 */
export function CtaButton({
  href,
  target,
  rel,
  children = "Get Started",
  className = "",
  iconClassName = "",
  showIcon,
  variant = "primary",
  onClick,
  disabled,
  type = "button",
  ...rest
}: CtaButtonProps) {
  const isSecondary = variant === "secondary";
  const isAccent = variant === "accent";

  // Icon defaults to true for primary/accent, false for secondary (unless explicitly overridden)
  const shouldShowIcon = showIcon !== undefined ? showIcon : !isSecondary;

  let bgClass = "color-gradient";
  let textColor = "text-white";

  if (isSecondary) {
    bgClass = "bg-background hover:bg-[#F5EFE6]";
    textColor = "text-color-gradient";
  } else if (isAccent) {
    bgClass = "bg-accent hover:bg-[#dba81f]";
    textColor = "text-primary";
  }

  const hasExplicitWidth = /\bw-\[\S+\]|\bw-full|\bw-auto|\bw-fit\b/.test(className);
  const defaultWidthClass = hasExplicitWidth ? "" : (isSecondary ? "w-auto" : "w-[179px] xl:w-[182px]");

  // In Figma and Screenshot 3: generous left padding and balanced right padding (8px) around the circular badge
  const paddingClass = isSecondary
    ? "px-6 xl:px-8"
    : (shouldShowIcon ? "pl-6 xl:pl-[30px] pr-[8px] xl:pr-[8px]" : "px-6 xl:px-8");

  const baseClasses = `inline-flex items-center ${isSecondary ? "justify-center" : "justify-between"} h-[48px] rounded-[30px] ${paddingClass} gap-2.5 ${bgClass} ${textColor} font-sans font-semibold text-[16px] xl:text-[18px] leading-[26px] xl:leading-[28px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 active:scale-[0.99] transition-all cursor-pointer select-none shrink-0 ${defaultWidthClass} ${className}`;

  const content = (
    <>
      <span className="truncate text-inherit">{children}</span>
      {shouldShowIcon && (
        <span className="w-[38px] h-[38px] xl:w-[40px] xl:h-[40px] rounded-full bg-background shadow-[0px_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
          <SendIcon className={`w-[22px] h-[22px] xl:w-[24px] xl:h-[24px] ${iconClassName}`} />
        </span>
      )}
    </>
  );

  if (href) {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link
          href={href}
          target={target}
          rel={rel}
          className={baseClasses}
          onClick={onClick as any}
        >
          {content}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        className={baseClasses}
        onClick={onClick as any}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {content}
    </button>
  );
}
