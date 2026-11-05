"use client";

import {
  isEvaluationCtaLabel,
  openStateSelectModal,
  type StateModalLetter,
} from "@/components/common/evaluationCta";

/** Link that opens the state modal when its label starts an evaluation. */
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
  /** Visible label when children are not a plain string, such as responsive spans. */
  label?: string;
  /** Pricing cards always start an evaluation, even when the visible label is split for mobile. */
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
