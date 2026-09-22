---
titel: "Was der Gaisberg sieht"
datum: 2026-09-22
vorspann: "Der Gaisberg ist der Berg, auf den man einfach hinauffährt: 1 272 Meter, zehn Kilometer von Salzburg, ein Parkplatz am Straßenende, und der Blick geht direkt nach Bayern. Ich habe ihn gerechnet wie die anderen — 360 Peilungen, das Laserscan-Modell für die letzten zweihundert Meter, die Contestlogs darübergelegt. Die Aussicht ist gut. Der Platz ist es nicht."
aufmacher: "../../assets/karten/gaisberg-horizont-aufmacher.png"
aufmacherAlt: "Dunkle Karte 700 Kilometer um den Gaisberg-Gipfelparkplatz mit Staatsgrenzen: der Randbogen ist von 273° bis 359° grün, nach Osten und Süden bernstein; dazu die Zahlen 273° bis 359° frei nach Deutschland und 1° bis 39° hinter der Gipfelkuppe mit dem Sendeturm"
aufmacherRef: "1 272 m · JN67NT"
aufmacherFormat: "breit"
schlagworte: ["2026", "Salzburg", "Contest", "Standort"]
---

Der Gaisberg ist der bequemste Berg der Gegend. Eine Straße führt bis ganz hinauf, oben ist ein Parkplatz, daneben eine Wiese, und wer aus Salzburg kommt, ist in zwanzig Minuten da. Von den Salzburger Autoplätzen war er schon bei der [ersten Runde](/blog/feuerkogel-horizont/) der einzige, der Richtung Deutschland überhaupt in Frage kam. Also habe ich ihn ganz gerechnet.

Das Ergebnis vorweg: Der Horizont nach Deutschland ist so frei, wie man es sich wünscht. Und trotzdem wird es nichts.

## Wie

Dieselbe Methode wie bei den Standorten davor: SRTM-Geländemodell, ein Strahl je Grad, 4/3-Erde, 700 Kilometer weit, zehn Meter Antenne. Dazu — und das ist auf einem Gipfelplateau der entscheidende Teil — das **Oberflächenmodell des BEV aus dem Laserscan**, ein Meter Raster, für alles im Umkreis von dreihundert Metern: Gebäude, Sendetürme, Bäume, die Kuppe selbst. Fernfeld und Nahfeld werden zusammengelegt, das höhere von beiden gewinnt.

Darübergelegt sind die Contestlogs: 2 262 Stationen aus den IARU-Contesten 2024 und 2025 und dem Marconi 2025, die innerhalb von 700 Kilometern liegen, jede mit Peilung und Entfernung. Dazu die DARC-Liste der deutschen UKW-Contestteilnehmer — 1 327 davon liegen im Umkreis von 700 Kilometern.

Gerechnet habe ich drei Plätze auf dem Plateau: den **Parkplatz am Straßenende** (47,80336 N / 13,11151 O, Laserscan-Boden 1 274 m, JN67NT), die Fläche **beim Relais** hundertvierzig Meter nordwestlich und die **Gipfelwiese** nördlich vom Sender.

![Polardiagramm des Radiohorizonts vom Gaisberg-Gipfelparkplatz: von West über Nord bis kurz vor Nord frei, nach Nordosten und Osten die Gipfelkuppe, nach Süden die Alpen](../../assets/karten/gaisberg-horizont-rundum-karte.png)

## Der Parkplatz

Von 273° bis 359° ist alles frei, −0,4 bis −0,8 Grad. München, Stuttgart, Frankfurt, Köln, Hannover, Hamburg — nichts im Weg bis zur Erdkrümmung. Das ist der beste Deutschland-Sektor, den ein Platz mit Straße in dieser Gegend zu bieten hat.

Dann kommt die Kuppe. Der Gipfel mit dem ORF-Sendeturm steht **zweihundert Meter nördlich** vom Parkplatz und deckt bei zehn Metern Antennenhöhe **2° bis 43°** zu, mit bis zu +5,2 Grad. Dahinter liegen Berlin (+1,4°), Dresden (+3,4°), Prag (+2,8°), Breslau (+1,4°), Passau (+2,5°) und Nürnberg (+3,6°) — alles, was nordöstlich der Donau liegt, schaut man von unten an einen Hang. Ein zweites, kleineres Loch macht ein Haus mit Bäumen, 15 bis 18 Meter hoch, neunzig Meter nordwestlich: **313° bis 322°**, +4,5 Grad.

