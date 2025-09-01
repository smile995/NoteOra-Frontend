import { blogPosts } from "@/DummyData/blogs";
import Image from "next/image";

const ManageBlogs = () => {
  return (
    <div>
      <div className="my-6">
          <h2 className="text-center text-3xl">Manage Your Blogs</h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Title</th>
                <th>Likes/Comments</th>
                <th>Categories</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogPosts.map((post) => (
                <tr key={post._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <Image
                            width={48}
                            height={48}
                            src={post?.featuredImage || "Hello"}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{post?.title}</div>
                        <div className="text-sm opacity-50">{post?.author}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Total Likes: {post?.likes}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Total Comment: {post?.commentsCount}
                    </span>
                  </td>
                  <td>{post?.categories}</td>
                  <th>
                    <button className="btn btn-warning">Delete</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageBlogs;
