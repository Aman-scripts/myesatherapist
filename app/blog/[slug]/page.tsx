import { permanentRedirect } from "next/navigation";
import { getBlogBySlug } from "@/data/blogsData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function LegacyBlogSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getBlogBySlug(slug);

  if (article) {
    permanentRedirect(article.url);
  }

  // Default redirect to the first article
  permanentRedirect("/blog/esa-guide/how-to-verify-an-esa-letter/");
}
