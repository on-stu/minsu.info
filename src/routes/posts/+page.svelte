<script lang="ts">
	import { page } from '$app/stores';
	import Container from '$lib/components/Container.svelte';
	import Seo from '$lib/components/SEO.svelte';
	import ScrollDetectContainer from '$lib/components/ScrollDetectContainer.svelte';
	import { fadeFromBottom } from '$lib/utils/scrollDetectionStyle';
	import type { PageServerData } from './$types';
	import Banner from './Banner.svelte';
	import PostCard from './PostCard.svelte';
	let isInView: boolean;
	export let data: PageServerData;
</script>

<Seo />
<Banner />
<div class="w-full bg-neutral-200">
	<ScrollDetectContainer bind:isInView>
		<Container>
			<div class="mt-4 p-4">
				<h2 class="text-2xl font-bold text-neutral-900 {fadeFromBottom(isInView, 100)}">
					{$page.url.searchParams.get('q') ? '검색 결과' : '최신 글'}
				</h2>
			</div>
			<div
				class="grid grid-cols-3 gap-x-4 gap-y-8 p-4 max-md:grid-cols-1 {fadeFromBottom(
					isInView,
					100
				)}"
			>
				{#each data.posts as post}
					<PostCard
						title={post.title}
						id={post.id}
						thumbnailImageUrl={post.thumbnailImageUrl}
						createdAt={post.createdAt}
					/>
				{/each}
				{#if data.posts.length === 0}
					<div class="col-span-full flex min-h-[300px] flex-col items-center justify-center">
						<p class="text-2xl font-bold text-neutral-900">검색 결과가 없습니다.</p>
						<p class="text-neutral-500">다른 검색어로 다시 시도해주세요.</p>
					</div>
				{/if}
			</div>
			<div class="h-[100px]" />
		</Container>
	</ScrollDetectContainer>
</div>
