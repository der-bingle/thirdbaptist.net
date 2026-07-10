// @ts-check
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import reactCompilerPlugin from "babel-plugin-react-compiler";

const SITE_URL = process.env["CF_PAGES_URL"] ?? process.env["SITE_URL"];

export default defineConfig({
  site: SITE_URL ?? "http://localhost:4321",
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: "Poppins",
      cssVariable: "--font-poppins",
      provider: fontProviders.google(),
    },
  ],
  integrations: [
    react({
      babel: {
        plugins: [reactCompilerPlugin],
      },
    }),
    sitemap(),
  ],
});
