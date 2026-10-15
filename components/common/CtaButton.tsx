import React from "react";
import Link from "next/link";
import Image from "next/image";

export function SendIcon({ className = "w-[22px] h-[24px]" }: { className?: string }) {
  return (
    <Image
      src="/common/send-icon.svg"
      alt=""
      width={22}
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
  variant?: "primary" | "accent";
}

/**
 * Common Figma Frame 1000011890 CTA Pill Button
 * - Dimensions: w-[179px] default (or custom w-[...]), h-[48px]
 * - Background: var(--color-gradient)
 * - Radius: 30px
 * - Shadow: 0px 2px 4px rgba(0, 0, 0, 0.15)
 * - Padding: 0px 3px 0px 34px (gap: 8px)
 * - Typography: Manrope, 600, 16px, 26px line-height, #FFFFFF
 * - Circular badge: 42.48px x 42.48px, background, shadow 0px 3.03px 6.07px rgba(0, 0, 0, 0.15)
 * - Vector: Paper airplane send icon in teal gradient with gold accent shadow
 */
export function CtaButton({
  href,
  target,
  rel,
  children = "Get Started",
  className = "",
  iconClassName = "",
  showIcon = true,
  variant = "primary",
  onClick,
  disabled,
  type = "button",
  ...rest
}: CtaButtonProps) {
  const isAccent = variant === "accent";

  const bgClass = isAccent ? "bg-accent" : "color-gradient";
  const textColor = isAccent ? "text-primary" : "text-white";

  const hasExplicitWidth = /\bw-\[\S+\]|\bw-full|\bw-auto|\bw-fit\b/.test(className);
  const defaultWidthClass = hasExplicitWidth ? "" : "w-[179px]";

  const baseClasses = `inline-flex items-center justify-between h-[48px] rounded-[30px] pl-[34px] pr-[3px] gap-2 ${bgClass} ${textColor} body-text shadow-[0px_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 active:scale-[0.99] transition-all cursor-pointer select-none shrink-0 ${defaultWidthClass} ${className}`;

  const content = (
    <>
      <span className="truncate body-text">{children}</span>
      {showIcon && (
        <span className="w-[42.5px] h-[42.5px] rounded-full bg-background shadow-[0px_3.03px_6.07px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
          <SendIcon className={`w-[22px] h-[24px] ${iconClassName}`} />
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
