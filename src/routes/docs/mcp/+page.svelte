<script lang="ts">
	import CodeBlock from '$lib/ui/CodeBlock.svelte';
	import { mcpJson } from '$lib/content';
	import { href } from '$lib/paths';
</script>

<svelte:head>
	<title>MCP &amp; AI · Docs · TheTowerSDK</title>
</svelte:head>

<h1 class="text-3xl font-semibold">MCP &amp; AI</h1>
<p class="mt-3 text-muted">
	The package ships an MCP server. Point Cursor, Claude Code, or Copilot at it after install so the
	assistant can use real exports, catalogs, saves, planners, and wiki pages.
</p>

<div class="mt-6">
	<CodeBlock code={mcpJson} />
</div>

<h2 class="mt-8 text-xl font-medium">What the server can do</h2>
<ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
	<li>List and preview exports</li>
	<li>Define terms / glossary</li>
	<li>Decode saves and run extractors</li>
	<li>Plan Effective Paths</li>
	<li>Fetch wiki pages as Markdown</li>
</ul>

<p class="mt-6 text-sm">
	<a href={href('/ai/')}>Prompts and example results →</a>
	·
	<a href={href('/docs/ags/')}>AGS →</a>
</p>
