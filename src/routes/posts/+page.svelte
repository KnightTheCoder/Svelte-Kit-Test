<script lang="ts">
  import { setTitle } from '$lib/functions/title';
  import { onMount } from 'svelte';

  onMount(() => {
    setTitle('Posts');
  });
</script>

<div class="text-center">
  <h1 class="text-sky-500 text-3xl font-bold mb-4">Create a new post</h1>
  <form method="post">
    <label class="block text-lg" for="title"> Title </label>
    <input class="p-2 my-2 rounded-lg bg-slate-500 focus:bg-slate-400" name="title" />

    <label class="block text-lg" for="description"> Description </label>
    <input class="p-2 my-2 rounded-lg bg-slate-500 focus:bg-slate-400" name="description" />

    <button class="px-24 py-2 my-2 mx-auto block rounded-lg bg-sky-700 hover:bg-sky-600">
      Create
    </button>
  </form>
</div>
