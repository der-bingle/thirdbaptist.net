# Third Baptist West Frankfort

Astro site for Third Baptist West Frankfort, built from the Astro Church theme.

## Development

```bash
pnpm install
pnpm run dev
```

## Build

```bash
pnpm run build
```

The static site is generated into `dist/`.

## Deployment

This repo is intended for Cloudflare Pages Git integration. See `CLOUDFLARE_PAGES.md` for the build settings.

Temporary preview: `https://thirdbaptist-net-preview.pages.dev/`

## Content

- Site-wide settings: `src/content-collections/site.config.json`
- Pages: `src/content-collections/pages/`
- Sermons: `src/content-collections/sermons/`
- Series: `src/content-collections/series/`
- Preachers: `src/content-collections/preachers/`
- Blog/writings: `src/content-collections/blog/`
