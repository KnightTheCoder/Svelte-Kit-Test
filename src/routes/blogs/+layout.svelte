<script lang="ts">
  import type { LayoutData } from './$types';
  import RouterLink from '$lib/components/RouterLink.svelte';

  export let data: LayoutData;
</script>

<aside class="fixed right-4 top-12">
  <h1 class="text-sky-500 text-3xl font-bold">Latest blogs</h1>
  {#each data.blogs as blog}
    <div class="px-2 bg-slate-700 hover:bg-slate-600 my-4 rounded-lg">
      <RouterLink to="/blogs/{blog.id}">
        <h2 class="text-xl mb-2">{blog.title}</h2>
        <p>{blog.description}</p>
      </RouterLink>
    </div>
  {/each}
</aside>

<slot />
