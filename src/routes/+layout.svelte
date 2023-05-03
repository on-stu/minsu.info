<script lang="ts">
	import Drawer from '$lib/components/Drawer.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<Header />
<slot />
<Footer />
<Drawer />
