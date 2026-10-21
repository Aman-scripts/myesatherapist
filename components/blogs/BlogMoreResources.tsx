"use client";

import React from "react";
import { BLOG_POSTS } from "@/data/blogsData";
import { BlogCard } from "@/components/blogs/BlogCard";

interface BlogMoreResourcesProps {
  currentSlug?: string;
}

export function BlogMoreResources({ currentSlug }: BlogMoreResourcesProps = {}) {
  // Show up to 3 resources, prioritizing other blog posts
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== currentSlug);
  const displayPosts = otherPosts.length > 0 ? otherPosts : BLOG_POSTS;

  return (
    <section className="w-full bg-background py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center gap-10 sm:gap-14 lg:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 text-center max-w-[978px] mx-auto">
          <h2 className="heading-h2 text-primary capitalize text-center">
            More ESA Resources
          </h2>
          <p className="body-large text-body-text text-center max-w-[978px]">
            Get answers to common questions about ESA letters and our service.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full max-w-[1283px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {displayPosts.slice(0, 3).map((item, i) => (
            <BlogCard key={item.id} article={item} priority={i === 0} />
          ))}
        </div>

      </div>
    </section>
  );
}
