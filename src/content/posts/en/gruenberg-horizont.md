---
titel: "What the Grünberg sees"
datum: 2026-09-17
vorspann: "Gmunden's local mountain, 989 metres, a hundred metres west behind the inn: the same calculation as for the Feuerkogel. The Traunstein stands three kilometres away and closes half the circle — the other half is open all the way to Bavaria and Bohemia."
aufmacher: "../../../assets/karten/gruenberg-horizont-aufmacher.png"
aufmacherAlt: "Dark map 700 kilometres around the Grünberg with national borders: for every bearing a line out to the terrain that forms the horizon — green from west over north to east, amber to the south only a few kilometres; plus the numbers 285° to 80° clear, 92° to 256° closed"
aufmacherRef: "989 m · JN67VV"
aufmacherFormat: "breit"
schlagworte: ["2026", "Traunsee", "Contest", "Site"]
---

After the [Feuerkogel](/en/blog/feuerkogel-horizont/), the mountain on the other side of the lake: the **Grünberg above Gmunden**, **989 metres**, JN67VV. Not a peak, a ridge — ten minutes up by cable car from Gmunden, the inn stands at the top end. I calculated for the spot **a hundred metres west behind the inn**, because of all points on the ridge it has the freest view to the west. It makes little difference: the whole top lies within two hundredths of a degree.

## How

