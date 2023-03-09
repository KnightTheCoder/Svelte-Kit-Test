import type { Blog } from '$lib/types/blog';
import { axiosInstance } from '$lib/functions/axios';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
  const resp = await axiosInstance.get(`/blogs/${params.id}`);
  const blog: Blog = (await resp.data) satisfies Blog;

  return {
    blog
  };
}) satisfies PageLoad;
