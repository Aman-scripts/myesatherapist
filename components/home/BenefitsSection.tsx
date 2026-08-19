"use client";

import React from "react";
import {
  DollarSign,
  Home,
  ShieldAlert,
  Award,
  RefreshCw,
  PhoneCall,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Eliminate Pet Rent & Deposits",
      description:
        "Under the Fair Housing Act, landlords cannot charge pet fees, pet deposits, or monthly pet rents for approved ESAs. Save $1,000+ to $2,500+ every single year.",
      badge: "Save $1,200+/year",
    },
    {
      icon: Home,
      title: "Live In 'No-Pet' Housing",
      description:
        "Landlords, condo HOAs, and apartment complexes with strict 'No-Pets' rules must legally provide reasonable accommodation for verified emotional support animals.",
      badge: "Federal Law FHA",
    },
    {
      icon: ShieldAlert,
      title: "No Breed or Weight Limits",
      description:
        "Bypass restrictive breed discrimination (like Pitbulls, German Shepherds, Huskies) and weight caps (e.g. under 25 lbs). All gentle companion animals qualify.",
      badge: "All Breeds Protected",
    },
    {
      icon: Award,
      title: "100% State-Licensed LMHPs",
      description:
        "Every evaluation is performed by an actively practicing clinical therapist licensed in your state who meets all HUD guidelines and state telehealth standards.",
      badge: "50-State Network",
    },
    {
      icon: RefreshCw,
      title: "100% Money-Back Guarantee",
      description:
        "If you are not approved for an ESA letter by our licensed clinician during your evaluation, you will receive an immediate 100% full refund. Zero financial risk.",
      badge: "Zero Risk",
    },
    {
      icon: PhoneCall,
      title: "Landlord Verification Included",
      description:
        "If your landlord or property management company requires third-party verification or custom forms, our clinical office handles it directly at no extra charge.",
      badge: "Full Support",
    },
  ];

  return (
    <section id="benefits" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E6F3F0] text-[#0F5B4C] text-xs font-bold uppercase tracking-wider">
            Key ESA Advantages
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Choose My ESA Therapist?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We ensure you receive legitimate documentation with rock-solid legal backing, compassionate clinician care, and continuous housing verification.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="relative bg-[#FBF9F5] rounded-3xl p-8 border border-slate-200/80 hover:bg-white hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#E6F3F0] text-[#0F5B4C] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-emerald-800 bg-white border border-emerald-200 px-3 py-1 rounded-full shadow-xs">
                      {benefit.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0F5B4C] transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-[#0F5B4C]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Guaranteed with official letter</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
