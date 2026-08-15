<script lang="ts">
	import { LINKS } from '$lib/links';
	import { href } from '$lib/paths';
	import GlassPanel from '$lib/ui/GlassPanel.svelte';
</script>

<svelte:head>
	<title>Agent Governance System · TheTowerSDK</title>
</svelte:head>

<p class="text-xs font-semibold tracking-[0.18em] text-accent uppercase">AGS</p>
<h1 class="mt-2 text-3xl font-semibold">Agent Governance System, for Tower work</h1>
<p class="mt-2 max-w-2xl text-muted">
	TheTowerSDK tells an agent what the game is. AGS tells it how it is allowed to change a repo —
	commit authorization, staging scopes, schema and pointer gates, sentinel reflexes. They are
	separate licenses on purpose.
</p>

<div class="mt-8 grid gap-4 md:grid-cols-2">
	<GlassPanel>
		<h2 class="font-medium">TheTowerSDK</h2>
		<p class="mt-2 text-sm text-muted">MIT. Game data, saves, formulas, wiki conversion, MCP.</p>
		<p class="mt-3 text-sm"><a href={LINKS.github}>github.com/TmRxJD/TheTowerSDK</a></p>
	</GlassPanel>
	<GlassPanel>
		<h2 class="font-medium">Agent Governance System</h2>
		<p class="mt-2 text-sm text-muted">
			Dual-licensed: paid commercial, or free Tower Community for non-commercial Tower work. Public
			docs only on the AGS site — engine source stays private.
		</p>
		<p class="mt-3 text-sm"><a href={LINKS.agsSite}>AGS public site</a></p>
		<p class="mt-1 text-sm"><a href={LINKS.agsRepo}>github.com/TmRxJD/agent-governance-system-site</a></p>
	</GlassPanel>
</div>

<section class="mt-10 max-w-2xl">
	<h2 class="text-xl font-medium">Tower players</h2>
	<p class="mt-2 text-muted">
		If you play The Tower, you can run AGS on your machine for personal, non-commercial Tower tools
		— trackers, bots, wiki helpers, SDK-adjacent workflows. The grant is bound to a
		<strong>validated in-game Player ID</strong>. You may not redistribute AGS, host it as a
		service, or use it as a general-purpose product outside Tower.
	</p>
	<p class="mt-3 text-sm">
		<a href={href('/license/')}>Claim the personal grant with your Player ID →</a>
	</p>
</section>

<section class="mt-10 max-w-2xl">
	<h2 class="text-xl font-medium">Why both</h2>
	<p class="mt-2 text-sm text-muted">
		An agent with only the SDK can still commit a fabricated formula and call it done. AGS is the
		muscle that refuses unmarked commits, splits work into staging categories, and keeps schema /
		pointer / semantic contracts in the loop. Use the SDK to model the game; use AGS to govern the
		agent that is editing the model.
	</p>
</section>
