/* =====================================================================
   BASE DE CONOCIMIENTO
   Fuente: Serie de Manuales "Inteligencia Artificial para la Gestión
   Educativa" – SLEP Andalién Sur (2026), que a su vez se fundan en
   documentos del MINEDUC y en la Ley N.º 21.719 (y Leyes 19.628, 21.040,
   20.285).
   Para agregar contenido: copie un bloque { ... } y edítelo.
   - fuente:  manual o norma de origen (se muestra como etiqueta)
   - titulo:  título corto de la ficha
   - claves:  palabras que la gente usaría al preguntar (sin tildes da igual)
   - texto:   respuesta en formato Markdown simple (**negrita**, listas -, 1.)
   ===================================================================== */

const FUENTES = {
  M1: "Manual 1 · Importancia y ventajas de la IA",
  M2: "Manual 2 · Uso ético y tipos de uso",
  M3: "Manual 3 · Herramientas de IA",
  M4: "Manual 4 · Prompts efectivos",
  M5: "Manual 5 · Soporte técnico",
  LEY: "Ley N.º 21.719 · Protección de datos personales",
  MINEDUC: "MINEDUC · PotencIA el aprendizaje (2025)",
  EXT: "Fuentes oficiales externas (MINEDUC, CPEIP, UNESCO)",
  DOC: "Docentes · Bases Curriculares y Marco para la Buena Enseñanza",
  DIR: "Directivos · Marco para la Buena Dirección y recursos de gestión",
  ASI: "Asistentes de la educación y convivencia educativa",
  SLEP: "Información del Servicio (actualizada por el equipo)",
  PAL: "Plan Anual Local 2026 · SLEP Andalién Sur"
};

