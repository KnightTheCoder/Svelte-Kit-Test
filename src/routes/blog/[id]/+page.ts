import { error } from '@sveltejs/kit';
import { getBlog } from '$lib/stores/blogs';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const blog = getBlog(Number(params.id));

  if (!blog) throw error(404, "Blog doesn't exist");

  return {
    blog
  };
};
