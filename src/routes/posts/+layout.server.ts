import type { LayoutServerLoad } from './$types';
import type { Post } from '$lib/types/post';
import { getPosts } from '$lib/functions/posts';

export const load = (async () => {
  const posts: Post[] = await getPosts();

  return {
    posts
  };
}) satisfies LayoutServerLoad;
