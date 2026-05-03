export const HERO = {
  TAGLINE: 'Automatización e integración para PYMEs que ya están operando.',
  TITLE_PREFIX: 'Automatizamos procesos manuales e integramos los sistemas que tu empresa',
  TITLE_HIGHLIGHT: 'ya usa',
  SUBTITLE:
    'Conectamos Excel, WhatsApp, facturación, POS, inventario y sistemas existentes para que tu operación sea más rápida, ordenada y con menos errores.',
  CTA_BUTTON: 'Agendar diagnóstico gratuito',
  CTA_HREF: '/contacto',
  SECONDARY_CTA_BUTTON: 'Escribir por WhatsApp',
  SECONDARY_CTA_HREF:
    'https://wa.me/59170000000?text=Hola%2C%20quiero%20automatizar%20procesos%20en%20mi%20empresa.%20Actualmente%20usamos%20Excel%2FWhatsApp%2Ffacturaci%C3%B3n%2FPOS%20y%20quiero%20saber%20qu%C3%A9%20se%20puede%20integrar.',
  MICROCOPY: 'En 30 minutos revisamos tu proceso actual y te decimos qué se puede automatizar.',
} as const;

export const PAINS = {
  TITLE: '¿Tu empresa todavía trabaja así?',
  SUBTITLE:
    'Si tus procesos dependen de copias manuales, mensajes sueltos o reportes armados a mano, no necesitas cambiar todo: necesitas integrar y automatizar bien.',
  ITEMS: [
    'Pedidos por WhatsApp que luego alguien copia a Excel.',
    'Inventario que no coincide entre tienda, almacén y sistema.',
    'Reportes que se arman manualmente cada semana.',
    'Facturación, ventas y stock sin conexión.',
    'Errores por depender de tareas repetitivas.',
    'Clientes, pedidos o cobranzas sin seguimiento claro.',
  ],
  CLOSING: 'Ordenamos esos flujos para que tu equipo trabaje con menos fricción y más control.',
} as const;

export const BENEFITS = {
  TITLE: 'Tu negocio ya funciona. Nosotros lo potenciamos.',
  SUBTITLE: 'No reemplazamos lo que tienes: lo conectamos, automatizamos y escalamos con software que se integra a tus procesos actuales.',
  ITEMS: [
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/2654/2654594.png',
      title: 'Se integra a lo que ya usas',
      description: 'Conectamos tu nuevo software con tus herramientas actuales: Excel, ERPs, bases de datos o APIs de terceros.',
      alt: 'Integración de sistemas',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/8439/8439018.png',
      title: 'Datos claros para decidir mejor',
      description: 'Dashboards y reportes en tiempo real que convierten datos dispersos en decisiones concretas.',
      alt: 'Toma de decisiones basada en datos',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/858/858699.png',
      title: 'Crece sin cambiar de sistema',
      description: 'Arquitectura modular: agregas funcionalidades cuando las necesitas, sin reconstruir desde cero.',
      alt: 'Escalabilidad modular',
    },
  ],
} as const;

export const SERVICES = {
  BADGE: 'Servicios enfocados en operación real',
  TITLE: 'Qué podemos automatizar e integrar',
  SUBTITLE: 'No empezamos vendiéndote una app. Primero entendemos cómo trabaja tu empresa y luego diseñamos una solución por etapas, conectada a tus herramientas actuales.',
  ITEMS: [
    {
      title: 'Automatización de procesos manuales',
      description: 'Convertimos tareas repetitivas en flujos automáticos para que tu equipo deje de copiar datos, perseguir reportes o depender de mensajes sueltos.',
      features: [
        'Pedidos, aprobaciones y reportes automáticos',
        'Alertas de stock, cobranza o seguimiento',
        'Flujos para ventas, administración y operaciones',
        'Menos errores por carga manual de información',
      ],
      technologies: 'Web apps, APIs, bases de datos, automatizaciones internas',
      image: 'https://i.pinimg.com/736x/a6/a9/8f/a6a98f41a9ff5c7243bb2b3dc8582d65.jpg',
      iconType: 'web' as const,
      accentColor: 'blue',
      imageOrder: 'right' as const,
    },
    {
      title: 'Integración de sistemas existentes',
      description: 'Conectamos las herramientas que ya usas para que la información no tenga que copiarse manualmente de un sistema a otro.',
      features: [
        'Excel, POS, facturación, inventario y CRMs',
        'Conexión con WhatsApp, APIs y bases de datos',
        'Sincronización entre sucursales o áreas',
        'Migración progresiva sin parar la operación',
      ],
      technologies: 'APIs REST, integraciones, conectores, PostgreSQL, SQLite',
      image: 'https://i.pinimg.com/736x/db/3b/d5/db3bd50218eeeb1173b353effe1773b7.jpg',
      iconType: 'desktop' as const,
      accentColor: 'purple',
      imageOrder: 'left' as const,
    },
    {
      title: 'Sistemas a medida para operar mejor',
      description: 'Creamos sistemas web, móviles o de escritorio para controlar ventas, stock, rutas, clientes, entregas y administración desde un flujo claro.',
      features: [
        'Paneles de control para dueños y gerentes',
        'Apps para vendedores, repartidores o técnicos',
        'Trabajo offline con sincronización automática',
        'Dashboards y reportes para decidir mejor',
      ],
      technologies: 'React, Astro, Flutter, Node.js, Laravel, PostgreSQL',
      image: 'https://i.pinimg.com/736x/d5/a9/64/d5a9646669127ebe7f7a5e40e024142c.jpg',
      iconType: 'mobile' as const,
      accentColor: 'teal',
      imageOrder: 'right' as const,
    },
  ],
} as const;

