import * as React from "react";
import { format } from "date-fns";

interface CardProps {
  category: string;
  slug: string;
  title: string;
  // content: string;
  description: string;
  publishedAt: string;
  // updated_at: any;
}

const Card: React.FC<CardProps> = ({
  category,
  slug,
  title,
  description,
  publishedAt,
}) => {
  return (
    <section>
      <div className="flex justify-center py-6">
        <div className="max-w-445px w-full bg-white dark:bg-gray-900 shadow-outline p-6 overflow-hidden">
          <div className="space-y-4">
            <p className="text-green-500 uppercase font-bold text-sm tracking-wider">
              {category}
            </p>
            <h2 className="text-gray-700 dark:text-white text-2xl font-body">
              <a className="text-blue-500" href={`/posts/${slug}`}>
                {title}
              </a>
            </h2>
            <p className="text-sm">{description}</p>
          </div>

          <div className="flex flex-col space-y-0 text-sm">
            <p>{format(new Date(publishedAt), "d MMM yyyy")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
