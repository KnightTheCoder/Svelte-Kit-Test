import type { Blog } from '$lib/types/blog';
import { get, writable } from 'svelte/store';

let blogs = writable(Array<Blog>());

const getBlogs = () => get(blogs);
const getBlog = (id: number): Blog | null => getBlogs().find((it: Blog) => it.id == id) || null;
const createBlog = (title: string, description: string) => {
  if (title.trim() == '' || description.trim() == '') return;
  let id = getBlogs().length
    ? getBlogs().reduce((prev: Blog, cur: Blog) => (prev.id > cur.id ? prev : cur)).id + 1
    : 1;

  blogs.update((arr: Blog[]) => [...arr, { id, title, description }]);
};
const deleteBlog = (id: number) =>
  blogs.update((arr: Blog[]) => arr.filter((it: Blog) => it.id != id));

export { getBlogs, getBlog, createBlog, deleteBlog };
