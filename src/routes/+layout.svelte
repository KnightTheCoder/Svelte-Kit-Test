<script lang="ts">
  import '../app.css';
  import RouterLink from '../lib/components/RouterLink.svelte';
</script>

<nav class="bg-slate-700 p-2">
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterLink to="/blog">Blogs</RouterLink>
</nav>

<div class="mt-2">
  <slot />
</div>

<footer class="text-center p-2 w-screen bg-slate-700 fixed bottom-0">
  &copy; KnightTheCoder All rights reserved
</footer>
