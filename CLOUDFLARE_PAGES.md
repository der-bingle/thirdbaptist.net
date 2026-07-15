# Cloudflare Pages Deployment

This site is configured as a static Astro build for Cloudflare Pages.

## Build Settings

- Framework preset: Astro
- Production branch: `main`
- Build command: `pnpm run build`
- Build output directory: `dist`
- Node.js version: use Cloudflare's current default, or set `NODE_VERSION` to the active local LTS if needed.

The repo also includes `wrangler.toml` with `pages_build_output_dir = "./dist"` so Wrangler/Pages tooling can identify the static output directory.

## Production Pages Project

Production project:

- Project: `thirdbaptist-net`
- URL: `https://thirdbaptist-net.pages.dev/`
- GitHub repository: `der-bingle/thirdbaptist.net`
- Production branch: `main`

The production project is connected to GitHub. Cloudflare builds and deploys automatically whenever changes are merged or pushed to `main`.

## Automatic Deploys

Use the Cloudflare Pages Git integration and connect the GitHub repository. Cloudflare will build and deploy automatically whenever changes are merged or pushed to the production branch.

Preview deployments can remain enabled for pull request branches.

If recreating the project later:

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

DNS for `thirdbaptist.net` is managed by Cloudflare. The Pages custom domains are attached to the production `thirdbaptist-net` project:

- `thirdbaptist.net`
- `www.thirdbaptist.net`

The required Cloudflare DNS records are:

| Type | Name | Target |
| --- | --- | --- |
| CNAME | `@` | `thirdbaptist-net.pages.dev` |
| CNAME | `www` | `thirdbaptist-net.pages.dev` |

Cloudflare will flatten the apex CNAME for `thirdbaptist.net`.

When verifying go-live:

1. Confirm both custom domains show `active` in the Pages project.
2. Confirm `https://thirdbaptist.net/` and `https://www.thirdbaptist.net/` resolve and return the site.
3. Verify SSL and redirects before announcing the new site.

## Site URL

Astro reads `CF_PAGES_URL` automatically during Cloudflare builds. If you want canonical sitemap URLs before the custom domain is connected, set `SITE_URL` in Cloudflare Pages environment variables.
