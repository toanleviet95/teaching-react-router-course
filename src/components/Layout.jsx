import { Link, Outlet } from 'react-router';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              My Blog
            </Link>

            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/blogs"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Blogs
              </Link>
              <Link
                to="/blogs/create"
                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                Create Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
