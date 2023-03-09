<script lang="ts">
  import type { PageData } from './$types';
  import { onMount } from 'svelte';
  import { setTitle } from '$lib/functions/title';

  export let data: PageData;

  onMount(() => {
    setTitle(data.blog.title);
  });

  $: setTitle(data.blog.title);
</script>

<div class="text-center">
  <h1 class="text-sky-500 font-bold text-3xl">
    {data.blog.title}
  </h1>
  <p>{data.blog.description}</p>
</div>
