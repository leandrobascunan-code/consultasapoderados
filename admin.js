/* Panel de administración de Timón.
   La clave se verifica SIEMPRE en el servidor (Apps Script). La sesión vive solo en esta pestaña. */
(function () {
  "use strict";
  var URL = (window.URL_SERVIDOR || "").trim(), BASE = window.DATOS_BASE, KB = window.BASE_CONOCIMIENTO || { documentos: [] };
  var PDFJS = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js", PDFW = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
  var JSZIP = "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js";
  var CATEGORIAS = ["Reglamentos del establecimiento", "Protocolos", "PEI y planes institucionales", "Plan de Gestión de Convivencia", "PME", "Manuales", "Circulares y comunicados", "Enlaces de interés", "Otros documentos"];
  var token = null, cat = null, pestana = "stats";
  function $(s, r) { return (r || document).querySelector(s); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function svg(p) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + p + "</svg>"; }
  var I = {
    chat: svg('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'), salir: svg('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>'),
    escuela: svg('<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>'), brujula: svg('<circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-2.1 6.3-6.3 2.1 2.1-6.3z"/>'),
    usuarios: svg('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>'),
    archivo: svg('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>'), subir: svg('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5M12 3v12"/>'),
    enlace: svg('<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'),
    candado: svg('<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'), guardar: svg('<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>'),
    basura: svg('<path d="M3 6h18M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>'), mas: svg('<path d="M12 5v14M5 12h14"/>'),
    grafico: svg('<path d="M3 3v18h18"/><path d="M7 16v-5M12 16V8M17 16v-9"/>'),
    ojo: svg('<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>'), lapiz: svg('<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>')
  };
  function toast(m, ms) { var t = $("#aviso"); t.textContent = m; t.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(function () { t.hidden = true; }, ms || 2800); }
  function cargar(url) { return new Promise(function (ok, mal) { if (document.querySelector('script[src="' + url + '"]')) return ok(); var s = document.createElement("script"); s.src = url; s.onload = ok; s.onerror = mal; document.head.appendChild(s); }); }
  function api(datos) {
    datos.token = token;
    return fetch(URL, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(datos), redirect: "follow" })
      .then(function (r) { return r.json(); })
      .then(function (j) { if (!j.ok && /^SESION:/.test(j.error || "")) { token = null; login("La sesión expiró. Ingrese nuevamente."); throw new Error("sesion"); } return j; });
  }
  function msg(cont, tipo, texto) { var d = document.createElement("div"); d.className = "mensaje " + tipo; d.textContent = texto; cont.prepend(d); setTimeout(function () { d.remove(); }, 7000); }

  // ------------------------------ Ingreso ------------------------------
  function login(aviso) {
    $("#btnSalir").hidden = true;
    var z = $("#zona");
    z.innerHTML = '<div class="tarjeta login"><img src="logo.png" alt=""><h2 style="justify-content:center">' + I.candado + " Acceso restringido</h2>" +
      '<p class="ayuda">Solo para el equipo autorizado del establecimiento. La clave se verifica en el servidor.</p>' +
      (URL ? "" : '<div class="mensaje mal">Falta pegar la URL de Apps Script en el archivo config.js.</div>') +
      '<form id="fLogin"><div class="campo" style="text-align:left"><label for="clave">Clave del panel</label><input id="clave" type="password" autocomplete="current-password" required></div>' +
      '<button class="boton" style="width:100%;justify-content:center" type="submit">' + I.candado + ' Ingresar</button></form><div id="msgLogin"></div></div>';
    if (aviso) msg($("#msgLogin"), "mal", aviso);
    $("#clave").focus();
    $("#fLogin").onsubmit = function (e) {
      e.preventDefault(); if (!URL) return;
      var b = $("button", e.target); b.disabled = true; b.textContent = "Verificando…";
      fetch(URL, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ accion: "login", clave: $("#clave").value }), redirect: "follow" })
        .then(function (r) { return r.json(); }).then(function (j) {
          if (j.ok) { token = j.token; $("#clave").value = ""; cargarDatos(); }
          else { b.disabled = false; b.innerHTML = I.candado + " Ingresar"; msg($("#msgLogin"), "mal", j.error || "No se pudo ingresar"); }
        }).catch(function () { b.disabled = false; b.innerHTML = I.candado + " Ingresar"; msg($("#msgLogin"), "mal", "No hay conexión con el servidor."); });
    };
  }
  function cargarDatos() {
    $("#zona").innerHTML = '<div class="tarjeta"><p>Cargando datos…</p></div>';
    api({ accion: "admin_datos" }).then(function (j) {
      if (!j.ok) { $("#zona").innerHTML = '<div class="tarjeta"><div class="mensaje mal">' + esc(j.error) + "</div></div>"; return; }
      cat = j.catalogo; cat.hoja = j.hoja; cat.carpeta = j.carpeta; $("#btnSalir").hidden = false; pintar();
    }).catch(function () { });
  }

  // ------------------------------ Pantallas ------------------------------
  function pintar() {
    var tabs = [["claves", "⚙ Configuración", I.candado], ["stats", "Estadísticas", I.grafico], ["info", "Establecimiento", I.escuela], ["pei", "PEI", I.brujula], ["cargos", "Perfiles de cargo", I.usuarios], ["docs", "Documentos y enlaces", I.archivo]];
    var z = $("#zona");
    z.innerHTML = '<div class="pestanas">' + tabs.map(function (t) { return '<button class="pestana' + (t[0] === pestana ? " activa" : "") + '" data-p="' + t[0] + '">' + esc(t[1]) + "</button>"; }).join("") +
      '</div><div id="contenidoPanel"></div><p class="ayuda" style="font-size:.8rem;color:var(--texto-suave)">Los datos se guardan en su Google Drive: <a target="_blank" rel="noopener" href="' + esc(cat.hoja) + '">hoja de datos</a> · <a target="_blank" rel="noopener" href="' + esc(cat.carpeta) + '">carpeta de documentos</a>.</p>';
    z.querySelectorAll(".pestana").forEach(function (b) { b.onclick = function () { pestana = b.getAttribute("data-p"); pintar(); }; });
    ({ stats: pStats, info: pInfo, pei: pPei, cargos: pCargos, docs: pDocs, claves: pClaves })[pestana]($("#contenidoPanel"));
  }

  // ------------------------------ Claves de IA (Groq) ------------------------------
  function pClaves(c) {
    c.innerHTML = '<div class="tarjeta"><p>Cargando claves…</p></div>';
    api({ accion: "claves_listar" }).then(function (j) {
      if (!j.ok) {
        var viejo = /desconocida/i.test(j.error || "");
        c.innerHTML = '<div class="tarjeta"><h2>' + I.candado + ' Configuración · Claves de IA</h2><div class="mensaje mal">' +
          (viejo ? "Esta opción necesita el código nuevo del servidor. En Apps Script pegue el código actualizado (Codigo_CON_CLAVES_PRIVADO.txt), presione Guardar y luego Implementar → Gestionar implementaciones → ✏ → Nueva versión → Implementar. Después recargue esta página."
            : esc(j.error)) + "</div></div>";
        return;
      }
      var color = { "Disponible": "estado-visible", "Parcialmente agotada": "estado-medio", "Cuota diaria agotada": "estado-oculto", "No válida": "estado-oculto" };
      var filas = (j.claves || []).map(function (k) {
        return '<div class="fila-doc"><div class="t"><b>' + k.orden + ". " + esc(k.mascara) + "</b><small>" + esc(k.origen) + '</small></div><span class="' + (color[k.estado] || "estado-medio") + '">' + esc(k.estado) + "</span>" +
          (k.origen === "Panel" ? '<button class="boton peligro" type="button" data-quitar="' + esc(k.id) + '">' + I.basura + " Quitar</button>" : "") + "</div>";
      }).join("") || '<div class="mensaje mal">No hay claves configuradas.</div>';
      c.innerHTML = '<div class="tarjeta"><h2>' + I.candado + ' Configuración · Claves de IA (Groq)</h2>' +
        '<p class="ayuda">Cada clave de Groq tiene su propio límite gratuito (por minuto y por día). Con varias claves, si una se satura o agota su cuota diaria, el asistente pasa automáticamente a la siguiente, sin esperar. Las claves se guardan solo en el servidor (Apps Script) y aquí se muestran ocultas.</p>' +
        filas + '<div class="acciones-fila"><button class="boton sec" type="button" id="btnRefClaves">↻ Actualizar estado</button></div></div>' +
        '<div class="tarjeta" id="agregarClave"><h2>' + I.mas + ' Agregar una nueva clave de API</h2><p class="ayuda">Créela en <b>console.groq.com → API Keys → Create API Key</b>, cópiela completa (empieza con <code>gsk_</code>) y péguela aquí. Se prueba antes de guardarla. Nunca la escriba en GitHub ni la comparta por chat.</p>' +
        '<form id="fClave"><div class="campo"><label for="nuevaClave">Clave de Groq</label><input id="nuevaClave" type="password" autocomplete="off" placeholder="gsk_…" required></div>' +
        '<button class="boton" type="submit">' + I.guardar + ' Probar y guardar clave</button></form><div id="msgClave"></div></div>';
      $("#btnRefClaves").onclick = function () { pClaves(c); };
      c.querySelectorAll("[data-quitar]").forEach(function (b) {
        b.onclick = function () { if (confirm("¿Quitar esta clave del asistente?")) guardar({ accion: "claves_eliminar", id: b.getAttribute("data-quitar") }, c, function () { pClaves(c); }); };
      });
      $("#fClave").onsubmit = function (e) {
        e.preventDefault(); var b = $("button", e.target); b.disabled = true; b.textContent = "Probando la clave…";
        api({ accion: "claves_agregar", clave: $("#nuevaClave").value.trim() }).then(function (r) {
          $("#nuevaClave").value = "";
          if (r.ok) { toast("Clave guardada ✔", 3000); if (r.aviso) alert(r.aviso); pClaves(c); }
          else { b.disabled = false; b.innerHTML = I.guardar + " Probar y guardar clave"; msg($("#msgClave"), "mal", r.error || "No se pudo guardar"); }
        }).catch(function () { b.disabled = false; });
      };
    }).catch(function () { });
  }

  // ------------------------------ Estadísticas ------------------------------
  var CHART = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js", graficos = [];
  var PALETA = ["#1E4FA3", "#F5C400", "#4FA3E0", "#0E2A68", "#E67E22", "#1E8E5A", "#7E57C2", "#D64545", "#0E7C86", "#9C6B00", "#7d8696"];
  function mdSimple(t) {
    var lineas = String(t || "").split("\n"), html = "", lista = null, tabla = [];
    function inl(s) { return esc(s).replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>"); }
    function cerrar() {
      if (lista) { html += "</" + lista + ">"; lista = null; }
      if (tabla.length) { html += '<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%;font-size:.9rem">' + tabla.map(function (f, i) { return "<tr>" + f.map(function (c) { return i === 0 ? '<th style="background:#0E2A68;color:#fff;padding:7px;text-align:left">' + inl(c) + "</th>" : '<td style="border-top:1px solid var(--borde);padding:7px;vertical-align:top">' + inl(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</table></div>"; tabla = []; }
    }
    lineas.forEach(function (l) {
      var m;
      if (/^\s*\|.*\|\s*$/.test(l)) { if (lista) { html += "</" + lista + ">"; lista = null; } var cs = l.trim().replace(/^\||\|$/g, "").split("|").map(function (c) { return c.trim(); }); if (!cs.every(function (c) { return /^:?-{2,}:?$/.test(c); })) tabla.push(cs); return; }
      if (tabla.length) cerrar();
      if ((m = l.match(/^\s*#{1,4}\s+(.*)/))) { cerrar(); html += '<h3 style="color:var(--azul);margin:14px 0 6px">' + inl(m[1]) + "</h3>"; return; }
      if ((m = l.match(/^\s*(?:[-*•]|\d+[.)])\s+(.*)/))) { var tipo = /^\s*\d/.test(l) ? "ol" : "ul"; if (lista !== tipo) { cerrar(); html += "<" + tipo + ">"; lista = tipo; } html += "<li>" + inl(m[1]) + "</li>"; return; }
      cerrar(); if (l.trim()) html += "<p>" + inl(l) + "</p>";
    });
    cerrar(); return html;
  }
  // ---------- PDF formal del plan de trabajo ----------
  var JSPDF = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
  function latin(s) {
    return String(s || "").replace(/[→⇒]/g, "->").replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/[●▪■◦]/g, "•").replace(/<br\s*\/?>/gi, " ")
      .replace(/\*\*([^*]+)\*\*/g, "$1").replace(/`/g, "").replace(/[^\x09\x0A\x0D\x20-\x7E\xA0-\xFF€…•–—]/g, "");
  }
  function bloquesMd(t) {
    var out = [], tabla = [];
    String(t || "").split("\n").forEach(function (l) {
      var m;
      if (/^\s*\|.*\|\s*$/.test(l)) { var cs = l.trim().replace(/^\||\|$/g, "").split("|").map(function (x) { return x.trim(); }); if (!cs.every(function (x) { return /^:?-{2,}:?$/.test(x); })) tabla.push(cs); return; }
      if (tabla.length) { out.push({ t: "tabla", filas: tabla }); tabla = []; }
      if ((m = l.match(/^\s*#{1,4}\s+(.*)/))) out.push({ t: "h", x: m[1] });
      else if ((m = l.match(/^\s*([-*•]|\d+[.)])\s+(.*)/))) out.push({ t: "li", x: m[2], n: /\d/.test(m[1]) ? m[1] : "•" });
      else if (l.trim()) out.push({ t: "p", x: l });
    });
    if (tabla.length) out.push({ t: "tabla", filas: tabla });
    return out;
  }
  function logoData() {
    return fetch("logo.png").then(function (r) { return r.blob(); }).then(function (b) { return new Promise(function (ok) { var fr = new FileReader(); fr.onload = function () { ok(fr.result); }; fr.readAsDataURL(b); }); }).catch(function () { return null; });
  }
  function planPDF(texto, res) {
    toast("Preparando PDF…");
    Promise.all([cargar(JSPDF), logoData()]).then(function (v) {
      var logo = v[1], doc = new window.jspdf.jsPDF({ unit: "mm", format: "a4" }), M = 18, W = 174, y = 0;
      var info = {}; Object.keys(BASE.info).forEach(function (k) { info[k] = (cat && cat.info && cat.info[k]) || BASE.info[k]; });
      var AZUL = [14, 42, 104], ORO = [245, 196, 0], TXT = [25, 33, 55];
      function membrete() {
        if (logo) try { doc.addImage(logo, "PNG", M, 9, 13.5, 17.4); } catch (e) { }
        doc.setFont("helvetica", "bold"); doc.setFontSize(13); doc.setTextColor.apply(doc, AZUL); doc.text(latin(info.nombre), M + 17, 15);
        doc.setFont("helvetica", "normal"); doc.setFontSize(8.5); doc.setTextColor(80, 90, 110);
        doc.text(latin(info.dependencia + " · RBD " + info.rbd), M + 17, 19.6); doc.text(latin(info.direccion), M + 17, 23.4);
        doc.setDrawColor.apply(doc, ORO); doc.setLineWidth(1); doc.line(M, 28, 210 - M, 28);
        doc.setDrawColor.apply(doc, AZUL); doc.setLineWidth(.3); doc.line(M, 29.4, 210 - M, 29.4); y = 37;
      }
      function espacio(h) { if (y + h > 277) { doc.addPage(); membrete(); } }
      function escribir(t, o) {
        o = o || {}; doc.setFont("helvetica", o.b ? "bold" : (o.i ? "italic" : "normal")); doc.setFontSize(o.tam || 10.5); doc.setTextColor.apply(doc, o.color || TXT);
        var sang = o.sang || 0, ls = doc.splitTextToSize(latin(t), W - sang), alto = (o.tam || 10.5) * .43;
        ls.forEach(function (l, k) { espacio(alto + 1); if (k === 0 && o.vin) doc.text(o.vin, M + sang - 5, y); doc.text(l, M + sang, y); y += alto + 1.1; });
        y += o.desp == null ? 1.8 : o.desp;
      }
      function tabla(filas, anchos) {
        var nc = filas[0].length; anchos = anchos || filas[0].map(function () { return W / nc; }); doc.setFontSize(9);
        filas.forEach(function (f, fi) {
          var celdas = f.map(function (cx, ci) { return doc.splitTextToSize(latin(cx), anchos[ci] - 3); }), h = Math.max.apply(null, celdas.map(function (cx) { return cx.length; })) * 3.9 + 3, x = M;
          espacio(h + 1);
          celdas.forEach(function (cx, ci) {
            if (fi === 0) { doc.setFillColor.apply(doc, AZUL); doc.rect(x, y - 3.5, anchos[ci], h, "F"); doc.setTextColor(255, 255, 255); doc.setFont("helvetica", "bold"); }
            else { if (fi % 2 === 0) { doc.setFillColor(242, 246, 252); doc.rect(x, y - 3.5, anchos[ci], h, "F"); } doc.setDrawColor(214, 224, 240); doc.rect(x, y - 3.5, anchos[ci], h); doc.setTextColor.apply(doc, TXT); doc.setFont("helvetica", "normal"); }
            cx.forEach(function (l, k) { doc.text(l, x + 1.5, y + k * 3.9); }); x += anchos[ci];
          });
          y += h;
        });
        y += 5;
      }
      membrete();
      doc.setFont("helvetica", "bold"); doc.setFontSize(15); doc.setTextColor.apply(doc, AZUL);
      doc.splitTextToSize("Plan de trabajo para la apropiación del Reglamento Interno y del Reglamento de Evaluación", W).forEach(function (l) { doc.text(latin(l), M, y); y += 6.5; });
      y += 1;
      var filasFicha = [["Fecha", new Date().toLocaleDateString("es-CL", { year: "numeric", month: "long", day: "numeric" })], ["Período analizado", res.mes || "Todo el registro"],
        ["Rol analizado", res.rol || "Todos los roles"], ["Consultas analizadas", String(res.total || 0)], ["Fuente", "Estadísticas anónimas del asistente Timón (solo tema general y rol)"]];
      doc.setFontSize(10); var altoF = 6 + filasFicha.length * 5.4;
      doc.setFillColor(238, 243, 251); doc.setDrawColor(214, 224, 240); doc.roundedRect(M, y - 4, W, altoF, 2.5, 2.5, "FD");
      filasFicha.forEach(function (f) { doc.setFont("helvetica", "bold"); doc.setTextColor.apply(doc, AZUL); doc.text(f[0] + ":", M + 4, y + 1); doc.setFont("helvetica", "normal"); doc.setTextColor.apply(doc, TXT); doc.text(latin(f[1]), M + 48, y + 1); y += 5.4; });
      y += 8;
      escribir("1. Resumen de las consultas", { b: true, tam: 12.5, color: AZUL, desp: 2 });
      if (res.temas && res.temas.length) tabla([["Tema", "Consultas", "%"]].concat(res.temas.map(function (t) { return [t[0], String(t[1]), Math.round(t[1] * 100 / res.total) + "%"]; })), [124, 25, 25]);
      if (res.roles && res.roles.length) tabla([["Rol", "Consultas", "Principal duda"]].concat(res.roles.map(function (r) { return [r[0], String(r[1]), r[2]]; })), [62, 25, 87]);
      escribir("2. Propuesta de plan de trabajo", { b: true, tam: 12.5, color: AZUL, desp: 2 });
      bloquesMd(texto).forEach(function (b) {
        if (b.t === "h") { y += 1.5; espacio(10); escribir(b.x, { b: true, tam: 11.5, color: AZUL, desp: 1 }); }
        else if (b.t === "p") escribir(b.x);
        else if (b.t === "li") escribir(b.x, { sang: 6, vin: b.n, desp: .6 });
        else if (b.t === "tabla") tabla(b.filas);
      });
      // Validación
      y += 4; espacio(42);
      escribir("3. Validación", { b: true, tam: 12.5, color: AZUL, desp: 6 });
      doc.setFontSize(9.5); doc.setTextColor.apply(doc, TXT); doc.setFont("helvetica", "normal");
      [["Elaborado por", M], ["Revisado por (UTP / Convivencia)", M + 60], ["Aprobado por (Dirección)", M + 120]].forEach(function (f) {
        doc.setDrawColor(120, 130, 150); doc.line(f[1], y + 8, f[1] + 52, y + 8); doc.text(latin(f[0]), f[1], y + 13);
      });
      y += 22;
      // Nota IA
      espacio(22);
      var nota = "Nota: la propuesta fue generada con apoyo de inteligencia artificial a partir de estadísticas anónimas de consultas (solo tema general y rol, sin datos personales, Ley N° 21.719). Debe ser revisada, ajustada y validada por el equipo directivo antes de su aplicación.";
      doc.setFontSize(8.8); var ln = doc.splitTextToSize(latin(nota), W - 8);
      doc.setFillColor(255, 248, 214); doc.setDrawColor(217, 164, 0); doc.roundedRect(M, y - 4, W, ln.length * 3.9 + 5, 2, 2, "FD");
      doc.setFont("helvetica", "italic"); doc.setTextColor(90, 70, 0); ln.forEach(function (l, k) { doc.text(l, M + 4, y + .5 + k * 3.9); });
      var n = doc.getNumberOfPages();
      for (var i = 1; i <= n; i++) {
        doc.setPage(i); doc.setDrawColor(214, 224, 240); doc.setLineWidth(.3); doc.line(M, 284, 210 - M, 284);
        doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(110, 120, 140);
        doc.text(latin("Plan de trabajo · " + info.nombre + " · Generado con el asistente Timón"), M, 289);
        doc.text("Página " + i + " de " + n, 210 - M, 289, { align: "right" });
      }
      doc.save("Plan_de_trabajo_Reglamento_" + new Date().toISOString().slice(0, 10) + ".pdf");
      toast("PDF descargado");
    }).catch(function () { toast("No se pudo crear el PDF. Revise su conexión.", 4000); });
  }

  function pStats(c) {
    c.innerHTML = '<div class="tarjeta"><p>Cargando estadísticas…</p></div>';
    api({ accion: "estadisticas" }).then(function (j) {
      if (!j.ok) { c.innerHTML = '<div class="tarjeta"><div class="mensaje mal">' + esc(j.error) + "</div></div>"; return; }
      var filas = j.filas || [], meses = [];
      filas.forEach(function (f) { if (meses.indexOf(f.mes) < 0) meses.push(f.mes); }); meses.sort();
      var rolesTodos = []; filas.forEach(function (f) { if (rolesTodos.indexOf(f.rol) < 0) rolesTodos.push(f.rol); });
      c.innerHTML = '<div class="tarjeta"><h2>' + I.grafico + ' Estadísticas de consultas</h2><p class="ayuda">Se cuenta solo el <b>tema general</b> y el <b>rol</b> de cada consulta, de forma anónima (nunca el texto). Úselo para detectar las principales dudas de cada estamento y orientar un plan de trabajo de apropiación del reglamento.</p>' +
        '<div class="rejilla" style="max-width:560px"><div class="campo"><label for="fMes">Período</label><select id="fMes"><option value="">Todo el registro</option>' + meses.slice().reverse().map(function (m) { return "<option>" + esc(m) + "</option>"; }).join("") + "</select></div>" +
        '<div class="campo"><label for="fRol">Rol</label><select id="fRol"><option value="">Todos los roles</option>' + rolesTodos.map(function (r) { return "<option>" + esc(r) + "</option>"; }).join("") + "</select></div></div>" +
        '<div class="acciones-fila" style="margin:0 0 12px;align-items:center"><button class="boton sec" id="btnActualizar" type="button">↻ Actualizar conteo</button>' +
        '<button class="boton peligro" id="btnReiniciar" type="button">' + I.basura + ' Reiniciar conteo</button><span class="contador" id="contador">Total registrado: <b>' +
        filas.reduce(function (a, f) { return a + f.n; }, 0) + "</b> consultas · actualizado a las " + new Date().toLocaleTimeString("es-CL", { hour: "2-digit", minute: "2-digit" }) + "</span></div>" +
        '<div id="kpis" class="kpis"></div>' +
        '<div class="graf-caja"><h3>Consultas por rol y su principal duda</h3><div id="tablaRoles"></div></div>' +
        '<div class="rejilla"><div class="graf-caja"><h3>Consultas por rol</h3><div style="position:relative;height:250px"><canvas id="gRoles"></canvas></div></div><div class="graf-caja"><h3>Evolución mensual</h3><div style="position:relative;height:250px"><canvas id="gMeses"></canvas></div></div></div>' +
        '<div class="graf-caja"><h3>Temas consultados según rol</h3><div style="position:relative;height:380px"><canvas id="gCruce"></canvas></div></div>' +
        '<div class="graf-caja"><h3>Tabla de temas por rol</h3><div id="tablaCruce" style="overflow-x:auto"></div></div>' +
        '<div class="graf-caja"><h3>Temas consultados (total)</h3><div style="position:relative;height:340px"><canvas id="gTemas"></canvas></div><div id="tablaTemas"></div></div>' +
        '<div class="acciones-fila"><button class="boton" id="btnPlan">' + I.brujula + ' Generar plan de trabajo con IA</button><button class="boton sec" id="btnCsv">' + I.archivo + ' Descargar datos (CSV)</button></div><div id="plan"></div></div>';
      function corto(t, max) { return t.length > max ? t.slice(0, max - 1) + "…" : t; }
      var resumen = null;
      $("#btnActualizar").onclick = function () { pStats(c); };
      $("#btnReiniciar").onclick = function () {
        if (!confirm("¿Reiniciar el conteo de consultas a cero?\n\nSe guardará una copia de respaldo en la hoja de datos de Drive (pestaña \"Respaldo\").")) return;
        api({ accion: "reiniciar_estadisticas" }).then(function (r) {
          if (r.ok) { toast(r.respaldo ? "Conteo reiniciado. Respaldo: " + r.respaldo : "Conteo reiniciado", 4000); pStats(c); }
          else msg(c, "mal", r.error || "No se pudo reiniciar");
        }).catch(function () { });
      };
      function dibujar() {
        var mes = $("#fMes").value, rolF = $("#fRol").value, porTema = {}, porRol = {}, porMes = {}, cruce = {}, total = 0;
        filas.forEach(function (f) {
          if (rolF && f.rol !== rolF) return;
          porMes[f.mes] = (porMes[f.mes] || 0) + f.n; if (mes && f.mes !== mes) return;
          porTema[f.tema] = (porTema[f.tema] || 0) + f.n; porRol[f.rol] = (porRol[f.rol] || 0) + f.n; total += f.n;
          cruce[f.rol] = cruce[f.rol] || {}; cruce[f.rol][f.tema] = (cruce[f.rol][f.tema] || 0) + f.n;
        });
        var temas = Object.keys(porTema).sort(function (a, b) { return porTema[b] - porTema[a]; }), roles = Object.keys(porRol).sort(function (a, b) { return porRol[b] - porRol[a]; });
        function principal(r) { return Object.keys(cruce[r]).sort(function (a, b) { return cruce[r][b] - cruce[r][a]; })[0]; }
        resumen = { mes: mes, rol: rolF, total: total, temas: temas.map(function (t) { return [t, porTema[t]]; }), roles: roles.map(function (r) { return [r, porRol[r], principal(r)]; }) };
        $("#kpis").innerHTML = [["Consultas", total], ["Tema principal", temas[0] || "—"], ["Rol que más consulta", roles[0] || "—"]].map(function (k) { return '<div class="kpi"><b>' + esc(k[1]) + "</b><span>" + esc(k[0]) + "</span></div>"; }).join("");
        var vacio = '<div class="mensaje info">Aún no hay consultas registradas para este filtro. Aparecerán a medida que la comunidad use el chat (después de actualizar Apps Script y GitHub).</div>';
        $("#tablaRoles").innerHTML = total ? '<table class="tabla-stats"><tr><th>Rol</th><th>Consultas</th><th>%</th><th>Principal duda</th></tr>' + roles.map(function (r) {
          var p = principal(r); return "<tr><td><b>" + esc(r) + "</b></td><td>" + porRol[r] + "</td><td>" + Math.round(porRol[r] * 100 / total) + "%</td><td>" + esc(p) + " (" + cruce[r][p] + ")</td></tr>"; }).join("") + "</table>" : vacio;
        $("#tablaCruce").innerHTML = total ? '<table class="tabla-stats"><tr><th>Tema</th>' + roles.map(function (r) { return "<th>" + esc(r) + "</th>"; }).join("") + "<th>Total</th></tr>" + temas.map(function (t) {
          return "<tr><td>" + esc(t) + "</td>" + roles.map(function (r) { var v = cruce[r][t] || 0, a = v ? Math.min(.75, .12 + v / porTema[temas[0]] * .6) : 0; return '<td style="text-align:center;background:rgba(30,79,163,' + a.toFixed(2) + ');' + (a > .45 ? "color:#fff;font-weight:800" : "") + '">' + (v || "–") + "</td>"; }).join("") + "<td><b>" + porTema[t] + "</b></td></tr>"; }).join("") + "</table>" : "";
        $("#tablaTemas").innerHTML = total ? '<table class="tabla-stats"><tr><th>Tema</th><th>Consultas</th><th>%</th></tr>' + temas.map(function (t) { return "<tr><td>" + esc(t) + "</td><td>" + porTema[t] + "</td><td>" + Math.round(porTema[t] * 100 / total) + "%</td></tr>"; }).join("") + "</table>" : vacio;
        cargar(CHART).then(function () {
          graficos.forEach(function (g) { g.destroy(); }); graficos = [];
          var oscuro = document.documentElement.getAttribute("data-theme") === "dark" || (!document.documentElement.getAttribute("data-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
          Chart.defaults.color = oscuro ? "#EAF0FB" : "#13213D"; Chart.defaults.font.family = "Nunito";
          var maxEt = innerWidth < 640 ? 16 : 34;
          graficos.push(new Chart($("#gTemas"), { type: "bar", data: { labels: temas, datasets: [{ label: "Consultas", data: temas.map(function (t) { return porTema[t]; }), backgroundColor: temas.map(function (t, i) { return PALETA[i % PALETA.length]; }), borderRadius: 8 }] },
            options: { indexAxis: "y", maintainAspectRatio: false, animation: { duration: 1200 }, plugins: { legend: { display: false } },
              scales: { x: { beginAtZero: true, ticks: { precision: 0 } }, y: { ticks: { callback: function (v) { return corto(this.getLabelForValue(v), maxEt); } } } } } }));
          graficos.push(new Chart($("#gCruce"), { type: "bar", data: { labels: temas, datasets: roles.map(function (r, i) { return { label: r, data: temas.map(function (t) { return cruce[r][t] || 0; }), backgroundColor: PALETA[i % PALETA.length], borderRadius: 4 }; }) },
            options: { indexAxis: "y", maintainAspectRatio: false, animation: { duration: 1200 }, plugins: { legend: { position: "bottom" } },
              scales: { x: { stacked: true, beginAtZero: true, ticks: { precision: 0 } }, y: { stacked: true, ticks: { callback: function (v) { return corto(this.getLabelForValue(v), maxEt); } } } } } }));
          graficos.push(new Chart($("#gRoles"), { type: "doughnut", data: { labels: roles, datasets: [{ data: roles.map(function (r) { return porRol[r]; }), backgroundColor: PALETA }] }, options: { maintainAspectRatio: false, animation: { duration: 1200 }, plugins: { legend: { position: "bottom" } } } }));
          graficos.push(new Chart($("#gMeses"), { type: "line", data: { labels: meses, datasets: [{ label: "Consultas", data: meses.map(function (m) { return porMes[m] || 0; }), borderColor: "#1E4FA3", backgroundColor: "rgba(30,79,163,.15)", fill: true, tension: .35 }] }, options: { maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { precision: 0 } } } } }));
        });
      }
      $("#fMes").onchange = dibujar; $("#fRol").onchange = dibujar; dibujar();
      $("#btnCsv").onclick = function () {
        var csv = "mes;tema;rol;consultas\n" + filas.map(function (f) { return [f.mes, f.tema, f.rol, f.n].join(";"); }).join("\n");
        var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob(["﻿" + csv], { type: "text/csv" })); a.download = "consultas_por_tema_y_rol.csv"; a.click();
      };
      $("#btnPlan").onclick = function () {
        var b = this; b.disabled = true; $("#plan").innerHTML = '<div class="mensaje info">Preparando la propuesta de plan de trabajo por rol…</div>';
        var foto = JSON.parse(JSON.stringify(resumen || {}));
        api({ accion: "plan_trabajo", mes: $("#fMes").value, rol: $("#fRol").value }).then(function (r) {
          b.disabled = false;
          if (!r.ok) { $("#plan").innerHTML = '<div class="mensaje mal">' + esc(r.error) + "</div>"; return; }
          $("#plan").innerHTML = '<div class="plan-caja"><div class="acciones-fila" style="margin:0 0 10px"><button class="boton amarillo" id="btnPlanPdf" type="button">' + I.archivo + ' Descargar plan en PDF</button></div>' +
            mdSimple(r.texto) + '<p class="ayuda" style="font-size:.8rem">Propuesta generada con IA a partir de ' + r.total + " consultas. Revísela y ajústela con el equipo directivo.</p></div>";
          $("#btnPlanPdf").onclick = function () { planPDF(r.texto, foto); };
        }).catch(function () { b.disabled = false; });
      };
    }).catch(function () { });
  }
  function valor(obj, base, k) { return (obj && obj[k]) || (base && base[k]) || ""; }
  function campo(id, etiqueta, val, area, extra) {
    return '<div class="campo"><label for="' + id + '">' + esc(etiqueta) + "</label>" + (area ? '<textarea id="' + id + '"' + (extra || "") + ">" + esc(val) + "</textarea>" : '<input id="' + id + '" value="' + esc(val) + '"' + (extra || "") + ">") + "</div>";
  }
  function pInfo(c) {
    var L = { nombre: "Nombre del establecimiento", rbd: "RBD", dependencia: "Dependencia", tipo: "Tipo de enseñanza", niveles: "Niveles", direccion: "Dirección", jornada: "Jornada", programas: "Programas de apoyo", sitio: "Sitio web institucional (https://…)", otros: "Otra información relevante" };
    c.innerHTML = '<div class="tarjeta"><h2>' + I.escuela + ' Información del establecimiento</h2><p class="ayuda">Estos datos aparecen en el chat, en la Biblioteca y en el membrete de los PDF.</p><div class="rejilla">' +
      Object.keys(L).map(function (k) { return campo("i_" + k, L[k], valor(cat.info, BASE.info, k), k === "otros"); }).join("") +
      '</div><button class="boton" id="gInfo">' + I.guardar + " Guardar</button></div>";
    $("#gInfo").onclick = function () {
      var info = {}; Object.keys(L).forEach(function (k) { info[k] = $("#i_" + k).value.trim(); });
      guardar({ accion: "guardar_info", info: info }, c, function () { cat.info = info; });
    };
  }
  function pPei(c) {
    var L = { mision: "Misión", vision: "Visión", sellos: "Sellos educativos", valores: "Valores", historia: "Historia del establecimiento", fuente: "Fuente (documento de origen)" };
    c.innerHTML = '<div class="tarjeta"><h2>' + I.brujula + ' Proyecto Educativo Institucional (PEI)</h2><p class="ayuda">La IA usa estos textos para alinear sus sugerencias con la misión, visión, sellos e historia del colegio.</p>' +
      Object.keys(L).map(function (k) { return campo("p_" + k, L[k], valor(cat.pei, BASE.pei, k), true, k === "historia" ? ' placeholder="Escriba aquí una breve reseña histórica del colegio"' : ""); }).join("") +
      '<button class="boton" id="gPei">' + I.guardar + " Guardar PEI</button></div>";
    $("#gPei").onclick = function () {
      var pei = {}; Object.keys(L).forEach(function (k) { pei[k] = $("#p_" + k).value.trim(); });
      guardar({ accion: "guardar_info", pei: pei }, c, function () { cat.pei = pei; });
    };
  }
  function pCargos(c) {
    var lista = (cat.cargos && cat.cargos.length ? cat.cargos : BASE.cargos).map(function (x) { return { rol: x.rol, cargo: x.cargo, funciones: x.funciones }; });
    function dibujar() {
      c.innerHTML = '<div class="tarjeta"><h2>' + I.usuarios + ' Perfiles de cargo</h2><p class="ayuda">El chat ofrece estos cargos al iniciar y adapta sus respuestas a las funciones descritas.</p><div id="listaCargos"></div>' +
        '<div class="acciones-fila"><button class="boton sec" id="addCargo">' + I.mas + ' Agregar cargo</button><button class="boton" id="gCargos">' + I.guardar + " Guardar perfiles</button></div></div>";
      var cont = $("#listaCargos");
      lista.forEach(function (x, i) {
        var d = document.createElement("div"); d.className = "cargo";
        d.innerHTML = '<div class="rejilla"><div class="campo"><label>Rol</label><select data-k="rol">' + BASE.roles.map(function (r) { return "<option" + (r === x.rol ? " selected" : "") + ">" + esc(r) + "</option>"; }).join("") +
          '</select></div><div class="campo"><label>Cargo</label><input data-k="cargo" value="' + esc(x.cargo) + '"></div><div class="campo"><button class="boton peligro" type="button" title="Eliminar cargo">' + I.basura + "</button></div></div>" +
          '<div class="campo"><label>Funciones principales</label><textarea data-k="funciones">' + esc(x.funciones) + "</textarea></div>";
        d.querySelectorAll("[data-k]").forEach(function (inp) { inp.oninput = inp.onchange = function () { lista[i][inp.getAttribute("data-k")] = inp.value; }; });
        $(".peligro", d).onclick = function () { if (confirm("¿Eliminar el cargo «" + x.cargo + "»?")) { lista.splice(i, 1); dibujar(); } };
        cont.appendChild(d);
      });
      $("#addCargo").onclick = function () { lista.push({ rol: BASE.roles[0], cargo: "Nuevo cargo", funciones: "" }); dibujar(); cont.lastChild && cont.lastChild.scrollIntoView({ behavior: "smooth" }); };
      $("#gCargos").onclick = function () { guardar({ accion: "guardar_cargos", cargos: lista }, c, function () { cat.cargos = lista.slice(); }); };
    }
    dibujar();
  }
  function pDocs(c) {
    var ocultos = cat.ocultos || [];
    var base = KB.documentos.map(function (d) {
      var oc = ocultos.indexOf(d.id) >= 0;
      return '<div class="fila-doc"><div class="t"><b>' + esc(d.titulo) + "</b><small>Incluido en la app · " + esc(d.archivo) + '</small></div><span class="' + (oc ? "estado-oculto" : "estado-visible") + '">' + (oc ? "Eliminado del chat" : "Visible") + "</span>" +
        '<button class="boton ' + (oc ? "" : "peligro") + '" data-base="' + esc(d.id) + '" data-oc="' + (oc ? 0 : 1) + '">' + (oc ? I.ojo + " Restaurar" : I.basura + " Eliminar") + "</button></div>";
    }).join("");
    var propios = (cat.documentos || []).map(function (d) {
      return '<div class="fila-doc"><div class="t"><b>' + esc(d.titulo) + "</b><small>" + esc(d.categoria || "") + " · " + (d.origen === "drive" ? "Archivo en Drive" : "Enlace") + "</small></div>" +
        (d.url ? '<a class="boton sec" target="_blank" rel="noopener" href="' + esc(d.url) + '">' + I.ojo + " Ver</a>" : "") +
        (d.origen === "enlace" ? '<button class="boton sec" data-editar="' + esc(d.id) + '">' + I.lapiz + " Editar</button>" : "") +
        '<button class="boton peligro" data-borrar="' + esc(d.id) + '">' + I.basura + " Eliminar</button></div>";
    }).join("") || '<p class="ayuda">Aún no hay documentos ni enlaces agregados.</p>';
    var opcCat = CATEGORIAS.map(function (x) { return "<option>" + esc(x) + "</option>"; }).join("");
    c.innerHTML =
      '<div class="tarjeta"><h2>' + I.subir + ' Subir un documento</h2><p class="ayuda">PDF, Word (.docx) o texto (.txt), hasta 20 MB. El texto se extrae para que el chat pueda citarlo. Se guarda en la carpeta de Drive del asistente.</p>' +
      '<form id="fSubir"><div class="campo"><label for="sArchivo">Archivo</label><input id="sArchivo" type="file" accept=".pdf,.docx,.txt,application/pdf" required></div><div class="rejilla">' +
      campo("sTitulo", "Título", "", false, ' required placeholder="Ej.: Plan de Gestión de Convivencia 2026"') +
      '<div class="campo"><label for="sCat">Categoría</label><select id="sCat">' + opcCat + "</select></div></div>" + campo("sDesc", "Descripción breve (opcional)", "", true, ' style="min-height:60px"') +
      '<button class="boton" type="submit">' + I.subir + ' Subir documento</button></form><div id="progreso"></div></div>' +
      '<div class="tarjeta"><h2>' + I.enlace + ' Agregar un enlace</h2><form id="fEnlace"><div class="rejilla">' + campo("eTitulo", "Título", "", false, " required") + campo("eUrl", "Dirección (https://…)", "", false, ' required type="url" placeholder="https://"') +
      '<div class="campo"><label for="eCat">Categoría</label><select id="eCat">' + opcCat.replace("<option>Enlaces de interés", "<option selected>Enlaces de interés") + "</select></div>" + campo("eDesc", "Descripción (opcional)", "") +
      '</div><input type="hidden" id="eId"><button class="boton" type="submit">' + I.guardar + ' Guardar enlace</button></form></div>' +
      '<div class="tarjeta"><h2>' + I.archivo + " Documentos y enlaces agregados</h2>" + propios + "</div>" +
      '<div class="tarjeta"><h2>' + I.archivo + ' Documentos incluidos en la app</h2><p class="ayuda">Vienen en el paquete de GitHub. "Eliminar" los quita del chat y de la Biblioteca (puede restaurarlos). Para borrarlos definitivamente, elimine el archivo en GitHub.</p>' + base + "</div>";

    c.querySelectorAll("[data-base]").forEach(function (b) {
      b.onclick = function () {
        var ocultar = b.getAttribute("data-oc") === "1";
        if (ocultar && !confirm("¿Quitar este documento del chat y la Biblioteca?")) return;
        guardar({ accion: "ocultar_base", id: b.getAttribute("data-base"), ocultar: ocultar }, c, function (j) { cat.ocultos = j.ocultos; pintar(); });
      };
    });
    c.querySelectorAll("[data-borrar]").forEach(function (b) {
      b.onclick = function () {
        if (!confirm("¿Eliminar este documento? El archivo se enviará a la papelera de Drive.")) return;
        var id = b.getAttribute("data-borrar");
        guardar({ accion: "eliminar_documento", id: id }, c, function () { cat.documentos = cat.documentos.filter(function (d) { return d.id !== id; }); pintar(); });
      };
    });
    c.querySelectorAll("[data-editar]").forEach(function (b) {
      b.onclick = function () {
        var d = cat.documentos.filter(function (x) { return x.id === b.getAttribute("data-editar"); })[0]; if (!d) return;
        $("#eTitulo").value = d.titulo; $("#eUrl").value = d.url || ""; $("#eCat").value = d.categoria || "Enlaces de interés"; $("#eDesc").value = d.descripcion || ""; $("#eId").value = d.id;
        $("#fEnlace").scrollIntoView({ behavior: "smooth" });
      };
    });
    $("#fEnlace").onsubmit = function (e) {
      e.preventDefault();
      var doc = { id: $("#eId").value || null, titulo: $("#eTitulo").value.trim(), url: $("#eUrl").value.trim(), categoria: $("#eCat").value, descripcion: $("#eDesc").value.trim() };
      if (!/^https:\/\//i.test(doc.url)) { msg(c, "mal", "El enlace debe comenzar con https://"); return; }
      guardar({ accion: "guardar_enlace", doc: doc }, c, function () { cargarDatos(); });
    };
    $("#sArchivo").onchange = function () { var f = this.files[0]; if (f && !$("#sTitulo").value) $("#sTitulo").value = f.name.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " "); };
    $("#fSubir").onsubmit = function (e) { e.preventDefault(); subir(c); };
  }

  // ------------------------------ Subida ------------------------------
  function extraerTexto(f, avance) {
    var ext = (f.name.split(".").pop() || "").toLowerCase();
    if (ext === "txt") return f.text();
    if (ext === "pdf") {
      return cargar(PDFJS).then(function () { pdfjsLib.GlobalWorkerOptions.workerSrc = PDFW; return f.arrayBuffer(); })
        .then(function (buf) { return pdfjsLib.getDocument({ data: buf }).promise; })
        .then(function (pdf) {
          var partes = [], cadena = Promise.resolve();
          for (var i = 1; i <= pdf.numPages; i++) (function (n) {
            cadena = cadena.then(function () { return pdf.getPage(n); }).then(function (p) { return p.getTextContent(); }).then(function (tc) {
              avance("Leyendo página " + n + " de " + pdf.numPages + "…");
              partes.push("[[PÁGINA " + n + "]]\n" + tc.items.map(function (it) { return it.str + (it.hasEOL ? "\n" : " "); }).join(""));
            });
          })(i);
          return cadena.then(function () { return partes.join("\n"); });
        });
    }
    if (ext === "docx") {
      return cargar(JSZIP).then(function () { return JSZip.loadAsync(f); }).then(function (z) { return z.file("word/document.xml").async("string"); }).then(function (xml) {
        return xml.replace(/<\/w:p>/g, "\n").replace(/<w:tab\/>/g, "\t").replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'");
      });
    }
    return Promise.reject(new Error("Formato no permitido. Use PDF, DOCX o TXT."));
  }
  function aBase64(f) { return new Promise(function (ok, mal) { var r = new FileReader(); r.onload = function () { ok(String(r.result).split(",")[1]); }; r.onerror = mal; r.readAsDataURL(f); }); }
  function subir(c) {
    var f = $("#sArchivo").files[0], prog = $("#progreso"); if (!f) return;
    if (f.size > 20 * 1024 * 1024) { msg(prog, "mal", "El archivo supera 20 MB. Comprímalo o súbalo a Drive y agréguelo como enlace."); return; }
    var boton = $("#fSubir button[type=submit]"); boton.disabled = true;
    function avance(t) { prog.innerHTML = '<div class="mensaje info">' + esc(t) + "</div>"; }
    avance("Extrayendo el texto del documento…");
    var texto;
    extraerTexto(f, avance).then(function (t) {
      texto = t; if (texto.replace(/\[\[PÁGINA \d+\]\]/g, "").trim().length < 50) avance("Aviso: el documento parece escaneado (sin texto). Se guardará, pero el chat no podrá citarlo.");
      return aBase64(f);
    }).then(function (b64) {
      avance("Subiendo a Drive… (puede tardar un poco)");
      return api({ accion: "subir_archivo", nombre: f.name, mime: f.type || "application/octet-stream", base64: b64, texto: texto,
        titulo: $("#sTitulo").value.trim() || f.name, categoria: $("#sCat").value, descripcion: $("#sDesc").value.trim() });
    }).then(function (j) {
      boton.disabled = false;
      if (j.ok) { toast("Documento subido (" + j.fragmentos + " fragmentos para el chat)", 4000); if (j.aviso) alert(j.aviso); cargarDatos(); }
      else msg(prog, "mal", j.error || "No se pudo subir");
    }).catch(function (err) { boton.disabled = false; if (err.message !== "sesion") msg(prog, "mal", err.message || "Error al subir"); });
  }
  function guardar(datos, c, despues) {
    toast("Guardando…");
    api(datos).then(function (j) {
      if (j.ok) { toast("Cambios guardados ✔"); if (despues) despues(j); } else msg(c, "mal", j.error || "No se pudo guardar");
    }).catch(function (e) { if (e.message !== "sesion") msg(c, "mal", "Sin conexión con el servidor"); });
  }

  $("#aChat").innerHTML = I.chat; $("#btnSalir").innerHTML = I.salir;
  $("#btnSalir").onclick = function () { api({ accion: "salir" }).catch(function () { }); token = null; login(); };
  login();
})();
