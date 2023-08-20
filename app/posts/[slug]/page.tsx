import { notFound } from "next/navigation";
import { Metadata } from "next";
import MDXComponents from "../../components/mdx-components";
import { allPosts } from "contentlayer/generated";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export default function Page({ params }: PageProps) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) notFound();

  return (
    <>
      <article className="py-6 prose dark:prose-invert">
        <MDXComponents code={post.body.code} />
      </article>
    </>
  );
}
