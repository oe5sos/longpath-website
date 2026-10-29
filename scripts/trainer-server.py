# -*- coding: utf-8 -*-
# Pruefserver fuer den Contesttrainer, mit Bereichsanfragen (Range).
# Der eingebaute http.server kann die nicht — ohne sie kann der
# Browser in einer 188-min-Aufnahme nicht mittendrin einsteigen, und
# "Echtes Band" bliebe stumm.
#
# Er liegt bewusst HIER im Repo und nicht im Scratchpad: der
# verschwindet beim Beenden der App, und der Trainer wird nur noch
# lokal geprueft (Martin, 2026-10-29).
#
#   cd ~/Longpath/website && python3 -I scripts/trainer-server.py 8774
#   → http://localhost:8774/trainer/
import os, re, sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

# public/ neben diesem Skript — laeuft also auch aus einem anderen Baum.
WURZEL = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public")

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *a, **k):
        super().__init__(*a, directory=WURZEL, **k)

    def send_head(self):
        pfad = self.translate_path(self.path)
        if os.path.isdir(pfad):
            return super().send_head()
        bereich = self.headers.get("Range")
        if not bereich:
            r = super().send_head()
            return r
        try:
            f = open(pfad, "rb")
        except OSError:
            self.send_error(404); return None
        groesse = os.fstat(f.fileno()).st_size
        m = re.match(r"bytes=(\d*)-(\d*)", bereich)
        von = int(m.group(1)) if m.group(1) else 0
        bis = int(m.group(2)) if m.group(2) else groesse - 1
        bis = min(bis, groesse - 1)
        if von > bis:
            f.close(); self.send_error(416); return None
        self.send_response(206)
        self.send_header("Content-Type", self.guess_type(pfad))
        self.send_header("Accept-Ranges", "bytes")
        self.send_header("Content-Range", "bytes %d-%d/%d" % (von, bis, groesse))
        self.send_header("Content-Length", str(bis - von + 1))
        self.end_headers()
        f.seek(von)
        rest = bis - von + 1
        while rest > 0:
            stueck = f.read(min(65536, rest))
            if not stueck: break
            try: self.wfile.write(stueck)
            except (BrokenPipeError, ConnectionResetError): break
            rest -= len(stueck)
        f.close()
        return None

    def end_headers(self):
        if "Accept-Ranges" not in self._headers_buffer_names():
            self.send_header("Accept-Ranges", "bytes")
        super().end_headers()

    def _headers_buffer_names(self):
        try:
            return b"".join(self._headers_buffer).decode("latin-1")
        except Exception:
            return ""

    def guess_type(self, pfad):
        # Python raet fuer .m4a "audio/mp4a-latm" — damit tun sich
        # Browser schwer; audio/mp4 ist das, was sie erwarten.
        if str(pfad).lower().endswith((".m4a", ".mp4")):
            return "audio/mp4"
        return super().guess_type(pfad)

    def log_message(self, *a): pass

class Server(ThreadingHTTPServer):
    # Nach einem Abschuss ist der Port sonst eine Minute lang belegt.
    allow_reuse_address = True

port = int(sys.argv[1]) if len(sys.argv) > 1 else 8774
try:
    srv = Server(("127.0.0.1", port), Handler)
except OSError as e:
    if e.errno in (48, 98):   # Address already in use
        # Haeufigster Fall: er laeuft laengst. Das ist kein Fehler,
        # sondern die Antwort auf die Frage, die man gerade stellt.
        print("Laeuft schon auf Port %d — einfach aufmachen:" % port)
        print("  http://localhost:%d/trainer/" % port)
        print("Beenden mit:  lsof -ti tcp:%d | xargs kill" % port)
        sys.exit(0)
    raise
print("Trainer: http://localhost:%d/trainer/   (Wurzel %s)" % (port, WURZEL), flush=True)
srv.serve_forever()
