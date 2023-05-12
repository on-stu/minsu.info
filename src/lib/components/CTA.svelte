<script lang="ts">
	import { PUBLIC_OPEN_CHAT_URL } from '$env/static/public';
</script>

<a
	href={PUBLIC_OPEN_CHAT_URL}
	target="_blank"
	class="mt-[200px] flex h-[120px] w-[120px] items-center
	justify-center rounded-full bg-green-800 shadow-2xl transition-all hover:scale-110
	max-md:hidden"
>
	<span class="text-lg font-bold text-neutral-100">Contact Me</span>
</a>
