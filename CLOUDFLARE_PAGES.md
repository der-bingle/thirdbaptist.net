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

## Temporary Pages Preview

A Direct Upload preview project exists for testing before DNS moves:

- Project: `thirdbaptist-net-preview`
- URL: `https://thirdbaptist-net-preview.pages.dev/`

Deploy the current build manually with:

```bash
pnpm run build
pnpm exec wrangler pages deploy dist --project-name thirdbaptist-net-preview --branch main
```

Keep this preview project separate from the final Git-integrated project. The final project should be created through Cloudflare's Git integration so Cloudflare can build and deploy automatically from GitHub.

## Custom Domain

The current registrar/DNS for `thirdbaptist.net` is AWS Route 53. Do not add the production custom domain until DNS is ready to move to Cloudflare.

When ready to go live:

1. Add `thirdbaptist.net` to Cloudflare.
2. Review and preserve any needed Route 53 DNS records.
3. Change the domain's nameservers at the registrar to the Cloudflare nameservers.
4. Add `thirdbaptist.net` and `www.thirdbaptist.net` as custom domains on the final Git-integrated Pages project.
5. Verify SSL and redirects before announcing the new site.

## Site URL

Astro reads `CF_PAGES_URL` automatically during Cloudflare builds. If you want canonical sitemap URLs before the custom domain is connected, set `SITE_URL` in Cloudflare Pages environment variables.
