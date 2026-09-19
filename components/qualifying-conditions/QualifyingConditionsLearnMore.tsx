import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogsData";

const POST_ORDER = ["conditions-that-may-qualify-for-an-esa", "esa-for-anxiety"];

const POSTS = POST_ORDER.map((id) => BLOG_POSTS.find((p) => p.id === id)).filter(
  (p): p is (typeof BLOG_POSTS)[number] => Boolean(p)
);

export function QualifyingConditionsLearnMore() {
  return (
    <section className="w-full bg-[#FAF7F2]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <h2 className="text-center font-heading font-bold text-2xl sm:text-3xl lg:text-[38px] leading-tight text-[#2E5A66]">
          Learn More About ESA Eligibility
        </h2>

        <p className="mt-6 w-full font-sans text-base sm:text-[17px] lg:text-[18px] leading-[26px] sm:leading-[28px] lg:leading-[30px] font-medium text-[#5F6B6F]">
          Understanding whether a mental health condition may support the need for an emotional support animal can help you know what to expect during an ESA evaluation. Eligibility is based on your individual symptoms, functional impact, and the clinical judgment of a licensed mental health professional. Explore these detailed guides to better understand qualifying conditions, DSM-5 criteria, and the ESA evaluation process.
        </p>

        <div className="mt-8 sm:mt-10 mx-auto grid max-w-4xl grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {POSTS.map((art) => (
            <Link
              key={art.id}
              href={art.url}
              className="group flex flex-col rounded-[24px] bg-white border border-[#E4DCCB] p-4 sm:p-[18px] shadow-[0_2px_10px_-2px_rgba(46,90,102,0.08)] hover:shadow-[0_12px_28px_-6px_rgba(46,90,102,0.18)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[18px] bg-[#FAF7F2] shrink-0">
                <Image
                  src={art.cardImage}
                  alt={art.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>

              <div className="flex flex-1 flex-col pt-4 px-1">
                <div className="flex flex-wrap items-center gap-2.5 text-xs font-sans">
                  <span className="rounded-full bg-[#EDE0C8] px-3.5 py-1.5 font-bold text-[#1D5A4E]">
                    {art.category}
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-xl sm:text-[22px] font-bold text-[#1A1A1A] leading-[1.3] line-clamp-3">
                  {art.title}
                </h3>

                <p className="mt-3 font-sans text-sm sm:text-[15px] leading-[26px] text-[#5F6B6F] line-clamp-3">
                  {art.shortDescription}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-[#E4DCCB] pt-4 font-sans">
                  <span className="text-sm text-[#5F6B6F]">{art.publishDate}</span>
                  <span className="inline-flex items-center gap-1.5 font-bold text-sm text-[#1D5A4E]">
                    Read <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
