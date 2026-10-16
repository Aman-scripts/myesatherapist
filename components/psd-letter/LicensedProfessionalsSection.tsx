"use client";

import React from "react";
import { TherapistsSection } from "@/components/home/TherapistsSection";

export function LicensedProfessionalsSection() {
  return (
    <TherapistsSection
      title="Our Licensed Mental Health Professionals"
      subtitle="We connect individuals with licensed mental health professionals who are qualified to conduct evaluations and provide recommendations when clinically appropriate."
      licensureNote="A Note on Licensure Levels: Depending on their state of origin, a social worker or counselor may have a variety of titles, such as Licensed Clinical Social Worker (LCSW), Licensed Independent Clinical Social Worker (LICSW), etc. These are comparable licensure levels."
      bgColor="bg-background"
    />
  );
}
