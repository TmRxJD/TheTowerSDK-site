/** In-game Player IDs are numeric strings shown in The Tower settings. */
const PLAYER_ID_PATTERN = /^\d{6,16}$/;

export function normalizePlayerId(raw: string): string {
	return raw.replace(/\s+/g, '').trim();
}

export function isValidPlayerId(raw: string): boolean {
	const id = normalizePlayerId(raw);
	return PLAYER_ID_PATTERN.test(id) && !/^0+$/.test(id);
}

export function playerIdHint(raw: string): string | null {
	const id = normalizePlayerId(raw);
	if (!id) return null;
	if (!/^\d+$/.test(id)) return 'Player IDs are digits only — copy it from The Tower settings.';
	if (id.length < 6) return 'That looks short. In-game Player IDs are usually 6–16 digits.';
	if (id.length > 16) return 'That looks long. Double-check the ID from Settings.';
	if (/^0+$/.test(id)) return 'That is not a real Player ID.';
	return null;
}

export function buildLicenseIssueUrl(input: {
	playerId: string;
	github: string;
	discord: string;
	use: string;
	repo: string;
}): string {
	const title = `Personal license request — Player ID ${normalizePlayerId(input.playerId)}`;
	const body = [
		'## Personal Tower toolkit / AGS community grant',
		'',
		`- **Player ID:** \`${normalizePlayerId(input.playerId)}\``,
		`- **GitHub:** ${input.github.trim() || '(not provided)'}`,
		`- **Discord:** ${input.discord.trim() || '(not provided)'}`,
		'',
		'### Intended use',
		input.use.trim() || '(not provided)',
		'',
		'I confirm this is for personal, non-commercial Tower work, bound to this Player ID.'
	].join('\n');

	const params = new URLSearchParams({ title, body, labels: 'license' });
	return `${input.repo}/issues/new?${params.toString()}`;
}
