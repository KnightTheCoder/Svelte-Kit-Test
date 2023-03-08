<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<form method="POST">
  <label>
    Title
    <input name="title" />
  </label>

  <label>
    Description
    <input name="description" />
  </label>
</form>
