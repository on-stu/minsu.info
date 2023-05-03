<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Banner from './Banner.svelte';
	import PostCard from './PostCard.svelte';

	let posts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
</script>

<Banner />
<Container>
	<div class="mt-4 p-4">
		<h2 class="text-2xl font-bold text-neutral-50">최신글 보기</h2>
	</div>
	<div class="grid grid-cols-3 gap-x-4 gap-y-8 p-4 max-md:grid-cols-1">
		{#each posts as post}
			<PostCard />
		{/each}
	</div>
</Container>
