<script lang="ts">
	import { LINKS } from '$lib/links';
	import { href } from '$lib/paths';
</script>

<svelte:head>
	<title>AGS · Docs · TheTowerSDK</title>
</svelte:head>

<h1 class="text-3xl font-semibold">Agent Governance System</h1>
<p class="mt-3 text-muted">
	AGS is a separate product. It governs how an AI assistant may change a repository (commits,
	staging, status). TheTowerSDK is the game layer; AGS is the workflow layer.
</p>

<h2 class="mt-8 text-xl font-medium">Tower players</h2>
<p class="mt-2 text-muted">
	Personal, non-commercial AGS use for your own Tower tools is available with a validated in-game
	Player ID. Request it from the
	<a href={href('/license/')}>player license</a>
	page.
</p>

<h2 class="mt-8 text-xl font-medium">Scope of the personal grant</h2>
<ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
	<li>Local use on your machines for non-commercial Tower projects</li>
	<li>One Player ID, one person</li>
	<li>Not for redistributing AGS or offering it as a hosted service</li>
	<li>Commercial AGS use is licensed separately</li>
</ul>

<h2 class="mt-8 text-xl font-medium">Links</h2>
<ul class="mt-3 space-y-1 text-sm">
	<li><a href={LINKS.agsSite}>Agent Governance System site</a></li>
	<li><a href={LINKS.agsRepo}>AGS docs repository</a></li>
	<li><a href={href('/ai/')}>AI &amp; AGS showcase page</a></li>
</ul>
