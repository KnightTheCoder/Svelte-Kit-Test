import { error, type Actions } from '@sveltejs/kit';
import { createBlog } from '$lib/functions/blogs';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const title = data.get('title')?.toString();
    const description = data.get('description')?.toString();

    if (title == undefined || description == undefined || [title, description].includes(''))
      throw error(400, 'Title or description is empty');

    await createBlog(title, description);
  }
} satisfies Actions;
