import { getCollection, type CollectionEntry } from "astro:content";

export type Beitrag = CollectionEntry<"beitraege">;

/** Alle veroeffentlichten Beitraege, neueste zuerst. */
export async function alleBeitraege(): Promise<Beitrag[]> {
  const alle = await getCollection("beitraege", ({ data }) => !data.entwurf);
  return alle.sort((a, b) => b.data.datum.valueOf() - a.data.datum.valueOf());
}

/** Nur die Gipfelaktivierungen — Ausruestungsbeitraege fallen raus. */
export function nurAktivierungen(beitraege: Beitrag[]): Beitrag[] {
  return beitraege.filter((b) => b.data.sota);
}

/** Ein Gipfel, wie ihn die Tabelle braucht — samt Herkunftsbeitrag. */
export interface Gipfel {
  referenz: string;
  gipfel: string;
  hoehe?: number;
  punkte: number;
  datum: Date;
  beitrag: Beitrag;
}

/**
 * Alle Gipfel eines Beitrags, der Hauptgipfel zuerst.
 *
 * Eine Tour ueber drei Gipfel steht in EINEM Beitrag; die Tabelle
 * soll trotzdem drei Zeilen zeigen und die Jahressumme drei Gipfel
 * zaehlen.
 */
export function gipfelVon(b: Beitrag): Gipfel[] {
  const raus: Gipfel[] = [];
  if (b.data.sota) {
    raus.push({ ...b.data.sota, datum: b.data.sota.datum ?? b.data.datum, beitrag: b });
  }
  for (const w of b.data.weitereGipfel ?? []) {
    raus.push({ ...w, datum: w.datum ?? b.data.datum, beitrag: b });
  }
  return raus;
}

/** Alle Gipfel aus mehreren Beitraegen, neueste zuerst. */
export function alleGipfel(beitraege: Beitrag[]): Gipfel[] {
  return beitraege.flatMap(gipfelVon).sort((a, b) => b.datum.valueOf() - a.datum.valueOf());
}

/** Nach Jahr gruppiert, Jahre absteigend. */
export function nachJahr(beitraege: Beitrag[]): [number, Beitrag[]][] {
  const gruppen = new Map<number, Beitrag[]>();
  for (const b of beitraege) {
    const jahr = b.data.datum.getFullYear();
    if (!gruppen.has(jahr)) gruppen.set(jahr, []);
    gruppen.get(jahr)!.push(b);
  }
  return [...gruppen.entries()].sort((a, b) => b[0] - a[0]);
}

/** Summe eines Jahres fuer die Kopfzeile im Archiv. */
export function jahresbilanz(beitraege: Beitrag[]) {
  const g = alleGipfel(beitraege);

  /* QSO nur zaehlen, wo welche eingetragen sind. Sonst undefined —
     Regel 7: eine Null sieht aus wie eine Messung. Wer keine Zahlen
     fuehrt, hat nicht null Verbindungen gemacht. */
  const mitQso = beitraege.filter((b) => typeof b.data.funk?.qso === "number");
  const qso = mitQso.length
    ? mitQso.reduce((s, b) => s + b.data.funk!.qso!, 0)
    : undefined;

  return {
    beitraege: beitraege.length,
    gipfel: new Set(g.map((x) => x.referenz)).size,
    qso,
    punkte: g.reduce((s, x) => s + x.punkte, 0),
  };
}

/** Alle vergebenen Schlagworte, nach Haeufigkeit. */
export function schlagworte(beitraege: Beitrag[]): string[] {
  const zaehler = new Map<string, number>();
  for (const b of beitraege)
    for (const s of b.data.schlagworte)
      zaehler.set(s, (zaehler.get(s) ?? 0) + 1);
  return [...zaehler.entries()].sort((a, b) => b[1] - a[1]).map(([s]) => s);
}

/**
 * Aus einem Schlagwort eine Adresse machen.
 * Umlaute werden ausgeschrieben, damit in der Adresszeile
 * /blog/schlagwort/ausruestung/ steht und nicht %C3%BC-Salat.
 */
export function alsAdresse(text: string): string {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Regel 7 — Unbekannt ist ein Strich, keine Null. */
export const STRICH = "——";
export function wert(v: number | string | undefined | null, einheit = ""): string {
  if (v === undefined || v === null || v === "") return STRICH;
  return typeof v === "number"
    ? v.toLocaleString("de-AT") + (einheit ? " " + einheit : "")
    : v;
}

export function datumLang(d: Date): string {
  return d.toLocaleDateString("de-AT", { day: "2-digit", month: "long", year: "numeric" });
}
export function datumKurz(d: Date): string {
  return d.toLocaleDateString("de-AT", { day: "2-digit", month: "short" });
}
export function datumIso(d: Date): string {
  return d.toISOString().slice(0, 10);
}
