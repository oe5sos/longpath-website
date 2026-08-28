/**
 * Zwei Handgriffe, die jede Seite und jedes Bauteil braucht: welche
 * Sprache gerade gilt, und das dazu passende Wörterbuch aus ui.ts.
 * Astro.currentLocale übernimmt die Erkennung aus dem Pfad (Konfiguration
 * in astro.config.mjs) — hier steht nur der Fallback für den Fall, dass
 * eine Komponente außerhalb einer Astro-Seite (z.B. ein Test) aufgerufen
 * wird und currentLocale undefined ist.
 */
import { ui, DEFAULT_LOCALE, type Locale } from "./ui";

export function useTranslations(lang: Locale | undefined) {
  return ui[lang ?? DEFAULT_LOCALE];
}
