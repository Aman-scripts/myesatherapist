"use client";
import React, { useState } from "react";
import { HeroStateDropdown } from "@/components/common/HeroStateDropdown";
import { CtaButton } from "@/components/common/CtaButton";

interface HeroCtaGroupProps {
  defaultHref?: string;
  buttonClassName?: string;
  dropdownClassName?: string;
  ctaClassName?: string;
  containerClassName?: string;
}

export function HeroCtaGroup({
  defaultHref = "#pricing",
  buttonClassName,
  dropdownClassName,
  ctaClassName = "w-[192px]",
  containerClassName = "flex items-center gap-3",
}: HeroCtaGroupProps) {
  const [selectedState, setSelectedState] = useState("");
  const href = selectedState ? `/esa-letter-${selectedState}/` : defaultHref;

  return (
    <div className={containerClassName}>
      <HeroStateDropdown
        onChange={setSelectedState}
        buttonClassName={dropdownClassName}
      />
      <CtaButton
        href={href}
        variant="accent"
        className={ctaClassName}
      >
        Get Started
      </CtaButton>
    </div>
  );
}
