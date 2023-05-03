<script lang="ts">
	import { inview } from 'svelte-inview';

	export let isInView: boolean;
</script>

<div class=" hidden delay-75" />
<div class=" hidden delay-150" />
<div class=" hidden delay-200" />
<div class=" hidden delay-300" />
<div class=" hidden delay-500" />
<div class=" hidden delay-700" />
<div
	use:inview={{
		unobserveOnEnter: true,
		rootMargin: '-20%',
	}}
	on:change={(e) => {
		isInView = e.detail.inView;
	}}
>
	<slot />
</div>
