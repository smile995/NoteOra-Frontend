import { blogPosts } from "@/DummyData/blogs";
import Image from "next/image";

const BlogDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const blog = blogPosts.find((post) => post.slug === slug);
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-400 text-xl">
        Blog not found
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-screen bg-gray-900 text-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title */}
          <h1 className="text-4xl font-extrabold text-white">{blog.title}</h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
            <span>✍️ By {blog.author}</span>
            <span>📌 {blog.status}</span>
            {blog.readingTime && <span>⏱ {blog.readingTime}</span>}
            <span>👀 {blog.views ?? 0}</span>
            <span>👍 {blog.likes ?? 0}</span>
            <span>💬 {blog.commentsCount ?? 0}</span>
          </div>

          {/* Featured image */}
          {blog.featuredImage && (
            <Image
              width={1200}
              height={600}
              src={blog.featuredImage}
              alt={blog.title}
              className="w-full h-80 object-cover rounded-xl shadow-lg border border-gray-700"
            />
          )}

          {/* Description */}
          <p className="text-lg leading-relaxed text-gray-200">
            {blog.description}
          </p>

          {/* Categories */}
          {blog.categories && blog.categories.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Categories
              </h3>
              <ul className="flex flex-wrap gap-2">
                {blog.categories.map((cat, i) => (
                  <li
                    key={i}
                    className="bg-indigo-600/20 text-indigo-300 px-3 py-1 rounded-full text-sm border border-indigo-500/30"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Keywords */}
          {blog.keywords && blog.keywords.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Keywords
              </h3>
              <p className="text-sm text-gray-300">
                {blog.keywords.join(", ")}
              </p>
            </div>
          )}

          {/* Featured / Deleted flags */}
          <div className="flex gap-4 mt-6">
            {blog.isFeatured && (
              <span className="px-4 py-1 bg-green-600/20 text-green-400 border border-green-600 rounded-full">
                🌟 Featured
              </span>
            )}
            {blog.isDeleted && (
              <span className="px-4 py-1 bg-red-600/20 text-red-400 border border-red-600 rounded-full">
                🗑 Deleted
              </span>
            )}
          </div>

          {/* Dates */}
          <div className="text-sm text-gray-500 border-t border-gray-700 pt-4">
            <p>📅 Created: {blog.createdAt?.toString()}</p>
            <p>📝 Updated: {blog.updatedAt?.toString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
