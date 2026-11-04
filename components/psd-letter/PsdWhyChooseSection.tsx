import React from "react";
import Image from "next/image";

const REASONS = [
  {
    icon: "/esa-icons/glyph-3.svg",
    title: "HIPAA-Compliant Online Process",
    text: "Complete your PSD letter evaluation through a secure telehealth platform built to protect your personal information and privacy.",
  },
  {
    icon: "/esa-icons/icon-33.svg",
    title: "Licensed Mental Health Professionals",
    text: "Connect with qualified, state-licensed professionals (LCSWs, LICSWs, LPCs) who assess your needs and determine whether a PSD letter is clinically appropriate.",
  },
  {
    icon: "/esa-icons/icon-15.svg",
    title: "Convenient Virtual Evaluations",
    text: "Schedule your evaluation online and speak with a licensed professional without taking time out to visit an office.",
  },
  {
    icon: "/esa-icons/icon-45.svg",
    title: "Transparent Pricing",
    text: "With no hidden fees or surprise charges, you’ll know the entire cost upfront before starting your PSD letter evaluation.",
  },
  {
    icon: "/esa-icons/icon-14.svg",
    title: "Private and Confidential Care",
    text: "Discuss your mental health needs in a confidential setting designed to make your online PSD evaluation comfortable and secure.",
  },
  {
    icon: "/esa-icons/icon-24.svg",
    title: "Serving All 50 U.S. States",
    text: "Get connected with a professional licensed in your state, making PSD evaluations accessible to individuals nationwide.",
  },
];

export function PsdWhyChooseSection() {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex max-w-[1279px] flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex max-w-[860px] flex-col items-center gap-4 text-center lg:mb-16">
          <h2 className="heading-h2 text-primary">
            Why Choose My ESA Therapist for Your Online PSD Letter
          </h2>
          <p className="body-large text-body-text">
            Get your PSD evaluation online with licensed professionals, clear pricing, secure consultations, and support throughout the process.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-x-5 gap-y-14 pt-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16 xl:gap-x-[23px]">
          {REASONS.map((item) => (
            <div
              key={item.title}
              className="relative flex flex-col items-center rounded-[20px] bg-accent px-0 pb-0 pt-1.5 shadow-[0px_2px_4px_rgba(0,0,0,0.15)]"
            >
              <div className="flex h-full min-h-[228px] w-full flex-col items-center rounded-[20px] bg-white px-6 pb-8 pt-12 text-center shadow-[0px_2px_4px_rgba(0,0,0,0.15)] sm:px-8">
                <div className="absolute -top-6 left-1/2 flex h-[52px] w-[52px] -translate-x-1/2 items-center justify-center rounded-full border border-[#E2E8F0] bg-white shadow-[0px_2.5px_5px_rgba(0,0,0,0.25)] sm:-top-7 sm:h-[58px] sm:w-[58px] lg:h-[64px] lg:w-[64px]">
                  <Image quality={90}
                    src={item.icon}
                    alt=""
                    width={32}
                    height={32}
                    unoptimized
                    className="icon-lg object-contain"
                  />
                </div>
                <h3 className="heading-h3 text-color-gradient mb-3">{item.title}</h3>
                <p className="body-text max-w-[320px]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
