/* =====================================================================
   CONFIGURACIÓN DEL ASISTENTE
   ---------------------------------------------------------------------
   API: dirección de la aplicación web de Google Apps Script
        (ver apps-script/Codigo.gs y docs/MANUAL.md).
        - Vacío ("")  → MODO GUÍAS: responde solo con la base de
          conocimiento de los manuales, sin salir del navegador.
        - Con URL     → MODO IA: además consulta a un modelo de IA
          a través de Apps Script, que guarda la clave de forma segura.

   ⚠️ NUNCA escriba aquí claves de API ni contraseñas: este archivo es
      público en GitHub (Manual 5, apartado 1.1).
   ===================================================================== */
const CONFIG = {
  API: "https://script.google.com/a/macros/andaliensur.cl/s/AKfycbyIJskXlsYBus4q7tf1DQMW8hkDGZKb_Fa0At6CPu9O1kFCT0QOi4qOBYFGVQ7j4QM1/exec",
  NOMBRE: "Asistente IA Educativa",
  INSTITUCION: "SLEP Andalién Sur"
};
