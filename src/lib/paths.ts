import { base } from '$app/paths';

/** Root-relative in-app href that respects GitHub Pages `paths.base`. */
export function href(to: string): string {
	const path = to.startsWith('/') ? to : `/${to}`;
	return `${base}${path}`;
}
