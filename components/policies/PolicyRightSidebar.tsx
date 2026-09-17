import React from "react";
import Link from "next/link";

export function PolicyRightSidebar() {
  const resourceLinks = [
    {
      title: "ESA Letter Online",
      desc: "Fast clinical evaluations",
      href: "/esa-letter-online/",
      icon: (
        <svg className="w-4 h-4 text-[#EFBF2F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      title: "ESA Letter for Housing",
      desc: "FHA legal protections",
      href: "/esa-letter-for-housing/",
      icon: (
        <svg className="w-4 h-4 text-[#EFBF2F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      title: "Meet Our Therapists",
      desc: "State-licensed clinicians",
      href: "/esa-doctors/",
      icon: (
        <svg className="w-4 h-4 text-[#EFBF2F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Frequently Asked Questions",
      desc: "Answers to common queries",
      href: "/faq/",
      icon: (
        <svg className="w-4 h-4 text-[#EFBF2F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
    },
  ];

  return (
    <aside className="w-full lg:sticky lg:top-24 space-y-6 self-start">
      {/* 1. Resources Box */}
      <div className="bg-white border border-[#EAE5DC] rounded-[20px] p-5 shadow-xs">
        <div className="flex items-center justify-between mb-4 px-1">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#7C8B8E]">
            Explore more
          </p>
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E4EFEC] text-[#2E5A66]">
            Resources
          </span>
        </div>

        <div className="space-y-2.5">
          {resourceLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group flex items-start gap-3 p-2.5 rounded-xl border border-transparent hover:border-[#EAE5DC] hover:bg-[#FDFBF7] transition-all"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FEF8EC] border border-[#EFBF2F]/30 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-[13px] font-bold text-[#2E5A66] group-hover:text-[#EFBF2F] transition-colors truncate">
                  {item.title}
                </p>
                <p className="text-[11px] text-[#5F6B6F] font-normal truncate mt-0.5">
                  {item.desc}
                </p>
              </div>
              <svg
                className="w-3.5 h-3.5 text-[#DECDBB] group-hover:text-[#2E5A66] group-hover:translate-x-0.5 transition-all mt-1 shrink-0"
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
          ))}
        </div>
      </div>

      {/* 2. Need clarification / Doubts Box */}
      <div className="relative overflow-hidden rounded-[20px] border border-[#DECDBB] bg-gradient-to-br from-[#FEF8EC] via-[#FFFDF8] to-[#F7F4EE] p-5 sm:p-6 shadow-xs">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EFBF2F]/20 text-[#B9852E]">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </div>
          <h3 className="font-heading text-base font-bold text-[#2E5A66]">
            Need clarification?
          </h3>
        </div>

        <p className="text-xs sm:text-[13px] text-[#5F6B6F] font-sans leading-relaxed mb-4">
          Our clinical compliance and care team is available to explain any terms or details within this document.
        </p>

        <Link
          href="/pricing/"
          className="w-full flex items-center justify-center gap-2 rounded-full bg-[#2E5A66] hover:bg-[#163038] text-white py-2.5 px-4 text-xs font-bold tracking-wide uppercase shadow-sm transition-all mb-3 text-center"
        >
          <span>Start Your Evaluation</span>
          <svg className="w-3.5 h-3.5 text-[#EFBF2F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>

        <div className="pt-3 border-t border-[#DECDBB]/50 flex items-center justify-between text-xs text-[#5F6B6F]">
          <span className="font-medium">Direct Line:</span>
          <a
            href="tel:+18884124041"
            className="font-bold text-[#2E5A66] hover:text-[#EFBF2F] transition-colors"
          >
            +1 (888) 412-4041
          </a>
        </div>
      </div>
    </aside>
  );
}
