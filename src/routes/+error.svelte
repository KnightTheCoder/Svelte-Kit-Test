<script lang="ts">
  import { page } from '$app/stores';
  import { setTitle } from '$lib/functions/title';
  import { onMount } from 'svelte';

  onMount(() => {
    setTitle(`${$page.status} ${$page.error?.message}`);
  });
</script>

<div class="text-center">
  <h1 class="text-3xl text-sky-500 mb-2">{$page.status}</h1>
  <h2 class="text-xl">{$page.error?.message}</h2>
</div>
