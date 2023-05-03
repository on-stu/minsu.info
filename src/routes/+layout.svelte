<script lang="ts">
	import Drawer from '$lib/components/Drawer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<Header />
<slot />
<Drawer />