<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Seo from '$lib/components/SEO.svelte';
	import { formatDate } from '$lib/utils/format';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<Seo metaData={{ title: data.title }} />
<div class="relative">
	<img
		src={data.thumbnailImageUrl}
		alt="background"
		class="h-[200px] w-full object-cover object-center lg:h-[500px]"
	/>
	<div class="absolute inset-0 bg-gradient-to-t from-transparent to-neutral-900" />
</div>
<div class="h-full w-full bg-white px-4 py-14 lg:px-0 lg:py-20">
	<Container class="mt-0 bg-white">
		<article class="prose min-w-full">
			<!-- title -->
			<span class="text-4xl font-bold text-neutral-900 lg:text-5xl">
				{data.title}
			</span>

			<!-- createdAt -->
			<span class=" text-base font-medium text-neutral-400">
				<span class="font-normal">{formatDate(new Date(data.createdAt))}</span>
			</span>
			<hr class="mb-20 mt-20 h-2 w-[100px] bg-neutral-900" />
			{@html data.content}
		</article>
	</Container>
</div>

<style>
	@media (max-width: 1024px) {
		article > hr {
			margin-top: 56px !important;
			margin-bottom: 56px !important;
		}
	}
</style>
