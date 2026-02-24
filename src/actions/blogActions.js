import { redirect } from "react-router";

/**
 * Action for creating a new blog or updating an existing one
 */
export async function blogEditorAction({ request, params }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const content = formData.get("content");

  const isNew = !params.id || params.id === "new";

  if (isNew) {
    // Create new blog
    const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        createdAt: new Date().toISOString(),
      }),
    });
    const newBlog = await response.json();
    return await redirect(`/blogs/${newBlog.id}`);
  } else {
    // Update existing blog
    const response = await fetch(
      `${import.meta.env.VITE_API_ENDPOINT}/blogs/${params.id}`
    );
    const existingBlog = await response.json();

    await fetch(`${import.meta.env.VITE_API_ENDPOINT}/blogs/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: params.id,
        title,
        content,
        createdAt: existingBlog.createdAt,
      }),
    });
    return await redirect(`/blogs/${params.id}`);
  }
}

/**
 * Action for deleting a blog
 */
export async function blogDetailAction({ params }) {
  await fetch(`${import.meta.env.VITE_API_ENDPOINT}/blogs/${params.id}`, {
    method: "DELETE",
  });
  return redirect("/blogs");
}
