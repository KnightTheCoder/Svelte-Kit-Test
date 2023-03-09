<script lang="ts">
  import type { PageData } from './$types';
  import { onMount } from 'svelte';
  import { setTitle } from '$lib/functions/title';

  export let data: PageData;

  onMount(() => {
    setTitle(data.post.title);
  });

  $: setTitle(data.post.title);
</script>

<div class="text-center">
  <h1 class="text-sky-500 font-bold text-3xl">
    {data.post.title}
  </h1>
  <p>{data.post.description}</p>

  <form method="post" action="?/delete">
    <input type="hidden" name="id" value={data.post.id} />
    <button class="px-12 py-2 my-2 bg-red-700 hover:bg-red-500 rounded-lg"> Delete </button>
  </form>
</div>
