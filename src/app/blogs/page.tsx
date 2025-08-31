import BlogCard from "@/components/BlogCard"
import { blogPosts } from "@/DummyData/blogs"


const BlogsPage = () => {
  return (
    <div>
     <div>
          <h1>Populer Blogs</h1>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {
               blogPosts.map((blog)=><BlogCard key={blog._id} blog={blog}/>)
          }
     </div>
    </div>
  )
}

export default BlogsPage