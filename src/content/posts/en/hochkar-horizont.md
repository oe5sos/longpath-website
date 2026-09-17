---
titel: "What the Hochkar sees"
datum: 2026-09-17
vorspann: "The Hochkar Alpenstraße ends at 1,478 metres — the highest point in Lower Austria you can reach by car. From there, there is exactly one window: 48 degrees wide, to the north-west, deep. Everything else is the bowl of the ski area."
aufmacher: "../../../assets/karten/hochkar-horizont-aufmacher.png"
aufmacherAlt: "Dark map 700 kilometres around the Hochkar car park with national borders: a narrow green fan to the north-west as far as Passau and the Bavarian Forest, otherwise amber and short; plus the numbers 310° to 358° clear, 0° to 309° closed"
aufmacherRef: "1,478 m · JN77LR"
aufmacherFormat: "breit"
schlagworte: ["2026", "Ybbstal Alps", "Contest", "Site"]
---

The fourth site, and the first outside the Salzkammergut: the **Hochkar** near Göstling an der Ybbs, 1,808 metres, with the **Hochkar Alpenstraße** up to the ski area. The toll road ends at the Hochkarhof at **1,478 metres**, JN77LR — you cannot get higher by car in Lower Austria. Exactly this point is calculated: the car park at the end of the road.

The method as for the [Feuerkogel](/en/blog/feuerkogel-horizont/#how), the [Grünberg](/en/blog/gruenberg-horizont/) and the [Loser](/en/blog/loser-horizont/): SRTM terrain model, one ray per degree, ten-metre antenna, 4/3 earth, names from Wikipedia. Plus a 400-metre grid around the car park to see whether one corner of it is better than another.

## All the way round

![Polar diagram of the radio horizon from the Hochkar car park: red all round up to twenty degrees, only between 310° and 358° a green wedge](../../../assets/karten/hochkar-horizont-rundum-karte.png)

The car park lies in a bowl. To the south and south-west stands the Hochkar ridge with the summit, 400 to 1,200 metres away, **+12° to +19°**. To the east the ridges of the ski area, 600 metres, +8° to +15°. To the north and north-east another ridge at 600 to 900 metres, +1° to +13°. To the west, where Munich and Stuttgart lie, a knoll at 900 metres with +3° to +5°.

**Clear is only a wedge from 310° to 358°** — but a good one: −0.4 to −0.8°, formed by the Königsberg at nine kilometres and further out by the Bohemian Forest and the Bavarian Forest at 100 to 175 kilometres. That is the direction of Passau, Erfurt, Leipzig, Berlin and Dresden.

| Direction | What sets the horizon | Distance | Angle |
|---|---|---|---|
| 0–⁠59° | ridges north and north-east of the car park | 0.6–0.9 km | +1…⁠+13° |
| 60–⁠149° | ridges of the ski area to the east | 0.6–1.0 km | +7…⁠+15° |
| 150–⁠239° | **Hochkar ridge and summit** | 0.3–1.2 km | +12…⁠+19° |
| 240–⁠299° | knoll west of the car park | 0.1–0.9 km | +2.8…⁠+13° |
| 300–⁠309° | the same knoll, tailing off | 0.9 km | +0.1…⁠+2.5° |
| 310–⁠358° | **clear** — Königsberg, Bohemian Forest, Bavarian Forest | 9–175 km | −0.4…⁠−0.8° |

The grid around the car park changes nothing: within the car park all points are alike. It only gets better 400 metres up the piste, at 1,640 metres — and no car goes there.

## The map

![Relief map 180 kilometres around the Hochkar, for every bearing a ray out to the terrain that forms the horizon — green only a narrow fan to the north-west as far as Passau and the Bavarian Forest, red otherwise only a few hundred metres](../../../assets/karten/hochkar-horizont-zoom-karte.png)

## The summit

![Polar diagram of the radio horizon from the Hochkar summit: clear from west over north to north-east, Dürrenstein, Hochschwab and Enns Valley Alps to the east and south](../../../assets/karten/hochkar-gipfel-rundum-karte.png)

As on the Loser, the good view sits 330 metres of altitude above the car park. From the **Hochkar summit**, 1,808 metres, it is **clear from 282° over north to 52°**, −0.3 to −1.1°: Munich −0.53°, Stuttgart −0.46°, Nuremberg −1.03°, Cologne −0.99°, Erfurt −0.74°, Berlin −0.79°, Dresden −0.75°. To the east and south the Dürrenstein, the Hochschwab and the Enns Valley Alps close it, +0.2 to +1.1°, with marginal gaps towards the Rax and the Schneeberg. A first-class north-west site — by lift or on foot, not by car.

## Out to 700 kilometres

<figure class="zoomkarte" data-basis="/karten/horizont/hochkar-horizont-" data-min="200" data-max="700" data-schritt="100" data-start="200">
  <img src="/karten/horizont/hochkar-horizont-200km.webp" width="1800" height="1200" alt="Map around the Hochkar car park with national borders, between 200 and 700 kilometres radius: a narrow green fan to the north-west, otherwise the lines end after a few hundred metres" loading="lazy" decoding="async">
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

Of the 78 ranges on the [overview out to 800 kilometres](/karten/hochkar-horizont-uebersicht-800km.pdf) none rises above the horizontal from the car park that does not vanish behind the bowl anyway. Both maps as PDF: [zoom 180 km](/karten/hochkar-horizont-zoom-180km.pdf) and [overview 800 km](/karten/hochkar-horizont-uebersicht-800km.pdf).

## What it means

From the car the Hochkar is a **one-direction site**: Passau −0.77°, Erfurt −0.56°, Berlin −0.59°, Dresden −0.55°, Hanover −0.51°, Kassel −0.70°, Dortmund −0.71° — everything between 310° and 358° works about as well as from the Feuerkogel. But Nuremberg (+0.47°), Cologne (+0.82°), Frankfurt (+1.7°), Munich (+3.4°) and Stuttgart (+5.0°) stand behind the knoll to the west, and the bulk of German VHF stations sits exactly there. Not enough for a contest; for targeted contacts into eastern Germany it is a very deep horizon.

Whoever takes the summit has the best north-west horizon of these four sites. From the car park, the [Grünberg](/en/blog/gruenberg-horizont/) and the [Feuerkogel](/en/blog/feuerkogel-horizont/) remain the addresses for Germany.

## Caveat

A calculation, not a measurement. The bowl is a close-range problem — ridges at 300 to 900 metres, thirty-metre grid: the order of magnitude is right, the single degree is not. The Wikipedia names of the nearby obstacles on the maps are the nearest entry in each case, not always the ridge itself.
