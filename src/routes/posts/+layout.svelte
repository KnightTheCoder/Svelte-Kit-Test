<script lang="ts">
  import type { LayoutData } from './$types';
  import RouterLink from '$lib/components/RouterLink.svelte';
  import { fly } from 'svelte/transition';

  export let data: LayoutData;
</script>

<aside
  class="p-2 rounded-lg fixed h-10/12 right-2 bottom-12 top-12 w-1/4 bg-slate-600 overflow-y-auto"
>
  <h1 class="text-sky-500 text-3xl font-bold">Latest posts</h1>
  {#each data.posts as post}
    <RouterLink to="/posts/{post.id}">
      <div class="p-2 rounded-lg bg-slate-700 overflow-x-hidden" transition:fly>
        <h2 class="text-xl mb-2">{post.title}</h2>
        <p>{@html post.description}</p>
      </div>
    </RouterLink>
  {:else}
    <h2 class="mt-6">No posts available</h2>
  {/each}
</aside>

<slot />
