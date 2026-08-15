<script lang="ts">
	import { expandAcronym, lookupGlossary } from 'thetowersdk/data';

	let query = $state('GT');

	let results = $derived(lookupGlossary(query));
	let expansion = $derived(expandAcronym(query));
</script>

<div>
	<label class="block text-sm text-muted" for="glossary-q">Look up a term the game uses</label>
	<input
		id="glossary-q"
		class="mt-1 w-full rounded-md border border-line bg-bg px-3 py-2 font-mono text-fg"
		bind:value={query}
		placeholder="GT, CF, ILM, SR…"
		autocomplete="off"
		spellcheck="false"
	/>
	<p class="mt-2 text-sm text-muted">
		{#if expansion}
			<code>{query.trim()}</code> expands to <span class="text-gold">{expansion}</span>
		{:else}
			Not an acronym, or more than one expansion — read the rows.
		{/if}
	</p>
	<ul class="mt-3 space-y-2">
		{#each results as entry (entry.term + entry.domain)}
			<li class="rounded-md border border-line/70 bg-bg/40 p-3">
				<div class="flex flex-wrap items-baseline gap-2">
					<span class="font-mono text-accent">{entry.term}</span>
					<span class="text-xs uppercase tracking-wide text-muted">{entry.domain}</span>
					{#if entry.ambiguous}
						<span class="text-xs text-gold">ambiguous</span>
					{/if}
				</div>
				{#if entry.expansion}
					<p class="mt-1 text-sm text-fg">{entry.expansion}</p>
				{/if}
				<p class="mt-1 text-sm text-muted">{entry.definition}</p>
			</li>
		{:else}
			<li class="text-sm text-muted">Nothing in the glossary for that. Try GT, BH, or Coin Bonus.</li>
		{/each}
	</ul>
</div>
