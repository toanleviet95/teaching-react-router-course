/**
 * Loader for fetching all blogs
 */
export async function blogListLoader() {
  console.log('API_ENDPOINT:', import.meta.env.VITE_API_ENDPOINT);
  const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/blogs`);
  const blogs = await response.json();
  return { blogs };
}

/**
 * Loader for fetching a single blog by ID
 */
export async function blogDetailLoader({ params }) {
  const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/blogs/${params.id}`);
  if (!response.ok) {
    throw new Response('Blog not found', { status: 404 });
  }
  const blog = await response.json();
  return { blog };
}

/**
 * Loader for the blog editor (create/edit)
 * Returns null for create mode, or the blog data for edit mode
 */
export async function blogEditorLoader({ params }) {
  // Handle create route (no id param) or new route (id === 'new')
  if (!params.id || params.id === 'new') {
    return { blog: null };
  }

  const response = await fetch(`http://localhost:3001/blogs/${params.id}`);
  if (!response.ok) {
    throw new Response('Blog not found', { status: 404 });
  }
  const blog = await response.json();
  return { blog };
}
