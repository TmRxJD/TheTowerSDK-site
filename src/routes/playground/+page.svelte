<script lang="ts">
	import GlossaryDemo from '$lib/demos/GlossaryDemo.svelte';
	import LabsDemo from '$lib/demos/LabsDemo.svelte';
	import WaveDemo from '$lib/demos/WaveDemo.svelte';
	import GlassPanel from '$lib/ui/GlassPanel.svelte';
</script>

<svelte:head>
	<title>Live SDK · TheTowerSDK</title>
</svelte:head>

<p class="text-xs font-semibold tracking-[0.18em] text-accent uppercase">Live</p>
<h1 class="mt-2 text-3xl font-semibold">The published package, running here</h1>
<p class="mt-2 max-w-2xl text-muted">
	These widgets import <code>thetowersdk</code> the same way your app would. Change an input and the
	number moves — that is the whole pitch.
</p>

<div class="mt-8 grid gap-6 lg:grid-cols-2">
	<GlassPanel>
		<h2 class="text-lg font-medium">Enemy scaling</h2>
		<p class="mt-1 mb-4 text-sm text-muted">
			<code>thetowersdk/mechanics</code> — wave / tier base health and damage.
		</p>
		<WaveDemo />
	</GlassPanel>
	<GlassPanel>
		<h2 class="text-lg font-medium">Glossary</h2>
		<p class="mt-1 mb-4 text-sm text-muted">
			<code>thetowersdk/data</code> — names generated from the catalogs, so a term cannot appear
			unless it is real.
		</p>
		<GlossaryDemo />
	</GlassPanel>
	<GlassPanel class="lg:col-span-2">
		<h2 class="text-lg font-medium">Lab catalog</h2>
		<p class="mt-1 mb-4 text-sm text-muted">
			<code>LAB_CATALOG</code> — every research lab, every level, absolute coins. No currency field
			to read first.
		</p>
		<LabsDemo />
	</GlassPanel>
</div>
