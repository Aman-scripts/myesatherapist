"use client";

import React from "react";
import Image from "next/image";
import { CtaButton } from "@/components/common/CtaButton";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="4.98" cy="4.98" r="2.4" />
      <rect x="2.8" y="9.5" width="4.4" height="12.5" rx="0.5" />
      <path d="M10.5 9.5h4.2v1.8c.6-1.1 2-2.1 4.1-2.1 4.4 0 5.2 2.9 5.2 6.6v6.2h-4.4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6h-4.4V9.5z" />
    </svg>
  );
}

interface Doctor {
  id: string;
  slug: string;
  name: string;
  title: string;
  bio: string;
  licensedIn: string;
  method: string;
  focus: string;
  avatar: string;
  linkedin: string;
}

const DOCTORS: Doctor[] = [
  {
    id: "robert-staaf",
    slug: "dr-robert-staff",
    name: "Robert Staaf",
    title: "Licensed Clinical Social Worker",
    bio: "Robert Staaf is an independent clinical social worker and therapist, currently licensed to practice at the clinical level in over 30 states. With extensive experience in psychotherapy and child and family welfare, Dr. Staaf is dedicated to providing compassionate, evidence-based mental health care to individuals and families.",
    licensedIn: "30+ States",
    method: "Video or Phone",
    focus: "Anxiety, Stress",
    avatar: "/doctors/Robert_Staff_Dr.webp",
    linkedin: "https://www.linkedin.com/in/robert-staaf-b57b53333/",
  },
  {
    id: "leslie-gamble",
    slug: "dr-leslie-k-gamble",
    name: "Leslie K. Gamble",
    title: "Licensed Independent Clinical Social Worker",
    bio: "Leslie K. Gamble has been a therapist for about 13 years, with a professional background primarily in healthcare. She has worked with individuals across all age groups, as well as couples and families, providing therapy tailored to their needs.",
    licensedIn: "15+ States",
    method: "Video or Phone",
    focus: "Depression, PTSD",
    avatar: "/doctors/Leslie_kgamble_Dr.webp",
    linkedin: "https://www.linkedin.com/in/leslie-gamble-727571366",
  },
  {
    id: "gaurav-patel",
    slug: "dr-gaurav-patel",
    name: "Dr. Gaurav Patel, MD",
    title: "Family Medicine Physician",
    bio: "Dr. Gaurav Patel, MD is a board-certified physician with extensive background across urgent care, outpatient clinical practice, and telehealth consultations. He is committed to empathetic, patient-centered care and evaluating emotional wellness through thorough clinical assessments.",
    licensedIn: "17 States",
    method: "Video or Phone",
    focus: "Chronic Illness, Sleep",
    avatar: "/doctors/Gaurav_patel_Dr.webp",
    linkedin: "https://www.linkedin.com/in/gaurav-patel-m-d-b5565916",
  },
];

function DoctorStatBadge({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: string;
}) {
  const iconSrc =
    icon ||
    (label.toLowerCase().includes("licensed")
      ? "/ESA ICons/Icon-33.svg"
      : label.toLowerCase().includes("evaluation") || label.toLowerCase().includes("method")
      ? "/ESA ICons/Icon-15.svg"
      : label.toLowerCase().includes("focus") || label.toLowerCase().includes("area")
      ? "/ESA ICons/Icon-1.svg"
      : "/ESA ICons/Icon-25.svg");

  return (
    <div className="relative flex-1 min-w-0 rounded-[10px] bg-accent pt-[2.5px] shadow-[0px_1px_3px_rgba(0,0,0,0.12)]">
      <div className="bg-white rounded-[8px] pt-[22px] sm:pt-[24px] pb-2 sm:pb-2.5 px-1.5 sm:px-2 text-center flex flex-col justify-start items-center relative min-h-[62px] sm:min-h-[66px]">
        {/* Floating circular icon badge at top center */}
        <div className="absolute -top-[15px] sm:-top-[16px] left-1/2 -translate-x-1/2 w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] rounded-full bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.2)] flex items-center justify-center border border-background">
          <Image
            src={iconSrc}
            alt={label}
            width={16}
            height={16}
            unoptimized
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain"
          />
        </div>
        <div
          className="body-small bg-clip-text text-transparent truncate w-full"
          style={{ backgroundImage: "var(--color-gradient)" }}
        >
          {label}
        </div>
        <div className="body-small truncate w-full">
          {value}
        </div>
      </div>
    </div>
  );
}

