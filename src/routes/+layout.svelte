<script lang="ts">
	import { navigating } from '$app/stores';
	import Drawer from '$lib/components/Drawer.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import '../app.css';
</script>

<Header />
<slot />
<Footer />
<Drawer />
{#if $navigating}
	<Loading />
{/if}
