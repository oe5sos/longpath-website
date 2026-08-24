// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Die Seite ist statisch. Kein Server, kein Update-Zwang.
export default defineConfig({
  // ⚠️ HIER die eigene Domain eintragen, sobald sie da ist.
  // Davon haengen ab: RSS-Feed, sitemap.xml und die Vorschaubilder
  // beim Teilen. Solange hier ein Platzhalter steht, zeigen alle
  // drei ins Leere.
  site: "https://longpath.example",
  integrations: [sitemap()],
  build: { inlineStylesheets: "auto" },
  image: {
    // Fotos sind beim Bauen schon gradiert (scripts/grade-photos.mjs).
    // Astro macht hier nur noch Zuschnitt, Groessen und Format.
    responsiveStyles: true,
  },
});
