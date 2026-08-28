---
titel: "The two radios I write the software for"
datum: 2026-08-25
vorspann: "Two boxes on the same desk, about the same size, both hooked up over LAN — and yet two completely different relationships to the software."
aufmacher: "../../../assets/photos/anan-und-sunsdr.jpg"
aufmacherAlt: "Two radios side by side: an ANAN-10E from Apache Labs with a fan on top on the left, a SunSDR2 QRP with a large heatsink on the right"
aufmacherRef: "Left: ANAN-10E, right: SunSDR2 QRP"
aufmacherFormat: "quer"
schlagworte: ["Equipment", "2026", "SunSDR", "OpenHPSDR"]
---

On the left the ANAN-10E from Apache Labs, on the right the SunSDR2
QRP from Expert Electronics. From the outside almost identical: a
hand's width across, LAN in, headphones and microphone up front.
You wouldn't guess that, in software, they're two completely
different things.

## The difference isn't in the metal

**With the ANAN-10E, Longpath does the computing.** The radio
announces itself as a Hermes, speaks OpenHPSDR, and what comes out
of the box is raw I/Q data. Filtering, demodulation, noise
reduction, the whole transmit chain — all of that happens on the
computer, in WDSP. The box is basically an analogue-to-digital
converter with a network port. That's exactly why I can change
anything about it: there's no point where a foreign signal path
begins.

**With the SunSDR2 QRP it's the other way round.** Expert
Electronics doesn't publish its protocol. There's nothing to write a
driver against. The only way in is TCI — the same protocol Longpath
already exposes outward, so that WSJT-X and N1MM can drive it. Just
reversed: here Longpath is the client and ExpertSDR2 is the server.

> I can't demodulate anything there. I can only ask for the result,
> take it, display it, and make it audible.

That sounds like less, and it is. But it means a radio that doesn't
speak OpenHPSDR at all still ends up in the same window — with the
same waterfall, the same audio, the same tuning.

## What the photo shows

The cooling already tells you something. On the left sits a
bolted-on fan on top, a visibly retrofitted addition. On the right
the heatsink is part of the housing — the same job, solved in the
design instead of after the fact.

Among the connectors, the second microphone jack stands out: besides
the 3.5 mm input, the SunSDR has an RJ45 jack for hand microphones
with a button strip. Plus its own power button instead of a toggle
switch, and a separate 12-volt feed.

## And yes, both go up the mountain

Not at the same time, and not on every trip. But that's exactly what
they're for: small enough for the backpack, frugal enough for a
battery, and capable enough that five watts from a summit reach
further than a hundred from the valley.

Whatever I miss on the mountain sooner or later turns into a change
in the program. That's the real reason I do both — the radio and the
software. One writes the other's task list.
