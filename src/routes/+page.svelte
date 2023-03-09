<script lang="ts">
  import { createBlog } from '$lib/stores/blogs';
  import { onMount } from 'svelte';
  import { setTitle } from '$lib/functions/title';

  onMount(() => {
    setTitle('Home');
    createBlog('Random thingy', 'This is why I hate my life');
    createBlog('Another random thingy', 'This is also why I hate my life');
  });
</script>

<div class="text-center">
  <h1 class="text-3xl font-bold text-sky-500 mb-2">Welcome to my SvelteKit project!</h1>
  <p>
    Visit <a class="underline hover:text-sky-500" href="https://kit.svelte.dev">kit.svelte.dev</a>
    to read the documentation
  </p>
</div>
