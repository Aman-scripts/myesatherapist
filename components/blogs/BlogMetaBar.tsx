"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AUTHORS, REVIEWERS } from "@/data/contributorsData";

// Profile page for each known author/reviewer, looked up by display name.
const PROFILE_HREF: Record<string, string> = Object.fromEntries(
  [...AUTHORS, ...REVIEWERS].map((p) => [p.name, p.href]),
);

function toIsoDate(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return parsed.toISOString().slice(0, 10);
}

interface BlogMetaBarProps {
  authorName?: string;
  authorRole?: string;
  authorCredentials?: string;
  authorImage?: string;
  publishDate?: string;
  lastUpdated?: string;
  reviewerName?: string;
  reviewerRole?: string;
  reviewerCredentials?: string;
  reviewerImage?: string;
  reviewerLinkedin?: string;
}

export function BlogMetaBar({
  authorName = "Allyson Valley",
  authorRole = "Written by",
  authorCredentials = "Licensed Clinical Social Worker",
  authorImage = "/blogs/blogs_trustbar-author.webp",
  publishDate = "June 19, 2026",
  lastUpdated = "June 19, 2026",
  reviewerName = "Max Phillips",
  reviewerRole = "Medically Reviewed by",
  reviewerCredentials = "MSW, LCSW",
  reviewerImage = "/blogs/blogs_medical_reviewer.webp",
  reviewerLinkedin,
}: BlogMetaBarProps = {}) {
  const authorHref = PROFILE_HREF[authorName] ?? "#about-the-author";
  const reviewerHref = PROFILE_HREF[reviewerName];
  return (
    <div className="w-full max-w-[360px] sm:max-w-[460px] md:max-w-[1069px] mx-auto bg-white rounded-[22px] shadow-[0px_1px_4px_rgba(0,0,0,0.15)] border border-[#EAE5DC]/60 p-4 sm:p-5 md:py-[22px] md:px-[27px] relative z-20">
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between divide-y divide-[#EAE5DC]/70 md:divide-y-0 gap-0 md:gap-4 lg:gap-6">
        
        {/* 1. Written By */}
        <div className="flex items-center gap-3.5 sm:gap-4 md:gap-3.5 lg:gap-4 flex-1 min-w-0 justify-start py-3 first:pt-0 md:py-0">
          <div className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] md:w-[68px] md:h-[68px] lg:w-[77px] lg:h-[77px] rounded-full overflow-hidden shrink-0 relative shadow-xs border border-[#EAE5DC]/60">
            <Image
              quality={90}
              src={authorImage}
              alt={authorName}
              fill
              priority
              className="object-cover"
              sizes="77px"
            />
          </div>
          <div className="flex flex-col items-start min-w-0">
            <span className="body-large text-primary leading-tight">
              {authorRole}
            </span>
            <Link
              href={authorHref}
              className="body-text font-bold text-transparent bg-clip-text color-gradient underline hover:opacity-80 transition-opacity whitespace-nowrap mt-0.5"
            >
              {authorName}
            </Link>
            <span className="body-small text-body-text leading-tight whitespace-nowrap mt-0.5">
              {authorCredentials}
            </span>
          </div>
        </div>

        {/* Desktop Divider 1 */}
        <div className="hidden md:block w-[1px] h-[48px] lg:h-[57px] bg-[#5F6B6F]/30 shrink-0 mx-1 md:mx-2 lg:mx-3" />

        {/* 2. Published */}
        <div className="flex items-center gap-3.5 sm:gap-4 md:gap-3.5 lg:gap-4 flex-1 min-w-0 justify-start py-3 md:py-0">
          <div className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] md:w-[68px] md:h-[68px] lg:w-[77px] lg:h-[77px] shrink-0 relative flex items-center justify-center">
            <Image
              quality={90}
              src="/blogs/blogs_trustbar-publish.webp"
              alt="Calendar Icon"
              fill
              priority
              className="object-contain"
              sizes="77px"
            />
          </div>
          <div className="flex flex-col items-start min-w-0">
            <span className="body-large text-primary leading-tight">
              Published
            </span>
            <time
              dateTime={toIsoDate(publishDate)}
              className="body-text font-bold text-transparent bg-clip-text color-gradient whitespace-nowrap mt-0.5"
            >
              {publishDate}
            </time>
            <span className="body-small text-body-text leading-tight whitespace-nowrap mt-0.5">
              Last updated:{" "}
              <time dateTime={toIsoDate(lastUpdated)}>{lastUpdated}</time>
            </span>
          </div>
        </div>

        {/* Desktop Divider 2 */}
        <div className="hidden md:block w-[1px] h-[48px] lg:h-[57px] bg-[#5F6B6F]/30 shrink-0 mx-1 md:mx-2 lg:mx-3" />

        {/* 3. Reviewer */}
        <div className="flex items-center gap-3.5 sm:gap-4 md:gap-3.5 lg:gap-4 flex-1 min-w-0 justify-start py-3 last:pb-0 md:py-0">
          <div className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] md:w-[68px] md:h-[68px] lg:w-[77px] lg:h-[77px] rounded-full overflow-hidden shrink-0 relative shadow-xs border border-[#EAE5DC]/60">
            <Image
              quality={90}
              src={reviewerImage}
              alt={reviewerName}
              fill
              priority
              className="object-cover"
              sizes="77px"
            />
          </div>
          <div className="flex flex-col items-start min-w-0">
            <span className="body-large text-primary leading-tight">
              {reviewerRole}
            </span>
            {reviewerHref ? (
              <Link
                href={reviewerHref}
                className="body-text font-bold text-transparent bg-clip-text color-gradient underline hover:opacity-80 transition-opacity whitespace-nowrap mt-0.5"
              >
                {reviewerName}
              </Link>
            ) : reviewerLinkedin ? (
              <a
                href={reviewerLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="body-text font-bold text-transparent bg-clip-text color-gradient underline hover:opacity-80 transition-opacity whitespace-nowrap mt-0.5"
              >
                {reviewerName}
              </a>
            ) : (
              <span className="body-text font-bold text-transparent bg-clip-text color-gradient underline whitespace-nowrap mt-0.5">
                {reviewerName}
              </span>
            )}
            <span className="body-small text-body-text leading-tight whitespace-nowrap mt-0.5">
              {reviewerCredentials}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
