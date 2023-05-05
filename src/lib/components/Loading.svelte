<script lang="ts">
	import { onMount } from 'svelte';
	import Spinner from './Spinner.svelte';

	export let show = false;
	export let text = '';

	onMount(() => {
		setTimeout(() => {
			show = true;
		}, 500);

		return () => {
			show = false;
		};
	});
</script>

{#if show}
	<div
		tabindex="-1"
		class="fixed left-0 right-0 top-0 z-50 flex h-screen w-full cursor-wait items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 transition-all md:inset-0 md:h-full"
	>
		<div role="status" class="flex flex-col items-center justify-center gap-2">
			<Spinner />
			<span class="sr-only">로딩중...</span>
			{#if text}
				<span class="text-center text-lg font-bold text-white">
					{@html text}
				</span>
			{/if}
		</div>
	</div>
{/if}