export const PROJECTS = {
  TITLE_PREFIX: 'Casos',
  TITLE_HIGHLIGHT: 'reales',
  SUBTITLE: 'Problemas concretos que resolvimos. Resultados medibles que nuestros clientes pueden verificar.',
  ITEMS: [
    {
      title: 'Sistema de Gestión Comercial',
      description: 'ERP web que unificó ventas, inventario y contabilidad para una distribuidora con 3 sucursales. Redujo errores de stock en un 60%.',
      image: 'https://i.pinimg.com/736x/37/fb/40/37fb409eb1477ada81dcc1e2780fbbc0.jpg',
      link: '/portafolio',
      linkText: 'Ver detalles',
    },
    {
      title: 'Tienda Online con Delivery',
      description: 'E-commerce con gestión de pedidos, pagos QR y seguimiento de envíos en tiempo real para una cadena de retail local.',
      image: 'https://i.pinimg.com/736x/37/fb/40/37fb409eb1477ada81dcc1e2780fbbc0.jpg',
      link: '/portafolio',
      linkText: 'Ver detalles',
    },
    {
      title: 'App de Control de Rutas',
      description: 'Aplicación móvil para supervisar repartidores en campo con GPS, fotos de entrega y reportes automáticos al sistema central.',
      image: 'https://i.pinimg.com/736x/37/fb/40/37fb409eb1477ada81dcc1e2780fbbc0.jpg',
      link: '/portafolio',
      linkText: 'Ver detalles',
    },
  ],
} as const;

export const WHY_US = {
  TITLE_PREFIX: '¿Por qué',
  TITLE_HIGHLIGHT: 'Llajtasoft',
  SUBTITLE: 'No somos una fábrica de código. Somos un equipo que entiende tu operación antes de escribir la primera línea.',
  CTA: 'Conoce nuestros servicios',
  CTA_HREF: '/servicios',
  ITEMS: [
    {
      icon: 'gear' as const,
      title: 'Nos integramos a lo tuyo',
      description: 'Conectamos el nuevo software con tus **sistemas actuales**: ERPs, hojas de cálculo, APIs o bases de datos existentes.',
      stats: { years: '5+ años', projects: '80+ proyectos' },
    },
    {
      icon: 'lightbulb' as const,
      title: 'Entregamos en semanas, no meses',
      description: 'Sprints de **2 semanas** con demos funcionales. Ves avance real desde el primer ciclo.',
      highlight: '2 semanas',
    },
    {
      icon: 'bolt' as const,
      title: 'Soporte que no desaparece',
      description: 'Después de la entrega seguimos contigo: correcciones, mejoras y soporte técnico **sin letra pequeña**.',
      highlight: 'sin letra pequeña',
    },
  ],
} as const;

export const TESTIMONIALS = {
  TITLE_PREFIX: 'Empresas que ya',
  TITLE_HIGHLIGHT: 'confían en nosotros',
  ITEMS: [
    {
      initials: 'MR',
      name: 'Mario Ríos',
      role: 'Gerente General — Distribuidora Ríos',
      quote: 'Necesitábamos un sistema que se conectara con nuestra facturación y stock sin parar la operación.',
      highlight: 'Llajtasoft lo logró en 6 semanas',
      quoteSuffix: ', sin que perdiéramos un solo día de ventas.',
      rating: 5,
      accentColor: 'pink-500',
    },
    {
      initials: 'LC',
      name: 'Laura Cárdenas',
      role: 'Fundadora — TiendaVerde.bo',
      quote: 'Pasamos de gestionar pedidos por WhatsApp a tener',
      highlight: 'una tienda online con delivery integrado',
      quoteSuffix: '. Las ventas crecieron un 40% el primer trimestre.',
      rating: 5,
      accentColor: 'blue-800',
    },
  ],
} as const;

export const CTA = {
  TITLE_PREFIX: 'Cuéntanos qué proceso quieres automatizar.',
  TITLE_HIGHLIGHT: 'Te diremos por dónde empezar.',
  SUBTITLE: 'Agenda una consulta gratuita de 30 minutos. Revisamos cómo trabajas hoy y te damos una idea clara de qué se puede integrar, automatizar y mejorar.',
  CTA_BUTTON: 'Agendar diagnóstico gratuito',
  CTA_HREF: '/contacto',
  STATS: [
    { value: '80+', label: 'Proyectos entregados' },
    { value: '2 sem', label: 'Primer demo funcional' },
    { value: '24/7', label: 'Soporte post-entrega' },
  ],
} as const;
