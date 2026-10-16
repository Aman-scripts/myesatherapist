"use client";

import React from "react";
import { TherapistsSection } from "@/components/home/TherapistsSection";

export function LicensedProfessionalsSection() {
  return (
    <TherapistsSection
      title="Our Licensed Professionals for PSD Support"
      subtitle="Our network includes state-licensed professionals who specialize in mental health conditions relevant to service animal evaluations."
      licensureNote="A Note on Licensure Levels: Depending on their state of origin, a social worker or counselor may have a variety of titles, such as Licensed Clinical Social Worker (LCSW), Licensed Independent Clinical Social Worker (LICSW), etc. These are comparable licensure levels."
    />
  );
}
