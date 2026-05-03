export const CONTACT_HERO = {
  BADGE: 'Primer paso',
  TITLE: 'Cuéntanos qué necesitas',
  SUBTITLE: 'Describe tu problema o idea en unas líneas. Te respondemos en menos de 24 horas con una evaluación inicial y los siguientes pasos — sin compromiso ni costo.',
} as const;

export const CONTACT_FORM = {
  TITLE: 'Escríbenos',
  SUBTITLE: 'Mientras más detalle nos des sobre tu situación actual, mejor será nuestra propuesta inicial.',
  FIELDS: {
    NAME: 'Tu nombre',
    EMAIL: 'Correo electrónico',
    PHONE: 'Teléfono (opcional)',
    COMPANY: 'Nombre de tu empresa',
    MESSAGE: '¿Qué problema quieres resolver o qué sistema necesitas?',
  },
  SUBMIT: 'Enviar consulta',
} as const;

export const CONTACT_INFO = {
  BADGE: 'Contacto directo',
  TITLE: '¿Prefieres hablar directamente?',
  SUBTITLE: 'Si ya tienes claro lo que necesitas, agenda una llamada o escríbenos por el canal que prefieras.',
  ITEMS: [
    {
      title: 'Teléfono',
      description: 'Llamada directa para consultas rápidas o para agendar una reunión de diagnóstico.',
      value: '+123 456 7890',
      href: 'tel:+1234567890',
      accentColor: 'blue',
    },
    {
      title: 'Correo Electrónico',
      description: 'Ideal para enviarnos documentos, capturas o detalles técnicos de tu proyecto.',
      value: 'contacto@llajtasoft.com',
      href: 'mailto:contacto@llajtasoft.com',
      accentColor: 'purple',
    },
    {
      title: 'Oficina',
      description: 'Reuniones presenciales con previa coordinación para analizar tu proyecto en detalle.',
      value: 'Av. Ejemplo 123, Ciudad, País',
      href: null,
      accentColor: 'teal',
    },
  ],
} as const;

export const SOCIAL_MEDIA = {
  BADGE: 'También estamos en',
  TITLE: 'Redes y WhatsApp',
  SUBTITLE: 'Respuesta rápida por WhatsApp o síguenos para ver proyectos, tips técnicos y novedades.',
  WHATSAPP_TEXT: 'Escríbenos por WhatsApp — respondemos en minutos',
  WHATSAPP_HREF: 'https://wa.me/+1234567890',
  NETWORKS: [
    { name: 'LinkedIn', href: 'https://www.linkedin.com', accentColor: 'blue' },
    { name: 'Twitter', href: 'https://twitter.com', accentColor: 'blue' },
    { name: 'Instagram', href: 'https://instagram.com', accentColor: 'purple' },
  ],
} as const;

export const FAQ = {
  BADGE: 'Antes de contactarnos',
  TITLE: 'Preguntas frecuentes',
  SUBTITLE: 'Respuestas directas a lo que nuestros clientes preguntan antes de iniciar un proyecto.',
  ITEMS: [
    {
      question: '¿Cuánto tiempo toma desarrollar un proyecto?',
      answer: 'Depende del alcance. Una landing page o app simple: 2-4 semanas. Un sistema ERP o e-commerce completo: 2-4 meses. En la primera reunión definimos un cronograma realista con entregas parciales cada 2 semanas para que veas avance desde el inicio.',
    },
    {
      question: '¿Cuánto cuesta?',
      answer: 'Trabajamos con presupuesto cerrado (sabes el total antes de empezar) o por sprints mensuales para proyectos continuos. Una landing page parte desde $500 USD, una app móvil desde $3,000 USD y un ERP web desde $5,000 USD. Te damos un estimado real después de la primera consulta.',
    },
    {
      question: '¿Se integra con lo que ya tengo?',
      answer: 'Sí, es lo que mejor hacemos. Conectamos tu nuevo software con sistemas de facturación, hojas de cálculo, ERPs existentes, APIs de terceros o bases de datos que ya uses. No necesitas migrar todo desde cero.',
    },
    {
      question: '¿Qué pasa después de la entrega?',
      answer: 'Incluimos 30 días de soporte gratuito para ajustes. Después, ofrecemos planes de mantenimiento mensual que cubren correcciones, actualizaciones y nuevas funcionalidades a medida que tu negocio evoluciona.',
    },
  ],
} as const;

export const CONTACTO_CTA = {
  TITLE_PREFIX: '30 minutos que pueden cambiar tu',
  TITLE_HIGHLIGHT: 'operación',
  SUBTITLE: 'Agenda una consulta gratuita. Analizamos tu caso, te decimos si podemos ayudarte y te damos un estimado de inversión. Sin letra pequeña.',
  CTA_BUTTON: 'Agendar consulta gratuita',
  CTA_HREF: '#formulario',
} as const;
