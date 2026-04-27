export const HERO = {
  TAGLINE: 'Impulsa tu negocio con tecnología.',
  TITLE_PREFIX: 'Acelera el crecimiento de tu empresa con',
  TITLE_HIGHLIGHT: 'software',
  CTA_BUTTON: 'Contactanos',
} as const;

export const BENEFITS = {
  TITLE: 'Acelera el Crecimiento de tu Empresa con Software',
  SUBTITLE: 'El software a medida transforma tu negocio, optimiza procesos y acelera su crecimiento.',
  ITEMS: [
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/2654/2654594.png',
      title: 'Optimiza tus Procesos',
      description: 'Automatiza tareas y enfócate en lo que impulsa tu empresa.',
      alt: 'Optimización de procesos',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/8439/8439018.png',
      title: 'Decisiones Inteligentes',
      description: 'Accede a datos en tiempo real para decisiones efectivas.',
      alt: 'Toma de decisiones',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/858/858699.png',
      title: 'Escalabilidad sin Límites',
      description: 'A medida que creces, el software se adapta a tus necesidades.',
      alt: 'Escalabilidad',
    },
  ],
} as const;

export const SERVICES = {
  BADGE: 'Servicios Profesionales',
  TITLE: 'Nuestros Servicios',
  SUBTITLE: 'Ofrecemos soluciones a medida para empresas de todos los tamaños. Desde aplicaciones móviles hasta software de escritorio, podemos ayudarte a transformar tu negocio.',
  ITEMS: [
    {
      title: 'Desarrollo Web',
      description: 'Diseñamos y desarrollamos sitios web personalizados, rápidos, responsivos y adaptados a las necesidades de tu negocio, asegurando una excelente experiencia de usuario en cualquier dispositivo.',
      features: [
        'Diseño web responsivo',
        'Desarrollo de sitios estáticos y dinámicos',
        'Integración con eCommerce y CMS',
        'SEO y optimización para motores de búsqueda',
      ],
      technologies: 'HTML5, CSS3, JavaScript, React, Next.js, Laravel, Node.js, MongoDB',
      image: 'https://i.pinimg.com/736x/a6/a9/8f/a6a98f41a9ff5c7243bb2b3dc8582d65.jpg',
      iconType: 'web' as const,
      accentColor: 'blue',
      imageOrder: 'right' as const,
    },
    {
      title: 'Desarrollo de Escritorio',
      description: 'Creamos aplicaciones de escritorio robustas y escalables para empresas que requieren soluciones personalizadas y de alto rendimiento para procesos internos.',
      features: [
        'Desarrollo de software para Windows, macOS y Linux',
        'Integración de bases de datos locales y remotas',
        'Interfaz gráfica de usuario amigable y fácil de usar',
        'Automatización de procesos y flujos de trabajo',
      ],
      technologies: 'Electron.js, SQLite, PostgreSQL',
      image: 'https://i.pinimg.com/736x/db/3b/d5/db3bd50218eeeb1173b353effe1773b7.jpg',
      iconType: 'desktop' as const,
      accentColor: 'purple',
      imageOrder: 'left' as const,
    },
    {
      title: 'Desarrollo Móvil',
      description: 'Creamos aplicaciones móviles personalizadas para Android e iOS, optimizadas para ofrecer una experiencia excepcional a los usuarios. Ya sea que necesites una app sencilla o un sistema más complejo, tenemos la solución ideal.',
      features: [
        'Desarrollo nativo para Android e iOS',
        'Integración con APIs y servicios en la nube',
        'Optimización de rendimiento y UX/UI',
        'Soporte para dispositivos móviles, tablets y wearables',
      ],
      technologies: 'Flutter, React Native, Swift, Kotlin, Firebase, API REST',
      image: 'https://i.pinimg.com/736x/d5/a9/64/d5a9646669127ebe7f7a5e40e024142c.jpg',
      iconType: 'mobile' as const,
      accentColor: 'teal',
      imageOrder: 'right' as const,
    },
  ],
} as const;

