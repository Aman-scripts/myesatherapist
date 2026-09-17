import React from "react";
import { PolicyDocument } from "@/data/policiesData";
import { PolicyHero } from "./PolicyHero";
import { PolicyLeftSidebar } from "./PolicyLeftSidebar";
import { PolicyContent } from "./PolicyContent";
import { PolicyCtaBanner } from "./PolicyCtaBanner";

interface PolicyPageLayoutProps {
  policy: PolicyDocument;
}

export function PolicyPageLayout({ policy }: PolicyPageLayoutProps) {
  return (
    <div className="w-full bg-[#FDFBF7] min-h-screen">
      {/* 1. Hero Section */}
      <PolicyHero policy={policy} />

      {/* 2. Main 2-Column Layout (Left sticky navigation + expanded main content) */}
      <main className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-start">
          {/* Left Sticky Sidebar: All Policies & TOC */}
          <PolicyLeftSidebar currentSlug={policy.slug} policy={policy} />

          {/* Expanded Main Content Area */}
          <div className="w-full min-w-0">
            <PolicyContent policy={policy} />
          </div>
        </div>
      </main>

      {/* 3. Pre-footer CTA */}
      <PolicyCtaBanner />
    </div>
  );
}
