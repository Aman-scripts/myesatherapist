"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronRight } from "lucide-react";

interface Props {
  stateName: string;
}

export function StateTableOfContents({ stateName }: Props) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  const tocItems = [
    {
      id: "therapists",
      label: "Our Licensed Mental Health Professionals",
    },
    {
      id: "process",
      label: `How the ${stateName} ESA Evaluation Process Works?`,
    },
    {
      id: "who-qualifies",
      label: `Who May Qualifies for an ESA Letter in ${stateName}?`,
    },
    {
      id: "why-choose",
      label: "Why Choose My ESA Therapist?",
    },
    {
      id: "reviews",
      label: "See What Our Clients Say",
    },
    {
      id: "benefits",
      label: `Benefits of a Clinically Issued ESA Letter in ${stateName}`,
    },
    {
      id: "laws",
      label: `Understanding ESA Laws in ${stateName} for Housing & Tenant Rights`,
    },
    {
      id: "scams",
      label: `${stateName} ESA Scams: What’s Real vs. Fake`,
    },
    {
      id: "psd-vs-esa",
      label: `Psychiatric Service Dogs vs. Emotional Support Animals in ${stateName}`,
    },
    {
      id: "trusted-reviews",
      label: `Trusted by Thousands of Pet Owners in ${stateName}`,
    },
    {
      id: "pricing",
      label: `Emotional Support Animal Plans & Pricing in ${stateName}`,
    },
    {
      id: "available-cities",
      label: `Available Everywhere in ${stateName}`,
    },
    {
      id: "faq",
      label: "Frequently Asked Questions",
    },
    {
      id: "cta",
      label: "Ready to Start Your ESA Evaluation?",
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0% -60% 0%",
        threshold: 0,
      }
    );

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [tocItems]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -90;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        setActiveId(id);
      }
    }, 150);
  };

  if (!mounted) return null;

  return createPortal(
    <>
      {/* ---------------------------------------------------- */}
      {/* 1. FLOATING TOGGLE BUTTON (Attached to left edge)    */}
      {/* ---------------------------------------------------- */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open Table of Contents"
        className="fixed left-0 top-[50%] -translate-y-1/2 z-[80] w-[34px] sm:w-[40px] h-[64px] sm:h-[76px] rounded-r-full shadow-[2px_4px_16px_rgba(26,61,79,0.45)] flex items-center justify-center pl-0.5 text-white transition-all hover:w-[44px] active:scale-95 group cursor-pointer"
        style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#FAF7F2] stroke-[2.5] group-hover:translate-x-0.5 group-hover:text-[#E8B92C] transition-all" />
      </button>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLE OF CONTENTS DRAWER & OVERLAY                */}
      {/* ---------------------------------------------------- */}
      <div
        className={`fixed inset-0 z-[99999] flex transition-all duration-300 ${
          isOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop Overlay with smooth fade */}
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Sliding Content Panel */}
        <div
          className={`relative w-[320px] sm:w-[360px] md:w-[382px] h-full max-h-screen overflow-hidden z-[100000] text-[#FAF7F2] shadow-2xl flex flex-col justify-start transition-transform duration-300 ease-out transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
        >
          {/* Fixed Top Header (Logo + Close Button + Title + Divider) */}
          <div className="shrink-0 px-6 sm:px-8 xl:px-[41px] pt-8 sm:pt-10">
            {/* Top Row: Logo Card + Close Button */}
            <div className="flex items-start justify-between mb-5 sm:mb-6">
              {/* Frame 1000011910: White Box with Gold Border */}
              <div className="w-[170px] sm:w-[190px] h-[74px] sm:h-[81.5px] bg-white border-[4.5px] sm:border-[5.54px] border-[#E8B92C] rounded-[8px] flex items-center justify-center p-2.5 shadow-md">
                <Image
                  src="/common/myesa-logo.svg"
                  alt="My ESA Therapist"
                  width={135}
                  height={56}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/40 hover:border-white text-white/90 hover:text-white hover:bg-white/10 flex items-center justify-center transition-all cursor-pointer mt-1"
                aria-label="Close Table of Contents"
              >
                <X className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#FAF7F2] stroke-[2.2]" />
              </button>
            </div>

            {/* Heading: Table of Contents */}
            <div className="space-y-2 mb-3 sm:mb-4">
              <h2 className="font-heading text-2xl sm:text-[28px] font-bold text-[#FAF7F2] leading-tight tracking-[-0.00015em]">
                Table of Contents
              </h2>
            </div>

            {/* Line 11 Divider (Placed directly at boundary) */}
            <div className="w-full h-[0.5px] bg-white/30" />
          </div>

          {/* Scrollable Links List: Frame 1000011836 */}
          <div
            className="flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-6 sm:px-8 xl:px-[41px] pt-5 sm:pt-6 pb-10"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <nav>
              <ul className="space-y-4 sm:space-y-6">
                {tocItems.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <li key={item.id} className="flex items-start gap-2.5">
                      <span className="text-white/70 text-base sm:text-lg leading-none mt-1 shrink-0">•</span>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => scrollToSection(e, item.id)}
                        className={`font-sans text-[13px] sm:text-[14px] leading-[22px] sm:leading-[26px] transition-all hover:text-[#E8B92C] ${
                          isActive ? "text-[#E8B92C] font-bold" : "text-[#FAF7F2] font-semibold"
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}
