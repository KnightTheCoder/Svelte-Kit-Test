<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="w-1/2 mx-auto text-sky-500">
  <h1 class="text-3xl text-center font-bold">{data.blog?.title}</h1>
  <h2 class="text-xl text-center font-bold">{data.blog?.description}</h2>
</div>
