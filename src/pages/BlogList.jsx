import { Link } from "react-router";

export default function BlogList({ blogs = [] }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">All Blogs</h1>
        <p className="text-gray-600 mt-2">
          Explore our collection of articles and insights
        </p>
      </div>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-bold mb-3">
              <a
                href={`/blogs/${blog.id}`}
                className="text-gray-900 hover:text-blue-600 transition-colors"
              >
                {blog.title}
              </a>
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {blog.content.substring(0, 150)}...
            </p>
            <div className="text-sm text-gray-500">
              <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
