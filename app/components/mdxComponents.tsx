import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Pre from "./pre";

const components: MDXComponents = {
  a: ({ href, children }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link
      href={href as string}
      className={"font-medium text-slate-900 underline underline-offset-4"}
    >
      {children}
    </Link>
  ),
  pre: Pre,
};

interface MDXProps {
  code: string;
  components?: MDXComponents;
  [key: string]: unknown;
}

const MDXComponents = ({ code }: MDXProps) => {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert">
      <Component components={{ ...components }} />
    </article>
  );
};

export default MDXComponents;
