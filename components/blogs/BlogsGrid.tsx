"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blogsData";
import { CtaButton } from "@/components/common/CtaButton";

interface BlogCategorySection {
  id: string;
  categorySlug: string;
  title: string;
  description: string;
  targetCount: number;
  bgColor: "bg-background" | "bg-white";
  pillWidth: string;
}

const BLOG_CATEGORIES: BlogCategorySection[] = [
  {
    id: "esa-guide",
    categorySlug: "esa-guide",
    title: "ESA Guide",
    description:
      "Our ESA Guide category provides detailed information for both new and existing ESA owners. Explore blogs on housing rights, the evaluation process, federal and state laws, emotional support animal letters, common misconceptions, and other important subjects.",
    targetCount: 6,
    bgColor: "bg-background",
    pillWidth: "w-[179px]",
  },
  {
    id: "qualifying-conditions",
    categorySlug: "qualifying-conditions",
    title: "Qualifying Conditions",
    description:
      "Many people wonder whether their mental or emotional health condition may qualify them for an emotional support animal. In this category, you'll find educational articles discussing mental health conditions that may be evaluated by licensed mental health professionals when determining whether an ESA is clinically appropriate.",
    targetCount: 6,
    bgColor: "bg-white",
    pillWidth: "w-[251px]",
  },
  {
    id: "esa-training",
    categorySlug: "esa-training",
    title: "ESA Training",
    description:
      "A well-behaved emotional support animal can make everyday life more comfortable for both you and those around you. This category covers training tips, behavior management, socialization, and practical advice to help your ESA become a calm and well-mannered companion.",
    targetCount: 3,
    bgColor: "bg-background",
    pillWidth: "w-[179px]",
  },
];

// Fallback card templates matching Figma blog.md Frame 1000011907
const PLACEHOLDER_CARDS = [
  {
    id: "esa-vs-service-animal-1",
    url: "/blog/esa-guide/how-to-verify-an-esa-letter/",
    title: "Emotional Support Animal vs. Service Animal: What's the Difference?",
    shortDescription:
      "Explore the key differences between Emotional Support Animals, service animals, and psychiatric service dogs.",
    cardImage: "/blogs/blog_cards.webp",
    authorName: "Dr. Marcus",
  },
  {
    id: "esa-vs-service-animal-2",
    url: "/blog/esa-guide/why-do-so-many-people-believe-esa-registration-is-a-must/",
    title: "Emotional Support Animal vs. Service Animal: What's the Difference?",
    shortDescription:
      "Explore the key differences between Emotional Support Animals, service animals, and psychiatric service dogs.",
    cardImage: "/blogs/blog_cards.webp",
    authorName: "Dr. Marcus",
  },
  {
    id: "esa-vs-service-animal-3",
    url: "/blog/esa-guide/what-must-a-legitimate-esa-letter-include-in-2026/",
    title: "Emotional Support Animal vs. Service Animal: What's the Difference?",
    shortDescription:
      "Explore the key differences between Emotional Support Animals, service animals, and psychiatric service dogs.",
    cardImage: "/blogs/blog_cards.webp",
    authorName: "Dr. Marcus",
  },
  {
    id: "esa-vs-service-animal-4",
    url: "/blog/esa-guide/how-to-verify-an-esa-letter/",
    title: "Emotional Support Animal vs. Service Animal: What's the Difference?",
    shortDescription:
      "Explore the key differences between Emotional Support Animals, service animals, and psychiatric service dogs.",
    cardImage: "/blogs/blog_cards.webp",
    authorName: "Dr. Marcus",
  },
  {
    id: "esa-vs-service-animal-5",
    url: "/blog/esa-guide/why-do-so-many-people-believe-esa-registration-is-a-must/",
    title: "Emotional Support Animal vs. Service Animal: What's the Difference?",
    shortDescription:
      "Explore the key differences between Emotional Support Animals, service animals, and psychiatric service dogs.",
    cardImage: "/blogs/blog_cards.webp",
    authorName: "Dr. Marcus",
  },
  {
    id: "esa-vs-service-animal-6",
    url: "/blog/esa-guide/what-must-a-legitimate-esa-letter-include-in-2026/",
    title: "Emotional Support Animal vs. Service Animal: What's the Difference?",
    shortDescription:
      "Explore the key differences between Emotional Support Animals, service animals, and psychiatric service dogs.",
    cardImage: "/blogs/blog_cards.webp",
    authorName: "Dr. Marcus",
  },
];

interface DisplayCard {
  id: string;
  url: string;
  title: string;
  shortDescription: string;
  cardImage: string;
  authorName: string;
}