const CONOCIMIENTO = [
  /* ------------------- PLAN ANUAL LOCAL 2026 ------------------- */
  {
    id: "pal-ideario", fuente: "PAL", titulo: "Misión, visión y sellos del SLEP Andalién Sur (PAL 2026)",
    claves: ["pal", "plan anual", "plan anual local", "mision", "vision", "sellos", "ideario", "slep andalien sur", "identidad territorial", "multiculturalidad", "creatividad e innovacion", "formacion integral"],
    texto: `Según el **Plan Anual Local de Educación Pública 2026** (diciembre de 2025):

**Misión:** entregar educación pública de calidad de manera transversal a los niños, jóvenes y adultos del territorio y la región, con enfoque en la calidad como un concepto cuantitativo y cualitativo de mejora progresiva, que rescata la **identidad territorial** y promueve la **participación activa** de docentes, asistentes de la educación, directivos, apoderados y la ciudadanía.

**Visión:** lograr que la calidad de la educación pública del territorio Andalién Sur responda a las demandas, necesidades e intereses de los estudiantes y a los desafíos de la educación del siglo XXI.

**Sellos:**
1. **Formación integral:** pleno desarrollo de los estudiantes (artículo 2 de la Ley 21.040): espiritual, social, ético, afectivo, intelectual, artístico y físico, con creatividad, capacidad crítica y valores democráticos.
2. **Identidad del territorio Andalién Sur:** relevar la historia local de las cuatro comunas en las propuestas formativas, curriculares y extracurriculares.
3. **Multiculturalidad:** reconocer la diversidad cultural, lingüística, religiosa y socioeconómica; papel clave de los pueblos originarios y de las personas de diversas nacionalidades.
4. **Creatividad e innovación:** acento formativo en la creatividad e innovación de los procesos pedagógicos y de aprendizaje.

💡 **Para diseñar material con IA:** pida a la herramienta que integre estos sellos. Por ejemplo, actividades que rescaten la **historia local** de su comuna o que valoren la **diversidad cultural** de su curso.`
  },
  {
    id: "pal-territorio", fuente: "PAL", titulo: "El territorio en cifras (PAL 2026)",
    claves: ["cuantos establecimientos", "matricula", "territorio", "cifras", "jardines vtf", "escuelas rurales", "microcentro", "redes", "establecimientos del slep"],
    texto: `Según el **Plan Anual Local 2026**:
- El Servicio administra **80 establecimientos** en Concepción, Chiguayante, Florida y Hualqui: 68 escuelas y liceos, y 12 salas cuna y jardines infantiles VTF.
- **Matrícula total proyectada 2026:** alrededor de 15.000 estudiantes (15.238 en 2025).
- Conviven liceos de alta matrícula con **escuelas de muy baja matrícula y cursos combinados (multigrado)**. El Servicio cuenta con un **Microcentro de escuelas rurales**.
- El PAL señala **15 redes funcionales** en el territorio, que trabajan objetivos mayormente técnicos y disciplinares.
- Hay establecimientos con modalidades específicas: **educación especial**, **escuela hospitalaria** y **educación de personas jóvenes y adultas**.

Escriba **"¿qué establecimientos hay en Florida?"** (u otra comuna) para ver la lista, o configure su establecimiento en **Mi perfil** para recibir sugerencias según sus características.`
  },

  /* ---------------------------- MANUAL 1 ---------------------------- */
  {
    id: "serie", fuente: "M1", titulo: "¿Qué es la serie de manuales?",
    claves: ["manuales", "serie", "guias", "documentos", "que contiene", "indice", "sobre", "naturaleza"],
    texto: `El SLEP Andalién Sur (Concepción · Chiguayante · Florida · Hualqui) preparó **cinco manuales** para incorporar la IA en la gestión educativa de forma informada, ética y con sentido pedagógico:

1. **Importancia y ventajas** de la IA en el contexto educativo nacional.
2. **Uso ético** de la información y **tipos de uso** de la IA.
3. **Herramientas** de IA y sus usos en el contexto escolar chileno.
4. **Prompts efectivos** para apoyar la gestión educativa.
5. **Soporte técnico**: cómo construir una plataforma propia.

Están dirigidos a directivos, jefaturas de UTP, equipos técnico-pedagógicos, convivencia, PIE, docentes y asistentes de la educación.

**Importante:** la serie es una *propuesta técnica*, no lineamientos vigentes. Debe leerse en modo propositivo y no normativo hasta que el Servicio dicte instrucciones formales.`
  },
  {
    id: "dependencia", fuente: "M1", titulo: "Establecimientos de dependencia pública (no municipal)",
    claves: ["municipal", "dependencia", "sostenedor", "traspaso", "municipio", "servicio local", "educacion publica", "21040", "slep"],
    texto: `Los establecimientos que administra un Servicio Local son de **dependencia pública, no municipal**. Con la entrada en vigencia de la **Ley N.º 21.040**, la administración se traspasó desde los municipios al Servicio Local, que pasó a ser el **sostenedor**.

La distinción no es solo terminológica: cambia **quién responde por la gestión**, quién dicta las instrucciones, ante quién se rinde cuenta y cómo circula la información entre el nivel central y cada establecimiento.

Por eso, al escribir un prompt, conviene decir **"establecimiento de educación pública chileno"** y no "establecimiento municipal". Los ejemplos de la serie no se fijan en una comuna determinada: deben ser reconocibles tanto en un liceo urbano de alta matrícula como en una escuela rural pequeña, porque ambas realidades conviven en el territorio.`
  },
  {
    id: "que-es-ia", fuente: "M1", titulo: "¿Qué es la IA y la IA generativa?",
    claves: ["que es", "inteligencia artificial", "ia generativa", "iagen", "chatgpt", "definicion", "concepto", "modelo de lenguaje"],
    texto: `Según el MINEDUC (2025), la **inteligencia artificial** es la capacidad de las máquinas para realizar tareas propias de la inteligencia humana: resolver problemas, traducir, reconocer voz o tomar decisiones a partir de variables.

La **IA generativa (IAgen)** usa modelos preentrenados que generan **texto, audio, imágenes o video** a partir de lo que se le pide. Es la que hoy está en salas y oficinas: accesible desde un teléfono, con versiones gratuitas y sin conocimientos técnicos.

Ojo: los modelos producen *el texto más probable*, no necesariamente *el verdadero*. Por eso todo lo que generan se verifica.`
  },
  {
    id: "por-que", fuente: "M1", titulo: "¿Por qué usar IA en la gestión educativa?",
    claves: ["por que", "ventajas", "beneficios", "importancia", "argumentos", "para que sirve", "sirve"],
    texto: `Seis argumentos para el territorio Andalién Sur:

1. **Devolver tiempo profesional** a lo que solo puede hacer una persona (acompañar el aula, conversar con familias, retroalimentar).
2. **Mejora continua con datos**, no con impresiones.
3. **Anticiparse en las trayectorias** educativas (lectura de datos agregados; las decisiones sobre cada estudiante siguen siendo humanas).
4. **Ampliar la inclusión sin ampliar la brecha** (conectividad, equipos y tiempo docente primero).
5. **Formar ciudadanía digital**, que ya es contenido curricular.
6. **Gestión sostenible** de un servicio de escala territorial (trazabilidad, síntesis de procesos participativos).

La pregunta no es *si* usar IA, sino **qué cambiar en la práctica** para aprovechar oportunidades y contener riesgos (MINEDUC, 2025).`
  },
  {
    id: "ventajas-ambito", fuente: "M1", titulo: "Ventajas por ámbito de gestión",
    claves: ["ambito", "liderazgo", "gestion pedagogica", "evaluacion", "convivencia", "administracion", "desarrollo profesional", "datos", "ejemplos de uso"],
    texto: `- **Liderazgo institucional:** borradores estructurados de PEI, PME e informes; listas de verificación.
- **Gestión pedagógica:** adaptar textos, variantes de dificultad, ideas de actividades.
- **Evaluación:** rúbricas base desde los objetivos; revisar consistencia de criterios.
- **Convivencia:** simplificar el lenguaje de protocolos; borradores de comunicados informativos.
- **Uso de datos:** ordenar datos agregados, detectar patrones, formular preguntas.
- **Desarrollo profesional:** sintetizar registros de observación anonimizados.
- **Administración:** plantillas, resúmenes, primeras versiones de respuestas.

**Todas suponen validación humana antes de cualquier uso oficial.**`
  },
  {
    id: "riesgos", fuente: "M1", titulo: "Riesgos y tres advertencias clave",
    claves: ["riesgos", "peligros", "advertencias", "sesgo", "alucinacion", "errores", "cuidado", "brecha"],
    texto: `Riesgos documentados: **sesgo algorítmico**, **brecha** entre quienes acceden y quienes no, y **protección de datos**.

**Tres advertencias para equipos directivos**
1. **La IA se equivoca con seguridad.** Puede inventar datos con tono convincente. La validación es responsabilidad de quien firma.
2. **Los datos personales no entran** a plataformas de IA de uso público (no cumplen las condiciones que exige la normativa).
3. **La decisión final es humana.** La IA apoya, no reemplaza el criterio profesional, la empatía ni el liderazgo pedagógico.`
  },
  {
    id: "ruta", fuente: "M1", titulo: "Ruta de instalación sugerida en el Servicio",
    claves: ["ruta", "instalacion", "fases", "implementar", "plan", "como empezar", "diagnostico", "pilotaje", "indicadores"],
    texto: `Cuatro fases (propuesta técnica):

1. **Diagnóstico:** catastro de conectividad y equipos; encuesta de uso actual de IA; experiencias en curso.
2. **Acuerdos:** protocolo territorial participativo; tareas delegables y no delegables; criterios de transparencia y datos.
3. **Capacitación:** uso ético (M2), herramientas (M3), prompts (M4), soporte técnico (M5); comunidades de práctica por comuna.
4. **Pilotaje y monitoreo:** proyectos acotados en establecimientos voluntarios; sistematizar y difundir.

**Indicadores sugeridos:** % de establecimientos con protocolo; % de participación en formación; experiencias sistematizadas; horas liberadas para acompañamiento; incidentes de datos personales (meta: **cero**).`
  },
  {
    id: "autoevaluacion", fuente: "MINEDUC", titulo: "Preguntas de autoevaluación (MINEDUC)",
    claves: ["autoevaluacion", "reflexion", "preguntas", "principios mineduc", "potencia", "pauta"],
    texto: `Adaptadas de *PotencIA el aprendizaje* (MINEDUC, 2025). Respóndalas en equipo:

- **Potenciar lo humano:** ¿usamos la IA para liberar tiempo para la empatía y el vínculo?
- **Herramienta para pensar:** ¿profundizamos el análisis o solo producimos texto más rápido?
- **Creatividad:** ¿desarrollamos lo generado con criterio propio?
- **Resguardo ético:** ¿conocemos los términos y el uso de datos de las herramientas?
- **Equidad e inclusión:** ¿beneficia a todos, incluso a quienes tienen menos acceso?
- **Aprendizaje activo:** ¿agregamos valor pedagógico o solo automatizamos?
- **Transparencia:** ¿informamos cuándo un documento usó IA?`
  },
  {
    id: "marco-normativo", fuente: "M2", titulo: "Marco normativo chileno aplicable",
    claves: ["ley", "leyes", "normativa", "marco legal", "21040", "19628", "20285", "politica nacional", "legal"],
    texto: `- **Ley N.º 19.628** (vida privada): regula datos personales y define datos sensibles.
- **Ley N.º 21.719** (plena vigencia **1 de diciembre de 2026**): reforma la 19.628, crea la **Agencia de Protección de Datos Personales** y un régimen sancionatorio. Exige base de licitud, responsabilidad demostrable, protección desde el diseño, evaluación de impacto y contrato con todo encargado.
- **Ley N.º 21.040** (Sistema de Educación Pública): el uso de IA debe inscribirse en el Plan Estratégico Local y el Plan Anual.
- **Ley N.º 20.285** (acceso a información pública): los documentos pueden ser requeridos; importa su trazabilidad y autoría.
- **Política Nacional de IA**: respalda la adopción con resguardos éticos.

*Este asistente no constituye asesoría jurídica; consulte a la asesoría legal del Servicio.*`
  },

  /* ---------------------------- MANUAL 2: ÉTICA Y LEY ---------------------------- */
  {
    id: "datos-personales-ia", fuente: "M2", titulo: "¿Puedo ingresar datos de estudiantes a la IA?",
    claves: ["datos personales", "datos de estudiantes", "nombres", "rut", "puedo ingresar", "pegar", "subir", "privacidad", "informacion de alumnos", "ficha", "nomina"],
    texto: `**No en plataformas de IA de uso público** (ChatGPT, Gemini, etc. en sus versiones abiertas).

La ley **no prohíbe** que el Servicio trate datos: lo hace legítimamente a diario. El problema es el **destinatario**. Al pegar datos en una plataforma pública:
- se comunican a un tercero **sin el contrato** que exige la ley;
- se pierde el control de la **finalidad** (pueden usarse para entrenar modelos);
- hay **transferencia internacional** sin resguardos;
- **no hay trazabilidad**.

**Regla vigente:** ningún dato personal ingresa a IA de uso público. Solo dos variantes podrían habilitarse, y **no por el establecimiento por su cuenta**:
a) IA integrada en la suite institucional, con cobertura contractual confirmada por el Servicio.
b) Sistemas propios que consumen una API, con las salvaguardas del Anexo del Manual 2.

👉 Alternativa: **anonimice** la consulta (pregunte "¿cómo anonimizo?").`
  },
  {
    id: "dato-personal-def", fuente: "LEY", titulo: "¿Qué es un dato personal? Anonimizar vs. seudonimizar",
    claves: ["dato personal", "definicion", "identificable", "anonimizacion", "seudonimizacion", "diferencia", "articulo 2"],
    texto: `**Dato personal** (art. 2°, letra f): cualquier información vinculada a una persona **identificada o identificable**, directa o indirectamente.

Por eso un listado sin nombres puede seguir siendo dato personal: en una escuela pequeña, *"la estudiante de 7° B que se retiró en abril"* identifica a alguien igual que su nombre.

- **Anonimización** (letra k): irreversible; el dato **deja de ser personal**.
- **Seudonimización** (letra l): reemplaza identificadores pero **es reversible**; el dato **sigue siendo personal** y protegido.`
  },
  {
    id: "principios-ley", fuente: "LEY", titulo: "Los 8 principios de la Ley 21.719 (art. 3°)",
    claves: ["principios", "articulo 3", "licitud", "finalidad", "proporcionalidad", "calidad", "responsabilidad", "seguridad", "transparencia", "confidencialidad"],
    texto: `1. **Licitud y lealtad:** poder acreditar en qué norma se funda tener cada dato.
2. **Finalidad:** los datos de matrícula no se usan para otros fines.
3. **Proporcionalidad:** solo los datos necesarios (si no se necesita el RUT, no se pide).
4. **Calidad:** datos exactos y actualizados.
5. **Responsabilidad:** no se delega en el proveedor ni en quien opera el sistema.
6. **Seguridad:** planillas en cuentas personales o carpetas con enlace abierto son incumplimientos.
7. **Transparencia e información:** política de datos publicada y comprensible.
8. **Confidencialidad:** el deber de reserva sigue aunque el funcionario deje el cargo.`
  },
  {
    id: "consentimiento", fuente: "LEY", titulo: "¿Hay que pedir consentimiento? (art. 20)",
    claves: ["consentimiento", "autorizacion", "permiso", "articulo 20", "fotos", "fotografias", "redes sociales", "apoderados"],
    texto: `Los órganos públicos tratan datos **sin consentimiento** cuando es para cumplir sus funciones legales (art. 20): matrícula, asistencia, calificaciones, antecedentes laborales.

- **No** corresponde pedir autorización para lo que la ley ya habilita (p. ej., registrar asistencia).
- **Sí** corresponde para lo que excede la función legal: **publicar fotos de estudiantes en redes sociales** requiere autorización expresa, revocable y específica de quien ejerce el cuidado personal, con registro de quienes no autorizaron.

La ausencia de consentimiento **no** elimina las demás obligaciones (principios, derechos, seguridad).`
  },
  {
    id: "nna", fuente: "LEY", titulo: "Datos de niños, niñas y adolescentes (art. 16 quáter)",
    claves: ["ninos", "ninas", "adolescentes", "menores", "16 quater", "edad", "14 anos", "interes superior", "tramos"],
    texto: `Se tratan atendiendo al **interés superior** y la **autonomía progresiva**. Es *obligación especial de los establecimientos educacionales* velar por su protección.

| Tramo | Datos comunes | Datos sensibles |
|---|---|---|
| Menores de 14 | Consentimiento de padres/representantes (salvo ley) | Consentimiento de padres/representantes |
| 14 a 15 | Reglas de adultos | Consentimiento de padres/representantes |
| 16 a 17 | Reglas de adultos | Reglas de adultos |

Un mismo curso puede mezclar tramos (un 8.° básico tiene estudiantes de 13 y 14). **Verifique la edad, no el nivel**, antes de recabar un dato sensible.`
  },
  {
    id: "derechos", fuente: "LEY", titulo: "Derechos de las personas y plazos de respuesta",
    claves: ["derechos", "acceso", "rectificacion", "supresion", "oposicion", "portabilidad", "bloqueo", "solicitud", "plazo", "30 dias", "arco"],
    texto: `Seis derechos (arts. 4° a 11): **acceso, rectificación, supresión, oposición, portabilidad y bloqueo**. Son irrenunciables.

**Procedimiento (arts. 11 y 23):**
- Solicitud por escrito, dirigida al jefe superior del servicio.
- Respuesta en **30 días corridos**, prorrogable una vez por 30 más.
- Respuesta escrita, guardando respaldo de envío.
- Si se deniega: fundada, indicando que hay **30 días hábiles** para reclamar ante la Agencia.
- Bloqueo temporal: responder en **2 días hábiles**.

**Preparar antes de dic. 2026:** canal de contacto publicado, procedimiento interno escrito y registro de solicitudes.`
  },
  {
    id: "decisiones-automatizadas", fuente: "LEY", titulo: "Decisiones automatizadas y perfiles (art. 8° bis)",
    claves: ["decisiones automatizadas", "8 bis", "perfiles", "prediccion", "desercion", "algoritmo", "15 ter", "evaluacion de impacto"],
    texto: `El titular puede **oponerse a decisiones basadas en tratamiento automatizado** (incluida la elaboración de perfiles) que le afecten significativamente.

Ejemplos escolares que caen aquí: un modelo que estima la probabilidad de deserción y activa una medida, o uno que clasifica el desempeño docente.

La ley exige garantías: información, **explicación**, **intervención humana**, expresar el punto de vista y pedir revisión. El art. **15 ter** exige **evaluación de impacto** previa en estos casos, en tratamientos masivos y con datos sensibles.

✅ La forma más simple de cumplir: **si siempre decide una persona informada, no hay decisión automatizada.**`
  },
  {
    id: "brechas", fuente: "LEY", titulo: "Seguridad y filtraciones de datos (arts. 14 quinquies y sexies)",
    claves: ["filtracion", "brecha", "seguridad", "incidente", "14 sexies", "reportar", "cifrado", "perdida", "correo equivocado"],
    texto: `**Seguridad (14 quinquies):** medidas técnicas y organizativas adecuadas al riesgo, entre ellas la **seudonimización** y el **cifrado**.

**Reporte de vulneraciones (14 sexies):** reportar a la Agencia sin dilaciones cuando haya riesgo razonable para los titulares. Si afecta **datos sensibles o de menores de 14 años**, hay que comunicarlo además a los titulares en lenguaje claro.

Casos típicos: planilla enviada al destinatario equivocado, carpeta con enlace público, computador extraviado sin cifrar, acceso de un tercero a una cuenta.

👉 Definan desde ya **quién detecta, quién evalúa y quién reporta.**`
  },
  {
    id: "proveedores", fuente: "LEY", titulo: "Plataformas externas y transferencia internacional",
    claves: ["proveedor", "plataforma", "encargado", "15 bis", "contrato", "terminos", "transferencia internacional", "27", "28"],
    texto: `**Art. 15 bis:** toda plataforma externa que procese datos del establecimiento es un **encargado** y requiere un **contrato** (objeto, duración, finalidad, tipo de datos, obligaciones). Aceptar términos con un clic **no** equivale a ese contrato.

**Arts. 27 y 28:** la transferencia internacional es lícita con país de nivel adecuado, cláusulas contractuales o certificación; si no, solo en casos específicos (p. ej., consentimiento expreso).

👉 Levante un **catastro de plataformas** en uso: qué datos maneja cada una y bajo qué instrumento.`
  },
  {
    id: "sitio-web", fuente: "LEY", titulo: "¿Qué debe publicarse en el sitio web? (art. 14 ter)",
    claves: ["sitio web", "publicar", "14 ter", "politica de datos", "transparencia", "pagina web"],
    texto: `Entre otros: política de tratamiento (fecha y versión), responsable y representante legal, **canal de contacto** para solicitudes, categorías de datos y finalidades, medidas de seguridad, derechos del titular, derecho a reclamar ante la Agencia, transferencias internacionales, plazos de conservación, origen de los datos y la **existencia de decisiones automatizadas** con información sobre su lógica.

Además, el **art. 22** exige informar mensualmente los convenios de cesión o transferencia de datos.`
  },
  {
    id: "sanciones", fuente: "LEY", titulo: "Responsabilidades y sanciones (arts. 44 a 47)",
    claves: ["sanciones", "multas", "responsabilidad", "44", "45", "46", "47", "jefe superior", "sumario"],
    texto: `En el sector público la sanción recae **personalmente en el jefe superior** del organismo:
- Multa del **20 % al 50 %** de su remuneración mensual.
- Datos sensibles: **50 %** y suspensión de hasta **30 días**.
- Persistencia: el doble de la sanción.

Además: investigación sumaria de Contraloría si hay responsabilidades individuales (art. 45), **deber de reserva** de funcionarios (art. 46) y **responsabilidad civil** por daños (art. 47).`
  },
  {
    id: "casos-practicos", fuente: "M2", titulo: "Casos prácticos del día a día",
    claves: ["casos", "whatsapp", "correo masivo", "copia oculta", "calificaciones", "notas", "fotos", "pie", "dupla", "encuesta", "camaras", "formularios", "ejemplos"],
    texto: `- **Correo masivo a apoderados:** usar **copia oculta (CCO)**.
- **Calificaciones:** comunicarlas de forma individual, nunca en listados públicos.
- **Fotos en redes:** autorización expresa de quien tiene el cuidado personal.
- **WhatsApp:** canales institucionales o listas de difusión desde cuenta institucional.
- **Informes PIE / dupla psicosocial:** datos sensibles; acceso restringido y registro de accesos.
- **Formularios:** pedir solo lo necesario.
- **Encuesta de clima:** si el análisis es agregado, recoger anónimo desde el origen.
- **Planillas del equipo:** en unidades institucionales, no en cuentas personales.
- **Informe de caso con IA:** anonimizar o usar un entorno autorizado.`
  },
  {
    id: "hoja-ruta-2026", fuente: "LEY", titulo: "Hoja de ruta hacia diciembre de 2026",
    claves: ["diciembre 2026", "vigencia", "preparacion", "hoja de ruta", "pasos", "cumplimiento", "delegado"],
    texto: `1. Inventario de tratamientos.
2. Matriz de licitud (función legal vs. consentimiento).
3. Catastro de plataformas y contratos (art. 15 bis).
4. Publicación de política y contenidos del art. 14 ter.
5. Procedimiento de atención de solicitudes.
6. Plan de seguridad (seudonimización, cifrado, accesos, respaldo).
7. Protocolo de incidentes y reporte de brechas.
8. Evaluaciones de impacto (art. 15 ter).
9. Decisión sobre delegado de protección de datos (facultativo, arts. 49-50).
10. Capacitación de directivos, docentes y asistentes.`
  },
  {
    id: "principios-eticos", fuente: "M2", titulo: "Los cinco principios éticos de uso de IA",
    claves: ["principios eticos", "etica", "uso etico", "transparencia", "equidad", "responsabilidad humana", "veracidad"],
    texto: `1. **Transparencia:** informar cuándo y cómo se usó IA.
2. **Privacidad y protección de datos:** no ingresar datos sensibles en plataformas de IA generativa.
3. **Equidad e inclusión:** que no refuerce sesgos ni omita la realidad rural presente en el territorio.
4. **Responsabilidad humana:** la decisión final siempre es humana.
5. **Veracidad y precisión:** toda cita normativa, cifra o decreto se contrasta con la fuente oficial.

Son coherentes con los seis principios del MINEDUC (2025): potenciar lo humano, herramienta para pensar, creatividad, resguardo ético, equidad e inclusión y aprendizaje activo.`
  },
  {
    id: "cuando-usar", fuente: "M2", titulo: "¿Cuándo usar IA? Cinco preguntas previas",
    claves: ["cuando usar", "deberia usar", "conviene", "criterios", "decidir", "preguntas previas", "alerta"],
    texto: `Antes de usar IA, responda:

1. ¿Requiere **juicio profesional** o sensibilidad humana? → *Alerta alta*: no delegue la decisión.
2. ¿La información es **sensible o confidencial**? → *Alerta crítica*: no la ingrese; anonimice o hágalo sin IA.
3. ¿Tengo **tiempo para revisar**? → Si no, posponga.
4. ¿Puede generar **sesgos**? → Revise representatividad y pertinencia cultural.
5. ¿**Mejora genuinamente** mi gestión? → Si no agrega valor, no se justifica.`
  },
  {
    id: "delegar", fuente: "M2", titulo: "¿Qué se puede delegar en la IA y qué no?",
    claves: ["delegar", "no delegar", "prohibido", "zona prohibida", "permitido", "tareas", "puedo usar ia para"],
    texto: `**✅ Se puede delegar (con supervisión):**
- Borradores de documentos institucionales.
- Estructuración de planes o proyectos.
- Ideas para la toma de decisiones.
- Rúbricas e instrumentos de evaluación.
- Resúmenes de documentos extensos **sin datos personales**.
- Materiales didácticos básicos.

**⛔ No se delega:**
- Evaluación del desempeño de estudiantes o docentes.
- Decisiones disciplinarias o de convivencia.
- Comunicación sensible con familias o la comunidad.
- Análisis de datos personales o confidenciales.
- Diagnóstico o intervención en vulneración de derechos.
- Planificación estratégica institucional completa.

**Zona intermedia:** divida la tarea. Use IA solo para la parte sin datos (estructura, marco, secciones generales) y redacte usted lo identificable.`
  },
  {
    id: "anonimizar", fuente: "M2", titulo: "¿Cómo anonimizar una consulta?",
    claves: ["anonimizar", "anonimizacion", "como anonimizo", "quitar nombres", "eliminar datos", "reemplazar", "estudiante a", "protocolo de anonimizacion"],
    texto: `**Elimine siempre:**
- **Identificadores directos:** nombre, RUT, matrícula, correo → "Estudiante A".
- **Identificadores indirectos:** curso y letra, nombre del establecimiento o del profesor jefe, dirección → "un curso de segundo ciclo", "un establecimiento urbano del territorio".
- **Datos sensibles:** diagnósticos, informes psicológicos, situación socioeconómica o migratoria → omitir.
- **Datos de terceros:** apoderados, funcionarios → "el apoderado".
- **Documentos completos:** extraer solo el fragmento necesario, ya anonimizado.

**❌ Incorrecto:** "Tengo un estudiante, Matías González, de 6° B, con TDAH…"
**✅ Correcto:** "Actúa como jefe de UTP de un establecimiento de educación pública chileno. Necesito la estructura de un informe de derivación a dupla psicosocial para un estudiante de segundo ciclo con dificultades de atención… No inventes datos: deja campos por completar."`
  },
  {
    id: "verificar", fuente: "M2", titulo: "Protocolo de verificación en cuatro pasos",
    claves: ["verificar", "verificacion", "revisar", "comprobar", "alucinacion", "inventa", "errores", "fuente oficial", "bcn"],
    texto: `La IA produce el texto más probable, no el verdadero. Puede inventar decretos, cifras o citas.

1. **Datos y cifras:** contraste con la fuente primaria.
2. **Referencias normativas:** búsquelas en la **Biblioteca del Congreso Nacional** (bcn.cl) o el sitio del Ministerio. *Si la norma no aparece, no existe.*
3. **Pertinencia contextual:** ¿corresponde al sistema chileno?
4. **Sesgos y representatividad:** ¿reproduce estereotipos o invisibiliza la ruralidad?

Preguntas MINEDUC: ¿es precisa? ¿cómo compruebo su veracidad? ¿es correcta en cualquier contexto? ¿reproduce estereotipos?`
  },
  {
    id: "declarar", fuente: "M2", titulo: "Cómo declarar el uso de IA (fórmulas)",
    claves: ["declarar", "declaracion", "transparencia", "nota al pie", "formula", "citar ia", "informar uso"],
    texto: `- **Documento interno:** "Versión preliminar elaborada con apoyo de inteligencia artificial generativa. Contenido revisado, corregido y validado por [cargo]."
- **Material didáctico:** "Material elaborado con apoyo de herramientas de inteligencia artificial y adaptado por el equipo docente de la asignatura."
- **Comunicado a familias:** "Texto redactado por el equipo directivo, con apoyo de herramientas digitales para la revisión de claridad y lenguaje."
- **Instrumento de evaluación:** "Instrumento construido con apoyo de inteligencia artificial y validado por el equipo técnico-pedagógico del establecimiento."
- **Imagen generada:** "Imagen generada mediante inteligencia artificial. Se advierte que estas herramientas pueden reproducir sesgos en la representación de personas."

Declarar **no traslada la responsabilidad**: quien firma responde por todo el contenido.`
  },
  {
    id: "protocolo", fuente: "M2", titulo: "Protocolo institucional de uso de IA",
    claves: ["protocolo institucional", "reglamento", "construir protocolo", "participativo", "contenidos minimos", "consejo escolar"],
    texto: `**Contenidos mínimos:** alcance; herramientas autorizadas y no autorizadas; reglas de datos; tareas delegables/no delegables; obligación de declarar y verificar; reglas de uso estudiantil por nivel; procedimiento ante uso indebido (sin criminalizar el error de buena fe); responsable y revisión periódica.

**Etapas participativas:** diagnóstico sin ánimo sancionatorio → deliberación en Consejo de Profesores → consulta a Centro de Estudiantes y de Padres → redacción por comisión → aprobación e incorporación al Reglamento Interno → revisión anual.`
  },
  {
    id: "uso-estudiantes", fuente: "M2", titulo: "Uso de IA por estudiantes",
    claves: ["estudiantes", "alumnos", "copia", "plagio", "tareas", "uso estudiantil", "trabajos"],
    texto: `La clave es distinguir **usar IA para pensar mejor** de **usarla para evitar pensar**.

**Fortalece:** pedir explicaciones alternativas; generar ideas que luego se desarrollan; contrastar con fuentes y detectar errores; revisar ortografía de un texto propio; analizar sesgos de la herramienta.

**Sustituye:** entregar una tarea generada sin modificar; presentar como propio un texto de la IA; citarla como fuente sin verificar; responder con IA una evaluación de comprensión individual; ingresar datos personales.

Sugerencia: que el reglamento de evaluación pida **declarar** qué herramienta se usó, para qué parte y qué se modificó.`
  },
  {
    id: "seis-tipos", fuente: "M2", titulo: "Los seis tipos de uso de la IA (por nivel de riesgo)",
    claves: ["tipos de uso", "seis tipos", "copiloto", "humano ia humano", "niveles de riesgo", "clasificacion"],
    texto: `Modelo **humano → IA → humano**: la persona define el problema, la IA genera opciones, la persona verifica y decide.

1. **Producción documental** — riesgo *bajo*. Borradores de PEI, PME, actas, informes.
2. **Síntesis y análisis** — *bajo a medio*. Resumir normativa, encuestas anonimizadas.
3. **Diseño pedagógico y evaluativo** — *medio*. Planificaciones, guías, rúbricas, ítems.
4. **Comunicación institucional** — *medio*. Adaptar lenguaje; **nunca** comunicación sensible.
5. **Apoyo al uso de datos** — *medio a alto*. Solo datos agregados; interpretación humana.
6. **Reflexión y liderazgo** — *alto*. IA como interlocutor crítico; no reemplaza la deliberación colectiva.

Conviene empezar por los primeros e ir avanzando a medida que se consolida criterio.`
  },
  {
    id: "diseno-pedagogico", fuente: "M2", titulo: "Diseñar material pedagógico con IA",
    claves: ["material", "disenar material", "crear material", "planificacion", "guia", "actividad", "clase", "diversificar", "adaptar texto", "didactico", "recurso"],
    texto: `Aplicaciones del **tipo 3 (diseño pedagógico)**:
- **Planificación:** secuencia de una clase de 90 min alineada al OA.
- **Diversificación:** tres versiones de una guía con distinto andamiaje.
- **Rúbricas:** criterios y niveles de logro.
- **Ítems:** preguntas con distractores plausibles.
- **Adaptación de textos:** bajar complejidad léxica sin bajar exigencia cognitiva.
- **Contextualización local:** situaciones con referencias reconocibles en el entorno del establecimiento: su realidad socioeconómica y comunitaria, el comercio y los oficios del sector, la actividad agrícola o forestal y el entorno natural de la zona.
- **Retroalimentación:** formulaciones descriptivas desde la rúbrica.

**Límites:** la IA no conoce con precisión las **Bases Curriculares** → verifique todo OA en el currículum oficial. Generar la rúbrica es delegable; **evaluar con ella no**.

💡 Escriba **"crear prompt"** y le ayudo a armar uno paso a paso.`
  },
  {
    id: "comunicacion", fuente: "M2", titulo: "Comunicación institucional con IA",
    claves: ["comunicado", "circular", "comunicacion", "familias", "apoderados", "carta", "lenguaje claro", "cuenta publica"],
    texto: `**Apropiado:** traducir protocolos a lenguaje claro; difundir la admisión escolar; tres versiones de una circular (apoderados, docentes, estudiantes); preguntas frecuentes de un reglamento; convocatorias; estructurar la Cuenta Pública.

**⛔ No corresponde:** comunicar una medida disciplinaria o la activación de un protocolo de vulneración; responder reclamos; notificar observaciones de desempeño; duelo, emergencias o crisis. Ahí el vínculo con la persona **es** el mensaje.`
  },
  {
    id: "uso-datos", fuente: "M2", titulo: "Usar IA para analizar datos del establecimiento",
    claves: ["datos", "asistencia", "resultados", "analisis de datos", "planilla", "simce", "indicadores", "desercion", "trayectorias"],
    texto: `Siempre con **datos agregados y anonimizados**, e interpretación humana:
- **Asistencia:** patrones por curso, mes, jornada (nunca nóminas individuales).
- **Resultados:** por objetivo de aprendizaje, sin identificar estudiantes ni docentes.
- **Trayectorias:** tendencias de repitencia y retiro por nivel.
- **Convivencia:** tipos de situación, sin relato de casos.
- **Acompañamiento:** focos recurrentes en registros anonimizados.

⚠️ Los sistemas predictivos sobre estudiantes individuales arriesgan **etiquetamiento** y **profecía autocumplida**. La IA lee tendencias; la identificación de un estudiante en riesgo y qué hacer corresponde al equipo.`
  },
  {
    id: "reflexion", fuente: "M2", titulo: "La IA como interlocutor crítico (liderazgo)",
    claves: ["reflexion", "liderazgo", "critico", "decision", "supuestos", "riesgos de una medida", "directivo", "puntos ciegos"],
    texto: `Úsela para **pensar mejor**, no para que piense por usted:
- Someter una decisión a análisis de riesgos.
- Pedir que argumente **en contra** de su propuesta.
- Ver una medida desde un apoderado, un docente y un estudiante.
- Contrastar con los estándares indicativos de desempeño.

**Ejemplo:** *"Actúa como asesor crítico en gestión escolar chilena. Estoy considerando [medida]. No me des tu opinión favorable: (1) tres supuestos no verificados; (2) condiciones institucionales necesarias; (3) tres formas probables de fracaso; (4) cinco preguntas antes de proponerla al Consejo de Profesores."*

Límite: no reemplaza la deliberación colectiva.`
  },
  {
    id: "anexo-api", fuente: "M2", titulo: "Sistemas propios con API de IA (Anexo)",
    claves: ["api", "sistema propio", "plataforma propia", "seudonimizar", "diccionario", "marcadores", "instruccion de sistema", "anexo"],
    texto: `Enviar datos a una API **sí es comunicarlos a un tercero**, pero es **mejor** que una plataforma pública: los términos comerciales suelen excluir el entrenamiento, tienen retención acotada y la institución **controla qué sale**.

**Seudonimización en 7 pasos:** clasificar campos → calcular localmente conteos y totales → diccionario temporal en memoria ([DOCENTE_1], [CURSO_1]) → sustituir → enviar solo el texto sustituido → reponer identificadores → descartar diccionario y registrar en bitácora sin contenido.

**Instrucción de sistema:** no agregar información, no emitir juicios de desempeño, conservar los marcadores, no cambiar datos ni fechas.

**Antes de autorizar:** cuenta institucional, términos sin entrenamiento, retención, transferencia, seudonimización, control de accesos, bitácora, información a titulares y validación jurídica.`
  },

  /* ---------------------------- MANUAL 3 ---------------------------- */
  {
    id: "evaluar-herramienta", fuente: "M3", titulo: "¿Cómo evaluar una herramienta de IA antes de usarla?",
    claves: ["evaluar herramienta", "elegir herramienta", "es segura", "autorizar", "pauta", "terminos de uso", "edad minima", "app"],
    texto: `Pauta de 7 dimensiones:
- **Datos:** ¿qué hace con lo ingresado? ¿entrena con ello? *Alerta:* términos ambiguos o sin español.
- **Edad mínima:** ¿exige autorización adulta? *Alerta:* uso con estudiantes bajo la edad declarada.
- **Costo real:** ¿la versión gratuita sirve? *Alerta:* dependencia de algo que luego se cobra.
- **Transparencia:** ¿indica fuentes y limitaciones?
- **Sesgo:** ¿es pertinente para Chile?
- **Accesibilidad:** ¿funciona con conexión intermitente?
- **Continuidad:** ¿es consolidada o experimental?

**Equidad territorial:** ninguna práctica evaluada debe depender de una herramienta que no esté disponible para **todos** los estudiantes del curso.`
  },
  {
    id: "familias-herramientas", fuente: "M3", titulo: "Las seis familias de herramientas de IA",
    claves: ["herramientas", "familias", "cual usar", "que herramienta", "aplicaciones", "lista de herramientas", "recomienda"],
    texto: `1. **Asistentes conversacionales** (ChatGPT, Claude, Gemini, Copilot, Meta AI, DeepSeek): versátiles; no citan fuentes por defecto.
2. **Asistentes con fuentes visibles** (p. ej., Perplexity): ideales para enseñar verificación.
3. **Trabajo sobre documentos propios** (p. ej., NotebookLM): responden solo desde lo que usted carga.
4. **Diseño y producción visual** (Canva con IA, Gamma): afiches, infografías, presentaciones.
5. **Dominio específico** (iNaturalist, Machine Learning for Kids, transcripción).
6. **IA integrada en plataformas de gestión** (suites ofimáticas, correo).

*Nombrar una herramienta no implica recomendación institucional ni convenio del Servicio.*`
  },
  {
    id: "conversacionales", fuente: "M3", titulo: "Asistentes conversacionales: usos y precauciones",
    claves: ["chatgpt", "gemini", "claude", "copilot", "chat", "asistente conversacional", "deepseek"],
    texto: `**Usos:** estructura de un informe anual; tres versiones de una guía de comprensión lectora; rúbrica de exposición oral; simplificar el protocolo de acoso escolar; preguntas para una jornada de reflexión; análisis crítico de una reorganización horaria.

**Precauciones:**
- No indican fuentes: **verifique** toda cifra o norma.
- Guardan historial: **nunca** datos personales.
- Tienden a marcos de otros países: explicite **"sistema escolar chileno"**.`
  },
  {
    id: "notebooklm", fuente: "M3", titulo: "Herramientas sobre documentos propios (NotebookLM)",
    claves: ["notebooklm", "documentos propios", "cargar documentos", "reglamento interno", "pei", "pme", "resumir documentos", "subir archivos"],
    texto: `Trabajan **solo** sobre los documentos que usted carga, lo que reduce mezclar información de otros sistemas.

**Ejemplos:** Reglamento Interno y protocolos (¿qué plazos fija?, ¿hay contradicciones?); PEI/PME de años anteriores (¿qué acciones se repiten sin cumplirse?); orientaciones ministeriales del año; actas de Consejo (¿qué acuerdos quedaron pendientes?).

⚠️ **Cargar un documento es tratar datos.** Verifique que no contenga nóminas, datos de estudiantes, informes psicosociales ni antecedentes de funcionarios. **En caso de duda, no se carga.**`
  },
  {
    id: "imagenes", fuente: "M3", titulo: "Diseño visual e imágenes generadas con IA",
    claves: ["canva", "gamma", "imagenes", "afiche", "infografia", "presentacion", "logo", "diseno grafico", "derechos de autor"],
    texto: `**Usos:** afiche de admisión, presentación de la Cuenta Pública, infografías curriculares, productos estudiantiles, procesos participativos (p. ej., logo del Centro de Estudiantes).

**Precauciones:**
- **Sesgos de representación:** revise toda imagen con personas.
- **Declárelas** como generadas con IA.
- **Derechos de autor** en desarrollo: no usar con fines comerciales ni reclamar autoría exclusiva.
- Si el objetivo de aprendizaje es la creación visual, generarla automáticamente elimina lo que se quería evaluar.`
  },
  {
    id: "seleccion-minima", fuente: "M3", titulo: "Selección mínima de herramientas por perfil",
    claves: ["por donde empezar", "perfil", "docente", "utp", "director", "convivencia", "empezar", "seleccion minima"],
    texto: `Mejor dominar tres que conocer diez:
- **Equipo directivo:** asistente conversacional + asistente sobre documentos propios.
- **Jefatura de UTP:** conversacional + diseño con IA (rúbricas, presentaciones).
- **Docentes de aula:** conversacional + diseño (guías diversificadas, ítems).
- **Trabajo con estudiantes:** asistente con fuentes visibles + diseño.
- **Convivencia:** conversacional (lenguaje de protocolos, material informativo).

**Condiciones previas:** diagnóstico de equipos y conectividad, protocolo aprobado, listado de herramientas autorizadas, formación en prompts y un responsable institucional.`
  },
  {
    id: "suite", fuente: "M3", titulo: "IA integrada en la suite institucional (Google/Microsoft)",
    claves: ["google workspace", "microsoft", "suite", "correo institucional", "integrada", "gemini en docs", "copilot en word"],
    texto: `Ventaja: el tratamiento de datos **puede** quedar cubierto por el contrato vigente del organismo.

Pero esa cobertura **no se presume**: debe confirmarla formalmente el área competente del Servicio (que el proveedor sea encargado según la Ley 21.719, que excluya entrenamiento y qué seguridad contempla). **El establecimiento no la verifica por su cuenta.**

Mientras no exista confirmación: **ningún dato personal** ingresa a esas funciones.`
  },

  /* ---------------------------- MANUAL 4 ---------------------------- */
  {
    id: "que-es-prompt", fuente: "M4", titulo: "¿Qué es un prompt y por qué importa?",
    claves: ["prompt", "que es un prompt", "instruccion", "consulta", "pedirle a la ia", "como preguntar"],
    texto: `Un **prompt** es la instrucción que se da a un modelo de lenguaje. La calidad de la respuesta depende directamente de su calidad.

**Genérico:** "Hazme una clase de lenguaje."
**Específico:** "Diseña una clase para 3° básico en lenguaje, enfocada en comprensión lectora con inferencias simples."

**Genérico:** "Dame información sobre evaluación."
**Específico:** "Crea una rúbrica para evaluar exposiciones orales en 6° básico, con tres niveles de logro y cuatro criterios."

Escribir un buen prompt obliga a explicitar para qué, para quién, con qué límites y en qué formato… y eso también aclara el propio pensamiento.`
  },
  {
    id: "seis-pasos", fuente: "M4", titulo: "Método de seis pasos para formular prompts",
    claves: ["metodo", "seis pasos", "pasos", "como escribir un prompt", "mejorar prompt", "tecnica"],
    texto: `1. **Defina el objetivo.** Empiece con un verbo: *Diseña, Crea, Analiza, Sugiere.*
2. **Use lenguaje específico y contextual:** nivel, asignatura, características del grupo, audiencia, formato.
3. **Pida iteraciones:** "hazlo más breve", "agrega ejemplos", "incluye el contexto chileno".
4. **Ajuste tono y nivel:** no es lo mismo el Comité Directivo Local que apoderados de un jardín.
5. **Evalúe la utilidad** con el protocolo de verificación.
6. **Experimente** con dos o tres variantes antes de usar el resultado.`
  },
  {
    id: "estructura-prompt", fuente: "M4", titulo: "Estructura de un prompt profesional (6 componentes)",
    claves: ["estructura", "componentes", "rol", "tarea", "contexto", "formato", "restricciones", "criterio de calidad", "plantilla"],
    texto: `| Componente | Ejemplo |
|---|---|
| **Rol** | "Actúa como jefe de UTP de un establecimiento de educación pública chileno…" |
| **Tarea** | "…diseña una rúbrica analítica…" |
| **Contexto** | "…para 6.° básico, Lenguaje, curso de 32 estudiantes heterogéneo en escritura…" |
| **Formato** | "…en tabla, cuatro criterios y tres niveles de logro." |
| **Restricciones** | "Lenguaje sencillo, máx. 25 palabras por descriptor, no inventes OA." |
| **Criterio de calidad** | "Cada descriptor debe ser observable en un producto del estudiante." |

Los prompts que fallan suelen carecer de alguno de los **primeros cuatro**. Organícelos en bloques rotulados.

💡 Escriba **"crear prompt"** y lo armamos juntos.`
  },
  {
    id: "ajustes", fuente: "M4", titulo: "Frases para ajustar la respuesta de la IA",
    claves: ["ajustar", "iterar", "respuesta mala", "muy largo", "generico", "muy tecnico", "corregir respuesta", "refinar"],
    texto: `- **Muy extenso:** "Redúcelo a la mitad conservando las ideas principales."
- **Genérico:** "Agrega ejemplos concretos referidos a [contexto]."
- **Muy técnico:** "Explícalo de manera más simple, para alguien sin formación en el tema."
- **No es chileno:** "Incluye referencias al contexto chileno y elimina terminología de otros sistemas."
- **Formato inútil:** "Reorganiza la información en una tabla con las columnas [X, Y, Z]."
- **Poco profundo:** "Amplía la sección sobre [tema] y reduce el resto."
- **Obvio:** "Elimina lo evidente para un profesional y concéntrate en lo no evidente."
- **Artificial:** "Usa un tono sobrio y profesional. Elimina los adjetivos valorativos."`
  },
  {
    id: "tecnicas", fuente: "M4", titulo: "Técnicas avanzadas de refinamiento",
    claves: ["tecnicas", "avanzado", "razonamiento", "alternativas", "limitaciones", "restricciones negativas"],
    texto: `- **Razonamiento antes del producto:** "Antes de redactar, explícame en tres puntos cómo vas a estructurar esta tarea. Espera mi confirmación."
- **Alternativas contrastantes:** "Entrégame tres versiones con enfoques distintos y explica qué prioriza y qué sacrifica cada una."
- **Identificar limitaciones:** "Al final, indica qué partes requieren verificación y en qué podrías estar equivocada."
- **Restricciones negativas** (suelen funcionar mejor): "No inventes objetivos de aprendizaje", "No cites normativa: yo la verificaré", "No completes datos faltantes: márcalos como pendientes".`
  },
  {
    id: "errores-prompt", fuente: "M4", titulo: "Errores frecuentes al escribir prompts",
    claves: ["errores", "equivocaciones", "fallas", "no funciona", "mala respuesta", "por que responde mal"],
    texto: `- **Sin objetivo** → empiece con un verbo y diga para qué se usará.
- **Sin nivel ni asignatura** → material desajustado.
- **Sin país** → normativa extranjera; escriba "sistema escolar chileno".
- **Aceptar la primera respuesta** → itere al menos una vez.
- **Pedir que cite normativa o datos** → referencias inventadas; prohíbalo y verifique usted.
- **Ingresar datos personales "para dar contexto"** → incumplimiento; anonimice.
- **Pedir evaluar un desempeño** → tarea no delegable.
- **Prompts largos sin estructura** → use bloques ROL, TAREA, CONTEXTO, FORMATO, RESTRICCIONES.`
  },
  {
    id: "prompts-estudiantes", fuente: "M4", titulo: "Enseñar a formular prompts a estudiantes",
    claves: ["ensenar", "estudiantes prompts", "ciudadania digital", "por ciclo", "primer ciclo", "media", "actividad"],
    texto: `- **Primer ciclo básico — "La IA no siempre tiene razón":** detectar un error evidente y verificarlo.
- **Segundo ciclo — "Preguntar bien cambia la respuesta":** comparar una pregunta vaga y una específica.
- **Educación media — "Verificar y contrastar":** misma pregunta a dos herramientas, contrastar con fuentes primarias.
- **Media avanzada — "Pensar, no responder":** usar la IA como contraparte crítica de un argumento propio.

El objetivo: estudiantes **creadores y críticos**, no solo consumidores (MINEDUC, 2025).`
  },

  /* ---------------------------- MANUAL 5 ---------------------------- */
  {
    id: "plataforma-propia", fuente: "M5", titulo: "Construir una plataforma propia (arquitectura)",
    claves: ["plataforma propia", "arquitectura", "github", "github pages", "apps script", "google sheets", "pagina web", "construir", "hosting"],
    texto: `Arquitectura recomendada, gratuita en su nivel básico:
- **Frontend** (HTML, CSS, JS) → publicado en **GitHub Pages**.
- **Backend / API** → **Google Apps Script**.
- **Base de datos** → **Google Sheets**.

Flujo: el navegador envía datos a la API de Apps Script → valida y escribe en la planilla → responde → la página muestra la confirmación.

**Regla que nunca se rompe:** *nada secreto en el frontend* (ni claves de API, ni contraseñas, ni IDs de planillas sensibles). En GitHub el historial conserva todo: si se publica una clave por error, **revóquela** y genere otra.

*Este mismo asistente está construido así.*`
  },
  {
    id: "github-pages", fuente: "M5", titulo: "Publicar un sitio en GitHub Pages paso a paso",
    claves: ["publicar", "github pages", "repositorio", "subir archivos", "index.html", "settings pages", "pasos github"],
    texto: `1. Cree una cuenta (ideal: **organización institucional** con al menos dos administradores).
2. **New** → repositorio sin espacios ni tildes, **Público**, con README.
3. **Add file → Upload files**. El archivo principal debe llamarse **index.html** y estar en la raíz.
4. **Settings → Pages** → *Deploy from a branch* → rama **main**, carpeta raíz → Save.
5. Espere 1–3 minutos: \`https://organizacion.github.io/repositorio/\`
6. Marque **Enforce HTTPS**.

**Dominio:** lo recomendable es un subdominio institucional (registro **CNAME**), no un dominio a nombre de un funcionario.`
  },
  {
    id: "sheets-bd", fuente: "M5", titulo: "Google Sheets como base de datos",
    claves: ["google sheets", "planilla", "base de datos", "hoja", "columnas", "reglas de diseno"],
    texto: `- **Una hoja por entidad.**
- Fila 1 = nombres de columna sin espacios ni tildes; sin celdas combinadas.
- Una fila = un registro; sin filas en blanco ni totales.
- Primera columna = **identificador único**.
- Fechas en formato **ISO** (2026-10-13).
- Sin fórmulas en hojas que escribe el sistema.
- **Separar** la hoja de registros (con códigos) de la de correspondencia código-nombre (más restringida).

⚠️ La planilla **no se comparte** con usuarios ni con enlace público.`
  },
  {
    id: "apps-script", fuente: "M5", titulo: "Crear la API con Google Apps Script",
    claves: ["apps script", "api", "doget", "dopost", "implementar", "propiedades del script", "lockservice", "cors"],
    texto: `1. Desde la planilla: **Extensiones → Apps Script**.
2. Defina \`doGet\` (lectura) y \`doPost\` (escritura); use **LockService** para evitar escrituras simultáneas.
3. Credenciales en **Configuración del proyecto → Propiedades del script** (nunca en el código).
4. **Implementar → Nueva implementación → Aplicación web**. *Ejecutar como:* Yo. *Quién tiene acceso:* cuentas de la organización si hay datos personales.
5. Copie la URL \`https://script.google.com/macros/s/…/exec\`.

**Truco CORS:** envíe el POST con \`Content-Type: text/plain;charset=utf-8\`.
Cada cambio de código requiere **nueva versión** de la implementación.`
  },
  {
    id: "problemas", fuente: "M5", titulo: "Solución de problemas frecuentes",
    claves: ["error", "404", "no funciona", "cors", "no se actualiza", "problema", "falla", "soporte", "ayuda tecnica"],
    texto: `- **Error 404 en Pages:** el archivo no se llama exactamente \`index.html\` o no está en la raíz.
- **Cambios no se ven:** espere 2 min y recargue con **Ctrl + F5**; revise la pestaña *Actions*.
- **Error CORS:** use \`text/plain;charset=utf-8\` en el POST.
- **La API devuelve HTML:** acceso restringido; inicie sesión con la cuenta institucional.
- **Código nuevo sin efecto:** *Administrar implementaciones* → editar → nueva versión.
- **Registros perdidos al guardar a la vez:** falta LockService.
- **Error de autorización:** ejecute una función a mano y vuelva a autorizar.
- **Dominio no carga:** espere hasta 24 h y verifique el archivo CNAME.
- **Planilla lenta:** archive registros antiguos y quite fórmulas.

La consola del navegador se abre con **F12**.`
  },
  {
    id: "seguridad-plataforma", fuente: "M5", titulo: "Seguridad, respaldo y continuidad de una plataforma",
    claves: ["seguridad", "respaldo", "backup", "continuidad", "perfiles", "permisos", "lista de verificacion", "traspaso"],
    texto: `**Seguridad:** ninguna credencial en el repositorio; planilla no pública; app web restringida a la organización; operaciones de escritura verifican perfil; HTTPS forzado; bitácora sin contenido sensible; dos administradores.

**Respaldo:** copia semanal automática (activador de Apps Script) en una **unidad compartida institucional**, conservando los últimos 12.

**Continuidad:** organización de GitHub, planilla y Apps Script con al menos dos responsables; subdominio institucional; clave de IA institucional; \`docs/MANUAL.md\` actualizado.

**Cuándo NO usar esta arquitectura:** si ya existe un sistema institucional, si el volumen es territorial, si los datos son especialmente sensibles (salud, vulneración) o si no hay quién la mantenga.`
  },

  /* ------------------- FUENTES OFICIALES EXTERNAS -------------------
     Verificadas en los sitios oficiales en octubre de 2026.
     Revise los enlaces al menos una vez al año. */
  {
    id: "ext-potencia", fuente: "EXT", titulo: "Guía MINEDUC «PotencIA el aprendizaje» (2025)",
    claves: ["potencia", "potencia el aprendizaje", "guia mineduc", "mineduc", "centro de innovacion", "orientaciones mineduc", "guia oficial"],
    texto: `El **Ministerio de Educación** lanzó el 12 de marzo de 2025 la guía **«PotencIA el aprendizaje: Preguntas para la reflexión y práctica de la Inteligencia Artificial generativa en contextos educativos»**, elaborada por el **Centro de Innovación**.

- No entrega respuestas cerradas: propone **preguntas para orientar la reflexión del equipo pedagógico** sobre cómo usar la IA de forma **creativa, crítica y responsable**.
- Se basa en potenciar lo que nos hace humanos y en un uso seguro de la IA.
- Junto con ella se anunciaron **webinars y talleres regionales**, un **curso para directivos** sobre IA en la gestión educativa (con Fundación Chile y CENIA), un espacio temático de IA en **educarchile** y cursos del **CPEIP**.

🔗 [Guía en Ciudadanía Digital](https://ciudadaniadigital.mineduc.cl/recurso/nueva-guia-para-docentes-potencia-el-aprendizaje/)
🔗 [Portal de IA del MINEDUC](https://ciudadaniadigital.mineduc.cl/ia/)
🔗 [Noticia oficial (mineduc.cl)](https://www.mineduc.cl/mineduc-lanza-guia-para-potenciar-el-aprendizaje-integrando-el-uso-de-la-inteligencia-artificial-en-contextos-educativos/)`
  },
  {
    id: "ext-chatgpt", fuente: "EXT", titulo: "Guía MINEDUC: Cómo usar ChatGPT para el aprendizaje activo (2023)",
    claves: ["guia chatgpt", "aprendizaje activo", "chatgpt mineduc", "2023", "guia para docentes"],
    texto: `Publicada por el MINEDUC en **2023**, entrega un marco de acción, recursos y orientaciones para equipos docentes, estudiantes y familias sobre el uso de ChatGPT para **potenciar el aprendizaje activo**, en el marco de la **Ciudadanía Digital**.

Sus preguntas de verificación se usan en el Manual 2: ¿la respuesta es precisa?, ¿cómo compruebo su veracidad?, ¿es correcta en cualquier contexto?, ¿reproduce estereotipos?

🔗 [Guía en Ciudadanía Digital](https://ciudadaniadigital.mineduc.cl/recurso/guia-para-docentes-como-usar-chatgpt-para-potenciar-el-aprendizaje-activo/)`
  },
  {
    id: "ext-cpeip", fuente: "EXT", titulo: "Cursos de IA del CPEIP para docentes y directivos",
    claves: ["cpeip", "curso", "cursos", "capacitacion", "formacion", "taller", "talleres", "perfeccionamiento", "desarrollo profesional", "gratis", "postular"],
    texto: `El **CPEIP** (Centro de Perfeccionamiento, Experimentación e Investigaciones Pedagógicas del MINEDUC) desarrolla un **Plan de Formación en Inteligencia Artificial en Educación**, en concordancia con el Marco de Competencias Digitales elaborado con UNESCO. Entre sus acciones formativas:

- **Introducción a la Inteligencia Artificial y su uso educativo:** qué es la IA, oportunidades y desafíos, herramientas y cómo escribir buenas instrucciones (prompts).
- **Talleres para incorporar IA a la labor docente** (ChatGPT, MagicSchool, Gemini).
- **Talleres de IA para evaluar y retroalimentar** aprendizajes (evaluación formativa).
- **Comunidades Virtuales de Aprendizaje:** uso de la IA para la preparación de la enseñanza (Dominio A del Marco para la Buena Enseñanza).
- **Mejorando la gestión escolar con IA:** análisis de datos y toma de decisiones, para equipos directivos.

Las convocatorias cambian cada año: revise las vigentes en la plataforma oficial.
🔗 [Desarrollo Docente en Línea (CPEIP)](https://desarrollodocenteenlinea.cpeip.cl)
🔗 [Plan de formación en IA del CPEIP](https://cpeip.cl/cpeip-liderando-la-formacion-docente-en-inteligencia-artificial/)`
  },
  {
    id: "ext-competencias-digitales", fuente: "EXT", titulo: "Marco Orientador de Competencias Digitales Docentes (MINEDUC–UNESCO)",
    claves: ["competencias digitales", "marco orientador", "competencias docentes", "marco competencias", "buena ensenanza", "unesco santiago"],
    texto: `Elaborado por el **MINEDUC** (Centro de Innovación y CPEIP) con apoyo de **UNESCO Santiago**, busca fortalecer las competencias digitales de docentes, directivos y otros profesionales de la educación, **alineado con el Marco para la Buena Enseñanza**.

- **Dimensiones:** compromiso profesional, competencias pedagógicas y ciudadanía digital de los estudiantes.
- **Progresión en cuatro niveles**, formativa, gradual y contextualizada.

🔗 [Marco Orientador (Ciudadanía Digital)](https://ciudadaniadigital.mineduc.cl/recurso/marco-orientador-de-competencias-digitales-docentes/)`
  },
  {
    id: "ext-recursos-mineduc", fuente: "EXT", titulo: "Recursos MINEDUC de IA para el aula y las familias",
    claves: ["recursos", "chatsp", "sumo primero", "matematica", "humania", "rural", "familias", "kit", "alfabetizacion digital", "clic a clic", "ensena chile"],
    texto: `- **ChatSP:** asistente con IA generativa para docentes de **1° a 6° básico**, experto en los textos **Sumo Primero** de matemática (planificación, secuencias, estrategias). Plan Nacional Sumo Primero con el Centro de Modelamiento Matemático de la U. de Chile. 🔗 [chat.sumoprimero.cl](https://chat.sumoprimero.cl/)
- **HumanIA:** propuesta de enseñanza sobre IA con guías para docentes y estudiantes de **educación media**. 🔗 [Ver recurso](https://ciudadaniadigital.mineduc.cl/recurso/humania-propuesta-de-ensenanza-sobre-inteligencia-artificial/)
- **«Tejiendo redes de aprendizaje», módulo IA:** recursos abiertos MINEDUC–Enseña Chile con enfoque **territorial**, pensados para la educación **rural**. 🔗 [Ver recurso](https://ciudadaniadigital.mineduc.cl/recurso/alfabetizacion-digital-en-la-educacion-rural-inteligencia-artificial/)
- **Kit de Ciudadanía Digital para familias:** videos, cartillas y módulos sobre uso responsable de la tecnología. 🔗 [Ver kit](https://ciudadaniadigital.mineduc.cl/recurso/recursos-para-trabajar-con-familias-en-el-desarrollo-de-la-ciudadania-digital/)
- **Clic a Clic:** set de alfabetización digital para la trayectoria escolar. 🔗 [Ver set](https://ciudadaniadigital.mineduc.cl/recurso/clic-a-clic-set-de-alfabetizacion-digital/)`
  },
  {
    id: "ext-unesco-guia", fuente: "EXT", titulo: "UNESCO: Guía para el uso de IA generativa en educación e investigación",
    claves: ["unesco", "guia unesco", "ia generativa", "regulacion", "edad", "limite de edad", "internacional", "centrado en el ser humano"],
    texto: `Primera guía mundial de la **UNESCO** sobre IA generativa en educación (2023). Propone un enfoque **centrado en el ser humano** y recomienda, entre otras medidas:

- **Proteger la privacidad de los datos** de los usuarios.
- Establecer un **límite de edad** para las conversaciones independientes de estudiantes con plataformas de IA generativa, con un enfoque adecuado a la edad.
- Que las instituciones **validen ética y pedagógicamente** las herramientas antes de usarlas.
- Resguardar la **agencia humana**: la IA apoya, no reemplaza, el juicio de docentes y estudiantes.

Es coherente con la pauta de evaluación de herramientas del Manual 3 (edad mínima, datos, transparencia).
🔗 [Guía en español (UNESDOC)](https://unesdoc.unesco.org/ark:/48223/pf0000389227_spa)`
  },
  {
    id: "ext-unesco-competencias", fuente: "EXT", titulo: "UNESCO: Marcos de competencias en IA para docentes y estudiantes",
    claves: ["competencias ia", "marco unesco", "competencias docentes ia", "competencias estudiantes", "dimensiones", "adquirir profundizar crear"],
    texto: `**Para docentes (UNESCO, 2024):** 15 competencias en **5 dimensiones**:
1. Mentalidad centrada en el ser humano.
2. Ética de la IA.
3. Fundamentos y aplicaciones de la IA.
4. Pedagogía con IA.
5. IA para el desarrollo profesional.

Con **tres niveles de progresión: adquirir, profundizar y crear**. Se funda en proteger los derechos de los docentes, potenciar la agencia humana y promover la sostenibilidad.

**Para estudiantes:** 4 dimensiones: mentalidad centrada en el ser humano, ética de la IA, técnicas y aplicaciones de la IA, y diseño de sistemas de IA. UNESCO advierte no usar la IA para "resolver" problemas estructurales como la falta de docentes o de infraestructura.

🔗 [Marco para docentes (en español)](https://unesdoc.unesco.org/ark:/48223/pf0000393813)
🔗 [Resumen de ambos marcos](https://www.unesco.org/en/articles/what-you-need-know-about-unescos-new-ai-competency-frameworks-students-and-teachers)`
  },
  {
    id: "ext-politica-nacional", fuente: "EXT", titulo: "Política Nacional de Inteligencia Artificial de Chile (actualización 2024)",
    claves: ["politica nacional", "decreto 12", "minciencia", "politica de ia", "estrategia nacional", "chile ia", "gobierno"],
    texto: `La **Política Nacional de IA** (Ministerio de Ciencia, 2021) fue actualizada mediante el **Decreto N.º 12**, publicado en el Diario Oficial el **28 de enero de 2025**.

En el ámbito escolar plantea, entre otros objetivos:
- Promover habilidades para el **uso, desarrollo, comprensión y análisis crítico** de la IA en el sistema escolar.
- Generar **recursos de aprendizaje** sobre IA para el contexto educativo.
- Fortalecer los conocimientos TIC en las **bases curriculares**, incluido el uso ético de la IA.
- Formar a docentes en pensamiento computacional, programación y robótica.

🔗 [Decreto 12 en LeyChile (BCN)](https://www.bcn.cl/leychile/navegar?idNorma=1210664)`
  },
  {
    id: "ext-donde-buscar", fuente: "EXT", titulo: "¿Dónde buscar información confiable sobre IA en educación?",
    claves: ["fuentes confiables", "donde buscar", "enlaces", "sitios oficiales", "recursos oficiales", "informacion oficial", "links", "bibliografia"],
    texto: `**Fuentes oficiales recomendadas:**
- **MINEDUC · Ciudadanía Digital (IA):** 🔗 [ciudadaniadigital.mineduc.cl/ia](https://ciudadaniadigital.mineduc.cl/ia/)
- **CPEIP · cursos gratuitos:** 🔗 [desarrollodocenteenlinea.cpeip.cl](https://desarrollodocenteenlinea.cpeip.cl)
- **Biblioteca del Congreso Nacional (leyes):** 🔗 [bcn.cl/leychile](https://www.bcn.cl/leychile)
- **Ley 21.719 de datos personales:** 🔗 [Texto en LeyChile](https://www.bcn.cl/leychile/navegar?idNorma=1208650)
- **Guía de la Secretaría de Gobierno Digital sobre la nueva ley de datos:** 🔗 [wikiguias.digital.gob.cl](https://wikiguias.digital.gob.cl/datos-personales/guia-practica-implementacion-nueva-ley-datos-personales)
- **UNESCO · IA en educación:** 🔗 [unesco.org](https://www.unesco.org/en/digital-education/artificial-intelligence)

**Regla práctica:** si una norma, cifra o recurso no aparece en un sitio oficial, no se usa en un documento institucional.`
  },

  /* ------------------- DOCENTES: CURRÍCULUM Y MBE ------------------- */
  {
    id: "doc-bases", fuente: "DOC", titulo: "Bases Curriculares: ¿cuál corresponde a mi nivel?",
    claves: ["bases curriculares", "curriculum", "curriculo", "oa", "objetivos de aprendizaje", "programa de estudio", "asignatura", "nivel", "curriculum nacional", "planificar"],
    texto: `Las **Bases Curriculares** definen los **Objetivos de Aprendizaje (OA)** de cada nivel y asignatura. Las vigentes, según el sitio oficial Currículum Nacional:

| Nivel | Bases Curriculares |
|---|---|
| Sala cuna a transición | **Educación Parvularia** (vigentes desde 2019) |
| 1° a 6° básico | **Bases 1° a 6° básico** (y Lengua y Cultura de los Pueblos Originarios Ancestrales) |
| 7° básico a 2° medio | **Bases 7° básico a 2° medio** |
| 3° y 4° medio | **Bases 3° y 4° medio** (formación general, plan común electivo y formación diferenciada) |
| 3° y 4° medio TP | **Formación Diferenciada Técnico-Profesional** |
| Personas jóvenes y adultas | **Bases EPJA 2024** |

**Cómo usarlas con IA:** copie el OA exacto desde el sitio oficial y péguelo en el prompt. **No pida a la IA que "cite" OA**: suele inventarlos o mezclarlos con otros países (Manual 4).

🔗 [Bases Curriculares (curriculumnacional.cl)](https://www.curriculumnacional.cl/Curriculum/Bases_Curriculares)
💡 Escriba **"crear prompt"**: el asistente le pedirá su OA.`
  },
  {
    id: "doc-asignaturas", fuente: "DOC", titulo: "Asignaturas por nivel según las Bases Curriculares",
    claves: ["asignaturas", "disciplina", "lenguaje", "matematica", "ciencias", "historia", "ingles", "artes", "musica", "educacion fisica", "tecnologia", "orientacion", "filosofia", "educacion ciudadana", "ciencias para la ciudadania", "nucleos", "ambitos"],
    texto: `**Educación Parvularia** — 3 ámbitos: **Desarrollo Personal y Social** (Identidad y Autonomía; Convivencia y Ciudadanía; Corporalidad y Movimiento), **Comunicación Integral** (Lenguaje Verbal; Lenguajes Artísticos) e **Interacción y Comprensión del Entorno** (Exploración del Entorno Natural; Comprensión del Entorno Sociocultural; Pensamiento Matemático).

**1° a 6° básico:** Lenguaje y Comunicación, Matemática, Ciencias Naturales, Historia, Geografía y Ciencias Sociales, Inglés, Artes Visuales, Música, Educación Física y Salud, Tecnología y Orientación.

**7° básico a 2° medio:** Lengua y Literatura, Matemática, Ciencias Naturales, Historia, Geografía y Ciencias Sociales, Inglés, Artes Visuales, Música, Educación Física y Salud, Tecnología y Orientación.

**3° y 4° medio — formación general:** Lengua y Literatura, Matemática, Educación Ciudadana, Filosofía, Inglés y Ciencias para la Ciudadanía, más asignaturas del plan común electivo y la formación diferenciada (humanístico-científica, técnico-profesional o artística).

Verifique siempre la versión vigente en 🔗 [curriculumnacional.cl](https://www.curriculumnacional.cl/Curriculum/Bases_Curriculares).`
  },
  {
    id: "doc-mbe", fuente: "DOC", titulo: "Marco para la Buena Enseñanza (MBE 2021)",
    claves: ["marco para la buena ensenanza", "mbe", "estandares", "dominios", "estandares de la profesion docente", "evaluacion docente", "cpeip", "dominio a", "dominio b", "dominio c", "dominio d"],
    texto: `Actualización del **CPEIP** (2021) que define la buena docencia en **4 dominios y 12 estándares**:

**A · Preparación del proceso de enseñanza y aprendizaje**
1. Aprendizaje y desarrollo de los/as estudiantes · 2. Conocimiento disciplinar, didáctico y del currículum escolar · 3. Planificación de la enseñanza · 4. Planificación de la evaluación

**B · Creación de un ambiente propicio para el aprendizaje**
5. Ambiente respetuoso y organizado · 6. Desarrollo personal y social

**C · Enseñanza para el aprendizaje de todos/as los/as estudiantes**
7. Estrategias de enseñanza para el logro de aprendizajes profundos · 8. Estrategias para el desarrollo de habilidades del pensamiento · 9. Evaluación y retroalimentación para el aprendizaje

**D · Responsabilidades profesionales**
10. Ética profesional · 11. Aprendizaje profesional continuo · 12. Compromiso con el mejoramiento continuo de la comunidad escolar

**Con IA:** apoya sobre todo los estándares 3, 4, 7, 8 y 9 (planificar, evaluar, diversificar, retroalimentar). La decisión pedagógica sigue siendo del docente.
🔗 [MBE 2021 (PDF oficial)](https://estandaresdocentes.mineduc.cl/wp-content/uploads/2021/08/MBE-2.pdf)`
  },
  {
    id: "doc-mbe-parvularia", fuente: "DOC", titulo: "Marco para la Buena Enseñanza de Educación Parvularia (2019)",
    claves: ["parvularia", "educadora", "educadoras de parvulos", "jardin", "sala cuna", "nivel transicion", "mbe parvularia", "kinder", "prekinder", "parvulos"],
    texto: `Referente de la **Subsecretaría de Educación Parvularia** (2019) "para una práctica pedagógica reflexiva y pertinente". Cuatro dominios con 16 criterios:

**A · Preparación del proceso de enseñanza y aprendizaje:** domina los conocimientos disciplinares y pedagógicos del currículum vigente; considera las características y formas de aprender de todos los niños y niñas; planifica la enseñanza y la evaluación de acuerdo con ellas.

**B · Creación de un ambiente propicio para el aprendizaje:** bienestar integral; ambientes físicos funcionales y seguros; organización del tiempo; cultura de aprendizaje desafiante y **lúdica**.

**C · Enseñanza para el aprendizaje de todos los niños y las niñas:** lidera al equipo de aula; comunicación efectiva; interacciones pedagógicas para el desarrollo integral; decisiones oportunas a partir de la evaluación.

**D · Compromiso y desarrollo profesional:** compromiso con los niños y niñas; colaboración con la comunidad educativa y local; reflexión crítica sobre políticas y sobre la propia práctica.

**Con IA:** pida experiencias de aprendizaje **lúdicas**, con juego y materiales concretos, y verifique los OA en las Bases Curriculares de Educación Parvularia.
🔗 [MBE Educación Parvularia (PDF oficial)](https://parvularia.mineduc.cl/wp-content/uploads/2020/05/19-10-30-MBE-EP-Final-para-web-largo-comprimido-1.pdf)`
  },

  /* ------------------- DIRECTIVOS ------------------- */
  {
    id: "dir-mbdle", fuente: "DIR", titulo: "Marco para la Buena Dirección y el Liderazgo Escolar (MBDLE 2015)",
    claves: ["mbdle", "buena direccion", "liderazgo escolar", "directivo", "directivos", "director", "directora", "equipo directivo", "practicas directivas", "recursos personales", "utp", "lider"],
    texto: `Referente del **CPEIP/MINEDUC** (2015) que orienta las prácticas y el desarrollo profesional de directores y equipos directivos.

**Cinco dimensiones de prácticas:**
1. Construyendo e implementando una **visión estratégica compartida**.
2. Desarrollando las **capacidades profesionales**.
3. Liderando los **procesos de enseñanza y aprendizaje**.
4. Gestionando la **convivencia y la participación** de la comunidad escolar.
5. Desarrollando y **gestionando el establecimiento** escolar.

**Recursos personales:**
- **Principios:** ética, confianza, justicia social e integridad.
- **Habilidades:** visión estratégica, trabajar en equipo, comunicar de manera efectiva, capacidad de negociación, aprendizaje permanente, flexibilidad, empatía, sentido de autoeficacia y resiliencia.
- **Conocimientos:** liderazgo escolar, inclusión y equidad, mejoramiento y cambio escolar, currículum, evaluación, prácticas de enseñanza-aprendizaje, desarrollo profesional, políticas y normativa educacional, y gestión de proyectos.

**Con IA (Manual 2, tipos 1, 2, 5 y 6):** borradores de documentos, síntesis, análisis de datos agregados e interlocutor crítico. La deliberación y la decisión siguen siendo del equipo.
🔗 [MBDLE 2015 (PDF)](https://liderazgoeducativo.mineduc.cl/wp-content/uploads/sites/55/2016/04/MBDLE_2015.pdf) · [Página oficial](https://liderazgoeducativo.mineduc.cl/marco-para-la-buena-direccion-y-el-liderazgo-escolar-2/)`
  },
  {
    id: "dir-recursos", fuente: "DIR", titulo: "Recursos oficiales para equipos directivos (PME, estándares, normativa)",
    claves: ["pme", "plan de mejoramiento", "estandares indicativos", "normativa vigente", "liderazgo educativo", "sep", "ciclo de mejora", "gestion", "datos pme", "aseguramiento de la calidad"],
    texto: `En el sitio **Liderazgo Educativo del MINEDUC**:
- **Orientaciones PME 2026** y **Herramientas del Plan de Mejoramiento Educativo**. 🔗 [Ver orientaciones](https://liderazgoeducativo.mineduc.cl/orientaciones-pme-2026-2/) · [Herramientas PME](https://liderazgoeducativo.mineduc.cl/herramientas-plan-de-mejoramiento-educativo/)
- **Estándares Indicativos de Desempeño** para la autoevaluación institucional. 🔗 [Ver estándares](https://liderazgoeducativo.mineduc.cl/estandares-indicativos-de-desempeno/)
- **Guía sobre normativa vigente para equipos directivos.** 🔗 [Ver guía](https://liderazgoeducativo.mineduc.cl/guia-sobre-normativa-vigente-para-equipos-directivos-de-establecimientos-educacionales/)
- **Set de rúbricas para la reflexión y actualización de planes.** 🔗 [Ver rúbricas](https://liderazgoeducativo.mineduc.cl/set-de-rubricas-reflexion-y-actualizacion-de-planes/)
- **Centros de Liderazgo** con cursos para directivos. 🔗 [Ver centros](https://liderazgoeducativo.mineduc.cl/centros-de-liderazgo/)

**Con IA:** úsela para estructurar el PME, redactar acciones e indicadores medibles y preparar preguntas de análisis sobre datos **agregados**. El diagnóstico, la priorización y la asignación de recursos se definen con la comunidad (Manual 2, tabla 17).`
  },

  /* ------------------- ASISTENTES Y CONVIVENCIA ------------------- */
  {
    id: "asi-rol", fuente: "ASI", titulo: "Asistentes de la educación: rol en la comunidad educativa",
    claves: ["asistente", "asistentes", "asistentes de la educacion", "paradocente", "inspector", "auxiliar", "administrativo", "rol asistente", "comunidad educativa"],
    texto: `Las y los asistentes de la educación, **cualquiera sea su función**, forman parte de la comunidad educativa y contribuyen al desarrollo del **Proyecto Educativo Institucional** (MINEDUC, *Asistentes de la Educación en la Reforma Educativa*).

Ese material de apoyo aborda: participación en la comunidad educativa, el PEI, la normativa escolar, el Consejo Escolar, comunicación y asertividad, resolución alternativa de conflictos, prevención del consumo de drogas, seguridad escolar y autocuidado, y detección y abordaje del abuso sexual infantil.

**Con IA, ideas útiles y seguras:**
- Material informativo para familias en lenguaje claro.
- Diseño de talleres o recreos con actividades de convivencia.
- Pautas de registro **sin datos personales**.
- Simplificar protocolos para difundirlos.

⛔ Nunca ingrese datos de estudiantes ni relatos de casos: la intervención en situaciones de vulneración **no se delega en IA** (Manual 2).
🔗 [Documento MINEDUC (PDF)](https://www.comunidadescolar.cl/wp-content/uploads/2019/07/AsistentesparaLaeducacion.pdf)`
  },
  {
    id: "asi-pie", fuente: "ASI", titulo: "Profesionales asistentes de la educación en el PIE",
    claves: ["pie", "programa de integracion", "integracion escolar", "psicologo", "fonoaudiologo", "kinesiologo", "psicopedagogo", "terapeuta ocupacional", "nee", "necesidades educativas especiales", "educacion especial", "decreto 170"],
    texto: `Orientaciones del MINEDUC (Unidad de Educación Especial, 2019) sobre el rol de los **profesionales asistentes de la educación en los Programas de Integración Escolar (PIE)**, en el marco de una educación inclusiva.

**Tres roles:**
- **Evaluador:** toma de decisiones con foco en la mejora y el ajuste de los procesos educativos.
- **De apoyo:** apoyos a estudiantes, docentes y familias.
- **Colaborador:** trabajo colaborativo con el equipo PIE y los docentes de aula regular.

**Ámbitos por profesión (ejemplos):** fonoaudiólogo/a → lenguaje y comunicación; kinesiólogo/a → corporalidad, movimiento y psicomotricidad; psicopedagogo/a → dificultades individuales de aprendizaje; psicólogo/a → desarrollo cognitivo y emocional.

**Con IA:** úsela para material de apoyo **general**, como adaptar textos, crear apoyos visuales o diseñar actividades de lenguaje o psicomotricidad. Los informes PIE son **datos sensibles de salud**: nunca entran a plataformas de IA de uso público (Manual 2, apartado 2.10).
🔗 [Orientaciones PIE (PDF)](https://especial.mineduc.cl/wp-content/uploads/sites/31/2020/01/Profesionales-asistentes-de-la-educacion-002.pdf)`
  },
  {
    id: "asi-convivencia", fuente: "ASI", titulo: "Convivencia educativa: recursos oficiales del MINEDUC",
    claves: ["convivencia", "convivencia escolar", "convivencia educativa", "pnce", "politica nacional de convivencia", "reglamento interno", "protocolo", "bienestar", "salud mental", "buen trato", "bullying", "acoso", "ciberacoso", "conflictos", "21809", "encargado de convivencia"],
    texto: `El portal **Cultura Educativa** del MINEDUC reúne los recursos de la **Política Nacional de Convivencia Educativa (PNCE)**:
- **Orientaciones para implementar la Ley N.º 21.809** (2026), sobre convivencia educativa, buen trato y bienestar. 🔗 [PDF](https://culturaeducativa.mineduc.gob.cl/wp-content/uploads/2026/08/ORIENTACIONES-PARA-LA-IMPLEMENTACION-DE-LA-LEY-21.809.pdf)
- **Plan de gestión de convivencia educativa 2026**: planificación estratégica y participativa. 🔗 [PDF](https://culturaeducativa.mineduc.gob.cl/wp-content/uploads/2026/07/PLAN-DE-GESTION-DE-CONVIVENCIA-EDUCATIVA-2026.pdf)
- **Orientaciones para la jornada de reglamentos internos 2026.** 🔗 [PDF](https://culturaeducativa.mineduc.gob.cl/wp-content/uploads/2026/04/ORIENTACIONES-REGLAMENTOS-INTERNOS-2026.pdf)
- **Herramientas metodológicas para la pedagogización de la convivencia** (2026). 🔗 [PDF](https://culturaeducativa.mineduc.gob.cl/wp-content/uploads/2026/03/02.-Herramientas-Metodologicas-para-la-Pedagogizacion-de-la-Convivencia-.pdf)
- **Decálogo para la gestión colaborativa de conflictos** (Superintendencia de Educación). 🔗 [PDF](https://culturaeducativa.mineduc.gob.cl/wp-content/uploads/2023/12/Triptico_decalogo_GCC.pdf)
- **Aprendizaje socioemocional** y sección de **bienestar y salud mental**. 🔗 [Ver recursos](https://culturaeducativa.mineduc.gob.cl/aprendizaje-socioemocional/)

Según la PNCE, la convivencia **se aprende y se enseña** de manera intencionada y comunitaria, y es una responsabilidad compartida.

**Con IA:** simplificar protocolos para familias, diseñar actividades formativas y preparar jornadas. ⛔ No delegue decisiones disciplinarias ni comunicaciones sensibles (Manual 2).
🔗 [Todos los recursos de convivencia](https://culturaeducativa.mineduc.gob.cl/recursos-convivencia/)`
  }
];

