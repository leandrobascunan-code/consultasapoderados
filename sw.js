/* Service worker – permite instalar la app y usarla sin conexión.
   Con internet SIEMPRE descarga la versión más nueva de los archivos (así los cambios subidos a GitHub
   se ven de inmediato); la copia guardada se usa solo cuando no hay conexión.
   Si cambia archivos en GitHub, puede subir este número (v1.9.1, v1.9.2…). */
var VERSION = "timon-v1.10.0";
var BASICOS = [
  "./", "index.html", "estilos.css", "app.js", "config.js", "datos.js", "conocimiento.js", "manifest.json",
  "logo.png", "estudiante.png", "estudiante-cuerpo.png", "brazo-izq.png", "brazo-der.png", "firma-autor-blanco.png",
  "favicon.png", "icono-192.png", "icono-512.png", "icono-maskable-512.png", "apple-touch-icon.png"
];

self.addEventListener("install", function (e) {
  self.skipWaiting(); // la versión nueva se activa sola
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(BASICOS); }).catch(function () { }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener("message", function (e) { if (e.data === "saltar") self.skipWaiting(); });

// Red primero (con límite de espera); si no hay conexión, la copia guardada
function redPrimero(req, respaldo) {
  return caches.open(VERSION).then(function (c) {
    var red = fetch(req, { cache: "no-cache" }).then(function (r) { if (r && r.ok) c.put(req, r.clone()); return r; });
    var espera = new Promise(function (ok, mal) { setTimeout(function () { mal(new Error("lento")); }, 6000); });
    return Promise.race([red, espera]).catch(function () {
      return c.match(req).then(function (g) { return g || (respaldo ? c.match(respaldo) : null) || red; });
    });
  });
}

self.addEventListener("fetch", function (e) {
  var req = e.request, url = new URL(req.url);
  if (req.method !== "GET") return;
  // Nunca guardar las respuestas del servidor (Apps Script) ni de YouTube/Drive
  if (/script\.google|googleusercontent|youtube|ytimg|drive\.google/.test(url.host)) return;
  if (req.headers.get("range")) return; // lecturas parciales del PDF grande

  if (req.mode === "navigate") { e.respondWith(redPrimero(req, "index.html")); return; }

  var propio = url.origin === self.location.origin;
  var cdn = /cdnjs\.cloudflare\.com|fonts\.(googleapis|gstatic)\.com/.test(url.host);
  if (!propio && !cdn) return;

  // Bibliotecas externas (con versión fija) y documentos grandes: copia guardada primero
  if (cdn || /\.(pdf|docx)$/i.test(url.pathname)) {
    e.respondWith(caches.open(VERSION).then(function (c) {
      return c.match(req).then(function (g) {
        return g || fetch(req).then(function (r) { if (r && (r.ok || r.type === "opaque")) c.put(req, r.clone()); return r; });
      });
    }));
    return;
  }
  // Archivos de la app: siempre la versión más nueva
  e.respondWith(redPrimero(req));
});
