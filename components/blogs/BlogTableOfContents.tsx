"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronRight } from "lucide-react";

const tocItems = [
  { id: "what-is-a-legitimate-esa-letter", label: "What Makes an ESA Letter Legit?" },
  { id: "why-verification-matters", label: "Why Verification Matters" },
  { id: "tenant-checklist", label: "Tenant Checklist" },
  { id: "landlord-checklist", label: "Landlord Checklist" },
  { id: "common-signs-of-a-fake-esa-letter", label: "Common Signs of a Fake ESA Letter" },
  { id: "ensuring-compliance", label: "Ensuring Compliance" },
  { id: "final-thoughts", label: "Key Takeaways" },
  { id: "faq", label: "FAQs" },
];

export function BlogTableOfContents() {
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

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
      {/* Persistent Left-Aligned Sticky Sidebar               */}
      {/* ---------------------------------------------------- */}
      <aside className="hidden lg:block w-[320px] xl:w-[382px] shrink-0 sticky top-[80px] lg:top-[90px] xl:top-[95px] z-20 self-start">
        <div
          className="rounded-none px-6 sm:px-8 xl:px-[41px] pt-8 sm:pt-10 lg:pt-[75px] xl:pt-[85px] pb-12 sm:pb-16 lg:pb-[100px] xl:pb-[120px] min-h-[650px] lg:min-h-[750px] xl:min-h-[820px] text-[#FAF7F2] flex flex-col justify-start"
          style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
        >
          <h2 className="font-heading text-2xl sm:text-3xl xl:text-[28px] font-bold text-[#FAF7F2] leading-tight mb-5 tracking-[-0.00015em]">
            Table of Contents
          </h2>

          {/* Divider: Line 11 */}
          <div className="w-full h-[1px] bg-white/30 mb-7 lg:mb-8" />

          {/* Links List: Frame 1000011841 */}
          <nav>
            <ul className="space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-[32px]">
              {tocItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id} className="flex items-start gap-2.5">
                    <span className="text-white/70 text-lg leading-none mt-0.5">•</span>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className={`font-sans text-xs sm:text-[14px] leading-[22px] transition-all hover:text-[#E8B92C] ${
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
              style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#FAF7F2] stroke-[2.5] group-hover:translate-x-0.5 group-hover:text-[#E8B92C] transition-all" />
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
              className={`relative w-[295px] sm:w-[382px] h-full max-h-screen overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden z-[100000] text-[#FAF7F2] shadow-2xl flex flex-col justify-start px-6 sm:px-[41px] pt-8 sm:pt-10 pb-12 transition-transform duration-300 ease-out transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
              style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              {/* Drawer Header: Title and Close Button */}
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <h2 className="font-heading text-2xl sm:text-[28px] font-bold text-[#FAF7F2] leading-tight tracking-[-0.00015em]">
                  Table of Contents
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close Table of Contents"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Line 11 Divider */}
              <div className="w-full h-[1px] bg-white/30 mb-6 sm:mb-8" />

              {/* Frame 1000011841: Links List */}
              <nav className="flex-1">
                <ul className="space-y-4 sm:space-y-[32px]">
                  {tocItems.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                      <li key={item.id} className="flex items-start gap-2.5">
                        <span className="text-white/70 text-base sm:text-lg leading-none mt-0.5">•</span>
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => scrollToSection(e, item.id)}
                          className={`font-sans text-sm sm:text-[14px] leading-[22px] sm:leading-[26px] transition-all hover:text-[#E8B92C] ${
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
          </>,
          document.body
        )}
    </>
  );
}
