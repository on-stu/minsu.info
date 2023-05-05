<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import FloatingButton from '$lib/components/FloatingButton.svelte';
	import Seo from '$lib/components/SEO.svelte';
	import ScrollDetectContainer from '$lib/components/ScrollDetectContainer.svelte';
	import { careers } from '$lib/constants/careers';
	import { fadeFromBottom } from '$lib/utils/scrollDetectionStyle';
	import CareerCard from './CareerCard.svelte';
	let isInView: boolean;

	let delayStyles = [
		'delay-300',
		'delay-500',
		'delay-700',
		'delay-1000',
		'delay-[1200ms]',
		'delay-[1400ms]',
	];
</script>

<Seo />
<div class="relative w-screen">
	<ScrollDetectContainer bind:isInView>
		<Container class="relative mt-[100px] flex min-h-screen flex-col text-neutral-50">
			{#each careers as career, i}
				<div
					class="flex w-full {i % 2 === 0 ? 'justify-start' : 'justify-end'} {fadeFromBottom(
						isInView
					)} {delayStyles[i]}"
				>
					<div class="w-1/2 p-4 max-md:w-full">
						<CareerCard isLeft={i % 2 === 0} {...career} />
					</div>
				</div>
			{/each}
			<div class="absolute inset-0 flex h-full w-full justify-center max-md:justify-start">
				<div
					class="{isInView
						? 'h-full'
						: 'h-0'} w-[2px] rounded-full bg-green-800 transition-all duration-500 ease-in-out"
				/>
			</div>
		</Container>
	</ScrollDetectContainer>
	<FloatingButton />
</div>
