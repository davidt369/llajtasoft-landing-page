export const ABOUT_HERO = {
  BADGE: 'Quiénes somos',
  TITLE: 'Software que entiende tu negocio',
  PARAGRAPHS: [
    'Somos un equipo de ingenieros y diseñadores que construye software a medida para empresas que necesitan soluciones reales — no plantillas genéricas. Trabajamos con web, móvil y escritorio.',
    'Antes de escribir código, entendemos cómo opera tu negocio. Así creamos herramientas que tu equipo realmente usa y que se integran con lo que ya tienes funcionando.',
  ],
} as const;

export const MISSION_VISION = {
  MISSION: {
    TITLE: 'Lo que hacemos',
    DESCRIPTION: 'Diseñamos software que se adapta a la forma en que tu empresa ya trabaja. Conectamos sistemas, automatizamos tareas repetitivas y te damos visibilidad sobre tu operación con datos en tiempo real.',
  },
  VISION: {
    TITLE: 'Hacia dónde vamos',
    DESCRIPTION: 'Queremos ser el socio tecnológico de referencia para empresas en crecimiento. Un equipo al que llamas cuando necesitas que la tecnología resuelva un problema de negocio concreto, no cuando necesitas más complejidad.',
  },
} as const;

export const VALUES = {
  BADGE: 'Cómo trabajamos',
  TITLE: 'Nuestros principios',
  ITEMS: [
    {
      title: 'Primero entender, después construir',
      description: 'No empezamos a desarrollar hasta que entendemos tu operación, tus cuellos de botella y tus prioridades reales.',
      accentColor: 'blue',
    },
    {
      title: 'Software que se adapta a ti',
      description: 'No pedimos que cambies tus procesos. Diseñamos herramientas que encajan en tu flujo de trabajo actual y se conectan con tus sistemas existentes.',
      accentColor: 'purple',
    },
    {
      title: 'Resultados medibles',
      description: 'Cada proyecto tiene métricas claras: tiempo ahorrado, errores reducidos, ventas incrementadas. Si no se puede medir, lo ajustamos hasta que funcione.',
      accentColor: 'teal',
    },
  ],
} as const;

export const TEAM = {
  BADGE: 'El equipo detrás',
  TITLE: 'Quién construye tu software',
  SUBTITLE: 'Profesionales con experiencia en proyectos reales para empresas que necesitan soluciones funcionales, no demos.',
  MEMBERS: [
    { name: 'Celso Franciscano', role: 'CEO', image: './team/celso.jpg' },
    { name: 'Oscar Flores', role: 'CPO', image: './team/celso.jpg' },
    { name: 'David Tola', role: 'CTO', image: './team/celso.jpg' },
    { name: 'Jose Vargas', role: 'QA', image: './team/celso.jpg' },
    { name: 'Andres Rocha', role: 'CMO', image: './team/celso.jpg' },
  ],
} as const;

export const WHY_CHOOSE_US = {
  BADGE: 'Lo que nos diferencia',
  TITLE: '¿Por qué trabajar con nosotros?',
  SUBTITLE: 'Tres razones concretas que nuestros clientes mencionan después de trabajar con Llajtasoft.',
  CTA_TEXT: 'Agenda una consulta',
  CTA_HREF: '/contacto',
  ITEMS: [
    {
      title: 'Integración sin fricciones',
      description: 'Tu nuevo software se conecta con lo que ya usas: facturación electrónica, ERPs, hojas de cálculo, APIs de terceros. Sin migrar todo desde cero.',
      accentColor: 'blue',
    },
    {
      title: 'Entregas cada 2 semanas',
      description: 'Demos funcionales cada sprint. Ves el avance, pruebas con tu equipo y ajustamos en el camino. Sin sorpresas al final del proyecto.',
      accentColor: 'purple',
    },
    {
      title: 'Soporte real post-entrega',
      description: 'No desaparecemos después de entregar. Correcciones, nuevas funcionalidades y soporte técnico continuo mientras tu negocio evoluciona.',
      accentColor: 'teal',
    },
  ],
} as const;

export const NOSOTROS_CTA = {
  TITLE_PREFIX: '¿Tienes un problema que el software puede',
  TITLE_HIGHLIGHT: 'resolver',
  SUBTITLE: 'Cuéntanos qué proceso quieres mejorar. En 30 minutos te decimos si podemos ayudarte, cómo lo haríamos y cuánto costaría. Sin compromiso.',
  CTA_BUTTON: 'Agendar consulta gratuita',
  CTA_HREF: '/contacto',
} as const;
