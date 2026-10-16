"use client";

import React from "react";

const TEAL_GRADIENT = "var(--color-gradient)";

interface TrustCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ShieldCheckIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        fill="url(#teal-grad-shield)"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="#FAF7F2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="teal-grad-shield" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A3D4F" />
          <stop offset="1" stopColor="#1D6E72" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="url(#teal-grad-clock)" />
      <path
        d="M12 6v6l4 2"
        stroke="#FAF7F2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="teal-grad-clock" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A3D4F" />
          <stop offset="1" stopColor="#1D6E72" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function MapFlagIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        fill="url(#teal-grad-map)"
      />
      <circle cx="12" cy="9" r="2.5" fill="#FAF7F2" />
      <defs>
        <linearGradient id="teal-grad-map" x1="5" y1="2" x2="19" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A3D4F" />
          <stop offset="1" stopColor="#1D6E72" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const trustCards: TrustCard[] = [
  {
    title: "HIPAA Compliant",
    description: "Your information stays private and confidential.",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "Response Within 24–72 Hours",
    description: "Timely responses, subject to provider availability.",
    icon: <ClockIcon />,
  },
  {
    title: "Licensed In All 50 States",
    description: "Access providers licensed in your state.",
    icon: <MapFlagIcon />,
  },
];

export function PsdTrustBarSection() {
  return (
    <section className="w-full bg-background pt-14 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Subtitle matching Figma Frame 1261153977 */}
        <div className="text-center max-w-[854px] mx-auto mb-16 lg:mb-20 space-y-3">
          <h2 className="heading-h2 capitalize">
            Licensed Mental Health Professionals
          </h2>
          <p className="body-large max-w-[620px] mx-auto">
            Connect with state-licensed mental health professionals for confidential and legally compliant evaluations.
          </p>
        </div>

        {/* 3 Elevated Cards in Grid (Figma Frame 1261153636) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-10 lg:gap-6 max-w-[1280px] mx-auto pt-4">
          {trustCards.map((card, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-[20px] pt-14 pb-8 px-6 sm:px-8 flex flex-col items-center text-center shadow-[0px_2px_4px_rgba(0,0,0,0.15)] border-t-[5px] border-t-accent hover:shadow-md transition-shadow"
            >
              {/* Floating Top Circular Badge (Figma Frame 1000011685) */}
              <div className="absolute -top-[37px] left-1/2 -translate-x-1/2 w-[74px] h-[74px] rounded-full bg-white shadow-[0px_1.88px_3.77px_rgba(0,0,0,0.25)] flex items-center justify-center z-10 border border-background">
                {card.icon}
              </div>

              {/* Card Title H3 */}
              <h3 className="heading-h3 capitalize text-color-gradient mb-2">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="body-text max-w-[260px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
