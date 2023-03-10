import { fail, type Actions } from '@sveltejs/kit';
import { createPost } from '$lib/functions/posts';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const title = data.get('title')?.toString();
    const description = data.get('description')?.toString();

    if (title == undefined || description == undefined || [title, description].includes(''))
      return fail(422, {
        error: 'Title or description is empty',
        title,
        description
      });

    try {
      await createPost(title, description);
    } catch (error) {
      let message = 'Unknown error!';
      if (error instanceof Error) message = error.message;

      return fail(422, {
        error: message,
        title,
        description
      });
    }
  }
} satisfies Actions;
