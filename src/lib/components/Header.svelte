<script lang="ts">
	import { page } from '$app/stores';
	import { drawerOpened } from '$lib/store';
	import { Icon, Menu } from 'svelte-hero-icons';

	let scrollY: number;
</script>

<svelte:window bind:scrollY />
<header
	class="fixed left-0 top-0 z-20 flex w-full justify-between p-10 text-xl text-neutral-50 transition
		duration-300 ease-in-out max-md:p-4
{scrollY > 50 ? 'bg-neutral-900' : ''}"
>
	<span>
		<a href="/">Minsu Kim</a>
	</span>
	<span class="flex gap-x-4 max-md:hidden">
		<a href="/careers" class={$page.url.pathname === '/careers' ? 'text-green-600' : ''}>Careers</a>
		<a href="/posts" class={$page.url.pathname === '/posts' ? 'text-green-600' : ''}>Blog</a>
		<a href="/projects" class={$page.url.pathname === '/projects' ? 'text-green-600' : ''}
			>Projects</a
		>
		<a href="/about" class={$page.url.pathname === '/about' ? 'text-green-600' : ''}>About</a>
	</span>
	<span class="hidden max-md:block">
		<button on:click={() => drawerOpened.set(true)}>
			<Icon src={Menu} class="h-6 w-6" />
		</button>
	</span>
</header>
