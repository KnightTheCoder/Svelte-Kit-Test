<script lang="ts">
  import { setTitle } from '$lib/functions/title';
  import { onMount } from 'svelte';

  onMount(() => {
    setTitle('About');
  });
</script>

<div class="mx-auto text-center">
  <h1 class="text-3xl font-bold text-sky-500 mb-2">About the project</h1>
  <p>This project is for learning svelte kit with typescript</p>
</div>
