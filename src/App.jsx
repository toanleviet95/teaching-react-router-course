import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'

import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import BlogList from './pages/BlogList.jsx'
import BlogDetail from './pages/BlogDetail.jsx'
import BlogEditor from './pages/BlogEditor.jsx'
import { blogEditorAction, blogDetailAction } from './actions/blogActions.js'
import { blogListLoader, blogDetailLoader, blogEditorLoader } from './loaders/blogLoaders.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'blogs',
        element: <BlogList />,
        loader: blogListLoader,
      },
      {
        path: 'blogs/create',
        element: <BlogEditor />,
        loader: blogEditorLoader,
        action: blogEditorAction,
      },
      {
        path: 'blogs/:id',
        element: <BlogDetail />,
        loader: blogDetailLoader,
        action: blogDetailAction,
      },
      {
        path: 'blogs/:id/edit',
        element: <BlogEditor />,
        loader: blogEditorLoader,
        action: blogEditorAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
