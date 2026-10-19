"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronRight } from "lucide-react";

const tocItems = [
  { id: "what-makes-an-esa-letter-legit", label: "What Makes an ESA Letter Legit?" },
  { id: "why-verification-matters", label: "Why Verification Matters" },
  { id: "tenant-checklist", label: "Tenant Checklist" },
  { id: "landlord-checklist", label: "Landlord Checklist" },
  { id: "common-signs-of-a-fake-esa-letter", label: "Common Signs of a Fake ESA Letter" },
  { id: "ensuring-compliance", label: "Ensuring Compliance" },
  { id: "key-takeaways", label: "Key Takeaways" },
  { id: "faqs", label: "FAQs" },
];

interface BlogTableOfContentsProps {
  items?: { id: string; label: string }[];
}

export function BlogTableOfContents({ items }: BlogTableOfContentsProps = {}) {
  const currentItems = items && items.length > 0 ? items : tocItems;
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

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

    currentItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 120) {
        if (currentItems.length > 0) {
          setActiveId(currentItems[currentItems.length - 1].id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentItems]);

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

  return (
    <>
      {/* ---------------------------------------------------- */}
      {/* 1. DESKTOP VIEW (>= 1024px)                          */}
      {/* Persistent Left-Aligned Sticky Sidebar: Frame 1000011828 */}
      {/* ---------------------------------------------------- */}
      <aside className="hidden lg:block w-[320px] xl:w-[382px] shrink-0 sticky top-[80px] lg:top-[90px] xl:top-[95px] z-20 self-start lg:-mt-[1px]">
        <div
          className="rounded-none px-6 sm:px-8 xl:px-[41px] pt-10 lg:pt-[115px] xl:pt-[130px] pb-10 min-h-[850px] xl:min-h-[1132px] text-background flex flex-col justify-start"
          style={{ background: "var(--color-gradient)" }}
        >
          {/* Frame 1000011830: Fixed Header with Title & Edge-to-Edge Line 11 Divider */}
          <div className="shrink-0 mb-6 lg:mb-7">
            <h2 className="heading-h2 text-background max-w-[283px] leading-[1.15] mb-5 sm:mb-6">
              Table Of<br />Contents
            </h2>

            {/* Line 11: Full-bleed divider across entire 382px width */}
            <div className="-mx-6 sm:-mx-8 xl:-mx-[41px] h-[1px] bg-white/20" />
          </div>

          {/* Scrollable Links List: Frame 1000011841 */}
          <nav className="w-full">
            <ul className="space-y-3.5 sm:space-y-4 lg:space-y-[16px]">
              {currentItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70 mt-[9px] shrink-0 select-none" />
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className={`body-text transition-colors leading-[26px] ${
                        isActive
                          ? "text-white font-bold"
                          : "text-background/85 hover:text-white font-medium"
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
      </aside>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET & MOBILE TRIGGER + PORTAL DRAWER           */}
      {/* ---------------------------------------------------- */}
      {mounted &&
        createPortal(
          <>
            {/* Floating half-circle toggle button on left edge (z-[80] sits above meta card) */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open Table of Contents"
              className="lg:hidden fixed left-0 top-[55%] sm:top-[50%] -translate-y-1/2 z-[80] w-[34px] sm:w-[40px] h-[64px] sm:h-[76px] rounded-r-full shadow-[2px_4px_16px_rgba(26,61,79,0.45)] flex items-center justify-center pl-0.5 text-white transition-all hover:w-[44px] active:scale-95 group cursor-pointer"
              style={{ background: "var(--color-gradient)" }}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-background stroke-[2.5] group-hover:translate-x-0.5 group-hover:text-accent transition-all" />
            </button>
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

              {/* Sliding Content Panel with smooth transform */}
              <div
                className={`relative w-[320px] sm:w-[360px] md:w-[382px] h-full max-h-screen overflow-hidden z-[100000] text-background shadow-2xl flex flex-col justify-start transition-transform duration-300 ease-out transform ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
                style={{ background: "var(--color-gradient)" }}
              >
                {/* Fixed Top Header (Logo + Close Button + Title + Divider) */}
                <div className="shrink-0 px-6 sm:px-8 pt-8 sm:pt-10">
                  {/* Top Row: Logo Card + Close Button */}
                  <div className="flex items-start justify-between mb-5 sm:mb-6">
                    {/* Frame 1000011910: White Box with Gold Border */}
                    <div className="w-[170px] sm:w-[190px] h-[74px] sm:h-[81.5px] bg-white border-[4.5px] sm:border-[5.54px] border-accent rounded-[8px] flex items-center justify-center p-2.5 shadow-md">
                      <Image
                        quality={90}
                        src="/common/myesa-logo.svg"
                        alt="My ESA Therapist"
                        width={135}
                        height={56}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Close Button */}
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/40 hover:border-white text-white/90 hover:text-white hover:bg-white/10 flex items-center justify-center transition-all cursor-pointer mt-1"
                      aria-label="Close Table of Contents"
                    >
                      <X className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-background stroke-[2.2]" />
                    </button>
                  </div>

                  {/* Heading: Table Of Contents */}
                  <div className="mb-4 sm:mb-5">
                    <h2 className="heading-h2 text-background leading-[1.15]">
                      Table Of<br />Contents
                    </h2>
                  </div>

                  {/* Line 11 Divider (Edge-to-Edge) */}
                  <div className="-mx-6 sm:-mx-8 h-[1px] bg-white/20" />
                </div>

                {/* Scrollable Links List: Frame 1000011841 */}
                <div
                  className="flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-6 sm:px-8 pt-5 sm:pt-6 pb-10"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  <nav>
                    <ul className="space-y-3.5 sm:space-y-4">
                      {currentItems.map((item) => {
                        const isActive = activeId === item.id;
                        return (
                          <li key={item.id} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/70 mt-[9px] shrink-0 select-none" />
                            <a
                              href={`#${item.id}`}
                              onClick={(e) => scrollToSection(e, item.id)}
                              className={`body-text transition-colors leading-[26px] ${
                                isActive
                                  ? "text-white font-bold"
                                  : "text-background/85 hover:text-white font-medium"
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
        )}
    </>
  );
}
