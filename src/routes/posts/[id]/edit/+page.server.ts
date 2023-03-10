import { editPost } from '$lib/functions/posts';
import { error, fail, redirect, type Actions } from '@sveltejs/kit';
export const actions = {
  edit: async ({ request }) => {
    const data = await request.formData();
    const id = data.get('id')?.toString();
    const title = data.get('title')?.toString();
    const description = data.get('description')?.toString();

    if (id == undefined || isNaN(Number(id))) throw error(404, "Id isn't a number!");

    if (title == undefined || description == undefined)
      return fail(422, {
        error: 'Title or description is empty',
        title,
        description
      });

    if (await editPost(id, title, description)) throw redirect(303, `/posts/${id}`);
  }
} satisfies Actions;
