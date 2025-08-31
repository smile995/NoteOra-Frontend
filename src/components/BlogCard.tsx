import Image from "next/image";
import Link from "next/link";
import React from "react";
export interface TBlogInfo {
  _id?: string;
  title: string;
  slug: string;
  description: string;
  author: string;
  categories?: string[];   // <-- array instead of string
  featuredImage?: string;
  readingTime?: string;
  createdAt?: Date;
}


const BlogCard = ({ blog }: { blog: TBlogInfo }) => {
  const {
    title,
    slug,
    description,
    author,
    categories = [],
    featuredImage,
    readingTime,
  } = blog;

  return (
    <div className="border rounded-2xl shadow-sm hover:shadow-lg transition p-4 flex flex-col bg-white">
      {/* Image */}
      {featuredImage && (
        <div className="relative w-full h-48 rounded-lg overflow-hidden">
          <Image
            src={featuredImage}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Content */}
      <div className="mt-3 flex flex-col gap-2 flex-1">
        <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
          {title}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mt-1">
          <span>✍️ {author}</span>
          {readingTime && <span>⏱ {readingTime}</span>}
          {categories.length > 0 && (
            <span className="truncate">📂 {categories.join(", ")}</span>
          )}
        </div>
      </div>

      {/* Button */}
      <Link
        href={`/blogs/${slug}`}
        className="mt-4 inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition"
      >
        Read More →
      </Link>
    </div>
  );
};

export default BlogCard;
