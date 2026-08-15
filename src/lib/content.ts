export const nav = [
	{ href: '/', label: 'Home' },
	{ href: '/playground/', label: 'Live SDK' },
	{ href: '/tools/', label: 'Tools you can build' },
	{ href: '/ai/', label: 'Ask an agent' },
	{ href: '/start/', label: 'Get started' },
	{ href: '/license/', label: 'Personal license' },
	{ href: '/ags/', label: 'AGS' }
] as const;

export const surfaces = [
	{
		importPath: 'thetowersdk/data',
		title: 'Game tables',
		body: 'Labs, workshop, modules, cards, relics, bots, guardians, ultimate weapons, the vault. Costs are plain coin numbers — 1.1e15 is 1.1 quadrillion, no scaling factor to guess.'
	},
	{
		importPath: 'thetowersdk/save',
		title: 'Save reading',
		body: 'Decode playerInfo.dat once, then extract labs, modules, cards, UWs, run history. Extractors return null on old saves instead of throwing, and they report warnings instead of dropping values.'
	},
	{
		importPath: 'thetowersdk/mechanics',
		title: 'Formulas',
		body: 'Enemy scaling, damage, ultimates, economy, workshop stats, bots, battle conditions, and the Effective Paths planners the Run Tracker calculators already use.'
	},
	{
		importPath: 'thetowersdk/wiki',
		title: 'Wiki, not guesses',
		body: 'Fandom serves wikitext. The SDK turns it into Markdown so an agent can read how a mechanic behaves before it invents an unlock threshold.'
	}
] as const;

export const toolKinds = [
	{
		title: 'Save inspector',
		tag: 'save',
		body: 'Drop a playerInfo.dat, list what is in it, then drill into labs researched, modules owned, cards equipped. discoverSaveImportTrackers() is the “what did we find?” screen.'
	},
	{
		title: 'Lab / workshop planner',
		tag: 'data + mechanics',
		body: 'Cost-to-max, time-to-max, ROI. The catalog already has every level. You map a save onto it and rank the next buy.'
	},
	{
		title: 'Enemy stats at wave N',
		tag: 'mechanics',
		body: 'computeWaveBaseHealth({ tier, wave }) — the same scaler behind the tracker’s enemy calculator. Approximate, cited, and already in npm.'
	},
	{
		title: 'Effective Paths',
		tag: 'mechanics',
		body: 'planEffectiveEconomyPath / Damage / Health / Regen. Every skipped candidate comes with a reason. A short path is explained, not silent.'
	},
	{
		title: 'Module / card inventory',
		tag: 'save + data',
		body: 'Owned rarities, substats, equipped loadout. Catalogs are positional; the extractors already know that, so you do not re-learn the save layout.'
	},
	{
		title: 'Discord bot',
		tag: 'platform',
		body: 'Same SDK the site uses. Parse a save, answer /define CF, post a 5-step eEcon path. Keep Discord.js in the bot; keep the game in thetowersdk.'
	},
	{
		title: 'Glossary / wiki helper',
		tag: 'data + wiki',
		body: 'expandAcronym("ILM"), lookupGlossary("SR") when it is ambiguous, wiki_page when you need behaviour. Stop arguing about what GC means in a spreadsheet.'
	},
	{
		title: 'Uptime / UW stone planner',
		tag: 'mechanics',
		body: 'Cooldown, duration, GT/BH/DW overlap, stone costs. The formulas exist; you supply the account and the UI.'
	}
] as const;

export const agentPrompts = [
	{
		title: 'A lab ROI page',
		prompt: `Use thetowersdk (npm i thetowersdk). Point your MCP at node_modules/thetowersdk/mcp/server.mjs.

Build a small page that:
1. Imports LAB_CATALOG from thetowersdk/data
2. Lets me pick a lab and a current level
3. Shows coin cost and duration for the next 10 levels
4. Formats coins with formatNumberForDisplay from thetowersdk/formatting

Do not invent lab names or costs. Call list_exports / get_export if you are unsure of an export.`
	},
	{
		title: 'Read my save',
		prompt: `I will give you a playerInfo.dat. Use thetowersdk/node to decode it, then readLabsFromSaveRoot and readModulesFromSaveRoot from thetowersdk/save.

Print researched/maxed lab counts, equipped modules, and any extractor warnings. If an extractor returns null, say the save predates that feature — do not fake zeros.`
	},
	{
		title: 'Next upgrades',
		prompt: `Using thetowersdk/mechanics, run planEffectiveEconomyPath with variant "time" and 8 steps from a zero config, then explain plan.steps and plan.excluded.

Before describing what a candidate does, call wiki_page on the related titles. Do not guess unlocks.`
	},
	{
		title: 'Define this acronym',
		prompt: `The user typed "CF". Use lookupGlossary and listAmbiguousGlossaryTerms from thetowersdk/data. If it is ambiguous, list every domain. Do not pick one quietly.`
	}
] as const;

export const capabilityStats = [
	{ value: '225', label: 'labs with coin costs and durations' },
	{ value: '500', label: 'glossary terms the game actually uses' },
	{ value: '32', label: 'save extractors over playerInfo.dat' },
	{ value: '1,132', label: 'formula exports in thetowersdk/mechanics' }
] as const;

export const mcpJson = `{
  "mcpServers": {
    "thetowersdk": {
      "command": "node",
      "args": ["./node_modules/thetowersdk/mcp/server.mjs"]
    }
  }
}`;

export const installSnippet = `npm install thetowersdk`;

export const dataSnippet = `import { LAB_CATALOG } from 'thetowersdk/data'

const costToMax = (lab) =>
  lab.levels.reduce((sum, level) => sum + level.cost, 0)

const priciest = LAB_CATALOG
  .map((lab) => ({ name: lab.name, total: costToMax(lab) }))
  .sort((a, b) => b.total - a.total)[0]`;

export const saveSnippet = `import { readFile } from 'node:fs/promises'
import { decodePlayerInfoSaveBytes } from 'thetowersdk/node'
import { readLabsFromSaveRoot } from 'thetowersdk/save'

const { parsedRoot } = decodePlayerInfoSaveBytes(
  await readFile('playerInfo.dat')
)

const labs = readLabsFromSaveRoot(parsedRoot)
if (!labs) throw new Error('no lab data in this save')
console.log(\`\${labs.researchedCount} researched, \${labs.maxedCount} maxed\`)`;

export const planSnippet = `import {
  planEffectiveDamagePath,
  ZERO_EFFECTIVE_DAMAGE_LEVELS,
  zeroEffectiveDamageConfig,
} from 'thetowersdk/mechanics'

const plan = planEffectiveDamagePath({
  config: zeroEffectiveDamageConfig(),
  levels: ZERO_EFFECTIVE_DAMAGE_LEVELS,
  variant: 'lab-time',
  steps: 10,
})

plan.steps      // what to buy, with cost, gain, ROI
plan.excluded   // what it skipped, and why`;
