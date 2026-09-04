"use client";

import { CtaBanner } from "@/components/home/CtaBanner";

export function FaqCtaSection() {
  return (
    <CtaBanner
      title="Ready to Start Your ESA Evaluation?"
      description="If you believe an Emotional Support Animal may be appropriate for your situation, you can begin a professional evaluation today."
      buttonText="Start your Evaluation"
      buttonHref="/pricing"
    />
  );
}

