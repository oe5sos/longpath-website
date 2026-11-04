// ══════════════════════════════════════════════════════════════════
// scripts/trainer-fassung.mjs
// ══════════════════════════════════════════════════════════════════
//
// Betreiber, 2026-11-03: „grundsaetzlich sollten alle versionen einen
// automatischen updater haben! auch contesttrainer"
//
// Der Trainer ist eine einzige HTML-Datei im Browser. Er kann sich
// nicht selbst ersetzen wie Longpath oder das Contestprogramm -- aber
// er kann merken, dass draussen eine neuere liegt. Dazu braucht er
// EINE Zahl, die von draussen kommt: diese Datei schreibt sie.
//
// Geschrieben wird <ziel>/trainer/fassung.json:
//
//     { "fassung": "6.53", "stand": "2026-11-04T01:12:00Z",
//       "commit": "a1b2c3d4e5" }
//
// Die Fassungswache am Ende von public/trainer/index.html holt diese
// Datei (no-store) und vergleicht sie mit ihrer eigenen Nummer.
//
// Und: die Nummer steht im Trainer an vier Stellen -- Titel,
// Anmeldezeile, Fusszeile, und die Konstante der Wache. Weichen sie
// voneinander ab, bricht dieses Skript ab. Das ist der eigentliche
// Grund, warum es ein Skript ist und keine Zeile im Astro-Bau: eine
// Fassungsnummer, die an einer Stelle hochgezaehlt wurde und an drei
// anderen nicht, laesst die Wache fuer immer schweigen -- oder fuer
// immer rufen.
//
// Aufruf:  node scripts/trainer-fassung.mjs [ziel]      (ziel: dist)
//          node scripts/trainer-fassung.mjs --pruefe    (nur pruefen)
//
// ══════════════════════════════════════════════════════════════════
// Modification history (longpath-website):
//   2026-11-04 — New. AI-assisted via Anthropic Claude Code, operator
//                 Ralph Martin Fischer.
// ══════════════════════════════════════════════════════════════════

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { dirname, join } from 'node:path';

const QUELLE = 'public/trainer/index.html';

const html = readFileSync(QUELLE, 'utf8');

// Die Konstante der Wache ist die Wahrheit: sie ist die eine Stelle,
// die zur Laufzeit wirklich verglichen wird.
const wache = html.match(/var FASSUNG = '([0-9][0-9.]*)';/);
if (!wache) {
  console.error(`${QUELLE}: keine Zeile "var FASSUNG = '…';" gefunden — ohne sie kann die Fassungswache nichts vergleichen.`);
  process.exit(1);
}
const fassung = wache[1];

// Die drei sichtbaren Stellen muessen dasselbe sagen.
const stellen = [
  ['Titel', new RegExp(`<title>HF Contest Trainer v([0-9][0-9.]*)</title>`)],
  ['Anmeldezeile', new RegExp(`class="login-sub">SSB &amp; CW · v([0-9][0-9.]*)<`)],
  ['Fusszeile', new RegExp(`HF Contest Trainer · v([0-9][0-9.]*) ·`)],
];
let abweichung = false;
for (const [name, muster] of stellen) {
  const treffer = html.match(muster);
  if (!treffer) {
    console.error(`${QUELLE}: ${name} nicht gefunden — bitte das Muster in diesem Skript nachziehen.`);
    abweichung = true;
    continue;
  }
  if (treffer[1] !== fassung) {
    console.error(`${QUELLE}: ${name} sagt v${treffer[1]}, die Fassungswache sagt ${fassung}.`);
    abweichung = true;
  }
}
if (abweichung) {
  console.error('Abbruch: eine halb hochgezaehlte Fassungsnummer laesst die Wache fuer immer schweigen oder fuer immer rufen.');
  process.exit(1);
}

const nurPruefen = process.argv.includes('--pruefe');
if (nurPruefen) {
  console.log(`Trainer-Fassung ${fassung} — alle vier Stellen stimmen.`);
  process.exit(0);
}

let commit = 'unbekannt';
try {
  commit = execSync('git rev-parse --short=10 HEAD', { encoding: 'utf8' }).trim();
  const schmutzig = execSync('git status --porcelain --untracked-files=no', { encoding: 'utf8' });
  if (schmutzig.trim()) { commit += '+'; }
} catch { /* kein Git, etwa im Container: dann eben "unbekannt" */ }

const ziel = process.argv.find((a) => !a.startsWith('-') && !a.endsWith('.mjs') && !a.endsWith('node')) ?? 'dist';
const datei = join(ziel, 'trainer', 'fassung.json');
if (!existsSync(dirname(datei))) {
  mkdirSync(dirname(datei), { recursive: true });
}
const inhalt = {
  fassung,
  stand: new Date().toISOString().replace(/\.\d+Z$/, 'Z'),
  commit,
};
writeFileSync(datei, JSON.stringify(inhalt, null, 2) + '\n', 'utf8');
console.log(`${datei}: Fassung ${fassung}, Stand ${inhalt.stand}, Commit ${commit}`);
