<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="text-center text-sky-500">
  <h1 class="text-3xl">{$page.status}</h1>
  <h2 class="text-xl">{$page.error?.message}</h2>
</div>
