import { Form, useLoaderData, useLocation } from 'react-router';

export default function BlogEditor() {
  const { blog } = useLoaderData();
  const location = useLocation();
  const isNew = !blog || location.pathname === '/blogs/create';

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        {isNew ? 'Create New Blog' : 'Edit Blog'}
      </h1>

      <Form method="post" className="bg-white rounded-lg shadow-lg p-8 space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={blog?.title || ''}
            required
            className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            placeholder="Enter blog title"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-semibold text-gray-700 mb-2">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            defaultValue={blog?.content || ''}
            required
            rows="12"
            className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-y"
            placeholder="Write your blog content here..."
          />
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-md"
          >
            {isNew ? 'Create Blog' : 'Update Blog'}
          </button>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors shadow-md"
          >
            Cancel
          </button>
        </div>
      </Form>
    </div>
  );
}
