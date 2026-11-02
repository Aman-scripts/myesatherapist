"use client";
import React, { useState } from "react";
import { HeroStateDropdown } from "@/components/common/HeroStateDropdown";
import { CtaButton } from "@/components/common/CtaButton";
import { openStateSelectModal } from "@/components/common/evaluationCta";
import { surveyRegisterUrl } from "@/components/common/stateModalDestination";
import { STATE_INDEX_BY_SLUG } from "@/data/stateIndex";

interface HeroCtaGroupProps {
  defaultHref?: string;
  buttonClassName?: string;
  dropdownClassName?: string;
  ctaClassName?: string;
  containerClassName?: string;
}

export function HeroCtaGroup({
  buttonClassName,
  dropdownClassName,
  ctaClassName = "w-[192px]",
  containerClassName = "flex items-center gap-3",
}: HeroCtaGroupProps) {
  const [selectedState, setSelectedState] = useState("");

  return (
    <div className={containerClassName}>
      <HeroStateDropdown
        onChange={setSelectedState}
        buttonClassName={buttonClassName ?? dropdownClassName}
      />
      <CtaButton
        href={
          selectedState
            ? surveyRegisterUrl({ state: STATE_INDEX_BY_SLUG[selectedState]?.name })
            : undefined
        }
        onClick={selectedState ? undefined : () => openStateSelectModal("psd")}
        stateModal={false}
        variant="accent"
        className={ctaClassName}
      >
        Get Started
      </CtaButton>
    </div>
  );
}

