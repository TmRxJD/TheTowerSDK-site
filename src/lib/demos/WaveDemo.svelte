<script lang="ts">
	import { computeWaveBaseDamage, computeWaveBaseHealth } from 'thetowersdk/mechanics';
	import { formatNumberForDisplay } from 'thetowersdk/formatting';

	let tier = $state(10);
	let wave = $state(4500);
	let tournament = $state(false);

	let hp = $derived(
		formatNumberForDisplay(computeWaveBaseHealth({ tier, wave, tournament }))
	);
	let damage = $derived(
		formatNumberForDisplay(computeWaveBaseDamage({ tier, wave, tournament }))
	);
</script>

<div class="grid gap-4 sm:grid-cols-3">
	<label class="block text-sm text-muted">
		Tier
		<input
			class="mt-1 w-full rounded-md border border-line bg-bg px-3 py-2 font-mono text-fg"
			type="number"
			min="1"
			max="18"
			bind:value={tier}
		/>
	</label>
	<label class="block text-sm text-muted">
		Wave
		<input
			class="mt-1 w-full rounded-md border border-line bg-bg px-3 py-2 font-mono text-fg"
			type="number"
			min="1"
			max="20000"
			bind:value={wave}
		/>
	</label>
	<label class="flex items-end gap-2 pb-2 text-sm text-muted">
		<input type="checkbox" bind:checked={tournament} />
		Tournament
	</label>
</div>

<dl class="mt-4 grid gap-3 sm:grid-cols-2">
	<div class="rounded-md border border-line/70 bg-bg/40 p-3">
		<dt class="text-xs uppercase tracking-wide text-muted">Base enemy health</dt>
		<dd class="font-mono text-2xl text-gold">{hp}</dd>
	</div>
	<div class="rounded-md border border-line/70 bg-bg/40 p-3">
		<dt class="text-xs uppercase tracking-wide text-muted">Base enemy damage</dt>
		<dd class="font-mono text-2xl text-accent">{damage}</dd>
	</div>
</dl>
<p class="mt-3 text-xs text-muted">
	Live <code>computeWaveBaseHealth</code> / <code>computeWaveBaseDamage</code> from
	<code>thetowersdk/mechanics</code>, formatted the way the game shows numbers. These are
	fitted approximations — close, not last-digit exact.
</p>
