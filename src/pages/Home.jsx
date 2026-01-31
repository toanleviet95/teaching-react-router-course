export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            My Portfolio
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Discover insightful articles about web development, React, and
            modern technologies.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/blogs"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200"
            >
              View All Blogs
            </a>
            <a
              href="/blogs/create"
              className="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-200"
            >
              Write a Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
