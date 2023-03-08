import { getBlogs } from '$lib/stores/blogs';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  return {
    blogs: getBlogs()
  };
};
