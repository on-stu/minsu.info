<script lang="ts">
	import Cta from '$lib/components/CTA.svelte';
	import Seo from '$lib/components/SEO.svelte';
	import ScrollDetectContainer from '$lib/components/ScrollDetectContainer.svelte';
	import { fadeFromBottom } from '$lib/utils/scrollDetectionStyle';
	import Stacks from './Stacks.svelte';
	let isInView: boolean;
</script>

<Seo />
<ScrollDetectContainer bind:isInView>
	<div class="relative flex h-screen pb-[120px]">
		<div
			class="flex h-full w-1/2 items-center justify-center bg-neutral-600 text-neutral-50 max-md:hidden"
		>
			<div class="flex w-2/3 flex-col gap-y-4">
				<h2 class="mb-4 text-6xl font-bold {fadeFromBottom(isInView)}">풀스택 개발자</h2>
				<h1 class=" mb-8 text-8xl font-extrabold {fadeFromBottom(isInView, 75)}">김민수</h1>
				<span class="text-lg font-medium text-neutral-300 {fadeFromBottom(isInView, 100)}"
					>// ABOUT ME</span
				>
				<p class="text-lg font-bold {fadeFromBottom(isInView, 100)}">
					안녕하세요. 코딩을 사랑하는 개발자입니다.
				</p>
				<span class="text-lg font-medium text-neutral-300 {fadeFromBottom(isInView, 100)}">
					문과적 소양과 이과적 능력을 겸비한 '융합형 인재'입니다.
				</span>
			</div>
		</div>
		<div class="flex h-full w-1/2 items-end justify-center bg-neutral-800 max-md:w-full">
			<img
				src="/images/profile.webp"
				alt="profile"
				class="w-1/2 object-contain max-md:w-full {fadeFromBottom(isInView)}"
			/>
		</div>
		<div class="absolute inset-0 flex items-center justify-center max-md:items-end">
			<Cta />
			<div
				class="flex w-full flex-col justify-between bg-gradient-to-t from-neutral-600 to-transparent p-4 pb-[136px] text-neutral-50 max-xs:h-full max-xs:justify-end xs:h-3/5 md:hidden"
			>
				<div class="flex flex-col max-xs:mb-10">
					<h2 class="mb-4 text-3xl font-bold {fadeFromBottom(isInView)}">풀스택 개발자</h2>
					<h1 class=" mb-8 text-4xl font-extrabold {fadeFromBottom(isInView, 75)}">김민수</h1>
					<span class="text-lg font-medium text-neutral-300 {fadeFromBottom(isInView, 100)}"
						>// ABOUT ME</span
					>
					<p class="text-lg font-bold {fadeFromBottom(isInView, 100)}">
						안녕하세요. 코딩을 사랑하는 개발자입니다.
					</p>
					<span class="text-lg font-medium text-neutral-300 {fadeFromBottom(isInView, 100)}">
						문과적 소양과 이과적 능력을 겸비한<br />'융합형 인재'입니다.
					</span>
				</div>
				<a
					href="https://open.kakao.com/o/sK9sDrif"
					target="_blank"
					class="flex items-center justify-center justify-self-end
				rounded-2xl bg-green-800 p-4 text-lg
				font-bold text-neutral-100 shadow-2xl">Contact Me</a
				>
			</div>
		</div>
		<div
			class="absolute bottom-0 flex h-[120px] w-full items-center overflow-hidden bg-neutral-900"
		>
			<div
				class="logo-list w-max shrink-0 grow-0 select-none whitespace-nowrap
			"
			>
				<Stacks />
				<Stacks />
			</div>
		</div>
	</div>
</ScrollDetectContainer>

<style>
	@keyframes slide {
		0% {
			transform: translate3d(0, 0, 0);
		}
		100% {
			transform: translate3d(-50%, 0, 0);
		}
	}
	.logo-list {
		animation: slide 20s linear infinite;
	}
</style>
