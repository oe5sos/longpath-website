# Karten

Ausschnitte aus der SOTA-Datenbank (sotadata.org.uk), je Aktivierung einer.
Keine Fotos: sie laufen **nicht** durch `scripts/grade-photos.mjs`, und sie
liegen nicht in `screens/`, weil die App-Seite diesen Ordner per Glob
einsammelt. Hier bleibt die Karte pixelgenau und wird nur in der Größe
angepasst.

Benennung: wie der Beitrag, `<slug>-karte.png`.

Ausnahme (16./17.09.2026): die `*-horizont-*.png`, `*-gipfel-rundum-karte.png`
und `loser-strasse-karte.png` (Feuerkogel, Grünberg, Loser, Hochkar,
Traisner Hütte) sind keine SOTA-Ausschnitte, sondern selbst gerechnete
Horizontkarten (SRTM1, matplotlib) aus den Beiträgen „Was … sieht". Gleiche
Regel: pixelgenau, keine Gradation. Die druckbaren PDFs dazu liegen in
`public/karten/`, die Zoomstufen der Plus/Minus-Karte als WebP in
`public/karten/horizont/`.
