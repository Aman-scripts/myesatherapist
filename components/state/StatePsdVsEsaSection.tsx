"use client";

import React from "react";
import Image from "next/image";
import { StateData } from "@/data/statesData";

export function StatePsdVsEsaSection({ data }: { data: StateData }) {
  const stateName = data.name;

  return (
    <section className="w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[900px] mx-auto mb-10 sm:mb-12 lg:mb-14 space-y-3">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[44px] font-bold text-[#2E5A66] leading-[1.23] tracking-[-0.00015em]">
            Psychiatric Service Dogs vs. Emotional Support Animals in {stateName}
          </h2>
          <p className="font-sans text-sm sm:text-base lg:text-[16px] text-[#5F6B6F] font-semibold leading-[26px] max-w-[760px] mx-auto">
            Understanding the distinction helps ensure you pursue the correct support option and documentation.
          </p>
        </div>

        {/* 2 Comparison Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-10 lg:mb-14">
          
          {/* ESA Block */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 lg:gap-6">
            <div className="relative w-full sm:w-[210px] lg:w-[220px] xl:w-[240px] aspect-[4/3] sm:aspect-[240/310] shrink-0 rounded-[24px] overflow-hidden shadow-sm">
              <Image
                src="/emotionalsupportnanimal.png"
                alt={`Emotional Support Animals (ESA) in ${stateName}`}
                fill
                priority
                unoptimized
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 240px"
              />
            </div>

            <div className="flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-heading text-[22px] sm:text-[26px] lg:text-[28px] font-bold text-[#2E5A66] leading-[34px] tracking-[-0.00015em] mb-2.5">
                  Emotional Support Animals (ESA)
                </h3>
                <p className="font-sans text-[13px] sm:text-[14px] text-[#5F6B6F] font-semibold leading-[24px]">
                  Emotional Support Animals provide comfort that may help reduce the impact of a mental or emotional disability. ESAs do not require specialized training and are protected under federal housing law for accommodation purposes. They do not have public access rights.
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3.5 py-1.5 rounded-[20px] bg-[#E2F6EE] text-[#1D6E72] font-sans font-semibold text-[13px] leading-[18px]">
                  Housing Rights
                </span>
                <span className="px-3.5 py-1.5 rounded-[20px] bg-[#E2F6EE] text-[#1D6E72] font-sans font-semibold text-[13px] leading-[18px]">
                  No Pet Fees
                </span>
                <span className="px-3.5 py-1.5 rounded-[20px] bg-[#E2F6EE] text-[#1D6E72] font-sans font-semibold text-[13px] leading-[18px]">
                  Emotional Support
                </span>
              </div>
            </div>
          </div>

          {/* PSD Block */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 lg:gap-6">
            <div className="relative w-full sm:w-[210px] lg:w-[220px] xl:w-[240px] aspect-[4/3] sm:aspect-[240/310] shrink-0 rounded-[24px] overflow-hidden shadow-sm">
              <Image
                src="/psychiatricservicedogs.png"
                alt={`Psychiatric Service Dogs (PSD) in ${stateName}`}
                fill
                priority
                unoptimized
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 240px"
              />
            </div>

            <div className="flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-heading text-[22px] sm:text-[26px] lg:text-[28px] font-bold text-[#2E5A66] leading-[34px] tracking-[-0.00015em] mb-2.5">
                  Psychiatric Service Dogs (PSD)
                </h3>
                <p className="font-sans text-[13px] sm:text-[14px] text-[#5F6B6F] font-semibold leading-[24px]">
                  Psychiatric Service Dogs are trained to perform specific tasks that assist with a psychiatric disability. Because they perform disability-related tasks, PSDs are protected under the Americans with Disabilities Act (ADA) and have public access rights in places where pets are not normally allowed.
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3.5 py-1.5 rounded-[20px] bg-[#E2F6EE] text-[#1D6E72] font-sans font-semibold text-[13px] leading-[18px]">
                  Full Public Access
                </span>
                <span className="px-3.5 py-1.5 rounded-[20px] bg-[#E2F6EE] text-[#1D6E72] font-sans font-semibold text-[13px] leading-[18px]">
                  Trained Tasks
                </span>
                <span className="px-3.5 py-1.5 rounded-[20px] bg-[#E2F6EE] text-[#1D6E72] font-sans font-semibold text-[13px] leading-[18px]">
                  ADA Protected
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Callout Notice Banner */}
        <div className="max-w-[1140px] mx-auto bg-[rgba(232,185,44,0.1)] rounded-[20px] sm:rounded-[30px] overflow-hidden flex items-stretch shadow-sm">
          <div className="w-[12px] sm:w-[14px] bg-[#E8B92C] shrink-0" />
          <div className="p-5 sm:p-7 lg:p-8 space-y-2 flex-1">
            <h4 className="font-heading text-[18px] sm:text-[22px] font-bold text-[#2E5A66] leading-[28px] tracking-[-0.00015em]">
              Getting a Psychiatric Service Dog in {stateName}
            </h4>
            <p className="font-sans text-[13px] sm:text-[14px] text-[#5F6B6F] font-semibold leading-[24px]">
              Qualifying for a Psychiatric Service Dog requires documentation of a psychiatric disability and completion of task-specific training. Training timelines and costs vary depending on the provider and the specific tasks required. Individuals exploring this option may choose to work with qualified professionals for evaluation, documentation, and guidance. Our platform can help connect individuals with appropriately licensed mental health professionals who can assist with the initial assessment process and discuss next steps.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
