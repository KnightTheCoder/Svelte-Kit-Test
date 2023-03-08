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

<form class="w-1/2 mx-auto" method="POST">
  <label class="block text-center">
    Title
    <input class="w-1/2 mx-auto" name="title" />
  </label>

  <label class="block text-center">
    Description
    <input class="w-1/2 mx-auto" name="description" />
  </label>
</form>

<div class="w-1/2 text-center text-sky-500 mx-auto">
  {#each data.blogs as blog}
    <RouterLink to="/blog/${blog.id}">
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
