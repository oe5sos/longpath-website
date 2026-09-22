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

## The car park

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

## A hundred and forty metres further

Walk north-west from the car park, to the area **at the repeater** (47.80393 N / 13.10985 E, 1,277 m), and the picture turns around: the dome is then behind you, not in the way. 1,200 stations are clear at ten metres, 1,253 at 11.8, 1,295 at 13.5 — and of the DARC list **1,325 of 1,327 are clear, at any height**. Closed instead is the sector 44° to 68°, so Poland and Czechia, which from there lie behind the dome.

Better still is the **summit meadow north of the transmitter** (ground 1,284 m): **1,513 clear stations, regardless of mast height** — apart from the south, where the Alps are, everything is open. The price is two hundred and fifty metres of carrying and sixty metres of distance to the 100 kW tower.

![Two bar charts: clear stations per ten degrees for the car park and for the summit meadow, split by country; at the car park the sector 0° to 40° is missing, on the meadow it is full](../../../assets/karten/gaisberg-richtungen.png)

For the planned setup — one Yagi stack and one quad stack, each on three rotor positions, 500 watts each — that means, at the car park: **827 reachable stations, 506 of them in Germany**, with the Yagi stack on 312°, 342° and 60° and the quad stack on 88°, 282° and 284°. Counting only the German stations and only the two quads, 300° and 340° together bring 852 of 1,327 — from the summit meadow the same directions would give 1,319.

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

## Why it still comes to nothing

The Gaisberg is not an empty mountain. A transmitter park has stood on the summit for decades, and you do not simply drive into the middle of it with a contest station:

- The **2 m repeater OE2XZR on 145.6875 MHz** stands 139 metres from the car park — and at 297°, right in the direction you want to beam towards Germany. Plus the **APRS digipeater on 144.800 MHz**. Both are in the very band you intend to work with a kilowatt for two days. It cuts both ways: what an amplifier 139 metres away puts into a repeater input makes that repeater useless for the duration of the contest.
- Two hundred and ten metres further stands the **ORF transmitter**: four FM programmes at 100 kW each plus DAB+. A receiver meant to listen on 145 MHz sits there in a field against which any preselection is a compromise.
- The place is also **taken**: the IARU logs of 2024 and 2025 show **OE2M** with JN67NT and 1,270 metres — the Salzburg radio club operates from there. Two stations on 145 MHz on the same plateau are not a good idea.
- And the summit meadow, which would be the best one on paper, is a **paraglider launch site**.

That is the real answer to the question “Gaisberg?”: not the geography, but the neighbourhood.

## Five sites side by side

Because the question keeps coming up, here are the five calculated sites with **the same setup** that is planned for the Stuhleck: a stack of two 12-element Yagis (17.8 dBi, 34° beamwidth) and a stack of two quad arrays (14.5 dBi, 69°), each on three rotor positions, and 1,000 watts on both at once — that is **500 watts per stack**. Reachable here does not only mean “horizon clear”, but also: enough gain for the distance — 6 dBi out to 300 kilometres, then 3 dB per further hundred, referred to one kilowatt. The SRTM horizon and the contest logs are the same for all five. The bracket at the Stuhleck shows what is left once the **no-go sector towards the cable car** is respected (237°–248° and the same turned by 180°, each with half the antenna's beamwidth as a safety margin). Near field and station size are left out — the figures compare with each other, but not with those in the [Stuhleck article](/en/blog/stuhleck-horizont/), which calculates more finely.

![Comparison of five sites with the same setup: horizontal bars of reachable stations by country for Stuhleck 1,068, Gaisberg 827, Feuerkogelhaus 945, Grünberg 1,015 and Traisner Hütte 1,015, next to each a sector rose with the clear directions and the home position of the Yagi stack; at the Stuhleck a red line with the figures under the no-go sector](../../../assets/karten/standorte-vergleich.png)

| Site | reachable ≤ 700 km | Germany | ≤ 500 km | Yagi stack | Quad stack | Access |
|---|---|---|---|---|---|---|
| **Stuhleck** · 1,779 m | **1,068** (1,032) | 141 (145) | **946 (925)** | 306° · 34° · 230° | 22° · 66° · 156° | drive to the top |
| **Grünberg** · 989 m | 1,015 | 473 | 861 | 346° · 292° · 42° | 18° · 62° · 290° | cable car, inn |
| **Traisner Hütte** · 1,304 m | 1,015 | 305 | 902 | 322° · 20° · 74° | 10° · 114° · 276° | on foot only |
| **Feuerkogelhaus** · 1,591 m | 945 | 407 | 772 | 346° · 308° · 40° | 8° · 70° · 88° | cable car, inn |
| **Gaisberg, car park** · 1,272 m | 827 | **506** | 652 | 312° · 342° · 60° | 88° · 282° · 284° | drive to the top |

Five sites, five characters — and the power shifts the picture once more. Five hundred watts per stack is three decibels less than a kilowatt on one antenna; the long contacts drop out first, the close range stays.

The **Stuhleck** reaches the most overall and in the close range as well: 946 stations inside 500 kilometres. It sits in the densest corner of Europe, with Hungary, Croatia, Slovenia, Slovakia and Czechia within reach. The no-go sector towards the cable car costs little — 1,032 instead of 1,068, so 36 contacts — because it points south-west, where the Alps stand anyway; with the permitted positions (Yagi 306°/34°/218°, quad 106°/156°/354°) four more German stations are left than without it. Towards Germany, though, there are only 141: from there it is 400 to 700 kilometres to the German contest sites, and 500 watts on one stack rarely covers that.

The **Gaisberg** is its exact opposite: the weakest overall, but **the strongest towards Germany** with 506 stations — its clear western sector is precisely the one that counts there, with Munich 145 kilometres away instead of 500.

The other three sit in between. The **Grünberg** is the most balanced: 473 German stations, 388 of them in the close range, more than anyone else, and that from 989 metres. The **Traisner Hütte** lives off the east — Poland, Czechia, Slovakia — and is the second weakest towards Germany. The **Feuerkogelhaus** is mid-field in everything and the only site with a roof, a cable car and a kitchen.

What stands out is how little the altitude decides: the lowest of the five, the Grünberg at 989 metres, comes second for Germany; the highest, the Feuerkogelhaus at 1,591, is mid-field everywhere. What counts is where the horizon is open and how far away the stations are, not how far up you drove.

What the figures do not contain is the near field and the station size. At the Gaisberg, of the 1,112 stations with a clear far horizon only **803** are really clear once the laser scan is included — its own dome costs a quarter. And on top comes what cannot be calculated: the repeater 139 metres away, the transmitter at 210 and OE2M on the same plateau.

The Feuerkogel stays.
