"use client";

import React from "react";
import Image from "next/image";

const groups = [
  {
    icon: "/about-us/about_us-whowehelp-renterfacing-icon.svg",
    title: "Renters Facing Housing Restrictions",
    description:
      "An ESA letter, issued after evaluation by a licensed professional, may help you live with your ESA in no-pet housing.",
  },
  {
    icon: "/about-us/about_us-whowehelp-individuals_anxiety-icon.svg",
    title: "Individuals with Anxiety, Depression, or PTSD",
    description:
      "Receive a professional assessment from licensed mental health professionals to evaluate emotional support needs.",
  },
  {
    icon: "/about-us/about_us-whowehelp-remotetelepath-icon.svg",
    title: "Remote or Telehealth Users",
    description:
      "Complete secure, HIPAA-compliant telehealth ESA evaluations from anywhere, with scheduling flexibility to suit your needs.",
  },
  {
    icon: "/about-us/about_us-whowehelp-firsttimereturning-icon.svg",
    title: "First-Time and Returning ESA Applicants",
    description:
      "Work with licensed professionals whether applying for the first time or updating existing documentation.",
  },
  {
    icon: "/about-us/about_us-whowehelp-emotionalwellness-icon.svg",
    title: "Emotional Wellness-Focused Pet Owners",
    description:
      "Discuss with licensed professionals the potential role of a companion animal in emotional support.",
  },
];

export function AboutWhoWeHelpSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 xl:py-24 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-12 sm:mb-14 lg:mb-16 space-y-3 sm:space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[38px] xl:text-[44px] font-bold text-[#2E5A66] leading-tight lg:leading-[48px] xl:leading-[54px] tracking-[-0.00015em]">
            Who We Help?
          </h2>
          <p className="font-sans font-semibold text-sm sm:text-base lg:text-[16px] xl:text-[18px] text-[#5F6B6F] leading-relaxed lg:leading-[26px] xl:leading-[30px] max-w-[700px] mx-auto">
            We serve individuals across the U.S. seeking emotional support animals for mental wellness. Our platform supports a clear, secure, and professional ESA evaluation process.
          </p>
        </div>

        {/* 2 Columns: 5 Cards on Left & Photo on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: 5 Cards (Order 2 on mobile/tablet, Order 1 on desktop) */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-3.5 xl:space-y-4 order-2 lg:order-1">
            {groups.map((group, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[10px] shadow-[0px_2px_6px_rgba(0,0,0,0.06)] border border-[#EAE5DC]/60 p-3 sm:p-4 xl:p-4.5 flex items-center gap-3.5 sm:gap-4 xl:gap-4.5 transition-all duration-200 hover:shadow-md"
              >
                {/* Gradient Teal Icon Badge */}
                <div
                  className="w-[46px] h-[46px] sm:w-[52px] sm:h-[52px] xl:w-[59px] xl:h-[59px] rounded-full flex items-center justify-center shrink-0 p-2.5 sm:p-3 shadow-xs"
                  style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  <Image
                    src={group.icon}
                    alt={group.title}
                    width={30}
                    height={30}
                    unoptimized
                    className="object-contain w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7 brightness-0 invert"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-sans font-semibold text-sm sm:text-base xl:text-[18px] leading-snug sm:leading-[24px] xl:leading-[28px] bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                  >
                    {group.title}
                  </h3>
                  <p className="font-sans font-semibold text-xs sm:text-[13px] xl:text-[14px] text-[#5F6B6F] leading-snug sm:leading-[18px] xl:leading-[22px] mt-0.5">
                    {group.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Photo (Order 1 on mobile/tablet, Order 2 on desktop) */}
          <div className="lg:col-span-6 flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[480px] lg:max-w-[540px] xl:max-w-[627px] aspect-[627/699] rounded-[24px] xl:rounded-[30px] overflow-hidden shadow-xl">
              <Image
                src="/about-us/about_us-whowehelp-section.png"
                alt="Woman sitting on floor hugging cat"
                fill
                priority
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
