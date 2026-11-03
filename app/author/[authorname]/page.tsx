import { permanentRedirect } from "next/navigation";
import { getAllAuthorSlugs } from "@/data/authorsData";

interface PageProps {
  params: Promise<{ authorname: string }>;
}

export function generateStaticParams() {
  return getAllAuthorSlugs().map((authorname) => ({ authorname }));
}

export default async function AuthorRedirectPage({ params }: PageProps) {
  const { authorname } = await params;
  permanentRedirect(`/contributors/${authorname}/`);
}
