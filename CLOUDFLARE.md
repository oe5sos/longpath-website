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

1. Domain kaufen (bei einem beliebigen Anbieter).
2. Im Pages-Projekt → **Custom domains** → **Set up a domain**.
3. Cloudflare nennt zwei Nameserver. Die beim Domain-Anbieter
   eintragen.
4. Warten (meist Minuten, im schlimmsten Fall Stunden). HTTPS richtet
   Cloudflare selbst ein.

**Danach nicht vergessen:** die echte Domain in `astro.config.mjs`
unter `site` eintragen und in `public/robots.txt` die Sitemap-Zeile
mitziehen. Solange dort `longpath.example` steht, zeigen der
RSS-Feed, `sitemap.xml` und die Vorschaubilder beim Teilen ins Leere.

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
