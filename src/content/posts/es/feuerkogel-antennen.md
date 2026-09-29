---
titel: "Dos veces dos Yagis en el Feuerkogel"
datum: 2026-09-28
vorspann: "El horizonte estaba calculado, las estaciones también. Ahora la instalación: dos Yagis de 12 elementos apiladas, una fija hacia Alemania, otra en el rotor — y la pregunta de dónde puede estar un mástil en el Feuerkogelhaus, si a la derecha pasa la gente, a la izquierda despegan los parapentes y detrás la montaña se corta. Además, la comparación con el Stuhleck."
aufmacher: "../../../assets/karten/feuerkogel-anlage-aufmacher.png"
aufmacherAlt: "Ortofoto del Feuerkogelhaus desde arriba, oscurecida, con las plantas de la posada, la Christophorushütte, la capilla y la estación del teleférico: a la derecha de la posada un punto ámbar con un abanico hacia 328°, a la izquierda entre la casa y los árboles un punto verde con tres abanicos discontinuos hacia 8°, 304° y 46°"
aufmacherRef: "1592 m · JN67UT"
aufmacherFormat: "breit"
schlagworte: ["2026", "Höllengebirge", "Concurso", "Emplazamiento", "Antenas"]
---

Sobre el **Feuerkogelhaus** hay dos artículos: [lo que ve el Feuerkogel](/es/blog/feuerkogel-horizont/) y [dónde están las estaciones de verdad](/es/blog/feuerkogel-stationen/). Los dos terminan con un plan de dos quads fijas y una Yagi en el rotor. Desde entonces el [Stuhleck](/es/blog/stuhleck-horizont/) ha mostrado cuánto aporta un apilamiento, y para el Feuerkogel ya está decidido: **las dos antenas irán apiladas, las dos tendrán rotor, y una se quedará casi siempre hacia Alemania.** Este artículo vuelve a calcular la instalación para eso: qué antenas, hacia dónde apuntan y dónde pueden estar junto a la casa.

## Cómo

El método es el mismo que en el Stuhleck. Para el horizonte lejano, el modelo de terreno SRTM, un rayo por grado, antena de diez metros, tierra 4/3, hasta 500 kilómetros. Para las estaciones del otro lado, los 3215 logs de los concursos IARU 2024 y 2025 y del Marconi 2025, y para Alemania las listas de concursos del DARC 2025. Para los últimos cien metros, el modelo de superficie por láser del BEV, esta vez en una malla de tres metros alrededor de toda la casa.

Lo nuevo es el suelo. El modelo de superficie conoce tejados y copas de árboles, pero no lo que hay debajo. Donde hay matorral, antes tomaba la copa por el suelo. Ahora el suelo sale del **modelo de terreno de Austria** (10 m, datos abiertos), y cada altura de mástil se mide desde ahí.

