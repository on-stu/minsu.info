<script lang="ts">
	import { formatDate } from '$lib/utils/format';

	export let thumbnailImageUrl =
		'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80';
	export let title = 'Hello World';
	export let subtitle = '부제목입니다';
	export let createdAt = new Date();
	export let id: number;
</script>

<a href="/posts/{id}" class="flex flex-col gap-2">
	<img
		src={thumbnailImageUrl}
		alt={title}
		class=" aspect-[0.8] w-full rounded-2xl object-cover object-center"
	/>
	<div>
		<h1 class="text-2xl font-bold text-neutral-900">{title}</h1>
		<p class="text-neutral-500">{subtitle}</p>
		<p class="text-neutral-500">{formatDate(createdAt)}</p>
	</div>
</a>
