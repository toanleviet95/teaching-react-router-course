import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'

import Layout from './components/Layout.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Home from './pages/Home.jsx'
import BlogList from './pages/BlogList.jsx'
import BlogDetail from './pages/BlogDetail.jsx'
import BlogEditor from './pages/BlogEditor.jsx'
import SignInPage from './pages/SignIn.jsx'
import SignUpPage from './pages/SignUp.jsx'
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
        path: 'blogs/:id',
        element: <BlogDetail />,
        loader: blogDetailLoader,
        action: blogDetailAction,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: 'blogs/create',
            element: <BlogEditor />,
            loader: blogEditorLoader,
            action: blogEditorAction,
          },
          {
            path: 'blogs/:id/edit',
            element: <BlogEditor />,
            loader: blogEditorLoader,
            action: blogEditorAction,
          },
        ],
      },
      {
        path: 'sign-in/*',
        element: <SignInPage />,
      },
      {
        path: 'sign-up/*',
        element: <SignUpPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
