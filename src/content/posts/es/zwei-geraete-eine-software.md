---
titel: "Los dos equipos para los que escribo el software"
datum: 2026-08-25
vorspann: "Dos cajas en la misma mesa, de tamaño parecido, ambas conectadas por LAN — y aun así, dos relaciones completamente distintas con el software."
aufmacher: "../../../assets/photos/anan-und-sunsdr.jpg"
aufmacherAlt: "Dos equipos de radio uno junto al otro: a la izquierda un ANAN-10E de Apache Labs con un ventilador encima, a la derecha un SunSDR2 QRP con un gran disipador"
aufmacherRef: "Izquierda ANAN-10E, derecha SunSDR2 QRP"
aufmacherFormat: "quer"
schlagworte: ["Equipo", "2026", "SunSDR", "OpenHPSDR"]
---

A la izquierda el ANAN-10E de Apache Labs, a la derecha el SunSDR2
QRP de Expert Electronics. Por fuera, casi lo mismo: un palmo de
ancho, LAN de entrada, auriculares y micrófono al frente. Nadie
sospecharía que en el software son dos cosas completamente
distintas.

## La diferencia no está en la chapa

**En el ANAN-10E, quien calcula es Longpath.** El equipo se anuncia
como un Hermes, habla OpenHPSDR, y lo que sale de la caja son datos
I/Q en bruto. El filtrado, la demodulación, la reducción de ruido,
toda la cadena de transmisión — todo eso ocurre en el ordenador, en
WDSP. La caja es, en el fondo, un conversor analógico-digital con
conexión de red. Precisamente por eso puedo cambiar cualquier cosa
en él: no hay ningún punto donde empiece una ruta de señal ajena.

**En el SunSDR2 QRP es al revés.** Expert Electronics no publica su
protocolo. No hay nada contra lo que escribir un controlador. La
única vía de entrada es TCI — el mismo protocolo que Longpath ya
ofrece hacia fuera, para que WSJT-X y N1MM puedan manejarlo. Solo
que al revés: aquí Longpath es el cliente y ExpertSDR2 el servidor.

> Ahí no puedo demodular nada. Solo puedo pedir el resultado,
> recibirlo, mostrarlo y hacerlo audible.

Eso suena a menos, y lo es. Pero significa que un equipo que no
habla OpenHPSDR en absoluto termina, aun así, en la misma ventana —
con la misma cascada, el mismo sonido, la misma sintonía.

## Lo que se ve en la foto

La refrigeración ya dice algo. A la izquierda hay un ventilador
sobrepuesto encima, un añadido visiblemente posterior. A la derecha
el disipador es parte de la carcasa — la misma tarea, resuelta en el
diseño en vez de en el uso.

Entre las conexiones llama la atención el segundo conector de
micrófono: el SunSDR tiene, además de la entrada de 3,5 milímetros,
un conector RJ45 para micrófonos de mano con teclado de botones.
Además, un botón de encendido propio en vez de un interruptor
basculante, y una alimentación de 12 voltios separada.

## Y sí, los dos suben a la montaña

No a la vez, ni en cada salida. Pero para eso están: lo bastante
pequeños para la mochila, lo bastante económicos para una batería, y
lo bastante potentes como para que cinco vatios desde una cumbre
lleguen más lejos que cien desde el valle.

Lo que echo en falta en la montaña tarde o temprano se convierte en
un cambio en el programa. Esa es la verdadera razón por la que hago
las dos cosas — la radio y el software. Una le escribe las tareas a
la otra.