/* =====================================================================
   ASISTENTE DE PROMPTS (flujo guiado dentro del chat)
   ===================================================================== */
/* Roles de quien usa el asistente. Cada rol ve tipos de material y
   marcos de referencia distintos. */
const ROLES = {
  docente:   { nombre: "Docente o educador/a", corto: "Docente", emoji: "👩‍🏫", marco: "Bases Curriculares y Marco para la Buena Enseñanza" },
  directivo: { nombre: "Directivo / equipo de gestión", corto: "Directivo", emoji: "🧭", marco: "Marco para la Buena Dirección y el Liderazgo Escolar" },
  asistente: { nombre: "Asistente de la educación", corto: "Asistente de la educación", emoji: "🤝", marco: "orientaciones para asistentes de la educación y la Política Nacional de Convivencia Educativa" },
  slep:      { nombre: "Funcionario/a del SLEP (nivel central)", corto: "Funcionario/a SLEP", emoji: "🏛️", marco: "Ley N° 21.040 (Sistema de Educación Pública), Estrategia Nacional de Educación Pública, Plan Estratégico Local y Plan Anual Local" }
};

/* =====================================================================
   PERFILES DE CARGO (base). Describen funciones y normativa de cada cargo
   para que el asistente proponga actividades acordes. Son referencias
   generales tomadas de la normativa y orientaciones públicas: el equipo
   del Servicio puede editarlas, eliminarlas o agregar otras desde el panel
   de configuración (pestaña «Roles y perfiles»).
   ===================================================================== */