![Lageplan des Gaisberg-Gipfelplateaus aus dem Laserscan-Oberflächenmodell: vom Parkplatz aus zwei bernsteinfarbene Keile, einer über die Gipfelkuppe mit dem Sendeturm, einer über Haus und Bäume im Nordwesten; dazu die Quadrichtungen 300° und 340°, die Yagi auf 60° und das Relais OE2XZR in 139 Metern](../../assets/karten/gaisberg-lageplan.png)

Höhe hilft, aber nur langsam. Was am Parkplatz frei bleibt:

| Antennenhöhe | frei von 2 262 | davon Deutschland | DARC-Liste |
|---|---|---|---|
| 8 m | 711 | 347 | 634 von 1 327 |
| 10 m | 803 | 414 | 758 |
| 11,8 m | 942 | 508 | 941 |
| 13,5 m | 1 016 | 568 | 1 050 |

Dreizehneinhalb Meter Mast, nur um über eine Kuppe zu schauen, die zweihundert Meter weg ist — und Nürnberg liegt immer noch +1,4 Grad darüber.

## Hundertvierzig Meter weiter

Geht man vom Parkplatz nach Nordwesten, zur Fläche **beim Relais** (47,80393 N / 13,10985 O, 1 277 m), dreht sich das Bild: Die Kuppe steht dann im Rücken, nicht im Weg. Frei sind 1 200 Stationen bei zehn Metern, 1 253 bei 11,8, 1 295 bei 13,5 — und von der DARC-Liste sind **1 325 von 1 327 frei, in jeder Höhe**. Zu ist dafür der Sektor 44° bis 68°, also Polen und Tschechien, die von dort hinter der Kuppe liegen.

Noch besser ist die **Gipfelwiese nördlich vom Sender** (Boden 1 284 m): **1 513 freie Stationen, unabhängig von der Masthöhe** — außer dem Süden, wo die Alpen stehen, ist dort alles offen. Der Preis sind zweihundertfünfzig Meter Tragen und sechzig Meter Abstand zum 100-kW-Turm.

![Zwei Balkendiagramme: freie Stationen je zehn Grad für den Parkplatz und für die Gipfelwiese, aufgeteilt nach Ländern; beim Parkplatz fehlt der Sektor 0° bis 40°, auf der Wiese ist er voll](../../assets/karten/gaisberg-richtungen.png)

Für die geplante Anlage — ein Yagi-Stack und ein Quad-Stack, jeder auf drei Rotorstellungen, je 500 Watt — heißt das am Parkplatz: **827 erreichbare Stationen, 506 davon in Deutschland**, mit dem Yagi-Stack auf 312°, 342° und 60° und dem Quad-Stack auf 88°, 282° und 284°. Rechnet man nur die deutschen Stationen und nur die beiden Quads, bringen 300° und 340° zusammen 852 von 1 327 — von der Gipfelwiese aus wären es mit denselben Richtungen 1 319.

## Bis 700 Kilometer

<figure class="zoomkarte" data-basis="/karten/horizont/gaisberg-horizont-" data-min="200" data-max="700" data-schritt="100" data-start="200">
  <img src="/karten/horizont/gaisberg-horizont-200km.webp" width="1800" height="1200" alt="Karte um den Gaisberg mit Staatsgrenzen, zwischen 200 und 700 Kilometer Radius: die Striche nach Westen und Norden laufen weit hinaus, nach Nordosten enden sie an der Gipfelkuppe, nach Süden an den Alpen" loading="lazy" decoding="async">
  <figcaption>
    <button type="button" data-zoom="-1" aria-label="Radius um 100 km verkleinern">−</button>
    <span data-radius>Radius 200 km</span>
    <button type="button" data-zoom="+1" aria-label="Radius um 100 km vergrößern">+</button>
  </figcaption>
</figure>

<style>
.zoomkarte img { border: 1px solid var(--border-fine); border-radius: var(--radius); background: var(--panel); max-height: none; }
.zoomkarte figcaption { display: flex; align-items: center; justify-content: center; gap: 1.1rem; margin-top: .8rem; font-size: 11px; color: var(--t3); font-variant-numeric: tabular-nums; }
.zoomkarte figcaption span { min-width: 9ch; text-align: center; }
.zoomkarte button { width: 2.5rem; height: 2.5rem; border: 1px solid var(--border); border-radius: var(--radius-s); background: var(--btn); color: var(--t1); font: 20px/1 var(--ff-body); cursor: pointer; transition: border-color var(--ease), background var(--ease); }
.zoomkarte button:hover { background: var(--btn-hover); border-color: var(--sel-border); }
.zoomkarte button:disabled { opacity: .35; cursor: default; border-color: var(--border); background: var(--btn); }
</style>

