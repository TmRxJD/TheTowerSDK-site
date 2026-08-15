<script lang="ts">
	import { agentPrompts, mcpJson } from '$lib/content';
	import { LINKS } from '$lib/links';
	import { href } from '$lib/paths';
	import CodeBlock from '$lib/ui/CodeBlock.svelte';
	import GlassPanel from '$lib/ui/GlassPanel.svelte';
</script>

<svelte:head>
	<title>AI &amp; AGS · TheTowerSDK</title>
</svelte:head>

<p class="text-xs font-semibold tracking-[0.18em] text-accent uppercase">Assistants</p>
<h1 class="mt-2 text-3xl font-semibold">AI &amp; Agent Governance</h1>
<p class="mt-2 max-w-2xl text-muted">
	Install TheTowerSDK, connect an AI coding assistant through MCP, and optionally add Agent Governance
	System so the assistant stays structured while it builds.
</p>

<section class="mt-10">
	<h2 class="text-xl font-medium">1. Connect an AI to the package</h2>
	<p class="mt-2 max-w-2xl text-sm text-muted">
		After <code>npm install thetowersdk</code>, register this MCP server. The assistant can list
		exports, read catalogs, decode saves, plan paths, and fetch wiki pages.
	</p>
	<div class="mt-4 max-w-3xl">
		<CodeBlock code={mcpJson} />
	</div>
	<p class="mt-3 text-sm text-muted">
		Claude Code:
		<code>claude mcp add thetowersdk -- node ./node_modules/thetowersdk/mcp/server.mjs</code>
	</p>
</section>

	<section class="mt-10">
		<h2 class="text-xl font-medium">2. Ask it to design tools</h2>
		<p class="mt-2 max-w-2xl text-sm text-muted">
			Sample asks below. With TheTowerSDK MCP and AGS, the agent researches the mechanic, confirms
			package exports, builds the tool, then checkpoints — wiki and catalogs first, UI second.
		</p>
		<div class="mt-6 grid gap-4">
			{#each agentPrompts as item (item.title)}
				<GlassPanel>
					<h3 class="font-medium">{item.title}</h3>
					<p class="mt-3 text-xs font-semibold tracking-wide text-accent uppercase">You ask</p>
					<div class="mt-2">
						<CodeBlock code={item.prompt} />
					</div>
					<p class="mt-4 text-xs font-semibold tracking-wide text-gold uppercase">
						What the agent does
					</p>
					<pre
						class="mt-2 overflow-x-auto rounded-md border border-line/70 bg-bg/40 p-3 font-mono text-xs text-fg/90 whitespace-pre-wrap"
					>{item.result}</pre>
				</GlassPanel>
			{/each}
		</div>
	</section>

<section id="ags" class="mt-14 scroll-mt-24">
	<p class="text-xs font-semibold tracking-[0.18em] text-gold uppercase">AGS</p>
	<h2 class="mt-2 text-2xl font-semibold">Agent Governance System</h2>
	<p class="mt-3 max-w-2xl text-muted">
		AGS sits next to the assistant and governs how it may change your repo — checkpoints, staging,
		clear status. TheTowerSDK supplies Tower knowledge; AGS supplies the workflow. Tower players can
		request personal access with a Player ID.
	</p>

	<div class="mt-6 grid gap-4 md:grid-cols-2">
		<GlassPanel>
			<h3 class="font-medium">TheTowerSDK</h3>
			<p class="mt-2 text-sm text-muted">
				Game data, save reading, formulas, wiki text, and the MCP server above.
			</p>
			<p class="mt-3 text-sm"><a href={LINKS.github}>Package on GitHub</a></p>
		</GlassPanel>
		<GlassPanel>
			<h3 class="font-medium">Agent Governance System</h3>
			<p class="mt-2 text-sm text-muted">
				Rules and tooling for AI-driven edits. Full overview on the AGS site.
			</p>
			<p class="mt-3 text-sm"><a href={LINKS.agsSite}>Agent Governance System</a></p>
		</GlassPanel>
	</div>

	<p class="mt-6 text-sm">
		<a href={href('/docs/ags/')}>Full AGS &amp; licensing docs →</a>
		·
		<a href={href('/license/')}>Request personal AGS →</a>
	</p>
</section>
