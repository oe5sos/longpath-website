---
titel: "What the Feuerkogel sees"
datum: 2026-09-16
vorspann: "Before a contest station goes up a mountain, you should know which way the mountain looks. For the Gasthaus Feuerkogelhaus I worked it out: 360 bearings, 800 kilometres, every peak that stands in the way — and the direction where none does."
aufmacher: "../../../assets/karten/feuerkogel-horizont-aufmacher.png"
aufmacherAlt: "Dark map 700 kilometres around the Feuerkogelhaus with national borders: for every bearing a line out to the terrain that forms the horizon — green to the north as far as Bavaria and Bohemia, amber to the south only a few kilometres; plus the numbers 294° to 52° clear, 106° to 293° closed"
aufmacherRef: "1,591 m · JN67UT"
aufmacherFormat: "breit"
schlagworte: ["2026", "Höllengebirge", "Contest", "Site"]
---

A VHF contest is not won at the rig but at the site. On two metres what counts is how far below the horizontal the antenna can look — every tenth of a degree a mountain takes away in front of it costs range in exactly that direction. The **Gasthaus Feuerkogelhaus** on the Höllengebirge above Ebensee, **1,591 metres**, JN67UT, is a candidate for next season. Before I go up there with mast and Yagi, I wanted to know what the place really sees.

So I calculated it. Not estimated, not read off a map: calculated.

## How

The basis is NASA's **SRTM terrain model**, one elevation value every thirty metres. From the position of the inn a ray runs outward for every whole degree of the compass — sampled every twenty metres over the first three kilometres, every hundred further out, to 500 kilometres. For each point comes the angle at which it appears from a **ten-metre antenna**, with the earth's curvature at the usual 4/3 radius for radio waves. The highest angle along the ray is the horizon in that direction.

A value below zero means the antenna looks over everything; the terrain lies below the horizontal. A value above zero means a mountain stands in the line of sight. In between, from −0.3° to 0°, I call it marginal.

A small tool for this is taking shape as part of my contest logger; the terrain tiles were already on the machine anyway. The names of the mountains come from Wikipedia, looked up at each obstruction point.

## All the way round

![Polar diagram of the radio horizon from the Feuerkogelhaus: from south-east over south to west a red area of terrain above the horizontal, from north-west over north to east clear](../../../assets/karten/feuerkogel-horizont-rundum-karte.png)

The picture is unambiguous, and it has two halves.

**From 294° over north to 52° the horizon is clear**, plus 55° to 83°. The terrain that forms it there lies **75 to 172 kilometres** away — the Bavarian Forest, the Bohemian Forest, the Mühlviertel and Waldviertel, the pre-Alps — and stays **0.5 to 0.95 degrees below the horizontal**. In this half exactly one mountain stands in the way: the **Traunstein**, 10.8 kilometres, at 54°, with +0.26°. A notch two degrees wide; left and right of it it drops straight back to −0.7°. The Kasberg at 94° does the same once more, with +0.25°.

**From 106° over south to 293° it is closed.** The Totes Gebirge, the Dachstein, the Tauern — and above all the mountain itself.

| Direction | What sets the horizon | Distance | Angle |
|---|---|---|---|
| 106–⁠138° | Totes Gebirge: Großer Priel, Feuertalberg, Feigentalhimmel | 16–29 km | +0.7…⁠+1.7° |
| 140–⁠166° | Rinnerkogel, Schönberg, Loser | 12–18 km | +0.5…⁠+2.1° |
| 168–⁠180° | Schladming Tauern: Hochwildstelle, Hochgolling | 52–66 km | +0.5…⁠+1.0° |
| 186–⁠198° | Dachstein: Gjaidstein, Scheichenspitze, Dirndln | 37–41 km | +1.1…⁠+1.6° |
| 200–⁠216° | Radstadt Tauern, Ankogel, Goldberg group with Sonnblick and Hocharn | 72–103 km | +0.3…⁠+0.8° |
| 218–⁠248° | Kranabethsattel, **Großer Höllkogel** | 0.7–4 km | +1.2…⁠+3.8° |
| 250–⁠278° | **Alberfeldkogel** | 0.6–1.3 km | +3.3…⁠+5.7° |
| 280–⁠292° | the **Feuerkogel summit knoll** next to the house | 0.3 km | +0.6…⁠+3.4° |

