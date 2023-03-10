import type { Post } from '$lib/types/post';
import axios from 'axios';

const postInstance = axios.create({
  baseURL: 'http://localhost:3000/posts'
});

const getPosts = async (): Promise<Post[]> => {
  const resp = await postInstance.get('');
  const posts: Post[] = await resp.data;
  return posts;
};

const getPost = async (id: number | string): Promise<Post> => {
  const resp = await postInstance.get(`/${id}`);
  const post: Post = await resp.data;
  return post;
};

const createPost = async (title: string, description: string) => {
  if ([title, description].includes('')) return;

  const posts = await getPosts();
  let id = 1;
  if (posts.length > 0) {
    id = posts.reduce((prev, cur) => (prev.id > cur.id ? prev : cur)).id + 1;
  }

  if (posts.some((x) => x.title == title)) {
    throw Error('This post already exists!');
  }

  const resp = await postInstance.post('', { id, title, description });
  return resp.status == 201;
};

const editPost = async (id: number | string, title: string, description: string) => {
  const post = await getPost(id);

  if (!post) throw Error("Post doesn't exist!");

  const resp = await postInstance.put(`/${id}`, { title, description });
  return resp.status == 200;
};

const deletePost = async (id: number | string) => {
  const resp = await postInstance.delete(`/${id}`);
  return resp.status == 200;
};

export { getPosts, getPost, createPost, editPost, deletePost };
