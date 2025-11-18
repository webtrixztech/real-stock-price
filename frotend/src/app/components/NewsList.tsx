import React, { useState } from "react";

type NewsItem = {
  category: string;
  datetime: number;
  headline: string;
  id: number;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
};

type NewsListProps = {
  news: NewsItem[];
};

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const totalPages = Math.ceil(news.length / pageSize);
  const startIndex = (page - 1) * pageSize;
  const pageData = news.slice(startIndex, startIndex + pageSize);

  const nextPage = () => setPage((p) => Math.min(p + 1, totalPages));
  const prevPage = () => setPage((p) => Math.max(p - 1, 1));

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-3">
        Latest News
      </h2>

      <div className="divide-y">
        {pageData.map((n) => (
          <div
            key={n.id}
            className="py-4 flex gap-4 hover:bg-gray-50 transition cursor-pointer"
          >
            {/* Image */}
            {n.image && (
              <img
                src={n.image}
                alt={n.headline}
                className="w-20 h-20 object-cover rounded-md flex-shrink-0"
              />
            )}

            <div className="flex flex-col flex-1">
              {/* Headline */}
              <a
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-900 hover:underline text-base"
              >
                {n.headline}
              </a>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {n.related.split(",").map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta */}
              <p className="text-sm text-gray-500 mt-2">
                {n.source} •{" "}
                {new Date(n.datetime * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={prevPage}
          disabled={page === 1}
          className={`px-4 py-2 rounded-md text-sm font-medium border 
            ${
              page === 1
                ? "text-gray-400 border-gray-200 cursor-not-allowed"
                : "text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
        >
          Previous
        </button>

        <span className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded-md text-sm font-medium border 
            ${
              page === totalPages
                ? "text-gray-400 border-gray-200 cursor-not-allowed"
                : "text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NewsList;