Se cuenta como en el apartado [La elección](/es/blog/stuhleck-horizont/#la-elección) del Stuhleck: una estación cuenta si una antena la tiene por encima del horizonte y con la ganancia necesaria en el haz — seis dBi hasta 300 kilómetros, y a partir de ahí tres decibelios más cada cien kilómetros.

## Lo que ve el Feuerkogel

Un breve recordatorio: **el horizonte está libre de 294° por el norte hasta 83°**, de 0,5 a 0,95 grados por debajo de la horizontal, formado por el Bosque Bávaro, el Bosque de Bohemia y el Mühlviertel y el Waldviertel. Al norte solo estorba un diente, el Traunstein a 54° con +0,27°. **De 106° por el sur hasta 293° está cerrado**: el Höllengebirge con el Dachstein y los Tauern detrás. Dentro de 700 kilómetros hay 2260 estaciones de concurso con log, **1388 de ellas por encima del horizonte**: Alemania 622, Polonia 356, Chequia 236, Eslovaquia 87, Austria 48, Hungría 24. De las 1319 estaciones alemanas de la lista del DARC, **1107 están libres**. Detrás de la montaña quedan Italia, Croacia, Eslovenia y el suroeste de Alemania con Múnich, Stuttgart y el Allgäu.

## Las antenas

![Hoja «La instalación de antenas»: diagrama polar de las 766 estaciones de concurso con horizonte libre hasta 500 kilómetros alrededor del Feuerkogelhaus, barras cada diez grados apiladas por país, toda la masa entre 290° y 90°; encima la flecha blanca del apilamiento fijo en 328° y tres flechas verdes discontinuas del apilamiento en el rotor en 8°, 304° y 46°; el sur en gris; a la derecha las cifras frente a un apilamiento de quads en el rotor](../../../assets/karten/feuerkogel-antennenanlage.png)

En el Stuhleck el cálculo dio dos apilamientos: las Yagis hacia Alemania y las quads en el rotor para los dos grandes bloques del este y del sur. En el Feuerkogel no hay sur. Todo lo libre está entre el noroeste y el este, en medio círculo. Para eso no hace falta un apilamiento ancho de quads (69°, 14,5 dBi); el apilamiento estrecho de Yagis (34°, 17,8 dBi), con sus tres decibelios más, es mejor. Por eso aquí van **dos veces dos 12JXX2**:

| Instalación | 500 W cada una | conmutado, 1 kW |
|---|---|---|
| 2 × 12JXX2 fija a 328° + apilamiento de quads en el rotor | 743 estaciones, Alemania 578 | 1087, Alemania 841 |
| **2 × 12JXX2 fija a 328° + 2 × 12JXX2 en el rotor** | **895, Alemania 710** | **1183, Alemania 1035** |

Alemania significa aquí la lista del DARC. Las quads están calculadas con sus tres mejores posiciones, las Yagis con las tres previstas.

El **apilamiento fijo apunta a 328°**, el centro de gravedad de las estaciones alemanas: Núremberg, Ratisbona, Erfurt, Hamburgo. El **apilamiento del rotor tiene tres posiciones**:

- **8°** para Berlín, Dresde, Leipzig y Praga,
- **304°** para Fráncfort y Colonia,
- **46°** para Breslavia, Ostrava y Cracovia.

Quien conmuta siempre un kilovatio al apilamiento que toca llega a 1183 estaciones. Quien transmite por las dos a la vez con un divisor fijo tiene 500 vatios en cada una y llega a 895. Es la misma regla que en el Stuhleck: transmitir por una antena, escuchar por todas.

## Dónde hay sitio junto a la casa

![Hoja «Dónde hay sitio junto a la casa»: ortofoto del Feuerkogelhaus, encima casillas de color para cada posible sitio de mástil hasta 18 metros de la pared — verde a la izquierda entre la casa y la rampa, rojo detrás de la casa y delante de la terraza; marcados el mástil del rotor a la izquierda, el mástil fijo junto a la pared este y el repetidor OE5XFK en la esquina oeste](../../../assets/karten/feuerkogel-platzwahl.png)

Sobre el papel, el mejor sitio se encuentra rápido. Eso no quiere decir que allí pueda ir un mástil. El cuarto de radio está en la casa, así que los mástiles tienen que estar cerca. **A la derecha** la gente va hacia la estación del teleférico. **A la izquierda** está la rampa de despegue de los parapentes; allí no van vientos. **Detrás de la casa** el terreno cae de quince a veinticinco metros hacia el norte. Y delante de la casa, la propia casa, de diez metros de alto, tapa todo el norte.

Para lo que queda, el cálculo ha revisado cada sitio hasta 18 metros de la pared, con las dos Yagis del apilamiento por separado — la de arriba a 9,7, la de abajo a 6,4 metros:

- **A la izquierda, entre la pared y la rampa**, el suelo está de tres a cinco metros más alto que junto a la casa. Allí el apilamiento del rotor ve más: **824 estaciones con las dos Yagis libres** en sus tres posiciones. A menos de diez metros de la pared oeste empeora claramente, porque la casa y los matorrales le quitan el norte a la Yagi de abajo. El repetidor OE5XFK de la esquina oeste queda a 13 metros.
- **A la derecha, pegado a la pared este**, todo está libre hacia 328°, como en cualquier punto junto a la casa. Ahí va el apilamiento fijo.

Los dos mástiles quedan a 45 metros el uno del otro, los dos de diez metros; los booms no pueden tocarse. Como comparación: en el hueco entre la casa y la estación del teleférico, el apilamiento del rotor en 8° habría mirado directamente a la Christophorushütte, y la Yagi de abajo habría quedado tapada en doce grados de su lóbulo.

## En tres dimensiones

<figure class="szene">
  <iframe src="/feuerkogel-3d.html?v=4" title="Feuerkogelhaus en 3D: ortofoto sobre el terreno del láser con el apilamiento fijo de 2×12 a la derecha de la posada y el del rotor a la izquierda entre la casa y la rampa" loading="lazy" allowfullscreen></iframe>
  <figcaption>Arrastrar gira, la rueda hace zoom. Los botones ponen las direcciones previstas, apilamiento fijo 328° / 312° / 346°, apilamiento del rotor 8° / 304° / 46° / 76° / 342°; los reguladores, cualquier otra dirección y la altura del mástil. Arriba a la izquierda, por apilamiento, las estaciones, países y ciudades del haz principal, y un aviso cuando la casa, la cabaña o los árboles tapan una Yagi. «Drehen» hace girar la vista, «Von oben» muestra la planta. <a href="/feuerkogel-3d.html">Abrir a pantalla completa</a></figcaption>
</figure>

<style>
.szene iframe { display: block; width: 100%; aspect-ratio: 16 / 10; border: 1px solid var(--border-fine); border-radius: var(--radius); background: #0c0c0e; }
@media (max-width: 720px) { .szene iframe { aspect-ratio: 2 / 3; } }
.szene figcaption { margin-top: .8rem; font-size: 11px; color: var(--t3); text-align: center; }
</style>

La ortofoto de basemap.at está sobre el terreno del láser. La posada, la Christophorushütte, la capilla y la estación del teleférico del Feuerkogel tienen sus alturas medidas, junto con el teleférico hacia Ebensee y el repetidor. El recuento del recuadro se recalcula con cada giro y cada altura, con todo lo que hay en el láser.

## Los datos

| | |
|---|---|
| Emplazamiento | Gasthaus Feuerkogelhaus, Höllengebirge, municipio de Ebensee, JN67UT |
| Apilamiento fijo | 47,815845 N / 13,721748 E · a la derecha de la posada, a unos 5 m de la pared este · mástil de 10 m · 2 × 12JXX2 apiladas a 6,4 y 9,7 m · 328° |
| Apilamiento del rotor | 47,815872 N / 13,721146 E · a la izquierda entre la pared y la rampa de parapente, a unos 13 m de la pared oeste, suelo a 1597 m · mástil de 10 m · 2 × 12JXX2 apiladas a 6,4 y 9,7 m · 8° / 304° / 46° |
| Distancias | mástiles a 45 m · repetidor OE5XFK a 13 m del mástil del rotor |
| Suelo | hueco al este de la casa 1592 m, cumbrera de la posada 1602,9 m (láser) |
| Horizonte | libre 294°–83°, diente del Traunstein 52,7°–54,2° hasta +0,27°, cerrado 106°–293° |
| Estaciones ≤ 700 km | 1388 libres de 2260 · Alemania (DARC) 1107 de 1319 · Σ 627 000 km |
| Instalación | conmutado 1 kW: 1183 estaciones, 717 hasta 500 km, Alemania 1035 · 500 W cada una: 895, Alemania 710 |
| Frente a quads | fija a 328° + apilamiento de quads en el rotor: 1087 / Alemania 841 (1 kW) · 743 / 578 (500 W) |

## Feuerkogel y Stuhleck

![Hoja comparativa «Dos sitios, dos direcciones»: para el Feuerkogelhaus y el Stuhleck una barra cada uno con las estaciones visibles por país — Feuerkogel 1388 con una gran parte alemana, polaca y checa, Stuhleck 1741 con Italia, Croacia y Eslovenia además —, al lado Alemania libre, las cifras de la instalación prevista con un kilovatio y con 500 vatios cada una, y la suma de kilómetros](../../../assets/karten/feuerkogel-stuhleck-vergleich.png)

Los dos sitios están ya calculados del todo, cada uno con su propia instalación y la misma regla.

| | Feuerkogelhaus | Stuhleck |
|---|---|---|
| Estaciones libres ≤ 700 km | 1388 | **1741** |
| Países | 10 | **18** |
| Alemania libre (DARC) | **1107 de 1319** | 606 de 943 |
| Instalación, conmutado 1 kW | 1183 | **1308** |
| de ellas hasta 500 km | 717 | **869** |
| de ellas Alemania (DARC) | **1035** | 551 |
| Instalación, 500 W cada una | 895 | **948** |
| de ellas Alemania (DARC) | **710** | 316 |
| Σ kilómetros libres | 627 000 | **754 000** |

El Stuhleck tiene más estaciones y más países, y a corta distancia es claramente mejor: Italia, Croacia, Eslovenia, Hungría y Serbia no existen desde el Feuerkogel. El Feuerkogel tiene Alemania. Con la instalación prevista llega a casi el doble de estaciones alemanas que el Stuhleck, porque allí el Rax, la Schneealpe y el Hochschwab se interponen ante el norte de Alemania. Las dos instalaciones son dos veces dos 12JXX2; con 500 vatios en cada apilamiento el Stuhleck va ligeramente delante, 948 frente a 895.

La elección depende, pues, de lo que se quiera reunir en el concurso. Quien quiera estaciones alemanas, que es donde está la mayoría, va al Feuerkogel. Quien quiera países y kilómetros en el sur y el este, va al Stuhleck.

## Reserva

Las cifras cuentan logs, no estaciones, y tienen uno o dos años. El modelo de superficie por láser es anterior al último verano: no conoce los matorrales que han crecido desde entonces. La posición exacta de la rampa de parapente no está en ningún mapa; el mástil de la izquierda está puesto a ojo. Si se pueden poner mástiles junto a la casa lo dicen el posadero y el teleférico, no el cálculo. Y antes del concurso, un filtro paso bajo en el amplificador y una llamada al responsable de OE5XFK.
