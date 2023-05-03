<script lang="ts">
	import { stacks } from '$lib/constants/stacks';
</script>

{#each stacks as stack}
	<img src={stack.imageUrl} alt={stack.name} class="h-[50px] inline-block mx-5 md:mx-[100px]" draggable="false"/>
{/each}
