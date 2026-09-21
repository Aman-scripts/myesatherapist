import React from "react";
import { CtaButton } from "@/components/esa-online/EsaOnlineShared";
import { GoldPill, SectionHeader } from "./EsaTrainingShared";

export function EsaTrainingLegalSection() {
  return (
    <section className="w-full bg-[#FAF7F2]">
      <div className="mx-auto flex w-full max-w-[1065px] flex-col items-center gap-8 px-4 sm:px-8 lg:px-[5vw] xl:gap-8 xl:px-0">
        <div className="flex w-full flex-col items-center gap-8">
          <SectionHeader title="Is ESA Training Required by Law?" />
          <GoldPill title="2026">
            HUD enforcement now prioritizes trained, task-specific animals — but valid ESA letters still matter for
            housing.
          </GoldPill>
        </div>

        <div className="font-sans text-base font-semibold leading-[28px] text-[#5F6B6F] text-center sm:text-[18px] sm:leading-[30px] lg:text-[1.25vw] lg:leading-[2.1vw] xl:text-[18px] xl:leading-[30px]">
          <p>
            No, and that part hasn&apos;t changed. The Fair Housing Act has never required emotional support animals to
            have specialized training.
          </p>
          <p>
            What has changed is enforcement. On May 22, 2026, HUD issued new guidance shifting its federal enforcement
            focus toward animals individually trained to perform specific disability-related tasks, closer to how the
            ADA treats service animals. HUD has said it will generally stop pursuing federal complaints involving
            untrained ESAs.
          </p>
          <p>
            The law itself hasn&apos;t been rewritten, and a valid ESA letter still holds its legal footing, but this
            shift makes strong documentation, and where possible, clinician-identified support behaviors, more important
            than before.
          </p>
        </div>

        <GoldPill>If your letter isn&apos;t current, this is a good time to renew it.</GoldPill>

        <CtaButton href="/pricing/">Renew your ESA Letter Now</CtaButton>
      </div>
    </section>
  );
}
