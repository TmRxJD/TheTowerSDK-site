<script lang="ts">
	import { toolKinds } from '$lib/content';
	import { href } from '$lib/paths';
	import GlassPanel from '$lib/ui/GlassPanel.svelte';
</script>

<svelte:head>
	<title>Tools you can build · TheTowerSDK</title>
</svelte:head>

<p class="text-xs font-semibold tracking-[0.18em] text-accent uppercase">Build</p>
<h1 class="mt-2 text-3xl font-semibold">What kinds of tools this is for</h1>
<p class="mt-2 max-w-2xl text-muted">
	The SDK does not ship a UI. It ships the game. These are the shapes people actually build — the
	Run Tracker is one of them, not the only one.
</p>

<div class="mt-8 grid gap-4 md:grid-cols-2">
	{#each toolKinds as tool (tool.title)}
		<GlassPanel>
			<p class="font-mono text-xs text-accent">{tool.tag}</p>
			<h2 class="mt-1 text-lg font-medium">{tool.title}</h2>
			<p class="mt-2 text-sm text-muted">{tool.body}</p>
		</GlassPanel>
	{/each}
</div>

<p class="mt-8 max-w-2xl text-sm text-muted">
	A typical tool is: decode a save (or take a form), map it onto a catalog, run a formula, format
	the number the way the game would. The mapping is yours because where the player’s data comes from
	is your decision. The catalogs and planners are already written.
</p>
<p class="mt-4 text-sm">
	<a href={href('/ai/')}>Have an agent scaffold one from a prompt →</a>
</p>
