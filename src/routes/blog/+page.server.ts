import { getBlogs, createBlog } from '$lib/stores/blogs';
import { error, type Action } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const title = data.get('title')?.toString();
    const description = data.get('description')?.toString();

    if (!title || !description) throw error(404, 'Title or description is empty!');

    createBlog(title, description);
  }
};

export const load: PageServerLoad = ({ params }) => {
  let blogs = getBlogs();

  return {
    blogs
  };
};
