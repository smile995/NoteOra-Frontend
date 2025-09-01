"use client";



const CreateBlog = () => {

  return (
    <form
    
      className="max-w-2xl mx-auto p-4 border rounded-lg shadow space-y-4"
    >
      <h2 className="text-2xl font-semibold">Create New Blog</h2>

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


      {/* Description */}
      <div>
        <label className="block font-medium">Description</label>
        <textarea
          name="description"
          className="w-full p-2 border rounded"
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
        <label className="block font-medium">Categories (comma separated)</label>
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
        <label className="block font-medium">Keywords (comma separated)</label>
        <input
          type="text"
          name="keywords"
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Create Blog
      </button>
    </form>
  );
};

export default CreateBlog;
