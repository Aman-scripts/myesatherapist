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
    <div className="w-full bg-background min-h-screen selection:bg-accent/30 selection:text-current">
      <PolicyHero policy={policy} />

      <main className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-start">
          <PolicyLeftSidebar currentSlug={policy.slug} policy={policy} />

          <div className="w-full min-w-0">
            <PolicyContent policy={policy} />
          </div>
        </div>
      </main>

      <CtaBanner
        bgColor="bg-background"
        title="Ready to Start Your ESA Evaluation?"
        description="If you believe an Emotional Support Animal may be appropriate for your situation, you can begin a professional evaluation today."
        buttonText="Start Your Evaluation"
        buttonHref="/pricing/"
      />
    </div>
  );
}
