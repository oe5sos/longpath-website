import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Die Kopfdaten eines Beitrags.
 *
 * Alles, was hier steht, wird an mehreren Stellen weiterverwendet:
 * die Aktivierungstabelle, das Archiv, die Filter und das Ablesegitter
 * im Beitrag entstehen daraus. Wer einen Beitrag schreibt, hat die
 * Tabelle schon geschrieben — es gibt keine zweite Liste zu pflegen.
 *
 * Regel 7 aus dem Hausstil gilt auch hier: was nicht gemessen wurde,
 * bleibt WEG. Ein fehlendes Feld wird spaeter als "——" gezeigt.
 * Niemals eine Null eintragen, nur damit das Feld gefuellt ist.
 */
const beitraege = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.md" }),
  schema: ({ image }) =>
    z.object({
      titel: z.string(),
      datum: z.coerce.date(),
      /** Ein bis zwei Saetze. Steht in der Uebersicht und als Vorspann. */
      vorspann: z.string(),
      aufmacher: image(),
      aufmacherAlt: z.string(),
      /** Kennzeichnung unten links im Aufmacher, z. B. "05:38 · Gipfelkreuz". */
      aufmacherRef: z.string().optional(),
      /**
       * Zuschnitt des Aufmachers.
       *
       * Der einheitliche Schnitt ist die Regel, nicht das Gesetz: ein
       * stehendes Motiv ueberlebt kein 21:9. Das Gipfelkreuz vom
       * 13.08. wurde vom Panoramaschnitt gekoepft — deshalb gibt es
       * diese Wahl. Die Gradation bleibt fuer alle dieselbe, nur das
       * Seitenverhaeltnis darf sich nach dem Motiv richten.
       */
      aufmacherFormat: z.enum(["quer", "breit", "hoch", "pano"]).default("pano"),

      /** Nur bei einer Gipfelaktivierung. Ein Ausruestungsbeitrag hat das nicht. */
      sota: z
        .object({
          referenz: z.string(),      // OE/OO-023
          gipfel: z.string(),        // Traunstein
          hoehe: z.number().optional(),   // Meter, wenn bekannt
          punkte: z.number(),
          datum: z.coerce.date().optional(),  // wenn abweichend vom Beitrag
        })
        .optional(),

      /**
       * Weitere Gipfel derselben Runde.
       *
       * Eine Tour geht oft ueber mehrere Gipfel, manchmal ueber zwei
       * Tage. Ein Beitrag beschreibt die Runde, nicht den einzelnen
       * Aufstieg — deshalb haengen die uebrigen hier dran, statt in
       * eigenen Beitraegen, die dieselbe Nacht dreimal erzaehlen.
       * Aktivierungstabelle, Archiv und Jahressummen zaehlen sie mit.
       */
      weitereGipfel: z
        .array(
          z.object({
            referenz: z.string(),
            gipfel: z.string(),
            hoehe: z.number().optional(),
            punkte: z.number(),
            datum: z.coerce.date().optional(),
          }),
        )
        .default([]),

      /** Was das Funkgeraet gemacht hat. Jedes Feld einzeln optional. */
      funk: z
        .object({
          baender: z.array(z.string()).optional(),   // ["40 m", "20 m"]
          arten: z.array(z.string()).optional(),     // ["SSB", "FT8"]
          weiteste: z.number().optional(),           // km
          aufstieg: z.string().optional(),           // "2 h 34"
        })
        .optional(),

      /** Zwei Spalten: Bezeichnung, Wert. */
      ausruestung: z
        .array(z.object({ was: z.string(), womit: z.string() }))
        .optional(),

      schlagworte: z.array(z.string()).default([]),
      /** true = wird nicht gebaut. */
      entwurf: z.boolean().default(false),
    }),
});

export const collections = { beitraege };
