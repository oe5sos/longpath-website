# Longpath — Website

Die Seite hat zwei Räume unter einer Marke: **Longpath**, die
Stationskonsole, und den **Blog** von den Gipfeln. Die Startseite ist
eine Weiche zwischen beiden.

Statisch gebaut mit [Astro](https://astro.build). Kein Server, keine
Datenbank, kein Update-Zwang.

---

## Anfangen

```bash
npm install
npm run platzhalter     # nur beim ersten Mal, solange keine echten Fotos da sind
npm run fotos           # Bildpipeline
npm run dev             # http://localhost:4321
```

Bauen: `npm run build` (führt die Bildpipeline mit aus) → `dist/`.

---

## Wo was liegt

```
photos/raw/              Originalfotos, unbearbeitet, wie aus der Kamera
scripts/grade-photos.mjs die Bildpipeline
src/assets/photos/       Ergebnis der Pipeline — nicht von Hand anfassen
src/content/posts/       die Beiträge, ein Markdown je Beitrag
src/content.config.ts    welche Kopfdaten ein Beitrag haben darf
src/styles/tokens.css    Farben und Schrift, aus dem Programm übernommen
src/components/          Schriftzug, Foto, Leiste, Ablesegitter
src/pages/               index (Weiche) · longpath/ · blog/
```

---

## Einen Beitrag schreiben

Eine Datei in `src/content/posts/`. Der Dateiname wird die Adresse:
`traunstein-nebel.md` → `/blog/traunstein-nebel/`.

```markdown
---
titel: "Vierzig Meter öffnete, als der Nebel aufriss"
datum: 2026-08-14
vorspann: "Ein bis zwei Sätze. Stehen in der Übersicht und als Vorspann."
aufmacher: "../../assets/photos/traunstein-gipfel.jpg"
aufmacherAlt: "Beschreibung für Menschen, die das Bild nicht sehen"
aufmacherRef: "05:38 · Gipfelkreuz"        # optional, steht im Bild unten links
sota:                                       # weglassen, wenn es keine Aktivierung war
  referenz: "OE/OO-023"
  gipfel: "Traunstein"
  hoehe: 1691
  punkte: 8
funk:                                       # jedes Feld einzeln optional
  qso: 22
  baender: ["40 m"]
  arten: ["SSB"]
  leistung: "5 W"
  weiteste: 9240                            # km
  aufstieg: "2 h 34"
ausruestung:
  - { was: "Transceiver", womit: "Elecraft KX2 · 5 W" }
schlagworte: ["2026", "40m", "DX"]
entwurf: false                              # true = wird nicht gebaut
---

Fließtext in Markdown. `## Zwischenüberschrift`, `> Merksatz`,
`**wichtig**` — mehr braucht es nicht.
```

**Regel 7 aus dem Hausstil gilt auch hier: was nicht gemessen wurde,
bleibt weg.** Ein fehlendes Feld erscheint auf der Seite als `——`.
Trage niemals eine Null ein, nur damit das Feld gefüllt ist — eine Null
sieht aus wie eine Messung.

Aus diesen Kopfdaten entstehen ohne weiteres Zutun:

- die Aktivierungstabelle unter der Beitragsübersicht
- das Archiv mit Jahressummen (Gipfel, QSO, Punkte)
- die Schlagwortseiten und die Filterreihe
- das Ablesegitter „Die Aktivierung in Zahlen" im Beitrag
- der RSS-Feed
- die Zahlen auf der Stationsseite

Es gibt keine zweite Liste zu pflegen.

---

## Fotos

**Alle Bilder sollen gleich aussehen, egal womit sie aufgenommen wurden.**
Dafür gibt es die Pipeline:

```
photos/raw/  →  scripts/grade-photos.mjs  →  src/assets/photos/  →  Astro
 Originale       entsättigt, kontrastiert,      fertig gradiert       Zuschnitt,
                 gewärmt, EXIF entfernt                              Größen, AVIF
```

Neue Fotos einfach nach `photos/raw/` legen und `npm run fotos` laufen
lassen. Schon bearbeitete Bilder werden übersprungen.

Die Gradation steht an genau einer Stelle — der Konstanten `GRADATION`
in `scripts/grade-photos.mjs`:

| Wert | | warum |
|---|---|---|
| Sättigung | 0,68 | damit Bunt nicht mit der Palette streitet |
| Helligkeit | 0,92 | passend zum Fast-Schwarz der Seite |
| Kontrast | 1,06 | leicht angezogen |
| Wärme | 1,03 | nie blaustichig — dieselbe Regel wie im Programm |

Wer sie ändert, ändert das Aussehen **aller** Bilder. Das ist der Sinn
der Sache.

Warum gebacken und nicht als CSS-Filter: einen Filter trägt jeder
Besucher neu, und was man herunterlädt, wäre ungefiltert. So sieht auch
das gespeicherte Bild richtig aus.

Der Zuschnitt kommt aus dem `format` der `<Photo>`-Komponente:
`quer` (3:2), `breit` (16:9), `hoch` (4:5), `pano` (21:9).

---

## Gestaltung

Farben, Schriftstufen und Regeln stammen **nicht** von dieser Seite,
sondern aus dem Programm:

- `../NereusSDR/docs/design/HAUSSTIL.md` — die Regeln
- `../NereusSDR/src/gui/StyleConstants.h` — die Werte
- `../NereusSDR/themes/oe5sos.json` — dieselben Werte für Stylesheets
- `../NereusSDR/resources/branding/` — Bildmarke, Schriftzug, Programmsymbol

`src/styles/tokens.css` ist eine Kopie davon. **Wer dort etwas ändert,
muss es hier mitziehen** — zwei Zahlen für eine Rolle sind schlimmer als
die falschere von beiden.

Die eine Regel: Farbe bedeckt höchstens zwei Prozent der Fläche.
Bernstein nur, wo etwas gemessen wird. Blau nur, wo man klickt.

---

## Veröffentlichen

`npm run build` erzeugt `dist/` — reine statische Dateien. Läuft auf
Cloudflare Pages, Netlify, GitHub Pages oder jedem Webspace.

Vorher in `astro.config.mjs` die eigene Domain unter `site` eintragen;
davon hängen der RSS-Feed und die Vorschaubilder ab.
