"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogArticle } from "@/data/blogsData";
import { CtaButton } from "@/components/common/CtaButton";

export interface BlogCardProps {
  article: BlogArticle;
  priority?: boolean;
}

export function BlogCard({ article, priority = false }: BlogCardProps) {
  const authorDisplayName = article.author?.name
    ? article.author.name.replace(/,\s*(Ph\.?D\.?|LPC|MSW|LCSW|LMFT|MD).*/i, "")
    : "Dr. Marcus";

  return (
    <article className="w-full max-w-[411px] h-[626px] bg-white rounded-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col items-center justify-between pb-[24px] group hover:shadow-lg transition-all duration-300">
      {/* Card Image: 411px x 317px (rounded-t-[20px]) */}
      <Link
        href={article.url}
        className="w-full h-[317px] relative overflow-hidden block shrink-0 cursor-pointer rounded-t-[20px] bg-background"
      >
        <Image
          src={article.cardImage || "/blogs/blog_cards.webp"}
          alt={article.title}
          fill
          quality={75}
          loading={priority ? "eager" : "lazy"}
          className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-[20px]"
          sizes="(max-width: 639px) 380px, (max-width: 1023px) 50vw, 411px"
        />
      </Link>

      {/* Content Frame: 374px width, gap 15px, flex-1 flex flex-col justify-between pt-[20px] */}
      <div className="w-[374px] max-w-[calc(100%-36px)] flex-1 flex flex-col justify-between pt-[20px]">
        {/* Heading: 108px max height with inline author matching Figma Frame 1000011908 */}
        <div className="h-[108px] overflow-hidden">
          <Link
            href={article.url}
            className="block group-hover:text-[#1D6E72] transition-colors"
          >
            <h3 className="heading-h3 text-primary text-[26px] sm:text-[28px] leading-[34px] sm:leading-[36px] tracking-[-0.0003em] line-clamp-3">
              {article.title}{" "}
              {authorDisplayName && (
                <span className="font-sans font-medium text-[15px] sm:text-[16px] leading-[24px] text-[#69777C] whitespace-nowrap ml-1.5 normal-case tracking-normal inline-block align-baseline font-normal">
                  by {authorDisplayName}
                </span>
              )}
            </h3>
          </Link>
        </div>

        {/* Excerpt: 78px height */}
        <div className="h-[78px] overflow-hidden">
          <p className="body-text text-[#475467] line-clamp-3">
            {article.shortDescription}
          </p>
        </div>

        {/* Action Button: Read More (171px x 48px) */}
        <div className="pt-1">
          <CtaButton
            href={article.url}
            variant="accent"
            showIcon={false}
            className="w-[171px] !h-[48px] justify-center px-6 text-[16px] leading-[26px] font-semibold"
          >
            Read More
          </CtaButton>
        </div>
      </div>
    </article>
  );
}
