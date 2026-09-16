# Karten

Ausschnitte aus der SOTA-Datenbank (sotadata.org.uk), je Aktivierung einer.
Keine Fotos: sie laufen **nicht** durch `scripts/grade-photos.mjs`, und sie
liegen nicht in `screens/`, weil die App-Seite diesen Ordner per Glob
einsammelt. Hier bleibt die Karte pixelgenau und wird nur in der Größe
angepasst.

Benennung: wie der Beitrag, `<slug>-karte.png`.

Ausnahme (16.09.2026): die drei `feuerkogel-horizont-*-karte.png` sind
keine SOTA-Ausschnitte, sondern selbst gerechnete Horizontkarten (SRTM1,
matplotlib) aus dem Beitrag „Was der Feuerkogel sieht". Gleiche Regel:
pixelgenau, keine Gradation. Die druckbaren PDFs dazu liegen in
`public/karten/`.
