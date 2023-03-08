<script lang="ts">
  import { setTitle } from '$lib/functions/title';
  import { onMount } from 'svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  onMount(() => {
    setTitle(data.blog?.title || '');
  });
</script>

<div class="text-center text-sky-500">
  <h1 class="text-3xl font-bold mb-2">{data.blog?.title}</h1>
  <p>{data.blog?.description}</p>
</div>
