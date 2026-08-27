"use client";

import React from "react";
import Image from "next/image";

export function CaliforniaPsdVsEsaSection() {
  return (
    <section className="w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1080px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-[840px] mx-auto mb-10 sm:mb-12 lg:mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-bold text-[#1E3E47] leading-[1.2] tracking-tight">
            Psychiatric Service Dogs vs. Emotional
            <br className="hidden sm:inline" /> Support Animals in California
          </h2>
          <p className="font-sans text-xs sm:text-sm lg:text-[15px] text-[#5F6B6F] font-medium leading-relaxed mt-3 max-w-[720px] mx-auto">
            Understanding the distinction helps ensure you pursue the correct support option and documentation.
          </p>
        </div>

        {/* 2 Horizontal Cards Grid (ESA vs PSD) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-5 xl:gap-8 mb-10 lg:mb-12">
          
          {/* Card 1 (Left): Emotional Support Animals (ESA) */}
          <div className="bg-white rounded-[22px] sm:rounded-[26px] lg:rounded-[28px] border border-[#EAE5DC] shadow-[0_4px_20px_rgba(0,0,0,0.025)] flex flex-col sm:flex-row overflow-hidden">
            {/* Left Image - aspect-[4/3] sm:aspect-auto with object-[center_20%] for complete face & eyes & pet visibility */}
            <div className="relative w-full sm:w-[32%] lg:w-[28%] xl:w-[34%] aspect-[4/3] sm:aspect-auto shrink-0 overflow-hidden">
              <Image
                src="/emotionalsupportnanimal.png"
                alt="Emotional Support Animals (ESA)"
                fill
                priority
                unoptimized
                className="object-cover object-[center_20%]"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            </div>

            {/* Right Content Area */}
            <div className="p-4 sm:p-4 lg:p-4.5 xl:p-5 flex flex-col justify-between flex-1 min-w-0">
              <div>
                <h3 className="font-heading text-lg sm:text-xl lg:text-[19px] xl:text-[21px] font-bold text-[#1E3E47] mb-2 leading-snug">
                  Emotional Support Animals
                  <br />
                  (ESA)
                </h3>
                <p className="font-sans text-[11px] sm:text-[11.5px] lg:text-[11.5px] xl:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed mb-3 sm:mb-4">
                  Emotional Support Animals provide comfort that may help reduce the impact of a mental
                  or emotional disability. ESAs do not require specialized training and are protected
                  under federal housing law for accommodation purposes. They do not have public access
                  rights.
                </p>
              </div>

              {/* Tag Pills */}
              <div className="flex items-center gap-1 sm:gap-1.5 pt-1 flex-nowrap">
                <span className="font-sans text-[9px] sm:text-[10px] lg:text-[9.5px] xl:text-[11px] font-semibold text-[#184F59] bg-[#E7F5EE] px-1.5 sm:px-2 lg:px-1.5 xl:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap shrink-0">
                  Housing Rights
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] lg:text-[9.5px] xl:text-[11px] font-semibold text-[#184F59] bg-[#E7F5EE] px-1.5 sm:px-2 lg:px-1.5 xl:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap shrink-0">
                  No Pet Fees
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] lg:text-[9.5px] xl:text-[11px] font-semibold text-[#184F59] bg-[#E7F5EE] px-1.5 sm:px-2 lg:px-1.5 xl:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap shrink-0">
                  Emotional Support
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 (Right): Psychiatric Service Dogs (PSD) */}
          <div className="bg-white rounded-[22px] sm:rounded-[26px] lg:rounded-[28px] border border-[#EAE5DC] shadow-[0_4px_20px_rgba(0,0,0,0.025)] flex flex-col sm:flex-row overflow-hidden">
            {/* Left Image - aspect-[4/3] sm:aspect-auto with object-[center_20%] for complete face & eyes & pet visibility */}
            <div className="relative w-full sm:w-[32%] lg:w-[28%] xl:w-[34%] aspect-[4/3] sm:aspect-auto shrink-0 overflow-hidden">
              <Image
                src="/psychiatricservicedogs.png"
                alt="Psychiatric Service Dogs (PSD)"
                fill
                priority
                unoptimized
                className="object-cover object-[center_20%]"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            </div>

            {/* Right Content Area */}
            <div className="p-4 sm:p-4 lg:p-4.5 xl:p-5 flex flex-col justify-between flex-1 min-w-0">
              <div>
                <h3 className="font-heading text-lg sm:text-xl lg:text-[19px] xl:text-[21px] font-bold text-[#1E3E47] mb-2 leading-snug">
                  Psychiatric Service Dogs
                  <br />
                  (PSD)
                </h3>
                <p className="font-sans text-[11px] sm:text-[11.5px] lg:text-[11.5px] xl:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed mb-3 sm:mb-4">
                  Psychiatric Service Dogs are trained to perform specific tasks that assist with a
                  psychiatric disability. Because they perform disability-related tasks, PSDs are
                  protected under the Americans with Disabilities Act (ADA) and have public access rights
                  in places where pets are not normally allowed.
                </p>
              </div>

              {/* Tag Pills */}
              <div className="flex items-center gap-1 sm:gap-1.5 pt-1 flex-nowrap">
                <span className="font-sans text-[9px] sm:text-[10px] lg:text-[9.5px] xl:text-[11px] font-semibold text-[#184F59] bg-[#E7F5EE] px-1.5 sm:px-2 lg:px-1.5 xl:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap shrink-0">
                  Full Public Access
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] lg:text-[9.5px] xl:text-[11px] font-semibold text-[#184F59] bg-[#E7F5EE] px-1.5 sm:px-2 lg:px-1.5 xl:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap shrink-0">
                  Trained Tasks
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] lg:text-[9.5px] xl:text-[11px] font-semibold text-[#184F59] bg-[#E7F5EE] px-1.5 sm:px-2 lg:px-1.5 xl:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap shrink-0">
                  ADA Protected
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Notice Box ("Getting a Psychiatric Service Dog in California") */}
        <div className="max-w-[840px] mx-auto bg-[#FCF6E8] rounded-[18px] sm:rounded-[22px] overflow-hidden flex items-stretch shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          {/* Gold Vertical Accent Bar */}
          <div className="w-3.5 sm:w-4 bg-[#E5B627] shrink-0" />

          {/* Notice Content */}
          <div className="p-4 sm:p-5 lg:p-6 flex-1">
            <h3 className="font-heading text-sm sm:text-base lg:text-[17px] font-bold text-[#1E3E47] mb-1.5 leading-snug">
              Getting a Psychiatric Service Dog in California
            </h3>
            <p className="font-sans text-[11px] sm:text-xs lg:text-[12.5px] text-[#5F6B6F] font-medium leading-relaxed">
              Qualifying for a Psychiatric Service Dog requires documentation of a psychiatric disability
              and completion of task-specific training. Training timelines and costs vary depending on the
              provider and the specific tasks required. Individuals exploring this option may choose to work
              with qualified professionals for evaluation, documentation, and guidance. Our platform can help
              connect individuals with appropriately licensed mental health professionals who can assist with
              the initial assessment process and discuss next steps.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
