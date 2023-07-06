import * as React from "react";
import Link from "next/link";
import Container from "../../components/Container";

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
    <Container>
      <div className="flex flex-row justify-start items-start mt-8 mb-8">
        <Link href="/" passHref>
          <button>Back</button>
        </Link>
      </div>
      {children}
    </Container>
  );
};

export default PostLayout;
