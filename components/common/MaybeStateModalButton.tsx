"use client";

import { isEvaluationCtaLabel, openStateSelectModal } from "@/components/common/evaluationCta";

/** Link that opens the state modal when its label starts an evaluation. */
export function MaybeStateModalButton({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (typeof children === "string" && isEvaluationCtaLabel(children)) {
    return (
      <button type="button" className={`cursor-pointer ${className ?? ""}`} onClick={openStateSelectModal}>
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
