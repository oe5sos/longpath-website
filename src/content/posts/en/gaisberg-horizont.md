---
titel: "What the Gaisberg sees"
datum: 2026-09-22
vorspann: "The Gaisberg is the mountain you simply drive up: 1,272 metres, ten kilometres from Salzburg, a car park at the end of the road, and the view goes straight into Bavaria. I calculated it like the others — 360 bearings, the laser-scan model for the last two hundred metres, the contest logs on top. The view is good. The site is not."
aufmacher: "../../../assets/karten/gaisberg-horizont-aufmacher.png"
aufmacherAlt: "Dark map 700 kilometres around the Gaisberg summit car park with national borders: the rim arc is green from 273° to 359°, amber towards east and south; plus the numbers 273° to 359° clear towards Germany and 1° to 39° behind the summit dome with the transmitter tower"
aufmacherRef: "1,272 m · JN67NT"
aufmacherFormat: "breit"
schlagworte: ["2026", "Salzburg", "Contest", "Site"]
---

The Gaisberg is the most convenient mountain around. A road runs all the way to the top, there is a car park up there and a meadow next to it, and anyone coming from Salzburg is there in twenty minutes. Among the Salzburg drive-up sites it was the only one that came into question towards Germany at all, back in the [first round](/en/blog/feuerkogel-horizont/). So I calculated it in full.

The result first: the horizon towards Germany is as clear as you could wish for. And it still comes to nothing.


## How


The same method as for the sites before: SRTM terrain model, one ray per degree, 4/3 earth, 700 kilometres out, ten metres of antenna. On top of that — and on a summit plateau this is the decisive part — the **BEV surface model from the laser scan**, one metre grid, for everything within three hundred metres: buildings, transmitter towers, trees, the dome itself. Far field and near field are combined, the higher of the two wins.

Over that go the contest logs: 2,262 stations from the IARU contests 2024 and 2025 and the Marconi 2025 that lie within 700 kilometres, each with bearing and distance. Plus the DARC list of German VHF contest participants — 1,327 of them are within 700 kilometres.

I calculated three spots on the plateau: the **car park at the end of the road** (47.80336 N / 13.11151 E, laser-scan ground 1,274 m, JN67NT), the area **at the repeater** a hundred and forty metres to the north-west, and the **summit meadow** north of the transmitter.

![Polar diagram of the radio horizon from the Gaisberg summit car park: clear from west over north to just short of north, the summit dome towards north-east and east, the Alps towards south](../../../assets/karten/gaisberg-horizont-rundum-karte.png)


## All the way round


From 273° to 359° everything is clear, −0.4 to −0.8 degrees. Munich, Stuttgart, Frankfurt, Cologne, Hanover, Hamburg — nothing in the way until the earth curves away. That is the best German sector any site with a road has to offer around here.

Then comes the dome. The summit with the ORF transmitter tower stands **two hundred metres north** of the car park and closes **2° to 43°** at ten metres of antenna height, by up to +5.2 degrees. Behind it lie Berlin (+1.4°), Dresden (+3.4°), Prague (+2.8°), Wrocław (+1.4°), Passau (+2.5°) and Nuremberg (+3.6°) — everything north-east of the Danube is looked at up a slope. A second, smaller hole is made by a house with trees, 15 to 18 metres high, ninety metres to the north-west: **313° to 322°**, +4.5 degrees.

![Site plan of the Gaisberg summit plateau from the laser-scan surface model: two amber wedges from the car park, one across the summit dome with the transmitter tower, one across house and trees in the north-west; plus the quad directions 300° and 340°, the Yagi on 60° and the OE2XZR repeater at 139 metres](../../../assets/karten/gaisberg-lageplan.png)

Height helps, but only slowly. What stays clear at the car park:

| Antenna height | clear of 2,262 | of those Germany | DARC list |
|---|---|---|---|
| 8 m | 711 | 347 | 634 of 1,327 |
| 10 m | 803 | 414 | 758 |
| 11.8 m | 942 | 508 | 941 |
| 13.5 m | 1,016 | 568 | 1,050 |

Thirteen and a half metres of mast, only to see over a dome two hundred metres away — and Nuremberg is still +1.4 degrees above it.


## The site

![Site plan at the Gaisberg from the lidar survey with orthophoto: contour lines every two metres, the three mast positions and the beam headings](../../../assets/karten/gaisberg-lageplan.png)

The terrain of the first 136 metres around the site comes from the **Austrian lidar survey** on a four-metre grid — trees, buildings and knolls included. The ground at the mast is at **1275.7 metres**.

| Antenna height | Directions blocked by the near field |
|---|---|
| 6 m | 73° |
| 8 m | 31° |
| 10 m | 13° |
| 12 m | 6° |
| 15 m | 2° |

Even with ten metres of mast the near field still blocks **13 degrees** — on top of whatever the far horizon closes off anyway.


