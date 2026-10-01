---
titel: "Two times two Yagis on the Feuerkogel"
datum: 2026-09-28
vorspann: "The horizon was calculated, so were the stations. Now the installation: two stacked 12-element Yagis, one fixed on Germany, one on the rotator — and the question of where at the Feuerkogelhaus a mast may stand at all, when people walk on the right, paragliders take off on the left and the mountain drops away behind. Plus the comparison with the Stuhleck."
aufmacher: "../../../assets/karten/feuerkogel-anlage-aufmacher.png"
aufmacherAlt: "Orthophoto of the Feuerkogelhaus from above, darkened, with the outlines of the inn, the Christophorushütte, the chapel and the cable-car station: to the right of the inn an amber dot with a fan towards 328°, to the left between the house and the trees a green dot with three dashed fans towards 8°, 304° and 46°"
aufmacherRef: "1,592 m · JN67UT"
aufmacherFormat: "breit"
schlagworte: ["2026", "Höllengebirge", "Contest", "Site", "Antennas"]
---

There are two posts on the **Feuerkogelhaus**: [what the Feuerkogel sees](/en/blog/feuerkogel-horizont/) and [where the stations really are](/en/blog/feuerkogel-stationen/). Both end with a plan for two fixed quads and one Yagi on the rotator. Since then the [Stuhleck](/en/blog/stuhleck-horizont/) has shown how much a stack brings, and for the Feuerkogel it is now settled: **both antennas will be stacked, both get a rotator, and one mostly stays on Germany.** This post recalculates the installation for that — which antennas, where they point and where they can stand at the house.

## How

The method is the same as on the Stuhleck. For the far horizon the SRTM terrain model, one ray per degree, a ten-metre antenna, 4/3 earth, out to 500 kilometres. For the stations on the other end the 3,215 contest logs of the IARU contests 2024 and 2025 and the Marconi 2025, plus the DARC contest lists 2025 for Germany. For the last hundred metres the BEV laser-scan surface model, this time on a three-metre grid around the whole house.

What is new is the ground. The surface model knows roofs and treetops, but not what lies beneath them. Where there are bushes, it used to take the treetop for the ground. Now the ground comes from the **Austrian terrain model** (10 m, open data), and every mast height is measured from there.

