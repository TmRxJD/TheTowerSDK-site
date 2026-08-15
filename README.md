# TheTowerSDK — public showcase

Public site for **[thetowersdk](https://www.npmjs.com/package/thetowersdk)**: game data, save reading, and formulas for *The Tower*, plus how to point an AI at the MCP server.

Live: **https://tmrxjd.github.io/TheTowerSDK-site/**

| Resource | URL |
|---|---|
| npm | https://www.npmjs.com/package/thetowersdk |
| SDK source | https://github.com/TmRxJD/TheTowerSDK |
| AGS public docs | https://github.com/TmRxJD/agent-governance-system-site |

## Stack

Same family as the AGS public site: **SvelteKit 5 + Tailwind + adapter-static**, GitHub Pages from `build/`.

## Local

```sh
npm install
npm run dev
```

Production build (Pages uses `BASE_PATH=/TheTowerSDK-site`):

```sh
npm run build
```

## Personal license

Tower players can request a free personal grant (AGS Tower Community + Player-ID binding) from `/license/`. The SDK itself remains MIT.
