<script lang="ts">
  import { setTitle } from '$lib/functions/title';
  export let to: string;
</script>

<a href={to} class="mx-2 hover:text-sky-500">
  <slot />
</a>
