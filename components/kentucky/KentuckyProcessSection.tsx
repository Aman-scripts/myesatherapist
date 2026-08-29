"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export function KentuckyProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Quick & Easy Scheduling",
      subtitle: "Book Your Appointment",
      description:
        "Choose a convenient time to connect with a licensed Kentucky clinician. Your session is tailored to your individual mental health needs and takes place through a secure platform.",
      icon: "/process-step-1-schedule.svg",
    },
    {
      number: "02",
      title: "Confidential Clinical Evaluation",
      subtitle: "Therapeutic Consultation",
      description:
        "During a confidential phone or video session, the provider reviews your mental health background, current concerns, and wellness goals to determine if an ESA could offer meaningful support.",
      icon: "/process-step-2-eval.svg",
    },
    {
      number: "03",
      title: "Evaluation-Based Decision",
      subtitle: "Receive Official ESA Letter",
      description:
        "If the clinician finds that an ESA is appropriate for your situation, your signed Kentucky ESA letter is prepared and securely issued in accordance with housing guidelines.",
      icon: "/process-step-3-letter.svg",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1060px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[840px] mx-auto mb-10 sm:mb-12 lg:mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-bold text-[#1E3E47] leading-[1.2] tracking-tight">
            How ESA Letter Process Works in Kentucky
          </h2>
          <p className="font-sans text-xs sm:text-sm lg:text-[15px] text-[#5F6B6F] font-medium leading-relaxed mt-3 max-w-[760px] mx-auto">
            A licensed mental health professional in Kentucky can carry out an emotional support animal evaluation for residents. From the initial consultation to receiving final documentation, the process is straightforward, confidential, and guided by clinical standards.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10 sm:mb-12">
          {steps.map((st) => (
            <div
              key={st.number}
              className="bg-[#FAF7F2] rounded-[22px] sm:rounded-[26px] p-6 lg:p-7 border border-[#EAE5DC] shadow-[0_4px_20px_rgba(0,0,0,0.025)] flex flex-col justify-between relative"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-heading text-2xl lg:text-3xl font-bold text-[#E8B92C]">
                  {st.number}
                </span>
                <div className="w-12 h-12 rounded-full bg-white border border-[#EAE5DC] flex items-center justify-center shrink-0 shadow-xs">
                  <Image
                    src={st.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-wider text-[#184F59] mb-1">
                  {st.subtitle}
                </div>
                <h3 className="font-heading text-lg lg:text-[20px] font-bold text-[#1E3E47] mb-2 leading-snug">
                  {st.title}
                </h3>
                <p className="font-sans text-xs lg:text-[13px] text-[#5F6B6F] leading-relaxed font-medium">
                  {st.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Checklist Banner */}
        <div className="bg-[#FAF7F2] rounded-[20px] border border-[#EAE5DC] p-5 sm:p-6 text-center max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-4.5 h-4.5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span className="font-sans text-xs sm:text-[13px] font-semibold text-[#1E3E47]">
                No instant approvals or generic ESA letters.
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-4.5 h-4.5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span className="font-sans text-xs sm:text-[13px] font-semibold text-[#1E3E47]">
                Private telehealth sessions meeting state and federal privacy guidelines.
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-4.5 h-4.5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span className="font-sans text-xs sm:text-[13px] font-semibold text-[#1E3E47]">
                Evaluations handled only by licensed Kentucky mental health professionals.
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-4.5 h-4.5 rounded-full bg-[#184F59] text-white flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span className="font-sans text-xs sm:text-[13px] font-semibold text-[#1E3E47]">
                ESA letters provided only after an individualized clinical assessment.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
