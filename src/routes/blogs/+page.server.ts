import { error, type Action } from '@sveltejs/kit';
import type { Blog } from '$lib/types/blog';
import { axiosInstance } from '$lib/functions/axios';

export const actions = {
  default: (async ({ request }) => {
    const data = await request.formData();
    const title = data.get('title')?.toString();
    const description = data.get('description')?.toString();

    if (title == undefined || description == undefined || [title, description].includes(''))
      throw error(400, 'Title or description is empty');

    const blog: Blog = { id: 3, title, description };

    axiosInstance.post('/blogs', blog);
  }) satisfies Action
};
