import Link from "next/link";

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
    <>
      <Link href="/" passHref>
        <button className="bg-blue-300 hover:bg-blue-400 text-white dark:text-black font-bold py-2 px-4 ">
          Back
        </button>
      </Link>
      <article>{children}</article>
    </>
  );
};

export default PostLayout;