const PERFILES_BASE = [
  /* ---- Docentes ---- */
  { id: "doc-aula", rol: "docente", nombre: "Docente de aula", normativa: "Ley N° 19.070 (Estatuto Docente), Ley N° 20.903 (Sistema de Desarrollo Profesional Docente), Marco para la Buena Enseñanza 2021, Bases Curriculares y Decreto 67 de 2018",
    texto: "Planifica, implementa y evalúa procesos de enseñanza y aprendizaje alineados con las Bases Curriculares; diversifica la enseñanza para responder a la diversidad del curso; evalúa formativa y sumativamente; genera un ambiente de respeto y convivencia en el aula; trabaja colaborativamente con pares, equipo PIE y familias; reflexiona sobre su práctica y participa en su desarrollo profesional." },
  { id: "doc-jefatura", rol: "docente", nombre: "Profesor/a jefe", normativa: "Ley N° 19.070, Marco para la Buena Enseñanza 2021 y Política Nacional de Convivencia Educativa",
    texto: "Acompaña el desarrollo integral y la trayectoria educativa de su curso; coordina la orientación, la convivencia y la comunicación con las familias (reuniones de apoderados y entrevistas); articula con docentes de asignatura, equipo de convivencia y PIE; promueve la participación estudiantil." },
  { id: "doc-parvularia", rol: "docente", nombre: "Educador/a de párvulos", normativa: "Bases Curriculares de Educación Parvularia 2018, Marco para la Buena Enseñanza de Educación Parvularia y Ley N° 20.903",
    texto: "Diseña, implementa y evalúa experiencias de aprendizaje según los núcleos y ámbitos de las Bases Curriculares de Educación Parvularia; lidera el equipo de aula con técnicos en educación parvularia; promueve el juego, el bienestar y la participación de las familias; observa y documenta los aprendizajes." },
  { id: "doc-diferencial", rol: "docente", nombre: "Profesor/a de educación diferencial (PIE)", normativa: "Decreto 170 de 2009, Decreto 83 de 2015, Ley N° 20.422 y orientaciones MINEDUC del Programa de Integración Escolar",
    texto: "Co-enseña con docentes de aula y apoya la planificación diversificada (DUA, Decreto 83); evalúa necesidades de apoyo y elabora planes de apoyo individual con resguardo de la confidencialidad; asesora en estrategias y recursos accesibles; coordina con familias y profesionales asistentes del PIE." },
  { id: "doc-tp", rol: "docente", nombre: "Docente de especialidad técnico-profesional", normativa: "Bases Curriculares de la Formación Diferenciada Técnico-Profesional, Marco para la Buena Enseñanza 2021 y orientaciones de alternancia y práctica profesional",
    texto: "Desarrolla los módulos de su especialidad según el perfil de egreso; vincula el aprendizaje con el mundo del trabajo (alternancia, práctica profesional, empresas del territorio); evalúa competencias con situaciones auténticas; resguarda la seguridad en talleres y laboratorios." },

  /* ---- Directivos ---- */
  { id: "dir-director", rol: "directivo", nombre: "Director/a", normativa: "Ley N° 20.501, Ley N° 19.070, Ley N° 21.040, Marco para la Buena Dirección y el Liderazgo Escolar (2015), Estándares Indicativos de Desempeño y PME",
    texto: "Conduce el Proyecto Educativo Institucional y el Plan de Mejoramiento Educativo; lidera los procesos de enseñanza-aprendizaje; desarrolla las capacidades profesionales del equipo; gestiona recursos, convivencia y participación de la comunidad (Consejo Escolar); rinde cuentas al Servicio Local según su convenio de desempeño." },
  { id: "dir-utp", rol: "directivo", nombre: "Jefe/a de Unidad Técnico-Pedagógica (UTP)", normativa: "Marco para la Buena Dirección y el Liderazgo Escolar, Bases Curriculares, Decreto 67 de 2018 y Decreto 83 de 2015",
    texto: "Coordina la implementación curricular, la planificación y la evaluación; acompaña y retroalimenta la práctica docente (observación de aula); analiza resultados de aprendizaje para la toma de decisiones; organiza el trabajo técnico, los reglamentos de evaluación y el desarrollo profesional docente." },
  { id: "dir-inspector", rol: "directivo", nombre: "Inspector/a general", normativa: "Reglamento Interno, Ley N° 20.536 (Violencia Escolar), Ley N° 21.128 (Aula Segura) y circulares de la Superintendencia de Educación",
    texto: "Vela por la organización de la jornada, la asistencia, la puntualidad y la seguridad escolar; coordina a paradocentes e inspectores de patio; aplica el Reglamento Interno y sus protocolos con justo procedimiento; colabora con el equipo de convivencia y con las familias." },
  { id: "dir-orientador", rol: "directivo", nombre: "Orientador/a", normativa: "Bases Curriculares de Orientación, Política Nacional de Convivencia Educativa y orientaciones MINEDUC de orientación vocacional",
    texto: "Diseña y coordina el plan de orientación (desarrollo personal, afectividad, proyecto de vida y orientación vocacional); apoya a profesores jefes; articula con redes externas; promueve el bienestar y la formación ciudadana." },

  /* ---- Asistentes de la educación ---- */
  { id: "asi-convivencia", rol: "asistente", nombre: "Encargado/a de convivencia educativa", normativa: "Ley N° 20.536, Política Nacional de Convivencia Educativa, Reglamento Interno y orientaciones MINEDUC de convivencia",
    texto: "Coordina el Plan de Gestión de Convivencia; promueve acciones formativas y preventivas; gestiona protocolos y medidas formativas con enfoque de derechos y justo procedimiento; articula con equipo directivo, duplas psicosociales y redes locales; informa al Consejo Escolar." },
  { id: "asi-pie", rol: "asistente", nombre: "Profesional asistente del PIE (psicólogo/a, fonoaudiólogo/a, terapeuta ocupacional u otro)", normativa: "Decreto 170 de 2009, Ley N° 21.109 (Estatuto de los Asistentes de la Educación Pública) y orientaciones MINEDUC sobre el rol de los profesionales asistentes en el PIE",
    texto: "Evalúa y apoya a estudiantes con necesidades de apoyo según su especialidad, siempre con confidencialidad; colabora con docentes en estrategias de aula; orienta a familias; participa en la planificación y el trabajo colaborativo del equipo PIE." },
  { id: "asi-dupla", rol: "asistente", nombre: "Dupla psicosocial / trabajador/a social", normativa: "Ley N° 21.109, Política Nacional de Convivencia Educativa y Ley N° 21.430 (Garantías de la Niñez)",
    texto: "Acompaña situaciones psicosociales que afectan la trayectoria educativa (asistencia, vulneración de derechos, bienestar); deriva y coordina con redes de protección y salud; trabaja con familias; apoya acciones preventivas de convivencia. No reemplaza a los organismos especializados." },
  { id: "asi-tecnico", rol: "asistente", nombre: "Técnico/a en educación parvularia o asistente de aula", normativa: "Ley N° 21.109 y Bases Curriculares de Educación Parvularia (en el nivel parvulario)",
    texto: "Apoya la implementación de experiencias de aprendizaje bajo la orientación del docente o educador/a; prepara materiales; acompaña rutinas, juego y autonomía; apoya el cuidado y bienestar de niños y niñas." },
  { id: "asi-paradocente", rol: "asistente", nombre: "Paradocente / inspector/a de patio", normativa: "Ley N° 21.109 y Reglamento Interno del establecimiento",
    texto: "Apoya el resguardo de la seguridad y la convivencia en patios, accesos y recreos; controla asistencia y atrasos; colabora con la inspectoría y el equipo de convivencia; informa situaciones según los protocolos." },
  { id: "asi-administrativo", rol: "asistente", nombre: "Administrativo/a del establecimiento", normativa: "Ley N° 21.109, Ley N° 21.719 (protección de datos personales) y normativa de subvenciones",
    texto: "Gestiona documentación, matrícula, registros, certificados y atención de público; apoya rendiciones y registros administrativos (SIGE, subvenciones); resguarda la confidencialidad de los datos personales de la comunidad." },
  { id: "asi-cra", rol: "asistente", nombre: "Encargado/a de biblioteca CRA", normativa: "Orientaciones del programa Bibliotecas Escolares CRA (MINEDUC)",
    texto: "Gestiona la biblioteca escolar y su colección; promueve la lectura y la búsqueda de información; apoya a docentes con recursos para el aprendizaje; organiza actividades de fomento lector." },
  { id: "asi-auxiliar", rol: "asistente", nombre: "Auxiliar de servicios", normativa: "Ley N° 21.109",
    texto: "Mantiene la limpieza, el orden y el cuidado de espacios e instalaciones; apoya la seguridad y logística de actividades; colabora en el buen funcionamiento diario del establecimiento." },

  /* ---- Funcionarios del SLEP (nivel central). La estructura exacta depende de cada Servicio. ---- */
  { id: "slep-direccion", rol: "slep", nombre: "Dirección Ejecutiva y equipo directivo del Servicio", normativa: "Ley N° 21.040, Estrategia Nacional de Educación Pública, Plan Estratégico Local y convenio de gestión educacional",
    texto: "Conduce el Servicio Local y la provisión del servicio educacional en su territorio; define prioridades del Plan Estratégico Local y del Plan Anual Local; coordina las subdirecciones; se relaciona con la Dirección de Educación Pública, el Comité Directivo Local y el Consejo Local; rinde cuentas públicamente." },
  { id: "slep-atp", rol: "slep", nombre: "Apoyo Técnico-Pedagógico (asesor/a técnico-pedagógico)", normativa: "Ley N° 21.040 (unidad de apoyo técnico-pedagógico), Marco para la Buena Dirección y el Liderazgo Escolar, Estándares Indicativos de Desempeño y PME",
    texto: "Acompaña y asesora técnicamente a los equipos directivos y docentes de los establecimientos; apoya la implementación curricular, la evaluación, la convivencia, la inclusión (PIE) y la educación parvularia; promueve redes de mejoramiento entre establecimientos; analiza datos de aprendizaje y trayectorias para orientar apoyos." },
  { id: "slep-planificacion", rol: "slep", nombre: "Planificación y Control de Gestión", normativa: "Ley N° 21.040 (unidad de planificación y control de gestión), Plan Estratégico Local y Plan Anual Local",
    texto: "Elabora y monitorea el Plan Estratégico Local y el Plan Anual Local; diseña indicadores y tableros de seguimiento; analiza matrícula, asistencia y resultados para la toma de decisiones; prepara informes de gestión y cuentas públicas, sin datos personales." },
  { id: "slep-finanzas", rol: "slep", nombre: "Administración y Finanzas", normativa: "Ley N° 21.040 (unidad de administración y finanzas), Ley N° 19.886 (Compras Públicas), Ley de Presupuestos y normativa de subvenciones",
    texto: "Gestiona el presupuesto, la contabilidad, las compras y el abastecimiento del Servicio y sus establecimientos; administra y rinde recursos (subvenciones, SEP, PIE, FAEP u otros); controla la ejecución financiera y apoya a los establecimientos en sus procesos administrativos." },
  { id: "slep-personas", rol: "slep", nombre: "Gestión y Desarrollo de Personas", normativa: "Ley N° 19.070, Ley N° 21.109, Ley N° 20.903, Estatuto Administrativo y Ley N° 21.719 (datos personales)",
    texto: "Gestiona dotación, contratación, remuneraciones y procesos de personal docente, asistentes y funcionarios del Servicio; impulsa el desarrollo profesional, la inducción y el bienestar; resguarda estrictamente la confidencialidad de los datos de las personas." },
  { id: "slep-juridica", rol: "slep", nombre: "Unidad Jurídica", normativa: "Ley N° 21.040, Ley N° 19.880 (procedimientos administrativos), Ley N° 20.285 (Transparencia) y normativa educacional vigente",
    texto: "Asesora jurídicamente al Servicio y a los establecimientos; elabora y revisa resoluciones, convenios y contratos; conduce investigaciones y sumarios administrativos; vela por el cumplimiento normativo y la transparencia. La IA no reemplaza el análisis jurídico." },
  { id: "slep-infra", rol: "slep", nombre: "Infraestructura, mantención y equipamiento", normativa: "Ley N° 21.040, normativa de infraestructura escolar del MINEDUC y Ley N° 19.886",
    texto: "Planifica y supervisa proyectos de infraestructura, mantención y seguridad de los establecimientos; gestiona equipamiento y mobiliario; prioriza necesidades según diagnóstico y recursos disponibles." },
  { id: "slep-comunicaciones", rol: "slep", nombre: "Comunicaciones y vinculación con la comunidad", normativa: "Ley N° 21.040 (participación y Consejo Local), Ley N° 20.285 y Ley N° 21.719",
    texto: "Diseña y difunde comunicaciones institucionales; gestiona redes sociales y prensa; promueve la participación de las comunidades educativas y el vínculo con actores del territorio; cuida el uso de imágenes y datos personales." },
  { id: "slep-ti", rol: "slep", nombre: "Tecnologías de la información y datos", normativa: "Ley N° 21.719 (datos personales), Ley N° 21.663 (Ciberseguridad) y orientaciones de Gobierno Digital",
    texto: "Administra plataformas, sistemas y conectividad del Servicio y los establecimientos; apoya la seguridad de la información y la protección de datos; da soporte a usuarios y a la gestión de datos para reportes." },
  { id: "slep-administrativo", rol: "slep", nombre: "Apoyo administrativo y secretaría", normativa: "Ley N° 19.880, Ley N° 20.285 y Ley N° 21.719",
    texto: "Gestiona documentación, oficina de partes, agendas, actas y atención de público; prepara oficios, memorandos y registros; resguarda la confidencialidad de la información y de los datos personales." }
];

