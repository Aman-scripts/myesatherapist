import React from "react";

const REASONS = [
  {
    title: "HIPAA-Compliant Online Process",
    text: "Complete your PSD letter evaluation through a secure telehealth platform built to protect your personal information and privacy.",
  },
  {
    title: "Licensed Mental Health Professionals",
    text: "Connect with qualified, state-licensed professionals (LCSWs, LICSWs, LPCs) who assess your needs and determine whether a PSD letter is clinically appropriate.",
  },
  {
    title: "Convenient Virtual Evaluations",
    text: "Schedule your evaluation online and speak with a licensed professional without taking time out to visit an office.",
  },
  {
    title: "Transparent Pricing",
    text: "With no hidden fees or surprise charges, you’ll know the entire cost upfront before starting your PSD letter evaluation.",
  },
  {
    title: "Private and Confidential Care",
    text: "Discuss your mental health needs in a confidential setting designed to make your online PSD evaluation comfortable and secure.",
  },
  {
    title: "Serving All 50 U.S. States",
    text: "Get connected with a professional licensed in your state, making PSD evaluations accessible to individuals nationwide.",
  },
];

export function PsdWhyChooseSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex max-w-[1178px] flex-col items-center gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex max-w-[860px] flex-col items-center gap-4 text-center">
          <h2 className="heading-h2 text-primary">
            Why Choose My ESA Therapist for Your Online PSD Letter
          </h2>
          <p className="body-large text-body-text">
            Get your PSD evaluation online with licensed professionals, clear pricing, secure consultations, and support throughout the process.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-[16px] bg-background px-5 py-6 shadow-[0px_2px_8px_rgba(0,0,0,0.06)]"
            >
              <h3 className="heading-h3 text-primary">{item.title}</h3>
              <p className="body-text text-body-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
