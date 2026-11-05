"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { isEvaluationCtaLabel, openStateSelectModal, type StateModalLetter } from "@/components/common/evaluationCta";

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

  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const rippleId = useRef(0);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const playClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (disabled) return;
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const fromPointer = event.detail !== 0;
    const x = fromPointer ? event.clientX - rect.left : rect.width / 2;
    const y = fromPointer ? event.clientY - rect.top : rect.height / 2;
    const id = rippleId.current + 1;
    rippleId.current = id;
    setRipples((current) => [...current, { id, x, y }]);
    window.setTimeout(() => {
      if (!mounted.current) return;
      setRipples((current) => current.filter((ripple) => ripple.id !== id));
    }, 650);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    target.animate(
      [
        { scale: 1, offset: 0 },
        { scale: 0.92, offset: 0.22 },
        { scale: 1.04, offset: 0.58 },
        { scale: 1, offset: 1 },
      ],
      { duration: 460, easing: "linear" },
    );
    target.querySelector(".cta-icon")?.animate(
      [
        { transform: "scale(1)", offset: 0 },
        { transform: "scale(0.88)", offset: 0.22 },
        { transform: "scale(1)", offset: 1 },
      ],
      { duration: 460, easing: "linear" },
    );
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    playClick(event);
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
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="cta-ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
      <span className={`relative z-[1] ${wrap ? "min-w-0 flex-1 whitespace-normal text-center text-inherit" : centerLabel ? "w-full text-center text-inherit" : "whitespace-nowrap text-inherit"}`}>{children}</span>
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
