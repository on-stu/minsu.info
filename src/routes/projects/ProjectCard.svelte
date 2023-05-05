<script lang="ts">
	import ScrollDetectContainer from '$lib/components/ScrollDetectContainer.svelte';
	import { fadeFromBottom } from '$lib/utils/scrollDetectionStyle';
	import { Icon, Link } from 'svelte-hero-icons';

	type TLink = {
		text: string;
		url: string;
	};
	export let links: TLink[] = [];

	export let isLeft: boolean = false;
	export let title: string = 'title';
	export let description: string =
		'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero euismod, ultricies nisl vitae, aliquam nisl';
	export let mainImage: string = '/images/campusdate-main.webp';
	export let gradientNumber: number = 0;

	function getGradient() {
		switch (gradientNumber) {
			case 0:
				return 'gradient-0';
			case 1:
				return 'gradient-1';
			case 2:
				return 'gradient-2';
			case 3:
				return 'gradient-3';
			default:
				return 'gradient-0';
		}
	}
	let isInView: boolean;
</script>

<ScrollDetectContainer bind:isInView>
	<div class="{getGradient()} flex w-full flex-col rounded-2xl p-4 {fadeFromBottom(isInView)}">
		<div
			class="flex justify-between gap-2 {isLeft ? 'flex-row' : 'flex-row-reverse'} max-md:hidden"
		>
			<div class="flex w-1/2 flex-col gap-2 {isLeft ? 'items-start' : 'items-end'} justify-between">
				<div class="flex w-full flex-col gap-2 {isLeft ? 'items-start' : 'items-end'}">
					<span class="text-2xl font-bold text-neutral-50">{title}</span>
					<p class="break-keep text-lg text-neutral-200 {isLeft ? '' : 'text-right'}">
						{description}
					</p>
				</div>
				<div class="flex w-full flex-col gap-2 {isLeft ? 'items-start' : 'items-end'}">
					{#each links as link}
						<a href={link.url} target="_blank" class="flex items-center gap-x-2">
							<span class="text-lg text-neutral-50 underline">
								{link.text}
							</span>
							<Icon src={Link} class="inline-block h-4 w-4" />
						</a>
					{/each}
				</div>
			</div>
			<img src={mainImage} alt="main" class=" aspect-square w-1/2 rounded-2xl object-contain" />
		</div>
		<div class="md:hidden">
			<div class="flex flex-col gap-2">
				<span class="text-2xl font-bold text-neutral-50">{title}</span>
				<img src={mainImage} alt="main" class=" aspect-square w-full rounded-2xl object-contain" />
				<p class="break-keep text-lg text-neutral-200">{description}</p>
				<div
					class="flex w-full flex-col gap-2 {isLeft ? 'items-start max-md:items-end' : 'items-end'}"
				>
					{#each links as link}
						<a href={link.url} target="_blank" class="flex items-center gap-x-2">
							<span class="text-lg text-neutral-50 underline">
								{link.text}
							</span>
							<Icon src={Link} class="inline-block h-4 w-4" />
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div></ScrollDetectContainer
>
