<script lang="ts">
	import { drawerOpened } from '$lib/store';
	import {Icon, Menu} from 'svelte-hero-icons'
</script>
<header class="w-full fixed top-0 left-0 flex text-xl text-neutral-50 justify-between p-10 z-20 max-md:p-4">
	<span>
		<a href="/">Minsu Kim</a>
	</span>
	<span class="flex gap-x-4 max-md:hidden">
		<a href="/career">Career</a>
		<a href="/posts">Blog</a>
		<a href="/projects">Projects</a>
		<a href="/about">About</a>
	</span>
  <span class="hidden max-md:block">
    <button on:click={() => drawerOpened.set(true)}>
      <Icon src={Menu} class="h-6 w-6"/>
    </button>
  </span>
</header>
