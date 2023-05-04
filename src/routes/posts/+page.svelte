<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import ScrollDetectContainer from '$lib/components/ScrollDetectContainer.svelte';
	import { fadeFromBottom } from '$lib/utils/scrollDetectionStyle';
	import type { PageServerData } from './$types';
	import Banner from './Banner.svelte';
	import PostCard from './PostCard.svelte';
	let isInView: boolean;
	export let data: PageServerData;
</script>

<Banner />
<div class="w-full bg-neutral-200">
	<ScrollDetectContainer bind:isInView>
		<Container>
			<div class="mt-4 p-4">
				<h2 class="text-2xl font-bold text-neutral-900 {fadeFromBottom(isInView, 100)}">
					최신글 보기
				</h2>
			</div>
			<div
				class="grid grid-cols-3 gap-x-4 gap-y-8 p-4 max-md:grid-cols-1 {fadeFromBottom(
					isInView,
					100
				)}"
			>
				{#each data.posts as post}
					<PostCard title={post.title} id={post.id} thumbnailImageUrl={post.thumbnailImageUrl} />
				{/each}
			</div>
			<div class="h-[100px]" />
		</Container>
	</ScrollDetectContainer>
</div>
