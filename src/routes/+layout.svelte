<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Header from "../components/Header.svelte";

	export const prerender = true;

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
{@render children?.()}
