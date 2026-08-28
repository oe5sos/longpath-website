/**
 * Die langen Texte der App-Seite (/longpath/), je Sprache. Getrennt
 * von src/i18n/ui.ts — siehe die Begründung dort. Felder, die
 * eingebettetes <em>/<strong>/<code> tragen, sind rohes HTML (mit
 * set:html gerendert); das ist eigener, geschriebener Text, kein
 * Nutzereingabe, darum unbedenklich.
 */
import type { Locale } from "../ui";

export interface LongpathKettenStufe {
  stufe: string;
  titel: string;
  text: string;
  marken: string[];
}

export interface LongpathWerkzeug {
  bereich: string;
  titel: string;
  text: string;
  marken: string[];
}

export interface LongpathHardware {
  protokoll: string;
  titel: string;
  text: string;
  stand: string;
}

export interface LongpathContent {
  meta: { titel: string; beschreibung: string };
  hero: {
    versionZeile: string;
    h1: string;
    subHtml: string;
    ctaDownload: string;
    ctaSignalkette: string;
    readout: { version: string; protokolle: string; bandbreite: string; dsp: string; pakete: string };
  };
  signalkette: { kicker: string; h2: string };
  kette: [LongpathKettenStufe, LongpathKettenStufe, LongpathKettenStufe, LongpathKettenStufe, LongpathKettenStufe];
  werkzeugeKopf: { kicker: string; h2: string; introHtml: string; imBau: string };
  werkzeuge: [
    LongpathWerkzeug, LongpathWerkzeug, LongpathWerkzeug, LongpathWerkzeug,
    LongpathWerkzeug, LongpathWerkzeug, LongpathWerkzeug,
  ];
  hardwareKopf: { kicker: string; h2: string };
  hardware: [LongpathHardware, LongpathHardware, LongpathHardware, LongpathHardware];
  vorfuehrung: { auge: string; titel: string; vorspann: string };
  sunsdr: {
    kicker: string; h2: string;
    p1Html: string; p2Html: string; p3Html: string;
    wegHinein: string;
    schritte: [string, string, string, string];
    verifiziert: string;
    grenzeHtml: string;
  };
  download: {
    kicker: string; h2: string; introHtml: string;
    kanalKopf: string;
    fuerDieses: string; nochNicht: string; alleAlternativ: string;
    herkunftHtml: string;
  };
}

