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

The method is the same as for the Feuerkogel — SRTM terrain model, one ray per degree, ten-metre antenna, 4/3 earth, names from Wikipedia. If you want to read it up: [it's over there](/en/blog/feuerkogel-horizont/#how).

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

## What it means

Towards Germany the Grünberg is **open all round, Munich included**: Nuremberg −0.61°, Cologne −0.59°, Stuttgart −0.60°, Frankfurt −0.50°, Munich −0.45°, Erfurt −0.44°, Berlin −0.36°, Passau −0.41°. It only gets marginal towards Rosenheim (−0.08°, the Hongar) and towards Saxony — Dresden −0.19°, Leipzig −0.26° — where the Bohemian Forest reaches almost up to the horizontal.

Set against the Feuerkogel: there the north is half a degree deeper, but Munich has vanished behind the mountain's own knoll. Here everything is flatter, but nothing is closed. For the bulk of German stations — Bavaria, Franconia, Baden-Württemberg — the Grünberg is thus the more balanced site; for the long paths to the north the Feuerkogel is the better one.

To the south there is nothing to be had, and that is no surprise once you have looked up at the Traunstein from the terrace.

## Caveat

A calculation, not a measurement — terrain model with a thirty-metre grid, no trees, no buildings, standard atmosphere. The ridge of the Grünberg is wooded; where exactly the antenna clears the trees is decided on the spot, more than by any tenth of a degree in this table.
