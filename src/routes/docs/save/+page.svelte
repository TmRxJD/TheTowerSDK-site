<script lang="ts">
	import CodeBlock from '$lib/ui/CodeBlock.svelte';
	import { saveSnippet } from '$lib/content';
	import { LINKS } from '$lib/links';
	import { href } from '$lib/paths';
</script>

<svelte:head>
	<title>Save files · Docs · TheTowerSDK</title>
</svelte:head>

<h1 class="text-3xl font-semibold">Save files</h1>
<p class="mt-3 text-muted">
	Android path:
	<code>Android/data/com.TechTreeGames.TheTower/files/playerInfo.dat</code>.
	<a href={LINKS.adbBridge}>adb-bridge</a> can copy it off a device or emulator.
</p>

<h2 class="mt-8 text-xl font-medium">Decode and read</h2>
<p class="mt-2 text-sm text-muted">
	Decode in Node with <code>thetowersdk/node</code>, then use extractors in
	<code>thetowersdk/save</code> (labs, modules, cards, UWs, run history, and more).
</p>
<div class="mt-3">
	<CodeBlock code={saveSnippet} />
</div>
<p class="mt-4 text-sm"><a href={href('/playground/')}>See the save example →</a></p>
