"use client";
import React, { useState } from "react";
import { HeroStateDropdown } from "@/components/common/HeroStateDropdown";
import { CtaButton } from "@/components/common/CtaButton";
import { openStateSelectModal } from "@/components/common/evaluationCta";
import { psdStateDestination } from "@/components/common/stateModalDestination";

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
        href={selectedState ? psdStateDestination(selectedState) : undefined}
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

