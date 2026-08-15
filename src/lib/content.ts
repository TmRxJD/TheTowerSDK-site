export const nav = [
	{ href: '/start/', label: 'Get started' },
	{ href: '/tools/', label: 'What you can build' },
	{ href: '/playground/', label: 'Examples' },
	{ href: '/docs/', label: 'Docs' },
	{ href: '/ai/', label: 'AI & AGS' }
] as const;

export const docsNav = [
	{ href: '/docs/', label: 'Overview' },
	{ href: '/docs/install/', label: 'Install' },
	{ href: '/docs/data/', label: 'Game data' },
	{ href: '/docs/save/', label: 'Save files' },
	{ href: '/docs/mechanics/', label: 'Formulas' },
	{ href: '/docs/wiki/', label: 'Wiki' },
	{ href: '/docs/mcp/', label: 'MCP & AI' },
	{ href: '/docs/ags/', label: 'AGS' },
	{ href: '/docs/license/', label: 'Licensing' }
] as const;

/** Package capabilities — community-facing. */
export const features = [
	{
		title: 'Complete game catalogs',
		body: 'Labs, workshop, enhancements, modules, cards, relics, bots, guardians, ultimate weapons, vault trees, perks, battle conditions, tiers, and milestones — ready to query in code.'
	},
	{
		title: 'Player save reading',
		body: 'Decode playerInfo.dat and pull labs, modules, cards, ultimate weapons, and run history from a real account.'
	},
	{
		title: 'Combat and economy math',
		body: 'Enemy scaling, ultimate weapon timing, lab costs, workshop costs, Effective Paths planners, and more — callable formulas, not cumbersome spreadsheets.'
	},
	{
		title: 'Wiki ingestion',
		body: 'Pull The Tower wiki into Markdown inside your app or AI session so mechanics are looked up, not guessed.'
	}
] as const;

/**
 * Home-page examples (live + code). Order matters — index matches demos on +page.
 */
export const homeExamples = [
	{
		title: 'Lab costs',
		blurb: 'Coins and research time for the next levels.',
		code: `import { LAB_CATALOG } from 'thetowersdk/data'
import { formatNumberForDisplay } from 'thetowersdk/formatting'

// Find the lab by its display name
const lab = LAB_CATALOG.find((l) => l.name === 'Attack Speed')

// Levels are 0-based in the array; level 10 → index 10
const from = 10
const steps = 10
const next = lab.levels.slice(from, from + steps)

// Each level has a coin cost
const coins = next.reduce((sum, level) => sum + level.cost, 0)

// Format like the game (1.1q, 2.3s, …)
console.log(formatNumberForDisplay(coins))`
	},
	{
		title: 'Death Wave × Golden Bot',
		blurb: 'DW duration comes from Quantity × 4s per wave; results match the Uptime Calculator columns.',
		code: `import { BOT_UPGRADES_DATA, estimateBotUptimeFraction, uwStoneChartData } from 'thetowersdk/data'

const dw = Object.values(uwStoneChartData).find((w) => w.name === 'Death Wave')
const dwCd = Number(String(dw.stats.find((s) => s.name === 'Cooldown').levels[8].value).replace(/s$/i, ''))
const dwWaves = Number(String(dw.stats.find((s) => s.name === 'Quantity').levels[3].value).replace(/^x/i, ''))
const dwDur = dwWaves * 4 // Uptime Calculator wave time

const gb = BOT_UPGRADES_DATA.find((b) => b.name === 'Golden Bot')
const gbCd = gb.stats.Cooldown.levels['10']
const gbDur = gb.stats.Duration.levels['10']
const gbUptime = estimateBotUptimeFraction(gbDur, gbCd)

console.log({ dwCd, dwDur, gbCd, gbDur, gbUptime })`
	},
	{
		title: 'Enemy stats',
		blurb: 'Base health and damage for a farm tier or tournament league base.',
		code: `import {
  computeWaveBaseHealth,
  computeWaveBaseDamage,
} from 'thetowersdk/mechanics'
import { formatNumberForDisplay } from 'thetowersdk/formatting'

// Farm tier 10, or tournament Copper as tier 1 + tournament:true
const hp = computeWaveBaseHealth({ tier: 10, wave: 4500, tournament: false })
const dmg = computeWaveBaseDamage({ tier: 10, wave: 4500, tournament: false })

console.log(formatNumberForDisplay(hp))
console.log(formatNumberForDisplay(dmg))`
	},
	{
		title: 'Read a save',
		blurb: 'Sample extractor shapes from a decoded playerInfo.dat (decode runs in Node).',
		code: `import { readFile } from 'node:fs/promises'
import { decodePlayerInfoSaveBytes } from 'thetowersdk/node'
import {
  readLabsFromSaveRoot,
  readModulesFromSaveRoot,
  readCardsFromSaveRoot,
  readUltimateWeaponsFromSaveRoot,
  readBotsFromSaveRoot,
  readVaultFromSaveRoot,
} from 'thetowersdk/save'

const { parsedRoot } = decodePlayerInfoSaveBytes(
  await readFile('playerInfo.dat')
)

const labs = readLabsFromSaveRoot(parsedRoot)
const modules = readModulesFromSaveRoot(parsedRoot)
const cards = readCardsFromSaveRoot(parsedRoot)
const uws = readUltimateWeaponsFromSaveRoot(parsedRoot)
const bots = readBotsFromSaveRoot(parsedRoot)
const vault = readVaultFromSaveRoot(parsedRoot)`
	}
] as const;

