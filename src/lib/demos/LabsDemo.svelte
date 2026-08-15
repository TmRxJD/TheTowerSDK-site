<script lang="ts">
	import { LAB_CATALOG, type LabCatalogRecord } from 'thetowersdk/data';
	import { formatNumberForDisplay } from 'thetowersdk/formatting';

	let query = $state('coin');

	let hits = $derived.by(() => {
		const needle = query.trim().toLowerCase();
		if (!needle) return LAB_CATALOG.slice(0, 6);
		return LAB_CATALOG.filter((lab) => lab.name.toLowerCase().includes(needle)).slice(0, 8);
	});

	function costToMax(lab: LabCatalogRecord): number {
		return lab.levels.reduce((sum, level) => sum + level.cost, 0);
	}
</script>

<div>
	<label class="block text-sm text-muted" for="lab-q">Search the lab catalog</label>
	<input
		id="lab-q"
		class="mt-1 w-full rounded-md border border-line bg-bg px-3 py-2 text-fg"
		bind:value={query}
		placeholder="Coins / Kill, Attack Speed…"
		autocomplete="off"
		spellcheck="false"
	/>
	<ul class="mt-3 divide-y divide-line/70 rounded-md border border-line/70">
		{#each hits as lab (lab.name)}
			<li class="flex flex-wrap items-baseline justify-between gap-2 px-3 py-2">
				<div>
					<p class="font-medium">{lab.name}</p>
					<p class="text-xs text-muted">{lab.category ?? 'uncategorised'} · {lab.levels.length} levels</p>
				</div>
				<p class="font-mono text-sm text-gold">{formatNumberForDisplay(costToMax(lab))}</p>
			</li>
		{:else}
			<li class="px-3 py-2 text-sm text-muted">No lab name matches that.</li>
		{/each}
	</ul>
	<p class="mt-2 text-xs text-muted">
		Coin totals are summed from <code>LAB_CATALOG</code>. Right-hand column is cost to max.
	</p>
</div>
