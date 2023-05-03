<script lang="ts">
	import { goto } from '$app/navigation';
	import { drawerOpened } from '$lib/store';
	import { Icon, X, ChevronRight } from 'svelte-hero-icons';
	import { fade, fly } from 'svelte/transition';
</script>

{#if $drawerOpened}
	<div
		class="fixed top-0 z-50 flex h-screen w-screen justify-end bg-black/50"
		transition:fade={{ duration: 500 }}
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="absolute z-40 h-full w-full bg-transparent blur-md"
			on:click={() => ($drawerOpened = false)}
		/>
		<div
			class="z-50 box-border h-full w-4/5 border-l border-solid border-neutral-700 bg-black"
			transition:fly={{ x: 100, duration: 500 }}
		>
			<div class="flex w-full justify-end px-4 py-6">
				<button
					class="text-neutral-50 "
					on:click={() => ($drawerOpened = false)}
				>
					<Icon src={X} class="h-6 w-6" />
				</button>
			</div>
			<hr class=" border border-neutral-700" />
			<div class="w-full px-4 py-6 ">
				<button
					on:click={() => {
						$drawerOpened = false;
						goto('/career')
					}}
					class="flex w-full items-center justify-between"
				>
					<span class="text-xl font-medium text-neutral-50"
						>Career</span
					>
					<Icon
						src={ChevronRight}
						class="h-6 w-6 text-neutral-600"
					/>
				</button>
			</div>
			<hr class=" border border-neutral-700" />
			<div class="w-full px-4 py-6 ">
				<button
					on:click={() => {
						$drawerOpened = false;
						goto('/projects')
					}}
					class="flex w-full items-center justify-between"
				>
					<span class="text-xl font-medium text-neutral-50"
						>Projects</span
					>
					<Icon
						src={ChevronRight}
						class="h-6 w-6 text-neutral-600"
					/>
				</button>
			</div>
			<hr class=" border border-neutral-700" />
			<div class="w-full px-4 py-6 ">
				<button
					on:click={() => {
						$drawerOpened = false;
						goto('/posts')
					}}
					class="flex w-full items-center justify-between"
				>
					<span class="text-xl font-medium text-neutral-50"
						>Blog</span
					>
					<Icon
						src={ChevronRight}
						class="h-6 w-6 text-neutral-600"
					/>
				</button>
			</div>
			<hr class=" border border-neutral-700" />
			<div class="w-full px-4 py-6 ">
				<button
					on:click={() => {
						$drawerOpened = false;
						goto('/about')
					}}
					class="flex w-full items-center justify-between"
				>
					<span class="text-xl font-medium text-neutral-50"
						>About</span
					>
					<Icon
						src={ChevronRight}
						class="h-6 w-6 text-neutral-600"
					/>
				</button>
			</div>
		</div>
	</div>
{/if}
