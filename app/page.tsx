import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import Container from "./components/container";
import Card from "./components/card";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default async function BlogPage() {
  return (
    <>
      <div className="flex min-h-screen  flex-col justify-center items-start mx-auto max-w-7xl prose dark:prose-invert">
        <div className="flex flex-col justify-start items-start max-w-7xl px-4">
          {allPosts
            .sort((a, b) => {
              if (new Date(a.createdAt) > new Date(b.createdAt)) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <Card
                key={post.slug}
                title={post.title}
                description={post.description}
                slug={post.slug}
                createdAt={post.createdAt}
              />
            ))}
        </div>
      </div>
    </>
  );
}
