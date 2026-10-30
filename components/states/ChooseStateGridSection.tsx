"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { STATE_INDEX } from "@/data/stateIndex";

const ALL_STATES = [...STATE_INDEX].sort((a, b) =>
  a.name.localeCompare(b.name)
);

interface ChooseStateGridSectionProps {
  className?: string;
  id?: string;
  title?: string;
  description?: string;
  allowedStates?: string[];
}

export function ChooseStateGridSection({
  className = "",
  id = "choose-state-section",
  title = "Choose Your State For ESA Evaluation",
  description = "Learn about your emotional support animal rights, evaluation requirements, and find a licensed professional in your state.",
  allowedStates,
}: ChooseStateGridSectionProps = {}) {
  const statesToDisplay =
    allowedStates && allowedStates.length > 0
      ? ALL_STATES.filter((s) =>
          allowedStates.some(
            (nameOrSlug) =>
              nameOrSlug.trim().toLowerCase() === s.name.toLowerCase() ||
              nameOrSlug.trim().toLowerCase() === s.slug.toLowerCase() ||
              nameOrSlug.trim().toLowerCase() === s.abbreviation.toLowerCase()
          )
        )
      : ALL_STATES;

  return (
    <section
      id={id}
      className={`w-full bg-white py-14 sm:py-16 lg:py-[68px] px-3.5 sm:px-8 lg:px-[78px] overflow-hidden ${className}`}
    >
      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-10 sm:gap-14 lg:gap-[72px]">
        
        {/* Heading Block */}
        <div className="flex flex-col items-center text-center max-w-[854px] gap-4">
          <h2 className="heading-h2 text-primary max-w-[765px]">
            {title}
          </h2>
          <p className="body-large text-body-text max-w-[854px]">
            {description}
          </p>
        </div>

        {/* 2 Columns on Mobile with comfortable spacing, 4 Columns on Desktop */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-3.5 sm:gap-6 lg:gap-x-[24px] lg:gap-y-[32px] justify-items-center">
          {statesToDisplay.map((state) => {
            const stateHref = state.slug.startsWith("esa-letter-") ? `/${state.slug}/` : `/esa-letter-${state.slug}/`;
            return (
              <Link
                key={state.slug}
                href={stateHref}
                className="group flex flex-col justify-center items-start px-3 sm:px-6 lg:px-[32px] py-2.5 sm:py-[15px] bg-background hover:bg-white rounded-[12px] sm:rounded-[10px] shadow-[0px_1px_4px_rgba(78,78,78,0.12)] hover:shadow-[0px_4px_12px_rgba(26,61,79,0.15)] transition-all duration-200 w-full max-w-[302px] min-h-[58px] sm:h-[62px]"
              >
              {/* Frame 1261153688: Inner Row */}
              <div className="flex flex-row items-center gap-2 sm:gap-2.5 lg:gap-[8px] w-full overflow-hidden">
                {/* fi_3177361: Pin Icon */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[32px] lg:h-[32px] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Image
                    src="/ESA ICons/Icon-37.svg"
                    alt=""
                    width={32}
                    height={32}
                    unoptimized
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[28px] lg:h-[28px] object-contain"
                  />
                </div>

                {/* Page Description: State Text */}
                <span className="body-large text-color-gradient group-hover:underline decoration-[#1D6E72] underline-offset-4 transition-all truncate">
                  {state.name}
                </span>
              </div>
            </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
