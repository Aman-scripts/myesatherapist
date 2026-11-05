"use client";

import {
  isEvaluationCtaLabel,
  openStateSelectModal,
  type StateModalLetter,
} from "@/components/common/evaluationCta";
import { playCtaClick } from "@/components/common/ctaMotion";

export function MaybeStateModalButton({
  href,
  className,
  children,
  stateModal = true,
  letter,
  label,
  evaluationCta = false,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  stateModal?: boolean;
  letter?: StateModalLetter;
  label?: string;
  evaluationCta?: boolean;
}) {
  const ctaLabel = label ?? (typeof children === "string" ? children : "");
  if (stateModal && (evaluationCta || isEvaluationCtaLabel(ctaLabel))) {
    return (
      <button
        type="button"
        className={`cta-anim cursor-pointer ${className ?? ""}`}
        onClick={(event) => {
          playCtaClick(event);
          openStateSelectModal(letter);
        }}
      >
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={`cta-anim ${className ?? ""}`} onClick={playCtaClick}>
      {children}
    </a>
  );
}
