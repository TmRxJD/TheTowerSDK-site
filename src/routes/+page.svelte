<script lang="ts">
	import { features, homeExamples, installSnippet } from '$lib/content';
	import { LINKS } from '$lib/links';
	import { asset, href } from '$lib/paths';
	import CodeBlock from '$lib/ui/CodeBlock.svelte';
	import GlassPanel from '$lib/ui/GlassPanel.svelte';
	import InstallCmd from '$lib/ui/InstallCmd.svelte';
	import LabsDemo from '$lib/demos/LabsDemo.svelte';
	import SyncUptimeDemo from '$lib/demos/SyncUptimeDemo.svelte';
	import WaveDemo from '$lib/demos/WaveDemo.svelte';
	import SaveDemo from '$lib/demos/SaveDemo.svelte';

	let { data } = $props();

	const demos = [
		{ title: homeExamples[0].title, blurb: homeExamples[0].blurb, Demo: LabsDemo, panel: 'Live' },
		{
			title: homeExamples[1].title,
			blurb: homeExamples[1].blurb,
			Demo: SyncUptimeDemo,
			panel: 'Live'
		},
		{ title: homeExamples[2].title, blurb: homeExamples[2].blurb, Demo: WaveDemo, panel: 'Live' },
		{ title: homeExamples[3].title, blurb: homeExamples[3].blurb, Demo: SaveDemo, panel: 'Sample' }
	] as const;
</script>

<section class="max-w-3xl">
	<div class="flex items-center gap-4">
		<img
			src={asset('/TheTowerSDK_logo.v5.png')}
			alt=""
			class="h-14 w-14 object-contain sm:h-16 sm:w-16"
			width="64"
			height="64"
		/>
		<div>
			<p class="text-xs font-semibold tracking-[0.18em] text-accent uppercase">TheTowerSDK</p>
			<h1 class="mt-1 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
				Build Tower tools on real game data
			</h1>
		</div>
	</div>
	<p class="mt-4 max-w-2xl text-lg text-muted">
		Game catalogs and formulas for The Tower. Build calculators, trackers, spreadsheets, charts, read
		save files, connect to emulators and more.
	</p>
	<div class="mt-6 flex flex-wrap gap-3">
		<a href={href('/start/')} class="btn-primary rounded-md px-4 py-2 font-semibold">
			Get started
		</a>
		<a href={href('/docs/')} class="btn-secondary rounded-md px-4 py-2 font-medium">Docs</a>
		<a href={href('/playground/')} class="btn-secondary rounded-md px-4 py-2 font-medium">
			Examples
		</a>
		<a href={href('/ai/')} class="btn-secondary rounded-md px-4 py-2 font-medium">
			AI &amp; AGS
		</a>
	</div>
	<div class="mt-4">
		<InstallCmd />
	</div>
</section>

