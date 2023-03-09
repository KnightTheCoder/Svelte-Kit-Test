import type { Blog } from '$lib/types/blog';
import { getBlog } from '$lib/functions/blogs';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
  const blog: Blog = await getBlog(params.id);

  return {
    blog
  };
}) satisfies PageLoad;
