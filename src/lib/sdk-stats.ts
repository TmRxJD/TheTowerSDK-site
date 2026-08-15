import {
	ALL_PERKS,
	BOT_UPGRADES_DATA,
	CARD_TEMPLATES,
	GLOSSARY_NAMES,
	LAB_CATALOG,
	MILESTONE_REWARD_ROWS,
	MODULE_SUBSTATS_CLUSTER,
	MODULE_TEMPLATES,
	RELIC_TEMPLATES,
	TIER_BATTLE_CONDITION_DEFINITIONS,
	VAULT_HARMONY_IMPORT_CATALOG,
	VAULT_POWER_IMPORT_CATALOG,
	buildGuardianDefinitions,
	getWorkshopEnhancementDefinitions,
	getWorkshopStatDefinitions,
	uwStoneChartData
} from 'thetowersdk/data';
import * as mechanics from 'thetowersdk/mechanics';

function countUwStats(): number {
	return Object.values(uwStoneChartData).reduce(
		(sum, weapon) => sum + (weapon.stats?.length ?? 0),
		0
	);
}

function countBotStats(): number {
	return BOT_UPGRADES_DATA.reduce((sum, bot) => {
		const main = Object.keys(bot.stats ?? {}).length;
		const plus = Object.keys(bot.plus?.stats ?? {}).length;
		return sum + main + plus;
	}, 0);
}

function countLabLevels(): number {
	return LAB_CATALOG.reduce((sum, lab) => sum + lab.levels.length, 0);
}

function countGuardianChipStats(): number {
	return buildGuardianDefinitions().reduce(
		(sum, guardian) => sum + Object.keys(guardian.stats ?? {}).length,
		0
	);
}

/** Callable exports from `thetowersdk/mechanics` (ready-to-use formulas). */
function countMechanicsFormulas(): number {
	return Object.values(mechanics).filter((value) => typeof value === 'function').length;
}

/** Counts from the installed package — prefer leaf data over parent totals. */
export const sdkStats = {
	labs: LAB_CATALOG.length,
	labLevels: countLabLevels(),
	workshopStats: getWorkshopStatDefinitions().length,
	workshopEnhancements: getWorkshopEnhancementDefinitions().length,
	modules: MODULE_TEMPLATES.length,
	moduleSubstats: MODULE_SUBSTATS_CLUSTER.length,
	cards: CARD_TEMPLATES.length,
	relics: RELIC_TEMPLATES.length,
	bots: BOT_UPGRADES_DATA.length,
	botStats: countBotStats(),
	guardianChipStats: countGuardianChipStats(),
	vaultNodes: VAULT_HARMONY_IMPORT_CATALOG.length + VAULT_POWER_IMPORT_CATALOG.length,
	ultimateWeapons: Object.keys(uwStoneChartData).length,
	uwStats: countUwStats(),
	perks: ALL_PERKS.length,
	battleConditions: TIER_BATTLE_CONDITION_DEFINITIONS.length,
	milestoneRewards: MILESTONE_REWARD_ROWS.length,
	glossaryNames: GLOSSARY_NAMES.length,
	formulas: countMechanicsFormulas()
} as const;

/** Granular package contents for the home page — leaf counts, “X Stats” labels. */
export const packageContents = [
	{ value: String(sdkStats.formulas), label: 'Formulas' },
	{ value: String(sdkStats.labLevels), label: 'Lab Stats' },
	{ value: String(sdkStats.workshopStats), label: 'Workshop Stats' },
	{ value: String(sdkStats.moduleSubstats), label: 'Module Stats' },
	{ value: String(sdkStats.cards), label: 'Cards' },
	{ value: String(sdkStats.relics), label: 'Relics' },
	{ value: String(sdkStats.botStats), label: 'Bot Stats' },
	{ value: String(sdkStats.guardianChipStats), label: 'Guardian Stats' },
	{ value: String(sdkStats.uwStats), label: 'UW Stats' },
	{ value: String(sdkStats.vaultNodes), label: 'Vault nodes' },
	{ value: String(sdkStats.perks), label: 'Perks' },
	{ value: String(sdkStats.battleConditions), label: 'Battle conditions' },
	{ value: String(sdkStats.milestoneRewards), label: 'Milestone rewards' },
	{ value: String(sdkStats.glossaryNames), label: 'Glossary terms' }
] as const;
