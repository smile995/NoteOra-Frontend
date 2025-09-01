"use client";

const CreateBlog = () => {
  const handleBlogData = (e) => {
    e.preventDefault();
    console.log("first");
  };

  return (
    <div className="max-w-3xl bg-white rounded-xl shadow-md shadow-blue-600 text-black mx-auto p-4 my-5">
      <h2 className="text-2xl text-center font-semibold">Create New Blog</h2>
      <form
        onSubmit={handleBlogData}
        className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center space-y-4"
      >
        {/* Title */}
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            name="title"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Author */}
        <div>
          <label className="block font-medium">Author</label>
          <input
            type="text"
            name="author"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Categories */}
        <div>
          <label className="block font-medium">
            Categories (comma separated)
          </label>
          <input
            type="text"
            name="categories"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Featured Image */}
        <div>
          <label className="block font-medium">Featured Image URL</label>
          <input
            type="text"
            name="featuredImage"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Keywords */}
        <div>
          <label className="block font-medium">
            Keywords (comma separated)
          </label>
          <input
            type="text"
            name="keywords"
            className="w-full p-2 border rounded"
          />
        </div>
        {/* Description */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea name="description" className="w-full p-2 border rounded" />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 col-span-2 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