/* curricular: true → pregunta nivel, asignatura, tema y OA (Bases Curriculares).
   curricular: false → pregunta propósito y destinatarios.
   marco: referente oficial que se agrega al prompt (o función según nivel). */
const TIPOS_MATERIAL = [
  /* ---- Docentes ---- */
  { id: "guia", roles: ["docente"], curricular: true, nombre: "Guía de trabajo", rol: "docente con experiencia en diversificación de la enseñanza en el sistema escolar chileno", tarea: "diseña una guía de trabajo", formato: "título, objetivo en lenguaje para estudiantes, instrucciones paso a paso, 3 a 5 actividades de dificultad progresiva y una pregunta de cierre metacognitiva", estandares: "3 (planificación de la enseñanza) y 7 (estrategias para aprendizajes profundos)" },
  { id: "clase", roles: ["docente"], curricular: true, nombre: "Planificación de clase", rol: "docente experimentado del sistema escolar chileno", tarea: "diseña la secuencia de una clase de 90 minutos", formato: "inicio, desarrollo y cierre con tiempos, actividades, preguntas clave y evidencia de aprendizaje; al menos 60 % de trabajo activo de los estudiantes", estandares: "3 (planificación de la enseñanza), 7 y 8 (estrategias de enseñanza y habilidades del pensamiento)" },
  { id: "rubrica", roles: ["docente", "directivo"], curricular: true, nombre: "Rúbrica de evaluación", rol: "jefe de UTP de un establecimiento de educación pública chileno con experiencia en evaluación formativa", tarea: "diseña una rúbrica analítica", formato: "tabla con cuatro criterios y tres niveles de logro (Logrado, En desarrollo, Por lograr), más una columna con sugerencia de retroalimentación para el nivel más bajo", estandares: "4 (planificación de la evaluación) y 9 (evaluación y retroalimentación para el aprendizaje)" },
  { id: "prueba", roles: ["docente"], curricular: true, nombre: "Prueba / banco de ítems", rol: "especialista en evaluación educativa del sistema escolar chileno", tarea: "genera 10 preguntas de selección múltiple de cuatro alternativas", formato: "cada pregunta con sus alternativas y, al lado, qué error conceptual frecuente representa cada distractor; alternativas de extensión similar y sin 'todas/ninguna de las anteriores'", estandares: "4 (planificación de la evaluación) y 9 (evaluación y retroalimentación)" },
  { id: "diversificar", roles: ["docente"], curricular: true, nombre: "Diversificar un material", rol: "docente con experiencia en diversificación de la enseñanza (DUA) en el sistema escolar chileno", tarea: "genera tres versiones del material que pegaré al final", formato: "VERSIÓN A con mayor andamiaje (pasos desglosados, ejemplo resuelto, vocabulario clave); VERSIÓN B estándar; VERSIÓN C con mayor demanda cognitiva. Las tres evalúan el mismo aprendizaje y se ven similares entre sí", estandares: "1 (aprendizaje y desarrollo de los estudiantes) y 7 (estrategias para aprendizajes profundos)", pegar: true },
  { id: "texto", roles: ["docente", "asistente"], curricular: true, nombre: "Adaptar un texto", rol: "docente especialista en comprensión lectora del sistema escolar chileno", tarea: "adapta la complejidad léxica del texto que pegaré al final", formato: "texto adaptado, glosario de 5 palabras clave y 4 preguntas de comprensión (literal, inferencial y crítica)", estandares: "1 (aprendizaje y desarrollo de los estudiantes) y 7", pegar: true },
  { id: "infografia", roles: ["docente"], curricular: true, nombre: "Infografía para el aula", rol: "diseñador instruccional del sistema escolar chileno", tarea: "propón el contenido y la estructura de una infografía didáctica", formato: "título atractivo, 4 a 6 bloques breves (máx. 25 palabras c/u), sugerencia de íconos o imágenes y una pregunta para los estudiantes; texto listo para pegar en Canva", estandares: "7 (estrategias para aprendizajes profundos)" },

  /* ---- Directivos ---- */
  { id: "agenda", roles: ["directivo", "slep"], curricular: false, nombre: "Reunión o jornada de reflexión", rol: "asesor en desarrollo profesional docente del sistema escolar chileno", tarea: "diseña la agenda de una reunión o jornada de reflexión pedagógica", formato: "para cada momento: objetivo, tiempo, modalidad de trabajo, preguntas orientadoras concretas y producto esperado; al menos 40 % del tiempo para deliberación y un cierre con acuerdos, responsables y plazos", marco: "Marco para la Buena Dirección y el Liderazgo Escolar, dimensión «Desarrollando las capacidades profesionales»" },
  { id: "critico", roles: ["directivo", "slep"], curricular: false, nombre: "Análisis crítico de una medida", rol: "asesor crítico en gestión escolar con experiencia en establecimientos de educación pública chilenos", tarea: "analiza críticamente la medida que describo en el contexto, sin darme una opinión favorable", formato: "(1) tres supuestos no verificados; (2) condiciones institucionales necesarias; (3) tres formas probables de fracaso; (4) cinco preguntas antes de presentarla al Consejo de Profesores", marco: "Marco para la Buena Dirección y el Liderazgo Escolar, dimensión «Construyendo e implementando una visión estratégica compartida»" },
  { id: "pme", roles: ["directivo"], curricular: false, nombre: "Acciones e indicadores del PME", rol: "asesor en gestión escolar para el sistema educativo chileno con experiencia en Planes de Mejoramiento Educativo", tarea: "redacta acciones de mejora e indicadores medibles para el objetivo que indico", formato: "tabla con acción, descripción, responsable (cargo), plazo, medio de verificación e indicador medible; deja como [PENDIENTE] los datos y montos que no conozcas", marco: "Marco para la Buena Dirección y el Liderazgo Escolar («Desarrollando y gestionando el establecimiento escolar») y Estándares Indicativos de Desempeño" },
  { id: "acompanamiento", roles: ["directivo"], curricular: false, nombre: "Pauta de acompañamiento al aula", rol: "jefe de UTP de un establecimiento de educación pública chileno con experiencia en acompañamiento docente", tarea: "diseña una pauta de observación y retroalimentación de clases", formato: "tabla con indicadores observables (sin juicios de valor), espacio para evidencias, preguntas para la conversación de retroalimentación y acuerdos de mejora", marco: "Marco para la Buena Dirección y el Liderazgo Escolar («Liderando los procesos de enseñanza y aprendizaje») y Marco para la Buena Enseñanza 2021" },
  { id: "informe", roles: ["directivo", "slep"], curricular: false, nombre: "Estructura de informe de gestión", rol: "asesor en gestión escolar para el sistema educativo chileno", tarea: "propón la estructura de un informe de gestión", formato: "índice con secciones; para cada sección, qué información incluir y de qué fuente institucional obtenerla; deja los datos como campos por completar, sin inventar cifras", marco: "Marco para la Buena Dirección y el Liderazgo Escolar («Desarrollando y gestionando el establecimiento escolar»)" },

  /* ---- Asistentes de la educación ---- */
  { id: "taller", roles: ["asistente", "directivo"], curricular: false, nombre: "Taller o actividad de convivencia", rol: "especialista en convivencia educativa del sistema escolar chileno", tarea: "diseña un taller o actividad formativa de convivencia", formato: "objetivo, duración, materiales, inicio, desarrollo y cierre con instrucciones paso a paso, preguntas de reflexión y una forma sencilla de evaluar la actividad", marco: "Política Nacional de Convivencia Educativa: la convivencia se aprende y se enseña de manera intencionada y comunitaria" },
  { id: "familias", roles: ["asistente", "directivo", "docente"], curricular: false, nombre: "Material informativo para familias", rol: "especialista en comunicación con familias de comunidades escolares chilenas", tarea: "elabora un material informativo breve para familias", formato: "título claro, 4 a 6 ideas clave en frases cortas, qué pueden hacer en casa, a quién dirigirse en el establecimiento y un cierre cercano; listo para imprimir o compartir", marco: "orientaciones del MINEDUC para la participación y colaboración con familias" },
  { id: "protocolo", roles: ["asistente", "directivo"], curricular: false, nombre: "Simplificar un protocolo", rol: "especialista en comunicación institucional para comunidades escolares chilenas", tarea: "elabora una versión informativa para familias del protocolo que pegaré al final", formato: "qué situaciones cubre, pasos en orden con plazos, a quién dirigirse en cada etapa; frases cortas y sin lenguaje jurídico. No modifiques plazos, responsables ni procedimientos: si algo no está claro, márcalo como [REVISAR]", marco: "Reglamento Interno del establecimiento y orientaciones de convivencia del MINEDUC", pegar: true },
  { id: "apoyo", roles: ["asistente"], curricular: false, nombre: "Material de apoyo (PIE / aula)", rol: "profesional asistente de la educación con experiencia en Programas de Integración Escolar", tarea: "diseña un material de apoyo general para el aula", formato: "propósito, materiales, instrucciones paso a paso con apoyos visuales sugeridos y variantes para distintos ritmos; sin referencias a diagnósticos ni a estudiantes específicos", marco: "Orientaciones MINEDUC sobre el rol de los profesionales asistentes de la educación en el PIE (roles de apoyo y colaborador)" },

  /* ---- Funcionarios del SLEP (nivel central) ---- */
  { id: "minuta", roles: ["slep", "directivo"], curricular: false, nombre: "Minuta o informe ejecutivo", rol: "profesional de gestión de un Servicio Local de Educación Pública chileno", tarea: "redacta una minuta ejecutiva sobre el tema que indico", formato: "antecedentes (3 a 5 líneas), situación actual, análisis (riesgos y oportunidades), propuesta o alternativas con pros y contras, próximos pasos con responsables (cargos) y plazos; máximo una página; deja como [PENDIENTE] los datos que no conozcas, sin inventar cifras", marco: "Ley N° 21.040, Plan Estratégico Local y Plan Anual Local del Servicio" },
  { id: "plan-trabajo", roles: ["slep", "directivo", "asistente"], curricular: false, nombre: "Plan de trabajo con cronograma", rol: "especialista en planificación y gestión de proyectos en el sector educativo público chileno", tarea: "elabora un plan de trabajo para el propósito que indico", formato: "objetivo general, objetivos específicos, tabla de actividades con responsable (cargo), fecha o mes, recursos, producto y medio de verificación; riesgos y cómo mitigarlos; indicadores de seguimiento", marco: "funciones del cargo según la normativa vigente, Plan Anual Local y PEI de los establecimientos involucrados" },
  { id: "visita", roles: ["slep"], curricular: false, nombre: "Pauta de visita o acompañamiento a establecimientos", rol: "asesor técnico-pedagógico de un Servicio Local de Educación Pública chileno", tarea: "diseña una pauta para visitar y acompañar a un establecimiento", formato: "propósito de la visita, preguntas orientadoras para el equipo directivo, aspectos a observar (sin juicios de valor ni datos personales), evidencias a revisar, espacio para acuerdos de apoyo con responsables y plazos, y una forma de seguimiento", marco: "Ley N° 21.040 (apoyo técnico-pedagógico), Marco para la Buena Dirección y el Liderazgo Escolar, Estándares Indicativos de Desempeño, PEI y PME del establecimiento" },
  { id: "procedimiento", roles: ["slep", "asistente", "directivo"], curricular: false, nombre: "Instructivo o procedimiento interno", rol: "especialista en procesos administrativos del sector público chileno", tarea: "redacta un instructivo paso a paso para el procedimiento que describo", formato: "objetivo, alcance, responsables por cargo, pasos numerados con plazos y documentos, puntos de control, preguntas frecuentes y un diagrama de flujo descrito en texto; marca como [REVISAR] lo que dependa de normativa que no conozcas", marco: "normativa vigente aplicable al procedimiento (Ley N° 19.880, Ley N° 21.040, Ley N° 21.719 si involucra datos personales)" },
  { id: "presentacion", roles: ["slep", "directivo"], curricular: false, nombre: "Presentación para equipos o comunidades", rol: "comunicador institucional del sector educativo público chileno", tarea: "propón el contenido de una presentación sobre el tema que indico", formato: "8 a 12 diapositivas con título, 3 a 5 ideas clave por diapositiva en frases breves, sugerencia de imagen o gráfico y notas para quien expone; un cierre con preguntas para el diálogo", marco: "Plan Estratégico Local, Plan Anual Local y PEI de los establecimientos" },
  /* ---- Todos ---- */
  { id: "comunicado", roles: ["docente", "directivo", "asistente", "slep"], curricular: false, nombre: "Comunicado a familias", rol: "especialista en comunicación institucional para comunidades escolares chilenas", tarea: "redacta un comunicado informativo", formato: "asunto, saludo, mensaje en frases cortas, qué deben hacer las familias, a quién dirigirse y despedida; máximo 200 palabras", marco: "Marco para la Buena Dirección y el Liderazgo Escolar («Gestionando la convivencia y la participación de la comunidad escolar»)" }
];