## A hundred and forty metres further


Walk north-west from the car park, to the area **at the repeater** (47.80393 N / 13.10985 E, 1,277 m), and the picture turns around: the dome is then behind you, not in the way. 1,200 stations are clear at ten metres, 1,253 at 11.8, 1,295 at 13.5 — and of the DARC list **1,325 of 1,327 are clear, at any height**. Closed instead is the sector 44° to 68°, so Poland and Czechia, which from there lie behind the dome.

Better still is the **summit meadow north of the transmitter** (ground 1,284 m): **1,513 clear stations, regardless of mast height** — apart from the south, where the Alps are, everything is open. The price is two hundred and fifty metres of carrying and sixty metres of distance to the 100 kW tower.

![Two bar charts: clear stations per ten degrees for the car park and for the summit meadow, split by country; at the car park the sector 0° to 40° is missing, on the meadow it is full](../../../assets/karten/gaisberg-richtungen.png)

For the planned setup — one Yagi stack and one quad stack, each on three rotor positions, power split — that means, at the car park: **827 reachable stations, 506 of them in Germany**, with the Yagi stack on 312°, 342° and 60° and the quad stack on 88°, 282° and 284°. Counting only the German stations and only the two quads, 300° and 340° together bring 852 of 1,327 — from the summit meadow the same directions would give 1,319.


## The map

![Relief map 180 kilometres around the Gaisberg, one stroke per bearing out to the terrain that forms the horizon — green far into Bavaria, amber to the east and south](../../../assets/karten/gaisberg-horizont-zoom-karte.png)

Every stroke is one degree. To the west and north-west they run out into the Bavarian lowlands, because that is where the terrain forming the horizon begins; to the east and south they stop at the site's own knoll and at the rim of the Alps.

## Out to 700 kilometres


<figure class="zoomkarte" data-basis="/karten/horizont/gaisberg-horizont-" data-min="200" data-max="700" data-schritt="100" data-start="200">
  <img src="/karten/horizont/gaisberg-horizont-200km.webp" width="1800" height="1200" alt="Map around the Gaisberg with national borders, between 200 and 700 kilometres radius: the lines to the west and north run far out, to the north-east they end at the summit dome, to the south at the Alps" loading="lazy" decoding="async">
  <figcaption>
    <button type="button" data-zoom="-1" aria-label="Reduce radius by 100 km">−</button>
    <span data-radius>Radius 200 km</span>
    <button type="button" data-zoom="+1" aria-label="Increase radius by 100 km">+</button>
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

Both maps as PDF: [zoom 180 km](/karten/gaisberg-horizont-zoom-180km.pdf) and [overview 800 km](/karten/gaisberg-horizont-uebersicht-800km.pdf). To the south the Watzmann (31 km, 208°, +2.6°), the Großglockner (87 km, +1.4°) and the Hochalmspitze rise above the horizontal — to the north and west nothing does, out to eight hundred kilometres.


## The stations

![Dark map 700 kilometres around Gaisberg, every contest station a dot: bright where the horizon is clear, amber behind terrain; plus the six rotator headings of the array](../../../assets/karten/gaisberg-stationen.png)

Of the 2 133 stations that appear in the logs within 700 kilometres, **1 055 are above the horizon** — Germany 628 of 703. That is the ceiling: no antenna, however large, gets past it.

The figure has two halves. **Genuinely clear** — horizon more than three tenths of a degree below the horizontal — are 1 005 stations, 610 of them in Germany. The other 50 are **marginal**: between −0.3° and zero, in the grazing shadow of an edge. Something works there, but at a loss of three to eight decibels depending on the day. Both numbers are given, because only both together describe the site. Of the 127 degrees that are clear, 15 marginal degrees come on top.

## The antennas

![Sheet “The antenna array”: polar chart of the stations within 500 kilometres of Gaisberg, stacked by country in ten-degree bins, with the three headings of the DL stack and the three of the rotator stack](../../../assets/karten/gaisberg-anlage.png)

The same array is computed everywhere as the one on the Stuhleck, with **three masts**:

- **Mast 2**, 7 metres, rotator: two 12JXX2 stacked at 3.9 and 6.7 m — the stack that looks at Germany.
- **Mast 1**, 10 metres, rotator: two 12JXX2 stacked at 6.9 and 9.7 m, 34° wide, 17.8 dBi.
- **Mast 3**, 7 metres, no rotator: two stacked 9-element Tonnas at 3.9 and 6.7 m, 44° wide, 14.3 dBi — fixed on one heading.

The headings are not guessed but searched: for Gaisberg they come out at **312° / 342° / 290°** for the DL stack, **60° / 46° / 78°** for the rotator stack and **0°** for the fixed Tonnas.