<section class="mt-14">
	<h2 class="text-2xl font-semibold">What's in the package</h2>
	<p class="mt-2 max-w-2xl text-muted">
		Counts from the installed package — including the detailed pieces inside each system.
	</p>
	<div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
		{#each data.packageContents as item (item.label)}
			<div class="rounded-lg border border-line/80 bg-panel/50 px-3 py-3">
				<p class="font-mono text-xl text-gold">{item.value}</p>
				<p class="mt-0.5 text-sm text-muted">{item.label}</p>
			</div>
		{/each}
	</div>
</section>

<section class="mt-14">
	<h2 class="text-2xl font-semibold">What you get</h2>
	<div class="mt-6 grid gap-4 md:grid-cols-2">
		{#each features as feature (feature.title)}
			<GlassPanel>
				<h3 class="text-lg font-medium">{feature.title}</h3>
				<p class="mt-2 text-sm text-muted">{feature.body}</p>
			</GlassPanel>
		{/each}
	</div>
</section>

<section class="mt-14">
	<h2 class="text-2xl font-semibold">Examples</h2>
	<div class="mt-6 space-y-8">
		{#each demos as demo, i (demo.title)}
			{@const example = homeExamples[i]}
			{@const Demo = demo.Demo}
			<div>
				<h3 class="text-lg font-medium">{demo.title}</h3>
				<p class="mt-1 mb-4 text-sm text-muted">{demo.blurb}</p>
				<div class="grid gap-4 lg:grid-cols-2">
					<GlassPanel>
						<p class="mb-3 text-xs font-semibold tracking-wide text-accent uppercase">
							{demo.panel}
						</p>
						<svelte:boundary>
							{#snippet failed(error)}
								<p class="text-sm text-muted">
									Demo failed to load
									{#if error instanceof Error}
										({error.message})
									{/if}
									.
								</p>
							{/snippet}
							<Demo />
						</svelte:boundary>
					</GlassPanel>
					<GlassPanel>
						<p class="mb-3 text-xs font-semibold tracking-wide text-accent uppercase">Code</p>
						{#if example}
							<CodeBlock code={example.code} />
						{/if}
					</GlassPanel>
				</div>
			</div>
		{/each}
	</div>
	<p class="mt-4 text-sm"><a href={href('/playground/')}>More examples →</a></p>
</section>

<section class="mt-14">
	<h2 class="text-2xl font-semibold">Flagship demonstration</h2>
	<p class="mt-2 max-w-2xl text-muted">
		Check out our flagship demonstration site,
		<a href={LINKS.tracker}>The Tower Run Tracker</a>
		— a full suite of calculators and trackers built on TheTowerSDK.
	</p>
	<p class="mt-4 text-sm">
		<a href={LINKS.tracker}>Open The Tower Run Tracker →</a>
		·
		<a href={href('/tools/')}>What you can build →</a>
	</p>
</section>

<section class="mt-14 max-w-2xl">
	<h2 class="text-2xl font-semibold">Install</h2>
	<p class="mt-2 text-muted">Add the package to your project, then import what you need.</p>
	<div class="mt-4">
		<CodeBlock code={installSnippet} />
	</div>
	<p class="mt-3 text-sm"><a href={href('/docs/install/')}>Install docs →</a></p>
</section>

<section
	class="relative left-1/2 mt-16 w-screen max-w-[100vw] -translate-x-1/2 border-y border-line bg-panel/70"
>
	<div class="mx-auto max-w-6xl px-4 py-14">
		<p class="text-xs font-semibold tracking-[0.18em] text-gold uppercase">AI development</p>
		<h2 class="mt-2 text-3xl font-semibold">Build with an AI — govern it with AGS</h2>
		<p class="mt-4 max-w-3xl text-muted">
			TheTowerSDK gives an assistant the game: catalogs, saves, formulas, wiki pages. Agent
			Governance System (AGS) keeps that assistant on rails while it edits your project. Use the SDK
			alone, or both when you want structured AI development.
		</p>
		<div class="mt-8 grid gap-4 md:grid-cols-2">
			<GlassPanel>
				<h3 class="text-lg font-medium">TheTowerSDK + MCP</h3>
				<p class="mt-2 text-sm text-muted">
					Install the package, register the MCP server, and ask Cursor / Claude / Copilot to build
					against real exports and wiki pages.
				</p>
			</GlassPanel>
			<GlassPanel>
				<h3 class="text-lg font-medium">AGS for Tower players</h3>
				<p class="mt-2 text-sm text-muted">
					Personal AGS access with a validated Player ID. Details and licensing live in the docs.
				</p>
			</GlassPanel>
		</div>
		<div class="mt-8 flex flex-wrap gap-3">
			<a href={href('/ai/')} class="btn-primary rounded-md px-4 py-2 font-semibold">
				AI &amp; AGS guide
			</a>
			<a href={href('/docs/ags/')} class="btn-secondary rounded-md px-4 py-2 font-medium">
				AGS docs
			</a>
			<a href={href('/license/')} class="btn-secondary rounded-md px-4 py-2 font-medium">
				Request personal AGS
			</a>
		</div>
	</div>
</section>
