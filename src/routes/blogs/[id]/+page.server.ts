import { deleteBlog } from '$lib/functions/blogs';
import { error, redirect, type Actions } from '@sveltejs/kit';
export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    const id = data.get('id')?.toString();

    if (id == undefined || isNaN(Number(id))) throw error(400, "Id isn't a number!");

    if (await deleteBlog(id)) throw redirect(303, '/blogs');
  }
} satisfies Actions;
