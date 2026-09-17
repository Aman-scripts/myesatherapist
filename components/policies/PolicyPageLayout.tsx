import React from "react";
import { PolicyDocument } from "@/data/policiesData";
import { PolicyHero } from "./PolicyHero";
import { PolicyLeftSidebar } from "./PolicyLeftSidebar";
import { PolicyContent } from "./PolicyContent";
import { PolicyRightSidebar } from "./PolicyRightSidebar";
import { PolicyCtaBanner } from "./PolicyCtaBanner";

interface PolicyPageLayoutProps {
  policy: PolicyDocument;
}

export function PolicyPageLayout({ policy }: PolicyPageLayoutProps) {
  return (
    <div className="w-full bg-[#FDFBF7] min-h-screen">
      {/* 1. Hero Section */}
      <PolicyHero policy={policy} />

      {/* 2. Main 3-Column Layout (Matching Ongo LegalPage_mainLayout) */}
      <main className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] xl:grid-cols-[260px_1fr_280px] gap-8 lg:gap-10 items-start">
          {/* Left Sticky Sidebar: All Policies & TOC */}
          <PolicyLeftSidebar currentSlug={policy.slug} policy={policy} />

          {/* Center Main Content Area */}
          <div className="w-full min-w-0">
            <PolicyContent policy={policy} />
          </div>

          {/* Right Sticky Sidebar: Resources & Support (Visible on XL screens, or stacked below) */}
          <div className="w-full lg:col-span-2 xl:col-span-1">
            <PolicyRightSidebar />
          </div>
        </div>
      </main>

      {/* 3. Pre-footer CTA */}
      <PolicyCtaBanner />
    </div>
  );
}