export function BlogsGrid() {
  return (
    <div className="w-full">
      {/* ---------------------------------------------------- */}
      {/* Category Navigation Pills (Frame 1261153994)         */}
      {/* ---------------------------------------------------- */}
      <div className="w-full bg-background pt-10 sm:pt-14 pb-12 sm:pb-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Blog category filters"
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-[40px]"
          >
            {BLOG_CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className={`h-[54px] ${cat.pillWidth} max-w-full rounded-[30px] bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.15)] flex items-center justify-center px-6 body-large text-black/60 hover:text-primary hover:shadow-md transition-all duration-200 cursor-pointer`}
              >
                {cat.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3 Category Sections matching blog.md                  */}
      {/* ---------------------------------------------------- */}
      <div>
        {BLOG_CATEGORIES.map((category) => {
          // Get real posts for this category
          const realPosts = BLOG_POSTS.filter(
            (art) =>
              art.categorySlug === category.categorySlug ||
              art.category.toLowerCase() === category.title.toLowerCase()
          );

          // Build array of display cards up to targetCount (6 for guide, 6 for conditions, 3 for training)
          const displayCards: DisplayCard[] = [];

          // Add real posts first
          realPosts.forEach((post) => {
            displayCards.push({
              id: post.id,
              url: post.url,
              title: post.title,
              shortDescription: post.shortDescription,
              cardImage: post.cardImage || "/blogs/blog_cards.webp",
              authorName: post.author?.name || "Dr. Marcus",
            });
          });

          // Fill remaining slots with placeholder design cards for full visual parity with blog.md
          let fillIndex = 0;
          while (displayCards.length < category.targetCount) {
            const fallback = PLACEHOLDER_CARDS[fillIndex % PLACEHOLDER_CARDS.length];
            displayCards.push({
              id: `${category.id}-card-${displayCards.length + 1}`,
              url: fallback.url,
              title: fallback.title,
              shortDescription: fallback.shortDescription,
              cardImage: fallback.cardImage,
              authorName: fallback.authorName,
            });
            fillIndex++;
          }

          return (
            <section
              key={category.id}
              id={category.id}
              className={`w-full ${category.bgColor} py-14 sm:py-18 lg:py-[72px] scroll-mt-24`}
            >
              <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center gap-12 sm:gap-16 lg:gap-[72px]">
                {/* Section Header (Heading Frame) */}
                <div className="flex flex-col items-center gap-4 text-center max-w-[978px] mx-auto">
                  <h2 className="heading-h2 text-primary capitalize text-center">
                    {category.title}
                  </h2>
                  <p className="body-large text-body-text text-center max-w-[978px]">
                    {category.description}
                  </p>
                </div>

                {/* 3-Column Card Grid (Frame 1261153612 / Frame 1261153615) */}
                <div className="w-full max-w-[1283px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
                  {displayCards.slice(0, category.targetCount).map((card, i) => (
                    <article
                      key={card.id}
                      className="w-full max-w-[411px] min-h-[626px] bg-white rounded-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col justify-between group hover:shadow-lg transition-all duration-300"
                    >
                      {/* Card Image: 411px x 317px (rounded-t-[20px]) */}
                      <Link
                        href={card.url}
                        className="w-full h-[317px] relative overflow-hidden block shrink-0 cursor-pointer rounded-t-[20px] bg-background"
                      >
                        <Image
                          src={card.cardImage}
                          alt={card.title}
                          fill
                          quality={90}
                          loading={i < 3 ? "eager" : "lazy"}
                          className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-[20px]"
                          sizes="(min-width: 1024px) 411px, (min-width: 768px) 50vw, 100vw"
                        />
                      </Link>

                      {/* Card Content (Frame 1000011908): 374px x 264px, gap: 15px */}
                      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between gap-[15px]">
                        <div className="flex flex-col gap-[15px]">
                          {/* Title & Author */}
                          <div className="flex flex-col gap-1.5">
                            <Link
                              href={card.url}
                              className="block group-hover:text-[#1D6E72] transition-colors"
                            >
                              <h3 className="heading-h3 text-primary line-clamp-2">
                                {card.title}
                              </h3>
                            </Link>
                            {card.authorName && (
                              <p className="body-small text-[#69777C]">
                                by {card.authorName}
                              </p>
                            )}
                          </div>

                          {/* Excerpt Description */}
                          <p className="body-text text-[#475467] line-clamp-3">
                            {card.shortDescription}
                          </p>
                        </div>

                        {/* CTA Button (Frame 1000011890): 171px x 48px */}
                        <div className="pt-2">
                          <CtaButton
                            href={card.url}
                            className="w-[171px] h-[48px] text-[16px] leading-[26px]"
                          >
                            Read More
                          </CtaButton>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
