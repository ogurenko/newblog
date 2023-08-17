import { allPosts } from "contentlayer/generated";
import Pagination from "./components/pagination";

export const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

const POSTS_PER_PAGE = 5;

export default async function BlogPage() {
  const pageNumber = 1;

  return (
    <>
      <div className="flex min-h-screen  flex-col justify-center items-start mx-auto max-w-7xl prose dark:prose-invert">
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
}
