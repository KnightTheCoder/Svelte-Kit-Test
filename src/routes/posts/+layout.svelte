<script lang="ts">
  import type { LayoutData } from './$types';
  import RouterLink from '$lib/components/RouterLink.svelte';

  export let data: LayoutData;
</script>

<aside class="p-2 rounded-lg fixed h-full right-4 top-12 w-1/4 bg-slate-600">
  <h1 class="text-sky-500 text-3xl font-bold">Latest posts</h1>
  {#each data.posts as post}
    <RouterLink to="/posts/{post.id}">
      <div class="p-2 rounded-lg bg-slate-700">
        <h2 class="text-xl mb-2">{post.title}</h2>
        <p>{post.description}</p>
      </div>
    </RouterLink>
  {/each}
</aside>

<slot />
