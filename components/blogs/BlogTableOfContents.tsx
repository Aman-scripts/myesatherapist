"use client";

import React, { useEffect, useState } from "react";

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
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
    <aside className="w-full lg:w-[320px] xl:w-[382px] shrink-0 sticky top-[80px] lg:top-[90px] xl:top-[95px] z-20 self-start">
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
  );
}
