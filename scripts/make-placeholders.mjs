/**
 * Platzhalterfotos.
 *
 * Erzeugt Bergsilhouetten in photos/raw, damit die Seite gebaut werden
 * kann, bevor echte Aufnahmen da sind. Sobald du eigene Fotos einlegst,
 * kannst du die Platzhalter loeschen — sie heissen alle "platzhalter-*".
 *
 *   node scripts/make-placeholders.mjs
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const ZIEL = "photos/raw";
const BREITE = 2400;
const HOEHE = 1600;

/** Immer dieselben Bilder bei gleichem Startwert. */
function zufall(startwert) {
  let s = startwert * 9301 + 49297;
  return () => ((s = (s * 9301 + 49297) % 233280), s / 233280);
}

function silhouette(startwert) {
  const r = zufall(startwert);
  const sx = (0.24 + r() * 0.5) * BREITE;
  const sy = 0.82 * HOEHE;

  let ebenen = "";
  for (let L = 0; L < 5; L++) {
    const t = L / 4;
    const basis = HOEHE * (0.42 + t * 0.4);
    const amp = HOEHE * (0.2 - t * 0.12);
    const g = Math.round(14 + t * 10);
    const punkte = 8 + Math.floor(r() * 4);

    let d = `M0,${HOEHE} L0,${basis + (r() - 0.5) * amp}`;
    for (let i = 1; i <= punkte; i++) {
      const x = (BREITE * i) / punkte;
      const y = basis + (r() - 0.5) * amp * 2;
      d += ` Q${x - BREITE / punkte / 2},${y - amp * 0.3 * r()} ${x},${y}`;
    }
    d += ` L${BREITE},${HOEHE} Z`;
    ebenen += `<path d="${d}" fill="rgb(${g},${g},${g + 3})" opacity="${(0.7 + t * 0.3).toFixed(2)}"/>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${BREITE}" height="${HOEHE}">
  <defs>
    <linearGradient id="himmel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0"    stop-color="#1b1c20"/>
      <stop offset="0.45" stop-color="#2b2b30"/>
      <stop offset="0.76" stop-color="#5c4f3d"/>
      <stop offset="1"    stop-color="#a87f4a"/>
    </linearGradient>
    <radialGradient id="sonne" cx="${(sx / BREITE).toFixed(3)}" cy="${(sy / HOEHE).toFixed(3)}" r="0.6">
      <stop offset="0"    stop-color="#ffd79a" stop-opacity="0.55"/>
      <stop offset="0.45" stop-color="#c2924f" stop-opacity="0.16"/>
      <stop offset="1"    stop-color="#c2924f" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${BREITE}" height="${HOEHE}" fill="url(#himmel)"/>
  <rect width="${BREITE}" height="${HOEHE}" fill="url(#sonne)"/>
  ${ebenen}
</svg>`;
}

const NAMEN = [
  "platzhalter-traunstein",
  "platzhalter-gruenberg",
  "platzhalter-feuerkogel",
  "platzhalter-hoellengebirge",
  "platzhalter-schafberg",
  "platzhalter-hochsalm",
  "platzhalter-aufbau",
  "platzhalter-abbau",
];

await mkdir(ZIEL, { recursive: true });
for (let i = 0; i < NAMEN.length; i++) {
  const svg = silhouette((i + 1) * 137 + 11);
  await sharp(Buffer.from(svg)).jpeg({ quality: 92 }).toFile(join(ZIEL, `${NAMEN[i]}.jpg`));
  console.log(`  erzeugt  ${NAMEN[i]}.jpg`);
}
console.log(`\n${NAMEN.length} Platzhalter in ${ZIEL}. Jetzt: npm run fotos`);
