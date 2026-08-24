# Veröffentlichen über Cloudflare Pages

Die Seite ist statisch. Es braucht keinen Webspace, keinen Server und
keine Datenbank — nur einen Ort, der Dateien ausliefert.

---

## Einmal einrichten

1. **Repository zu einem Anbieter schieben** (GitHub oder GitLab).
   Cloudflare Pages liest von dort.

2. Auf [dash.cloudflare.com](https://dash.cloudflare.com) →
   **Workers & Pages** → **Create** → **Pages** → **Connect to Git**,
   dann dieses Repository auswählen.

3. Die Bau-Einstellungen:

   | Feld | Wert |
   |---|---|
   | Framework preset | Astro |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | *(leer, wenn das Repo direkt dieser Ordner ist)* |

   Die Node-Fassung kommt aus `.node-version` — dort steht `22`.
   Lokal läuft eine neuere; das ist kein Problem, aber CI soll eine
   Fassung nehmen, die Cloudflare sicher kennt.

4. **Deploy.** Der erste Lauf dauert ein paar Minuten, weil `npm ci`
   und die Bildpipeline durchlaufen.

Ab dann gilt: **push = veröffentlicht.** Ein neuer Beitrag, ein neues
Foto, ein Commit — Cloudflare baut selbst.

---

## Die Domain anhängen

Die Domain ist **longpath.at**, die maßgebliche Adresse
**www.longpath.at**. Beides steht schon in `astro.config.mjs`,
`public/robots.txt` und `public/_redirects` — daran ist nichts mehr
zu tun.

Im Pages-Projekt → **Custom domains** → **Set up a domain**. Dort
**beide** eintragen:

    www.longpath.at      ← die eigentliche Seite
    longpath.at          ← leitet auf www weiter

Cloudflare nennt zwei Nameserver. Die beim Domain-Anbieter (nic.at
oder wo du sie gekauft hast) anstelle der bisherigen eintragen. Dann
warten — meist Minuten, im schlimmsten Fall ein paar Stunden. HTTPS
richtet Cloudflare selbst ein, ohne Zutun.

### Warum www und nicht longpath.at allein

Eine Seite braucht genau **eine** Adresse. Wären beide erreichbar,
sähe eine Suchmaschine zwei Seiten mit demselben Inhalt, und Verweise
von außen verteilten sich auf beide. `public/_redirects` schickt darum
alles von `longpath.at` dauerhaft (301) auf `www.longpath.at`.

Umgekehrt ginge genauso gut — dann müssten `site`, `robots.txt` und
`_redirects` gemeinsam gedreht werden. Wichtig ist nur, dass alle drei
dasselbe sagen.

---

## Ohne Git, von Hand

Geht auch:

```bash
npm run build
```

Dann den Ordner `dist/` in der Cloudflare-Oberfläche unter
**Upload assets** ablegen. Nachteil: nach jeder Änderung neu bauen und
neu hochladen.

---

## Was gesichert wird und was nicht

`photos/raw/` **liegt im Repository** — die Originale sind das
Gedächtnis der Seite und werden zum Bauen gebraucht.

`src/assets/photos/` liegt **nicht** darin: es entsteht bei jedem Bau
neu aus den Originalen. Zwei Fassungen desselben Bildes zu versionieren
hieße, zwei Wahrheiten zu pflegen.