The biggest obstacle is none of the big names. It is the **Alberfeldkogel, 600 metres from the house**, with almost six degrees — and the knoll of the Feuerkogel itself, 300 metres from the terrace. Everything behind it can be forgotten: the **Großglockner** would actually stand above the horizontal at +0.73°, but on its bearing the Kranabethsattel ridge of the Höllengebirge stands in front at +2.2°. The Watzmann, the Hochkönig, the Großvenediger: the same fate. Zugspitze, Marmolada, Ortler, Bernina, Mont Blanc are below the horizon anyway.

## The map

![Relief map 180 kilometres around the Feuerkogelhaus, for every bearing a ray out to the terrain that forms the horizon — green to the north far into Bavaria and Bohemia, red to the south only a few kilometres](../../../assets/karten/feuerkogel-horizont-zoom-karte.png)

Every line is one degree. To the north the green lines run to the Bavarian Forest and the Bohemian Forest, because only there does something come along that forms the horizon. To the south the red ones stop after twelve, twenty, forty kilometres — and to the west after a few hundred metres.

## Out to 800 kilometres

The question came up whether anything further out still interferes: the Harz, the Ore Mountains, the Tatras. The answer lies in the curvature of the earth. With the 4/3 radius the ground at 500 kilometres lies **14.7 kilometres** below the horizontal, at 800 kilometres **37.7 kilometres**. No mountain in Europe gets up there. Beyond roughly 250 kilometres nothing can rise above the horizon any more — and indeed the most distant obstacle that still manages it is the Goldberg group at 103 kilometres.

<figure class="zoomkarte" data-basis="/karten/horizont/feuerkogel-horizont-" data-min="200" data-max="700" data-schritt="100" data-start="200">
  <img src="/karten/horizont/feuerkogel-horizont-200km.webp" width="1800" height="1200" alt="Map around the Feuerkogelhaus with national borders, between 200 and 700 kilometres radius: for every bearing a line out to the terrain that forms the horizon — green where it stays below the horizontal, amber where terrain rises above it" loading="lazy" decoding="async">
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

Plus and minus pull the map out from 200 to 700 kilometres — the green fan to the north does not grow with it, because the horizon there simply lies at 75 to 172 kilometres. The amber fan to the west is the opposite: there the horizon is 300 metres to 4 kilometres from the house — a line that short would be invisible on the map, so blocked bearings are drawn to at least six per cent of the radius. What the map shows there is not distance, but that the direction is closed. The [overview out to 800 kilometres](/karten/feuerkogelhaus-horizont-uebersicht-800km.pdf) lists 78 ranges and peaks with their angle: Giant Mountains −1.2°, High Tatras −1.55°, Harz −1.7°, Eifel −2.0°, Apuseni −2.3°. All below the horizontal, all invisible. Two outliers only turned up in the cross-check: the **Hochgolling** (177°, 61 km, +0.98°) and the **Hochalmspitze** (199°, 95 km, +0.75°) really do rise above the horizon — their summits lay exactly between two of the one-degree rays. To the south that changes nothing; it is closed there anyway.

Both maps as PDF, to zoom into and print: [zoom 180 km](/karten/feuerkogelhaus-horizont-zoom-180km.pdf) with every mountain named, and [overview 800 km](/karten/feuerkogelhaus-horizont-uebersicht-800km.pdf) with the numbered list.

## What it means

For a contest what counts is where the other stations sit — and most of them sit in Germany. From Franconia over North Rhine-Westphalia to Berlin and Saxony the horizon from the Feuerkogelhaus is as clear as it can be on a mountain: Nuremberg −0.9°, Cologne −0.9°, Erfurt −0.8°, Berlin −0.6°, Passau −1.0°.

The sore spot lies at 281° to 292°: **Munich, Stuttgart, Rosenheim**. Exactly there the Feuerkogel knoll stands in front of the house. But the calculation also shows the way out: **200 to 300 metres to the west, up on the knoll** — 1,610 metres — Munich (−0.35°) and Stuttgart (−0.88°) are open, without losing anything to the north. Rosenheim and the Allgäu stay behind the Alberfeldkogel; the mountain won't give that up.

## Caveat

This is a calculation, not a measurement. The terrain model knows neither trees nor buildings nor the transmitter mast at the cable-car station, it has a thirty-metre grid, and the propagation assumes a standard atmosphere — a tropo evening calculates differently. What the calculation says for certain: where you need not even try, and where every decibel is worth it.

The rest gets measured — up there, with an antenna.