/* Niveles alineados con las Bases Curriculares vigentes */
const NIVELES = [
  { nombre: "Educación Parvularia", bases: "Bases Curriculares de Educación Parvularia", parvularia: true },
  { nombre: "1° a 6° básico", bases: "Bases Curriculares de 1° a 6° básico" },
  { nombre: "7° básico a 2° medio", bases: "Bases Curriculares de 7° básico a 2° medio" },
  { nombre: "3° y 4° medio", bases: "Bases Curriculares de 3° y 4° medio" },
  { nombre: "3° y 4° medio Técnico-Profesional", bases: "Bases Curriculares de la Formación Diferenciada Técnico-Profesional" },
  { nombre: "Educación de personas jóvenes y adultas", bases: "Bases Curriculares para la Educación de Personas Jóvenes y Adultas 2024" }
];

const ASIGNATURAS = {
  "Educación Parvularia": ["Identidad y Autonomía", "Convivencia y Ciudadanía", "Corporalidad y Movimiento", "Lenguaje Verbal", "Lenguajes Artísticos", "Exploración del Entorno Natural", "Comprensión del Entorno Sociocultural", "Pensamiento Matemático"],
  "1° a 6° básico": ["Lenguaje y Comunicación", "Matemática", "Ciencias Naturales", "Historia, Geografía y Cs. Sociales", "Inglés", "Artes Visuales", "Música", "Educación Física y Salud", "Tecnología", "Orientación"],
  "7° básico a 2° medio": ["Lengua y Literatura", "Matemática", "Ciencias Naturales", "Historia, Geografía y Cs. Sociales", "Inglés", "Artes Visuales", "Música", "Educación Física y Salud", "Tecnología", "Orientación"],
  "3° y 4° medio": ["Lengua y Literatura", "Matemática", "Educación Ciudadana", "Filosofía", "Inglés", "Ciencias para la Ciudadanía", "Historia (plan común electivo)", "Educación Física y Salud", "Artes"],
  "3° y 4° medio Técnico-Profesional": [],
  "Educación de personas jóvenes y adultas": []
};

