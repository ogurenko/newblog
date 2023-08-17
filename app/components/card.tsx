import * as React from "react";
import { format } from "date-fns";
import Link from "next/link";

interface CardProps {
  id?: string;
  slug?: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt?: any;
  author?: {
    name: string;
  };
  image?: {
    url: string;
  };
}

const Card: React.FC<CardProps> = ({ slug, title, description, createdAt }) => {
  return (
    <section>
      <div className="flex justify-center py-6">
        <div className="max-w-lg w-full bg-white dark:bg-gray-800 shadow-outline p-6 overflow-hidden border-2 border-blue-400 ">
          <div className="space-y-4">
            <h2 className="text-gray-700 dark:text-white text-2xl font-body mt-1">
              <Link href={`/posts/${slug}`}>{title}</Link>
            </h2>
            <p className="text-sm">{description}</p>
          </div>

          <div className="flex flex-col space-y-0 text-sm">
            <br />
            <p>{format(new Date(createdAt), "d MMM yyyy")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
