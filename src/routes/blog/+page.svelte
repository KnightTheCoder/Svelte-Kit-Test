<script lang="ts">
  import RouterLink from '$lib/components/RouterLink.svelte';
  import { setTitle } from '$lib/functions/title';
  import { onMount } from 'svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  onMount(() => {
    setTitle('Blogs');
  });
</script>

<form class="w-1/2 mx-auto text-center" method="POST">
  <div class="w-1/2 mx-auto">
    <label for="title"> Title </label>
    <input class="w-full bg-slate-600 text-sky-500 rounded-lg p-2" name="title" />
  </div>

  <div class="w-1/2 mx-auto">
    <label for="description"> Description </label>
    <input class="w-full bg-slate-600 text-sky-500 rounded-lg p-2" name="description" />
  </div>

  <button class="rounded-lg bg-slate-600 hover:bg-slate-500 w-1/2 p-2 my-4"> Create </button>
</form>

<div class="w-1/2 text-center text-sky-500 mx-auto">
  {#each data.blogs as blog}
    <RouterLink to="/blog/{blog.id}">
      <div
        class="w-1/2 mx-auto border-slate-500 border rounded-lg p-2 bg-slate-700 hover:bg-slate-600 hover:cursor-pointer"
      >
        {blog.title}
      </div>
    </RouterLink>
  {/each}

  <RouterLink to="/blog/-1">
    <div
      class="w-1/2 mx-auto border-slate-500 border rounded-lg p-2 bg-slate-700 hover:bg-slate-600 hover:cursor-pointer"
    >
      This blog doesn't exist
    </div>
  </RouterLink>
</div>
