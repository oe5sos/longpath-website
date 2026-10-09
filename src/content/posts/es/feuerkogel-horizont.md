---
titel: "Lo que ve el Feuerkogel"
datum: 2026-09-16
vorspann: "Antes de subir una estación de concurso a una montaña conviene saber hacia dónde mira la montaña. Para el Gasthaus Feuerkogelhaus lo he calculado: 360 rumbos, 800 kilómetros, cada cumbre que estorba — y la dirección en la que no estorba ninguna."
aufmacher: "../../../assets/karten/feuerkogel-horizont-aufmacher.png"
aufmacherAlt: "Mapa oscuro de 700 kilómetros alrededor del Feuerkogelhaus con fronteras nacionales: para cada rumbo un trazo hasta el terreno que forma el horizonte — verde hacia el norte hasta Baviera y Bohemia, ámbar hacia el sur solo unos kilómetros; además las cifras 294° a 52° libre, 106° a 293° cerrado"
aufmacherRef: "1591 m · JN67UT"
aufmacherFormat: "breit"
schlagworte: ["2026", "Höllengebirge", "Concurso", "Emplazamiento"]
---

Un concurso de VHF no se gana en el equipo sino en el emplazamiento. En dos metros lo que cuenta es cuánto puede mirar la antena por debajo de la horizontal — cada décima de grado que una montaña quita por delante cuesta alcance exactamente en esa dirección. El **Gasthaus Feuerkogelhaus**, en el Höllengebirge sobre Ebensee, **1591 metros**, JN67UT, es candidato para la próxima temporada. Antes de subir con mástil y Yagi quería saber qué ve realmente el lugar.

Así que lo calculé. No estimado, no leído de un mapa: calculado.


## Cómo


La base es el **modelo del terreno SRTM de la NASA**, un valor de altura cada treinta metros. Desde la posición de la hostería sale un rayo hacia fuera por cada grado entero de la rosa de los vientos — muestreado cada veinte metros en los primeros tres kilómetros, cada cien más allá, hasta 500 kilómetros. Para cada punto resulta el ángulo bajo el que aparece desde una **antena de diez metros**, con la curvatura terrestre al radio 4/3 habitual para ondas de radio. El ángulo más alto a lo largo del rayo es el horizonte en esa dirección.

Un valor por debajo de cero significa que la antena mira por encima de todo; el terreno queda bajo la horizontal. Un valor por encima de cero significa que hay una montaña en la línea de visión. Entre medias, de −0,3° a 0°, lo llamo justo.

Una pequeña herramienta para esto está naciendo como parte de mi programa de concursos; las teselas del modelo del terreno ya estaban en el ordenador. Los nombres de las montañas vienen de la Wikipedia, buscados en cada punto de obstáculo.


## Alrededor


![Diagrama polar del horizonte de radio desde el Feuerkogelhaus: del sureste por el sur hasta el oeste una superficie roja de terreno sobre la horizontal, del noroeste por el norte hasta el este despejado](../../../assets/karten/feuerkogel-horizont-rundum-karte.png)

La imagen es inequívoca, y tiene dos mitades.

**De 294° por el norte hasta 52° el horizonte está libre**, más de 55° a 83°. El terreno que lo forma allí está a **75–172 kilómetros** — la Selva de Baviera, la Selva de Bohemia, el Mühlviertel y el Waldviertel, los Prealpes — y se queda **0,5 a 0,95 grados por debajo de la horizontal**. En esta mitad hay exactamente una montaña en medio: el **Traunstein**, 10,8 kilómetros, a 54°, con +0,26°. Una muesca de dos grados de ancho; a izquierda y derecha vuelve enseguida a −0,7°. El Kasberg a 94° hace lo mismo otra vez, con +0,25°.

**De 106° por el sur hasta 293° está cerrado.** El Totes Gebirge, el Dachstein, los Tauern — y sobre todo la propia montaña.