/** Extra examples beyond the home set. */
export const moreExamples = [
	{
		title: 'Module shard cost',
		blurb: 'Shards to take a module from one level to the next.',
		code: `import { getModuleShardUpgradeCost } from 'thetowersdk/data'
import { formatNumberForDisplay } from 'thetowersdk/formatting'

// Cost to reach level 161 from 160
const shards = getModuleShardUpgradeCost(161)
console.log(formatNumberForDisplay(shards))`
	},
	{
		title: 'Card gem cost',
		blurb: 'Gems to raise a card from one level to another (copies × 20).',
		code: `import { cardLevelUpgradeGemCost } from 'thetowersdk/mechanics'
import { formatNumberForDisplay } from 'thetowersdk/formatting'

const gems = cardLevelUpgradeGemCost(0, 7)
console.log(formatNumberForDisplay(gems))`
	},
	{
		title: 'Effective Paths',
		blurb: 'Next economy buys from your starting levels, including what was skipped.',
		code: `import {
  planEffectiveEconomyPath,
  ZERO_EFFECTIVE_ECONOMY_LEVELS,
  zeroEffectiveEconomyConfig,
} from 'thetowersdk/mechanics'

const levels = {
  ...ZERO_EFFECTIVE_ECONOMY_LEVELS,
  time: {
    ...ZERO_EFFECTIVE_ECONOMY_LEVELS.time,
    coinsPerKillBonus: 20,
  },
}

const plan = planEffectiveEconomyPath({
  config: zeroEffectiveEconomyConfig(),
  levels,
  variant: 'time',
  steps: 5,
})

console.log(plan.steps.map((s) => s.name))
console.log(plan.excluded.length, 'skipped')`
	},
	{
		title: 'Glossary lookup',
		blurb: 'Resolve Tower acronyms from the package glossary (generated + curated, no network).',
		code: `import { lookupGlossary } from 'thetowersdk/data'

const hits = lookupGlossary('CF')
console.log(hits.map((h) => h.expansion ?? h.term))`
	}
] as const;

/** @deprecated use homeExamples — kept for any stray imports */
export const codeExamples = homeExamples;

/**
 * Example tools you can build on this package.
 * Titles only — no separate type badge.
 */