Feeding goes through a switch. With the full 1 000 watts on whichever system is being worked, the array reaches **1 055 stations** across the contest (Germany 628, by the DARC list 1 199). Split across the two rotator stacks, 500 watts each, it is 862; with only three fixed headings per rotator 1 036; spread over all three systems at once only 664 — three directions cost more power than they gain in coverage. The Tonna mast alone adds 0 stations that would otherwise be missing.

## In three dimensions

<figure class="szene">
  <iframe src="/standort-3d.html?ort=gaisberg&v=1" title="Gaisberg in 3D: lidar terrain with orthophoto, the two masts and the beam headings" loading="lazy" allowfullscreen></iframe>
  <figcaption>Drag to turn, wheel to zoom. The sliders turn the two stacks, the buttons jump to the computed headings. <a href="/standort-3d.html?ort=gaisberg">Open full screen</a></figcaption>
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
| Grünberg · 989 m | 1 417 | 700 | 1 271 | 826 | cable car, inn |
| Feuerkogelhaus · 1 591 m | 1 302 | 588 | 1 056 | 726 | cable car, inn |
| Braunsberg · 337 m | 1 172 | 454 | 814 | 740 | drive to the top |
| **Gaisberg** · 1 272 m | 1 055 | 628 | 1 199 | 618 | drive to the top |
| Hochkar · 1 478 m | 438 | 321 | 559 | 247 | drive to the top |
| Loser · 1 585 m | 0 | 0 | 0 | 0 | drive to the top |

Gaisberg therefore comes **6 of 8**.

Anyone who knows the earlier articles in this series will find different numbers there: those were computed with the first line-up — one Yagi stack and one quad stack with a 69° beamwidth. Since the choice fell on two narrow 12JXX2 stacks, the order shifts: more gain and less width favours the sites whose stations bunch in one direction, and costs the ones that stand open all round. The fixed Tonnas on mast 3 win part of that width back.

## The data

| | |
|---|---|
| Site | Gaisberg — Gipfelparkplatz am Straßenende |
| Coordinates | 47,80336 N / 13,11151 O · 1 272 m · JN67NT |
| Access | road all the way up |
| Horizon clear | 266°–0°, 40°–81° |
| Degrees clear / marginal / blocked | 127° / 15° / 218° |
| Stations ≤ 700 km | 1 005 clear, 50 marginal, of 2 133 |
| Germany (IARU) | 610 clear, 18 marginal, of 703 |
| Germany (DARC list) | 1 217 below the horizontal of 1 327 |
| Array | three masts · mast 1 10 m (2 × 12JXX2 at 6.9/9.7 m, rotator) · mast 2 7 m (2 × 12JXX2 at 3.9/6.7 m, rotator) · mast 3 7 m (2 × 9-el Tonna at 3.9/6.7 m, fixed) |
| Headings | DL-Stack 312° / 342° / 290° · Rotor-Stack 60° / 46° / 78° · Tonna fest 0° |
| switched · 1 000 W | 1 055 · ≤ 500 km 618 · DL 628 · with three fixed headings per rotator 1 036 |
| split · 500 W each | 862 · ≤ 500 km 618 · DL 526 |
| all three at once · 333 W each | 664 · ≤ 500 km 612 · DL 380 |
| without the Tonna mast | 1 036 instead of 1 036 |
| Σ kilometres | 465 682 km |
| strict count | only directions below −0.3°: 788 · ≤ 500 km 578 · DL 483 |

## What it means


The Gaisberg is not an empty mountain. A transmitter park has stood on the summit for decades, and you do not simply drive into the middle of it with a contest station:

- The **2 m repeater OE2XZR on 145.6875 MHz** stands 139 metres from the car park — and at 297°, right in the direction you want to beam towards Germany. Plus the **APRS digipeater on 144.800 MHz**. Both are in the very band you intend to work with high power for two days. It cuts both ways: what an amplifier 139 metres away puts into a repeater input makes that repeater useless for the duration of the contest.
- Two hundred and ten metres further stands the **ORF transmitter**: four FM programmes at 100 kW each plus DAB+. A receiver meant to listen on 145 MHz sits there in a field against which any preselection is a compromise.
- The place is also **taken**: the IARU logs of 2024 and 2025 show **OE2M** with JN67NT and 1,270 metres — the Salzburg radio club operates from there. Two stations on 145 MHz on the same plateau are not a good idea.
- And the summit meadow, which would be the best one on paper, is a **paraglider launch site**.

That is the real answer to the question “Gaisberg?”: not the geography, but the neighbourhood.


## Caveat

A calculation, not a measurement. The SRTM grid is thirty metres, the lidar four; the far field knows neither trees nor buildings, only terrain. Propagation assumes a standard atmosphere — a tropo evening computes differently, and in the marginal directions it decides more than any tenth of a degree in this table. The station count is a model calculation with antenna patterns from manufacturer data, not a prediction of contacts.

The rest gets measured — up there, with an antenna.