| Dirección | Qué pone el horizonte | Distancia | Ángulo |
|---|---|---|---|
| 106–⁠138° | Totes Gebirge: Großer Priel, Feuertalberg, Feigentalhimmel | 16–29 km | +0,7…⁠+1,7° |
| 140–⁠166° | Rinnerkogel, Schönberg, Loser | 12–18 km | +0,5…⁠+2,1° |
| 168–⁠180° | Tauern de Schladming: Hochwildstelle, Hochgolling | 52–66 km | +0,5…⁠+1,0° |
| 186–⁠198° | Dachstein: Gjaidstein, Scheichenspitze, Dirndln | 37–41 km | +1,1…⁠+1,6° |
| 200–⁠216° | Tauern de Radstadt, Ankogel, grupo del Goldberg con Sonnblick y Hocharn | 72–103 km | +0,3…⁠+0,8° |
| 218–⁠248° | Kranabethsattel, **Großer Höllkogel** | 0,7–4 km | +1,2…⁠+3,8° |
| 250–⁠278° | **Alberfeldkogel** | 0,6–1,3 km | +3,3…⁠+5,7° |
| 280–⁠292° | la **loma del Feuerkogel** junto a la casa | 0,3 km | +0,6…⁠+3,4° |

El mayor estorbo no es ninguno de los grandes nombres. Es el **Alberfeldkogel, a 600 metros de la casa**, con casi seis grados — y la loma del propio Feuerkogel, a 300 metros de la terraza. Todo lo que queda detrás se puede olvidar: el **Großglockner** estaría en realidad sobre la horizontal con +0,73°, pero en su rumbo se interpone la cresta del Kranabethsattel del Höllengebirge con +2,2°. El Watzmann, el Hochkönig, el Großvenediger: la misma suerte. Zugspitze, Marmolada, Ortler, Bernina, Mont Blanc quedan de todos modos bajo el horizonte.


## El sitio

![Plano del emplazamiento en Feuerkogelhaus a partir del escaneo láser con ortofoto: curvas de nivel cada dos metros, las tres posiciones de mástil y las direcciones de radiación](../../../assets/karten/feuerkogelhaus-lageplan.png)

El terreno de los primeros 136 metros alrededor del sitio procede del **escaneo láser del BEV** con retícula de cuatro metros — árboles, edificios y lomas incluidos. El suelo en el mástil está a **1594,0 metros**.

| Altura de antena | Direcciones que bloquea el campo cercano |
|---|---|
| 6 m | 57° |
| 8 m | 43° |
| 10 m | 24° |
| 12 m | 17° |
| 15 m | 5° |

Incluso con diez metros de mástil el campo cercano bloquea aún **24 grados** — además de lo que cierre el horizonte lejano.


## El mapa


![Mapa de relieve de 180 kilómetros alrededor del Feuerkogelhaus, para cada rumbo un rayo hasta el terreno que forma el horizonte — verde hacia el norte hasta muy adentro de Baviera y Bohemia, rojo hacia el sur solo unos pocos kilómetros](../../../assets/karten/feuerkogel-horizont-zoom-karte.png)

Cada trazo es un grado. Hacia el norte los trazos verdes llegan hasta la Selva de Baviera y la de Bohemia, porque solo allí aparece algo que forme el horizonte. Hacia el sur los rojos se acaban a los doce, veinte, cuarenta kilómetros — y hacia el oeste a unos cientos de metros.


## Hasta 700 kilómetros


Surgió la pregunta de si más lejos estorba algo todavía: el Harz, los Montes Metálicos, los Tatras. La respuesta está en la curvatura de la Tierra. Con el radio 4/3 el suelo a 500 kilómetros queda **14,7 kilómetros** por debajo de la horizontal, a 800 kilómetros **37,7 kilómetros**. Ninguna montaña de Europa llega ahí arriba. Más allá de unos 250 kilómetros ya nada puede asomar sobre el horizonte — y de hecho el obstáculo más lejano que aún lo consigue es el grupo del Goldberg, a 103 kilómetros.