export function DoctorsListingSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-background relative">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Header */}
        <div className="text-center mb-12 lg:mb-14 max-w-[860px] mx-auto space-y-3 sm:space-y-4">
          <h2 className="heading-h2 capitalize">
            State-Licensed Mental Health Professionals
          </h2>
          <p className="body-large max-w-[813px] mx-auto">
            We connect individuals with licensed mental health professionals who are qualified to conduct evaluations and provide recommendations when clinically appropriate.
          </p>
        </div>

        {/* 2-column Grid of Doctor Cards (Full size as with 4 cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[42px] max-w-[1100px] mx-auto">
          {DOCTORS.map((doc, idx) => (
            <div
              key={doc.id}
              className={`w-full bg-white rounded-[30px] border-2 border-accent shadow-[0px_1px_4px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg ${
                idx === 2 ? "lg:col-span-2 lg:w-[calc(50%-21px)] lg:mx-auto" : ""
              }`}
            >
              {/* Top Banner with Gradient & Doctor Identity */}
              <div
                className="px-5 sm:px-7 py-4 sm:py-4.5 flex items-center justify-between gap-3 relative"
                style={{ backgroundImage: "var(--color-gradient)" }}
              >
                <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                  {/* Doctor Avatar with Gold Border */}
                  <div className="w-[60px] h-[60px] sm:w-[67px] sm:h-[67px] rounded-full border-[2.8px] border-accent overflow-hidden shrink-0 relative bg-white/10 shadow-sm">
                    <Image
            quality={90}
                      src={doc.avatar}
                      alt={doc.name}
                      fill
                      className="object-cover object-center"
                      sizes="67px"
                    />
                  </div>

                  {/* Name and Title */}
                  <div className="min-w-0">
                    <h3 className="heading-h3 text-background truncate">
                      {doc.name}
                    </h3>
                    <p className="body-large text-accent truncate mt-0.5">
                      {doc.title}
                    </p>
                  </div>
                </div>

                {/* LinkedIn Badge */}
                <a
                  href={doc.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${doc.name} LinkedIn Profile`}
                  className="w-8 h-8 rounded-full bg-accent hover:bg-[#dba81f] flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 cursor-pointer"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#1A3D4F]" />
                </a>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-7 flex flex-col justify-between flex-1 gap-6">
                {/* Clinical Bio */}
                <p className="font-sans font-semibold text-sm sm:text-[14px] text-body-text leading-[24px] sm:leading-[26px]">
                  {doc.bio}
                </p>

                {/* 3 Stat Badges Row */}
                <div className="flex items-stretch gap-2.5 sm:gap-3.5 pt-2">
                  <DoctorStatBadge
                    label="Licensed In"
                    value={doc.licensedIn}
                    icon="/ESA ICons/Icon-33.svg"
                  />
                  <DoctorStatBadge
                    label="Evaluation Method"
                    value={doc.method}
                    icon="/ESA ICons/Icon-15.svg"
                  />
                  <DoctorStatBadge
                    label="Focus Areas"
                    value={doc.focus}
                    icon="/ESA ICons/Icon-1.svg"
                  />
                </div>

                {/* Card Action Button */}
                <div className="pt-2 flex justify-center">
                  <CtaButton
                    href={`/esa-doctors/${doc.slug}/`}
                    variant="accent"
                    className="w-[192px]"
                  >
                    View Profile
                  </CtaButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-10 sm:mt-12 gap-3">
          <CtaButton
            href="/pricing/"
            variant="accent"
            className="w-auto min-w-[260px]"
          >
            Book Your Appointment
          </CtaButton>
          <p className="font-sans font-medium text-[14px] leading-[22px] text-body-text text-center">
            If not approved after your evaluation? You get a full refund.
          </p>
        </div>

      </div>
    </section>
  );
}
