import React from "react";
import Image from "next/image";
import Link from "next/link";

export function EsaHousingReviewer() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 pb-4">
      <div className="max-w-[860px] mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6 rounded-[20px] bg-background px-6 py-5 shadow-[0px_2px_4px_rgba(0,0,0,0.08)] text-center sm:text-left">
        <Link href="/esa-doctors/dr-robert-staff/" className="relative h-[76px] w-[76px] shrink-0 overflow-hidden rounded-full">
          <Image
            quality={75}
            src="/images/doctors/robert-staaf-profile-image.webp"
            alt="Dr. Robert Staaf, LCSW"
            fill
            className="object-cover"
            sizes="76px"
          />
        </Link>
        <div className="flex flex-col gap-1">
          <p className="font-sans text-[14px] font-bold uppercase tracking-wide text-accent">Medically Reviewed</p>
          <h3 className="heading-h3 text-primary">
            <Link href="/esa-doctors/dr-robert-staff/" className="hover:opacity-80">
              Reviewed by Dr. Robert Staaf, LCSW
            </Link>
          </h3>
          <p className="body-text text-body-text">Licensed Clinical Social Worker · Licensed in 30+ states</p>
        </div>
      </div>
    </section>
  );
}
