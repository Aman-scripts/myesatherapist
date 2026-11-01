import React from "react";
import Link from "next/link";
import Image from "next/image";

export function SendIcon({ className = "w-[22px] h-[22px]" }: { className?: string }) {
  return (
    <Image
      src="/common/send-icon.svg"
      alt="Send"
      width={22}
      height={22}
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
 * Exact Figma Frame 1000011890 CTA Pill Button
 * - Dimensions: width: 192px, height: 54px
 * - Background: linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%) (color-gradient)
 * - Border-radius: 30px
 * - Box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15)
 * - Layout: display flex, pl-[34px] pr-[5px], gap: 8px, items-center, justify-between
 * - Typography: Manrope 600, 18px / 28px (body-large), color: #FFFFFF
 * - Badge (Ellipse 14): 42.48px x 42.48px, background: #FAF7F2, shadow: 0px 3.03px 6.07px rgba(0,0,0,0.15)
 * - Vector (Send Icon): 21.62px x 21.62px
 */
export function CtaButton({
  href,
  target,
  rel,
  children = "Get Started",
  className = "",
  iconClassName = "",
  showIcon,
  variant = "accent",
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

  const hasExplicitWidth = /\bw-\[\S+\]|\bw-full|\bw-auto|\bw-fit\b|\bmin-w-\[\S+\]/.test(className);
  const defaultWidthClass = hasExplicitWidth ? "" : (isSecondary ? "w-auto" : "w-auto min-w-[192px]");

  // In Figma Frame 1000011890: padding with 8px gap and 42.5px badge inside button
  const paddingClass = isSecondary
    ? "px-6 xl:px-8"
    : (shouldShowIcon ? "pl-6 sm:pl-[28px] pr-[5px]" : "px-6 xl:px-8");

  const baseClasses = `inline-flex items-center ${shouldShowIcon && !isSecondary ? "justify-between" : "justify-center"} h-[54px] rounded-[30px] ${paddingClass} gap-2.5 sm:gap-3 ${bgClass} ${textColor} button-text text-[18.7px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 active:scale-[0.99] transition-all cursor-pointer select-none shrink-0 ${defaultWidthClass} ${className}`;

  const content = (
    <>
      <span className="whitespace-nowrap text-inherit">{children}</span>
      {shouldShowIcon && (
        <span className="w-[42.5px] h-[42.5px] rounded-full bg-background shadow-[0px_3.03px_6.07px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
          <SendIcon className={`w-[22px] h-[22px] ${iconClassName}`} />
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
          data-event="cta_click"
          data-event-label={typeof children === "string" ? children : undefined}
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
        data-event="cta_click"
        data-event-label={typeof children === "string" ? children : undefined}
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
      data-event="cta_click"
      data-event-label={typeof children === "string" ? children : undefined}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {content}
    </button>
  );
}
