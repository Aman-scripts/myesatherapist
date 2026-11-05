"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { isEvaluationCtaLabel, openStateSelectModal, type StateModalLetter } from "@/components/common/evaluationCta";
import { playCtaClick } from "@/components/common/ctaMotion";

export function SendIcon({ className = "w-[22px] h-[22px]" }: { className?: string }) {
  return (
    <Image quality={90}
      src="/common/send-icon.svg"
      alt=""
      width={22}
          sizes="22px"
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
  wrap?: boolean;
  centerLabel?: boolean;
  variant?: "primary" | "secondary" | "accent";
  stateModal?: boolean;
  forceStateModal?: boolean;
  letter?: StateModalLetter;
}

export function CtaButton({
  href,
  target,
  rel,
  children = "Get Started",
  className = "",
  iconClassName = "",
  showIcon,
  wrap = false,
  centerLabel = false,
  variant = "accent",
  stateModal,
  forceStateModal = false,
  letter,
  onClick,
  disabled,
  type = "button",
  ...rest
}: CtaButtonProps) {
  const label = typeof children === "string" ? children : "";
  const opensModal =
    forceStateModal ||
    stateModal === true ||
    (stateModal !== false && type !== "submit" && isEvaluationCtaLabel(label));
  const resolvedHref = opensModal ? undefined : href;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    playCtaClick(event);
    if (opensModal) {
      event.preventDefault();
      openStateSelectModal(letter, { force: forceStateModal });
    }
    onClick?.(event as React.MouseEvent<HTMLButtonElement>);
  };
  const isSecondary = variant === "secondary";
  const isAccent = variant === "accent";

  const shouldShowIcon = showIcon !== undefined ? showIcon : !isSecondary;

  let bgClass = "color-gradient";
  let textColor = "text-white";

  if (isSecondary) {
    bgClass = "bg-background";
    textColor = "text-color-gradient";
  } else if (isAccent) {
    bgClass = "bg-accent";
    textColor = "text-primary";
  }

  const hasExplicitWidth = /\bw-\[\S+\]|\bw-full|\bw-auto|\bw-fit\b|\bmin-w-\[\S+\]/.test(className);
  const defaultWidthClass = hasExplicitWidth ? "" : (isSecondary ? "w-auto" : "w-auto min-w-[192px]");

  const paddingClass = isSecondary
    ? "px-6 xl:px-8"
    : centerLabel
      ? "px-[52px]"
      : (shouldShowIcon ? "pl-6 sm:pl-[28px] pr-[5px]" : "px-6 xl:px-8");

  const heightClass = wrap ? "h-auto min-h-[54px] py-1.5" : "h-[54px]";
  const justifyClass = centerLabel || !(shouldShowIcon && !isSecondary) ? "justify-center" : "justify-between";
  const baseClasses = `cta-anim ${isSecondary ? "cta-anim--light" : ""} inline-flex items-center ${justifyClass} ${heightClass} rounded-[30px] ${paddingClass} gap-2.5 sm:gap-3 ${bgClass} ${textColor} button-text shadow-[0px_2px_4px_rgba(0,0,0,0.15)] cursor-pointer select-none shrink-0 ${defaultWidthClass} ${className}`;

  const content = (
    <>
      <span className={`relative z-[1] ${wrap ? "min-w-0 flex-1 whitespace-normal text-center text-inherit" : centerLabel ? "w-full whitespace-nowrap text-center text-inherit" : "whitespace-nowrap text-inherit"}`}>{children}</span>
      {shouldShowIcon && (
        <span className={`cta-icon relative z-[1] ${centerLabel ? "absolute right-[5px]" : ""} w-[42.5px] h-[42.5px] rounded-full bg-background shadow-[0px_3.03px_6.07px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0`}>
          <SendIcon className={`w-[22px] h-[22px] ${iconClassName}`} />
        </span>
      )}
    </>
  );

  if (resolvedHref) {
    const isInternal = resolvedHref.startsWith("/") || resolvedHref.startsWith("#");
    if (isInternal) {
      return (
        <Link
          href={resolvedHref}
          target={target}
          rel={rel}
          className={baseClasses}
          data-event="cta_click"
          data-event-label={typeof children === "string" ? children : undefined}
          onClick={handleClick as any}
        >
          {content}
        </Link>
      );
    }
    return (
      <a
        href={resolvedHref}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        className={baseClasses}
        data-event="cta_click"
        data-event-label={typeof children === "string" ? children : undefined}
        onClick={handleClick as any}
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
      onClick={handleClick}
      disabled={disabled}
      {...rest}
    >
      {content}
    </button>
  );
}
