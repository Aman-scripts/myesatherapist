"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string | React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  category?: string;
}

export function AccordionItem({
  question,
  answer,
  isOpen = false,
  onToggle,
  category,
}: AccordionItemProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-200 overflow-hidden",
        isOpen
          ? "border-[#0F5B4C]/40 bg-white shadow-sm ring-1 ring-[#0F5B4C]/15"
          : "border-slate-200 bg-white/70 hover:bg-white hover:border-slate-300"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3 pr-4">
          {category && (
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0F5B4C] bg-[#E6F3F0] px-2.5 py-1 rounded-full shrink-0">
              {category}
            </span>
          )}
          <span className="font-semibold text-slate-900 text-base md:text-lg">
            {question}
          </span>
        </div>
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300",
            isOpen
              ? "bg-[#0F5B4C] text-white rotate-180"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          )}
        >
          <ChevronDown className="w-4 h-4 stroke-[2.5]" />
        </div>
      </button>

      {isOpen && (
        <div className="px-5 md:px-6 pb-6 pt-1 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100 animate-in fade-in-50 duration-200">
          {typeof answer === "string" ? <p>{answer}</p> : answer}
        </div>
      )}
    </div>
  );
}

interface AccordionProps {
  items: {
    question: string;
    answer: string | React.ReactNode;
    category?: string;
  }[];
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          category={item.category}
          isOpen={openIndexes.includes(index)}
          onToggle={() => toggleIndex(index)}
        />
      ))}
    </div>
  );
}
