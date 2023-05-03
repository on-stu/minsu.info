<script lang="ts">
	import Cta from '$lib/components/CTA.svelte';
	import Stacks from './Stacks.svelte';
</script>

<div class="flex h-screen relative pb-[120px]">
	<div class="bg-neutral-600 h-full w-1/2 flex justify-center items-center text-neutral-50 max-md:hidden">
		<div class="w-2/3 flex flex-col gap-y-4">
			<h2 class="font-bold text-6xl mb-4">풀스택 개발자</h2>
			<h1 class=" font-extrabold text-8xl mb-8">김민수</h1>
			<span class="text-neutral-300 font-medium text-lg">// ABOUT ME</span>
			<p class="font-bold text-lg">안녕하세요. 코딩을 사랑하는 개발자입니다.</p>
			<span class="text-neutral-300 font-medium text-lg">
				문과적 소양과 이과적 능력을 겸비한 '융합형 인재'입니다.
			</span>
		</div>
	</div>
	<div class="h-full flex w-1/2 justify-center items-end bg-neutral-800 max-md:w-full">
		<img src="/images/profile.png" alt="profile" class="w-1/2 object-contain max-md:w-full" />
	</div>
	<div class="absolute inset-0 flex items-center justify-center max-md:items-end">
		<Cta />
		<div class="w-full h-3/5 p-4 flex md:hidden bg-gradient-to-t justify-between pb-[136px] from-neutral-600 to-transparent text-neutral-50 flex-col">
			<div class="flex flex-col">
				<h2 class="font-bold text-3xl mb-4">풀스택 개발자</h2>
				<h1 class=" font-extrabold text-4xl mb-8">김민수</h1>
				<span class="text-neutral-300 font-medium text-lg">// ABOUT ME</span>
				<p class="font-bold text-lg">안녕하세요. 코딩을 사랑하는 개발자입니다.</p>
				<span class="text-neutral-300 font-medium text-lg">
					문과적 소양과 이과적 능력을 겸비한<br>'융합형 인재'입니다.
				</span>
			</div>
				<a 
				href="https://open.kakao.com/o/sK9sDrif"
				target="_blank"
				class="bg-green-800 p-4 justify-self-end rounded-2xl 
				flex justify-center items-center shadow-2xl
				font-bold text-lg text-neutral-100">Contact Me</a>
			</div>
	</div>
	<div class="w-full overflow-hidden absolute bottom-0 h-[120px] flex items-center bg-neutral-900">
			<div
				class="logo-list w-max select-none whitespace-nowrap shrink-0 grow-0
	"
			>
				<Stacks />
				<Stacks />
			</div>

	</div>
</div>
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
