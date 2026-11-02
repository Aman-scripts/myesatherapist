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
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  stateModal?: boolean;
  letter?: StateModalLetter;
}) {
  if (stateModal && typeof children === "string" && isEvaluationCtaLabel(children)) {
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
