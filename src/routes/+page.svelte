<script lang="ts">
  import { onMount } from 'svelte';
  import { setTitle } from '$lib/functions/title';

  onMount(() => {
    setTitle('Home');
  });
</script>

<div class="text-center">
  <h1 class="text-3xl font-bold text-sky-500 mb-2">Welcome to my SvelteKit project!</h1>
  <p>
    Visit <a class="underline hover:text-sky-500" href="https://kit.svelte.dev">kit.svelte.dev</a>
    to read the documentation
  </p>
</div>
