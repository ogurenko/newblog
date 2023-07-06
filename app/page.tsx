import type { Metadata } from "next";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import Container from "./components/Container";
import Card from "./components/Card";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default async function BlogPage() {
  return (
    <>
      <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
      <Container>
        <div className="flex min-h-screen  flex-col justify-center items-start mx-auto max-w-7xl">
          <div className="flex flex-col justify-start items-start max-w-7xl px-4">
            {allPosts
              .sort((a, b) => {
                if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                  return -1;
                }
                return 1;
              })
              .map((post) => (
                // <Link
                //   href={post.slug}
                //   className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
                // >
                //   {post.title}
                // </Link>
                <Card
                  key={post.slug}
                  title={post.title}
                  description={post.description}
                  slug={post.slug}
                  // image={post.image}
                  category={post.category}
                  publishedAt={post.publishedAt}
                  // date={post.publishedAt}
                />
              ))}
          </div>
        </div>
      </Container>
    </>
  );
}
