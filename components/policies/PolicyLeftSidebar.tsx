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
    <aside className="w-full lg:sticky lg:top-24 space-y-6 self-start">
      {/* Scroll Hint */}
      <div className="hidden lg:flex items-center gap-2.5 text-xs font-semibold text-[#5F6B6F] px-1">
        <span className="flex h-5 w-3.5 items-center justify-center rounded-full border border-[#2E5A66]/40 p-0.5">
          <span className="h-1.5 w-1 rounded-full bg-[#2E5A66] animate-bounce" />
        </span>
        <span className="tracking-wide uppercase text-[11px] text-[#7C8B8E]">Scroll to explore</span>
      </div>

      {/* 1. All Policies Menu Card */}
      <div className="bg-white border border-[#EAE5DC] rounded-[20px] p-5 shadow-xs">
        <p className="text-[11px] font-bold uppercase tracking-wider text-[#7C8B8E] mb-3 px-1">
          All Policies
        </p>
        <nav aria-label="Legal policies navigation" className="space-y-1">
          {ALL_POLICIES_LIST.map((item) => {
            const isActive = item.slug === currentSlug;
            return (
              <Link
                key={item.slug}
                href={`/policies/${item.slug}/`}
                className={`group flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-[13px] font-medium transition-all ${
                  isActive
                    ? "bg-[#E4EFEC] text-[#2E5A66] font-semibold shadow-2xs"
                    : "text-[#5F6B6F] hover:bg-[#F7F4EE] hover:text-[#2E5A66]"
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

      {/* 2. Table of Contents (On this page) */}
      {policy.tocItems && policy.tocItems.length > 0 && (
        <div className="bg-white border border-[#EAE5DC] rounded-[20px] p-5 shadow-xs max-h-[500px] overflow-y-auto scrollbar-thin">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#7C8B8E] mb-3 px-1">
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
                  className={`group flex items-start gap-2.5 px-2.5 py-1.5 rounded-lg text-xs leading-snug transition-all ${
                    isActive
                      ? "text-[#2E5A66] font-bold bg-[#FEF8EC]"
                      : "text-[#5F6B6F] hover:text-[#2E5A66] hover:bg-[#FDFBF7]"
                  }`}
                >
                  <span
                    className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 transition-colors ${
                      isActive ? "bg-[#EFBF2F] scale-125" : "bg-[#DECDBB] group-hover:bg-[#2E5A66]"
                    }`}
                  />
                  <span className="line-clamp-2">{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </aside>
  );
}
