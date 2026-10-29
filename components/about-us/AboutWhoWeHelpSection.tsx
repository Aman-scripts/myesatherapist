"use client";

import React from "react";
import Image from "next/image";

const groups = [
  {
    icon: "/ESA ICons/Icon-20.svg",
    title: "Renters Facing Housing Restrictions",
    description:
      "An ESA letter, issued after evaluation by a licensed professional, may help you live with your ESA in no-pet housing.",
  },
  {
    icon: "/ESA ICons/Icon.svg",
    title: "Individuals With Anxiety Or Depression",
    description:
      "Receive a professional assessment from licensed mental health professionals to evaluate emotional support needs.",
  },
  {
    icon: "/ESA ICons/Icon-15.svg",
    title: "Remote Or Telehealth Users",
    description:
      "Complete secure, HIPAA-compliant telehealth ESA evaluations from anywhere, with scheduling flexibility to suit your needs.",
  },
  {
    icon: "/ESA ICons/Icon-17.svg",
    title: "First-Time And Existing ESA Applicants",
    description:
      "Work with licensed professionals whether applying for the first time or updating existing documentation.",
  },
  {
    icon: "/ESA ICons/Icon-1.svg",
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
          <h2 className="heading-h2 text-primary">
            Who We Help?
          </h2>
          <p className="body-large text-body-text max-w-[700px] mx-auto">
            We serve individuals across the U.S. seeking emotional support animals for mental wellness. Our platform supports a clear, secure, and professional ESA evaluation process.
          </p>
        </div>

        {/* 2 Columns: 5 Cards on Left & Photo on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 items-stretch">
          {/* Left Column: 5 Cards (Order 2 on mobile/tablet, Order 1 on desktop) */}
          <div className="flex flex-col justify-between gap-3 sm:gap-3.5 xl:gap-4 order-2 lg:order-1">
            {groups.map((group, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.12)] border border-[#EAE5DC]/60 p-3 sm:p-4 xl:p-4.5 flex items-center gap-3.5 sm:gap-4 xl:gap-5 transition-all duration-200 hover:shadow-md"
              >
                {/* Gradient Teal Icon Badge */}
                <div className="w-[46px] h-[46px] sm:w-[52px] sm:h-[52px] xl:w-[59px] xl:h-[59px] rounded-full flex items-center justify-center shrink-0 bg-background border border-[#EAE5DC]">
                  <Image
                    src={group.icon}
                    alt=""
                    width={24}
                    height={24}
                    unoptimized
                    className="icon-md object-contain"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="heading-h3 text-color-gradient">
                    {group.title}
                  </h3>
                  <p className="body-text text-body-text mt-0.5">
                    {group.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Photo (Order 1 on mobile/tablet, Order 2 on desktop) */}
          <div className="order-1 lg:order-2 flex flex-col w-full h-full min-h-[360px] sm:min-h-[440px] lg:min-h-0">
            <div className="relative w-full flex-1 min-h-[360px] sm:min-h-[440px] lg:min-h-0 rounded-[24px] xl:rounded-[30px] overflow-hidden shadow-xl">
              <Image
                quality={90}
                src="/about-us/about_us-whowehelp-section.webp"
                alt="Woman sitting on floor hugging cat"
                fill
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
