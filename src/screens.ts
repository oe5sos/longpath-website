/**
 * Die Texte zu den Bildschirmfotos.
 *
 * Schluessel = Dateiname in src/assets/screens/ ohne fuehrende Nummer
 * und ohne Endung. Fehlt ein Eintrag, erscheint das Bild ohne Text —
 * das ist erlaubt, aber ein Bild ohne Beschriftung erklaert sich nur
 * dem, der die Oberflaeche schon kennt.
 */
export const SCHIRME: Record<string, { bereich: string; titel: string; text: string }> = {
  konsole: {
    bereich: "Konsole",
    titel: "Der ganze Arbeitsplatz in einem Fenster",
    text: "Logbuch, Bandbild, Wasserfall, VFO, Sendekette und die Stationsinstrumente in einer Anordnung.",
  },
  empfang: {
    bereich: "Empfang",
    titel: "Zehn WDSP-Bereiche, alle erreichbar",
    text: "AGC, EMNR, SNB, APF und die dreifache Rauschsperre — je Empfänger und je Band gemerkt.",
  },
  senden: {
    bereich: "Senden",
    titel: "Die Sendekette mit PureSignal",
    text: "Zehnbandiger EQ, Leveler, ALC, CFC — und das Zweiton-IMD über dem Spektrum, wo man das Einrasten zusieht.",
  },
  spots: {
    bereich: "Spots",
    titel: "Sieben Quellen auf einem Bandbild",
    text: "Cluster, RBN, WSJT-X, DXLab, POTA, FreeDV Reporter und PSK Reporter, gestapelt und anklickbar.",
  },
  sunsdr: {
    bereich: "SunSDR",
    titel: "Ein Gerät ohne OpenHPSDR, trotzdem im Bild",
    text: "Der SunSDR2 QRP über TCI — Ton, Panadapter und Abstimmung, während ExpertSDR2 daneben läuft.",
  },
};
