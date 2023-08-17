import { Post, allPosts } from "contentlayer/generated";
import React from "react";
import Card from "./card";
import Link from "next/link";

interface PaginationProps {
  data: Post[];
  dataLimit: number;
  currentPage: number;
}

const Pagination = ({ data, dataLimit, currentPage }: PaginationProps) => {
  const totalPages = Math.ceil(allPosts.length / dataLimit);
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  const isValidPageNumber =
    !isNaN(currentPage) && currentPage >= 1 && currentPage <= totalPages;

  if (!isValidPageNumber) {
    // Redirect to 404 page
    return <p>Page not found.</p>;
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data
      .sort((a, b) => {
        if (new Date(a.createdAt) > new Date(b.createdAt)) {
          return -1;
        }
        return 1;
      })
      .slice(startIndex, endIndex)
      .map((post) => (
        <Card
          key={post.slug}
          title={post.title}
          description={post.description}
          slug={post.slug}
          createdAt={post.createdAt}
        />
      ));
  };
  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      {getPaginatedData()}
      <nav className="flex justify-between">
        {!prevPage && (
          <button
            className="cursor-pointer disabled:opacity-50"
            disabled={!prevPage}
          >
            Newer
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/` : `/page/${currentPage - 1}`}
            // onClick={goToPreviousPage}
            passHref
          >
            <button
              rel="older"
              className="transform hover:text-zinc-600 hover:dark:text-zinc-300"
            >
              Newer
            </button>{" "}
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {/* next button */}
        {!nextPage && (
          <button
            className="cursor-pointer disabled:opacity-50"
            disabled={!nextPage}
          >
            Older
          </button>
        )}
        {nextPage && (
          <Link href={`/page/${currentPage + 1}`} passHref>
            <button
              rel="newer"
              className="transform hover:text-zinc-600 hover:dark:text-zinc-300"
            >
              Older
            </button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Pagination;
