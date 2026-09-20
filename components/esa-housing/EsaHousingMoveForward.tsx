import React from "react";
import Image from "next/image";
import { LATO, TEAL_GRADIENT } from "@/components/esa-online/EsaOnlineShared";

export function EsaHousingMoveForward() {
  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundImage: TEAL_GRADIENT }}>
      <div className="hidden sm:block absolute right-0 bottom-0 sm:h-[60%] lg:h-auto lg:w-[min(17.4vw,250px)] aspect-[254/262] pointer-events-none">
        <Image
          src="/esa-housing/esa-letter-housing_moveforwardsection-pawicon.png"
          alt=""
          fill
          className="object-contain object-right-bottom"
          sizes="260px"
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 flex flex-col items-center gap-6 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl xl:text-[44px] font-bold text-[#FAF7F2] leading-[1.2] xl:leading-[54px] tracking-[-0.00015em] max-w-[888px] lg:max-w-[min(61vw,888px)]">
          Move Forward With Clarity About Your Housing Options
        </h2>
        <p className="font-sans text-base sm:text-[18px] font-semibold leading-[30px] text-[#FAF7F2] max-w-[932px] lg:max-w-[min(64vw,932px)]">
          Learn whether an Emotional Support Animal may be appropriate for you and how housing protections may support your situation.
        </p>
        <a
          href="/pricing/"
          className="mt-2 inline-flex h-[46px] items-center rounded-[30px] bg-[#E8B92C] px-8 text-[18px] font-bold text-[#2E5A66] shadow-[0px_2px_4px_rgba(0,0,0,0.25)] hover:opacity-95 transition-opacity"
          style={LATO}
        >
          Start your Evaluation
        </a>
      </div>
    </section>
  );
}
