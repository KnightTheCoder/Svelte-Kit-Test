import type { LayoutServerLoad } from './$types';
import type { Blog } from '$lib/types/blog';
import { axiosInstance } from '$lib/functions/axios';

export const load = (async () => {
  const resp = await axiosInstance.get('/blogs');
  const blogs: Blog[] = (await resp.data) satisfies Blog[];

  return {
    blogs
  };
}) satisfies LayoutServerLoad;
