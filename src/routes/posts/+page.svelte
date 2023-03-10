<script lang="ts">
  import type { ActionData } from './$types';
  import { setTitle } from '$lib/functions/title';
  import { onMount } from 'svelte';

  export let form: ActionData;

  onMount(() => {
    setTitle('Posts');
  });
</script>

<div class="text-center">
  <h1 class="text-sky-500 text-3xl font-bold mb-4">Create a new post</h1>
  <form method="post">
    <p class="text-center text-red-700">{form?.error || ''}</p>
    <label class="block text-lg" for="title"> Title </label>
    <input class="p-2 my-2 rounded-lg bg-slate-500 focus:bg-slate-400" name="title" value={form?.title || ''} />

    <label class="block text-lg" for="description"> Description </label>
    <input class="p-2 my-2 rounded-lg bg-slate-500 focus:bg-slate-400" name="description" value={form?.description || ''} />

    <button class="px-24 py-2 my-2 mx-auto block rounded-lg bg-sky-700 hover:bg-sky-600">
      Create
    </button>
  </form>
</div>
