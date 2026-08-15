<script lang="ts">
	import { agentPrompts, mcpJson } from '$lib/content';
	import { LINKS } from '$lib/links';
	import { href } from '$lib/paths';
	import CodeBlock from '$lib/ui/CodeBlock.svelte';
	import GlassPanel from '$lib/ui/GlassPanel.svelte';
</script>

<svelte:head>
	<title>Direct an AI · TheTowerSDK</title>
</svelte:head>

<p class="text-xs font-semibold tracking-[0.18em] text-accent uppercase">Agents</p>
<h1 class="mt-2 text-3xl font-semibold">Make the agent look the mechanic up</h1>
<p class="mt-2 max-w-2xl text-muted">
	The data says what a number <em>is</em>. It does not say what it means. An agent that skips the
	wiki will invent unlocks. The MCP server is how you stop that — Cursor, Claude Code, Copilot, any
	stdio client.
</p>

<section class="mt-8">
	<h2 class="text-xl font-medium">1. Register the MCP server</h2>
	<p class="mt-2 max-w-2xl text-sm text-muted">
		After <code>npm install thetowersdk</code>, point the client at the server that ships in the
		package. It can list exports, preview a table, define an acronym, decode a save, and plan an
		Effective Path without a scratch script.
	</p>
	<div class="mt-4 max-w-3xl">
		<CodeBlock code={mcpJson} />
	</div>
	<p class="mt-3 text-sm text-muted">
		Claude Code: <code>claude mcp add thetowersdk -- node ./node_modules/thetowersdk/mcp/server.mjs</code>
	</p>
</section>

<section class="mt-10">
	<h2 class="text-xl font-medium">2. Paste a prompt that names the package</h2>
	<p class="mt-2 max-w-2xl text-sm text-muted">
		The useful sentence is “use thetowersdk, do not invent exports.” These four are enough to see
		whether the agent is actually calling the MCP tools.
	</p>
	<div class="mt-6 grid gap-4">
		{#each agentPrompts as item (item.title)}
			<GlassPanel>
				<h3 class="font-medium">{item.title}</h3>
				<div class="mt-3">
					<CodeBlock code={item.prompt} />
				</div>
			</GlassPanel>
		{/each}
	</div>
</section>

<section class="mt-10 max-w-2xl">
	<h2 class="text-xl font-medium">3. What the agent should do instead of guessing</h2>
	<ol class="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted">
		<li><code>list_exports</code> / <code>get_export</code> — the name exists, or it does not.</li>
		<li><code>wiki_page</code> on every related title before describing behaviour.</li>
		<li><code>define_term</code> for acronyms; check ambiguity before picking Chrono Field.</li>
		<li><code>plan_effective_path</code> to see candidates and exclusions, not to scrape a spreadsheet.</li>
		<li>If a value is missing, say so. Silent zeros are how wrong tools look finished.</li>
	</ol>
	<p class="mt-4 text-sm">
		<a href={LINKS.github}>AGENTS.md in the package</a> is the instruction file. Drop it in the repo
		you are generating into.
	</p>
	<p class="mt-2 text-sm">
		For commit discipline and schema gates while the agent works, use
		<a href={href('/ags/')}>Agent Governance System</a> — Tower players can claim a personal grant
		with a validated Player ID.
	</p>
</section>
