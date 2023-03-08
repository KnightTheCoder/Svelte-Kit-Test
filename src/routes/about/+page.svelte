<script lang="ts">
  import { onMount } from 'svelte';
  import { setTitle } from '$lib/functions/title';

  onMount(() => {
    setTitle('About');
  });
</script>

<div class="text-center">
  <h1 class="text-3xl mb-2 font-bold text-sky-500">About this project</h1>

  <p>This is a project dedicated to testing Svelte Kit</p>
</div>
