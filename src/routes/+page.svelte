<script lang="ts">
	import Cta from '$lib/components/CTA.svelte';
	import Stacks from './Stacks.svelte';
</script>

<div class="flex h-screen relative pb-[120px]">
	<div class="bg-neutral-600 h-full w-1/2 flex justify-center items-center text-neutral-50">
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
	<div class="h-full flex w-1/2 justify-center items-end bg-neutral-800">
		<img src="/images/profile.png" alt="profile" class="w-1/2 object-contain" />
	</div>
	<div class="absolute inset-0 flex items-center justify-center">
		<Cta />
	</div>
	<div
		class="absolute h-[120px] bottom-0 bg-neutral-900 w-full flex justify-around flex-row items-center"
	>
		<Stacks />
	</div>
</div>
