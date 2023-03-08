import { error } from '@sveltejs/kit';
import { getBlog } from '$lib/stores/blogs';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  let blog = getBlog(Number(params.id));
  if (!blog) throw error(404, 'Not found!');

  return {
    blog
  };
};
