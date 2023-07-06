import * as React from "react";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import MDXComponents from "../../components/MDXComponents";
import PostLayout from "./layout";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

// console.log("POSTS", allPosts);

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) notFound();

  // const MDXContent = useMDXComponent(post.body.code);
  console.log("MEMO", useMDXComponent);

  return (
    <div>
      <PostLayout params={params}>
        <MDXComponents code={post.body.code} />
      </PostLayout>
    </div>
  );
}
