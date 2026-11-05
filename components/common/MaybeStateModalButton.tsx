"use client";

import {
  isEvaluationCtaLabel,
  openStateSelectModal,
  type StateModalLetter,
} from "@/components/common/evaluationCta";

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
        className={`cursor-pointer ${className ?? ""}`}
        onClick={() => openStateSelectModal(letter)}
      >
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
