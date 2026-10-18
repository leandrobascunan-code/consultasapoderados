/* Service worker – permite instalar la app y usarla sin conexión.
   IMPORTANTE: cada vez que cambie archivos en GitHub, suba este número (v1.0.1, v1.0.2…)
   para que los celulares descarguen la versión nueva. */
var VERSION = "timon-v1.8.0";
var BASICOS = [
  "./", "index.html", "estilos.css", "app.js", "config.js", "datos.js", "conocimiento.js", "manifest.json",
  "logo.png", "estudiante.png", "estudiante-cuerpo.png", "brazo-izq.png", "brazo-der.png", "favicon.png", "icono-192.png", "icono-512.png", "icono-maskable-512.png", "apple-touch-icon.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(BASICOS); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener("message", function (e) { if (e.data === "saltar") self.skipWaiting(); });

self.addEventListener("fetch", function (e) {
  var req = e.request, url = new URL(req.url);
  if (req.method !== "GET") return;
  // Nunca guardar las respuestas del servidor (Apps Script) ni de YouTube/Drive
  if (/script\.google|googleusercontent|youtube|ytimg|drive\.google/.test(url.host)) return;
  if (req.headers.get("range")) return; // lecturas parciales del PDF grande

  // Navegación: red primero, si no hay conexión usar la copia guardada
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then(function (r) {
      var copia = r.clone(); caches.open(VERSION).then(function (c) { c.put("index.html", copia); }); return r;
    }).catch(function () { return caches.match("index.html"); }));
    return;
  }
  var propio = url.origin === self.location.origin;
  var cdn = /cdnjs\.cloudflare\.com|fonts\.(googleapis|gstatic)\.com/.test(url.host);
  if (!propio && !cdn) return;

  // Archivos propios y bibliotecas: usar copia guardada y actualizar en segundo plano
  e.respondWith(caches.open(VERSION).then(function (c) {
    return c.match(req).then(function (guardada) {
      var red = fetch(req).then(function (r) { if (r && (r.ok || r.type === "opaque")) c.put(req, r.clone()); return r; }).catch(function () { return guardada; });
      return guardada || red;
    });
  }));
});