<figure class="zoomkarte" data-basis="/karten/horizont/feuerkogel-horizont-" data-min="200" data-max="700" data-schritt="100" data-start="200">
  <img src="/karten/horizont/feuerkogel-horizont-200km.webp" width="1800" height="1200" alt="Mapa alrededor del Feuerkogelhaus con fronteras nacionales, entre 200 y 700 kilómetros de radio: para cada rumbo un trazo hasta el terreno que forma el horizonte — verde donde queda bajo la horizontal, ámbar donde el terreno la supera" loading="lazy" decoding="async">
  <figcaption>
    <button type="button" data-zoom="-1" aria-label="Reducir el radio 100 km">−</button>
    <span data-radius>Radio 200 km</span>
    <button type="button" data-zoom="+1" aria-label="Ampliar el radio 100 km">+</button>
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

Con más y menos el mapa se abre de 200 a 700 kilómetros — el abanico verde hacia el norte no crece con él, porque el horizonte allí está, sin más, a 75–172 kilómetros. El abanico ámbar hacia el oeste es lo contrario: allí el horizonte está a entre 300 metros y 4 kilómetros de la casa — una línea tan corta sería invisible en el mapa, por eso los rumbos tapados se dibujan al menos hasta el seis por ciento del radio. Lo que el mapa muestra allí no es distancia, sino que esa dirección está cerrada. En la [vista general hasta 800 kilómetros](/karten/feuerkogelhaus-horizont-uebersicht-800km.pdf) figuran 78 sierras y cumbres con su ángulo: Montes de los Gigantes −1,2°, Altos Tatras −1,55°, Harz −1,7°, Eifel −2,0°, Apuseni −2,3°. Todas bajo la horizontal, todas invisibles. Dos excepciones aparecieron solo en la comprobación: el **Hochgolling** (177°, 61 km, +0,98°) y la **Hochalmspitze** (199°, 95 km, +0,75°) asoman de verdad sobre el horizonte — sus cumbres quedaban justo entre dos de los rayos de un grado. Hacia el sur eso no cambia nada; allí está cerrado de todos modos.

Ambos mapas en PDF, para ampliar e imprimir: [zoom 180 km](/karten/feuerkogelhaus-horizont-zoom-180km.pdf) con todos los nombres de las montañas y [vista general 800 km](/karten/feuerkogelhaus-horizont-uebersicht-800km.pdf) con la lista numerada.


## Las estaciones

![Mapa oscuro de 700 kilómetros alrededor de Feuerkogelhaus, cada estación de concurso un punto: claro donde el horizonte está libre, ámbar detrás del terreno; además las seis posiciones del rotor](../../../assets/karten/feuerkogelhaus-stationen.png)

De las 2 130 estaciones que aparecen en los registros hasta 700 kilómetros, **1 302 están por encima del horizonte** — Alemania 588 de 699. Ese es el techo: ninguna antena, por grande que sea, lo supera.

La cifra tiene dos mitades. **Realmente libres** — el horizonte más de tres décimas de grado por debajo de la horizontal — son 1 269 estaciones, 588 de ellas en Alemania. Las otras 33 quedan **justas**: entre −0,3° y cero, en la sombra rasante de un borde. Algo se hace, pero con pérdida de tres a ocho decibelios según el día. Se dan ambas cifras porque solo juntas describen el emplazamiento. A los 154 grados libres se suman 13 grados justos.


## Las antenas

![Lámina «La instalación de antenas»: diagrama polar de las estaciones hasta 500 kilómetros alrededor de Feuerkogelhaus, apiladas por país cada diez grados, con las tres posiciones de la pila DL y las tres de la pila del rotor](../../../assets/karten/feuerkogelhaus-anlage.png)

En todos los emplazamientos se calcula la misma instalación que en el Stuhleck, con **tres mástiles**:

