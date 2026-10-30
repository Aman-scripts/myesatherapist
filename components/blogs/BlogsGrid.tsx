"use client";

import React from "react";
import { BLOG_POSTS, BlogArticle } from "@/data/blogsData";
import { BlogCard } from "@/components/blogs/BlogCard";

interface BlogCategorySection {
  id: string;
  categorySlug: string;
  title: string;
  description: string;
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
    bgColor: "bg-background",
    pillWidth: "w-[179px]",
  },
  {
    id: "qualifying-conditions",
    categorySlug: "qualifying-conditions",
    title: "Qualifying Conditions",
    description:
      "Many people wonder whether their mental or emotional health condition may qualify them for an emotional support animal. In this category, you'll find educational articles discussing mental health conditions that may be evaluated by licensed mental health professionals when determining whether an ESA is clinically appropriate.",
    bgColor: "bg-white",
    pillWidth: "w-[251px]",
  },
  {
    id: "esa-training",
    categorySlug: "esa-training",
    title: "ESA Training",
    description:
      "A well-behaved emotional support animal can make everyday life more comfortable for both you and those around you. This category covers training tips, behavior management, socialization, and practical advice to help your ESA become a calm and well-mannered companion.",
    bgColor: "bg-background",
    pillWidth: "w-[179px]",
  },
];

export function BlogsGrid() {
  return (
    <div className="w-full">
      {/* ---------------------------------------------------- */}
      {/* Category Navigation Pills (Frame 1261153994)         */}
      {/* ---------------------------------------------------- */}
      <div className="w-full bg-background pt-8 sm:pt-12 pb-0">
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
      {/* 3 Category Sections (Original Articles Only)        */}
      {/* ---------------------------------------------------- */}
      <div>
        {BLOG_CATEGORIES.map((category, index) => {
          // Filter strictly original posts from BLOG_POSTS
          const categoryPosts = BLOG_POSTS.filter(
            (art: BlogArticle) =>
              art.categorySlug === category.categorySlug ||
              art.category.toLowerCase() === category.title.toLowerCase()
          );

          const isFirst = index === 0;

          return (
            <section
              key={category.id}
              id={category.id}
              className={`w-full ${category.bgColor} ${
                isFirst
                  ? "pt-8 sm:pt-10 lg:pt-12 pb-14 sm:pb-18 lg:pb-[72px]"
                  : "py-14 sm:py-18 lg:py-[72px]"
              } scroll-mt-24`}
            >
              <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center gap-10 sm:gap-14 lg:gap-[56px]">
                {/* Section Header (Heading Frame) */}
                <div className="flex flex-col items-center gap-4 text-center max-w-[978px] mx-auto">
                  <h2 className="heading-h2 text-primary capitalize text-center">
                    {category.title}
                  </h2>
                  <p className="body-large text-body-text text-center max-w-[978px]">
                    {category.description}
                  </p>
                </div>

                {/* 3-Column Card Grid (Frame 1000011907) */}
                <div className="w-full max-w-[1283px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
                  {categoryPosts.map((art: BlogArticle, i: number) => (
                    <BlogCard key={art.id} article={art} priority={false} />
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
