import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";
import Link, { LinkProps } from "next/link";
import React from "react";
import CodeBlock from "./CodeBlock";

const components: MDXComponents = {
  h1: ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={"mt-2 scroll-m-20 text-4xl font-bold tracking-tight"}
      {...props}
    />
  ),
  h2: ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={
        "mt-10 scroll-m-20 border-b border-b-slate-200 pb-1 text-3xl font-semibold tracking-tight first:mt-0"
      }
      {...props}
    />
  ),
  h3: ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={"mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"}
      {...props}
    />
  ),
  h4: ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={"mt-8 scroll-m-20 text-xl font-semibold tracking-tight"}
      {...props}
    />
  ),
  h5: ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={"mt-8 scroll-m-20 text-lg font-semibold tracking-tight"}
      {...props}
    />
  ),
  h6: ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={"mt-8 scroll-m-20 text-base font-semibold tracking-tight"}
      {...props}
    />
  ),
  a: ({ href, children }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link
      href={href as string}
      className={"font-medium text-slate-900 underline underline-offset-4"}
    >
      {children}
    </Link>
  ),
  p: ({ ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={"mt-5 mb-8"} {...props} />
  ),
  ul: ({ ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={"my-6 ml-6 list-disc"} {...props} />
  ),
  ol: ({ ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={"my-6 ml-6 list-decimal"} {...props} />
  ),
  li: ({ ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={"mt-2"} {...props} />
  ),
  blockquote: ({ ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={
        "mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 [&>*]:text-slate-600"
      }
      {...props}
    />
  ),
  img: ({ alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={"rounded-md"} alt={alt} {...props} />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-4 border-slate-200 md:my-8" {...props} />
  ),
  table: ({ ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={"w-full"} {...props} />
    </div>
  ),
  tr: ({ ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={"m-0 border-t border-slate-300 p-0 even:bg-slate-100"}
      {...props}
    />
  ),
  th: ({ ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={
        "border border-slate-200 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
      }
      {...props}
    />
  ),
  td: ({ ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={
        "border border-slate-200 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
      }
      {...props}
    />
  ),
  inlineCode: (props: any) => (
    <code {...props} style={{ color: "lightcoral" }} />
  ),
  code: ({ ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
      }
      {...props}
    />
  ),
  CodeBloc: ({ ...props }) => (
    <CodeBlock className="rounded-md border" {...props} />
  ),
  pre: ({
    __rawString__,
    __withMeta__,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    __rawString__?: string;
    __src__?: string;
    __withMeta__?: string;
  }) => (
    <pre
      className={
        "mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border py-4 data-[theme=dark]:bg-background data-[theme=light]:bg-white"
      }
      {...props}
    />
  ),
};

interface MDXProps {
  code: string;
}

const MDXComponents = ({ code }: MDXProps) => {
  const Component = useMDXComponent(code);

  return (
    <div>
      <Component components={components} />
    </div>
  );
};

export default MDXComponents;
