import React from "react";
import Image from "next/image";
import { CtaButton, LATO } from "./EsaOnlineShared";

const STAR = "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";

function ReviewCard({ color, label, score }: { color: string; label: string; score: string }) {
  return (
    <div className="bg-white/70 backdrop-blur-[12px] border border-white/60 rounded-[20px] px-4 sm:px-5 lg:px-3 xl:px-5 py-3 lg:py-2 xl:py-3 shadow-[0px_2px_6px_rgba(0,0,0,0.06)] flex flex-col items-center gap-1.5 min-w-[170px] sm:min-w-[190px] lg:min-w-[130px] xl:min-w-[190px]">
      <div className="flex items-center gap-1.5">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" style={{ color }} viewBox="0 0 24 24">
          <path d={STAR} />
        </svg>
        <span className="font-normal text-sm sm:text-[16px] lg:text-[13px] xl:text-[16px] text-[#5F6B6F]" style={LATO}>
          {label}
        </span>
      </div>
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <div key={s} className="w-5 h-5 flex items-center justify-center rounded-[2px]" style={{ backgroundColor: color }}>
            <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
              <path d={STAR} />
            </svg>
          </div>
        ))}
      </div>
      <span className="text-[12px] text-[#5F6B6F]" style={LATO}>
        {score}
      </span>
    </div>
  );
}

export function EsaOnlineHero() {
  return (
    <section className="relative w-full bg-[#FAF7F2] overflow-hidden min-h-[580px] sm:min-h-[620px] lg:min-h-[480px] xl:min-h-[723px] flex items-center">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/esa-online/esa-letter-online_herosection.png"
          alt="Legitimate ESA letter online from a licensed therapist"
          fill
          priority
          quality={100}
          className="object-cover object-[75%_center] sm:object-right md:object-center lg:object-[25%_center] xl:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/95 via-[#FAF7F2]/80 to-transparent lg:hidden" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-20 py-10 sm:py-14 lg:py-12 xl:py-16">
        <div className="max-w-[626px] lg:max-w-[420px] xl:max-w-[626px] space-y-6 sm:space-y-8 lg:space-y-4 xl:space-y-6">
          <div className="space-y-3.5 sm:space-y-6">
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[34px] xl:text-[56px] font-bold text-[#2E5A66] leading-[1.14] tracking-[-0.0002em]">
              Legitimate ESA Letter Online From a Licensed Therapist
            </h1>
            <p className="font-sans text-sm sm:text-base lg:text-[13px] xl:text-[18px] text-[#5F6B6F] font-semibold leading-[1.65] max-w-[626px]">
              Begin with a secure, HIPAA-compliant telehealth evaluation designed to support a legitimate ESA letter when clinically appropriate. ESA letters are issued based on a licensed clinician’s professional judgment.
            </p>
          </div>

          <CtaButton href="/pricing/">Start your ESA Evaluation</CtaButton>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-2 xl:gap-4 pt-1">
            <ReviewCard color="#00B67A" label="Trustpilot" score="Trustscore 4.4" />
            <ReviewCard color="#095691" label="ConsumerAffair Reviews" score="Reviews 4.4" />
          </div>
        </div>
      </div>
    </section>
  );
}
