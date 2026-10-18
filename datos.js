/* Datos iniciales del establecimiento.
   Todo esto se puede cambiar desde el Panel de administración (admin.html):
   lo que se guarde en el panel reemplaza estos valores. */
window.DATOS_BASE = {
  info: {
    nombre: "Colegio Marina de Chile",
    rbd: "4531-4",
    dependencia: "Servicio Local de Educación Pública Andalién Sur (SLEP)",
    tipo: "Científico-Humanista",
    niveles: "Educación Parvularia (Pre Kínder) a 4° Medio",
    direccion: "Marina de Chile 2836, Lorenzo Arenas, Concepción, Región del Biobío",
    jornada: "Jornada Escolar Tradicional (sin JEC), régimen diurno",
    programas: "PIE, Equipo Psicosocial, JUNAEB, Habilidades para la Vida I y II",
    sitio: "",
    otros: "Colegio inclusivo con foco en la formación integral, comprometido con los ajustes necesarios para responder a la diversidad, incluyendo estudiantes del espectro autista (Ley 21.545)."
  },
  pei: {
    mision: "Somos una comunidad educativa de carácter científico-humanista, comprometida en el respeto por el medioambiente, el entorno social y los procesos formativos de nuestros/as estudiantes. Nuestro propósito es educar a personas para el siglo XXI bajo un enfoque humanista y los sellos de nuestro colegio, otorgándoles herramientas que les permitan adaptarse a las diversas necesidades de la comunidad y liderar la sociedad del futuro.",
    vision: "Como comunidad, buscamos ser reconocidos como una institución formadora de personas para el siglo XXI, bajo un sistema educativo con enfoque humanista que les permita: cultivar la autonomía, el respeto del medioambiente y el entorno social, desarrollar habilidades de orden superior, participar activamente de procesos educativos, artísticos y deportivos, favoreciendo la continuidad de estudios superiores.",
    sellos: "1) Formación de personas para la continuidad de estudios superiores. 2) Desarrollo de la autonomía, compromiso y constancia con los procesos educativos. 3) Formación de personas solidarias y responsables en aspectos sociales y medioambientales. 4) Desarrollo de aprendizajes deportivos y artísticos.",
    valores: "Respeto, Responsabilidad y Empatía (enfoque pedagógico humanista).",
    historia: "",
    fuente: "Reglamento Interno Escolar 2025, Artículos 4 a 6 (pp. 7-10). El PEI completo puede cargarse desde el Panel."
  },
  roles: ["Docente", "Equipo directivo y de gestión", "Asistente de la educación"],
  cargos: [
    { rol: "Docente", cargo: "Profesor/a jefe", funciones: "Acompaña y orienta a su curso; coordina con apoderados (entrevistas y reuniones); registra y monitorea asistencia, rendimiento y convivencia; participa en consejos de evaluación y en el análisis de promoción (informe con UTP); deriva casos a Convivencia, Orientación o PIE según los protocolos." },
    { rol: "Docente", cargo: "Profesor/a de asignatura", funciones: "Planifica, enseña y evalúa según las Bases Curriculares y el Reglamento de Evaluación 2026 (calendarización con 10 días hábiles, retroalimentación, registro de notas en 10 días hábiles); aplica adecuaciones PAI/PACI con apoyo PIE; resguarda el clima de aula y aplica el Manual de Convivencia." },
    { rol: "Docente", cargo: "Educador/a diferencial (PIE)", funciones: "Evalúa y apoya a estudiantes con NEE; co-enseña con docentes de aula; diseña adecuaciones curriculares (PAI/PACI) junto a UTP y Coordinación PIE; participa en planes de acompañamiento (PAEC) y en protocolos de desregulación emocional y conductual." },
    { rol: "Docente", cargo: "Educador/a de párvulos", funciones: "Planifica y evalúa según las Bases Curriculares de Educación Parvularia (conceptos LP, EP, EI, NE); acompaña a familias; resguarda el bienestar integral de niños y niñas y aplica los protocolos del nivel." },
    { rol: "Equipo directivo y de gestión", cargo: "Director/a", funciones: "Conduce el PEI y la gestión del establecimiento; resuelve situaciones no previstas en los reglamentos junto a UTP; autoriza cierres anticipados y promociones excepcionales por asistencia mediante resolución interna; aplica medidas como expulsión o cancelación de matrícula con debido proceso; se coordina con el SLEP Andalién Sur." },
    { rol: "Equipo directivo y de gestión", cargo: "Jefe/a de UTP", funciones: "Lidera la gestión curricular y evaluativa; supervisa la aplicación del Reglamento de Evaluación 2026 (calendarios, reevaluaciones, adecuaciones, planes especiales, evaluaciones pendientes); acompaña a docentes; elabora informes de promoción y coordina consejos de evaluación." },
    { rol: "Equipo directivo y de gestión", cargo: "Inspector/a general", funciones: "Resguarda la disciplina, asistencia, puntualidad y seguridad escolar; define los mecanismos de justificación de inasistencias; aplica el Manual de Convivencia y medidas disciplinarias según la gradualidad de faltas; coordina el PISE junto al equipo de seguridad." },
    { rol: "Equipo directivo y de gestión", cargo: "Encargado/a de convivencia escolar", funciones: "Coordina el Plan de Gestión de Convivencia; activa y conduce los protocolos de actuación (maltrato, acoso, vulneración de derechos, etc.); realiza investigaciones con debido proceso; promueve medidas formativas, reparatorias y de resolución pacífica de conflictos." },
    { rol: "Equipo directivo y de gestión", cargo: "Orientador/a", funciones: "Diseña y acompaña el plan de orientación vocacional y socioemocional; apoya a profesores jefes; participa en derivaciones y en el acompañamiento de estudiantes con situaciones especiales." },
    { rol: "Equipo directivo y de gestión", cargo: "Coordinador/a PIE", funciones: "Coordina el Programa de Integración Escolar (Decreto 170); organiza evaluaciones y apoyos a estudiantes con NEE; define junto a UTP las adecuaciones curriculares significativas (PAI/PACI); articula con familias y especialistas." },
    { rol: "Asistente de la educación", cargo: "Inspector/a de patio", funciones: "Supervisa recreos, ingreso y salida; previene y reporta situaciones de convivencia o accidentes; registra atrasos e inasistencias; apoya la aplicación de los protocolos informando de inmediato a Inspectoría general o Convivencia." },
    { rol: "Asistente de la educación", cargo: "Psicólogo/a", funciones: "Evalúa y acompaña a estudiantes en lo socioemocional; participa en protocolos (desregulación, ideación suicida, vulneración de derechos); realiza derivaciones a redes externas; apoya a docentes y familias." },
    { rol: "Asistente de la educación", cargo: "Trabajador/a social", funciones: "Atiende situaciones socioeconómicas y familiares; realiza visitas y derivaciones a redes (OPD, salud, tribunales cuando corresponde); apoya protocolos de vulneración de derechos y de retención escolar." },
    { rol: "Asistente de la educación", cargo: "Asistente de aula / Técnico/a", funciones: "Apoya el trabajo pedagógico en aula y el resguardo de los estudiantes; colabora con docentes y educadoras; informa situaciones de convivencia o salud al adulto responsable." },
    { rol: "Asistente de la educación", cargo: "Fonoaudiólogo/a o Psicopedagogo/a", funciones: "Evalúa e interviene en apoyos específicos del PIE; colabora en adecuaciones y en el seguimiento de PAI/PACI; orienta a docentes y familias." },
    { rol: "Asistente de la educación", cargo: "Administrativo/a o Secretaría", funciones: "Atiende público y apoderados; gestiona documentación (certificados, solicitudes, formularios de cierre anticipado); resguarda la confidencialidad de la información de la comunidad." },
    { rol: "Asistente de la educación", cargo: "Auxiliar de servicios", funciones: "Mantiene espacios limpios y seguros; colabora en el PISE y en emergencias; informa a Inspectoría situaciones de riesgo o de convivencia." },
    { rol: "Asistente de la educación", cargo: "Encargado/a CRA (biblioteca)", funciones: "Gestiona el Centro de Recursos para el Aprendizaje; fomenta la lectura; apoya a docentes con recursos y préstamos." }
  ],
  /* Normativa con enlaces verificados en la Biblioteca del Congreso Nacional (BCN) */
  normativa: [
    { titulo: "Ley 20.370 – Ley General de Educación", url: "https://www.bcn.cl/leychile/navegar?idLey=20370", categoria: "Leyes generales", claves: "lge ley general educacion derechos deberes reglamento interno celular celulares dispositivos moviles embarazo maternidad matricula" },
    { titulo: "Ley 21.040 – Sistema de Educación Pública (SLEP)", url: "https://www.bcn.cl/leychile/navegar?idLey=21040", categoria: "Leyes generales", claves: "slep servicio local educacion publica nep" },
    { titulo: "Ley 20.529 – Sistema de Aseguramiento de la Calidad", url: "https://www.bcn.cl/leychile/navegar?idLey=20529", categoria: "Leyes generales", claves: "calidad superintendencia agencia sac" },
    { titulo: "Ley 20.536 – Sobre Violencia Escolar", url: "https://www.bcn.cl/leychile/navegar?idLey=20536", categoria: "Convivencia escolar", claves: "violencia escolar acoso bullying maltrato convivencia encargado" },
    { titulo: "Ley 21.128 – Aula Segura", url: "https://www.bcn.cl/leychile/navegar?idLey=21128", categoria: "Convivencia escolar", claves: "aula segura expulsion cancelacion matricula suspension armas agresion" },
    { titulo: "Ley 21.430 – Garantías y Protección Integral de la Niñez", url: "https://www.bcn.cl/leychile/navegar?idLey=21430", categoria: "Convivencia escolar", claves: "niñez derechos vulneracion proteccion infancia" },
    { titulo: "Ley 20.609 – Medidas contra la Discriminación", url: "https://www.bcn.cl/leychile/navegar?idLey=20609", categoria: "Inclusión y diversidad", claves: "discriminacion arbitraria" },
    { titulo: "Ley 20.845 – Inclusión Escolar", url: "https://www.bcn.cl/leychile/navegar?idLey=20845", categoria: "Inclusión y diversidad", claves: "inclusion admision sae discriminacion" },
    { titulo: "Ley 21.545 – Ley TEA (Espectro Autista)", url: "https://www.bcn.cl/leychile/navegar?idLey=21545", categoria: "Inclusión y diversidad", claves: "tea autismo autista desregulacion neurodivergente" },
    { titulo: "Ley 21.120 – Identidad de Género", url: "https://www.bcn.cl/leychile/navegar?idLey=21120", categoria: "Inclusión y diversidad", claves: "identidad genero trans nombre social" },
    { titulo: "Decreto 67/2018 – Evaluación, Calificación y Promoción", url: "https://www.bcn.cl/leychile/navegar?idNorma=1127255", categoria: "Evaluación y currículum", claves: "evaluacion calificacion promocion repitencia notas decreto 67" },
    { titulo: "Decreto 170/2009 – Estudiantes con NEE (PIE)", url: "https://www.bcn.cl/leychile/navegar?idNorma=1012570", categoria: "Evaluación y currículum", claves: "nee pie integracion necesidades educativas especiales decreto 170" },
    { titulo: "Ley 20.248 – Subvención Escolar Preferencial (SEP)", url: "https://www.bcn.cl/leychile/navegar?idLey=20248", categoria: "Evaluación y currículum", claves: "sep subvencion preferencial pme prioritarios" },
    { titulo: "Ley 19.070 – Estatuto de los Profesionales de la Educación", url: "https://www.bcn.cl/leychile/navegar?idLey=19070", categoria: "Funcionarios", claves: "estatuto docente profesores derechos funciones" },
    { titulo: "Ley 20.903 – Sistema de Desarrollo Profesional Docente", url: "https://www.bcn.cl/leychile/navegar?idLey=20903", categoria: "Funcionarios", claves: "carrera docente desarrollo profesional mentoria" },
    { titulo: "Ley 21.109 – Estatuto de Asistentes de la Educación Pública", url: "https://www.bcn.cl/leychile/navegar?idLey=21109", categoria: "Funcionarios", claves: "asistentes educacion estatuto funciones" },
    { titulo: "Ley 21.643 – Ley Karin (acoso laboral y sexual)", url: "https://www.bcn.cl/leychile/navegar?idLey=21643", categoria: "Funcionarios", claves: "karin acoso laboral sexual violencia trabajo funcionarios" },
    { titulo: "Código Procesal Penal – Obligación de denunciar (arts. 175 a 177)", url: "https://www.bcn.cl/leychile/navegar?idLey=19696", categoria: "Responsabilidad penal y civil", claves: "denuncia denunciar obligacion fiscalia carabineros pdi 24 horas delito" },
    { titulo: "Código Penal", url: "https://www.bcn.cl/leychile/navegar?idNorma=1984", categoria: "Responsabilidad penal y civil", claves: "delito lesiones amenazas abuso sexual robo hurto danos imagenes intimas acoso" },
    { titulo: "Ley 20.084 – Responsabilidad Penal Adolescente", url: "https://www.bcn.cl/leychile/navegar?idLey=20084", categoria: "Responsabilidad penal y civil", claves: "responsabilidad penal adolescente 14 18 anos menor edad" },
    { titulo: "Código Civil – Responsabilidad por hechos de otros (arts. 2319 a 2321)", url: "https://www.bcn.cl/leychile/navegar?idNorma=172986", categoria: "Responsabilidad penal y civil", claves: "responsabilidad civil dano indemnizacion padres colegio cuidado" },
    { titulo: "Ley 19.968 – Tribunales de Familia", url: "https://www.bcn.cl/leychile/navegar?idLey=19968", categoria: "Responsabilidad penal y civil", claves: "tribunal familia proteccion medida menor 14 vulneracion" },
    { titulo: "Ley 20.000 – Tráfico de Estupefacientes (drogas)", url: "https://www.bcn.cl/leychile/navegar?idLey=20000", categoria: "Responsabilidad penal y civil", claves: "droga drogas marihuana trafico microtrafico consumo estupefacientes" },
    { titulo: "Ley 17.798 – Control de Armas", url: "https://www.bcn.cl/leychile/navegar?idLey=17798", categoria: "Responsabilidad penal y civil", claves: "arma armas cuchillo pistola porte fuego" },
    { titulo: "Ley 21.719 – Protección de Datos Personales", url: "https://www.bcn.cl/leychile/navegar?idLey=21719", categoria: "Datos personales", claves: "datos personales privacidad proteccion confidencialidad" }
  ],
  /* Sitios oficiales (verificados) para "Fuentes externas sugeridas" */
  fuentes: [
    { titulo: "Ministerio de Educación (Mineduc)", url: "https://www.mineduc.cl/", claves: "mineduc ministerio orientaciones" },
    { titulo: "Convivencia para la Ciudadanía – Mineduc", url: "https://convivenciaparaciudadania.mineduc.cl/", claves: "convivencia violencia acoso bullying protocolo clima buen trato conflicto" },
    { titulo: "Educación Especial – Mineduc", url: "https://especial.mineduc.cl/", claves: "pie nee tea inclusion diversificacion adecuaciones decreto 83 170 autismo" },
    { titulo: "Currículum Nacional", url: "https://www.curriculumnacional.cl/", claves: "curriculum bases curriculares objetivos aprendizaje planificacion evaluacion asignatura oa material guia" },
    { titulo: "CPEIP – Marco para la Buena Enseñanza", url: "https://www.cpeip.cl/marco-buena-ensenanza/", claves: "docente desarrollo profesional practica buena enseñanza mbe" },
    { titulo: "Superintendencia de Educación – Normativa", url: "https://www.supereduc.cl/normativa/", claves: "superintendencia circular normativa reglamento interno denuncia fiscalizacion" },
    { titulo: "Agencia de Calidad de la Educación", url: "https://www.agenciaeducacion.cl/", claves: "agencia calidad simce dia resultados indicadores" },
    { titulo: "Dirección de Educación Pública", url: "https://educacionpublica.gob.cl/", claves: "slep educacion publica" },
    { titulo: "UNESCO – Educación", url: "https://www.unesco.org/es", claves: "unesco inclusion internacional" }
  ]
};
