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
  const akt = nurAktivierungen(beitraege);
  return {
    beitraege: beitraege.length,
    gipfel: new Set(akt.map((b) => b.data.sota!.referenz)).size,
    qso: akt.reduce((s, b) => s + (b.data.funk?.qso ?? 0), 0),
    punkte: akt.reduce((s, b) => s + b.data.sota!.punkte, 0),
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