export const trackerExamples = [
	{
		title: 'Labs Calculator',
		body: 'Coin and research time for the next lab levels, with discount-aware totals.'
	},
	{
		title: 'Cards Calculator',
		body: 'Gem cost to raise a card across levels — each level’s copies × 20 gems.'
	},
	{
		title: 'Workshop Calculator',
		body: 'Workshop upgrades, enhancements, and discount-aware cost curves.'
	},
	{
		title: 'Module Calculator',
		body: 'Shard and coin costs for module levels, rarities, and loadouts.'
	},
	{
		title: 'Bots Calculator',
		body: 'In-game bot upgrades, medals, and timing windows for planning.'
	},
	{
		title: 'Guardians Calculator',
		body: 'Guardian chip upgrades and related costs.'
	},
	{
		title: 'Ultimate Weapons Calculator',
		body: 'UW stone planners for cooldowns, duration, quantity, and related stats.'
	},
	{
		title: 'Uptime Calculator',
		body: 'Sync windows across ultimate weapons and in-game bots — GT, DW, Golden Bot, and more.'
	},
	{
		title: 'Effective Paths',
		body: 'Next-buy planners for health, damage, economy, and regen.'
	},
	{
		title: 'Enemy Stats & Resource Drops',
		body: 'Enemy toughness by wave and estimated drops.'
	},
	{
		title: 'Thorns & Damage Reduction',
		body: 'Combat calculators for common mid- and late-game questions.'
	},
	{
		title: 'CPH, Shard Splitter, Medal Splitter',
		body: 'Coins per hour and currency-split helpers.'
	},
	{
		title: 'Run Tracker',
		body: 'Import battle reports from a save and keep run history across tiers and waves.'
	},
	{
		title: 'Account trackers',
		body: 'Labs, cards, modules, bots, guardians, vault, relics, themes, and UW progress from the same catalogs.'
	},
	{
		title: 'Spreadsheets & charts',
		body: 'Feed the same catalogs into sheets, dashboards, or plotting — your layout, same numbers.'
	}
] as const;

export const toolKinds = trackerExamples;

/**
 * Sample tool-design asks. `result` = TheTowerSDK + AGS workflow (research before code).
 */
export const agentPrompts = [
	{
		title: 'Lab cost tool',
		prompt: `Design a lab cost tool with thetowersdk: lab picker, current level, and a table of coin cost + research time for the next 10 levels, formatted like the game.`,
		result: `1. AGS opens a labs task and records status (researching)
2. TheTowerSDK MCP loads wiki context for Labs before any UI is written
3. list_exports / get_export resolves LAB_CATALOG + game number formatters from the package
4. Only then scaffolds the picker, level input, and next-10 cost/time table
5. AGS checkpoints the slice and moves status to implementing → awaiting your review`
	},
	{
		title: 'Save reader tool',
		prompt: `Build a save reader: drop in playerInfo.dat and show labs researched/maxed plus equipped modules.`,
		result: `1. AGS opens a save-reading task (researching)
2. Wiki + package docs for playerInfo / labs / modules are pulled through MCP first
3. Exports confirmed: decodePlayerInfoSaveBytes and lab/module extractors
4. Builds upload → decode → researched/maxed + equipped modules UI on those APIs
5. AGS checkpoints; incomplete saves surface extractor warnings instead of invented fields`
	},
	{
		title: 'Economy planner tool',
		prompt: `Build an economy planner UI that runs the effective economy path for N steps and lists what was bought vs skipped (with reasons).`,
		result: `1. AGS opens an Effective Paths / economy task (researching)
2. Wiki + MCP context for Effective Paths before controls or tables exist
3. Resolves planEffectiveEconomyPath and config helpers from thetowersdk/mechanics
4. Builds step/variant controls; renders plan.steps and plan.excluded from the planner
5. AGS checkpoints each slice so the UI cannot drift into a hand-written priority list`
	},
	{
		title: 'Wiki-backed reference tool',
		prompt: `Design a small in-app reference that loads Tower wiki pages as Markdown (starting with Golden Tower) so the tool can show cooldown and related sections from the wiki.`,
		result: `1. AGS opens a wiki-ingestion task (researching)
2. Loads Golden Tower (and related titles) via wiki_page / fetchFandomPageAsMarkdown first
3. Confirms the Markdown API and section shape from that live pull
4. Then scaffolds page picker + Markdown panel wired to the same fetch path
5. AGS checkpoints so later pages reuse that path instead of hardcoded wiki text`
	}
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

// Sum every level's coin cost for one lab
const costToMax = (lab) =>
  lab.levels.reduce((sum, level) => sum + level.cost, 0)

// Rank labs by total coin cost
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

plan.steps
plan.excluded`;
