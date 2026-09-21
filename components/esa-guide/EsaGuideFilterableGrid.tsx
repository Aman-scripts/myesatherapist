import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blogsData";
import { SectionHeader } from "@/components/common/BlogPageBlocks";

const PREFERRED_ORDER = [
  "how-to-verify-an-esa-letter",
  "is-esa-registration-legit",
  "hud-guidance-for-emotional-support-animals",
  "can-landlords-deny-emotional-support-animals",
  "emotional-support-animal",
  "esa-letter-sample",
  "esa-for-children",
];

const ESA_GUIDE_POSTS = [...BLOG_POSTS.filter(
  (p) => p.categorySlug === "esa-guide" || p.category.toLowerCase() === "esa guide"
)].sort((a, b) => {
  const iA = PREFERRED_ORDER.indexOf(a.id);
  const iB = PREFERRED_ORDER.indexOf(b.id);
  if (iA !== -1 && iB !== -1) return iA - iB;
  if (iA !== -1) return -1;
  if (iB !== -1) return 1;
  return 0;
});

export function EsaGuideFilterableGrid() {
  return (
    <section className="w-full bg-[#FAF7F2]">
      <div className="mx-auto flex w-full max-w-[1288px] flex-col items-center gap-10 px-4 sm:px-8 lg:gap-[3.3vw] lg:px-[5vw] xl:gap-12 xl:px-0">
        <SectionHeader title="Featured Guide" />

        <div className="grid w-full grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-y-12">
          {ESA_GUIDE_POSTS.map((art) => (
            <article
              key={art.id}
              className="group flex flex-col overflow-hidden rounded-[20px] bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.15)] transition-shadow duration-300 hover:shadow-md"
            >
              <Link href={art.url} className="relative block aspect-[410/317] w-full shrink-0 overflow-hidden bg-[#FAF7F2]">
                <Image
                  src={art.cardImage}
                  alt={art.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1280px) 411px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <span className="absolute left-4 top-4 rounded-full border border-[#1D6E72]/20 bg-white/95 px-3 py-1 font-sans text-xs font-bold text-[#1D6E72] shadow-xs">
                  {art.category}
                </span>
              </Link>

              <div className="flex flex-1 flex-col justify-between gap-5 px-[18px] pb-6 pt-6 lg:gap-[1.6vw] lg:px-[1.3vw] lg:pb-[1.9vw] lg:pt-[1.7vw] xl:gap-6 xl:pb-7 xl:pt-6">
                <div className="flex flex-col gap-3.5 lg:gap-[1.1vw] xl:gap-[15px]">
                  <div className="flex flex-col gap-1.5">
                    <Link href={art.url}>
                      <h3 className="line-clamp-3 font-heading text-[22px] font-bold leading-[30px] text-[#2E5A66] transition-colors group-hover:text-[#1D6E72] lg:text-[1.9vw] lg:leading-[2.4vw] xl:text-[24px] xl:leading-8">
                        {art.title}
                      </h3>
                    </Link>
                    <div className="font-sans text-xs font-medium text-[#8E9A9F] sm:text-sm lg:text-[0.95vw] xl:text-sm">
                      by {art.author.name} • {art.publishDate}
                    </div>
                  </div>
                  <p className="line-clamp-3 font-sans text-[15px] font-semibold leading-[26px] text-[#5F6B6F] lg:text-[1.1vw] lg:leading-[1.8vw] xl:text-base xl:leading-[26px]">
                    {art.shortDescription}
                  </p>
                </div>

                <Link
                  href={art.url}
                  className="group/btn inline-flex h-12 w-[171px] items-center justify-between rounded-[30px] pl-6 pr-[3px] font-sans text-base font-semibold text-white shadow-[0px_2px_4px_rgba(0,0,0,0.15)] transition-all hover:opacity-95"
                  style={{ background: "linear-gradient(135deg, #1A3D4F 0%, #1D6E72 100%)" }}
                >
                  <span>Read Guide</span>
                  <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#FAF7F2] shadow-[0px_3px_6px_rgba(0,0,0,0.15)] transition-transform group-hover/btn:scale-105">
                    <Image src="/common/send-icon.svg" alt="" width={22} height={22} className="h-[22px] w-[22px] object-contain" />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
