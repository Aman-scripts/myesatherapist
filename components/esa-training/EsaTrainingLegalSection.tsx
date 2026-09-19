import React from "react";
import Link from "next/link";
import Image from "next/image";

export function EsaTrainingLegalSection() {
  return (
    <section className="w-full bg-[#FAF7F2]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <span className="inline-block rounded-full bg-[#2E5A66]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2E5A66] mb-4">
          Legal Requirements
        </span>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[38px] leading-tight text-[#2E5A66] mb-6">
          Is ESA Training Required by Law?
        </h2>

        {/* 2026 highlight bar */}
        <div className="flex items-center gap-5 px-6 py-5 mb-8 bg-white rounded-2xl border-l-[4px] border-[#E8B92C] shadow-sm">
          <span className="flex-shrink-0 font-extrabold text-[32px] leading-none bg-gradient-to-r from-[#E8B92C] to-[#d4a826] bg-clip-text text-transparent">
            2026
          </span>
          <span className="font-sans text-sm leading-[1.6] text-[#5F6B6F] font-medium">
            HUD enforcement now prioritizes trained, task-specific animals — but valid ESA letters still matter for housing.
          </span>
        </div>

        <div className="space-y-4 font-sans text-base sm:text-[17px] leading-[1.75] text-[#5F6B6F]">
          <p>No, and that part hasn't changed. The Fair Housing Act has never required emotional support animals to have specialized training.</p>
          <p>What has changed is enforcement. On May 22, 2026, HUD issued new guidance shifting its federal enforcement focus toward animals individually trained to perform specific disability-related tasks, closer to how the ADA treats service animals. HUD has said it will generally stop pursuing federal complaints involving untrained ESAs.</p>
          <p>The law itself hasn't been rewritten, and a valid ESA letter still holds its legal footing, but this shift makes strong documentation, and where possible, clinician-identified support behaviors, more important than before.</p>
        </div>

        <div className="mt-6 rounded-xl bg-[#E8B92C]/15 border border-[#E8B92C]/40 px-6 py-4 font-sans text-[15px] font-semibold text-[#2E5A66]">
          If your letter isn't current, this is a good time to renew it.
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            href="/pricing/"
            className="inline-flex h-[46px] items-center justify-between gap-4 rounded-full bg-[#E8B92C] hover:bg-[#dba81f] pl-6 pr-1.5 font-sans font-bold text-[15px] sm:text-[16px] text-[#184652] transition-all shadow-sm"
          >
            <span>Renew Your ESA Letter Now!</span>
            <span className="w-[32px] h-[32px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
              <Image
                src="/common/send-icon.svg"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4 object-contain"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
