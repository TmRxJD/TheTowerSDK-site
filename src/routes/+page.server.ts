import { packageContents } from '$lib/sdk-stats';

/** Build-time only — keeps `thetowersdk/data` out of the home client bundle. */
export function load() {
	return {
		packageContents: packageContents.map((item) => ({
			value: item.value,
			label: item.label
		}))
	};
}