- **Mástil 2**, 7 metros, rotor: dos 12JXX2 apiladas a 3,9 y 6,7 m — la pila que mira a Alemania.
- **Mástil 1**, 10 metros, rotor: dos 12JXX2 apiladas a 6,9 y 9,7 m, 34° de ancho, 17,8 dBi.
- **Mástil 3**, 7 metros, sin rotor: dos Tonna de 9 elementos apiladas a 3,9 y 6,7 m, 44° de ancho, 14,3 dBi — fijas en una dirección.

Las posiciones no están supuestas, sino buscadas: para Feuerkogelhaus salen **338° / 306° / 0°** en la pila DL, **50° / 82° / 20°** en la pila del rotor y **94°** para las Tonna fijas.

La alimentación pasa por un conmutador. Con los 1 000 vatios completos en el sistema con el que se trabaja, la instalación alcanza **1 258 estaciones** (Alemania 571, según la lista DARC 1 056). Repartida entre las dos pilas con rotor, 500 vatios cada una, son 955; repartida entre los tres sistemas a la vez, solo 782 — tres direcciones cuestan más potencia de la que aportan en cobertura. El mástil con las Tonna aporta por sí solo 4 estaciones que de otro modo faltarían.


## En tres dimensiones


<figure class="szene">
  <iframe src="/feuerkogel-3d.html?v=4" title="Feuerkogelhaus en 3D: ortofoto sobre el terreno del escaneo láser con el refugio, la Christophorushütte, los dos mástiles y las direcciones hacia Alemania" loading="lazy" allowfullscreen></iframe>
  <figcaption>Arrastrar gira, la rueda acerca. Las ciudades están en un anillo a la altura de la antena; claro significa libre, gris tapado. <a href="/feuerkogel-3d.html">Abrir a pantalla completa</a></figcaption>
</figure>

La escena muestra la cumbre tal como la conoce el escaneo láser: el refugio, la Christophorushütte, la capilla y la estación del teleférico con sus alturas medidas, con la ortofoto encima. Los mástiles y lóbulos pertenecen a la instalación calculada en [Dos veces dos Yagis](/es/blog/feuerkogel-antennen/); aquí se ve sobre todo hacia dónde mira libre el Feuerkogel — al norte sobre la llanura — y dónde el Höllengebirge cierra el sur.

