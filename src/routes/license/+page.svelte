<script lang="ts">
	import { LINKS } from '$lib/links';
	import { href } from '$lib/paths';
	import {
		buildLicenseIssueUrl,
		isValidPlayerId,
		playerIdHint
	} from '$lib/player-id';
	import GlassPanel from '$lib/ui/GlassPanel.svelte';

	let playerId = $state('');
	let github = $state('');
	let discord = $state('');
	let use = $state('');

	let hint = $derived(playerIdHint(playerId));
	let valid = $derived(isValidPlayerId(playerId));

	function requestLicense() {
		const url = buildLicenseIssueUrl({
			playerId,
			github,
			discord,
			use,
			repo: LINKS.siteRepo
		});
		window.open(url, '_blank', 'noopener,noreferrer');
	}
</script>

<svelte:head>
	<title>Personal license · TheTowerSDK</title>
</svelte:head>

<p class="text-xs font-semibold tracking-[0.18em] text-gold uppercase">License</p>
<h1 class="mt-2 text-3xl font-semibold">Personal version, free, bound to your Player ID</h1>
<p class="mt-2 max-w-2xl text-muted">
	<code>thetowersdk</code> itself is MIT — anyone can install it. The <strong>personal grant</strong>
	is for Tower players who want a licensed, Player-ID-validated toolkit: community AGS (so your
	agents cannot silently skip the rules) plus recognition that this copy is yours, not a shared
	drop.
</p>

<div class="mt-8 grid gap-4 md:grid-cols-3">
	<GlassPanel>
		<p class="text-xs uppercase tracking-wide text-muted">SDK</p>
		<p class="mt-1 font-medium">MIT for everyone</p>
		<p class="mt-2 text-sm text-muted">
			Build open or closed source. Commercial tools are fine under MIT. That does not relicense AGS.
		</p>
	</GlassPanel>
	<GlassPanel>
		<p class="text-xs uppercase tracking-wide text-gold">Personal grant</p>
		<p class="mt-1 font-medium">Free for Tower players</p>
		<p class="mt-2 text-sm text-muted">
			One Player ID, one person, non-commercial local use. We validate the ID against The Tower
			before the grant is issued.
		</p>
	</GlassPanel>
	<GlassPanel>
		<p class="text-xs uppercase tracking-wide text-accent">AGS</p>
		<p class="mt-1 font-medium">Tower Community license</p>
		<p class="mt-2 text-sm text-muted">
			Same Player ID unlocks Agent Governance System for Tower work. Details on the
			<a href={href('/ags/')}>AGS page</a>.
		</p>
	</GlassPanel>
</div>

<section class="mt-10 max-w-xl">
	<h2 class="text-xl font-medium">Claim with your Player ID</h2>
	<p class="mt-2 text-sm text-muted">
		In The Tower: Settings → Player ID (digits). We use it only to confirm you are a real player and
		to bind the grant. It is not sold or posted.
	</p>

	<form
		class="mt-6 space-y-4"
		onsubmit={(event) => {
			event.preventDefault();
			if (valid) requestLicense();
		}}
	>
		<label class="block text-sm">
			<span class="text-muted">Tower Player ID</span>
			<input
				class="mt-1 w-full rounded-md border border-line bg-bg px-3 py-2 font-mono text-fg"
				bind:value={playerId}
				inputmode="numeric"
				autocomplete="off"
				placeholder="e.g. 12345678"
				required
			/>
			{#if hint}
				<span class="mt-1 block text-xs text-gold">{hint}</span>
			{/if}
		</label>
		<label class="block text-sm">
			<span class="text-muted">GitHub username</span>
			<input
				class="mt-1 w-full rounded-md border border-line bg-bg px-3 py-2 text-fg"
				bind:value={github}
				autocomplete="username"
				placeholder="TmRxJD"
			/>
		</label>
		<label class="block text-sm">
			<span class="text-muted">Discord (optional)</span>
			<input
				class="mt-1 w-full rounded-md border border-line bg-bg px-3 py-2 text-fg"
				bind:value={discord}
				placeholder="name"
			/>
		</label>
		<label class="block text-sm">
			<span class="text-muted">What you want to build</span>
			<textarea
				class="mt-1 w-full rounded-md border border-line bg-bg px-3 py-2 text-fg"
				rows="4"
				bind:value={use}
				placeholder="Personal lab planner, Discord helper for my guild, …"
			></textarea>
		</label>
		<button
			type="submit"
			class="rounded-md bg-gold px-4 py-2 font-medium text-bg disabled:opacity-40"
			disabled={!valid}
		>
			Open a license request
		</button>
		<p class="text-xs text-muted">
			Opens a GitHub issue on {LINKS.siteRepo} with your Player ID. Issuing the grant is manual until
			the validation service is live — the ID format is checked here first.
		</p>
	</form>
</section>
