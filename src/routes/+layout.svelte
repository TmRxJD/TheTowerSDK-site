<script lang="ts">
	import { page } from '$app/state';
	import favicon from '$lib/assets/favicon.svg';
	import { href } from '$lib/paths';
	import SiteFooter from '$lib/ui/SiteFooter.svelte';
	import SiteHeader from '$lib/ui/SiteHeader.svelte';
	import './layout.css';

	let { children } = $props();

	const home = href('/');
	const title = $derived(
		page.url.pathname === home || page.url.pathname === home.replace(/\/$/, '')
			? 'TheTowerSDK — build Tower tools from real game data'
			: 'TheTowerSDK'
	);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{title}</title>
	<meta
		name="description"
		content="TheTowerSDK: typed game tables, save-file readers, and formulas for The Tower. Point an AI at the MCP server and it builds calculators without inventing numbers."
	/>
	<meta name="theme-color" content="#0f1419" />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<SiteHeader />
	<main class="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
		{@render children()}
	</main>
	<SiteFooter />
</div>
