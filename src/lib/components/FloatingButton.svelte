<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	let scrollY: number;
</script>

<svelte:window bind:scrollY />
{#if scrollY > 50}
	<div
		class="sticky bottom-0 right-0 flex justify-end p-6 max-md:justify-center max-md:bg-black"
		transition:fade
	>
		<a
			href="https://open.kakao.com/o/sK9sDrif"
			target="_blank"
			class="  z-20 flex h-[120px] w-[120px]
	items-center justify-center rounded-full bg-green-800 shadow-2xl transition-all
	hover:scale-110 max-md:hidden"
			transition:fly={{ y: 100, duration: 500 }}
		>
			<span class="text-lg font-bold text-neutral-100">Contact Me</span>
		</a>
		<a
			href="https://open.kakao.com/o/sK9sDrif"
			target="_blank"
			transition:fly={{ y: 100, duration: 500 }}
			class="flex w-full items-center justify-center
				justify-self-end rounded-2xl bg-green-800 p-4 text-lg
				font-bold text-neutral-100 shadow-2xl md:hidden">Contact Me</a
		>
	</div>
{/if}
