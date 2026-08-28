/**
 * Kurze, wiederkehrende Bedienelemente-Texte — Navigation, Fuß,
 * Beitragskarten, Listenseiten. Lange Fließtexte (die App-Seite, die
 * Blog-Beiträge selbst) stehen NICHT hier, sondern als eigene Module
 * unter src/i18n/content/ — ein Wörterbuch mit hundert Sätzen pro
 * Sprache wäre keine Übersicht mehr, sondern eine zweite Beitragsdatei.
 *
 * Jede Sprache trägt exakt dieselben Schlüssel (siehe UiStrings) —
 * TypeScript meldet eine fehlende Übersetzung als Fehler, nicht erst
 * beim Ansehen der Seite.
 */

export type Locale = "de" | "en" | "es";
export const LOCALES: Locale[] = ["de", "en", "es"];
export const DEFAULT_LOCALE: Locale = "de";

/** BCP-47-Tag fuer <html lang>, RSS <language> und Date-Formatierung. */
export const LOCALE_TAG: Record<Locale, string> = {
  de: "de-AT",
  en: "en-GB",
  es: "es-ES",
};

export const LOCALE_LABEL: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  es: "Español",
};

interface UiStrings {
  nav: {
    subApp: string;
    subBlog: string;
    appMenu: { signalkette: string; funktionen: string; oberflaeche: string; hardware: string; download: string };
    blogMenu: { beitraege: string; archiv: string; station: string };
    switchToBlog: string;
    switchToApp: string;
  };
  footer: {
    ort: string;
    portabel: string;
    appCol: { versionen: string; hardware: string; signalkette: string };
    blogCol: { beitraege: string; archiv: string; rss: string };
    zumBlog: string;
    zurApp: string;
    start: string;
    impressum: string;
  };
  postcard: { weiterlesen: string };
  home: {
    titel: string;
    beschreibung: string;
    appKicker: string;
    appLede: string;
    appGo: string;
    trainerKicker: string;
    trainerLede: string;
    trainerGo: string;
    blogKicker: string;
    blogLede: string;
    blogGo: string;
    cornerTop2: string;
    cornerBottom1: string;
    cornerBottomZuletzt: string;
  };
  blogIndex: {
    titel: string;
    beschreibung: string;
    kicker: string;
    lede: string;
    alle: string;
    aktivierungenKicker: string;
    aktivierungenTitel: string;
    aktivierungenLede: string;
    thDatum: string;
    thReferenz: string;
    thGipfel: string;
    thHoehe: string;
    thPunkte: string;
  };
  archiv: {
    titel: string;
    beschreibung: string;
    kicker: string;
    lede: string;
    beitraegeWort: (n: number) => string;
    gipfelWort: (n: number) => string;
    punkteWort: (n: number) => string;
  };
  station: {
    titel: string;
    beschreibung: string;
    h1: string;
    bisher: string;
    beitraege: string;
    gipfel: string;
    punkte: string;
    hoechster: string;
    weiteste: string;
    text: string;
  };
  schlagwort: {
    kicker: string;
    beitragWort: (n: number) => string;
  };
  impressum: {
    titel: string;
    beschreibung: string;
    kicker: string;
    h1: string;
    adresse: string[];
    hinweis: string;
    softwareH2: string;
    softwareText: string;
    haftungH2: string;
    haftungText: string;
  };
  post: {
    aelter: string;
    neuer: string;
    ausruestungH2: string;
    signatur: string;
    readoutTitel: string;
    fReferenz: string;
    fGipfel: string;
    fPunkte: string;
    fQso: string;
    fAufstieg: string;
    fWeiteste: string;
    fBaender: string;
  };
}

