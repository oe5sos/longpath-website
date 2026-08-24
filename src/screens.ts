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
    text: "Bandbild und Wasserfall, der Durchlassbereich als eigenes Feld, Sendekette, Stehwelle, S-Meter, Rotor und Logbuch — alles dockbar, alles an derselben Stelle wiederzufinden. Hier an einem ANAN-10/100 auf 40 m.",
  },
  logbuch: {
    bereich: "Logbuch",
    titel: "Ein Logbuch, das sich aufklappt",
    text: "Aus der schmalen Leiste am Rand wird ein voller Arbeitsplatz: Verbindungen suchen, filtern, ergänzen, als ADIF oder Cabrillo hinausschreiben. Daneben die Stammdaten zum Rufzeichen und die Peilung dorthin.",
  },
  kanalzug: {
    bereich: "Sendeton",
    titel: "Der Kanalzug sitzt vor dem Funkgerät, nicht darin",
    text: "Gate, EQ, De-Esser, Kompressor, Röhre, Hall und Begrenzer in Signalreihenfolge — am Mikrofon, bevor WDSP es sieht. Abgeschaltet ist der Ton bitgenau der von vorher, der Vergleich also echt und nicht ungefähr.",
  },
  "kanalzug-eq": {
    bereich: "Entzerrer",
    titel: "Vierzehn Bänder über dem laufenden Spektrum",
    text: "Die Kurve liegt über dem, was das Mikrofon gerade liefert. Darunter die Bandgrenzen von E-SSB, SSB und AM/FM — man sieht, wofür man einstellt, statt es zu erraten.",
  },
};
