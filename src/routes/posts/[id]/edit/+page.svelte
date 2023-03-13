<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionData, PageData } from './$types';

  export let data: PageData;
  export let form: ActionData;
</script>

<div class="w-fit mx-auto text-center">
  <form method="post" action="?/edit" use:enhance>
    <p class="text-red-700">{form?.error || ''}</p>
    <input type="hidden" name="id" value={data.post.id} />

    <label class="block text-lg" for="title"> Title </label>
    <input
      class="p-2 my-2 rounded-lg bg-slate-500 focus:bg-slate-400"
      name="title"
      value={data.post.title}
    />

    <label class="block text-lg" for="title"> Description </label>
    <textarea
      class="p-2 my-2 rounded-lg bg-slate-500 focus:bg-slate-400"
      name="description"
      value={data.post.description}
    />

    <button class="block px-16 py-2 my-2 bg-sky-700 hover:bg-sky-500 rounded-lg">
      Save changes
    </button>
  </form>
</div>
