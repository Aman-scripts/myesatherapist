"use client";

import React from "react";
import { Check, X, HelpCircle, Shield, Plane, Home, Sparkles } from "lucide-react";

export function ComparisonTable() {
  const comparisonRows = [
    {
      feature: "Protected in Housing (Fair Housing Act)",
      esa: true,
      psd: true,
      pet: false,
      info: "Landlords must legally accommodate without pet fees or restrictions",
    },
    {
      feature: "Exempt from Pet Deposit & Monthly Pet Rent",
      esa: true,
      psd: true,
      pet: false,
      info: "Saves $1,000 to $2,500+ every year in rental housing fees",
    },
    {
      feature: "Bypasses 'No Pet' Policies & Breed/Weight Caps",
      esa: true,
      psd: true,
      pet: false,
      info: "Applies to all apartments, rental homes, condos, and HOAs",
    },
    {
      feature: "Free Airplane Cabin Access (DOT Air Carrier Access Act)",
      esa: false,
      psd: true,
      pet: false,
      info: "PSDs fly free in cabin with owner under DOT service dog rules",
    },
    {
      feature: "Full Public Access (Restaurants, Stores, Malls under ADA)",
      esa: false,
      psd: true,
      pet: false,
      info: "PSDs have full ADA Title III public access rights anywhere",
    },
    {
      feature: "Specialized Task Training Required?",
      esa: false, // "No training needed" - this is an advantage for ESA
      psd: true, // "Trained for psychiatric tasks"
      pet: false,
      isSpecialNote: true,
      esaLabel: "No Training Required",
      psdLabel: "Trained for Tasks",
      petLabel: "No",
    },
    {
      feature: "Licensed Mental Health Professional Letter Required?",
      esa: true,
      psd: true,
      pet: false,
      info: "Official diagnosis and prescription letter signed by licensed clinician",
    },
    {
      feature: "Any Pet Species Allowed (Dogs, Cats, Birds, etc.)",
      esa: true,
      psd: false, // (PSDs are dogs)
      pet: true,
      info: "ESAs can be dogs, cats, rabbits, birds, etc. PSDs must be dogs",
    },
  ];

  return (
    <section id="psd" className="py-20 lg:py-28 bg-[#FBF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E6F3F0] text-[#0F5B4C] text-xs font-bold uppercase tracking-wider">
            Legal Rights Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            ESA vs Psychiatric Service Dog vs Pet
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Compare the legal protections under federal laws (FHA, ADA, and ACAA) to pick the exact letter you need.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70">
                  <th className="p-6 text-sm font-bold text-slate-900 w-2/5">
                    Rights & Protections
                  </th>
                  <th className="p-6 text-center w-1/5 bg-emerald-50/70 border-x border-emerald-100">
                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#0F5B4C] text-white text-[10px] font-bold uppercase tracking-wider mb-1">
                      Most Popular
                    </div>
                    <div className="text-base font-extrabold text-[#0F5B4C]">
                      ESA Letter
                    </div>
                    <div className="text-xs text-emerald-800 font-medium">Housing Protection</div>
                  </th>
                  <th className="p-6 text-center w-1/5 bg-amber-50/50">
                    <div className="text-base font-extrabold text-amber-900">
                      PSD Letter
                    </div>
                    <div className="text-xs text-amber-800 font-medium">Housing + Travel + Public</div>
                  </th>
                  <th className="p-6 text-center w-1/5 text-slate-500">
                    <div className="text-base font-bold text-slate-700">
                      Standard Pet
                    </div>
                    <div className="text-xs text-slate-500">No Legal Protection</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="p-5 font-medium text-slate-800">
                      <div className="font-semibold text-slate-900">{row.feature}</div>
                      {row.info && (
                        <div className="text-xs text-slate-500 mt-0.5">{row.info}</div>
                      )}
                    </td>

                    {/* ESA Column */}
                    <td className="p-5 text-center bg-emerald-50/30 border-x border-emerald-100 font-medium">
                      {row.isSpecialNote ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full">
                          {row.esaLabel}
                        </span>
                      ) : row.esa ? (
                        <div className="w-7 h-7 rounded-full bg-[#0F5B4C] text-white flex items-center justify-center mx-auto shadow-xs">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center mx-auto">
                          <X className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </td>

                    {/* PSD Column */}
                    <td className="p-5 text-center bg-amber-50/20 font-medium">
                      {row.isSpecialNote ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-900 bg-amber-100 px-2.5 py-1 rounded-full">
                          {row.psdLabel}
                        </span>
                      ) : row.psd ? (
                        <div className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center mx-auto shadow-xs">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center mx-auto">
                          <X className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </td>

                    {/* Pet Column */}
                    <td className="p-5 text-center text-slate-500">
                      {row.isSpecialNote ? (
                        <span className="text-xs text-slate-500 font-medium">{row.petLabel}</span>
                      ) : row.pet ? (
                        <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center mx-auto">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                          <X className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Callout inside matrix */}
          <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="text-sm text-slate-700">
              <strong className="text-slate-900">Not sure which one you need?</strong> Take our free 2-minute pre-screening to find out in seconds.
            </div>
            <a
              href="#pricing"
              className="px-6 py-2.5 rounded-xl bg-[#0F5B4C] hover:bg-[#0A3E34] text-white font-bold text-sm shadow-sm transition-colors shrink-0"
            >
              Choose Your Package
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