The method is the same for every site in this series: **SRTM terrain model**, one ray per degree out to 500 kilometres, ten metres of antenna height, earth curvature with the 4/3 radius, obstacle names from Wikipedia. It is set out in full in the [Feuerkogel article](/en/blog/feuerkogel-horizont/#how). Added to it: the **Austrian lidar survey** for the first 140 metres around the site, and the contest logs laid over the result.

Three classes: **clear** means more than three tenths of a degree below the horizontal, **marginal** between −0.3° and zero, **blocked** means terrain above the horizontal.


## All the way round


![Polar diagram of the radio horizon from the Grünberg: from east over south to west-south-west a red area of terrain above the horizontal, with a twelve-degree spike to the south; from west over north to east clear to marginal](../../../assets/karten/gruenberg-horizont-rundum-karte.png)

Two halves, as on the Feuerkogel — just cut differently.

**From 92° over south to 256° it is closed.** And not just a little: the **Traunstein** stands three kilometres to the south, 1,691 metres high, and rises **+12°** into the sky. That is not a notch, that is a wall from 139° to 192°. To its left the Hochsalm and the Kremsmauer, to its right the Höllengebirge and the Dachstein, everything between +1° and +4°. Plus two small spikes: the Seisenburg near Steinbach am Ziehberg (83–90°, +0.2°) and, very faintly, the Hochstaufen in the Chiemgau (258–261°, 74 km, +0.3°).

**From 262° over north to 80° it is open** — in gradations. Truly clear, 0.3 to 0.6 degrees below the horizontal, it is from 285° to 344° (Bavarian Forest, 30 to 145 km) and from 40° to 80° (Mühlviertel and Waldviertel, pre-Alps). In between there are marginal spots: the Hongar at 282–284° (12 km, −0.2°), the Bohemian Forest at 345–350° and 0–9° (Lusen, Plöckenstein, 100 to 120 km, −0.1 to −0.3°), the Sternstein at 21–25° (81 km, −0.2°). Marginal here means: below the horizontal, but only by a hair.

| Direction | What sets the horizon | Distance | Angle |
|---|---|---|---|
| 83–⁠90° | Seisenburg / Magdalenaberg | 17 km | +0.0…⁠+0.2° |
| 92–⁠107° | Hochsalm | 5–22 km | +0.1…⁠+1.6° |
| 109–⁠136° | Steineck, Katzenstein, Laudachsee | 4–5 km | +1.2…⁠+4.4° |
| 139–⁠192° | **Traunstein** | 3 km | +1.7…⁠+12.0° |
| 193–⁠209° | Dachstein: Scheichenspitze, Gjaidstein, Hohe Schrott | 19–51 km | +1.1…⁠+2.1° |
| 212–⁠246° | Höllengebirge: Kranabethsattel, Feuerkogel, Rieder Hütte, Hochlecken | 12–18 km | +1.2…⁠+3.1° |
| 250–⁠261° | Berchtesgaden Alps, Hochstaufen | 64–99 km | +0.0…⁠+0.5° |


## The site

![Site plan at the Grünberg from the lidar survey with orthophoto: contour lines every two metres, the three mast positions and the beam headings](../../../assets/karten/gruenberg-lageplan.png)

The terrain of the first 136 metres around the site comes from the **Austrian lidar survey** on a four-metre grid — trees, buildings and knolls included. The ground at the mast is at **996.9 metres**.

| Antenna height | Directions blocked by the near field |
|---|---|
| 6 m | 131° |
| 8 m | none |
| 10 m | none |
| 12 m | none |
| 15 m | none |

With ten metres of mast the site is **free of its own near field in all 360 directions**. Whatever is blocked from here is blocked by distant terrain, not by the site.


## The map


![Relief map 180 kilometres around the Grünberg, for every bearing a ray out to the terrain that forms the horizon — green to the north and west far into Bavaria and Bohemia, red to the south only a few kilometres](../../../assets/karten/gruenberg-horizont-zoom-karte.png)

The green fan is wider than on the Feuerkogel, because the west joins in: nothing of the mountain itself stands in the way. But it does not reach as deep — 989 instead of 1,591 metres, and you notice it in the angle: the horizon here lies at −0.3 to −0.6°, on the Feuerkogel at −0.6 to −0.95°.


## Out to 700 kilometres


<figure class="zoomkarte" data-basis="/karten/horizont/gruenberg-horizont-" data-min="200" data-max="700" data-schritt="100" data-start="200">
  <img src="/karten/horizont/gruenberg-horizont-200km.webp" width="1800" height="1200" alt="Map around the Grünberg with national borders, between 200 and 700 kilometres radius: for every bearing a line out to the terrain that forms the horizon — green where it stays below the horizontal, amber where terrain rises above it" loading="lazy" decoding="async">
  <figcaption>
    <button type="button" data-zoom="-1" aria-label="Shrink radius by 100 km">−</button>
    <span data-radius>Radius 200 km</span>
    <button type="button" data-zoom="+1" aria-label="Grow radius by 100 km">+</button>
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

Further out nothing interferes any more — the curvature of the earth sees to that, as already worked out for the Feuerkogel. Of the 78 ranges on the [overview out to 800 kilometres](/karten/gruenberg-horizont-uebersicht-800km.pdf) exactly one rises above the horizontal, and it is in Austria: the **Ötscher**, 103 km at 91°, with +0.15°. Everything in Germany, Czechia, Poland stays below — the Bavarian Forest, which forms the view to the north, already sits at −0.4° itself.

Both maps as PDF: [zoom 180 km](/karten/gruenberg-horizont-zoom-180km.pdf) with every mountain named and [overview 800 km](/karten/gruenberg-horizont-uebersicht-800km.pdf) with the numbered list.


## The stations

![Dark map 700 kilometres around Grünberg, every contest station a dot: bright where the horizon is clear, amber behind terrain; plus the six rotator headings of the array](../../../assets/karten/gruenberg-stationen.png)

Of the 2 134 stations that appear in the logs within 700 kilometres, **1 417 are above the horizon** — Germany 700 of 701. That is the ceiling: no antenna, however large, gets past it.

The figure has two halves. **Genuinely clear** — horizon more than three tenths of a degree below the horizontal — are 1 103 stations, 590 of them in Germany. The other 314 are **marginal**: between −0.3° and zero, in the grazing shadow of an edge. Something works there, but at a loss of three to eight decibels depending on the day. Both numbers are given, because only both together describe the site. Of the 137 degrees that are clear, 44 marginal degrees come on top.

## The antennas

![Sheet “The antenna array”: polar chart of the stations within 500 kilometres of Grünberg, stacked by country in ten-degree bins, with the three headings of the DL stack and the three of the rotator stack](../../../assets/karten/gruenberg-anlage.png)

The same array is computed everywhere as the one on the Stuhleck, with **three masts**:

- **Mast 2**, 7 metres, rotator: two 12JXX2 stacked at 3.9 and 6.7 m — the stack that looks at Germany.
- **Mast 1**, 10 metres, rotator: two 12JXX2 stacked at 6.9 and 9.7 m, 34° wide, 17.8 dBi.
- **Mast 3**, 7 metres, no rotator: two stacked 9-element Tonnas at 3.9 and 6.7 m, 44° wide, 14.3 dBi — fixed on one heading.

The headings are not guessed but searched: for Grünberg they come out at **304° / 346° / 286°** for the DL stack, **42° / 70° / 16°** for the rotator stack and **250°** for the fixed Tonnas.

Feeding goes through a switch. With the full 1 000 watts on whichever system is being worked, the array reaches **1 417 stations** across the contest (Germany 700, by the DARC list 1 271). Split across the two rotator stacks, 500 watts each, it is 1 132; with only three fixed headings per rotator 1 376; spread over all three systems at once only 869 — three directions cost more power than they gain in coverage. The Tonna mast alone adds 3 stations that would otherwise be missing.

## In three dimensions

<figure class="szene">
  <iframe src="/standort-3d.html?ort=gruenberg&v=1" title="Grünberg in 3D: lidar terrain with orthophoto, the two masts and the beam headings" loading="lazy" allowfullscreen></iframe>
  <figcaption>Drag to turn, wheel to zoom. The sliders turn the two stacks, the buttons jump to the computed headings. <a href="/standort-3d.html?ort=gruenberg">Open full screen</a></figcaption>
</figure>

<style>
.szene iframe { display: block; width: 100%; aspect-ratio: 16 / 10; border: 1px solid var(--border-fine); border-radius: var(--radius); background: #0c0c0e; }
@media (max-width: 720px) { .szene iframe { aspect-ratio: 2 / 3; } }
.szene figcaption { margin-top: .8rem; font-size: 11px; color: var(--t3); text-align: center; }
</style>

The same view for every site: the terrain comes from the Austrian lidar survey, the orthophoto lies on top, and the two masts stand on it at their computed heights. The labels around the rim are cities — bright means above the horizon, grey means behind it.


## The comparison

![Bar chart of every site in the series with the same array: one bar per site of the stations it reaches, stacked by country](../../../assets/karten/standorte-vergleich-serie.png)

Every site in this series with **the same array, the same counting rule and the same logs** — only then are the numbers comparable. Reached means: horizon below the horizontal and enough gain for the distance (6 dBi to 300 km, then 3 dB per further 100 km), with 1 000 watts on whichever system is being worked. **Both large antennas sit on rotators** — so the count is what is reachable across the whole contest, not what one fixed heading covers.

The count runs on the **IARU logs 2024/2025 and the Marconi 2025**: they record every country alike. The DARC list covers Germany only — it sits in its own column, otherwise every site that looks west wins on the data alone.

| Site | reached | Germany | DARC list | ≤ 500 km | Access |
|---|---:|---:|---:|---:|---|
| Stuhleck · 1 770 m | 1 549 | 326 | 569 | 962 | drive to the top |
| Traisner Hütte · 1 304 m | 1 482 | 569 | 988 | 877 | chairlift, then on foot |
| **Grünberg** · 989 m | 1 417 | 700 | 1 271 | 826 | cable car, inn |
| Feuerkogelhaus · 1 591 m | 1 302 | 588 | 1 056 | 726 | cable car, inn |
| Braunsberg · 337 m | 1 172 | 454 | 814 | 740 | drive to the top |
| Gaisberg · 1 272 m | 1 055 | 628 | 1 199 | 618 | drive to the top |
| Hochkar · 1 478 m | 438 | 321 | 559 | 247 | drive to the top |
| Loser · 1 585 m | 0 | 0 | 0 | 0 | drive to the top |

Grünberg therefore comes **3 of 8**.

Anyone who knows the earlier articles in this series will find different numbers there: those were computed with the first line-up — one Yagi stack and one quad stack with a 69° beamwidth. Since the choice fell on two narrow 12JXX2 stacks, the order shifts: more gain and less width favours the sites whose stations bunch in one direction, and costs the ones that stand open all round. The fixed Tonnas on mast 3 win part of that width back.

## The data

| | |
|---|---|
| Site | Grünberg — Rücken westlich hinter dem Gasthaus |
| Coordinates | 47,89829 N / 13,82024 O · 989 m · JN67VV |
| Access | cable car, inn on site |
| Horizon clear | 268°–82° |
| Degrees clear / marginal / blocked | 137° / 44° / 179° |
| Stations ≤ 700 km | 1 103 clear, 314 marginal, of 2 134 |
| Germany (IARU) | 590 clear, 110 marginal, of 701 |
| Germany (DARC list) | 1 324 below the horizontal of 1 325 |
| Array | three masts · mast 1 10 m (2 × 12JXX2 at 6.9/9.7 m, rotator) · mast 2 7 m (2 × 12JXX2 at 3.9/6.7 m, rotator) · mast 3 7 m (2 × 9-el Tonna at 3.9/6.7 m, fixed) |
| Headings | DL-Stack 304° / 346° / 286° · Rotor-Stack 42° / 70° / 16° · Tonna fest 250° |
| switched · 1 000 W | 1 417 · ≤ 500 km 826 · DL 700 · with three fixed headings per rotator 1 376 |
| split · 500 W each | 1 132 · ≤ 500 km 826 · DL 544 |
| all three at once · 333 W each | 869 · ≤ 500 km 809 · DL 407 |
| without the Tonna mast | 1 373 instead of 1 376 |
| Σ kilometres | 623 181 km |
| strict count | only directions below −0.3°: 836 · ≤ 500 km 634 · DL 416 |

## What it means


Towards Germany the Grünberg is **open all round, Munich included**: Nuremberg −0.61°, Cologne −0.59°, Stuttgart −0.60°, Frankfurt −0.50°, Munich −0.45°, Erfurt −0.44°, Berlin −0.36°, Passau −0.41°. It only gets marginal towards Rosenheim (−0.08°, the Hongar) and towards Saxony — Dresden −0.19°, Leipzig −0.26° — where the Bohemian Forest reaches almost up to the horizontal.

Set against the Feuerkogel: there the north is half a degree deeper, but Munich has vanished behind the mountain's own knoll. Here everything is flatter, but nothing is closed. For the bulk of German stations — Bavaria, Franconia, Baden-Württemberg — the Grünberg is thus the more balanced site; for the long paths to the north the Feuerkogel is the better one.

To the south there is nothing to be had, and that is no surprise once you have looked up at the Traunstein from the terrace.


## Caveat


A calculation, not a measurement — terrain model with a thirty-metre grid, no trees, no buildings, standard atmosphere. The ridge of the Grünberg is wooded; where exactly the antenna clears the trees is decided on the spot, more than by any tenth of a degree in this table.