Counting works as in the section [The choice](/en/blog/stuhleck-horizont/#the-choice) for the Stuhleck: a station counts if an antenna has it above the horizon and with enough gain in the beam — six dBi up to 300 kilometres, from there three decibels more per hundred kilometres.

## What the Feuerkogel sees

A short reminder: **the horizon is clear from 294° through north to 83°**, 0.5 to 0.95 degrees below the horizontal, formed by the Bavarian Forest, the Bohemian Forest and the Mühlviertel and Waldviertel. In the north only one tooth stands in the way, the Traunstein at 54° with +0.27°. **From 106° through south to 293° it is closed**, the Höllengebirge with the Dachstein and the Tauern behind it. Within 700 kilometres there are 2,260 contest stations with a log, **1,388 of them lie above the horizon**: Germany 622, Poland 356, Czechia 236, Slovakia 87, Austria 48, Hungary 24. Of the 1,319 German stations on the DARC list, **1,107 are clear**. Behind the mountain lie Italy, Croatia, Slovenia and the German south-west with Munich, Stuttgart and the Allgäu.

## The antennas

![Sheet "The antenna installation": polar diagram of the 766 contest stations with a clear horizon up to 500 kilometres around the Feuerkogelhaus, bars per ten degrees stacked by country, the whole mass between 290° and 90°; over it the white arrow of the fixed stack on 328° and three green dashed arrows of the rotator stack on 8°, 304° and 46°; the south grey; on the right the figures against a quad stack on the rotator](../../../assets/karten/feuerkogel-antennenanlage.png)

On the Stuhleck the calculation gave two stacks: the Yagis towards Germany, the quads on the rotator for the two big blocks in the east and the south. On the Feuerkogel there is no south. Everything that is clear lies between north-west and east, in half a circle. A wide quad stack (69°, 14.5 dBi) is not needed for that; the narrow Yagi stack (34°, 17.8 dBi) with its three extra decibels is better. That is why there are **two times two 12JXX2** here:

| Installation | split | switched |
|---|---|---|
| 2 × 12JXX2 fixed 328° + quad stack on the rotator | 743 stations, Germany 578 | 1,087, Germany 841 |
| **2 × 12JXX2 fixed 328° + 2 × 12JXX2 on the rotator** | **895, Germany 710** | **1,183, Germany 1,035** |

Germany here means the DARC list. The quads are calculated with their best three positions, the Yagis with the three that are planned.

The **fixed stack points to 328°**, the centre of gravity of the German stations: Nuremberg, Regensburg, Erfurt, Hamburg. The **rotator stack has three positions**:

- **8°** for Berlin, Dresden, Leipzig and Prague,
- **304°** for Frankfurt and Cologne,
- **46°** for Wrocław, Ostrava and Kraków.

Whoever always switches to the stack whose turn it is reaches 1,183 stations. Whoever transmits on both at once through a fixed splitter has half the power each and gets 895. It is the same rule as on the Stuhleck: transmit on one antenna, listen on all.

## Where there is room at the house

![Sheet "Where there is room at the house": orthophoto of the Feuerkogelhaus, over it coloured squares for every possible mast site up to 18 metres from the house wall — green on the left between the house and the ramp, red behind the house and in front of the terrace; marked are the rotator mast on the left, the fixed mast next to the east wall and the repeater OE5XFK at the west corner](../../../assets/karten/feuerkogel-platzwahl.png)

On paper the best spot is quickly found. That does not mean a mast may stand there. The shack is in the house, so the masts have to be close to it. **On the right** people walk to the cable-car station. **On the left** is the paragliders' take-off ramp, no guy wires belong there. **Behind the house** the ground drops fifteen to twenty-five metres to the north. And in front of the house the house itself, ten metres high, hides the whole north.

For what remains, the calculation checked every spot up to 18 metres from the wall, with both Yagis of the stack separately — the upper one at 9.7, the lower one at 6.4 metres:

- **On the left, between the house wall and the ramp**, the ground lies three to five metres higher than at the house. There the rotator stack sees the most: **824 stations with both Yagis clear** in its three positions. Closer than ten metres to the west wall it gets clearly worse, because the house and bushes take the north away from the lower Yagi. The repeater OE5XFK at the west corner is 13 metres away.
- **On the right, close to the east wall**, everything towards 328° is clear, as everywhere at the house. That is where the fixed stack stands.

The two masts stand 45 metres apart, both ten metres high; the booms cannot touch. For comparison: in the gap between the house and the cable-car station the rotator stack on 8° would have looked straight into the Christophorushütte, and the lower Yagi would have been blocked in twelve degrees of its lobe.

## In three dimensions

<figure class="szene">
  <iframe src="/feuerkogel-3d.html?v=4" title="Feuerkogelhaus in 3D: orthophoto on the laser-scan terrain with the fixed 2×12 stack to the right of the inn and the rotator stack on the left between the house and the ramp" loading="lazy" allowfullscreen></iframe>
  <figcaption>Drag to rotate, the wheel zooms. The buttons set the planned directions, fixed stack 328° / 312° / 346°, rotator stack 8° / 304° / 46° / 76° / 342°; the sliders set any other direction and the mast height. Top left, per stack, the stations, countries and cities in the main beam, and a warning when the house, the hut or trees block a Yagi. "Drehen" circles the view, "Von oben" shows the plan view. <a href="/feuerkogel-3d.html">Open full screen</a></figcaption>
</figure>

<style>
.szene iframe { display: block; width: 100%; aspect-ratio: 16 / 10; border: 1px solid var(--border-fine); border-radius: var(--radius); background: #0c0c0e; }
@media (max-width: 720px) { .szene iframe { aspect-ratio: 2 / 3; } }
.szene figcaption { margin-top: .8rem; font-size: 11px; color: var(--t3); text-align: center; }
</style>

The basemap.at orthophoto lies on the laser-scan terrain. The inn, the Christophorushütte, the chapel and the Feuerkogel cable-car station have their measured heights, together with the cable car down to Ebensee and the repeater. The count in the box is recalculated with every turn and every height, with everything the laser scan contains.

## The data

| | |
|---|---|
| Site | Gasthaus Feuerkogelhaus, Höllengebirge, municipality of Ebensee, JN67UT |
| Fixed stack | 47.815845 N / 13.721748 E · to the right of the inn, about 5 m from the east wall · mast 10 m · 2 × 12JXX2 stacked at 6.4 and 9.7 m · 328° |
| Rotator stack | 47.815872 N / 13.721146 E · on the left between the house wall and the paragliding ramp, about 13 m from the west wall, ground 1,597 m · mast 10 m · 2 × 12JXX2 stacked at 6.4 and 9.7 m · 8° / 304° / 46° |
| Distances | masts 45 m apart · repeater OE5XFK 13 m from the rotator mast |
| Ground | gap east of the house 1,592 m, ridge of the inn 1,602.9 m (laser scan) |
| Horizon | clear 294°–83°, Traunstein tooth 52.7°–54.2° up to +0.27°, closed 106°–293° |
| Stations ≤ 700 km | 1,388 clear of 2,260 · Germany (DARC) 1,107 of 1,319 · Σ 627,000 km |
| Installation | switched: 1,183 stations, 717 within 500 km, Germany 1,035 · split: 895, Germany 710 |
| Against a quad stack | fixed 328° + quad stack on the rotator: 1,087 / Germany 841 (switched) · 743 / 578 (split) |

## Feuerkogel and Stuhleck

![Comparison sheet "Two sites, two directions": for the Feuerkogelhaus and the Stuhleck one bar each of the clearly visible stations by country — Feuerkogel 1,388 with a large German, Polish and Czech share, Stuhleck 1,741 with Italy, Croatia and Slovenia on top —, next to it Germany clear, the figures of the planned installation, switched and split, and the sum of kilometres](../../../assets/karten/feuerkogel-stuhleck-vergleich.png)

Both sites are now fully calculated, each with its own installation and the same rule.

| | Feuerkogelhaus | Stuhleck |
|---|---|---|
| Stations clear ≤ 700 km | 1,388 | **1,741** |
| Countries | 10 | **18** |
| Germany clear (DARC) | **1,107 of 1,319** | 606 of 943 |
| Installation, switched | 1,183 | **1,308** |
| of which within 500 km | 717 | **869** |
| of which Germany (DARC) | **1,035** | 551 |
| Installation, split | 895 | **948** |
| of which Germany (DARC) | **710** | 316 |
| Σ kilometres clear | 627,000 | **754,000** |

The Stuhleck has more stations and more countries, and at close range it is clearly better: Italy, Croatia, Slovenia, Hungary and Serbia do not exist from the Feuerkogel. The Feuerkogel has Germany. With the planned installation it reaches almost twice as many German stations as the Stuhleck, because there the Rax, the Schneealpe and the Hochschwab stand in front of the German north. Both installations are two times two 12JXX2; split between both stacks the Stuhleck is narrowly ahead, 948 against 895.

So the choice depends on what you want to collect in the contest. Whoever wants German stations, and that is where most of them are, goes to the Feuerkogel. Whoever wants countries and kilometres in the south and east goes to the Stuhleck.

## The choice of site

In the end a contest counts kilometres. So once more both sites with the same installation, two times two 12JXX2, both stacks transmitting at once, one standing on Germany (Feuerkogel 328°, Stuhleck 302°). Counted is the sum of kilometres of all stations reached within 700 km, once with the rotator stack on its three best positions, once turned freely, the way a contest turns after cluster and skeds. For the Stuhleck also the variant without the no-go sector, in case the cable-car company allows transmitting towards the lift.

| Points (km) | Feuerkogel | Stuhleck with no-go | Stuhleck without no-go |
|---|---|---|---|
| half power per stack, rotator on 3 positions | **327,000** (845 stations) | 298,000 (869) | 322,000 (890) |
| half power per stack, rotator turned freely | 415,000 (1,051) | 437,000 (1,222) | **506,000** (1,357) |
| full power per stack, rotator on 3 positions | **543,000** (1,240) | 463,000 (1,182) | 497,000 (1,181) |
| full power per stack, rotator turned freely | 622,000 (1,375) | 681,000 (1,624) | **753,000** (1,738) |

The Feuerkogel wins only as long as the rotator stays on a few positions; then Germany carries everything. Once it turns, the Stuhleck is ahead, by 5 to 10 percent with the no-go sector and by a good 20 percent without, and the gap grows with power because far more stations are clear from the Stuhleck. Then there is the setup: an open dome with the car beside it, against masts squeezed next to the house between the path, the ramp and the drop. And the Plöckenstein, where OE5BGN operates, lies 107 kilometres from the Feuerkogel exactly in the direction of Prague and Berlin, and 195 kilometres from the Stuhleck behind the Rax. The choice is the Stuhleck.

## Caveat

The figures count logs, not stations, and they are one to two years old. The laser-scan surface model dates from before last summer: it does not know bushes that have grown since. The exact position of the paragliding ramp is on no map, so the left mast is placed by eye. Whether masts may be put up at the house at all is for the landlord and the cable-car company to say, not the calculation. And before the contest a low-pass filter belongs on the amplifier, and a call to the keeper of OE5XFK.
