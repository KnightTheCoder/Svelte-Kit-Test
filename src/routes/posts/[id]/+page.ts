import type { Post } from '$lib/types/post';
import { getPost } from '$lib/functions/posts';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
  const post: Post = await getPost(params.id);

  return {
    post
  };
}) satisfies PageLoad;