<script>
(function () {
  document.querySelectorAll("figure.zoomkarte").forEach(function (fig) {
    if (fig.dataset.bereit) return; fig.dataset.bereit = "1";
    var img = fig.querySelector("img"), label = fig.querySelector("[data-radius]");
    var minus = fig.querySelector('[data-zoom="-1"]'), plus = fig.querySelector('[data-zoom="+1"]');
    var min = +fig.dataset.min, max = +fig.dataset.max, step = +fig.dataset.schritt, r = +fig.dataset.start, basis = fig.dataset.basis;
    var wort = label.textContent.replace(/\s*\d+\s*km\s*$/, "");
    function zeige() {
      img.src = basis + r + "km.webp";
      label.textContent = (wort ? wort + " " : "") + r + " km";
      minus.disabled = r <= min; plus.disabled = r >= max;
      [r - step, r + step].forEach(function (k) { if (k >= min && k <= max) { var v = new Image(); v.src = basis + k + "km.webp"; } });
    }
    minus.addEventListener("click", function () { if (r > min) { r -= step; zeige(); } });
    plus.addEventListener("click", function () { if (r < max) { r += step; zeige(); } });
    zeige();
  });
})();
</script>

Beide Karten als PDF: [Zoom 180 km](/karten/gaisberg-horizont-zoom-180km.pdf) und [Übersicht 800 km](/karten/gaisberg-horizont-uebersicht-800km.pdf). Nach Süden ragen der Watzmann (31 km, 208°, +2,6°), der Großglockner (87 km, +1,4°) und die Hochalmspitze über die Waagrechte — nach Norden und Westen bis achthundert Kilometer nichts.

## Warum es trotzdem nichts wird

Der Gaisberg ist kein leerer Berg. Auf dem Gipfel steht seit Jahrzehnten ein Senderpark, und in dessen Mitte fährt man mit einer Contestanlage nicht einfach hinein:

- Das **2-m-Relais OE2XZR auf 145,6875 MHz** steht 139 Meter vom Parkplatz — und zwar genau bei 297°, also mitten in der Richtung, in die man nach Deutschland strahlen will. Dazu das **APRS-Digi auf 144,800 MHz**. Beides liegt im selben Band, in dem man zwei Tage lang mit Kilowatt arbeiten möchte. Umgekehrt gilt dasselbe: Was aus einer Endstufe in 139 Metern Entfernung in einen Relaiseingang läuft, macht das Relais für die Dauer des Contests unbrauchbar.
- Zweihundertzehn Meter weiter steht der **ORF-Sender**: vier UKW-Programme mit je 100 kW und DAB+. Ein Empfänger, der auf 145 MHz hören soll, steht dort in einem Feld, gegen das jede Vorselektion ein Kompromiss ist.
- Der Platz ist außerdem **belegt**: In den IARU-Logs 2024 und 2025 taucht **OE2M** mit JN67NT und 1 270 Metern auf — der AFV Salzburg funkt von dort. Zwei Stationen auf 145 MHz auf demselben Plateau sind keine gute Idee.
- Und die Gipfelwiese, die rechnerisch am besten wäre, ist **Gleitschirm-Startplatz**.

Das ist die eigentliche Antwort auf die Frage „Gaisberg?": nicht die Geografie, sondern die Nachbarschaft.

## Fünf Standorte nebeneinander

Weil die Frage immer wieder auftaucht, hier die fünf gerechneten Plätze mit **derselben Anlage**, die auch am Stuhleck geplant ist: ein Stack aus zwei 12-Element-Yagis (17,8 dBi, 34° Öffnung) und ein Stack aus zwei Vierfachquads (14,5 dBi, 69°), jeder auf drei Rotorstellungen, und 1 000 Watt auf beide zugleich — also **500 Watt je Stack**. Erreichbar heißt hier nicht nur „Horizont frei", sondern auch: genug Gewinn für die Entfernung — 6 dBi bis 300 Kilometer, danach 3 dB je weitere hundert, bezogen auf ein Kilowatt. Der SRTM-Horizont und die Contestlogs sind für alle fünf dieselben. In Klammern steht beim Stuhleck, was übrig bleibt, wenn der **Tabu-Sektor Richtung Seilbahn** (237°–248° und 180° gedreht, jeweils mit der halben Öffnung der Antenne als Sicherheitsabstand) eingehalten wird. Nahfeld und Stationsgröße bleiben außen vor — die Zahlen sind untereinander vergleichbar, aber nicht mit denen aus dem [Stuhleck-Beitrag](/blog/stuhleck-horizont/), der feiner rechnet.

