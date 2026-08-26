/**
 * Die Bildpipeline.
 *
 *   photos/raw/**       Originale, wie sie aus der Kamera kommen
 *        │
 *        ▼   node scripts/grade-photos.mjs
 *   src/assets/photos/  einheitlich gradiert, EXIF entfernt
 *        │
 *        ▼   Astro (astro:assets)
 *   dist/                Zuschnitt, Groessen, AVIF/WebP
 *
 * Warum die Gradation HIER passiert und nicht im Browser: ein CSS-Filter
 * traegt jeder Besucher neu, und was man herunterlaedt, ist ungefiltert.
 * Gebacken sieht auch das gespeicherte Bild richtig aus.
 *
 * Die Werte sind bewusst zurueckhaltend. Der Hausstil sagt: kein
 * benennbarer Farbton, nur der Eindruck. Wer sie aendert, aendert das
 * Aussehen ALLER Bilder — das ist der Sinn der Sache.
 */
import sharp from "sharp";
import { readdir, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, extname, basename } from "node:path";

const QUELLE = "photos/raw";
const ZIEL = "src/assets/photos";

/** Die eine Stelle, an der das Aussehen aller Fotos haengt. */
const GRADATION = {
  saettigung: 0.68,   // entsaettigt, damit Bunt nicht mit der Palette streitet
  helligkeit: 0.92,   // eine Spur dunkler, passend zum Fast-Schwarz der Seite
  kontrast: 1.06,     // leicht angezogen
  waerme: 1.03,       // Rot minimal hoch, Blau minimal runter — nie blaustichig
  maxBreite: 2400,    // groesser braucht die Seite nirgends
  qualitaet: 88,
};

/**
 * Ausrichtung von Hand, je Datei (ohne Endung).
 *
 * Manche Aufnahmen tragen ein falsches EXIF-Ausrichtungsmerkmal - typisch bei
 * Bildern, die ueber eine App exportiert wurden. sharp folgt dem Merkmal und
 * legt sie dadurch quer. Steht eine Datei hier, wird das Merkmal ignoriert und
 * das Rohbild stattdessen um den angegebenen Winkel gedreht (0 = so lassen).
 */
const DREHUNG = {
  "traunstein-kx2-20m": 0,   // Rohbild ist bereits aufrecht, EXIF sagt faelschlich quer
};

const ENDUNGEN = new Set([".jpg", ".jpeg", ".png", ".tif", ".tiff", ".webp"]);

/** Kontrast um den Mittelwert: y = a·x + b mit b so, dass 128 fix bleibt. */
const kontrastVersatz = (a) => 128 * (1 - a);

async function verarbeite(datei) {
  const eingang = join(QUELLE, datei);
  const name = basename(datei, extname(datei)).toLowerCase().replace(/[^a-z0-9-]+/g, "-");
  const ausgang = join(ZIEL, `${name}.jpg`);

  // Schon aktuell? Dann nichts tun.
  if (existsSync(ausgang)) {
    const [a, b] = await Promise.all([stat(eingang), stat(ausgang)]);
    if (b.mtimeMs >= a.mtimeMs) return { name, uebersprungen: true };
  }

  const { waerme: w } = GRADATION;
  const vonHand = DREHUNG[name];
  await sharp(eingang, { autoOrient: vonHand === undefined })
    .rotate(vonHand ?? 0)                       // EXIF-Ausrichtung, oder von Hand
    .resize({ width: GRADATION.maxBreite, withoutEnlargement: true })
    .modulate({
      saturation: GRADATION.saettigung,
      brightness: GRADATION.helligkeit,
    })
    .linear(GRADATION.kontrast, kontrastVersatz(GRADATION.kontrast))
    .recomb([                                   // sanfte Waerme
      [w,   0,   0  ],
      [0,   1,   0  ],
      [0,   0,   2 - w],
    ])
    .jpeg({ quality: GRADATION.qualitaet, mozjpeg: true })
    .withMetadata({})                           // ... und danach alles andere weg
    .toFile(ausgang);

  return { name, uebersprungen: false };
}

async function main() {
  if (!existsSync(QUELLE)) {
    console.log(`Kein Ordner ${QUELLE} — nichts zu tun.`);
    return;
  }
  await mkdir(ZIEL, { recursive: true });

  const dateien = (await readdir(QUELLE)).filter((f) =>
    ENDUNGEN.has(extname(f).toLowerCase()),
  );

  if (dateien.length === 0) {
    console.log(`${QUELLE} ist leer. Fotos hineinlegen und erneut laufen lassen.`);
    console.log("Zum Ausprobieren:  npm run platzhalter");
    return;
  }

  let neu = 0, alt = 0;
  for (const f of dateien) {
    const r = await verarbeite(f);
    r.uebersprungen ? alt++ : neu++;
    if (!r.uebersprungen) console.log(`  gradiert  ${r.name}.jpg`);
  }
  console.log(`\n${neu} bearbeitet, ${alt} schon aktuell → ${ZIEL}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
