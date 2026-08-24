# Bildschirmfotos der Oberfläche

Hier liegen Aufnahmen von Longpath selbst — **nicht** Fotos.

Der Unterschied ist wichtig: Fotos laufen durch
`scripts/grade-photos.mjs` und werden entsättigt, kontrastiert und
gewärmt. Eine Oberfläche darf das nicht. Was hier liegt, ist
pixelgenau und wird nur noch in der Größe angepasst.

## Benennung

Die Reihenfolge auf der Seite kommt aus dem Dateinamen:

    01-konsole.png
    02-empfang.png
    03-senden.png

Der Text darunter steht in `src/screens.ts`, unter demselben
Schlüssel ohne Nummer (`konsole`, `empfang`, `senden`). Fehlt ein
Eintrag, erscheint das Bild ohne Text.

## Aufnehmen

Longpath starten, dann pro Bild:

    screencapture -o -w ~/Longpath/website/src/assets/screens/01-konsole.png

`-w` wartet auf einen Klick ins Fenster, `-o` lässt den Schatten weg.
