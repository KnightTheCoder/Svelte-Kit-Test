import type { Blog } from '$lib/types/blog';
import axios from 'axios';

const blogsInstance = axios.create({
  baseURL: 'http://localhost:3000/blogs'
});

const getBlogs = async (): Promise<Blog[]> => {
  const resp = await blogsInstance.get('');
  const blogs: Blog[] = await resp.data;
  return blogs;
};

const getBlog = async (id: number | string): Promise<Blog> => {
  const resp = await blogsInstance.get(`/${id}`);
  const blog: Blog = await resp.data;
  return blog;
};

const createBlog = async (title: string, description: string) => {
  if ([title, description].includes('')) return;

  const blogs = await getBlogs();
  if (blogs.length == 0) return;

  const id = blogs.reduce((prev, cur) => (prev.id > cur.id ? prev : cur)).id + 1;

  const resp = await blogsInstance.post('', { id, title, description });
  return resp.status == 201;
};

const deleteBlog = async (id: number | string) => {
  const resp = await blogsInstance.delete(`/${id}`);
  return resp.status == 200;
};

export { getBlogs, getBlog, createBlog, deleteBlog };
