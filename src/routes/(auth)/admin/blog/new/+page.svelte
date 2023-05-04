<script lang="ts">
	import { enhance } from '$app/forms';
	import Container from '$lib/components/Container.svelte';
</script>

<Container class="min-h-screen pt-[200px] text-neutral-50">
	<form use:enhance class="flex w-full flex-col gap-4" method="post">
		<input type="text" name="title" placeholder="title" class="rounded-lg p-4 text-neutral-900" />
		<input
			type="text"
			name="thumbnailImageUrl"
			placeholder="thunbnailImageUrl"
			class="rounded-lg p-4 text-neutral-900"
		/>
		<textarea
			name="content"
			placeholder="content"
			class="h-[500px] rounded-lg p-4 text-neutral-900"
		/>
		<button type="submit" class="w-full rounded-lg bg-green-800 p-4">Submit</button>
	</form>
</Container>
