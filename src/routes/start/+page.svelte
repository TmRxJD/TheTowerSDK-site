<script lang="ts">
	import { dataSnippet, planSnippet, saveSnippet } from '$lib/content';
	import { LINKS } from '$lib/links';
	import { href } from '$lib/paths';
	import CodeBlock from '$lib/ui/CodeBlock.svelte';
	import GlassPanel from '$lib/ui/GlassPanel.svelte';
</script>

<svelte:head>
	<title>Get started · TheTowerSDK</title>
</svelte:head>

<p class="text-xs font-semibold tracking-[0.18em] text-accent uppercase">Install</p>
<h1 class="mt-2 text-3xl font-semibold">Three imports, then a tool</h1>
<p class="mt-2 max-w-2xl text-muted">
	Node 20+. TypeScript. The decoder needs Node (or a browser gunzip + NRBF recipe in the README).
	Everything else is browser-safe.
</p>

<div class="mt-8 space-y-8 max-w-3xl">
	<section>
		<h2 class="text-xl font-medium">1. Install</h2>
		<div class="mt-3">
			<CodeBlock code={'npm install thetowersdk'} />
		</div>
		<p class="mt-2 text-sm text-muted">
			Also on <a href={LINKS.npm}>npmjs.com/package/thetowersdk</a>. Pin the version if you need
			reproducible numbers — a minor bump is a new game version.
		</p>
	</section>

	<section>
		<h2 class="text-xl font-medium">2. Read a table</h2>
		<div class="mt-3">
			<CodeBlock code={dataSnippet} />
		</div>
	</section>

	<section>
		<h2 class="text-xl font-medium">3. Read a save</h2>
		<p class="mt-2 text-sm text-muted">
			Android path: <code>Android/data/com.TechTreeGames.TheTower/files/playerInfo.dat</code>.
			<a href={LINKS.adbBridge}>adb-bridge</a> copies it off a device or emulator.
		</p>
		<div class="mt-3">
			<CodeBlock code={saveSnippet} />
		</div>
	</section>

	<section>
		<h2 class="text-xl font-medium">4. Plan an upgrade path</h2>
		<p class="mt-2 text-sm text-muted">
			Config is the account (unlocks, cards, modules). Levels are how far each candidate is already
			bought. The SDK does not map a save onto either — that mapping is the tool you are writing.
		</p>
		<div class="mt-3">
			<CodeBlock code={planSnippet} />
		</div>
	</section>
</div>

<div class="mt-10 grid gap-4 md:grid-cols-2 max-w-3xl">
	<GlassPanel>
		<h2 class="font-medium">Entry points</h2>
		<ul class="mt-2 space-y-1 font-mono text-sm text-muted">
			<li>thetowersdk/data</li>
			<li>thetowersdk/save</li>
			<li>thetowersdk/node</li>
			<li>thetowersdk/formatting</li>
			<li>thetowersdk/mechanics</li>
			<li>thetowersdk/wiki</li>
		</ul>
	</GlassPanel>
	<GlassPanel>
		<h2 class="font-medium">Next</h2>
		<ul class="mt-2 space-y-2 text-sm">
			<li><a href={href('/playground/')}>Exercise the live demos</a></li>
			<li><a href={href('/ai/')}>Register MCP and paste a prompt</a></li>
			<li><a href={LINKS.github}>Read the package README</a></li>
			<li><a href={href('/license/')}>Claim a personal Player ID license</a></li>
		</ul>
	</GlassPanel>
</div>
