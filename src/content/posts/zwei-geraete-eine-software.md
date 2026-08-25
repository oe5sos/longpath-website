---
titel: "Die beiden, für die ich die Software schreibe"
datum: 2026-08-25
vorspann: "Zwei Kisten auf dem selben Tisch, ähnlich groß, beide über LAN angebunden — und trotzdem zwei völlig verschiedene Verhältnisse zur Software."
aufmacher: "../../assets/photos/anan-und-sunsdr.jpg"
aufmacherAlt: "Zwei Funkgeräte nebeneinander: links ein ANAN-10E von Apache Labs mit Lüfter obenauf, rechts ein SunSDR2 QRP mit großem Kühlkörper"
aufmacherRef: "Links ANAN-10E, rechts SunSDR2 QRP"
aufmacherFormat: "quer"
schlagworte: ["Ausrüstung", "2026", "SunSDR", "OpenHPSDR"]
---

Links der ANAN-10E von Apache Labs, rechts der SunSDR2 QRP von Expert
Electronics. Von außen fast dasselbe: eine Handbreit, LAN hinein,
Kopfhörer und Mikrofon vorne. Man würde nicht vermuten, dass sie in der
Software zwei grundverschiedene Dinge sind.

## Der Unterschied steckt nicht im Blech

**Beim ANAN-10E rechnet Longpath.** Das Gerät meldet sich als
Hermes, spricht OpenHPSDR, und was aus dem Gehäuse kommt, sind rohe
I/Q-Daten. Filtern, Demodulieren, Rauschminderung, die ganze
Sendekette — das passiert alles im Rechner, in WDSP. Die Kiste ist im
Grunde ein Analog-Digital-Wandler mit Netzwerkanschluss. Genau deshalb
kann ich daran auch alles ändern: es gibt keine Stelle, an der ein
fremder Signalweg anfängt.

**Beim SunSDR2 QRP ist es umgekehrt.** Expert Electronics
veröffentlicht sein Protokoll nicht. Es gibt nichts, wogegen man einen
Treiber schreiben könnte. Der einzige Weg hinein ist TCI — dasselbe
Protokoll, das Longpath längst nach außen anbietet, damit WSJT-X und
N1MM es bedienen können. Nur eben andersherum: hier ist Longpath der
Client und ExpertSDR2 der Server.

> Ich kann dort nicht demodulieren. Ich kann nur darum bitten, das
> Ergebnis entgegennehmen, anzeigen und hörbar machen.

Das klingt nach weniger, und das ist es auch. Aber es heißt, dass ein
Gerät, das gar kein OpenHPSDR spricht, trotzdem im selben Fenster
liegt — mit dem selben Wasserfall, dem selben Ton, der selben
Abstimmung.

## Was man am Foto sieht

Die Kühlung sagt schon etwas. Links sitzt ein aufgesteckter Lüfter
obenauf, ein sichtbar nachträglicher Zusatz. Rechts ist der Kühlkörper
Teil des Gehäuses — dieselbe Aufgabe, im Entwurf gelöst statt im
Betrieb.

Bei den Anschlüssen fällt die zweite Mikrofonbuchse auf: der SunSDR
hat neben dem 3,5-Millimeter-Eingang noch eine RJ45-Buchse für
Handmikrofone mit Tastenleiste. Dazu ein eigener Einschaltknopf statt
eines Kippschalters und eine getrennte 12-Volt-Zuführung.

## Und ja, beide gehen mit auf den Berg

Nicht gleichzeitig und nicht auf jeden. Aber genau dafür sind sie da:
klein genug für den Rucksack, sparsam genug für einen Akku, und stark
genug, dass fünf Watt von einem Gipfel weiter kommen als hundert aus
dem Tal.

Was ich auf dem Berg vermisse, landet früher oder später als Änderung
im Programm. Das ist der eigentliche Grund, warum ich beides mache —
den Funk und die Software. Das eine schreibt dem anderen die Aufgaben.
