import {
	CARD_IMPORT_CATALOG,
	GLOSSARY,
	GUARDIAN_CHIP_IMPORT_CATALOG,
	LAB_CATALOG,
	MODULE_TEMPLATES,
	listAmbiguousGlossaryTerms
} from 'thetowersdk/data';

export const sdkStats = {
	labs: LAB_CATALOG.length,
	cards: CARD_IMPORT_CATALOG.length,
	modules: MODULE_TEMPLATES.length,
	guardianChips: GUARDIAN_CHIP_IMPORT_CATALOG.length,
	glossary: GLOSSARY.length,
	ambiguousTerms: listAmbiguousGlossaryTerms().length
} as const;

export const capabilityStats = [
	{ value: String(sdkStats.labs), label: 'labs with coin costs and durations' },
	{ value: String(sdkStats.glossary), label: 'glossary terms the game actually uses' },
	{ value: '32', label: 'save extractors over playerInfo.dat' },
	{ value: '1,132', label: 'formula exports in thetowersdk/mechanics' }
] as const;
