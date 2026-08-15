<script lang="ts">
	import { LINKS } from '$lib/links';
	import { href } from '$lib/paths';
</script>

<footer class="mt-16 border-t border-line/80">
	<div class="mx-auto grid max-w-6xl gap-6 px-4 py-10 text-sm text-muted md:grid-cols-3">
		<div>
			<p class="font-semibold text-fg">TheTowerSDK</p>
			<p class="mt-2 max-w-sm">
				Game data and save-file reading for The Tower. MIT. Not affiliated with Tech Tree Games.
			</p>
		</div>
		<div class="flex flex-col gap-1">
			<a href={LINKS.npm}>npm: thetowersdk</a>
			<a href={LINKS.github}>GitHub: TheTowerSDK</a>
			<a href={LINKS.siteRepo}>This site</a>
			<a href={href('/ags/')}>Agent Governance System</a>
		</div>
		<div class="flex flex-col gap-1">
			<a href={href('/license/')}>Personal license (Player ID)</a>
			<a href={LINKS.adbBridge}>adb-bridge</a>
			<a href={LINKS.wiki}>Community wiki</a>
			<a href={LINKS.agsSite}>AGS docs site</a>
		</div>
	</div>
</footer>
