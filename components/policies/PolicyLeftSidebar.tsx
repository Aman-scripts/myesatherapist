"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, X } from "lucide-react";
import { ALL_POLICIES_LIST, PolicyDocument } from "@/data/policiesData";

interface PolicyLeftSidebarProps {
  currentSlug: string;
  policy: PolicyDocument;
}

export function PolicyLeftSidebar({ currentSlug, policy }: PolicyLeftSidebarProps) {
  const [activeSectionId, setActiveSectionId] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when mobile drawer is open
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

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // IntersectionObserver to track active section while scrolling
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    policy.tocItems?.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [policy]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string, closeDrawer = false) => {
    e.preventDefault();
    if (closeDrawer) {
      setIsOpen(false);
    }

    const performScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -148;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        setActiveSectionId(id);
        history.replaceState(null, "", `#${id}`);
      }
    };

    if (closeDrawer) {
      setTimeout(performScroll, 150);
    } else {
      performScroll();
    }
  };

  return (
    <>
      {/* ---------------------------------------------------- */}
      {/* 1. DESKTOP VIEW (>= 1024px)                          */}
      {/* Sticky sidebar with TOC and All Policies cards       */}
      {/* ---------------------------------------------------- */}
      <aside
        className="hidden lg:block w-full lg:sticky lg:top-[148px] space-y-6 self-start max-h-[calc(100dvh-165px)] overflow-y-auto overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* 1. Table of Contents (On this page) */}
        {policy.tocItems && policy.tocItems.length > 0 && (
          <div className="bg-white border border-[#EAE5DC] rounded-[20px] shadow-xs flex flex-col overflow-hidden">
            {/* Fixed Header: ON THIS PAGE (does not scroll away) */}
            <div className="px-5 pt-5 pb-3 sm:px-6 sm:pt-6 sm:pb-3 border-b border-[#EAE5DC]/60 bg-white shrink-0">
              <p className="font-sans text-xs font-bold uppercase tracking-wider text-[#7C8B8E] px-1">
                On this page
              </p>
            </div>

            {/* Scrollable navigation links */}
            <nav
              aria-label="Table of contents"
              className="p-3.5 sm:p-4 space-y-1 max-h-[340px] overflow-y-auto overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden no-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {policy.tocItems.map((item) => {
                const isActive = activeSectionId === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id, false)}
                    className={`group flex items-start gap-2.5 px-2.5 py-2 rounded-lg text-xs sm:text-[13px] leading-snug transition-all font-sans ${
                      isActive
                        ? "text-[#2E5A66] font-bold bg-[#FAF7F2]"
                        : "font-medium text-[#5F6B6F] hover:text-[#2E5A66] hover:bg-[#FAF7F2]"
                    }`}
                  >
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 transition-all ${
                        isActive ? "bg-[#E8B92C] scale-125" : "bg-[#DECDBB] group-hover:bg-[#2E5A66]"
                      }`}
                    />
                    <span className="line-clamp-2">{item.label}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        )}

        {/* 2. All Policies Menu Card */}
        <div className="bg-white border border-[#EAE5DC] rounded-[20px] p-5 sm:p-6 shadow-xs">
          <p className="font-sans text-xs font-bold uppercase tracking-wider text-[#7C8B8E] mb-3.5 px-1">
            All Policies
          </p>
          <nav aria-label="Legal policies navigation" className="space-y-1.5">
            {ALL_POLICIES_LIST.map((item) => {
              const isActive = item.slug === currentSlug;
              return (
                <Link
                  key={item.slug}
                  href={item.href}
                  className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-[13.5px] transition-all font-sans ${
                    isActive
                      ? "bg-[#FAF7F2] text-[#2E5A66] font-bold border-l-[3.5px] border-[#E8B92C] shadow-2xs pl-3"
                      : "font-semibold text-[#5F6B6F] hover:bg-[#FAF7F2] hover:text-[#2E5A66]"
                  }`}
                >
                  <span>{item.label}</span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform ${
                      isActive
                        ? "text-[#2E5A66] translate-x-0.5"
                        : "text-[#DECDBB] group-hover:text-[#2E5A66] group-hover:translate-x-0.5"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* ---------------------------------------------------- */}
      {/* 2. TABLET & MOBILE TRIGGER + PORTAL DRAWER (< 1024px) */}
      {/* ---------------------------------------------------- */}
      {mounted &&
        createPortal(
          <>
            {/* Floating half-circle toggle button on left edge */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open Policy Navigation & Table of Contents"
              className="lg:hidden fixed left-0 top-[50%] -translate-y-1/2 z-[80] w-[34px] sm:w-[40px] h-[64px] sm:h-[76px] rounded-r-full shadow-[2px_4px_16px_rgba(26,61,79,0.45)] flex items-center justify-center pl-0.5 text-white transition-all hover:w-[44px] active:scale-95 group cursor-pointer"
              style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#FAF7F2] stroke-[2.5] group-hover:translate-x-0.5 group-hover:text-[#E8B92C] transition-all" />
            </button>

            {/* Slide-out Drawer & Backdrop */}
            <div
              className={`fixed inset-0 z-[99999] h-[100dvh] max-h-[100dvh] flex transition-all duration-300 ${
                isOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
              }`}
              role="dialog"
              aria-modal="true"
            >
              {/* Backdrop Overlay with smooth fade */}
              <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-in-out touch-none ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Sliding Content Panel with smooth transform */}
              <div
                className={`relative w-[320px] sm:w-[360px] md:w-[382px] h-[100dvh] max-h-[100dvh] overflow-hidden z-[100000] text-[#FAF7F2] shadow-2xl flex flex-col justify-start transition-transform duration-300 ease-out transform ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
                style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
              >
                {/* Fixed Top Header (Logo Card + Close Button + Divider + Title) */}
                <div className="shrink-0 px-6 sm:px-8 pt-8 sm:pt-10">
                  <div className="flex items-start justify-between mb-5">
                    {/* Logo Card with Gold Border */}
                    <div className="w-[170px] sm:w-[190px] h-[74px] sm:h-[81.5px] bg-white border-[4.5px] border-[#E8B92C] rounded-[8px] flex items-center justify-center p-2.5 shadow-md">
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
                      aria-label="Close Sidebar"
                    >
                      <X className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#FAF7F2] stroke-[2.2]" />
                    </button>
                  </div>

                  {/* Divider Line */}
                  <div className="w-full h-[0.5px] bg-white/30 mb-4" />

                  {/* Fixed Title Section: Table of Contents & On this page */}
                  <div className="space-y-1 pb-3">
                    <h2 className="font-heading text-2xl sm:text-[28px] font-bold text-[#FAF7F2] leading-tight tracking-[-0.00015em]">
                      Table of Contents
                    </h2>
                    <p className="font-sans text-xs font-bold uppercase tracking-wider text-[#E8B92C]">
                      On this page
                    </p>
                  </div>
                </div>

                {/* Scrollable Navigation Sections */}
                <div
                  className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-6 sm:px-8 pt-1 pb-14 space-y-7 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                    touchAction: "pan-y",
                    overscrollBehavior: "contain",
                  }}
                  onTouchMove={(e) => e.stopPropagation()}
                >
                  {/* 1. Table of Contents Links (On this page) */}
                  {policy.tocItems && policy.tocItems.length > 0 && (
                    <ul className="space-y-3.5 font-sans">
                        {policy.tocItems.map((item) => {
                          const isActive = activeSectionId === item.id;
                          return (
                            <li key={item.id} className="flex items-start gap-2.5">
                              <span
                                className={`text-base leading-none mt-1 ${
                                  isActive ? "text-[#E8B92C]" : "text-white/60"
                                }`}
                              >
                                •
                              </span>
                              <a
                                href={`#${item.id}`}
                                onClick={(e) => scrollToSection(e, item.id, true)}
                                className={`text-xs sm:text-[14px] leading-snug transition-all ${
                                  isActive
                                    ? "text-[#E8B92C] font-bold"
                                    : "text-[#FAF7F2] font-medium hover:text-[#E8B92C]"
                                }`}
                              >
                                {item.label}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                  )}

                  {/* Divider */}
                  <div className="w-full h-[0.5px] bg-white/20" />

                  {/* 2. All Policies Navigation */}
                  <div className="space-y-3">
                    <p className="font-sans text-xs font-bold uppercase tracking-wider text-[#E8B92C]">
                      All Policies
                    </p>
                    <nav className="space-y-1.5 font-sans">
                      {ALL_POLICIES_LIST.map((item) => {
                        const isActive = item.slug === currentSlug;
                        return (
                          <Link
                            key={item.slug}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-[13.5px] transition-all ${
                              isActive
                                ? "bg-white/20 text-[#E8B92C] font-bold border-l-[3.5px] border-[#E8B92C]"
                                : "text-[#FAF7F2]/80 font-semibold hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            <span>{item.label}</span>
                            <ChevronRight
                              className={`w-4 h-4 transition-transform ${
                                isActive ? "text-[#E8B92C] translate-x-0.5" : "text-white/40"
                              }`}
                            />
                          </Link>
                        );
                      })}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
}