const DESTINATARIOS = ["Docentes", "Familias y apoderados", "Estudiantes", "Equipo directivo", "Asistentes de la educación", "Consejo Escolar"];

/* Referencias locales SUGERIDAS para contextualizar material por comuna.
   Son puntos de partida: cada docente puede reemplazarlas por las del
   entorno real de su establecimiento. Edite o agregue según necesidad. */
const COMUNAS = {
  /* La realidad de cada comuna se describe por sus condiciones socioeconómicas, sociales y naturales
     (no por un solo hito geográfico). Son orientaciones generales: lo más pertinente es el contexto
     propio de cada establecimiento (PEI, PAL y lo que indique la persona). */
  "Concepción": {
    descripcion: "capital regional con realidades socioeconómicas diversas: barrios consolidados y sectores con mayor vulnerabilidad social, comercio, servicios, universidades y vida comunitaria; entorno natural de cerros, parques y lagunas urbanas",
    referencias: ["la vida de barrio y las organizaciones comunitarias (juntas de vecinos, clubes, centros culturales)", "el comercio local, las ferias libres y los oficios de las familias", "las universidades, bibliotecas y espacios culturales cercanos", "el transporte público y los trayectos diarios", "los cerros, parques y lagunas urbanas", "la diversidad de realidades socioeconómicas del sector"]
  },
  "Chiguayante": {
    descripcion: "comuna residencial del Gran Concepción con barrios de distinta realidad socioeconómica, historia industrial textil, fuerte vida comunitaria y un entorno natural de cerros y quebradas con bosque",
    referencias: ["la vida de barrio y las organizaciones comunitarias", "su historia industrial y los oficios de las familias", "el comercio local y las ferias", "los trayectos diarios y el trabajo fuera de la comuna", "los cerros, quebradas y senderos con bosque", "el cuidado del entorno natural y la prevención de incendios"]
  },
  "Florida": {
    descripcion: "comuna rural del secano interior, con población dispersa, agricultura familiar campesina y actividad forestal, distancias largas a los servicios y fuerte vida comunitaria",
    referencias: ["la agricultura familiar y las huertas", "la actividad forestal y el cuidado del bosque nativo", "los sectores rurales como Copiulemu", "las distancias, los caminos rurales y el transporte", "las ferias, productos locales y tradiciones campesinas", "la prevención de incendios forestales"]
  },
  "Hualqui": {
    descripcion: "comuna de origen histórico con un centro urbano pequeño y extensos sectores rurales, economía agrícola y forestal, realidades socioeconómicas diversas y tradiciones locales",
    referencias: ["los sectores rurales como Talcamávida y Quilacoya", "la agricultura, la actividad forestal y los oficios locales", "su historia colonial y patrimonio", "los trayectos y el transporte hacia el Gran Concepción", "la vida de pueblo, sus fiestas y tradiciones", "el cuidado del bosque y la prevención de incendios"]
  }
};

const ENTORNOS = ["Urbano", "Rural", "Mixto (urbano y rural)"];

const RECURSOS_AULA = [
  "Proyector e internet estable",
  "Internet intermitente",
  "Sin internet: solo impresión",
  "Computadores o tablets para estudiantes"
];
