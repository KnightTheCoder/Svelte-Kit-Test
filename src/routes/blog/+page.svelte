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

<div class="w-1/2 text-center text-sky-500 mx-auto">
  {#each data.blogs as blog}
    <RouterLink to={`/blog/${blog.id}`}>
      <div
        class="w-1/2 mx-auto border-slate-500 border rounded-lg p-2 hover:bg-slate-600 hover:cursor-pointer"
      >
        {blog.title}
      </div>
    </RouterLink>
  {/each}
</div>
