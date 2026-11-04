import { BlogCard } from "@/components/blogs/BlogCard";
import { TextSection } from "@/components/legal-reviewer/ReviewerUI";
import { BlogArticle, getBlogsByAuthorName, getBlogsReviewedByName } from "@/data/blogsData";

export type ContributorExtraCard = {
  id: string;
  url: string;
  title: string;
  description: string;
  image: string;
};

function extraCardArticle(card: ContributorExtraCard): BlogArticle {
  return {
    id: card.id,
    url: card.url,
    title: card.title,
    shortDescription: card.description,
    cardImage: card.image,
  } as BlogArticle;
}

export function ContributorArticles({
  name,
  intro,
  role = "author",
  extraCards = [],
}: {
  name: string;
  intro?: string;
  role?: "author" | "reviewer";
  extraCards?: ContributorExtraCard[];
}) {
  const articles = (role === "author" ? getBlogsByAuthorName : getBlogsReviewedByName)(name);
  if (!intro && articles.length === 0 && extraCards.length === 0) return null;

  const title = role === "author" ? `Articles by ${name}` : `Articles reviewed by ${name}`;

  return (
    <div className="flex flex-col gap-8">
      <TextSection title={title} intro={intro} />
      {(articles.length > 0 || extraCards.length > 0) && (
        <div className="flex w-full min-w-0 max-w-full flex-col gap-6 sm:flex-row sm:flex-wrap">
          {articles.map((article) => (
            <BlogCard key={article.id} article={article} showAuthor={false} />
          ))}
          {extraCards.map((card) => (
            <BlogCard key={card.id} article={extraCardArticle(card)} showAuthor={false} />
          ))}
        </div>
      )}
    </div>
  );
}
