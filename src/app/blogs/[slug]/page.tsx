const BlogDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  console.log((await params).slug);

  return <div>Blog Slug: </div>;
};

export default BlogDetails;
