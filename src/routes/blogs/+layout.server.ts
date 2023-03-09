import type { LayoutServerLoad } from './$types';
import type { Blog } from '$lib/types/blog';
import { getBlogs } from '$lib/functions/blogs';

export const load = (async () => {
  const blogs: Blog[] = await getBlogs();

  return {
    blogs
  };
}) satisfies LayoutServerLoad;