<style>
.szene iframe { display: block; width: 100%; aspect-ratio: 16 / 10; border: 1px solid var(--border-fine); border-radius: var(--radius); background: #0c0c0e; }
@media (max-width: 720px) { .szene iframe { aspect-ratio: 2 / 3; } }
.szene figcaption { margin-top: .8rem; font-size: 11px; color: var(--t3); text-align: center; }
</style>


## La comparación

![Diagrama de barras de todos los emplazamientos de la serie con la misma instalación: una barra por emplazamiento con las estaciones alcanzables, apiladas por país](../../../assets/karten/standorte-vergleich-serie.png)

Todos los emplazamientos de la serie con **la misma instalación, la misma regla de recuento y los mismos registros** — solo así las cifras son comparables. Alcanzable significa: horizonte por debajo de la horizontal y ganancia suficiente para la distancia (6 dBi hasta 300 km, después 3 dB por cada 100 km), con 1 000 vatios en el sistema con el que se trabaja.

El recuento se hace sobre los **registros IARU 2024/2025 y el Marconi 2025**: registran todos los países por igual. La lista DARC cubre solo Alemania — va en columna aparte, si no, cualquier emplazamiento que mire al oeste gana solo por los datos.

| Emplazamiento | alcanzadas | Alemania | lista DARC | ≤ 500 km | Acceso |
|---|---:|---:|---:|---:|---|
| Traisner Hütte · 1 304 m | 1 378 | 543 | 988 | 875 | telesilla y luego a pie |
| Grünberg · 989 m | 1 376 | 672 | 1 271 | 826 | teleférico, posada |
| Stuhleck · 1 770 m | 1 298 | 307 | 569 | 921 | coche hasta arriba |
| **Feuerkogelhaus** · 1 591 m | 1 258 | 571 | 1 056 | 726 | teleférico, posada |
| Braunsberg · 337 m | 1 124 | 443 | 814 | 740 | coche hasta arriba |
| Gaisberg · 1 272 m | 1 036 | 620 | 1 199 | 618 | coche hasta arriba |
| Hochkar · 1 478 m | 438 | 321 | 559 | 247 | coche hasta arriba |
| Loser · 1 585 m | 0 | 0 | 0 | 0 | coche hasta arriba |

Feuerkogelhaus ocupa así el **puesto 4 de 8**.

Quien conozca los artículos anteriores de la serie encontrará allí otras cifras: se calcularon con la primera configuración — una pila Yagi y una pila de cuads con 69° de anchura de haz. Desde que la elección recayó en dos pilas estrechas de 12JXX2, el orden cambia: más ganancia y menos anchura favorece a los sitios cuyas estaciones se concentran en una dirección y perjudica a los que están abiertos en todo el horizonte. Las Tonna fijas del mástil 3 recuperan parte de esa anchura.


## Los datos

| | |
|---|---|
| Emplazamiento | Feuerkogelhaus — Gasthaus im Höllengebirge |
| Coordenadas | 47,81581 N / 13,72151 O · 1 591 m · JN67UT |
| Acceso | teleférico, posada en el sitio |
| Horizonte libre | 294°–52°, 55°–92°, 96°–105° |
| Grados libres / justos / cerrados | 154° / 13° / 193° |
| Estaciones ≤ 700 km | 1 269 libres, 33 justas, de 2 130 |
| Alemania (IARU) | 588 libres, 0 justas, de 699 |
| Alemania (lista DARC) | 1 094 por debajo de la horizontal de 1 319 |
| Instalación | tres mástiles · mástil 1 10 m (2 × 12JXX2 a 6,9/9,7 m, rotor) · mástil 2 7 m (2 × 12JXX2 a 3,9/6,7 m, rotor) · mástil 3 7 m (2 × Tonna 9 el a 3,9/6,7 m, fijo) |
| Posiciones | DL-Stack 338° / 306° / 0° · Rotor-Stack 50° / 82° / 20° · Tonna fest 94° |
| conmutada · 1 000 W | 1 258 · ≤ 500 km 726 · DL 571 · DARC 1 056 |
| repartida · 500 W cada una | 955 · ≤ 500 km 726 · DL 406 |
| las tres a la vez · 333 W | 782 · ≤ 500 km 719 · DL 312 |
| sin el mástil de las Tonna | 1 254 en vez de 1 258 |
| Σ kilómetros | 559 490 km |
| recuento estricto | solo direcciones por debajo de −0,3°: 933 · ≤ 500 km 701 · DL 406 |


## Qué significa


En un concurso cuenta dónde están las otras estaciones — y la mayoría están en Alemania. De Franconia por Renania del Norte-Westfalia hasta Berlín y Sajonia el horizonte desde el Feuerkogelhaus está tan libre como puede estarlo en una montaña: Núremberg −0,9°, Colonia −0,9°, Erfurt −0,8°, Berlín −0,6°, Passau −1,0°.

El punto flaco está entre 281° y 292°: **Múnich, Stuttgart, Rosenheim**. Justo ahí se levanta la loma del Feuerkogel delante de la casa. Pero el cálculo también muestra la salida: **200 a 300 metros al oeste, arriba en la loma** — 1610 metros — Múnich (−0,35°) y Stuttgart (−0,88°) quedan abiertos, sin perder nada hacia el norte. Rosenheim y el Allgäu se quedan detrás del Alberfeldkogel; eso la montaña no lo suelta.


## Reserva


Esto es un cálculo, no una medición. El modelo del terreno no conoce árboles, ni edificios, ni el mástil emisor de la estación del teleférico; tiene una malla de treinta metros, y la propagación supone una atmósfera estándar — una tarde de tropo calcula distinto. Lo que el cálculo dice con seguridad: hacia dónde ni siquiera hace falta intentarlo, y hacia dónde vale cada decibelio.

El resto se mide — arriba, con antena.
