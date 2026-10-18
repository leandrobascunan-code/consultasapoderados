/* =====================================================================
   Timón – Asistente del Colegio Marina de Chile (SLEP Andalién Sur)
   Aplicación del chat. No guarda el contenido de las consultas:
   la conversación y el perfil viven solo en la memoria de esta pestaña.
   ===================================================================== */
(function () {
  "use strict";

  // ---------- Bibliotecas externas (se cargan solo cuando se necesitan) ----------
  var CDN = {
    chart: "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js",
    jspdf: "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",
    pdfjs: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",
    pdfworker: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"
  };
  var DOMINIOS_PERMITIDOS = ["mineduc.cl", "curriculumnacional.cl", "cpeip.cl", "supereduc.cl", "agenciaeducacion.cl", "bcn.cl", "leychile.cl",
    "unesco.org", "educacionpublica.gob.cl", "youtube.com", "youtu.be", "drive.google.com", "docs.google.com"];

  // ---------- Íconos (trazos simples) ----------
  var P = {
    libro: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    sol: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
    luna: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    nuevo: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M12 7v6M9 10h6"/>',
    enviar: '<path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/>',
    globo: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    escudo: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    escudoOk: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    descarga: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5M12 15V3"/>',
    compartir: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/>',
    copiar: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    volumen: '<path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14"/>',
    archivo: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
    enlace: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    grafico: '<path d="M3 3v18h18"/><path d="M7 16v-5M12 16V8M17 16v-9"/>',
    video: '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>',
    alerta: '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    lista: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    usuarios: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    timon: '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/><path d="M12 1v9M12 14v9M1 12h9M14 12h9M4.2 4.2l6.4 6.4M13.4 13.4l6.4 6.4M19.8 4.2l-6.4 6.4M10.6 13.4l-6.4 6.4"/>',
    magia: '<path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
    birrete: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
    ojo: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',
    correo: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
    whatsapp: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
    bombilla: '<path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>',
    balanza: '<path d="M12 3v18M5 21h14M3 7h18"/><path d="m6 7-3 7a3 3 0 0 0 6 0zM18 7l-3 7a3 3 0 0 0 6 0z"/>',
    calendario: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    usuario: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    flecha: '<path d="M15 18l-6-6 6-6"/>',
    flechaD: '<path d="M9 18l6-6-6-6"/>'
  };
  function ico(n) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[n] || P.timon) + "</svg>"; }

  // ---------- Utilidades ----------
  function $(s, r) { return (r || document).querySelector(s); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function toast(msg, ms, accion) {
    var t = $("#aviso"); t.innerHTML = esc(msg); t.hidden = false;
    if (accion) { var b = el("button", null, esc(accion.texto)); b.onclick = accion.fn; t.appendChild(b); }
    clearTimeout(toast._t); if (ms !== 0) toast._t = setTimeout(function () { t.hidden = true; }, ms || 2600);
  }
  var cargados = {};
  function cargarScript(url) {
    if (!cargados[url]) cargados[url] = new Promise(function (ok, mal) {
      var s = document.createElement("script"); s.src = url; s.onload = ok; s.onerror = function () { delete cargados[url]; mal(new Error("No se pudo cargar " + url)); }; document.head.appendChild(s);
    });
    return cargados[url];
  }
  function hoyLargo() { return new Date().toLocaleDateString("es-CL", { weekday: "long", year: "numeric", month: "long", day: "numeric" }); }
  function hostPermitido(url) {
    try {
      var u = new URL(url, location.href); if (!/^https?:$/.test(u.protocol)) return false;
      if (u.host === location.host) return true;
      return DOMINIOS_PERMITIDOS.some(function (d) { return u.hostname === d || u.hostname.slice(-(d.length + 1)) === "." + d; });
    } catch (e) { return false; }
  }

  // ---------- Estado (solo en memoria) ----------
  var KB = window.BASE_CONOCIMIENTO || { documentos: [], fragmentos: [] };
  var BASE = window.DATOS_BASE;
  var estado = {
    perfil: { rol: "", cargo: "", funciones: "" },
    pasoPerfil: "rol",            // rol -> cargo -> listo
    mensajes: [],                 // historial para la IA {role, content}
    respuestas: [],               // datos de cada respuesta (para PDF / compartir)
    web: false,
    servidor: "pendiente",        // pendiente | ok | local
    catalogo: null,
    asistente: null,              // asistente de materiales
    ocupado: false
  };
  var URL_SERVIDOR = (window.URL_SERVIDOR || "").trim();

  // Catálogo (datos del panel) – no es personal, se puede guardar para modo sin conexión
  function catalogoEfectivo() {
    var c = estado.catalogo || {};
    function mezclar(base, extra) { var r = {}; Object.keys(base).forEach(function (k) { r[k] = base[k]; }); Object.keys(extra || {}).forEach(function (k) { if (extra[k]) r[k] = extra[k]; }); return r; }
    return {
      info: mezclar(BASE.info, c.info), pei: mezclar(BASE.pei, c.pei),
      cargos: (c.cargos && c.cargos.length) ? c.cargos : BASE.cargos,
      documentos: c.documentos || [], ocultos: c.ocultos || []
    };
  }
  function docsBaseVisibles() { var o = catalogoEfectivo().ocultos; return KB.documentos.filter(function (d) { return o.indexOf(d.id) < 0; }); }
  function docBase(id) { for (var i = 0; i < KB.documentos.length; i++) if (KB.documentos[i].id === id) return KB.documentos[i]; return null; }

  // =====================================================================
  //  BÚSQUEDA LOCAL (BM25) sobre los documentos del establecimiento
  // =====================================================================
  var VACIAS = ("a al algo algun alguna algunas alguno algunos ante antes aqui asi aun cada como con contra cual cuales cuando de del desde donde dos el ella ellas ellos " +
    "en entre era eran es esa esas ese eso esos esta estas este esto estos fue fueron ha hace hacer han hasta hay la las le les lo los mas me mi mis mucho muy " +
    "nada ni no nos nosotros o otra otras otro otros para pero poco por porque que quien se ser si sin sobre su sus tambien tan tanto te tiene tienen todo todos " +
    "tu tus un una unas uno unos y ya yo debo debe deben puedo puede pueden hago caso cosa sea soy estoy tengo quiero necesito favor hola gracias segun cual cuales colegio").split(" ");
  var vaciasSet = {}; VACIAS.forEach(function (w) { vaciasSet[w] = 1; });
  var SINONIMOS = {
    nota: "calificacion", notas: "calificaciones", prueba: "evaluacion", pruebas: "evaluaciones", examen: "evaluacion", control: "evaluacion",
    pelea: "agresion violencia", golpe: "agresion fisica", golpes: "agresion fisica", bullying: "acoso hostigamiento", ciberbullying: "acoso ciberacoso redes",
    celular: "telefono dispositivo", celulares: "telefono dispositivos", atraso: "puntualidad atrasos", atrasos: "puntualidad", falta: "faltas inasistencia",
    repetir: "repitencia promocion", repite: "repitencia promocion", repitencia: "promocion", pasar: "promocion", reprobar: "reprobado promocion",
    copia: "plagio copia", plagio: "copia", suspension: "suspender medida", expulsion: "cancelacion matricula", expulsar: "expulsion cancelacion",
    droga: "drogas alcohol", drogas: "alcohol consumo", alcohol: "drogas", embarazo: "embarazada maternidad paternidad", suicidio: "ideacion suicida autolesiones",
    autolesion: "autolesiones ideacion", crisis: "desregulacion emocional", desregulacion: "emocional conductual", tea: "autista espectro", autismo: "tea espectro",
    accidente: "accidentes escolares seguro", salida: "salidas pedagogicas giras", gira: "salidas pedagogicas", uniforme: "presentacion personal",
    apoderado: "apoderados padres", reunion: "reuniones apoderados", medicamento: "medicamentos administracion", abuso: "agresiones sexuales connotacion vulneracion",
    vulneracion: "derechos maltrato", asistencia: "inasistencia asistencia porcentaje", ausente: "inasistencia ausencia", falto: "inasistencia ausencia",
    pendiente: "pendientes atrasadas", reevaluar: "reevaluacion", reevaluacion: "reevaluar", pie: "integracion nee adecuaciones", nee: "necesidades educativas especiales pie",
    utp: "unidad tecnico pedagogica", sismo: "terremoto evacuacion pise", evacuacion: "pise emergencia", incendio: "pise emergencia evacuacion",
    sancion: "medidas disciplinarias", sanciones: "medidas disciplinarias", medida: "medidas formativas", debido: "debido proceso", cierre: "cierre anticipado",
    eximir: "eximicion", eximicion: "eximir", diferenciada: "diversificada adecuaciones", agresion: "violencia maltrato"
  };
  function normalizar(t) { return String(t || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9ñ]+/g, " ").trim(); }
  var SUFIJOS = ["amientos", "imientos", "amiento", "imiento", "aciones", "iciones", "uciones", "mente", "ciones", "siones", "idades", "ancias", "encias", "cion", "sion", "idad", "ables", "ibles",
    "able", "ible", "istas", "ista", "ados", "adas", "idos", "idas", "ado", "ada", "ido", "ida", "ores", "oras", "ivos", "ivas", "ivo", "iva", "ales", "es", "os", "as", "or", "al", "ar", "er", "ir", "s", "a", "o", "e"];
  function raiz(w) { if (w.length <= 4) return w; for (var i = 0; i < SUFIJOS.length; i++) { var s = SUFIJOS[i]; if (w.length - s.length >= 4 && w.slice(-s.length) === s) return w.slice(0, -s.length); } return w; }
  function terminos(t, expandir) {
    var ws = normalizar(t).split(" "), out = [];
    ws.forEach(function (w) {
      if (!w || vaciasSet[w] || (w.length < 3 && !/^\d+$/.test(w))) return;
      out.push(raiz(w));
      if (expandir && SINONIMOS[w]) SINONIMOS[w].split(" ").forEach(function (x) { if (!vaciasSet[x]) out.push(raiz(x)); });
    });
    return out;
  }
  var indice = null;
  function construirIndice() {
    var docs = KB.fragmentos.map(function (f, i) {
      var toks = terminos((f.s || "") + " " + (f.s || "") + " " + f.t), tf = {};
      toks.forEach(function (w) { tf[w] = (tf[w] || 0) + 1; });
      return { i: i, tf: tf, len: toks.length };
    });
    var df = {}, total = 0;
    docs.forEach(function (d) { total += d.len; Object.keys(d.tf).forEach(function (w) { df[w] = (df[w] || 0) + 1; }); });
    indice = { docs: docs, df: df, N: docs.length, prom: total / Math.max(1, docs.length) };
  }
  // Reglas de intención: frases frecuentes que se expanden con el vocabulario de los reglamentos
  var INTENCIONES = [
    [/(falt|ausen|no (vino|asisti|se present)|inasist)[\s\S]*(prueba|evaluaci|examen|control|disertaci)|(prueba|evaluaci|examen|control)[\s\S]*(falt|ausen|inasist|no (vino|asisti))/i, "evaluaciones pendientes ausente rendir instancia reincorporacion protocolo"],
    [/(cu[aá]ntas|cantidad|n[uú]mero de)[\s\S]*(notas|calificaciones)/i, "cantidad calificaciones semestre registrar asignatura"],
    [/reevalu|(60|sesenta) ?%|todo el curso|curso completo/i, "reevaluacion aprobados porcentaje curso instrumento"],
    [/promoci|repit|pasa(r)? de curso|aprobar el a[nñ]o/i, "promocion promovidos asistencia reprobado promedio"],
    [/pelea|golpe|agred|agresi/i, "agresion violencia fisica maltrato protocolo"],
    [/celular|tel[eé]fono m[oó]vil|redes sociales/i, "dispositivos telefono celular tecnologicos"],
    [/copi(a|ar|ando)|plagi|torpedo/i, "copia plagio suplantacion evaluacion"],
    [/cierre anticipado|terminar el a[nñ]o/i, "cierre anticipado ano escolar solicitud"],
    [/atras(o|ada|ado)s?\b|llega(r)? tarde/i, "atrasos puntualidad ingreso jornada"]
  ];
  var EVAL = /evaluaci|calific|nota|prueba|promoci|repit|examen|reevalu|eximi|adecuaci|asistencia/i;
  // Temas generales (solo se cuenta el tema, de forma anónima, para las estadísticas del panel)
  var TEMAS = [
    ["Protección de derechos y salud mental", /vulnera|abuso|connotaci[oó]n sexual|agresi[oó]n sexual|suicid|autoles|droga|marihuana|alcohol|embaraz|maternidad|paternidad|medicament/i],
    ["Acoso, violencia y maltrato", /\bpeg[oóaué]|pegar|patad|pu[nñ]et|\bcombos?\b|herid|acoso|bullying|ciberacoso|ciberbullying|violen|agresi|pelea|golpe|maltrato|discrimin|amenaz/i],
    ["Faltas, medidas y debido proceso", /falta|sanci[oó]n|sanciones|medida|suspen|expuls|cancelaci[oó]n|condicional|debido proceso|anotaci|disciplin|aula segura/i],
    ["Inclusión, NEE, PIE y TEA", /\bpie\b|\bnee\b|\btea\b|autis|adecuaci|\bpaci\b|\bpai\b|diversific|diferenciad|desregula|inclusi/i],
    ["Promoción, asistencia y repitencia", /promoci|repit|asistencia|inasistencia|cierre anticipado|85 ?%/i],
    ["Evaluación y calificaciones", /evaluaci|calific|\bnotas?\b|prueba|examen|reevalu|eximi|r[uú]brica|instrumento|plagio|copia/i],
    ["Seguridad escolar, accidentes y salidas", /accidente|\bpise\b|evacuaci|sismo|incendio|salida|gira|emergencia|seguridad/i],
    ["Apoderados y comunicación", /apoderad|reuni[oó]n|comunicaci|entrevista|padres|familia/i],
    ["Normas generales (uniforme, horarios, celular)", /uniforme|presentaci[oó]n personal|celular|horario|atraso|puntualidad|recreo|comedor|laboratorio/i],
    ["PEI, misión y sellos", /\bpei\b|misi[oó]n|visi[oó]n|sello|valores/i]
  ];
  function esAusenciaEvaluacion(t) { return INTENCIONES[0][0].test(t); }   // "faltó a una prueba" no es una falta disciplinaria
  function clasificarTema(t) {
    if (esAusenciaEvaluacion(t) && !/sanci|anotaci|disciplin|copi|plagi/i.test(t)) return "Evaluación y calificaciones";
    for (var i = 0; i < TEMAS.length; i++) if (TEMAS[i][1].test(t)) return TEMAS[i][0]; return "Otros temas"; }
  // Hechos que podrían ser delito: se agrega la revisión penal (denuncia, Ley 20.084, Código Penal y Civil)
  var RE_DELITO = /\bpeg[oóaué]|pegar|patad|pu[nñ]et|\bcombos?\b|herid|sangr|quebr|fractur|golpe|golpi|agresi[oó]n f[ií]sica|agredi|lesi[oó]n|lesiones|pelea|amenaz|abus|acoso sexual|connotaci[oó]n sexual|violaci[oó]n|tocaci|grooming|im[aá]genes [ií]ntimas|fotos [ií]ntimas|video [ií]ntimo|nudes|sexting|droga|marihuana|tr[aá]fico|microtr[aá]fico|\barmas?\b|cuchillo|navaja|pistola|robo|rob[oó]|hurt|da[nñ]os? a|destroz|vandal|incendi|extorsi|maltrato (f[ií]sico|de un adulto|por parte)|funcionario (agred|golpe|maltrat)|ciberacoso|suplantaci[oó]n de identidad|delito/i;
  // Consultas donde conviene recordar derechos de los estudiantes (LGE arts. 10, 10 bis y 11)
  var RE_DERECHOS = /derecho|celular|tel[eé]fono|dispositivo|embaraz|maternidad|paternidad|matr[ií]cula|repit|discrimin|medicament|tdah|identidad de g[eé]nero|nombre social|religi|opini[oó]n|inclusi|\btea\b|autis|\bnee\b|\bpie\b|expuls|cancelaci|suspen|condicional|uniforme|corte de pelo|cabello|retir/i;
  var RE_DISCIPLINA = /falta|sanci[oó]n|sanciones|medida disciplin|suspen|expuls|cancelaci[oó]n de matr|condicionalidad|debido proceso|aula segura|anotaci/i;
  function buscar(consulta, k) {
    if (!indice) construirIndice();
    var extra = INTENCIONES.filter(function (r) { return r[0].test(consulta); }).map(function (r) { return r[1]; }).join(" ");
    var q = terminos(consulta + " " + extra, true); if (!q.length) return [];
    var esEval = EVAL.test(consulta);
    var ocultos = catalogoEfectivo().ocultos, k1 = 1.3, b = 0.72, res = [];
    var qset = {}; q.forEach(function (w) { qset[w] = (qset[w] || 0) + 1; });
    indice.docs.forEach(function (d) {
      var f = KB.fragmentos[d.i]; if (ocultos.indexOf(f.d) >= 0) return;
      var s = 0;
      Object.keys(qset).forEach(function (w) {
        var tf = d.tf[w]; if (!tf) return;
        var idf = Math.log(1 + (indice.N - indice.df[w] + 0.5) / (indice.df[w] + 0.5));
        s += qset[w] * idf * (tf * (k1 + 1)) / (tf + k1 * (1 - b + b * d.len / indice.prom));
      });
      if (esEval && f.d === "rep2026") s *= 1.6;
      if (s > 0) res.push({ f: f, puntaje: s });
    });
    res.sort(function (a, b2) { return b2.puntaje - a.puntaje; });
    return res.slice(0, k || 5);
  }
  function etiquetaFuente(f) {
    var d = docBase(f.d) || { corto: f.d };
    if (f.d === "rie") return "Reglamento Interno Escolar 2025, p. " + f.p + (f.s ? " · " + f.s : "");
    return d.corto + (f.s ? " · " + f.s : "");
  }
  function extracto(texto, consulta, max) {
    var q = terminos(consulta, true), frases = texto.replace(/\n+/g, " ").replace(/([.;:])\s+/g, "$1\u0001").split("\u0001");
    var punt = frases.map(function (fr, i) { var t = terminos(fr), s = 0; q.forEach(function (w) { if (t.indexOf(w) >= 0) s++; }); return { i: i, s: s, fr: fr }; });
    var mejores = punt.filter(function (x) { return x.s > 0; }).sort(function (a, b) { return b.s - a.s; }).slice(0, 4).sort(function (a, b) { return a.i - b.i; });
    var out = (mejores.length ? mejores : punt.slice(0, 3)).map(function (x) { return x.fr; }).join(" … ");
    return out.length > (max || 650) ? out.slice(0, max || 650).replace(/\s+\S*$/, "") + "…" : out;
  }
  function normativaPara(consulta, n) {
    var q = terminos(consulta, true), lista = BASE.normativa.concat([]);
    return lista.map(function (x) { var t = terminos(x.claves), s = 0; q.forEach(function (w) { if (t.indexOf(w) >= 0) s++; }); return { x: x, s: s }; })
      .filter(function (o) { return o.s > 0; }).sort(function (a, b) { return b.s - a.s; }).slice(0, n || 4).map(function (o) { return o.x; });
  }
  function fuentesPara(consulta, n) {
    var q = terminos(consulta, true);
    return BASE.fuentes.map(function (x) { var t = terminos(x.claves + " " + x.titulo), s = 0; q.forEach(function (w) { if (t.indexOf(w) >= 0) s++; }); return { x: x, s: s }; })
      .filter(function (o) { return o.s > 0; }).sort(function (a, b) { return b.s - a.s; }).slice(0, n || 3).map(function (o) { return o.x; });
  }

  // =====================================================================
  //  PRIVACIDAD (Ley N° 21.719): detectar y anonimizar antes de enviar
  // =====================================================================
  var PERMITIDAS = ("Colegio Marina Chile Concepción Andalién Sur Servicio Local Educación Pública Ministerio Superintendencia Agencia Calidad Ley Decreto Reglamento Interno Escolar " +
    "Evaluación Convivencia Proyecto Educativo Institucional UTP PIE PISE PEI PME SEP SLEP TEA NEE PACI PAI PAEC Lenguaje Matemática Matemáticas Historia Geografía Ciencias Naturales Sociales Física " +
    "Química Biología Inglés Artes Visuales Música Tecnología Religión Orientación Comunicación Literatura Filosofía Psicología Deporte Deportes Salud Básico Básica Medio Media Parvularia Kínder Pre " +
    "Lunes Martes Miércoles Jueves Viernes Sábado Domingo Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre Consejo Profesores Equipo Directivo Dirección " +
    "Inspectoría General Unidad Técnica Pedagógica Plan Gestión Integral Seguridad Programa Integración Centro Padres Apoderados Estudiantes Alumnos Biobío Chile Mineduc Junaeb Senda OPD Carabineros " +
    "PDI Fiscalía Tribunal Familia CESFAM Hospital Bases Curriculares Marco Buena Enseñanza Aula Segura Karin Hola Buenos Buenas Días Tardes Gracias Por Favor Qué Cómo Cuál Cuándo Dónde Quién Necesito " +
    "Quiero Puedes Podrías Ayúdame Explica Resume Dame Haz Crea Diseña Soy Tengo Hay El La Los Las Un Una En De Del Al Si No Mi Me Para Con Sin Sobre Según Cuántas Cuántos Profesor Profesora Jefe Jefa " +
    "Además También Ayer Hoy Mañana Luego Después Entonces Pero Cuando Este Esta Ese Esa Nuestro Nuestra Durante Desde Hace Ahora Primero Estimado Estimada Querido Querida Saludos Buen Gran Atte " +
    "Señor Señora Don Doña Alumno Alumna Estudiante Apoderado Apoderada Curso Nivel Ciclo Semestre Unidad Objetivo Guía Prueba Rúbrica Taller Acta Informe Carta Comunicado Protocolo Artículo Art").split(" ");
  var permitidasSet = {}; PERMITIDAS.forEach(function (w) { permitidasSet[normalizar(w)] = 1; });
  var DISPARADORES = "alumno|alumna|estudiante|niño|niña|nino|nina|apoderado|apoderada|mamá|mama|papá|papa|madre|padre|abuela|abuelo|hijo|hija|profesor|profesora|docente|funcionario|funcionaria|" +
    "inspector|inspectora|asistente|tía|tia|tío|tio|don|doña|dona|sr\\.?|sra\\.?|señor|señora|senor|senora|joven|compañero|compañera|llamado|llamada|nombre|apellido|colega";
  var RE_NOMBRE_DISP = new RegExp("\\b(" + DISPARADORES + ")\\s+((?:[A-ZÁÉÍÓÚÑ][a-záéíóúñü]+)(?:\\s+[A-ZÁÉÍÓÚÑ][a-záéíóúñü]+){0,3})", "g");
  var RE_MAYUS_SEGUIDAS = /(^|[^A-Za-zÁÉÍÓÚÑáéíóúñü])((?:[A-ZÁÉÍÓÚÑ][a-záéíóúñü]+)(?:[ \t]+[A-ZÁÉÍÓÚÑ][a-záéíóúñü]+)+)(?![A-Za-zÁÉÍÓÚÑáéíóúñü])/g;
  var RE_RUT = /\b\d{1,2}\.?\d{3}\.?\d{3}\s*-\s*[\dkK]\b/g;
  var RE_CORREO = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;
  var RE_FONO = /(?:\+?56[\s-]?)?(?:\(?0?\d{1,2}\)?[\s-]?)?\b9[\s-]?\d{4}[\s-]?\d{4}\b|\+56[\s-]?\d{2}[\s-]?\d{3}[\s-]?\d{4}\b/g;
  var RE_SALUD = /\b(diagn[oó]stic\w*|tea\b|tdah|autis\w*|epilep\w*|diab[eé]t\w*|depresi\w*|ansiedad|medicament\w*|licencia m[eé]dica|psiqui[aá]tr\w*|embaraz\w*|vih|enfermedad\w*|discapacidad\w*|trastorno\w*|suicid\w*|autolesi\w*)/i;

  function analizarPrivacidad(texto) {
    var hallazgos = [], anon = texto;
    function marcar(tipo, re, reemplazo) {
      anon = anon.replace(re, function (m) { hallazgos.push({ tipo: tipo, valor: m }); return reemplazo; });
    }
    marcar("RUT", RE_RUT, "[RUT]");
    marcar("correo", RE_CORREO, "[CORREO]");
    marcar("teléfono", RE_FONO, "[TELÉFONO]");
    anon = anon.replace(RE_NOMBRE_DISP, function (m, disp, nombre) {
      var partes = nombre.split(/\s+/).filter(function (p) { return !permitidasSet[normalizar(p)]; });
      if (!partes.length) return m;
      hallazgos.push({ tipo: "nombre", valor: nombre });
      var etiqueta = /alumn|estudiante|niñ|nin|hij|joven|compañer/i.test(disp) ? "[ESTUDIANTE]" : /apoderad|mam|pap|madre|padre|abuel/i.test(disp) ? "[APODERADO/A]" : "[PERSONA]";
      return disp + " " + etiqueta;
    });
    anon = anon.replace(RE_MAYUS_SEGUIDAS, function (m, pre, seq) {
      var ws = seq.split(/[ \t]+/), i = 0;
      while (i < ws.length && permitidasSet[normalizar(ws[i])]) i++;          // palabras comunes al inicio ("Además", "El"…)
      var resto = ws.slice(i), desconocidas = resto.filter(function (w) { return !permitidasSet[normalizar(w)]; });
      if (desconocidas.length < 2) return m;
      hallazgos.push({ tipo: "nombre", valor: resto.join(" ") });
      return pre + (i ? ws.slice(0, i).join(" ") + " " : "") + "[PERSONA]";
    });
    var hayIdent = hallazgos.length > 0;
    var salud = hayIdent && RE_SALUD.test(texto);
    return { hallazgos: hallazgos, anonimo: anon, salud: salud, soloNombres: hallazgos.every(function (h) { return h.tipo === "nombre"; }) };
  }

  // =====================================================================
  //  PERFIL (rol y cargo) – dura solo esta conversación
  // =====================================================================
  var PATRONES_CARGO = [
    [/\b(jef[ae]s?\s+(de\s+)?(la\s+)?utp|utp|jef[ae]\s+t[eé]cnic|unidad t[eé]cnica)/i, "Equipo directivo y de gestión", "Jefe/a de UTP"],
    [/\b(subdirector|subdirectora)/i, "Equipo directivo y de gestión", "Subdirector/a"],
    [/\b(director|directora)\b/i, "Equipo directivo y de gestión", "Director/a"],
    [/\binspector[a]?\s+general/i, "Equipo directivo y de gestión", "Inspector/a general"],
    [/\b(encargad[oa]\s+de\s+convivencia|convivencia escolar)/i, "Equipo directivo y de gestión", "Encargado/a de convivencia escolar"],
    [/\b(coordinador[a]?\s+(del\s+)?pie)/i, "Equipo directivo y de gestión", "Coordinador/a PIE"],
    [/\borientador[a]?\b/i, "Equipo directivo y de gestión", "Orientador/a"],
    [/\b(educador[a]?\s+diferencial|profesor[a]?\s+diferencial|educadora pie|profesora pie)/i, "Docente", "Educador/a diferencial (PIE)"],
    [/\b(educador[a]?\s+de\s+p[aá]rvulos|parvularia)/i, "Docente", "Educador/a de párvulos"],
    [/\b(profesor[a]?\s+jef[ae])/i, "Docente", "Profesor/a jefe"],
    [/\b(psic[oó]log[oa])/i, "Asistente de la educación", "Psicólogo/a"],
    [/\b(trabajador[a]?\s+social|asistente social)/i, "Asistente de la educación", "Trabajador/a social"],
    [/\b(fonoaudi[oó]log[oa]|psicopedagog[oa])/i, "Asistente de la educación", "Fonoaudiólogo/a o Psicopedagogo/a"],
    [/\b(inspector[a]?(\s+de\s+patio)?|paradocente)\b/i, "Asistente de la educación", "Inspector/a de patio"],
    [/\b(asistente\s+de\s+aula|t[eé]cnic[oa]\s+(en\s+)?(de\s+)?(p[aá]rvulos|educaci))/i, "Asistente de la educación", "Asistente de aula / Técnico/a"],
    [/\b(secretari[oa]|administrativ[oa])/i, "Asistente de la educación", "Administrativo/a o Secretaría"],
    [/\b(auxiliar|servicios menores)/i, "Asistente de la educación", "Auxiliar de servicios"],
    [/\b(encargad[oa]\s+(del?\s+)?cra|bibliotec)/i, "Asistente de la educación", "Encargado/a CRA (biblioteca)"],
    [/\b(profesor[a]?|docente|maestr[oa])\b/i, "Docente", "Profesor/a de asignatura"],
    [/\b(directiv[oa]|equipo de gesti[oó]n)/i, "Equipo directivo y de gestión", ""],
    [/\basistente(s)?\s+de\s+la\s+educaci[oó]n/i, "Asistente de la educación", ""]
  ];
  var RE_PRESENTACION = /\b(soy|trabajo como|trabajo de|me desempeño como|me desempeno como|mi cargo es|mi rol es|cargo:|rol:)\s+/i;
  function detectarPerfil(texto) {
    var m = texto.match(RE_PRESENTACION), objetivo;
    if (m) objetivo = texto.slice(m.index + m[0].length).split(/[,.;?¿!]/)[0];
    else if (estado.pasoPerfil !== "listo" && texto.length <= 40 && !/[?¿]/.test(texto) && !/^\s*(qu[eé]|c[oó]mo|cu[aá]l|cu[aá]ndo|d[oó]nde|qui[eé]n|por qu[eé]|resum|expl|dime|necesito)/i.test(texto)) objetivo = texto;
    else return null;
    for (var i = 0; i < PATRONES_CARGO.length; i++) { if (PATRONES_CARGO[i][0].test(objetivo)) return { rol: PATRONES_CARGO[i][1], cargo: PATRONES_CARGO[i][2] }; }
    return null;
  }
  function funcionesDe(cargo) { var c = catalogoEfectivo().cargos; for (var i = 0; i < c.length; i++) if (c[i].cargo === cargo) return c[i].funciones; return ""; }
  function fijarPerfil(rol, cargo) {
    estado.perfil = { rol: rol || estado.perfil.rol, cargo: cargo || "", funciones: funcionesDe(cargo) };
    estado.pasoPerfil = "listo";
    pintarPerfil();
  }
  function pintarPerfil() {
    var c = $("#perfilChip"), p = estado.perfil;
    if (!p.rol && !p.cargo) { c.hidden = true; return; }
    c.hidden = false;
    c.innerHTML = ico("usuario") + " " + esc(p.cargo || p.rol) + (p.cargo && p.rol ? " · " + esc(p.rol) : "") + ' <button type="button" id="cambiarPerfil">Cambiar</button>';
    $("#cambiarPerfil").onclick = function () { preguntarRol(true); };
  }
  var SUGERENCIAS = {
    "Docente": ["¿Qué hago si un estudiante falta a una prueba?", "¿Cuántas calificaciones debo registrar por semestre?", "¿Cuándo debo reevaluar a todo el curso?", "¿Cómo actúo ante una agresión en la sala?"],
    "Equipo directivo y de gestión": ["¿Cómo funciona la promoción con asistencia menor a 85%?", "¿Qué pasos tiene el debido proceso ante una falta gravísima?", "Resume el protocolo de vulneración de derechos", "¿Cómo se solicita el cierre anticipado del año escolar?"],
    "Asistente de la educación": ["¿Qué hago si presencio una pelea en el recreo?", "¿Cómo actuar ante un accidente escolar?", "¿Qué hacer ante una desregulación emocional?", "¿Cómo se administran medicamentos a estudiantes?"],
    "": ["¿Qué dice el reglamento sobre el uso de celulares?", "¿Cuáles son las faltas gravísimas?", "¿Cómo se calcula el promedio anual?", "¿Qué hacer ante un caso de ciberacoso?"]
  };

  // =====================================================================
  //  RENDER DE MENSAJES
  // =====================================================================
  var chat;
  // Brazos móviles: se activan solo si cargan las 3 piezas (cuerpo y dos brazos).
  // Mientras tanto, o si alguna falla, se muestra el estudiante completo (sin cortes).
  var brazosListos = false;
  function prepararBrazos() {
    var piezas = ["estudiante-cuerpo.png", "brazo-izq.png", "brazo-der.png"], listas = 0, error = false;
    piezas.forEach(function (src) {
      var im = new Image();
      im.onload = function () {
        if (++listas === piezas.length && !error) {
          brazosListos = true; document.documentElement.classList.add("brazos-listos");
          document.querySelectorAll(".encuadre img.cuerpo").forEach(function (i) { i.src = "estudiante-cuerpo.png"; });
        }
      };
      im.onerror = function () { error = true; };
      im.src = src;
    });
  }
  // Timón: imagen + boca animada + párpados (cada copia parpadea en un momento distinto)
  function mascotaHTML(clase) {
    var d = "animation-delay:" + (Math.random() * 3).toFixed(2) + "s", d2 = "animation-delay:-" + (Math.random() * 2).toFixed(2) + "s";
    return '<div class="mascota ' + (clase || "") + '" style="' + d2 + '"><div class="encuadre"><img class="cuerpo" src="' + (brazosListos ? "estudiante-cuerpo.png" : "estudiante.png") + '" alt="">' +
      '<img class="brazo izq" src="brazo-izq.png" alt=""><img class="brazo der" src="brazo-der.png" alt="">' +
      '<span class="boca"></span><span class="parpado izq" style="' + d + '"></span><span class="parpado der" style="' + d + '"></span></div></div>';
  }
  function bajar() { setTimeout(function () { chat.scrollTo({ top: chat.scrollHeight, behavior: "auto" }); }, 30); }
  function irA(m) { setTimeout(function () { chat.scrollTo({ top: Math.max(0, m.offsetTop - 12), behavior: "auto" }); }, 30); }
  function msgIA(html, opciones) {
    var m = el("div", "msg ia"); m.innerHTML = '<div class="avatar">' + mascotaHTML() + '</div><div class="burbuja"><div class="contenido"></div></div>';
    $(".contenido", m).innerHTML = html || ""; chat.appendChild(m); if (!(opciones && opciones.sinBajar)) bajar(); return m;
  }
  function msgYo(texto) { var m = el("div", "msg yo"); var b = el("div", "burbuja"); b.textContent = texto; m.appendChild(b); chat.appendChild(m); bajar(); return m; }
  function hablar(m, ms) { var mc = $(".mascota", m); if (!mc) return; mc.classList.add("hablando"); setTimeout(function () { mc.classList.remove("hablando"); }, ms || 1800); }

  function chips(lista, alElegir, opts) {
    var cont = el("div", "chips");
    lista.forEach(function (t) {
      var b = el("button", "chip" + (/^Otro/.test(t) ? " amarillo" : ""), esc(t)); b.type = "button";
      b.onclick = function () {
        if (cont.classList.contains("usados") && !(opts && opts.multiple)) return;
        if (/^Otro: escribir/.test(t)) { pedirTextoLibre(cont, function (v) { b.classList.add("marcado"); cont.classList.add("usados"); alElegir(v, true); }); return; }
        b.classList.add("marcado"); if (!(opts && opts.multiple)) cont.classList.add("usados"); alElegir(t, false);
      };
      cont.appendChild(b);
    });
    return cont;
  }
  function pedirTextoLibre(cont, listo) {
    if (cont.nextSibling && cont.nextSibling.classList && cont.nextSibling.classList.contains("otro-campo")) { $("input", cont.nextSibling).focus(); return; }
    var f = el("form", "otro-campo", '<input type="text" maxlength="120" placeholder="Escribe aquí…" aria-label="Escribe tu respuesta"><button class="boton" type="submit">Listo</button>');
    f.onsubmit = function (e) { e.preventDefault(); var v = $("input", f).value.trim(); if (!v) return; f.remove(); listo(v); };
    cont.parentNode.insertBefore(f, cont.nextSibling); $("input", f).focus();
  }

  // ---------- Bienvenida ----------
  function bienvenida() {
    chat.innerHTML = "";
    var info = catalogoEfectivo().info;
    var w = el("section", "bienvenida");
    w.innerHTML = '<div class="figura">' + mascotaHTML("hablando") + '</div><div class="texto">' +
      "<h1>¡Hola! Soy Timón 👋</h1>" +
      "<p>Soy el asistente virtual del <b>" + esc(info.nombre) + "</b>, " + esc(info.dependencia) + ". Te ayudo a revisar y aplicar el <b>Reglamento Interno</b> y el <b>Reglamento de Evaluación 2026</b>, citando siempre la fuente.</p>" +
      "</div>" +
      '<div class="privacidad">' + ico("escudoOk") + "<div><b>Protección de datos (Ley N° 21.719):</b> no escribas nombres, RUT, correos, teléfonos ni datos de salud de estudiantes, familias o funcionarios. Si los detecto, te propondré una versión anónima. No guardo el contenido de tus consultas; solo se cuenta, de forma anónima, el tema general y el rol para estadísticas del colegio.</div></div>";
    chat.appendChild(w);
    setTimeout(function () { var mc = $(".mascota", w); if (mc) { mc.classList.remove("hablando"); mc.classList.add("saluda"); } }, 3800);
    preguntarRol(false);
  }
  function preguntarRol(cambio) {
    estado.pasoPerfil = "rol";
    var m = msgIA("<p>" + (cambio ? "Claro, ¿cuál es tu <b>rol</b>?" : "Para ajustar mis respuestas, ¿cuál es tu <b>rol</b> en el colegio?") + " Toca una opción o escríbelo con tus palabras. También puedes hacer tu pregunta directamente.</p>", { sinBajar: !cambio });
    $(".contenido", m).appendChild(chips(BASE.roles.concat(["Otro: escribir"]), function (v, libre) {
      if (libre) { var d = detectarPerfil("soy " + v); if (d) { fijarPerfil(d.rol, d.cargo || v); confirmarPerfil(); } else { fijarPerfil(v, v); confirmarPerfil(); } return; }
      fijarPerfil(v, ""); confirmarPerfil();
    }));
    hablar(m);
  }
  function confirmarPerfil() {
    var p = estado.perfil;
    var m = msgIA("<p>¡Perfecto! Te responderé según tu rol de <b>" + esc(p.cargo || p.rol || "integrante de la comunidad") + "</b>, con el Reglamento Interno y el Reglamento de Evaluación 2026. ¿En qué te ayudo? Aquí tienes algunas ideas:</p>");
    var sug = SUGERENCIAS[p.rol] || SUGERENCIAS[""];
    $(".contenido", m).appendChild(chips(sug, function (v) { enviarConsulta(v); }, { multiple: true }));
    hablar(m);
  }

  // =====================================================================
  //  MARKDOWN → bloques (sirve para HTML y para el PDF)
  // =====================================================================
  // Lee el bloque de preguntas aunque la IA cometa errores menores de formato
  function leerOpciones(txt) {
    var limpio = String(txt).replace(/[“”]/g, '"').replace(/,\s*([\]}])/g, "$1").trim();
    try { var j = JSON.parse(limpio); if (Array.isArray(j)) j = { preguntas: j }; if (j && (j.preguntas || j.questions)) return j; } catch (e) { }
    var preguntas = [], re = /"(?:pregunta|texto)"\s*:\s*"([^"]+)"\s*,\s*"opciones"\s*:\s*\[([^\]]*)\]/g, m;
    while ((m = re.exec(limpio))) preguntas.push({ pregunta: m[1], opciones: (m[2].match(/"([^"]+)"/g) || []).map(function (s) { return s.slice(1, -1); }) });
    return preguntas.length ? { preguntas: preguntas } : null;
  }
  function aBloques(texto) {
    var lineas = String(texto || "").replace(/\r/g, "").split("\n"), bl = [], i = 0, parrafo = [];
    function cerrarP() { if (parrafo.length) { bl.push({ t: "p", x: parrafo.join("\n") }); parrafo = []; } }
    while (i < lineas.length) {
      var l = lineas[i].replace(/^\s*\*\*\s*(#{1,6}\s+[^*]+?)\s*\*\*\s*$/, "$1");   // "**### Título**" → "### Título"
      var fence = l.match(/^\s*```\s*([\wáéíóú-]*)\s*$/i);
      if (fence) {
        cerrarP(); var tipo = (fence[1] || "").toLowerCase(), cuerpo = []; i++;
        while (i < lineas.length && !/^\s*```\s*$/.test(lineas[i])) { cuerpo.push(lineas[i]); i++; }
        i++; var txt = cuerpo.join("\n");
        if (/^(grafico|gráfico|chart)$/.test(tipo)) { try { bl.push({ t: "graf", d: JSON.parse(txt) }); } catch (e) { } }
        else if (/^(opciones|preguntas)$/.test(tipo)) { var op = leerOpciones(txt); if (op) bl.push({ t: "opc", d: op }); }
        else bl.push({ t: "pre", x: txt });
        continue;
      }
      var h = l.match(/^\s*(#{1,6})\s+(.+?)\s*#*\s*$/);
      if (h) { cerrarP(); bl.push({ t: "h", n: Math.min(4, Math.max(2, h[1].length + (h[1].length === 1 ? 1 : 0))), x: h[2].replace(/\*\*/g, "") }); i++; continue; }
      if (/^\s*\|.*\|\s*$/.test(l)) {
        cerrarP(); var filas = [];
        while (i < lineas.length && /^\s*\|.*\|\s*$/.test(lineas[i])) {
          var celdas = lineas[i].trim().replace(/^\||\|$/g, "").split("|").map(function (c) { return c.trim(); });
          if (!celdas.every(function (c) { return /^:?-{2,}:?$/.test(c); })) filas.push(celdas);
          i++;
        }
        if (filas.length) bl.push({ t: "tabla", filas: filas }); continue;
      }
      var li = l.match(/^\s*([-*•]|\d+[.)])\s+(.*)$/);
      if (li) {
        cerrarP(); var ordenada = /\d/.test(li[1]), items = [];
        while (i < lineas.length) {
          var m2 = lineas[i].match(/^(\s*)([-*•]|\d+[.)])\s+(.*)$/);
          if (m2) { items.push({ x: m2[3], sub: m2[1].length >= 2 }); i++; continue; }
          if (/^\s{2,}\S/.test(lineas[i]) && items.length) { items[items.length - 1].x += " " + lineas[i].trim(); i++; continue; }
          break;
        }
        bl.push({ t: ordenada ? "ol" : "ul", items: items }); continue;
      }
      if (/^\s*>\s?/.test(l)) { cerrarP(); var q = []; while (i < lineas.length && /^\s*>\s?/.test(lineas[i])) { q.push(lineas[i].replace(/^\s*>\s?/, "")); i++; } bl.push({ t: "cita", x: q.join("\n") }); continue; }
      if (/^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(l)) { cerrarP(); bl.push({ t: "hr" }); i++; continue; }
      if (!l.trim()) { cerrarP(); i++; continue; }
      parrafo.push(l); i++;
    }
    cerrarP();
    return bl;
  }
  function enLinea(s) {
    var x = esc(String(s).replace(/<br\s*\/?>\s*[-•*]?\s*/gi, function (m) { return /[-•*]/.test(m) ? "\n• " : "\n"; }));
    x = x.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, function (m, t, u) {
      var url = u.replace(/&amp;/g, "&");
      return hostPermitido(url) ? '<a class="ext" href="' + esc(url) + '" target="_blank" rel="noopener">' + t + "</a>" : t;
    });
    x = x.replace(/(^|[\s(])(https?:\/\/[^\s<)]+[^\s<).,;:])/g, function (m, pre, u) {
      var url = u.replace(/&amp;/g, "&");
      if (!hostPermitido(url)) return pre;
      var corto = url.replace(/^https?:\/\/(www\.)?/, ""); if (corto.length > 42) corto = corto.slice(0, 40) + "…";
      return pre + '<a class="ext" href="' + esc(url) + '" target="_blank" rel="noopener">' + esc(corto) + "</a>";
    });
    x = x.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*\s][^*]*)\*/g, "$1<em>$2</em>").replace(/`([^`]+)`/g, "<code>$1</code>");
    x = enlazarNormas(x);
    return x.replace(/(^|\n)\s*[-*]\s+/g, "$1• ").replace(/\n/g, "<br>");
  }
  // Convierte en enlace (BCN) el nombre de una ley o código mencionado sin enlace, en la misma frase
  var NORMAS_AUTO = null;
  function enlazarNormas(html) {
    if (!NORMAS_AUTO) {
      NORMAS_AUTO = [];
      BASE.normativa.forEach(function (n) {
        var mLey = n.titulo.match(/^Ley (\d+)\.(\d+)/), mDec = n.titulo.match(/^Decreto (\d+)\/(\d{4})/);
        if (mLey) NORMAS_AUTO.push([new RegExp("\\b(Ley\\s+(?:N[°º]\\s*)?" + mLey[1] + "\\.?" + mLey[2] + ")\\b", "g"), n.url]);
        else if (mDec) NORMAS_AUTO.push([new RegExp("\\b(Decreto\\s+(?:N[°º]\\s*)?" + mDec[1] + "(?:\\s*(?:/|de)\\s*" + mDec[2] + ")?)\\b", "g"), n.url]);
        else if (/^Código Procesal Penal/.test(n.titulo)) NORMAS_AUTO.unshift([/\b(Código Procesal Penal)\b/g, n.url]);
        else if (/^Código Penal/.test(n.titulo)) NORMAS_AUTO.push([/\b(Código Penal)\b/g, n.url]);
        else if (/^Código Civil/.test(n.titulo)) NORMAS_AUTO.push([/\b(Código Civil)\b/g, n.url]);
      });
    }
    return html.split(/(<a\b[^>]*>[\s\S]*?<\/a>)/).map(function (parte) {
      if (/^<a\b/.test(parte)) return parte;
      NORMAS_AUTO.forEach(function (r) {
        parte = parte.replace(r[0], function (m, t, pos, todo) {
          if (/Procesal\s*$/.test(todo.slice(Math.max(0, pos - 9), pos))) return m;            // evita "Código Penal" dentro de "Código Procesal Penal"
          return '<a class="ext" href="' + r[1] + '" target="_blank" rel="noopener">' + t + "</a>";
        });
      });
      return parte;
    }).join("");
  }
  var ICONOS_TITULO = [
    [/delito|denuncia/i, "alerta", "#8E1B1B"],
    [/ajusta a derecho|a derecho/i, "balanza", "#C0392B"],
    [/en breve|resumen/i, "bombilla", "#D9A400"],
    [/profundizar/i, "timon", "#0E2A68"],
    [/qu[eé] establece/i, "libro", "#0E2A68"],
    [/protocolo|seguridad|riesgo|denuncia|urgente|alerta|importante|precauc/i, "escudo", "#D64545"],
    [/paso|procedimiento|c[oó]mo|etapa|acciones|qu[eé] hacer/i, "lista", "#1E4FA3"],
    [/evaluaci|nota|calific|promoci|asistencia|reevalu/i, "check", "#1E8E5A"],
    [/convivencia|falta|sanci|medida|disciplin|conflict/i, "usuarios", "#E67E22"],
    [/fuente|normativa|ley|decreto|reglamento|marco|legal/i, "balanza", "#0E2A68"],
    [/plazo|fecha|tiempo|calendario|cu[aá]ndo/i, "calendario", "#7E57C2"],
    [/recomend|sugerenc|consejo|idea|tip|orientaci/i, "bombilla", "#D9A400"],
    [/material|actividad|gu[ií]a|r[uú]brica|planific|taller|instrumento/i, "magia", "#2E9BD6"],
    [/video/i, "video", "#C4302B"], [/gr[aá]fic|dato|cifra|estad/i, "grafico", "#2E9BD6"],
    [/responsab|rol|cargo|funci[oó]n|qui[eé]n/i, "usuario", "#0E7C86"]
  ];
  function iconoTitulo(t) { for (var i = 0; i < ICONOS_TITULO.length; i++) if (ICONOS_TITULO[i][0].test(t)) return ICONOS_TITULO[i]; return [null, "timon", "#1E4FA3"]; }
  function bloquesHTML(bl) {
    return bl.map(function (b, idx) {
      switch (b.t) {
        case "h": var ic = iconoTitulo(b.x); return "<h" + b.n + (/profundizar/i.test(b.x) ? ' class="titulo-profundizar"' : "") + '><span class="ico-titulo" style="background:' + ic[2] + '">' + ico(ic[1]) + "</span>" + enLinea(b.x.replace(/^#+\s*/, "")) + "</h" + b.n + ">";
        case "p": return (idx > 0 && bl[idx - 1].t === "h" && /en breve|resumen/i.test(bl[idx - 1].x)) ? '<p class="en-breve">' + enLinea(b.x) + "</p>" : "<p>" + enLinea(b.x) + "</p>";
        case "pre": return "<p><code>" + esc(b.x).replace(/\n/g, "<br>") + "</code></p>";
        case "cita": return "<blockquote>" + enLinea(b.x) + "</blockquote>";
        case "hr": return "<hr>";
        case "ul": case "ol": return "<" + b.t + ">" + b.items.map(function (it) { return "<li" + (it.sub ? ' style="margin-left:18px"' : "") + ">" + enLinea(it.x) + "</li>"; }).join("") + "</" + b.t + ">";
        case "tabla": return '<div class="tabla-envoltura"><table><thead><tr>' + b.filas[0].map(function (c) { return "<th>" + enLinea(c) + "</th>"; }).join("") + "</tr></thead><tbody>" +
          b.filas.slice(1).map(function (f) { return "<tr>" + f.map(function (c, ci) { return '<td data-label="' + esc(String(b.filas[0][ci] || "").replace(/[*_`]/g, "")) + '">' + enLinea(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
        case "graf": return '<div class="grafico-hueco" data-i="' + idx + '"></div>';
        default: return "";
      }
    }).join("");
  }
  function textoPlano(texto) {
    return aBloques(texto).map(function (b) {
      var limpio = function (s) { return s.replace(/<br\s*\/?>/gi, " ").replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, function (m, t, u) { return hostPermitido(u) ? t + " (" + u + ")" : t; }).replace(/`/g, ""); };
      switch (b.t) {
        case "h": return "\n" + limpio(b.x).toUpperCase();
        case "p": case "cita": case "pre": return limpio(b.x);
        case "ul": return b.items.map(function (it) { return "• " + limpio(it.x); }).join("\n");
        case "ol": return b.items.map(function (it, k) { return (k + 1) + ". " + limpio(it.x); }).join("\n");
        case "tabla": return b.filas.map(function (f) { return f.map(limpio).join(" | "); }).join("\n");
        case "graf": return b.d && b.d.titulo ? "[Gráfico: " + b.d.titulo + " – Fuente: " + (b.d.fuente || "") + "]" : "";
        default: return "";
      }
    }).filter(Boolean).join("\n\n").trim();
  }

  // ---------- Gráficos (solo con datos reales y fuente) ----------
  var COLORES_BASE = ["#1E4FA3", "#F5C400", "#4FA3E0", "#0E2A68", "#E67E22", "#1E8E5A", "#7E57C2", "#D64545"];
  function graficoValido(d) {
    if (!d || typeof d !== "object" || !d.fuente || !String(d.fuente).trim()) return false;
    if (d.enlace && !hostPermitido(d.enlace)) return false;
    if (d.tipo === "cifras") return Array.isArray(d.cifras) && d.cifras.length > 0 && d.cifras.every(function (c) { return isFinite(parseFloat(c.valor)); });
    if (!Array.isArray(d.etiquetas) || !d.etiquetas.length) return false;
    var series = d.series || (d.valores ? [{ nombre: d.titulo || "", valores: d.valores }] : null);
    if (!series || !series.length) return false;
    return series.every(function (s) { return Array.isArray(s.valores) && s.valores.length === d.etiquetas.length && s.valores.every(function (v) { return isFinite(parseFloat(v)); }); });
  }
  function oscuro() { var t = document.documentElement.getAttribute("data-theme"); return t ? t === "dark" : matchMedia("(prefers-color-scheme: dark)").matches; }
  function dibujarGrafico(hueco, d, registro) {
    if (!graficoValido(d)) { hueco.remove(); return; }
    var caja = el("div", "grafico");
    caja.innerHTML = "<h5>" + ico("grafico") + esc(d.titulo || "Gráfico") + "</h5>";
    var pie = '<p class="fuente-graf">Fuente: ' + esc(d.fuente) + (d.enlace ? ' · <a class="ext" target="_blank" rel="noopener" href="' + esc(d.enlace) + '">ver fuente</a>' : "") + "</p>";
    if (d.tipo === "cifras") {
      var g = el("div", "cifras");
      d.cifras.forEach(function (c) {
        var x = el("div", "cifra", "<b>0</b><span>" + esc(c.etiqueta || "") + "</span>"); g.appendChild(x);
        var fin = parseFloat(c.valor), dec = (String(c.valor).split(/[.,]/)[1] || "").length, ini = performance.now(), b = $("b", x), u = c.unidad || "";
        (function paso(t) { var k = Math.min(1, (t - ini) / 1200), e = 1 - Math.pow(1 - k, 3); b.textContent = (fin * e).toFixed(dec).replace(".", ",") + u; if (k < 1) requestAnimationFrame(paso); })(ini);
      });
      caja.appendChild(g); caja.insertAdjacentHTML("beforeend", pie); hueco.replaceWith(caja); return;
    }
    var lz = el("div", "lienzo"), cv = document.createElement("canvas"); lz.appendChild(cv); caja.appendChild(lz); caja.insertAdjacentHTML("beforeend", pie); hueco.replaceWith(caja);
    cargarScript(CDN.chart).then(function () {
      var series = d.series || [{ nombre: d.titulo || "", valores: d.valores }];
      var COLORES = oscuro() ? COLORES_BASE.map(function (c) { return c === "#0E2A68" ? "#9DB8F0" : c; }) : COLORES_BASE;
      var tipo = { barras: "bar", barra: "bar", lineas: "line", linea: "line", dona: "doughnut", torta: "pie" }[d.tipo] || "bar";
      var texto = oscuro() ? "#EAF0FB" : "#13213D", rejilla = oscuro() ? "rgba(255,255,255,.12)" : "rgba(14,42,104,.1)";
      var circular = tipo === "doughnut" || tipo === "pie";
      var ch = new Chart(cv, {
        type: tipo,
        data: { labels: d.etiquetas, datasets: series.map(function (s, k) {
          return { label: s.nombre || "", data: s.valores.map(parseFloat), backgroundColor: circular ? COLORES.slice(0, d.etiquetas.length) : COLORES[k % COLORES.length] + (tipo === "line" ? "33" : ""),
            borderColor: circular ? (oscuro() ? "#13213D" : "#fff") : COLORES[k % COLORES.length], borderWidth: 2, borderRadius: tipo === "bar" ? 8 : 0, tension: .35, fill: tipo === "line", pointRadius: 4 };
        }) },
        options: { responsive: true, maintainAspectRatio: false, animation: { duration: 1400, easing: "easeOutQuart" },
          plugins: { legend: { display: circular || series.length > 1, labels: { color: texto, font: { family: "Nunito", weight: "700" } } },
            tooltip: { callbacks: { label: function (c) { return " " + (c.dataset.label ? c.dataset.label + ": " : "") + c.formattedValue + (d.unidad || ""); } } } },
          scales: circular ? {} : { x: { ticks: { color: texto }, grid: { color: rejilla } }, y: { beginAtZero: true, ticks: { color: texto }, grid: { color: rejilla } } } }
      });
      if (registro) registro.push({ titulo: d.titulo, fuente: d.fuente, canvas: cv, chart: ch });
    }).catch(function () { lz.innerHTML = "<p>No se pudo cargar el gráfico (sin conexión).</p>"; });
  }

  // ---------- Preguntas con opciones que propone la IA ----------
  function pintarOpciones(cont, d) {
    var preguntas = (d && (d.preguntas || d.questions)) || []; if (!preguntas.length) return;
    var caja = el("div", "opciones-ia");
    // Cada pregunta es independiente: al tocar una opción se envía de inmediato
    preguntas.slice(0, 3).forEach(function (q) {
      var pregunta = String(q.pregunta || q.texto || "").trim();
      caja.appendChild(el("p", "pregunta-opc", esc(pregunta)));
      var ops = (q.opciones || []).map(String).filter(Boolean).slice(0, 6); if (!ops.some(function (o) { return /^Otro/.test(o); })) ops.push("Otro: escribir");
      caja.appendChild(chips(ops, function (v) {
        if (estado.ocupado) { toast("Espera que termine la respuesta anterior"); return; }
        enviarConsulta(pregunta ? pregunta + " " + v : v, { esRespuesta: true });
      }));
    });
    cont.appendChild(caja);
  }

  // =====================================================================
  //  ENVÍO DE CONSULTAS
  // =====================================================================
  function alEnviarFormulario(e) {
    e.preventDefault();
    var ta = $("#entrada"), texto = ta.value.trim(); if (!texto || estado.ocupado) return;
    var priv = analizarPrivacidad(texto);
    if (priv.hallazgos.length) { mostrarAlertaPrivacidad(texto, priv); return; }
    ta.value = ""; ajustarAltura(); procesarTextoUsuario(texto);
  }
  function procesarTextoUsuario(texto) {
    // ¿Respondió con su rol/cargo con palabras propias?
    var d = detectarPerfil(texto);
    if (d && estado.pasoPerfil !== "listo" || (d && /^\s*(soy|trabajo como|me desempeño como)\b/i.test(texto))) {
      var resto = texto.replace(/^\s*(hola[,!.\s]*)?(soy|trabajo como|me desempeño como)\s+[^,.;?¿]+[,.;]?\s*/i, "").trim();
      msgYo(texto); fijarPerfil(d.rol, d.cargo);
      if (resto.length > 12 && /[?¿]|\b(qu[eé]|c[oó]mo|cu[aá]l|cu[aá]ndo|d[oó]nde|necesito|ayuda|expl|resum)/i.test(resto)) { enviarConsulta(resto, { sinEco: true }); }
      else confirmarPerfil();
      return;
    }
    enviarConsulta(texto);
  }
  function mostrarAlertaPrivacidad(original, priv) {
    var tipos = {}; priv.hallazgos.forEach(function (h) { tipos[h.tipo] = 1; });
    var resaltado = esc(priv.anonimo).replace(/\[(RUT|CORREO|TELÉFONO|ESTUDIANTE|APODERADO\/A|PERSONA)\]/g, "<mark>[$1]</mark>");
    abrirModal(ico("escudo") + " Protección de datos personales",
      '<div class="alerta-priv"><b>Detecté posibles datos personales</b> (' + esc(Object.keys(tipos).join(", ")) + "). Según la Ley N° 21.719, no debemos enviarlos al asistente." +
      (priv.salud ? " Además, tu mensaje incluye información de salud junto a datos que podrían identificar a una persona." : "") + "</div>" +
      "<p>Te propongo esta <b>versión anonimizada</b>:</p><div class=\"anonimo\">" + resaltado + "</div>",
      [{ texto: "Enviar versión anonimizada", clase: "", icono: "escudoOk", fn: function () { cerrarModal(); $("#entrada").value = ""; ajustarAltura(); procesarTextoUsuario(priv.anonimo); } },
       { texto: "Editar mi mensaje", clase: "sec", icono: "flecha", fn: function () { cerrarModal(); $("#entrada").focus(); } }]
        .concat(priv.soloNombres ? [{ texto: "No son datos personales: enviar igual", clase: "sec", fn: function () { cerrarModal(); $("#entrada").value = ""; ajustarAltura(); procesarTextoUsuario(original); } }] : []));
  }

  function enviarConsulta(texto, opts) {
    opts = opts || {};
    if (estado.ocupado) return;
    if (!opts.sinEco) msgYo(texto);
    if (estado.pasoPerfil !== "listo") estado.pasoPerfil = "listo"; // nunca obligamos a marcar el perfil
    var consultaBusqueda = opts.esRespuesta ? ultimaConsulta() + " " + texto : texto;
    var frags = buscar(consultaBusqueda, 5);
    var tema = clasificarTema(consultaBusqueda), delito = RE_DELITO.test(consultaBusqueda);
    var disciplinario = delito || tema === "Faltas, medidas y debido proceso" || (RE_DISCIPLINA.test(consultaBusqueda) && !(esAusenciaEvaluacion(consultaBusqueda) && !/sanci|anotaci|disciplin|suspen|expuls/i.test(consultaBusqueda)));
    var normativa = normativaPara(consultaBusqueda, 5);
    function agregarNorma(id) {
      var x = BASE.normativa.filter(function (k) { return k.url.slice(-(id.length + 1)) === "=" + id || k.url.indexOf("=" + id + "&") > 0; })[0];
      if (x && normativa.indexOf(x) < 0) normativa.push(x);
    }
    var derechos = RE_DERECHOS.test(consultaBusqueda);
    if (derechos) agregarNorma("20370");
    if (disciplinario) ["20370", "20536", "21128", "21430"].forEach(agregarNorma);
    if (delito) {
      var previas = normativa.filter(function (n) { return n.categoria !== "Responsabilidad penal y civil" && n.categoria !== "Inclusión y diversidad" && n.categoria !== "Evaluación y currículum"; });
      normativa = [];
      ["19696", "1984", "20084", "172986", "19968"].forEach(agregarNorma);
      if (/droga|marihuana|tr[aá]fico/i.test(consultaBusqueda)) agregarNorma("20000");
      if (/\barmas?\b|cuchillo|navaja|pistola/i.test(consultaBusqueda)) agregarNorma("17798");
      previas.forEach(function (n) { if (normativa.indexOf(n) < 0) normativa.push(n); });
      if (/\btea\b|autis/i.test(consultaBusqueda)) agregarNorma("21545");
    }
    normativa = normativa.slice(0, 12);
    // Mensaje de espera: Timón (cuerpo completo) "habla" mientras se prepara la respuesta
    var pensando = el("div", "msg ia pensando");
    pensando.innerHTML = '<div class="avatar grande">' + mascotaHTML("hablando") + '</div><div class="burbuja"><div class="escribiendo"><i></i><i></i><i></i><span>Revisando el Reglamento Interno…</span></div></div>';
    chat.appendChild(pensando); bajar();
    var frasesEspera = ["Revisando el Reglamento Interno…", "Buscando en el Reglamento de Evaluación 2026…", disciplinario ? "Verificando que se ajuste a la normativa chilena…" : "Revisando la normativa vigente…", "Redactando la respuesta…"], nf = 0;
    var relojEspera = setInterval(function () { nf = (nf + 1) % frasesEspera.length; var s = $(".escribiendo span", pensando); if (s) s.textContent = frasesEspera[nf]; }, 2600);
    estado.ocupado = true; $("#btnEnviar").disabled = true;

    var cat = catalogoEfectivo();
    var payload = {
      accion: "chat", consulta: texto, modo: "chat", web: estado.web, tema: tema, disciplinario: disciplinario, delito: delito, derechos: derechos, video: /video|youtube/i.test(texto),
      historial: estado.mensajes.slice(-4).map(function (m) { return { role: m.role, content: m.content.slice(0, 1500) }; }),
      perfil: estado.perfil,
      fragmentos: frags.map(function (r) { return { fuente: etiquetaFuente(r.f), texto: r.f.t.slice(0, 1400) }; }),
      normativa: normativa.map(function (n) { return n.titulo + " → " + n.url; }),
      pei: { mision: cat.pei.mision, vision: cat.pei.vision, sellos: cat.pei.sellos, valores: cat.pei.valores, historia: (cat.pei.historia || "").slice(0, 600) },
      info: cat.info, fecha: new Date().toISOString().slice(0, 10)
    };
    var fin = function (resp, local) {
      clearInterval(relojEspera); estado.ocupado = false; $("#btnEnviar").disabled = false; pensando.remove();
      estado.mensajes.push({ role: "user", content: texto });
      if (!local) estado.mensajes.push({ role: "assistant", content: resp.texto });
      mostrarRespuesta({ consulta: texto, texto: resp.texto, frags: frags, normativa: normativa, local: !!local, videos: resp.videos || [], aviso: resp.aviso, busqueda: consultaBusqueda,
        servidor: (resp.fuentesServidor || []).filter(function (s) { return s && s.titulo && new RegExp("\\[S\\d\\]|" + String(s.titulo).slice(0, 20).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i").test(resp.texto); }) });
    };
    // Estadística anónima (tema y rol) en paralelo: no retrasa la respuesta
    if (URL_SERVIDOR) fetch(URL_SERVIDOR, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ accion: "contar", tema: tema, rol: estado.perfil.rol }) }).catch(function () { });
    if (!URL_SERVIDOR) { setTimeout(function () { fin({ texto: respuestaLocal(consultaBusqueda, frags, normativa, "sin-servidor") }, true); }, 500); return; }
    pedirIA(payload, 0).then(function (r) {
      if (r && r.ok && r.texto) { marcarEstado("ok"); fin(r, false); }
      else throw new Error((r && r.error) || "Sin respuesta");
    }).catch(function (err) {
      marcarEstado("local");
      fin({ texto: respuestaLocal(consultaBusqueda, frags, normativa, String(err && err.message || err)) }, true);
    });
  }
  function ultimaConsulta() { for (var i = estado.respuestas.length - 1; i >= 0; i--) if (estado.respuestas[i].consulta) return estado.respuestas[i].consulta; return ""; }
  function pedirIA(payload, intento) {
    var ctrl = new AbortController(), t = setTimeout(function () { ctrl.abort(); }, 40000);
    return fetch(URL_SERVIDOR, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(payload), signal: ctrl.signal, redirect: "follow" })
      .then(function (r) { clearTimeout(t); return r.json(); })
      .then(function (j) {
        // Si el servidor ya probó ambos modelos y siguen saturados, no se espera: se muestra el reglamento
        return j;
      })
      .catch(function (e) {
        clearTimeout(t);
        if (intento < 1 && navigator.onLine !== false && e && e.name !== "AbortError") return new Promise(function (ok) { setTimeout(ok, 800); }).then(function () { return pedirIA(payload, intento + 1); });
        throw e;
      });
  }
  function respuestaLocal(consulta, frags, normativa, motivo) {
    var md = [];
    md.push("## Respuesta desde la base local");
    md.push(motivo === "sin-servidor" ? "El asistente con IA aún no está conectado, así que te muestro lo que dicen los documentos del colegio sobre tu consulta:" :
      (/l[ií]mite|ocupado|saturad/i.test(motivo || "") ? motivo.replace(/\.?\s*Te muestro.*$/, ".") + " Mientras tanto, esto es lo más pertinente de los documentos del colegio:" :
        "No pude conectarme con el servicio de IA en este momento (puede no haber internet). Te muestro lo más pertinente de los documentos del colegio:"));
    if (!frags.length) md.push("No encontré fragmentos relacionados en los reglamentos. Prueba con otras palabras (por ejemplo: *inasistencia a prueba*, *faltas graves*, *promoción*).");
    frags.slice(0, 3).forEach(function (r) {
      md.push("### " + (r.f.s || (docBase(r.f.d) || {}).corto || "Fragmento"));
      md.push("> " + extracto(r.f.t, consulta, 650));
      md.push("*(Fuente: " + etiquetaFuente(r.f) + ")*");
    });
    if (normativa.length) { md.push("### Normativa relacionada"); md.push(normativa.slice(0, 3).map(function (n) { return "- [" + n.titulo + "](" + n.url + ")"; }).join("\n")); }
    md.push("Puedes abrir el documento completo desde la **Biblioteca** o volver a intentar en unos minutos.");
    return md.join("\n\n");
  }

  // ---------- Pintar una respuesta completa ----------
  function mostrarRespuesta(r) {
    var idx = estado.respuestas.length; estado.respuestas.push(r); r.graficos = [];
    var bl = aBloques(r.texto);
    // Fuentes externas sugeridas (enlaces verificados) si la IA no las incluyó
    var tieneExternas = /fuentes externas sugeridas/i.test(r.texto);
    r.externas = tieneExternas ? [] : fuentesPara(r.busqueda || r.consulta, 3);
    var m = msgIA("", { sinBajar: true }), cont = $(".contenido", m);
    var html = (r.local ? '<span class="etiqueta-local">' + ico("archivo") + " Modo sin conexión · base local</span>" : "") + bloquesHTML(bl);
    cont.innerHTML = html;
    if (r.aviso) cont.insertAdjacentHTML("afterbegin", '<p class="etiqueta-local">' + ico("alerta") + " " + esc(r.aviso) + "</p>");
    bl.forEach(function (b, k) { if (b.t === "graf") { var h = cont.querySelector('.grafico-hueco[data-i="' + k + '"]'); if (h) dibujarGrafico(h, b.d, r.graficos); } });
    bl.forEach(function (b) { if (b.t === "opc") pintarOpciones(cont, b.d); });
    // Videos verificados
    if (r.videos && r.videos.length) {
      var vs = el("div", "videos"); vs.innerHTML = '<h4 style="margin:10px 0 0;display:flex;gap:8px;align-items:center">' + ico("video") + " Video sugerido (verificado)</h4>";
      r.videos.forEach(function (v) {
        var a = el("button", "video"); a.type = "button"; a.style.textAlign = "left";
        a.innerHTML = '<img loading="lazy" alt="" src="https://i.ytimg.com/vi/' + esc(v.id) + '/mqdefault.jpg"><span>' + esc(v.titulo) + "<small>Canal: " + esc(v.canal) + "</small></span>";
        a.onclick = function () { var f = el("div", "video-marco", '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(v.id) + '?autoplay=1" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="' + esc(v.titulo) + '"></iframe>'); a.replaceWith(f); };
        vs.appendChild(a);
      });
      cont.appendChild(vs);
    }
    // Fuentes del establecimiento citadas
    r.citadas = fragmentosCitados(r);
    var fu = "";
    if (r.citadas.length) {
      fu += "<h4>" + ico("libro") + " Fuentes del establecimiento</h4><ul>" + r.citadas.map(function (f, k) {
        return "<li>" + ico("archivo") + ' <button class="enlace" type="button" data-f="' + k + '">' + esc(etiquetaFuente(f)) + "</button></li>";
      }).join("") + "</ul>";
    }
    if (r.servidor && r.servidor.length) {
      fu += (r.citadas.length ? "" : "<h4>" + ico("libro") + " Fuentes del establecimiento</h4>") + "<ul>" + r.servidor.map(function (s) {
        var t = esc(s.titulo + (s.seccion ? ", " + s.seccion : ""));
        return "<li>" + ico("archivo") + " " + (s.url && hostPermitido(s.url) ? '<a class="ext" href="' + esc(s.url) + '" target="_blank" rel="noopener">' + t + "</a>" : t) + "</li>";
      }).join("") + "</ul>";
    }
    if (r.externas.length) {
      fu += '<h4 style="margin-top:10px">' + ico("globo") + " Fuentes externas sugeridas</h4><ul>" + r.externas.map(function (x) {
        return "<li>" + ico("enlace") + ' <a class="ext" href="' + esc(x.url) + '" target="_blank" rel="noopener">' + esc(x.titulo) + "</a></li>";
      }).join("") + "</ul>";
    }
    if (fu) {
      var caja = el("div", "fuentes", fu); cont.appendChild(caja);
      caja.querySelectorAll("button[data-f]").forEach(function (b) { b.onclick = function () { abrirFragmento(r.citadas[+b.getAttribute("data-f")]); }; });
    }
    // Acciones
    var acc = el("div", "acciones");
    [["ojo", "Ver PDF", function () { vistaPreviaPDF(idx); }], ["descarga", "Descargar PDF", function () { descargarPDF(idx); }],
     ["compartir", "Compartir", function () { compartir(idx); }], ["copiar", "Copiar", function () { copiar(idx); }], ["volumen", "Escuchar", function () { escuchar(idx, m); }], ["nuevo", "Nueva consulta", nuevaConsulta]]
      .forEach(function (a) { var b = el("button", "accion", ico(a[0]) + esc(a[1])); b.type = "button"; b.onclick = a[2]; acc.appendChild(b); });
    cont.appendChild(acc);
    irA(m);
    revelar(m, cont);
  }
  // Muestra la respuesta de a poco mientras Timón "habla" (mueve la boca y el cuerpo)
  // La respuesta se "escribe" de arriba hacia abajo mientras Timón habla.
  // Tocar la respuesta la muestra completa de inmediato.
  function revelar(m, cont) {
    var partes = [].slice.call(cont.children), mc = $(".mascota", m);
    if (!partes.length) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { hablar(m, 4000); return; } // sin efecto de escritura, pero Timón igual habla
    var largos = partes.map(function (p) { return Math.max(20, (p.textContent || "").length); });
    var total = largos.reduce(function (a, b) { return a + b; }, 0);
    var tiempo = Math.min(5000, Math.max(1200, total * 3.5));       // duración total de la "escritura" (rápida)
    var seguir = true, terminado = false, k = 0, reloj = null;
    partes.forEach(function (p) { p.classList.add("por-mostrar"); });
    m.classList.add("escribiendo-respuesta");
    if (mc) mc.classList.add("hablando");
    function fin() {
      if (terminado) return; terminado = true; clearTimeout(reloj);
      partes.forEach(function (p) { p.classList.remove("por-mostrar"); });
      m.classList.remove("escribiendo-respuesta");
      if (mc) setTimeout(function () { mc.classList.remove("hablando"); }, 400);
      chat.removeEventListener("wheel", parar); chat.removeEventListener("touchmove", parar);
    }
    function parar() { seguir = false; }
    chat.addEventListener("wheel", parar, { passive: true }); chat.addEventListener("touchmove", parar, { passive: true });
    m.addEventListener("click", fin, { once: true });
    (function siguiente() {
      if (terminado) return;
      if (k >= partes.length) { fin(); return; }
      var p = partes[k], dur = Math.max(260, tiempo * largos[k] / total); k++;
      p.style.setProperty("--dur", dur + "ms");
      p.classList.remove("por-mostrar"); p.classList.add("escribiendo-bloque");
      if (seguir) {
        var r = p.getBoundingClientRect(), c = chat.getBoundingClientRect();
        if (r.bottom > c.bottom - 10 && k > 1) chat.scrollTop += Math.min(r.bottom - c.bottom + 30, Math.max(0, r.top - c.top - 70));
      }
      reloj = setTimeout(siguiente, dur);
    })();
  }
  function fragmentosCitados(r) {
    var t = r.texto, out = [];
    if (r.local) return r.frags.slice(0, 3).map(function (x) { return x.f; });
    r.frags.forEach(function (x) {
      var f = x.f, ok = false;
      if (f.d === "rie") ok = new RegExp("(p\\.|p[áa]g\\.?|p[áa]gina)\\s*" + f.p + "\\b", "i").test(t);
      else { var arts = (f.s || "").match(/Art\. (\d+)(?: a (\d+))?/); if (arts) { for (var n = +arts[1]; n <= +(arts[2] || arts[1]); n++) if (new RegExp("Art(\\.|[íi]culo)\\s*" + n + "\\b", "i").test(t)) ok = true; } }
      if (ok) out.push(f);
    });
    if (!out.length) out = r.frags.slice(0, r.local ? 3 : 2).map(function (x) { return x.f; });
    return out;
  }

  // =====================================================================
  //  PDF formal (A4, membrete, fecha, rol, consulta, contenido, fuentes, nota IA, n° de página)
  // =====================================================================
  var logoDataURL = null;
  function obtenerLogo() {
    if (logoDataURL) return Promise.resolve(logoDataURL);
    return fetch("logo.png").then(function (r) { return r.blob(); }).then(function (b) {
      return new Promise(function (ok) { var fr = new FileReader(); fr.onload = function () { logoDataURL = fr.result; ok(logoDataURL); }; fr.readAsDataURL(b); });
    }).catch(function () { return null; });
  }
  function latin(s) {
    return String(s || "").replace(/[→⇒➜]/g, "->").replace(/[←]/g, "<-").replace(/≥/g, ">=").replace(/≤/g, "<=").replace(/[●▪■◦]/g, "•").replace(/[✓✔]/g, "OK").replace(/[“”]/g, '"').replace(/[‘’]/g, "'")
      .replace(/[^\x09\x0A\x0D\x20-\x7E\xA0-\xFF€‚ƒ„…†‡ˆ‰Š‹ŒŽ•–—˜™š›œžŸ]/g, "");
  }
  function enlacePlano(m, t, u) { return hostPermitido(u) ? t + " (" + u + ")" : t; }
  function limpiaMd(s) { return latin(String(s || "").replace(/<br\s*\/?>/gi, "\n").replace(/\*\*([^*]+)\*\*/g, "$1").replace(/(^|[^*])\*([^*]+)\*/g, "$1$2").replace(/`/g, "").replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, enlacePlano)); }
  function crearPDF(idx) {
    var r = estado.respuestas[idx];
    return Promise.all([cargarScript(CDN.jspdf), obtenerLogo()]).then(function (res) {
      var logo = res[1], jsPDF = window.jspdf.jsPDF, doc = new jsPDF({ unit: "mm", format: "a4" });
      var M = 18, W = 210 - 2 * M, y = 0, info = catalogoEfectivo().info, AZUL = [14, 42, 104], ORO = [245, 196, 0];
      function membrete() {
        if (logo) try { doc.addImage(logo, "PNG", M, 9, 13.5, 17.4); } catch (e) { }
        doc.setFont("helvetica", "bold"); doc.setFontSize(13); doc.setTextColor.apply(doc, AZUL); doc.text(latin(info.nombre), M + 17, 15);
        doc.setFont("helvetica", "normal"); doc.setFontSize(8.5); doc.setTextColor(80, 90, 110);
        doc.text(latin(info.dependencia + " · RBD " + info.rbd), M + 17, 19.6); doc.text(latin(info.direccion), M + 17, 23.4);
        doc.setDrawColor.apply(doc, ORO); doc.setLineWidth(1); doc.line(M, 28, 210 - M, 28);
        doc.setDrawColor.apply(doc, AZUL); doc.setLineWidth(.3); doc.line(M, 29.4, 210 - M, 29.4);
        y = 37;
      }
      function espacio(h) { if (y + h > 297 - 20) { doc.addPage(); membrete(); } }
      function texto(t, o) {
        o = o || {}; doc.setFont("helvetica", o.negrita ? "bold" : (o.cursiva ? "italic" : "normal")); doc.setFontSize(o.tam || 10.5);
        doc.setTextColor.apply(doc, o.color || [25, 33, 55]);
        var sangria = o.sangria || 0, lineas = doc.splitTextToSize(latin(t), W - sangria), alto = (o.tam || 10.5) * .43;
        lineas.forEach(function (l, k) { espacio(alto + 1); if (k === 0 && o.vineta) doc.text(o.vineta, M + sangria - 4.5, y); doc.text(l, M + sangria, y); y += alto + 1.1; });
        y += o.despues == null ? 1.8 : o.despues;
      }
      membrete();
      doc.setFont("helvetica", "bold"); doc.setFontSize(15); doc.setTextColor.apply(doc, AZUL); doc.text("Informe de consulta", M, y); y += 6;
      doc.setFont("helvetica", "normal"); doc.setFontSize(9.5); doc.setTextColor(85, 98, 122); doc.text(latin("Asistente Timón · Reglamento Interno y Reglamento de Evaluación"), M, y); y += 7;
      // Ficha
      var p = estado.perfil, filas = [["Fecha", hoyLargo()], ["Rol / cargo", (p.cargo || "No indicado") + (p.rol && p.rol !== p.cargo ? " · " + p.rol : "")], ["Consulta", r.consulta]];
      doc.setFontSize(10);
      var altoFicha = 6 + filas.reduce(function (a, f) { return a + doc.splitTextToSize(latin(f[1]), W - 34).length * 4.6 + 2; }, 0);
      doc.setFillColor(238, 243, 251); doc.setDrawColor(214, 224, 240); doc.roundedRect(M, y - 4, W, altoFicha, 2.5, 2.5, "FD");
      filas.forEach(function (f) {
        var ls = doc.splitTextToSize(latin(f[1]), W - 34);
        doc.setFont("helvetica", "bold"); doc.setTextColor.apply(doc, AZUL); doc.text(f[0] + ":", M + 4, y + 1);
        doc.setFont("helvetica", "normal"); doc.setTextColor(25, 33, 55); ls.forEach(function (l, k) { doc.text(l, M + 30, y + 1 + k * 4.6); });
        y += ls.length * 4.6 + 2;
      });
      y += 7;
      if (r.local) texto("Nota: respuesta generada en modo sin conexión, a partir de la base local de documentos.", { cursiva: true, tam: 9, color: [122, 92, 0] });
      // Contenido
      var graficos = (r.graficos || []).slice();
      aBloques(r.texto).forEach(function (b) {
        if (b.t === "h" && /profundizar/i.test(b.x)) { /* las preguntas para profundizar no van en el PDF */ }
        else if (b.t === "h") { y += 2; espacio(12); texto(limpiaMd(b.x), { negrita: true, tam: b.n === 2 ? 12.5 : 11.5, color: AZUL, despues: 1 }); }
        else if (b.t === "p" || b.t === "pre") texto(limpiaMd(b.x));
        else if (b.t === "cita") { texto(limpiaMd(b.x), { cursiva: true, sangria: 5, color: [60, 70, 95] }); }
        else if (b.t === "ul" || b.t === "ol") { b.items.forEach(function (it, k) { texto(limpiaMd(it.x), { sangria: it.sub ? 11 : 6, vineta: b.t === "ol" ? (k + 1) + "." : "•", despues: .6 }); }); y += 1.5; }
        else if (b.t === "tabla") {
          var nc = b.filas[0].length, cw = W / nc; doc.setFontSize(9);
          b.filas.forEach(function (f, fi) {
            var celdas = f.map(function (c) { return doc.splitTextToSize(limpiaMd(c), cw - 3); }), h = Math.max.apply(null, celdas.map(function (c) { return c.length; })) * 3.9 + 3;
            espacio(h);
            celdas.forEach(function (c, ci) {
              if (fi === 0) { doc.setFillColor.apply(doc, AZUL); doc.rect(M + ci * cw, y - 3.5, cw, h, "F"); doc.setTextColor(255, 255, 255); doc.setFont("helvetica", "bold"); }
              else { doc.setDrawColor(214, 224, 240); doc.rect(M + ci * cw, y - 3.5, cw, h); doc.setTextColor(25, 33, 55); doc.setFont("helvetica", "normal"); }
              c.forEach(function (l, k) { doc.text(l, M + ci * cw + 1.5, y + k * 3.9); });
            });
            y += h;
          });
          y += 4;
        }
        else if (b.t === "graf") {
          var g = graficos.shift();
          if (g && g.canvas) {
            try {
              var tmp = document.createElement("canvas"); tmp.width = g.canvas.width; tmp.height = g.canvas.height;
              var cx = tmp.getContext("2d"); cx.fillStyle = oscuro() ? "#13213D" : "#FFFFFF"; cx.fillRect(0, 0, tmp.width, tmp.height); cx.drawImage(g.canvas, 0, 0);
              var img = tmp.toDataURL("image/png", 1), iw = W, ih = W * g.canvas.height / g.canvas.width;
              if (ih > 90) { iw = iw * 90 / ih; ih = 90; }
              espacio(ih + 14); texto(g.titulo || "Gráfico", { negrita: true, tam: 10 });
              doc.addImage(img, "PNG", M + (W - iw) / 2, y, iw, ih); y += ih + 4;
              texto("Fuente: " + g.fuente, { tam: 8.5, cursiva: true, color: [85, 98, 122] });
            } catch (e) { }
          }
          else if (graficoValido(b.d) && b.d.tipo === "cifras") { texto(b.d.titulo || "Cifras", { negrita: true }); b.d.cifras.forEach(function (c) { texto(c.valor + (c.unidad || "") + " – " + (c.etiqueta || ""), { sangria: 6, vineta: "•", despues: .5 }); }); texto("Fuente: " + b.d.fuente, { tam: 8.5, cursiva: true, color: [85, 98, 122] }); }
        }
        else if (b.t === "hr") { y += 2; }
      });
      // Fuentes
      y += 3; espacio(16); texto("Fuentes", { negrita: true, tam: 12, color: AZUL, despues: 1 });
      (r.citadas || []).forEach(function (f) { texto(etiquetaFuente(f), { sangria: 6, vineta: "•", despues: .5, tam: 9.5 }); });
      (r.servidor || []).forEach(function (s) { texto(s.titulo + (s.seccion ? ", " + s.seccion : "") + (s.url ? " – " + s.url : ""), { sangria: 6, vineta: "•", despues: .5, tam: 9.5 }); });
      var urls = []; (r.texto.match(/https?:\/\/[^\s)\]]+/g) || []).forEach(function (u) { if (hostPermitido(u) && urls.indexOf(u) < 0) urls.push(u); });
      (r.externas || []).forEach(function (x) { if (urls.indexOf(x.url) < 0) urls.push(x.url); });
      urls.slice(0, 12).forEach(function (u) { espacio(6); doc.setFontSize(9.5); doc.setTextColor(30, 79, 163); doc.text("•", M + 1.5, y); doc.textWithLink(latin(u.length > 95 ? u.slice(0, 95) + "…" : u), M + 6, y, { url: u }); y += 5; });
      (r.videos || []).forEach(function (v) { texto("Video: " + v.titulo + " (canal " + v.canal + ") https://www.youtube.com/watch?v=" + v.id, { sangria: 6, vineta: "•", tam: 9.5, despues: .5 }); });
      // Nota IA
      y += 4; espacio(26);
      doc.setFillColor(255, 248, 214); doc.setDrawColor(217, 164, 0);
      var nota = "Nota sobre el uso de IA: este documento fue elaborado con apoyo de inteligencia artificial (modelo openai/gpt-oss-120b vía Groq) a partir de los documentos oficiales del " + info.nombre +
        ". Es una orientación: no reemplaza la lectura del documento oficial ni el criterio de los equipos responsables. No contiene datos personales (Ley N° 21.719).";
      doc.setFontSize(8.8); var ln = doc.splitTextToSize(latin(nota), W - 8);
      doc.roundedRect(M, y - 4, W, ln.length * 3.9 + 5, 2, 2, "FD"); doc.setTextColor(90, 70, 0); doc.setFont("helvetica", "italic");
      ln.forEach(function (l, k) { doc.text(l, M + 4, y + 0.5 + k * 3.9); });
      // Pie con número de página
      var n = doc.getNumberOfPages();
      for (var i = 1; i <= n; i++) {
        doc.setPage(i); doc.setDrawColor(214, 224, 240); doc.setLineWidth(.3); doc.line(M, 284, 210 - M, 284);
        doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(110, 120, 140);
        doc.text(latin("Generado el " + new Date().toLocaleDateString("es-CL") + " · Timón – " + info.nombre), M, 289);
        doc.text("Página " + i + " de " + n, 210 - M, 289, { align: "right" });
      }
      return doc.output("blob");
    });
  }
  function nombrePDF() { return "Consulta_Timon_CMCh_" + new Date().toISOString().slice(0, 10) + ".pdf"; }
  function descargarBlob(blob, nombre) { var u = URL.createObjectURL(blob), a = el("a"); a.href = u; a.download = nombre; document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(u); }, 4000); }
  function descargarPDF(idx) { toast("Preparando PDF…"); crearPDF(idx).then(function (b) { descargarBlob(b, nombrePDF()); toast("PDF descargado"); }).catch(errorLib); }
  function errorLib() { toast("No se pudo preparar el archivo. Revisa tu conexión a internet e inténtalo otra vez.", 4000); }
  function vistaPreviaPDF(idx) {
    abrirModal(ico("archivo") + " Vista previa del PDF", '<div class="visor-pdf" id="visorPdf"><p style="color:#fff">Generando…</p></div>',
      [{ texto: "Descargar", icono: "descarga", fn: function () { descargarPDF(idx); } }, { texto: "Compartir", icono: "compartir", clase: "amarillo", fn: function () { compartir(idx); } }, { texto: "Cerrar", clase: "sec", fn: cerrarModal }]);
    crearPDF(idx).then(function (blob) { return blob.arrayBuffer(); }).then(function (buf) { return renderizarPDF({ data: buf }, $("#visorPdf"), 0, true); }).catch(errorLib);
  }
  function compartir(idx) {
    var r = estado.respuestas[idx];
    crearPDF(idx).then(function (blob) {
      var archivo = new File([blob], nombrePDF(), { type: "application/pdf" });
      if (navigator.canShare && navigator.canShare({ files: [archivo] })) {
        return navigator.share({ files: [archivo], title: "Consulta – " + catalogoEfectivo().info.nombre, text: "Informe de consulta (Asistente Timón)" }).catch(function () { });
      }
      var resumen = "Consulta: " + r.consulta + "\n\n" + textoPlano(r.texto).slice(0, 1400) + "\n\n(Te adjunto el PDF con el detalle y las fuentes.)";
      abrirModal(ico("compartir") + " Compartir PDF",
        "<p>Tu navegador no permite adjuntar el PDF automáticamente. Haz esto:</p><ol><li><b>Descarga el PDF</b> con el primer botón.</li><li>Elige <b>WhatsApp</b> o <b>Correo</b>: se abrirá con un resumen listo.</li><li>Adjunta el PDF descargado y envía.</li></ol>",
        [{ texto: "Descargar PDF", icono: "descarga", fn: function () { descargarBlob(blob, nombrePDF()); } },
         { texto: "WhatsApp", icono: "whatsapp", clase: "verde", fn: function () { window.open("https://wa.me/?text=" + encodeURIComponent(resumen), "_blank", "noopener"); } },
         { texto: "Correo", icono: "correo", clase: "sec", fn: function () { location.href = "mailto:?subject=" + encodeURIComponent("Consulta – " + catalogoEfectivo().info.nombre) + "&body=" + encodeURIComponent(resumen.slice(0, 1600)); } },
         { texto: "Cerrar", clase: "sec", fn: cerrarModal }]);
    }).catch(errorLib);
  }
  function copiar(idx) {
    var r = estado.respuestas[idx];
    var t = "Consulta: " + r.consulta + "\n\n" + textoPlano(r.texto) + "\n\nFuentes:\n" + (r.citadas || []).map(function (f) { return "- " + etiquetaFuente(f); }).join("\n") +
      (r.externas || []).map(function (x) { return "\n- " + x.titulo + ": " + x.url; }).join("") + "\n\n(Generado con IA – Asistente Timón, " + catalogoEfectivo().info.nombre + ")";
    (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(function () { toast("Texto copiado"); }).catch(function () {
      var ta = el("textarea"); ta.value = t; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); toast("Texto copiado"); } catch (e) { toast("No se pudo copiar"); } ta.remove();
    });
  }
  function escuchar(idx, m) {
    if (!("speechSynthesis" in window)) { toast("Tu navegador no permite lectura en voz alta"); return; }
    var mc = $(".mascota", m);
    if (speechSynthesis.speaking) { speechSynthesis.cancel(); if (mc) mc.classList.remove("hablando"); return; }
    var u = new SpeechSynthesisUtterance(textoPlano(estado.respuestas[idx].texto).replace(/\(https?:[^)]+\)/g, "").slice(0, 4000));
    var voces = speechSynthesis.getVoices(), pref = ["es-CL", "es-419", "es-US", "es-MX", "es-ES"];
    for (var i = 0; i < pref.length && !u.voice; i++) u.voice = voces.filter(function (v) { return v.lang === pref[i] || v.lang.replace("_", "-") === pref[i]; })[0] || null;
    if (!u.voice) u.voice = voces.filter(function (v) { return /^es/i.test(v.lang); })[0] || null;
    u.lang = u.voice ? u.voice.lang : "es-CL"; u.rate = 1.02;
    u.onstart = function () { if (mc) mc.classList.add("hablando"); };
    u.onend = u.onerror = function () { if (mc) mc.classList.remove("hablando"); };
    speechSynthesis.speak(u);
  }

  // =====================================================================
  //  VISORES (PDF con pdf.js, texto y Drive) y BIBLIOTECA
  // =====================================================================
  function renderizarPDF(fuente, cont, pagina, todas) {
    return cargarScript(CDN.pdfjs).then(function () {
      pdfjsLib.GlobalWorkerOptions.workerSrc = CDN.pdfworker;
      return pdfjsLib.getDocument(fuente).promise;
    }).then(function (pdf) {
      cont.innerHTML = "";
      var ancho = Math.min(cont.clientWidth - 24, 820) || 600;
      function pintar(n, destino) {
        return pdf.getPage(n).then(function (pg) {
          var v1 = pg.getViewport({ scale: 1 }), escala = ancho / v1.width, ratio = window.devicePixelRatio || 1, vp = pg.getViewport({ scale: escala * ratio });
          var cv = document.createElement("canvas"); cv.width = vp.width; cv.height = vp.height; cv.style.width = (vp.width / ratio) + "px";
          destino.appendChild(cv); return pg.render({ canvasContext: cv.getContext("2d"), viewport: vp }).promise;
        });
      }
      if (todas) { var cadena = Promise.resolve(); for (var i = 1; i <= pdf.numPages; i++) (function (k) { cadena = cadena.then(function () { return pintar(k, cont); }); })(i); return cadena; }
      var actual = Math.max(1, Math.min(pagina || 1, pdf.numPages));
      var nav = el("div", "visor-nav"), hoja = el("div");
      nav.innerHTML = '<button class="boton sec" type="button" data-a="-1">' + ico("flecha") + '</button><span>Página <input type="number" min="1" max="' + pdf.numPages + '" style="width:64px;padding:6px;border-radius:8px;border:1px solid #ccc"> de ' + pdf.numPages + '</span><button class="boton sec" type="button" data-a="1">' + ico("flechaD") + "</button>";
      cont.appendChild(nav); cont.appendChild(hoja);
      var inp = $("input", nav);
      function ir(n) { actual = Math.max(1, Math.min(n, pdf.numPages)); inp.value = actual; hoja.innerHTML = ""; return pintar(actual, hoja); }
      nav.querySelectorAll("button").forEach(function (b) { b.onclick = function () { ir(actual + (+b.getAttribute("data-a"))); }; });
      inp.onchange = function () { ir(+inp.value || 1); };
      return ir(actual);
    });
  }
  function abrirDocumento(d, pagina) {
    if (d.tipo === "pdf" && !d.url) {
      abrirModal(ico("libro") + " " + esc(d.corto || d.titulo), '<div class="visor-pdf" id="visorDoc"><p style="color:#fff">Cargando documento…</p></div>',
        [{ texto: "Descargar", icono: "descarga", fn: function () { var a = el("a"); a.href = d.archivo; a.download = d.archivo; a.click(); } }, { texto: "Cerrar", clase: "sec", fn: cerrarModal }]);
      renderizarPDF(d.archivo, $("#visorDoc"), pagina || 1, false).catch(function () { $("#visorDoc").innerHTML = '<p style="color:#fff">No se pudo abrir el PDF sin conexión. Ábrelo cuando tengas internet.</p>'; });
    } else if (d.id && !d.url && docBase(d.id)) {
      abrirTextoDoc(d, null);
    } else if (/drive\.google\.com\/file\/d\/([\w-]+)/.test(d.url || "")) {
      var id = d.url.match(/\/d\/([\w-]+)/)[1];
      abrirModal(ico("archivo") + " " + esc(d.titulo), '<iframe src="https://drive.google.com/file/d/' + id + '/preview" style="width:100%;height:72dvh;border:0;border-radius:12px" allow="autoplay" title="' + esc(d.titulo) + '"></iframe>',
        [{ texto: "Abrir en Drive", icono: "enlace", fn: function () { window.open(d.url, "_blank", "noopener"); } }, { texto: "Cerrar", clase: "sec", fn: cerrarModal }]);
    } else if (d.url) { window.open(d.url, "_blank", "noopener"); }
  }
  function abrirTextoDoc(d, frag) {
    var partes = KB.fragmentos.filter(function (f) { return f.d === d.id; });
    var html = partes.map(function (f) { var t = esc(f.t); if (frag && f === frag) t = "<mark id=\"marcaFrag\">" + t + "</mark>"; return "<p><b>" + esc(f.s || "") + "</b><br>" + t + "</p>"; }).join("");
    abrirModal(ico("libro") + " " + esc(d.corto || d.titulo), '<div class="visor-texto">' + html + "</div>",
      [{ texto: "Descargar original", icono: "descarga", fn: function () { var a = el("a"); a.href = d.archivo; a.download = d.archivo; a.click(); } }, { texto: "Cerrar", clase: "sec", fn: cerrarModal }]);
    if (frag) setTimeout(function () { var mk = $("#marcaFrag"); if (mk) mk.scrollIntoView({ block: "center" }); }, 60);
  }
  function abrirFragmento(f) {
    var d = docBase(f.d); if (!d) return;
    if (d.tipo === "pdf") abrirDocumento(d, f.p); else abrirTextoDoc(d, f);
  }
  function biblioteca(pest) {
    pest = pest || "colegio";
    var cat = catalogoEfectivo();
    var tabs = [["colegio", "Del establecimiento"], ["normativa", "Normativa"], ["sitios", "Sitios oficiales"], ["pei", "PEI e información"]];
    var html = '<div class="pestanas">' + tabs.map(function (t) { return '<button class="pestana' + (t[0] === pest ? " activa" : "") + '" data-p="' + t[0] + '">' + esc(t[1]) + "</button>"; }).join("") + "</div>";
    function tarjeta(tipo, color, titulo, desc, botones) {
      return '<div class="doc"><div class="tipo" style="background:' + color + '">' + esc(tipo) + "</div><div><h3>" + esc(titulo) + "</h3>" + (desc ? "<p>" + esc(desc) + "</p>" : "") + '<div class="bot">' + botones + "</div></div></div>";
    }
    var acciones = [];
    if (pest === "colegio") {
      var lista = docsBaseVisibles().map(function (d) { return { cat: d.categoria, d: d }; }).concat(cat.documentos.map(function (d) { return { cat: d.categoria || "Otros documentos", d: d }; }));
      var cats = {}; lista.forEach(function (x) { (cats[x.cat] = cats[x.cat] || []).push(x.d); });
      Object.keys(cats).forEach(function (c) {
        html += '<h3 class="cat-titulo">' + ico("archivo") + esc(c) + '</h3><div class="doc-lista">';
        cats[c].forEach(function (d) {
          var k = acciones.length; acciones.push(d);
          var tipo = (d.tipo || (d.url ? "link" : "doc")).toUpperCase().slice(0, 4);
          html += tarjeta(tipo, tipo === "PDF" ? "#D64545" : tipo === "DOCX" ? "#1E4FA3" : "#0E7C86", d.titulo, d.descripcion,
            '<button class="boton" type="button" data-ver="' + k + '">' + ico("ojo") + " Ver</button>" + (d.archivo ? '<a class="boton sec" href="' + esc(d.archivo) + '" download>' + ico("descarga") + " Descargar</a>" : ""));
        });
        html += "</div>";
      });
      if (!lista.length) html += "<p>No hay documentos disponibles.</p>";
    } else if (pest === "normativa") {
      var porCat = {}; BASE.normativa.forEach(function (n) { (porCat[n.categoria] = porCat[n.categoria] || []).push(n); });
      Object.keys(porCat).forEach(function (c) {
        html += '<h3 class="cat-titulo">' + ico("balanza") + esc(c) + '</h3><div class="doc-lista">' + porCat[c].map(function (n) {
          return tarjeta("LEY", "#0E2A68", n.titulo, "Biblioteca del Congreso Nacional (bcn.cl)", '<a class="boton" target="_blank" rel="noopener" href="' + esc(n.url) + '">' + ico("enlace") + " Abrir en BCN</a>");
        }).join("") + "</div>";
      });
    } else if (pest === "sitios") {
      html += '<div class="doc-lista">' + BASE.fuentes.map(function (f) { return tarjeta("WEB", "#2E9BD6", f.titulo, f.url.replace(/^https?:\/\//, ""), '<a class="boton" target="_blank" rel="noopener" href="' + esc(f.url) + '">' + ico("enlace") + " Visitar</a>"); }).join("") + "</div>";
    } else {
      var i = cat.info, p = cat.pei;
      html += '<div class="contenido">' + bloquesHTML(aBloques(
        "## Información del establecimiento\n| Dato | Detalle |\n|---|---|\n" +
        [["Nombre", i.nombre], ["RBD", i.rbd], ["Dependencia", i.dependencia], ["Tipo", i.tipo], ["Niveles", i.niveles], ["Dirección", i.direccion], ["Jornada", i.jornada], ["Programas", i.programas]]
          .filter(function (x) { return x[1]; }).map(function (x) { return "| " + x[0] + " | " + String(x[1]).replace(/\|/g, "/") + " |"; }).join("\n") +
        "\n\n## Misión\n" + p.mision + "\n\n## Visión\n" + p.vision + "\n\n## Sellos educativos\n" + p.sellos + "\n\n## Valores\n" + p.valores +
        (p.historia ? "\n\n## Historia\n" + p.historia : "") + "\n\n*Fuente: " + p.fuente + "*")) + "</div>";
    }
    abrirModal(ico("libro") + " Biblioteca", html, [{ texto: "Panel de administración", icono: "usuario", clase: "sec", fn: function () { location.href = "admin.html"; } }, { texto: "Cerrar", clase: "sec", fn: cerrarModal }]);
    document.querySelectorAll(".pestana").forEach(function (b) { b.onclick = function () { biblioteca(b.getAttribute("data-p")); }; });
    document.querySelectorAll("[data-ver]").forEach(function (b) { b.onclick = function () { abrirDocumento(acciones[+b.getAttribute("data-ver")]); }; });
  }

  // ---------- Modal genérico ----------
  var focoPrevio = null;
  function abrirModal(titulo, cuerpo, botones) {
    focoPrevio = document.activeElement;
    $("#modalTitulo").innerHTML = titulo; $("#modalCuerpo").innerHTML = cuerpo; var pie = $("#modalPie"); pie.innerHTML = "";
    (botones || []).forEach(function (b) { var x = el("button", "boton " + (b.clase || ""), (b.icono ? ico(b.icono) : "") + esc(b.texto)); x.type = "button"; x.onclick = b.fn; pie.appendChild(x); });
    $("#modal").hidden = false; $("#modalCuerpo").scrollTop = 0; $("#modalCerrar").focus();
  }
  function cerrarModal() { $("#modal").hidden = true; $("#modalCuerpo").innerHTML = ""; if (focoPrevio && focoPrevio.focus) focoPrevio.focus(); }

  // =====================================================================
  //  CONEXIÓN, TEMA, PWA E INICIO
  // =====================================================================
  function marcarEstado(s) {
    estado.servidor = s; var e = $("#estado");
    e.className = "estado " + (s === "ok" ? "ok" : s === "local" ? "local" : "");
    $("b", e).textContent = s === "ok" ? "IA en línea" : s === "local" ? "Modo sin conexión" : "Conectando…";
    e.title = s === "ok" ? "Conectado al asistente con IA" : "Respondo con la base local de documentos";
  }
  function cargarCatalogo() {
    try { var c = localStorage.getItem("catalogo"); if (c) estado.catalogo = JSON.parse(c); } catch (e) { }
    if (!URL_SERVIDOR) { marcarEstado("local"); return Promise.resolve(); }
    return fetch(URL_SERVIDOR + "?accion=catalogo", { redirect: "follow" }).then(function (r) { return r.json(); }).then(function (j) {
      if (j && j.ok) { estado.catalogo = j.catalogo; try { localStorage.setItem("catalogo", JSON.stringify(j.catalogo)); } catch (e) { } marcarEstado(j.ia ? "ok" : "local"); indice = null; }
      else marcarEstado("local");
    }).catch(function () { marcarEstado("local"); });
  }
  function aplicarTema(t) {
    if (t) document.documentElement.setAttribute("data-theme", t); else document.documentElement.removeAttribute("data-theme");
    $("#btnTema").innerHTML = ico(oscuro() ? "sol" : "luna");
  }
  function ajustarAltura() { var ta = $("#entrada"); ta.style.height = "auto"; ta.style.height = Math.min(140, ta.scrollHeight) + "px"; }
  function registrarSW() {
    if (!("serviceWorker" in navigator) || location.protocol === "file:") return;
    navigator.serviceWorker.register("sw.js").then(function (reg) {
      reg.addEventListener("updatefound", function () {
        var nw = reg.installing; if (!nw) return;
        nw.addEventListener("statechange", function () {
          if (nw.state === "installed" && navigator.serviceWorker.controller)
            toast("Hay una nueva versión de la app", 0, { texto: "Actualizar", fn: function () { nw.postMessage("saltar"); } });
        });
      });
    }).catch(function () { });
    var recargado = false;
    navigator.serviceWorker.addEventListener("controllerchange", function () { if (!recargado) { recargado = true; location.reload(); } });
  }

  // Nueva consulta: limpia la conversación (se mantiene el rol elegido)
  function nuevaConsulta() {
    if (estado.ocupado) return;
    if (window.speechSynthesis) speechSynthesis.cancel();
    estado.mensajes = []; estado.respuestas = [];
    if (!estado.perfil.rol) { bienvenida(); return; }
    chat.innerHTML = "";
    var m = msgIA("<p><b>¡Nueva consulta!</b> Sigo considerando tu rol de <b>" + esc(estado.perfil.cargo || estado.perfil.rol) + "</b>. Escribe tu pregunta o elige una idea:</p>");
    $(".contenido", m).appendChild(chips(SUGERENCIAS[estado.perfil.rol] || SUGERENCIAS[""], function (v) { enviarConsulta(v); }, { multiple: true }));
    hablar(m); $("#entrada").focus();
  }

  function iniciar() {
    chat = $("#chat");
    $("#btnBiblioteca").innerHTML = ico("libro"); $("#btnNueva").innerHTML = ico("nuevo") + '<span class="txt-largo">Nueva consulta</span><span class="txt-corto">Nueva</span>'; $("#btnEnviar").innerHTML = ico("enviar"); $("#btnWeb").innerHTML = ico("globo");
    aplicarTema(document.documentElement.getAttribute("data-theme"));
    $("#btnTema").onclick = function () { var t = oscuro() ? "light" : "dark"; try { localStorage.setItem("tema", t); } catch (e) { } aplicarTema(t); };
    $("#btnBiblioteca").onclick = function () { biblioteca(); };
    $("#btnNueva").onclick = nuevaConsulta;
    $("#btnWeb").onclick = function () {
      estado.web = !estado.web; this.setAttribute("aria-pressed", estado.web);
      toast(estado.web ? "Búsqueda web activada (solo fuentes oficiales: mineduc.cl, bcn.cl, supereduc.cl…)" : "Búsqueda web desactivada", 3200);
    };
    $("#formulario").addEventListener("submit", alEnviarFormulario);
    var ta = $("#entrada");
    ta.addEventListener("input", ajustarAltura);
    ta.addEventListener("keydown", function (e) { if (e.key === "Enter" && !e.shiftKey && !e.isComposing && matchMedia("(pointer:fine)").matches) { e.preventDefault(); $("#formulario").requestSubmit(); } });
    $("#modalCerrar").onclick = cerrarModal;
    $("#modal").addEventListener("click", function (e) { if (e.target.id === "modal") cerrarModal(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !$("#modal").hidden) cerrarModal(); });
    // Atajos
    var at = $("#atajos");
    [["escudo", "Protocolos", function () { enviarConsulta("¿Qué protocolos de actuación tiene el Reglamento Interno y quién es responsable de cada uno?"); }],
     ["check", "Evaluación y promoción", function () { enviarConsulta("Resume los requisitos de promoción del Reglamento de Evaluación 2026"); }],
     ["usuarios", "Faltas y medidas", function () { enviarConsulta("¿Cómo se gradúan las faltas y qué medidas contempla el Reglamento Interno?"); }],
     ["libro", "Biblioteca", function () { biblioteca(); }]].forEach(function (a) {
      var b = el("button", "chip", ico(a[0]) + esc(a[1])); b.type = "button"; b.onclick = function () { if (!estado.ocupado) a[2](); }; at.appendChild(b);
    });
    prepararBrazos();
    bienvenida();
    cargarCatalogo();
    registrarSW();
    window.addEventListener("online", cargarCatalogo);
    window.addEventListener("offline", function () { marcarEstado("local"); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar); else iniciar();
})();
