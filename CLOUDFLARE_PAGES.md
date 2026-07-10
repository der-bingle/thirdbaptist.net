# Cloudflare Pages Deployment

This site is configured as a static Astro build for Cloudflare Pages.

## Build Settings

- Framework preset: Astro
- Production branch: `main`
- Build command: `pnpm run build`
- Build output directory: `dist`
- Node.js version: use Cloudflare's current default, or set `NODE_VERSION` to the active local LTS if needed.

The repo also includes `wrangler.toml` with `pages_build_output_dir = "./dist"` so Wrangler/Pages tooling can identify the static output directory.

## Automatic Deploys

Use the Cloudflare Pages Git integration and connect the GitHub repository. Cloudflare will build and deploy automatically whenever changes are merged or pushed to the production branch.

Preview deployments can remain enabled for pull request branches.

Without Cloudflare account credentials, the remaining manual step is:

1. In Cloudflare, go to Workers & Pages.
2. Create a Pages application and choose the GitHub integration.
3. Select the `thirdbaptist.net` repository.
4. Use the build settings above.
5. Set the production branch to `main`.

## Site URL

Astro reads `CF_PAGES_URL` automatically during Cloudflare builds. If you want canonical sitemap URLs before the custom domain is connected, set `SITE_URL` in Cloudflare Pages environment variables.
