<script lang="ts">
	import { capabilityStats } from '$lib/sdk-stats';
	import {
		dataSnippet,
		installSnippet,
		surfaces
	} from '$lib/content';
	import { INSTALL_CMD, LINKS } from '$lib/links';
	import { href } from '$lib/paths';
	import CodeBlock from '$lib/ui/CodeBlock.svelte';
	import GlassPanel from '$lib/ui/GlassPanel.svelte';
	import GlossaryDemo from '$lib/demos/GlossaryDemo.svelte';
</script>

<section class="max-w-3xl">
	<p class="text-xs font-semibold tracking-[0.18em] text-accent uppercase">TheTowerSDK</p>
	<h1 class="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
		The game’s numbers, typed. Your tools — or an agent’s.
	</h1>
	<p class="mt-4 max-w-2xl text-lg text-muted">
		Install one package and you have The Tower’s catalogs, a
		<code>playerInfo.dat</code> reader, and the formulas the Run Tracker already ships. Point Cursor,
		Claude, or Copilot at the MCP server and they stop inventing lab costs.
	</p>
	<div class="mt-6 flex flex-wrap gap-3">
		<a
			href={href('/start/')}
			class="rounded-md bg-accent px-4 py-2 font-medium text-bg no-underline hover:brightness-110"
		>
			Get started
		</a>
		<a
			href={href('/playground/')}
			class="rounded-md border border-line px-4 py-2 text-fg no-underline hover:border-accent"
		>
			Run the SDK in this tab
		</a>
		<a
			href={href('/license/')}
			class="rounded-md border border-gold/40 px-4 py-2 text-gold no-underline hover:border-gold"
		>
			Free personal license
		</a>
	</div>
	<p class="mt-4 font-mono text-sm text-muted">{INSTALL_CMD}</p>
</section>

<section class="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
	{#each capabilityStats as stat (stat.label)}
		<GlassPanel>
			<p class="font-mono text-3xl text-gold">{stat.value}</p>
			<p class="mt-1 text-sm text-muted">{stat.label}</p>
		</GlassPanel>
	{/each}
</section>

<section class="mt-14">
	<h2 class="text-2xl font-semibold">What the package actually is</h2>
	<p class="mt-2 max-w-2xl text-muted">
		Six entry points, one runtime dependency (<code>zod</code>), browser-safe except the gzip decoder.
		The Run Tracker is a consumer — not a gate in front of the data.
	</p>
	<div class="mt-6 grid gap-4 md:grid-cols-2">
		{#each surfaces as surface (surface.importPath)}
			<GlassPanel>
				<p class="font-mono text-sm text-accent">{surface.importPath}</p>
				<h3 class="mt-1 text-lg font-medium">{surface.title}</h3>
				<p class="mt-2 text-sm text-muted">{surface.body}</p>
			</GlassPanel>
		{/each}
	</div>
</section>

<section class="mt-14 grid gap-8 lg:grid-cols-2">
	<div>
		<h2 class="text-2xl font-semibold">Try a real export</h2>
		<p class="mt-2 text-muted">
			This lookup is <code>lookupGlossary</code> from the published package, not a hardcoded list.
			Type <code>SR</code> to see an ambiguous term refuse to pick a winner.
		</p>
		<div class="mt-4">
			<GlassPanel>
				<GlossaryDemo />
			</GlassPanel>
		</div>
	</div>
	<div>
		<h2 class="text-2xl font-semibold">Same shape in your repo</h2>
		<p class="mt-2 text-muted">Three lines to install, then the catalog is an array you can add.</p>
		<div class="mt-4 space-y-3">
			<CodeBlock code={installSnippet} />
			<CodeBlock code={dataSnippet} />
		</div>
		<p class="mt-3 text-sm">
			<a href={href('/playground/')}>Wave health, lab costs, and more →</a>
		</p>
	</div>
</section>

<section class="mt-14 grid gap-4 md:grid-cols-3">
	<GlassPanel>
		<h2 class="text-lg font-medium">Tools you can ship</h2>
		<p class="mt-2 text-sm text-muted">
			Planners, save inspectors, Discord bots, wiki helpers. If it needs a Tower number, the SDK
			already has it.
		</p>
		<p class="mt-3 text-sm"><a href={href('/tools/')}>See the kinds of tools →</a></p>
	</GlassPanel>
	<GlassPanel>
		<h2 class="text-lg font-medium">Tell an agent to build one</h2>
		<p class="mt-2 text-sm text-muted">
			Paste a prompt, register the MCP server, and the agent reads the real API instead of guessing
			Golden Tower’s cooldown.
		</p>
		<p class="mt-3 text-sm"><a href={href('/ai/')}>Copy a prompt →</a></p>
	</GlassPanel>
	<GlassPanel>
		<h2 class="text-lg font-medium">Agent Governance System</h2>
		<p class="mt-2 text-sm text-muted">
			AGS keeps those agents honest — commits, schema, staging. Tower players get a personal grant
			with a validated Player ID.
		</p>
		<p class="mt-3 text-sm"><a href={href('/ags/')}>How AGS fits →</a></p>
	</GlassPanel>
</section>

<p class="mt-10 text-sm text-muted">
	Package on <a href={LINKS.npm}>npm</a> · source on <a href={LINKS.github}>GitHub</a> · MIT.
	“The Tower” is a Tech Tree Games trademark; this is a community project.
</p>
