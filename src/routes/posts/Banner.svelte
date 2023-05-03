<script lang="ts">
	import ScrollDetectContainer from '$lib/components/ScrollDetectContainer.svelte';
	import { fadeFromBottom } from '$lib/utils/scrollDetectionStyle';
	import { Icon, Search } from 'svelte-hero-icons';
	let isInView: boolean;
</script>

<ScrollDetectContainer bind:isInView>
	<div class="relative">
		<video
			src="/videos/stars.mp4"
			autoplay
			loop
			muted
			playsinline
			class="h-[500px] w-full object-cover object-bottom"
		/>
		<div class=" h-[100px] w-full bg-gradient-to-b from-black to-neutral-900" />
		<div class="absolute inset-0 flex flex-col bg-gradient-to-b from-transparent to-neutral-900">
			<div class="flex h-full flex-col items-center justify-center gap-2 max-md:px-4">
				<h1 class="text-4xl font-bold text-neutral-50 {fadeFromBottom(isInView)}">
					Welcome to my blog
				</h1>
				<p class="text-neutral-50 {fadeFromBottom(isInView)}">
					This is a blog about my journey as a developer
				</p>
				<span
					class="mt-4 flex w-full max-w-4xl items-center gap-x-2 rounded-2xl bg-neutral-50 px-4 outline-none {fadeFromBottom(
						isInView
					)}"
				>
					<input class="h-full w-full bg-transparent p-4" placeholder="검색어를 입력해주세요" />
					<Icon src={Search} class="h-6 w-6 text-neutral-400" />
				</span>
			</div>
		</div>
	</div>
</ScrollDetectContainer>