export const longpathContent: Record<Locale, LongpathContent> = {
  de: {
    meta: {
      titel: "Longpath — Stationskonsole für OpenHPSDR",
      beschreibung: "Eine native C++20/Qt6-Konsole für ANAN, Hermes und Hermes Lite 2. Panadapter auf der Grafikkarte, WDSP, PureSignal, TCI. macOS, Linux, Windows.",
    },
    hero: {
      versionZeile: "Version {v} · GPLv3",
      h1: "Die ganze Station in einem nativen Fenster.",
      subHtml: "Longpath führt Thetis in <em>C++20 und Qt6</em> weiter — Panadapter auf der Grafikkarte, vollständige RX- und TX-Kette, PureSignal, TCI und Spots. Drei Plattformen, gemeinsam gebaut und gemeinsam signiert.",
      ctaDownload: "Stand der Pakete",
      ctaSignalkette: "Signalkette ansehen",
      readout: { version: "Version", protokolle: "Protokolle", bandbreite: "Bandbreite", dsp: "DSP", pakete: "Pakete" },
    },
    signalkette: { kicker: "Von der Antenne bis zum Kopfhörer", h2: "Ein Weg durch die Station — und Longpath besitzt ihn ganz." },
    kette: [
      { stufe: "HF ein", titel: "Erkennung, die das Gerät auch findet",
        text: "Ein einziger Zustandsautomat: Getrennt → Suchen → Verbinden → Verbunden. Die Unicast-Suche erreicht Geräte auch durch WireGuard-, ZeroTier- und Tailscale-Tunnel, nicht nur im eigenen Broadcast-Bereich. Sechzehn Modelle, nach Chipfamilie sortiert.",
        marken: ["Je MAC gespeichert", "Autoverbindung", "Board-Fähigkeiten"] },
      { stufe: "Spektrum", titel: "Panadapter auf der Grafikkarte",
        text: "QRhi über Metal, Vulkan und D3D12, mit der vollständigen Thetis-Display-Fläche dahinter — Spektrum, Wasserfall, Gitter und Skalen, je Band gespeichert über alle vierzehn Bänder. Clarity verfolgt den Rauschboden und hält das Bild lesbar, während sich das Band darunter bewegt. Neun Anordnungen für mehrere Bandbilder nebeneinander, jedes davon auch als eigenes Fenster auf einem zweiten Bildschirm.",
        marken: ["Clarity-Palette", "Rauschboden EWMA", "9 Anordnungen", "Zoom bleibt"] },
      { stufe: "Empfang", titel: "Zehn WDSP-Bereiche, alle erreichbar",
        text: "Erweiterte AGC, EMNR, SNB, APF, dreifache Rauschsperre, NB2, binaural, RIT und XIT — jeweils bis ins WDSP durchverdrahtet und je Empfänger, je Band gemerkt. Die automatische AGC-Schwelle reitet auf dem Rauschboden mit MOX-Sperre, und das Dämpfungsglied fängt die ADC-Übersteuerung ab, bevor man sie hört.",
        marken: ["EMNR / NR2", "Adaptive Dämpfung", "31 Instrumente"] },
      { stufe: "Senden", titel: "SSB hinaus, PureSignal an",
        text: "Die vollständige Sendekette — zehnbandiger EQ, Leveler, ALC, CFC, CPDR, CESSB und Phasendreher — mit 21 unverändert übernommenen Mikrofonprofilen. PureSignal linearisiert die ganze ANAN-Reihe samt Hermes und HL2, mit Zweiton-IMD über dem Spektrum, wo man das Einrasten tatsächlich zusehen kann.",
        marken: ["PureSignal", "Zweiton-IMD", "DEXP / VOX"] },
      { stufe: "Der Tisch", titel: "Alles, was bisher ein eigenes Programm war",
        text: "Ein TCI-v2.0-Server bedient WSJT-X, JTDX, N1MM und Log4OM ohne virtuelles Kabel. Sieben Spot-Quellen — Cluster, RBN, WSJT-X, DXLab, POTA, FreeDV Reporter, PSK Reporter — landen gestapelt auf dem Bandbild, anklickbar zum Abstimmen. RADE ist eine echte Betriebsart, sendend wie empfangend. Endstufe und Tuner von 4O3A und RF-Kit hängen mit dran.",
        marken: ["TCI v2.0", "Spot-Zentrale", "RADE", "VAX-Audio"] },
    ],
    werkzeugeKopf: {
      kicker: "Was am Tisch sonst noch steht",
      h2: "Alles, wofür sonst ein zweites Programm offen wäre.",
      introHtml: "Was hier mit <em>im Bau</em> gekennzeichnet ist, läuft bereits — es steckt aber noch nicht in Version {v}, sondern kommt mit der nächsten.",
      imBau: "im Bau",
    },
    werkzeuge: [
      { bereich: "Bandbild", titel: "Mehrere Bandbilder statt eines",
        text: "Neun Anordnungen zur Auswahl, vom einzelnen Bild bis zum Viererraster — und was das angeschlossene Gerät nicht tragen kann, wird gar nicht erst angeboten, mit einer Zeile darunter, warum. Jedes Bild lässt sich auf einen zweiten Bildschirm abkoppeln. Bis zu fünf Empfangszweige laufen nebeneinander, jeder mit eigener Kennung, Frequenz und Betriebsart im Bild; gesendet wird immer nur aus einem, dafür sorgt eine eigene Schranke.",
        marken: ["9 Anordnungen", "5 Zweige", "Abkoppelbar"] },
      { bereich: "Sendeton", titel: "Ein Kanalzug vor dem Funkgerät",
        text: "Gate, Entzerrer, De-Esser, Kompressor, Röhre, PUDU, Hall und Begrenzer in Signalreihenfolge — am Mikrofon, bevor WDSP es sieht. Abgeschaltet ist der Ton bitgenau der von vorher, der Vergleich also echt und nicht ungefähr. Dazu Voice Check: aufnehmen, der Zug läuft offline darüber, abhören — das Funkgerät taktet dabei nichts.",
        marken: ["8 Stufen", "A/B im Halten", "Voice Check"] },
      { bereich: "Logbuch", titel: "Verbindungen, die sich wiederfinden lassen",
        text: "Aus der schmalen Leiste wird ein voller Arbeitsplatz: suchen über Rufzeichen, Name, QTH, Land, Feld oder Bemerkung, filtern nach Band und Betriebsart, ADIF und Cabrillo hinein und hinaus. Daneben die Stammdaten von QRZ, die Peilung dorthin und eine Karte.",
        marken: ["ADIF", "Cabrillo", "QRZ", "Karte"] },
      { bereich: "Antenne", titel: "Der Rotor lernt deine Richtungen",
        text: "Vier Vorwahlen unter der Himmelsrichtungsreihe: Rechtsklick merkt sich die aktuelle Peilung, Linksklick fährt sie wieder an. Dazu Park und der lange Weg. Aus dem Spot-Menü im Bandbild heraus: „Rotor auf dieses Rufzeichen“.",
        marken: ["4 Vorwahlen", "Park", "Langer Weg"] },
      { bereich: "Diversity", titel: "Zwei Antennen, ein Richtdiagramm",
        text: "Phase und Verstärkung als Polardiagramm, das sich beim Drehen mitbewegt — man sieht die Keule, statt sie zu erraten. Acht Speicherplätze je Band, Klick holt, Rechtsklick legt ab.",
        marken: ["Radar", "8 Speicher je Band"] },
      { bereich: "Übersicht", titel: "Das ganze Band statt nur des Ausschnitts",
        text: "Auf Protokoll 2 kommt der volle Wandlerbereich als zweiter Datenstrom herein und läuft durch eine eigene FFT. Ein Klick in den Randbereich verschiebt den Empfänger dorthin, ein Klick in die Mitte stimmt nur ab.",
        marken: ["16 384 Punkte", "Klick verschiebt"] },
      { bereich: "Fremde Geräte", titel: "Auch was kein OpenHPSDR spricht",
        text: "Der SunSDR2 QRP über TCI und öffentliche KiwiSDR-Empfänger aus dem Verzeichnis. Beide hängen an derselben Sicherheitsschranke: ein Empfänger, der an einem echten Sender hängt, wird von dort niemals angefasst.",
        marken: ["SunSDR2 QRP", "KiwiSDR"] },
    ],
    hardwareKopf: { kicker: "Am Gerät geprüft", h2: "Auf echter Hardware freigefahren, nicht angenommen." },
    hardware: [
      { protokoll: "Protokoll 2", titel: "ANAN-G2 & G2 MkII",
        text: "Saturn-Boards auf Orion-MkII-Firmware. Empfang von 80 bis 10 m, sauberer Träger auf TUNE und MOX, PureSignal rastet ein.",
        stand: "RX + TX geprüft" },
      { protokoll: "Protokoll 1", titel: "Hermes Lite 2",
        text: "SSB-Sendebetrieb freigefahren seit der Dämpfungs- und Filterprüfung. I²C-Steuerung, N2ADR HERCULES, Dämpfungsglied −28…+32 dB.",
        stand: "RX + TX geprüft" },
      { protokoll: "Protokoll 1 + 2", titel: "ANAN-100D · 200D · 7000/8000DLE",
        text: "Die ganze Apache-Labs-Reihe, mit Vorwärtsleistungs-Kalibrierung je Board und der Übersteuerungssperre für hochverstärkende Endstufen.",
        stand: "RX + TX geprüft" },
      { protokoll: "Protokoll 1", titel: "Hermes · Angelia · Orion · Metis",
        text: "Die älteren OpenHPSDR-Boards werden erkannt, liefern I/Q und laufen durch WDSP; Dämpfungsglied und Vorverstärker direkt am Board.",
        stand: "RX geprüft" },
    ],
    vorfuehrung: {
      auge: "Aufgenommen am laufenden Gerät",
      titel: "Die Oberfläche in Bewegung.",
      vorspann: "Bildschirmfotos zeigen, wie es aussieht. Wie es sich anfühlt, zeigt erst das laufende Bild: der Wasserfall, die Rufzeichen, die über das Bandbild wandern, die Anzeigen, die mitgehen. Aufgenommen an einer ANAN-7000DLE auf 20 Metern.",
    },
    sunsdr: {
      kicker: "Ein Gerät, das gar kein OpenHPSDR spricht",
      h2: "SunSDR2 QRP — über TCI, nicht über einen Boardtreiber.",
      p1Html: "Der SunSDR2 QRP spricht kein OpenHPSDR. Expert Electronics veröffentlicht sein Protokoll nicht, es gibt also keinen Boardtreiber zu schreiben. Der einzige Weg hinein ist <strong>TCI</strong> — dasselbe Protokoll, das Longpath längst als <em>Server</em> spricht, damit WSJT-X und N1MM es bedienen können. Hier ist es andersherum: Longpath ist der Client, ExpertSDR2 der Server.",
      p2Html: "Das ändert die Rollenverteilung. Bei jedem anderen Gerät rechnet Longpath selbst — die Kiste ist ein ADC am Ende einer Leitung. ExpertSDR2 bringt seine eigene DSP-Kette mit und entscheidet, was das Gehäuse verlässt. Longpath kann dort nicht demodulieren, sondern nur darum bitten, das Ergebnis entgegennehmen, anzeigen und hörbar machen.",
      p3Html: "Ton, Bild und Steuerung laufen dabei durch <strong>dieselben Wege wie bei einem echten Empfänger</strong> — derselbe Mischer, eine echte FFT am reservierten Platz, derselbe Router auf dasselbe Bandbild. Kein zweiter, paralleler Pfad, der irgendwann auseinanderläuft.",
      wegHinein: "Der Weg hinein",
      schritte: [
        "Verbindung — ws://host:40001",
        "Ton — RX-Audio in den Mischer",
        "Bild — I/Q auf den Panadapter",
        "Steuerung — Frequenz und Art, beide Richtungen",
      ],
      verifiziert: "Am Gerät verifiziert",
      grenzeHtml: "<strong>Die Grenze, die dabei gilt.</strong> Ein Empfänger, der an einem echten Gerät hängt, wird über diesen Weg niemals gespeist oder gesteuert — in keine Richtung. SunSDR ist ein zweites, unabhängiges Funkgerät; könnte sein Zustand in einen Empfänger überlaufen, der zu einem Sender gehört, würde sich Hardware verstellen, von der der Betreiber annimmt, dass nur Longpath sie in der Hand hat. Wo Zurückhaltung und Sicherheit sich widersprechen, gewinnt die Sicherheit.",
    },
    download: {
      kicker: "Aktueller Stand",
      h2: "Noch nichts zum Laden — und das mit Absicht.",
      introHtml: "Die Pakete für alle drei Plattformen werden gemeinsam gebaut und gemeinsam signiert. Online gestellt werden sie erst, wenn sie <em>am Gerät geprüft</em> sind. Ein Paket, das niemand an echter Hardware freigefahren hat, gehört nicht auf eine Seite, auf der jemand einen Sender damit betreibt.",
      kanalKopf: "Kanal · in Prüfung",
      fuerDieses: "Für dieses Gerät",
      nochNicht: "Noch nicht freigegeben",
      alleAlternativ: "Alle Pakete",
      herkunftHtml: "<strong>Herkunft.</strong> Longpath ist ein Fork von NereusSDR (J. J. Boyd, KG4VCF), selbst eine C++20/Qt6-Portierung von Thetis — FlexRadio Systems, Doug Wigley (W5WC), Richard Samphire (MW0LGE) und die OpenHPSDR-Beitragenden. Das DSP ist WDSP von Warren Pratt (NR0V). Architektur und wesentlicher Code stammen aus AetherSDR (Jeremy, KK7GWY). Jeder Urhebervermerk steht unverändert im Quellbaum. GPLv3, wie es die Vorlagen verlangen.",
    },
  },
  en: {
    meta: {
      titel: "Longpath — station console for OpenHPSDR",
      beschreibung: "A native C++20/Qt6 console for ANAN, Hermes and Hermes Lite 2. Panadapter on the graphics card, WDSP, PureSignal, TCI. macOS, Linux, Windows.",
    },
    hero: {
      versionZeile: "Version {v} · GPLv3",
      h1: "The whole station, in one native window.",
      subHtml: "Longpath carries Thetis forward in <em>C++20 and Qt6</em> — panadapter on the graphics card, a full RX and TX chain, PureSignal, TCI and spots. Three platforms, built together and signed together.",
      ctaDownload: "Package status",
      ctaSignalkette: "See the signal chain",
      readout: { version: "Version", protokolle: "Protocols", bandbreite: "Bandwidth", dsp: "DSP", pakete: "Packages" },
    },
    signalkette: { kicker: "From the antenna to the headphones", h2: "One path through the station — and Longpath owns all of it." },
    kette: [
      { stufe: "RF on", titel: "Discovery that actually finds the radio",
        text: "One state machine: Disconnected → Scanning → Connecting → Connected. Unicast discovery reaches radios through WireGuard, ZeroTier and Tailscale tunnels too, not just on the local broadcast segment. Sixteen models, sorted by chip family.",
        marken: ["Saved per MAC", "Auto-connect", "Board capabilities"] },
      { stufe: "Spectrum", titel: "Panadapter on the graphics card",
        text: "QRhi over Metal, Vulkan and D3D12, with the full Thetis display surface behind it — spectrum, waterfall, grid and scales, saved per band across all fourteen bands. Clarity tracks the noise floor and keeps the picture readable while the band underneath moves. Nine layouts for multiple panadapters side by side, each one detachable into its own window on a second screen.",
        marken: ["Clarity palette", "Noise-floor EWMA", "9 layouts", "Zoom persists"] },
      { stufe: "Receive", titel: "Ten WDSP sections, all reachable",
        text: "Advanced AGC, EMNR, SNB, APF, triple noise blanker, NB2, binaural, RIT and XIT — each wired through to WDSP and remembered per receiver, per band. The automatic AGC threshold rides the noise floor with a MOX lockout, and the attenuator catches ADC overload before you hear it.",
        marken: ["EMNR / NR2", "Adaptive attenuation", "31 instruments"] },
      { stufe: "Transmit", titel: "SSB out, PureSignal on",
        text: "The full transmit chain — ten-band EQ, leveler, ALC, CFC, CPDR, CESSB and phase rotator — with 21 microphone profiles carried over unchanged. PureSignal linearises the whole ANAN line plus Hermes and HL2, with two-tone IMD shown right over the spectrum, where you can actually watch it lock in.",
        marken: ["PureSignal", "Two-tone IMD", "DEXP / VOX"] },
      { stufe: "The desk", titel: "Everything that used to be its own program",
        text: "A TCI v2.0 server serves WSJT-X, JTDX, N1MM and Log4OM without a virtual cable. Seven spot sources — cluster, RBN, WSJT-X, DXLab, POTA, FreeDV Reporter, PSK Reporter — land stacked on the panadapter, clickable to tune. RADE is a real mode, transmit as well as receive. Amplifier and tuner from 4O3A and RF-Kit are wired in too.",
        marken: ["TCI v2.0", "Spot hub", "RADE", "VAX audio"] },
    ],
    werkzeugeKopf: {
      kicker: "What else is on the desk",
      h2: "Everything that would otherwise need a second program open.",
      introHtml: "Anything marked <em>in progress</em> here already runs — it just isn't in version {v} yet, it ships with the next one.",
      imBau: "in progress",
    },
    werkzeuge: [
      { bereich: "Panadapter", titel: "Multiple panadapters instead of one",
        text: "Nine layouts to choose from, from a single view to a four-way grid — and whatever the connected radio can't carry simply isn't offered, with a line underneath saying why. Any view can be detached onto a second screen. Up to five receive branches run side by side, each with its own tag, frequency and mode shown in the view; only one ever transmits, and a dedicated lockout enforces that.",
        marken: ["9 layouts", "5 branches", "Detachable"] },
      { bereich: "Transmit audio", titel: "A channel strip in front of the radio",
        text: "Gate, equalizer, de-esser, compressor, tube, PUDU, reverb and limiter, in signal order — at the microphone, before WDSP ever sees it. Switched off, the audio is bit-for-bit what it was before, so the comparison is real, not approximate. Plus Voice Check: record, run the chain over it offline, listen back — the radio never keys during any of it.",
        marken: ["8 stages", "A/B while holding", "Voice Check"] },
      { bereich: "Logbook", titel: "Contacts you can actually find again",
        text: "The narrow strip becomes a full workspace: search by callsign, name, QTH, country, grid or remark, filter by band and mode, ADIF and Cabrillo in and out. Alongside it, QRZ master data, the bearing there, and a map.",
        marken: ["ADIF", "Cabrillo", "QRZ", "Map"] },
      { bereich: "Antenna", titel: "The rotor learns your directions",
        text: "Four presets under the compass row: right-click remembers the current bearing, left-click drives back to it. Plus park and long path. From the spot menu on the panadapter: \"Turn rotor to this callsign.\"",
        marken: ["4 presets", "Park", "Long path"] },
      { bereich: "Diversity", titel: "Two antennas, one radiation pattern",
        text: "Phase and gain as a polar plot that moves as you turn it — you see the lobe instead of guessing it. Eight memory slots per band, click to recall, right-click to store.",
        marken: ["Radar", "8 slots per band"] },
      { bereich: "Overview", titel: "The whole band, not just the slice",
        text: "On Protocol 2 the full converter range comes in as a second data stream and runs through its own FFT. A click near the edge moves the receiver there; a click in the middle only tunes.",
        marken: ["16,384 points", "Click to move"] },
      { bereich: "Foreign radios", titel: "Even what doesn't speak OpenHPSDR",
        text: "The SunSDR2 QRP over TCI, and public KiwiSDR receivers from the directory. Both sit behind the same safety lockout: a receiver attached to a real transmitter is never touched from there.",
        marken: ["SunSDR2 QRP", "KiwiSDR"] },
    ],
    hardwareKopf: { kicker: "Verified on hardware", h2: "Cleared on real hardware, not assumed." },
    hardware: [
      { protokoll: "Protocol 2", titel: "ANAN-G2 & G2 MkII",
        text: "Saturn boards on Orion MkII firmware. Receive from 80 to 10 m, a clean carrier on TUNE and MOX, PureSignal locks in.",
        stand: "RX + TX verified" },
      { protokoll: "Protocol 1", titel: "Hermes Lite 2",
        text: "SSB transmit cleared for use since the attenuator and filter audit. I²C control, N2ADR HERCULES, attenuator −28…+32 dB.",
        stand: "RX + TX verified" },
      { protokoll: "Protocol 1 + 2", titel: "ANAN-100D · 200D · 7000/8000DLE",
        text: "The whole Apache Labs line, with forward-power calibration per board and the overdrive lockout for high-gain amplifiers.",
        stand: "RX + TX verified" },
      { protokoll: "Protocol 1", titel: "Hermes · Angelia · Orion · Metis",
        text: "The older OpenHPSDR boards are recognised, deliver I/Q and run through WDSP; attenuator and preamp sit directly on the board.",
        stand: "RX verified" },
    ],
    vorfuehrung: {
      auge: "Recorded on a live radio",
      titel: "The interface in motion.",
      vorspann: "Screenshots show what it looks like. What it feels like only shows in motion: the waterfall, the callsigns drifting across the panadapter, the readouts moving along. Recorded on an ANAN-7000DLE on 20 metres.",
    },
    sunsdr: {
      kicker: "A radio that doesn't speak OpenHPSDR at all",
      h2: "SunSDR2 QRP — over TCI, not a board driver.",
      p1Html: "The SunSDR2 QRP doesn't speak OpenHPSDR. Expert Electronics doesn't publish its protocol, so there's no board driver to write. The only way in is <strong>TCI</strong> — the same protocol Longpath already speaks as a <em>server</em>, so WSJT-X and N1MM can drive it. Here it's the other way round: Longpath is the client, ExpertSDR2 the server.",
      p2Html: "That flips the roles. With every other radio, Longpath does the computing itself — the box is just an ADC at the end of a cable. ExpertSDR2 brings its own DSP chain and decides what leaves the case. Longpath can't demodulate there; it can only ask, take the result, display it and make it audible.",
      p3Html: "Audio, display and control all run through <strong>the same paths as a real receiver</strong> — the same mixer, a genuine FFT in its reserved slot, the same router onto the same panadapter. No second, parallel path that eventually drifts apart.",
      wegHinein: "The way in",
      schritte: [
        "Connection — ws://host:40001",
        "Audio — RX audio into the mixer",
        "Display — I/Q onto the panadapter",
        "Control — frequency and mode, both directions",
      ],
      verifiziert: "Verified on hardware",
      grenzeHtml: "<strong>The boundary that applies here.</strong> A receiver attached to a real radio is never fed or controlled through this path — in either direction. SunSDR is a second, independent radio; if its state could leak into a receiver that belongs to a transmitter, hardware would shift under an operator who assumes only Longpath is holding it. Where caution and safety disagree, safety wins.",
    },
    download: {
      kicker: "Current status",
      h2: "Nothing to download yet — on purpose.",
      introHtml: "The packages for all three platforms are built together and signed together. They go online only once they're <em>verified on hardware</em>. A package nobody has cleared on real hardware doesn't belong on a page where someone might run a transmitter with it.",
      kanalKopf: "Channel · under review",
      fuerDieses: "For this device",
      nochNicht: "Not released yet",
      alleAlternativ: "All packages",
      herkunftHtml: "<strong>Provenance.</strong> Longpath is a fork of NereusSDR (J. J. Boyd, KG4VCF), itself a C++20/Qt6 port of Thetis — FlexRadio Systems, Doug Wigley (W5WC), Richard Samphire (MW0LGE) and the OpenHPSDR contributors. The DSP is WDSP by Warren Pratt (NR0V). Architecture and much of the code come from AetherSDR (Jeremy, KK7GWY). Every attribution notice stands unchanged in the source tree. GPLv3, as the upstream licenses require.",
    },
  },
  es: {
    meta: {
      titel: "Longpath — consola de estación para OpenHPSDR",
      beschreibung: "Una consola nativa en C++20/Qt6 para ANAN, Hermes y Hermes Lite 2. Panadaptador en la tarjeta gráfica, WDSP, PureSignal, TCI. macOS, Linux, Windows.",
    },
    hero: {
      versionZeile: "Versión {v} · GPLv3",
      h1: "Toda la estación, en una única ventana nativa.",
      subHtml: "Longpath continúa Thetis en <em>C++20 y Qt6</em> — panadaptador en la tarjeta gráfica, cadena completa de RX y TX, PureSignal, TCI y spots. Tres plataformas, construidas juntas y firmadas juntas.",
      ctaDownload: "Estado de los paquetes",
      ctaSignalkette: "Ver la cadena de señal",
      readout: { version: "Versión", protokolle: "Protocolos", bandbreite: "Ancho de banda", dsp: "DSP", pakete: "Paquetes" },
    },
    signalkette: { kicker: "De la antena a los auriculares", h2: "Un camino a través de la estación — y Longpath lo posee entero." },
    kette: [
      { stufe: "RF encendido", titel: "Detección que de verdad encuentra el equipo",
        text: "Una única máquina de estados: Desconectado → Buscando → Conectando → Conectado. La búsqueda unicast alcanza equipos también a través de túneles WireGuard, ZeroTier y Tailscale, no solo en el propio segmento de difusión. Dieciséis modelos, ordenados por familia de chip.",
        marken: ["Guardado por MAC", "Autoconexión", "Capacidades de la placa"] },
      { stufe: "Espectro", titel: "Panadaptador en la tarjeta gráfica",
        text: "QRhi sobre Metal, Vulkan y D3D12, con toda la superficie de visualización de Thetis detrás — espectro, cascada, rejilla y escalas, guardadas por banda en las catorce bandas. Clarity sigue el suelo de ruido y mantiene la imagen legible mientras la banda debajo se mueve. Nueve disposiciones para varios panadaptadores uno junto a otro, cada uno desacoplable en su propia ventana en una segunda pantalla.",
        marken: ["Paleta Clarity", "EWMA del suelo de ruido", "9 disposiciones", "El zoom se mantiene"] },
      { stufe: "Recepción", titel: "Diez secciones de WDSP, todas accesibles",
        text: "AGC avanzado, EMNR, SNB, APF, silenciador de ruido triple, NB2, binaural, RIT y XIT — cada uno conectado hasta WDSP y recordado por receptor y por banda. El umbral automático del AGC sigue el suelo de ruido con bloqueo por MOX, y el atenuador atrapa la sobrecarga del ADC antes de que se oiga.",
        marken: ["EMNR / NR2", "Atenuación adaptativa", "31 instrumentos"] },
      { stufe: "Transmisión", titel: "SSB al aire, PureSignal activo",
        text: "La cadena de transmisión completa — ecualizador de diez bandas, leveler, ALC, CFC, CPDR, CESSB y rotador de fase — con 21 perfiles de micrófono trasladados sin cambios. PureSignal linealiza toda la serie ANAN además de Hermes y HL2, con IMD de dos tonos mostrado justo sobre el espectro, donde de verdad se puede ver cómo engancha.",
        marken: ["PureSignal", "IMD de dos tonos", "DEXP / VOX"] },
      { stufe: "La mesa", titel: "Todo lo que antes era un programa aparte",
        text: "Un servidor TCI v2.0 sirve a WSJT-X, JTDX, N1MM y Log4OM sin cable virtual. Siete fuentes de spots — cluster, RBN, WSJT-X, DXLab, POTA, FreeDV Reporter, PSK Reporter — llegan apiladas sobre el panadaptador, con clic para sintonizar. RADE es un modo real, tanto en transmisión como en recepción. El amplificador y el sintonizador de 4O3A y RF-Kit también están conectados.",
        marken: ["TCI v2.0", "Centro de spots", "RADE", "Audio VAX"] },
    ],
    werkzeugeKopf: {
      kicker: "Qué más hay en la mesa",
      h2: "Todo lo que de otro modo necesitaría un segundo programa abierto.",
      introHtml: "Lo marcado aquí como <em>en construcción</em> ya funciona — solo que todavía no está en la versión {v}, llega con la siguiente.",
      imBau: "en construcción",
    },
    werkzeuge: [
      { bereich: "Panadaptador", titel: "Varios panadaptadores en vez de uno",
        text: "Nueve disposiciones para elegir, desde una sola vista hasta una rejilla de cuatro — y lo que el equipo conectado no puede soportar simplemente no se ofrece, con una línea debajo que explica por qué. Cualquier vista se puede desacoplar a una segunda pantalla. Hasta cinco ramas de recepción funcionan en paralelo, cada una con su propia etiqueta, frecuencia y modo en la vista; solo una transmite a la vez, y un bloqueo dedicado lo garantiza.",
        marken: ["9 disposiciones", "5 ramas", "Desacoplable"] },
      { bereich: "Audio de transmisión", titel: "Una cadena de canal delante del equipo",
        text: "Gate, ecualizador, de-esser, compresor, válvula, PUDU, reverberación y limitador, en orden de señal — en el micrófono, antes de que WDSP lo vea. Apagada, la señal es exactamente la de antes, bit a bit, así que la comparación es real, no aproximada. Además Voice Check: grabar, pasar la cadena por encima fuera de línea, escuchar — el equipo no transmite en ningún momento de esto.",
        marken: ["8 etapas", "A/B mantenido", "Voice Check"] },
      { bereich: "Cuaderno de guardia", titel: "Contactos que de verdad se vuelven a encontrar",
        text: "La franja estrecha se convierte en un puesto de trabajo completo: buscar por indicativo, nombre, QTH, país, locator o comentario, filtrar por banda y modo, ADIF y Cabrillo de entrada y salida. Junto a eso, los datos de QRZ, el rumbo hasta allí y un mapa.",
        marken: ["ADIF", "Cabrillo", "QRZ", "Mapa"] },
      { bereich: "Antena", titel: "El rotor aprende tus direcciones",
        text: "Cuatro preajustes bajo la fila de rumbos: clic derecho memoriza el rumbo actual, clic izquierdo lo apunta de nuevo. Además parque y camino largo. Desde el menú de spots en el panadaptador: «Girar rotor a este indicativo».",
        marken: ["4 preajustes", "Parque", "Camino largo"] },
      { bereich: "Diversity", titel: "Dos antenas, un diagrama de radiación",
        text: "Fase y ganancia como un diagrama polar que se mueve al girar — se ve el lóbulo en lugar de adivinarlo. Ocho posiciones de memoria por banda, clic para recuperar, clic derecho para guardar.",
        marken: ["Radar", "8 posiciones por banda"] },
      { bereich: "Vista general", titel: "Toda la banda, no solo el recorte",
        text: "En el Protocolo 2, todo el rango del convertidor entra como un segundo flujo de datos y pasa por su propia FFT. Un clic cerca del borde mueve el receptor hasta allí; un clic en el centro solo sintoniza.",
        marken: ["16 384 puntos", "Clic para mover"] },
      { bereich: "Equipos ajenos", titel: "Incluso lo que no habla OpenHPSDR",
        text: "El SunSDR2 QRP a través de TCI, y receptores KiwiSDR públicos del directorio. Ambos están detrás del mismo bloqueo de seguridad: un receptor unido a un transmisor real nunca se toca desde ahí.",
        marken: ["SunSDR2 QRP", "KiwiSDR"] },
    ],
    hardwareKopf: { kicker: "Verificado en el equipo", h2: "Probado en hardware real, no supuesto." },
    hardware: [
      { protokoll: "Protocolo 2", titel: "ANAN-G2 & G2 MkII",
        text: "Placas Saturn con firmware Orion MkII. Recepción de 80 a 10 m, portadora limpia en TUNE y MOX, PureSignal engancha.",
        stand: "RX + TX verificado" },
      { protokoll: "Protocolo 1", titel: "Hermes Lite 2",
        text: "Transmisión SSB habilitada desde la auditoría del atenuador y los filtros. Control I²C, N2ADR HERCULES, atenuador −28…+32 dB.",
        stand: "RX + TX verificado" },
      { protokoll: "Protocolo 1 + 2", titel: "ANAN-100D · 200D · 7000/8000DLE",
        text: "Toda la línea de Apache Labs, con calibración de potencia directa por placa y el bloqueo de sobreexcitación para amplificadores de alta ganancia.",
        stand: "RX + TX verificado" },
      { protokoll: "Protocolo 1", titel: "Hermes · Angelia · Orion · Metis",
        text: "Las placas OpenHPSDR más antiguas se reconocen, entregan I/Q y pasan por WDSP; atenuador y preamplificador están directamente en la placa.",
        stand: "RX verificado" },
    ],
    vorfuehrung: {
      auge: "Grabado con el equipo en funcionamiento",
      titel: "La interfaz en movimiento.",
      vorspann: "Las capturas de pantalla muestran su aspecto. Cómo se siente solo lo muestra la imagen en movimiento: la cascada, los indicativos que cruzan el panadaptador, las lecturas que acompañan. Grabado en una ANAN-7000DLE en 20 metros.",
    },
    sunsdr: {
      kicker: "Un equipo que no habla OpenHPSDR en absoluto",
      h2: "SunSDR2 QRP — por TCI, no por un controlador de placa.",
      p1Html: "El SunSDR2 QRP no habla OpenHPSDR. Expert Electronics no publica su protocolo, así que no hay controlador de placa que escribir. El único camino de entrada es <strong>TCI</strong> — el mismo protocolo que Longpath ya habla como <em>servidor</em>, para que WSJT-X y N1MM puedan manejarlo. Aquí es al revés: Longpath es el cliente, ExpertSDR2 el servidor.",
      p2Html: "Eso cambia el reparto de papeles. Con cualquier otro equipo, Longpath calcula por sí mismo — la caja es solo un ADC al final de un cable. ExpertSDR2 trae su propia cadena de DSP y decide qué sale de la carcasa. Ahí Longpath no puede demodular; solo puede pedirlo, recibir el resultado, mostrarlo y hacerlo audible.",
      p3Html: "El audio, la imagen y el control pasan por <strong>los mismos caminos que un receptor real</strong> — el mismo mezclador, una FFT genuina en su lugar reservado, el mismo enrutador hacia el mismo panadaptador. Ningún segundo camino paralelo que termine divergiendo.",
      wegHinein: "El camino de entrada",
      schritte: [
        "Conexión — ws://host:40001",
        "Audio — audio de RX al mezclador",
        "Imagen — I/Q al panadaptador",
        "Control — frecuencia y modo, en ambas direcciones",
      ],
      verifiziert: "Verificado en el equipo",
      grenzeHtml: "<strong>El límite que rige aquí.</strong> Un receptor unido a un equipo real nunca se alimenta ni se controla por este camino — en ninguna dirección. SunSDR es un segundo equipo, independiente; si su estado pudiera filtrarse a un receptor que pertenece a un transmisor, el hardware se movería bajo un operador que asume que solo Longpath lo controla. Donde la cautela y la seguridad se contradicen, gana la seguridad.",
    },
    download: {
      kicker: "Estado actual",
      h2: "Todavía nada para descargar — y es a propósito.",
      introHtml: "Los paquetes para las tres plataformas se construyen juntos y se firman juntos. Se publican solo cuando están <em>verificados en el equipo</em>. Un paquete que nadie ha probado en hardware real no pertenece a una página desde la que alguien podría operar un transmisor con él.",
      kanalKopf: "Canal · en revisión",
      fuerDieses: "Para este equipo",
      nochNicht: "Aún no publicado",
      alleAlternativ: "Todos los paquetes",
      herkunftHtml: "<strong>Procedencia.</strong> Longpath es un fork de NereusSDR (J. J. Boyd, KG4VCF), a su vez un port a C++20/Qt6 de Thetis — FlexRadio Systems, Doug Wigley (W5WC), Richard Samphire (MW0LGE) y los colaboradores de OpenHPSDR. El DSP es WDSP de Warren Pratt (NR0V). La arquitectura y buena parte del código proceden de AetherSDR (Jeremy, KK7GWY). Cada aviso de autoría permanece sin cambios en el árbol de fuentes. GPLv3, como exigen las licencias de origen.",
    },
  },
};
