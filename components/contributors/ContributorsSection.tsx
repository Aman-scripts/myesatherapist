import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LATO, TEAL_GRADIENT } from "@/components/esa-online/EsaOnlineShared";
import { CtaButton } from "@/components/common/CtaButton";
import type { ContributorCardData } from "@/data/contributorsData";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="4.98" cy="4.98" r="2.4" />
      <rect x="2.8" y="9.5" width="4.4" height="12.5" rx="0.5" />
      <path d="M10.5 9.5h4.2v1.8c.6-1.1 2-2.1 4.1-2.1 4.4 0 5.2 2.9 5.2 6.6v6.2h-4.4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6h-4.4V9.5z" />
    </svg>
  );
}

function Badge({ label, value, icon }: { label: string; value: string; icon?: string }) {
  const iconSrc =
    icon ||
    (label.toLowerCase().includes("licensed")
      ? "/home/doctor_professionals_licensedin_icon.svg"
      : label.toLowerCase().includes("evaluation") || label.toLowerCase().includes("method")
      ? "/home/doctor_professionals_evaluationmethod_icon.svg"
      : label.toLowerCase().includes("focus") || label.toLowerCase().includes("area")
      ? "/home/doctor_professionals_focusarea_icon.svg"
      : "/common/therapist-section-badge.svg");

  return (
    <div className="relative flex-1 min-w-0 rounded-[10px] bg-accent pt-[2.5px] shadow-[0px_1px_3px_rgba(0,0,0,0.12)]">
      <div className="bg-white rounded-[8px] pt-[22px] sm:pt-[24px] pb-2 px-1.5 text-center flex flex-col justify-start items-center relative min-h-[62px] sm:min-h-[66px] h-full">
        <div className="absolute -top-[15px] sm:-top-[16px] left-1/2 -translate-x-1/2 w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] rounded-full bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.2)] flex items-center justify-center border border-background">
          <Image
            quality={90}
            src={iconSrc}
            alt=""
            width={16}
            height={16}
            className="w-4 h-4 object-contain"
          />
        </div>
        <div className="text-[11px] sm:text-[12px] font-heading font-bold leading-tight text-transparent bg-clip-text w-full truncate" style={{ backgroundImage: TEAL_GRADIENT }}>
          {label}
        </div>
        <div className="text-[10px] sm:text-[11px] font-sans font-semibold text-body-text leading-tight mt-1 w-full truncate">{value}</div>
      </div>
    </div>
  );
}

function ContributorCard({ person }: { person: ContributorCardData }) {
  return (
    <div className="w-full bg-white rounded-[30px] border-2 border-accent shadow-[0px_1px_4px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col transition-shadow hover:shadow-lg">
      <div className="px-5 sm:px-7 py-4 flex items-center justify-between gap-3" style={{ backgroundImage: TEAL_GRADIENT }}>
        <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
          <div className="w-[60px] h-[60px] sm:w-[67px] sm:h-[67px] rounded-full border-[2.8px] border-accent overflow-hidden shrink-0 relative bg-white/10 shadow-sm">
            <Image
            quality={90} src={person.avatar} alt={person.name} fill className="object-cover object-top" sizes="67px" />
          </div>
          <div className="min-w-0">
            <h3 className="font-heading font-bold text-lg sm:text-[20px] text-background leading-tight sm:leading-[28px]">{person.name}</h3>
            <p className="font-sans font-semibold text-xs sm:text-[14px] text-accent leading-snug mt-0.5">{person.title}</p>
          </div>
        </div>
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${person.name} LinkedIn Profile`}
          className="w-8 h-8 rounded-full bg-accent hover:bg-[#dba81f] flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105"
        >
          <LinkedinIcon className="w-4 h-4 text-[#1A3D4F]" />
        </a>
      </div>

      <div className="p-5 sm:p-7 flex flex-col flex-1 justify-between gap-6">
        <p className="font-sans font-semibold text-sm text-body-text leading-[26px]">{person.bio}</p>
        <div className="flex items-stretch gap-2.5 sm:gap-3.5 pt-2">
          {person.badges.map((b) => (
            <Badge key={b.label} {...b} />
          ))}
        </div>
        <div className="pt-2 flex justify-center">
          <CtaButton
            href={person.href}
            variant="accent"
            className="w-[192px]"
          >
            View Profile
          </CtaButton>
        </div>
      </div>
    </div>
  );
}

export function ContributorsSection({
  id,
  title,
  description,
  people,
  bg = "bg-background",
}: {
  id: string;
  title: string;
  description: string;
  people: ContributorCardData[];
  bg?: string;
}) {
  return (
    <section id={id} className={`w-full ${bg} py-16 sm:py-20 lg:py-24 scroll-mt-20`}>
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-14 max-w-[860px] mx-auto space-y-3 sm:space-y-4">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] text-primary leading-[1.2] lg:leading-[54px] tracking-[-0.00015em]">
            {title}
          </h2>
          <p className="font-sans font-semibold text-base sm:text-lg text-body-text leading-relaxed lg:leading-[30px] max-w-[813px] mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[42px] max-w-[1100px] mx-auto">
          {people.map((p) => (
            <ContributorCard key={p.id} person={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
