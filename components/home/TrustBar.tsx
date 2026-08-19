"use client";

import React from "react";
import { ShieldCheck, Award, Lock, FileText, CheckCircle, HeartHandshake } from "lucide-react";

export function TrustBar() {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "Fair Housing Act",
      subtitle: "100% HUD Compliant Letters",
    },
    {
      icon: Award,
      title: "50-State LMHPs",
      subtitle: "Licensed Mental Health Pros",
    },
    {
      icon: HeartHandshake,
      title: "100% Money-Back",
      subtitle: "Risk-Free If Not Approved",
    },
    {
      icon: Lock,
      title: "HIPAA Compliant",
      subtitle: "256-Bit Data Encryption",
    },
    {
      icon: FileText,
      title: "Landlord Verification",
      subtitle: "Direct Clinical Phone Support",
    },
  ];

  return (
    <section className="bg-white border-y border-slate-200/80 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 items-center">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E6F3F0] text-[#0F5B4C] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-slate-900 leading-tight">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
