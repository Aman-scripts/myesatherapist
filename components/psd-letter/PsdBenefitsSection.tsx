
import React from "react";
import Image from "next/image";

const benefitsData = [
  {
    icon: "/esa-icons/icon-20.svg",
    title: "Housing Support",
    badge: "Most Requested",
    description:
      "May support housing approval for your psychiatric service dog in pet-restricted properties, subject to landlord approval. Your PSD letter provides documentation that many providers may request.",
    isDark: true,
  },
  {
    icon: "/esa-icons/icon-28.svg",
    title: "Air Travel Documentation",
    description:
      "Provides documentation that may support your air travel needs, subject to airline policies and approval.",
    isDark: false,
  },
  {
    icon: "/esa-icons/icon-25.svg",
    title: "Public Access Information",
    description:
      "Offers documentation for public spaces when accompanied by your trained psychiatric service dog.",
    isDark: false,
  },
  {
    icon: "/esa-icons/icon-17.svg",
    title: "Professional Documentation",
    description:
      "Official letter on letterhead from a state-licensed mental health professional with their credentials.",
    isDark: false,
  },
  {
    icon: "/esa-icons/icon-12.svg",
    title: "Supportive Documentation",
    description:
      "Backup documentation regarding your condition to help support your needs as a service dog handler.",
    isDark: false,
  },
  {
    icon: "/esa-icons/glyph-2.svg",
    title: "Mental Health Consultation",
    description:
      "Professional assessment and consultation from licensed therapists who understand service dogs",
    isDark: false,
  },
];

const TEAL_GRADIENT = "var(--color-gradient)";

export function PsdBenefitsSection() {
  return (
    <section className="w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-[820px] mx-auto mb-16 lg:mb-20 space-y-3">
          <h2 className="heading-h2 capitalize">
            Understanding Your PSD Letter Benefits
          </h2>
          <p className="body-large">
            Learn about the potential advantages of having professional documentation for your psychiatric service dog and how it supports your needs across housing, travel, and daily life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-7 pt-6">
          {benefitsData.map((item, index) => (
            <div
              key={index}
              className={`hover-card hover-surface relative pt-14 pb-9 px-6 sm:px-8 rounded-[20px] flex flex-col items-center text-center shadow-[0px_2px_4px_rgba(0,0,0,0.15)] ${
                item.isDark
                  ? "text-background border-t-[5px] border-t-accent"
                  : "bg-white text-primary border-t-[5px] border-t-accent"
              }`}
              style={item.isDark ? { backgroundImage: TEAL_GRADIENT } : {}}
            >
              <div
                className={`hover-badge absolute -top-[40px] left-1/2 -translate-x-1/2 w-[80px] h-[80px] rounded-full flex items-center justify-center z-20 shadow-[0px_2.5px_5px_rgba(0,0,0,0.25)] ${
                  item.isDark
                    ? "border border-white/10"
                    : "bg-white"
                }`}
                style={item.isDark ? { backgroundImage: TEAL_GRADIENT } : {}}
              >
                <Image
                  quality={90}
                  src={item.icon}
                  alt={item.title}
                  width={32}
          sizes="32px"
                  height={32}
                  unoptimized
                  className="icon-lg object-contain"
                />
              </div>

              {item.badge && (
                <div className="hover-pill absolute -top-3.5 right-3 sm:right-4 md:right-5 bg-background border-[0.2px] border-primary text-primary body-small px-3.5 sm:px-4 py-1 rounded-[12px] shadow-xs tracking-tight z-10 whitespace-nowrap">
                  {item.badge}
                </div>
              )}

              <h3
                className={`heading-h3 capitalize mb-3 mt-2 ${
                  item.isDark ? "text-background" : "text-color-gradient"
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`body-text ${
                  item.isDark ? "text-background/90" : ""
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