export const PROJECTS = {
  TITLE_PREFIX: 'Nuestros',
  TITLE_HIGHLIGHT: 'Proyectos',
  SUBTITLE: 'Descubre cómo transformamos ideas en realidades digitales que impulsan el crecimiento de tu negocio.',
  ITEMS: [
    {
      title: 'Proyecto Vanguardista',
      description: 'Una solución innovadora que redefinió la experiencia del usuario y mejoró la eficiencia operativa.',
      image: 'https://i.pinimg.com/736x/37/fb/40/37fb409eb1477ada81dcc1e2780fbbc0.jpg',
      link: '#',
      linkText: 'Conoce más',
    },
    {
      title: 'Revolución E-commerce',
      description: 'Plataforma de comercio electrónico que elevó la conversión y revolucionó la experiencia de compra.',
      image: 'https://i.pinimg.com/736x/37/fb/40/37fb409eb1477ada81dcc1e2780fbbc0.jpg',
      link: '#',
      linkText: 'Conoce más',
    },
    {
      title: 'App Móvil Transformadora',
      description: 'Aplicación móvil diseñada para conectar a miles de usuarios con soluciones inteligentes y efectivas.',
      image: 'https://i.pinimg.com/736x/37/fb/40/37fb409eb1477ada81dcc1e2780fbbc0.jpg',
      link: '#',
      linkText: 'Conoce más',
    },
  ],
} as const;

export const WHY_US = {
  TITLE_PREFIX: '¿Por qué elegir',
  TITLE_HIGHLIGHT: 'Llajtasoft',
  SUBTITLE: 'Impulsamos tu éxito con soluciones tecnológicas de vanguardia que transforman tu visión en resultados tangibles.',
  CTA: 'Explora nuestros servicios',
  CTA_HREF: '/servicios',
  ITEMS: [
    {
      icon: 'gear' as const,
      title: 'Experiencia',
      description: 'Con más de **5 años** de trayectoria y **100+ proyectos** exitosos.',
      stats: { years: '5 años', projects: '100+ proyectos' },
    },
    {
      icon: 'lightbulb' as const,
      title: 'Innovación',
      description: 'Soluciones **tecnológicas** de vanguardia para cada desafío empresarial.',
      highlight: 'tecnológicas',
    },
    {
      icon: 'bolt' as const,
      title: 'Agilidad',
      description: 'Metodología **100% ágil** que garantiza resultados rápidos y eficientes.',
      highlight: '100% ágil',
    },
  ],
} as const;

export const TESTIMONIALS = {
  TITLE_PREFIX: 'Lo que dicen nuestros',
  TITLE_HIGHLIGHT: 'clientes',
  ITEMS: [
    {
      initials: 'TS',
      name: 'TechSolutions',
      role: 'Empresa Tecnológica',
      quote: 'Llajtasoft transformó nuestras ideas en',
      highlight: 'soluciones prácticas',
      quoteSuffix: 'y efectivas que impulsaron nuestro negocio un 200% en solo 6 meses.',
      rating: 5,
      accentColor: 'pink-500',
    },
    {
      initials: 'EC',
      name: 'E-Commerce Pro',
      role: 'Tienda Online',
      quote: 'Gracias a la',
      highlight: 'plataforma personalizada',
      quoteSuffix: 'de Llajtasoft, nuestras ventas se duplicaron y redujimos costos operativos en un 35%.',
      rating: 5,
      accentColor: 'blue-800',
    },
  ],
} as const;

export const CTA = {
  TITLE_PREFIX: '¿Listo para comenzar tu',
  TITLE_HIGHLIGHT: 'proyecto',
  SUBTITLE: '¿Estás listo para transformar tu negocio? Contacta con nosotros y descubre cómo nuestras soluciones innovadoras pueden catapultar tu éxito en el mundo digital.',
  CTA_BUTTON: 'Comienza tu proyecto hoy',
  CTA_HREF: '#contacto',
  STATS: [
    { value: '95%', label: 'Satisfacción de clientes' },
    { value: '2 sem', label: 'Tiempo medio de entrega' },
    { value: '24/7', label: 'Soporte técnico' },
  ],
} as const;
