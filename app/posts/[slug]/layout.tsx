import * as React from "react";
import Link from "next/link";
import SectionContainer from "@/app/components/SectionContainer";

const PostLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}) => {
  return (
    <SectionContainer>
      <Link href="/" passHref>
        <button className="bg-blue-300 hover:bg-blue-700 text-white dark:text-black font-bold py-2 px-4 ">
          Back
        </button>
      </Link>
      <article>{children}</article>
    </SectionContainer>
  );
};

export default PostLayout;
