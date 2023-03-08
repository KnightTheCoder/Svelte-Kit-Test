import { createBlog } from '$lib/stores/blogs';
import { error } from '@sveltejs/kit';

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const title = data.get('title')?.toString();
    const description = data.get('description')?.toString();

    if (!title || !description) throw error(404, 'Title or description is empty!');

    createBlog(title, description);
  }
};
