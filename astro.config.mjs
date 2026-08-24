// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Die Seite ist statisch. Kein Server, kein Update-Zwang.
export default defineConfig({
  // Die massgebliche Adresse. Daran haengen RSS-Feed, sitemap.xml,
  // die kanonischen Verweise und die Vorschaubilder beim Teilen.
  //
  // MIT www, nicht ohne: eine Seite braucht genau EINE Adresse, unter
  // der sie steht. Stuenden beide, waeren es fuer Suchmaschinen zwei
  // Seiten mit demselben Inhalt. longpath.at leitet darum hierher
  // (public/_redirects).
  site: "https://www.longpath.at",
  integrations: [sitemap()],
  build: { inlineStylesheets: "auto" },
  image: {
    // Fotos sind beim Bauen schon gradiert (scripts/grade-photos.mjs).
    // Astro macht hier nur noch Zuschnitt, Groessen und Format.
    responsiveStyles: true,
  },
});
