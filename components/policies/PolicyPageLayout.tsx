import React from "react";
import { PolicyDocument } from "@/data/policiesData";
import { PolicyHero } from "./PolicyHero";
import { PolicyLeftSidebar } from "./PolicyLeftSidebar";
import { PolicyContent } from "./PolicyContent";
import { CtaBanner } from "@/components/home/CtaBanner";

interface PolicyPageLayoutProps {
  policy: PolicyDocument;
}

export function PolicyPageLayout({ policy }: PolicyPageLayoutProps) {
  return (
    <div className="w-full bg-[#FAF7F2] min-h-screen text-slate-900 selection:bg-[#E8B92C]/30 selection:text-[#1E3E47]">
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

      {/* 3. Official Project Pre-Footer CTA Banner */}
      <CtaBanner
        bgColor="bg-[#FAF7F2]"
        title="Ready to Start Your ESA Evaluation?"
        description="If you believe an Emotional Support Animal may be appropriate for your situation, you can begin a professional evaluation today."
        buttonText="Start your Evaluation"
        buttonHref="/pricing/"
        className="pb-14 sm:pb-20 lg:pb-28"
      />
    </div>
  );
}
