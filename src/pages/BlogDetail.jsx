import { Form } from "react-router";

export default function BlogDetail({ blog = {} }) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <a
          href="/blogs"
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          ← Back to Blogs
        </a>
      </div>

      <article className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>

        <div className="text-sm text-gray-500 mb-6 pb-4 border-b-2 border-gray-200">
          <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
        </div>

        <div className="text-gray-700 leading-relaxed text-lg mb-8 whitespace-pre-wrap">
          {blog.content}
        </div>

        <div className="flex gap-3">
          <a
            href={`/blogs/${blog.id}/edit`}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
          >
            Edit Blog
          </a>

          <Form
            method="post"
            onSubmit={(e) => {
              if (!confirm("Are you sure you want to delete this blog?")) {
                e.preventDefault();
              }
            }}
          >
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-md"
            >
              Delete Blog
            </button>
          </Form>
        </div>
      </article>
    </div>
  );
}