export const ui: Record<Locale, UiStrings> = {
  de: {
    nav: {
      subApp: "Stationskonsole",
      subBlog: "Blog",
      appMenu: { signalkette: "Signalkette", funktionen: "Funktionen", oberflaeche: "Oberfläche", hardware: "Hardware", download: "Download" },
      blogMenu: { beitraege: "Beiträge", archiv: "Archiv", station: "Station" },
      switchToBlog: "Blog",
      switchToApp: "App",
    },
    footer: {
      ort: "Gmunden, Österreich",
      portabel: "5 W portabel",
      appCol: { versionen: "Versionen", hardware: "Hardware", signalkette: "Signalkette" },
      blogCol: { beitraege: "Beiträge", archiv: "Archiv", rss: "RSS" },
      zumBlog: "Blog",
      zurApp: "App",
      start: "Start",
      impressum: "Impressum",
    },
    postcard: { weiterlesen: "Weiterlesen" },
    home: {
      titel: "Longpath — Stationskonsole und Blog",
      beschreibung: "Longpath: eine native OpenHPSDR-Stationskonsole für macOS, Linux und Windows. Dazu ein Blog von den Gipfeln über dem Traunsee.",
      appKicker: "OpenHPSDR · Protokoll 1 + 2",
      appLede: "Die Stationskonsole. Nativ für macOS, Linux und Windows.",
      appGo: "Zur App",
      trainerKicker: "Im Browser, ohne Anmeldung",
      trainerLede: "Contest üben — Pile-Up, QSB und QRM, in SSB und CW.",
      trainerGo: "Zum Üben",
      blogKicker: "Summits on the Air · OE/OO",
      blogLede: "Fotos und Notizen von den Gipfeln.",
      blogGo: "Zum Blog",
      cornerTop2: "JN67 · Gmunden",
      cornerBottom1: "Drei Wege, eine Station",
      cornerBottomZuletzt: "Zuletzt",
    },
    blogIndex: {
      titel: "Blog — Longpath",
      beschreibung: "Fotos und Notizen von den Gipfeln über dem Traunsee. Summits on the Air, OE5SOS.",
      kicker: "Summits on the Air · OE/OO · seit 2023",
      lede: "Fotos und Notizen von den Gipfeln über dem Traunsee — was fünf Watt wirklich schaffen, wenn man die Station selbst hinaufträgt.",
      alle: "Alle",
      aktivierungenKicker: "Aktivierungen",
      aktivierungenTitel: "Jeder Gipfel, direkt aus den Beiträgen gezogen.",
      aktivierungenLede: "Diese Tabelle wird nicht gepflegt. Sie entsteht beim Bauen aus den Kopfdaten der Beiträge — wer einen Beitrag schreibt, hat sie schon geschrieben.",
      thDatum: "Datum", thReferenz: "Referenz", thGipfel: "Gipfel", thHoehe: "Höhe", thPunkte: "Pkt",
    },
    archiv: {
      titel: "Archiv — Longpath Blog",
      beschreibung: "Alle Beiträge chronologisch.",
      kicker: "Alle Beiträge",
      lede: "Chronologisch, ohne Bilder — zum Suchen, nicht zum Blättern.",
      beitraegeWort: (n) => (n === 1 ? "Beitrag" : "Beiträge"),
      gipfelWort: () => "Gipfel",
      punkteWort: () => "Punkte",
    },
    station: {
      titel: "Station — Longpath Blog",
      beschreibung: "Die portable Station von OE5SOS und was sie bisher gemacht hat.",
      h1: "Die Station",
      bisher: "Bisher", beitraege: "Beiträge", gipfel: "Gipfel", punkte: "Punkte",
      hoechster: "Höchster", weiteste: "Weiteste",
      text: 'Portabel: fünf Watt, eine endgespeiste Antenne am Wanderstock, drei Amperestunden LiFePO₄. Zu Hause läuft die Gegenstelle unter Longpath, der Konsole, die ich für OpenHPSDR-Geräte schreibe — was auf dem Berg auffällt, landet früher oder später als Änderung im Programm.',
    },
    schlagwort: {
      kicker: "Schlagwort",
      beitragWort: (n) => (n === 1 ? "Beitrag" : "Beiträge"),
    },
    impressum: {
      titel: "Impressum — Longpath",
      beschreibung: "Angaben nach § 5 ECG.",
      kicker: "Angaben nach § 5 ECG",
      h1: "Impressum",
      adresse: ["Ralph Martin Fischer", "Altmühlweg 9", "4810 Gmunden", "Österreich"],
      hinweis: "Rufzeichen OE5SOS. Kein Unternehmen, keine Gewinnabsicht — diese Seite begleitet ein privates Amateurfunkprojekt.",
      softwareH2: "Zur Software",
      softwareText: "Longpath ist freie Software unter der GNU General Public License v3. Es ist ein Fork von NereusSDR (J. J. Boyd, KG4VCF), selbst eine C++20/Qt6-Portierung von Thetis. Das DSP ist WDSP von Warren Pratt (NR0V). Die vollständige Herkunft steht im Quellbaum unter",
      haftungH2: "Haftung",
      haftungText: "Die Software wird ohne jede Gewährleistung bereitgestellt. Der Betrieb eines Senders erfolgt in eigener Verantwortung des lizenzierten Funkamateurs.",
    },
    post: {
      aelter: "← Älter",
      neuer: "Neuer →",
      ausruestungH2: "Was mitgegangen ist",
      signatur: "73 · OE5SOS",
      readoutTitel: "Die Aktivierung in Zahlen",
      fReferenz: "Referenz", fGipfel: "Gipfel", fPunkte: "Punkte",
      fQso: "QSO", fAufstieg: "Aufstieg", fWeiteste: "Weiteste", fBaender: "Bänder",
    },
  },
  en: {
    nav: {
      subApp: "Station console",
      subBlog: "Blog",
      appMenu: { signalkette: "Signal path", funktionen: "Features", oberflaeche: "Interface", hardware: "Hardware", download: "Download" },
      blogMenu: { beitraege: "Posts", archiv: "Archive", station: "Station" },
      switchToBlog: "Blog",
      switchToApp: "App",
    },
    footer: {
      ort: "Gmunden, Austria",
      portabel: "5 W portable",
      appCol: { versionen: "Releases", hardware: "Hardware", signalkette: "Signal path" },
      blogCol: { beitraege: "Posts", archiv: "Archive", rss: "RSS" },
      zumBlog: "Blog",
      zurApp: "App",
      start: "Home",
      impressum: "Legal notice",
    },
    postcard: { weiterlesen: "Read on" },
    home: {
      titel: "Longpath — station console and blog",
      beschreibung: "Longpath: a native OpenHPSDR station console for macOS, Linux and Windows. Plus a blog from the summits above Lake Traunsee.",
      appKicker: "OpenHPSDR · Protocol 1 + 2",
      appLede: "The station console. Native for macOS, Linux and Windows.",
      appGo: "To the app",
      trainerKicker: "In the browser, no sign-up",
      trainerLede: "Practise contests — pile-up, QSB and QRM, in SSB and CW.",
      trainerGo: "Start practising",
      blogKicker: "Summits on the Air · OE/OO",
      blogLede: "Photos and notes from the summits.",
      blogGo: "To the blog",
      cornerTop2: "JN67 · Gmunden",
      cornerBottom1: "Three paths, one station",
      cornerBottomZuletzt: "Latest",
    },
    blogIndex: {
      titel: "Blog — Longpath",
      beschreibung: "Photos and notes from the summits above Lake Traunsee. Summits on the Air, OE5SOS.",
      kicker: "Summits on the Air · OE/OO · since 2023",
      lede: "Photos and notes from the summits above Lake Traunsee — what five watts can really do when you carry the station up yourself.",
      alle: "All",
      aktivierungenKicker: "Activations",
      aktivierungenTitel: "Every summit, pulled straight from the posts.",
      aktivierungenLede: "This table isn't maintained by hand. It's generated at build time from each post's front matter — writing the post already writes the row.",
      thDatum: "Date", thReferenz: "Reference", thGipfel: "Summit", thHoehe: "Height", thPunkte: "Pts",
    },
    archiv: {
      titel: "Archive — Longpath Blog",
      beschreibung: "All posts, chronologically.",
      kicker: "All posts",
      lede: "Chronological, no photos — for finding something, not for browsing.",
      beitraegeWort: (n) => (n === 1 ? "post" : "posts"),
      gipfelWort: (n) => (n === 1 ? "summit" : "summits"),
      punkteWort: (n) => (n === 1 ? "point" : "points"),
    },
    station: {
      titel: "Station — Longpath Blog",
      beschreibung: "OE5SOS's portable station and what it has done so far.",
      h1: "The station",
      bisher: "So far", beitraege: "Posts", gipfel: "Summits", punkte: "Points",
      hoechster: "Highest", weiteste: "Furthest",
      text: "Portable: five watts, an end-fed antenna on a trekking pole, three amp-hours of LiFePO₄. At home the other end runs on Longpath, the console I write for OpenHPSDR radios — whatever stands out on the mountain sooner or later turns into a change in the program.",
    },
    schlagwort: {
      kicker: "Tag",
      beitragWort: (n) => (n === 1 ? "post" : "posts"),
    },
    impressum: {
      titel: "Legal notice — Longpath",
      beschreibung: "Disclosure under Austrian law (§ 5 ECG).",
      kicker: "Disclosure under § 5 ECG (Austria)",
      h1: "Legal notice",
      adresse: ["Ralph Martin Fischer", "Altmühlweg 9", "4810 Gmunden", "Austria"],
      hinweis: "Callsign OE5SOS. Not a business, no commercial intent — this site accompanies a private amateur radio project.",
      softwareH2: "About the software",
      softwareText: "Longpath is free software under the GNU General Public License v3. It is a fork of NereusSDR (J. J. Boyd, KG4VCF), itself a C++20/Qt6 port of Thetis. The DSP is WDSP by Warren Pratt (NR0V). Full provenance is documented in the source tree under",
      haftungH2: "Liability",
      haftungText: "The software is provided without any warranty. Operating a transmitter is the sole responsibility of the licensed radio amateur.",
    },
    post: {
      aelter: "← Older",
      neuer: "Newer →",
      ausruestungH2: "What came along",
      signatur: "73 · OE5SOS",
      readoutTitel: "The activation in numbers",
      fReferenz: "Reference", fGipfel: "Summits", fPunkte: "Points",
      fQso: "QSOs", fAufstieg: "Ascent", fWeiteste: "Furthest", fBaender: "Bands",
    },
  },
  es: {
    nav: {
      subApp: "Consola de estación",
      subBlog: "Blog",
      appMenu: { signalkette: "Cadena de señal", funktionen: "Funciones", oberflaeche: "Interfaz", hardware: "Hardware", download: "Descarga" },
      blogMenu: { beitraege: "Entradas", archiv: "Archivo", station: "Estación" },
      switchToBlog: "Blog",
      switchToApp: "App",
    },
    footer: {
      ort: "Gmunden, Austria",
      portabel: "5 W portátil",
      appCol: { versionen: "Versiones", hardware: "Hardware", signalkette: "Cadena de señal" },
      blogCol: { beitraege: "Entradas", archiv: "Archivo", rss: "RSS" },
      zumBlog: "Blog",
      zurApp: "App",
      start: "Inicio",
      impressum: "Aviso legal",
    },
    postcard: { weiterlesen: "Seguir leyendo" },
    home: {
      titel: "Longpath — consola de estación y blog",
      beschreibung: "Longpath: una consola de estación OpenHPSDR nativa para macOS, Linux y Windows. Además, un blog desde las cumbres sobre el lago Traunsee.",
      appKicker: "OpenHPSDR · Protocolo 1 + 2",
      appLede: "La consola de estación. Nativa para macOS, Linux y Windows.",
      appGo: "Ir a la app",
      trainerKicker: "En el navegador, sin registro",
      trainerLede: "Practica concursos — pile-up, QSB y QRM, en SSB y CW.",
      trainerGo: "Empezar a practicar",
      blogKicker: "Summits on the Air · OE/OO",
      blogLede: "Fotos y notas desde las cumbres.",
      blogGo: "Ir al blog",
      cornerTop2: "JN67 · Gmunden",
      cornerBottom1: "Tres caminos, una estación",
      cornerBottomZuletzt: "Última",
    },
    blogIndex: {
      titel: "Blog — Longpath",
      beschreibung: "Fotos y notas desde las cumbres sobre el lago Traunsee. Summits on the Air, OE5SOS.",
      kicker: "Summits on the Air · OE/OO · desde 2023",
      lede: "Fotos y notas desde las cumbres sobre el lago Traunsee — lo que cinco vatios logran de verdad cuando uno mismo sube la estación a cuestas.",
      alle: "Todas",
      aktivierungenKicker: "Activaciones",
      aktivierungenTitel: "Cada cumbre, extraída directamente de las entradas.",
      aktivierungenLede: "Esta tabla no se mantiene a mano. Se genera al compilar a partir de los metadatos de cada entrada — quien escribe una entrada ya ha escrito la fila.",
      thDatum: "Fecha", thReferenz: "Referencia", thGipfel: "Cumbre", thHoehe: "Altura", thPunkte: "Pts",
    },
    archiv: {
      titel: "Archivo — Longpath Blog",
      beschreibung: "Todas las entradas en orden cronológico.",
      kicker: "Todas las entradas",
      lede: "Cronológico, sin fotos — para buscar, no para hojear.",
      beitraegeWort: (n) => (n === 1 ? "entrada" : "entradas"),
      gipfelWort: (n) => (n === 1 ? "cumbre" : "cumbres"),
      punkteWort: (n) => (n === 1 ? "punto" : "puntos"),
    },
    station: {
      titel: "Estación — Longpath Blog",
      beschreibung: "La estación portátil de OE5SOS y lo que ha hecho hasta ahora.",
      h1: "La estación",
      bisher: "Hasta ahora", beitraege: "Entradas", gipfel: "Cumbres", punkte: "Puntos",
      hoechster: "Más alta", weiteste: "Más lejos",
      text: "Portátil: cinco vatios, una antena alimentada por un extremo sobre un bastón de trekking, tres amperios-hora de LiFePO₄. En casa, la contraparte funciona con Longpath, la consola que escribo para equipos OpenHPSDR — lo que llama la atención en la montaña tarde o temprano se convierte en un cambio en el programa.",
    },
    schlagwort: {
      kicker: "Etiqueta",
      beitragWort: (n) => (n === 1 ? "entrada" : "entradas"),
    },
    impressum: {
      titel: "Aviso legal — Longpath",
      beschreibung: "Datos según el § 5 ECG (Austria).",
      kicker: "Datos según el § 5 ECG (Austria)",
      h1: "Aviso legal",
      adresse: ["Ralph Martin Fischer", "Altmühlweg 9", "4810 Gmunden", "Austria"],
      hinweis: "Indicativo OE5SOS. No es una empresa, sin ánimo de lucro — este sitio acompaña a un proyecto privado de radioafición.",
      softwareH2: "Sobre el software",
      softwareText: "Longpath es software libre bajo la GNU General Public License v3. Es un fork de NereusSDR (J. J. Boyd, KG4VCF), a su vez un port a C++20/Qt6 de Thetis. El DSP es WDSP de Warren Pratt (NR0V). La procedencia completa está documentada en el árbol de fuentes bajo",
      haftungH2: "Responsabilidad",
      haftungText: "El software se proporciona sin garantía alguna. El funcionamiento de un transmisor es responsabilidad exclusiva del radioaficionado licenciado.",
    },
    post: {
      aelter: "← Anterior",
      neuer: "Siguiente →",
      ausruestungH2: "Lo que llevé",
      signatur: "73 · OE5SOS",
      readoutTitel: "La activación en cifras",
      fReferenz: "Referencia", fGipfel: "Cumbres", fPunkte: "Puntos",
      fQso: "QSO", fAufstieg: "Ascenso", fWeiteste: "Más lejos", fBaender: "Bandas",
    },
  },
};
