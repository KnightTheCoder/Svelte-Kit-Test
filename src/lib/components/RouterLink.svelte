<script lang="ts">
  import { setTitle } from '$lib/functions/title';
  export let to: string;

  let content: HTMLSpanElement;

  const changeTitle = () => {
    setTitle(content?.innerText);
  };
</script>

<a href={to} class="mx-2 hover:text-sky-500" on:click={changeTitle}>
  <span bind:this={content}>
    <slot />
  </span>
</a>
