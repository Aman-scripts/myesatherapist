import { BlogCard } from "@/components/blogs/BlogCard";
import { TextSection } from "@/components/legal-reviewer/ReviewerUI";
import { getBlogsByAuthorName, getBlogsReviewedByName } from "@/data/blogsData";

export function ContributorArticles({
  name,
  intro,
  role = "author",
}: {
  name: string;
  intro?: string;
  role?: "author" | "reviewer";
}) {
  const articles = (role === "author" ? getBlogsByAuthorName : getBlogsReviewedByName)(name);
  if (!intro && articles.length === 0) return null;

  const title = role === "author" ? `Articles by ${name}` : `Articles reviewed by ${name}`;

  return (
    <div className="flex flex-col gap-8">
      <TextSection title={title} intro={intro} />
      {articles.length > 0 && (
        <div className="flex flex-wrap gap-6">
          {articles.map((article) => (
            <BlogCard key={article.id} article={article} showAuthor={false} />
          ))}
        </div>
      )}
    </div>
  );
}
