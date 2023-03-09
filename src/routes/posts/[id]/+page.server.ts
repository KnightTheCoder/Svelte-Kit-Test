import { deletePost } from '$lib/functions/posts';
import { error, redirect, type Actions } from '@sveltejs/kit';
export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    const id = data.get('id')?.toString();

    if (id == undefined || isNaN(Number(id))) throw error(400, "Id isn't a number!");

    if (await deletePost(id)) throw redirect(303, '/posts');
  }
} satisfies Actions;
