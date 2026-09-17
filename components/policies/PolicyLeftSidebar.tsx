"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ALL_POLICIES_LIST, PolicyDocument } from "@/data/policiesData";

interface PolicyLeftSidebarProps {
  currentSlug: string;
  policy: PolicyDocument;
}

export function PolicyLeftSidebar({ currentSlug, policy }: PolicyLeftSidebarProps) {
  const [activeSectionId, setActiveSectionId] = useState<string>("");

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

    policy.tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [policy]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <aside
      className="w-full lg:sticky lg:top-[148px] space-y-6 self-start [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden no-scrollbar"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >

      {/* 1. Table of Contents (On this page) */}
      {policy.tocItems && policy.tocItems.length > 0 && (
        <div
          className="bg-white border border-[#EAE5DC] rounded-[20px] p-5 sm:p-6 shadow-xs max-h-[460px] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <p className="font-sans text-xs font-bold uppercase tracking-wider text-[#7C8B8E] mb-3.5 px-1">
            On this page
          </p>
          <nav aria-label="Table of contents" className="space-y-1">
            {policy.tocItems.map((item) => {
              const isActive = activeSectionId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
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
                href={`/policies/${item.slug}/`}
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
  );
}