![Vergleich von fünf Standorten mit derselben Anlage: waagrechte Balken der erreichbaren Stationen nach Ländern für Stuhleck 1 068, Gaisberg 827, Feuerkogelhaus 945, Grünberg 1 015 und Traisner Hütte 1 015, daneben je eine Sektorrose mit den freien Richtungen und der Grundstellung des Yagi-Stacks; beim Stuhleck eine rote Zeile mit den Zahlen unter dem Tabu-Sektor](../../assets/karten/standorte-vergleich.png)

| Standort | erreichbar ≤ 700 km | Deutschland | ≤ 500 km | Yagi-Stack | Quad-Stack | Zugang |
|---|---|---|---|---|---|---|
| **Stuhleck** · 1 779 m | **1 068** (1 032) | 141 (145) | **946 (925)** | 306° · 34° · 230° | 22° · 66° · 156° | Auto bis oben |
| **Grünberg** · 989 m | 1 015 | 473 | 861 | 346° · 292° · 42° | 18° · 62° · 290° | Seilbahn, Gasthaus |
| **Traisner Hütte** · 1 304 m | 1 015 | 305 | 902 | 322° · 20° · 74° | 10° · 114° · 276° | nur zu Fuß |
| **Feuerkogelhaus** · 1 591 m | 945 | 407 | 772 | 346° · 308° · 40° | 8° · 70° · 88° | Seilbahn, Gasthaus |
| **Gaisberg, Parkplatz** · 1 272 m | 827 | **506** | 652 | 312° · 342° · 60° | 88° · 282° · 284° | Auto bis oben |

Fünf Plätze, fünf Charaktere — und mit der Leistung verschiebt sich das Bild noch einmal. Fünfhundert Watt je Stack sind drei Dezibel weniger als ein Kilowatt auf einer Antenne; die weiten Verbindungen fallen als Erste heraus, der Nahbereich bleibt.

Das **Stuhleck** erreicht insgesamt die meisten und im Nahbereich ebenfalls: 946 Stationen unter 500 Kilometern. Es sitzt mitten in der dichtesten Ecke Europas, mit Ungarn, Kroatien, Slowenien, der Slowakei und Tschechien in Reichweite. Der Tabu-Sektor Richtung Seilbahn kostet davon wenig — 1 032 statt 1 068, also 36 Verbindungen —, weil er nach Südwesten zeigt, wo ohnehin die Alpen stehen; mit den erlaubten Stellungen (Yagi 306°/34°/218°, Quad 106°/156°/354°) bleiben bei Deutschland sogar vier Stationen mehr übrig. Nach Deutschland sind es allerdings nur 141: Von dort sind es 400 bis 700 Kilometer bis zu den deutschen Contestplätzen, und dafür reichen 500 Watt an einem Stack selten.

Der **Gaisberg** ist das genaue Gegenteil: insgesamt der schwächste, aber **nach Deutschland der stärkste** mit 506 Stationen — sein freier Westsektor ist genau der, der dort zählt, München liegt 145 Kilometer weg statt 500.

Dazwischen liegen die drei anderen. Der **Grünberg** ist der ausgewogenste: 473 deutsche Stationen und 388 davon im Nahbereich, mehr als jeder andere, und das aus 989 Metern. Die **Traisner Hütte** lebt vom Osten — Polen, Tschechien, die Slowakei —, nach Deutschland ist sie die zweitschwächste. Das **Feuerkogelhaus** liegt in allem im Mittelfeld und ist der einzige Platz mit Dach, Bahn und Küche.

Auffällig ist, wie wenig die Höhe entscheidet: Der niedrigste Platz der fünf, der Grünberg mit 989 Metern, holt bei Deutschland den zweiten Rang; der höchste, das Feuerkogelhaus mit 1 591, liegt überall im Mittelfeld. Es zählt, wohin der Horizont offen ist und wie weit die Stationen weg sind, nicht wie weit man hinaufgefahren ist.

Nicht in den Zahlen stecken das Nahfeld und die Stationsgröße. Am Gaisberg sind von den 1 112 Stationen mit freiem Fernhorizont nach dem Laserscan nur **803** wirklich frei — die eigene Kuppe kostet ein Viertel. Und dazu kommt, was sich nicht rechnen lässt: das Relais 139 Meter daneben, der Sender in 210 und OE2M auf demselben Plateau.

Der Feuerkogel bleibt.
