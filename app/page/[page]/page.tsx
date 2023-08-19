import { allPosts } from "contentlayer/generated";
import Pagination from "@/app/components/pagination";

const POSTS_PER_PAGE = 5;

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));

  return paths;
};

const Page = ({ params }: { params: { page: string } }) => {
  const pageNumber = parseInt(params.page as string);

  return (
    <>
      <div className="flex min-h-screen  flex-col items-start mx-auto max-w-7xl prose dark:prose-invert">
        <div className="flex flex-col justify-start items-start max-w-7xl px-4">
          {allPosts.length > 0 ? (
            <>
              <Pagination
                data={allPosts}
                dataLimit={POSTS_PER_PAGE}
                currentPage={pageNumber}
              />
            </>
          ) : (
            <h1>No Posts to display</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
