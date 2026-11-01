"use client";

import React from "react";
import Image from "next/image";
import { DoctorProfile } from "@/data/doctorsData";
import { CtaButton } from "@/components/common/CtaButton";

interface DoctorInternalHeroSectionProps {
  doctor: DoctorProfile;
}

function DoctorName({ name, linkedin }: { name: string; linkedin?: string }) {
  const comma = name.indexOf(",");
  const first = comma === -1 ? name : name.slice(0, comma + 1);
  const rest = comma === -1 ? "" : name.slice(comma + 1).trim();

  return (
    <h1 className="heading-h1 text-primary">
      {first}
      {rest ? (
        <>
          <br />
          <span className="inline-flex items-center gap-3">
            {rest}
            {linkedin ? <LinkedInMark href={linkedin} name={name} /> : null}
          </span>
        </>
      ) : linkedin ? (
        <LinkedInMark href={linkedin} name={name} />
      ) : null}
    </h1>
  );
}

function LinkedInMark({ href, name }: { href: string; name: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} on LinkedIn`}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-[13px] font-sans font-bold hover:opacity-90 transition-opacity align-middle ml-1"
    >
      in
    </a>
  );
}

export function DoctorInternalHeroSection({ doctor }: DoctorInternalHeroSectionProps) {
  const mobileSrc = doctor.avatarMobile || doctor.avatar;
  const tabletSrc = doctor.avatarTablet || doctor.avatar;
  const desktopSrc = doctor.avatar;

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          quality={90}
          src="/doctors/doctor_internal.webp"
          alt="Licensed mental health professional"
          fill
          priority
          className="object-cover object-[75%_center] lg:object-right"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[82px]">
        <div className="hidden lg:flex items-center justify-between gap-8 min-h-[640px] py-16">
          <div className="max-w-[620px] flex flex-col items-start gap-5">
            <DoctorName name={doctor.name} linkedin={doctor.linkedin} />
            <p className="body-large text-body-text max-w-[560px]">
              {doctor.heroBio || doctor.bio}
            </p>
            <CtaButton
              href={doctor.ctaSection?.buttonHref || "/pricing/"}
              variant="accent"
              className="w-auto min-w-[260px]"
            >
              Schedule Consultation
            </CtaButton>
            <p className="font-sans font-medium text-[14px] leading-[22px] text-body-text">
              If not approved after your evaluation? You get a full refund.
            </p>
          </div>

          <div className="relative w-[460px] xl:w-[520px] h-[560px] shrink-0">
            <Image
              quality={90}
              src={desktopSrc}
              alt={doctor.name}
              fill
              priority
              className="object-contain object-bottom select-none pointer-events-none"
              sizes="520px"
            />
          </div>
        </div>

        <div className="lg:hidden flex flex-col items-center text-center pt-10 pb-0">
          <DoctorName name={doctor.name} linkedin={doctor.linkedin} />
          <p className="body-large text-body-text max-w-[560px] mt-4">
            {doctor.heroBio || doctor.bio}
          </p>
          <div className="mt-5">
            <CtaButton
              href={doctor.ctaSection?.buttonHref || "/pricing/"}
              variant="accent"
              className="w-auto min-w-[240px]"
            >
              Schedule Consultation
            </CtaButton>
          </div>
          <p className="font-sans font-medium text-[13px] leading-[20px] text-body-text mt-3">
            If not approved after your evaluation? You get a full refund.
          </p>
          <div className="relative w-[280px] sm:w-[380px] aspect-[4/5] mt-4">
            <Image
              quality={90}
              src={mobileSrc}
              alt={doctor.name}
              fill
              priority
              className="object-contain object-bottom sm:hidden"
              sizes="280px"
            />
            <Image
              quality={90}
              src={tabletSrc}
              alt={doctor.name}
              fill
              className="object-contain object-bottom hidden sm:block"
              sizes="380px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
