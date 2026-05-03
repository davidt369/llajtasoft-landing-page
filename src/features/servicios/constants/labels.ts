export const SERVICIOS_HERO = {
  BADGE: 'Soluciones por tipo de necesidad',
  TITLE: 'Software que encaja en tu operación',
  SUBTITLE: 'No importa si necesitas una web, una app o un sistema de escritorio. Lo diseñamos para que funcione con lo que ya tienes: tu equipo, tus datos y tus procesos.',
  CTA_TEXT: 'Solicita una consulta gratuita',
  CTA_HREF: '/contacto',
} as const;

export const WEB_DEVELOPMENT = {
  BADGE: 'Plataformas Web',
  TITLE: 'Aplicaciones Web a Medida',
  SUBTITLE: 'Desde paneles de gestión interna hasta tiendas online con pasarela de pagos. Plataformas que tu equipo puede usar desde cualquier navegador, conectadas a tu facturación y tu inventario.',
  GRADIENT: 'from-blue-500 to-blue-300',
  CTA_TEXT: 'Consultar sobre desarrollo web',
  CTA_HREF: '/contacto',
  CTA_COLOR: 'blue',
  ITEMS: [
    {
      title: 'Sitios web y Landing Pages',
      description: 'Páginas de alto rendimiento diseñadas para convertir visitantes en clientes. Optimizadas para SEO y velocidad de carga.',
      accentColor: 'blue',
    },
    {
      title: 'Tiendas Online',
      description: 'E-commerce con catálogo, carrito, pagos QR/tarjeta y gestión de envíos. Integrado con tu inventario para que el stock se actualice solo.',
      accentColor: 'purple',
    },
    {
      title: 'Sistemas de Gestión (ERP/CRM)',
      description: 'Centraliza ventas, inventario, clientes y reportes en una sola plataforma web. Se conecta con tu facturación electrónica y tus hojas de cálculo.',
      accentColor: 'teal',
    },
  ],
} as const;

export const MOBILE_DEVELOPMENT = {
  BADGE: 'Apps para Android e iOS',
  TITLE: 'Aplicaciones Móviles',
  SUBTITLE: 'Una sola app que funciona en Android y iOS. Ideal para equipos de campo, vendedores, repartidores o clientes que necesitan acceso desde cualquier lugar — incluso sin internet.',
  GRADIENT: 'from-purple-500 to-blue-500',
  CTA_TEXT: 'Consultar sobre apps móviles',
  CTA_HREF: '/contacto',
  CTA_COLOR: 'purple',
  ITEMS: [
    {
      title: 'Apps de Gestión en Campo',
      description: 'Para equipos que trabajan fuera de la oficina: registran datos, toman fotos, reportan ubicación y sincronizan todo con tu sistema central cuando hay conexión.',
      accentColor: 'purple',
      features: [
        'Registro de visitas y actividades con GPS',
        'Funcionalidad offline con sincronización automática',
        'Reportes en tiempo real al panel de administración',
      ],
    },
    {
      title: 'Apps de Venta y Delivery',
      description: 'Tus clientes compran desde su celular, pagan con QR o tarjeta, y tu equipo gestiona los pedidos desde un panel web. Todo integrado.',
      accentColor: 'blue',
      features: [
        'Catálogo de productos con búsqueda y filtros',
        'Pagos QR, tarjeta y contra entrega',
        'Seguimiento de pedidos en tiempo real',
      ],
    },
  ],
} as const;

export const DESKTOP_DEVELOPMENT = {
  BADGE: 'Software de Escritorio',
  TITLE: 'Aplicaciones para tu equipo local',
  SUBTITLE: 'Para cuando necesitas velocidad, trabajo sin internet o conexión con hardware local. Software que se instala en tu computadora y se sincroniza con la nube cuando quieras.',
  GRADIENT: 'from-teal-500 to-blue-500',
  CTA_TEXT: 'Consultar sobre software de escritorio',
  CTA_HREF: '/contacto',
  CTA_COLOR: 'teal',
  CARD: {
    title: 'Hecho para tu flujo de trabajo',
    description: 'Software de escritorio que se conecta con tus impresoras térmicas, lectores de código de barras, balanzas y cualquier periférico que tu operación necesite.',
    features: [
      'Funciona sin internet, sincroniza cuando hay conexión',
      'Integración con impresoras, lectores y balanzas',
      'Migración gradual desde tu sistema actual',
    ],
    image: '/placeholder.svg?height=300&width=300',
    imageAlt: 'Software de Escritorio',
  },
} as const;

export const PROCESS = {
  BADGE: 'Así trabajamos',
  TITLE: 'De tu problema a tu solución',
  SUBTITLE: 'Un proceso transparente donde ves avance real cada 2 semanas. Sin sorpresas, sin jerga técnica innecesaria.',
  CTA_TEXT: 'Agenda tu primera reunión',
  CTA_HREF: '/contacto',
  STEPS: [
    {
      title: 'Diagnóstico gratuito',
      description: 'Analizamos tu operación, identificamos qué se puede automatizar y te presentamos una propuesta con alcance, tiempos y costos claros.',
      accentColor: 'blue',
    },
    {
      title: 'Desarrollo con demos cada 2 semanas',
      description: 'Construimos por sprints. Cada 2 semanas tienes una versión funcional que puedes probar con tu equipo y darnos feedback real.',
      accentColor: 'purple',
    },
    {
      title: 'Entrega e integración',
      description: 'Implementamos el software en tu operación, lo conectamos con tus sistemas actuales y capacitamos a tu equipo para que lo use desde el día uno.',
      accentColor: 'teal',
    },
    {
      title: 'Soporte continuo',
      description: 'Después de entregar, seguimos disponibles. Correcciones, ajustes y nuevas funcionalidades cuando tu negocio lo necesite.',
      accentColor: 'amber',
    },
  ],
} as const;

export const SERVICIOS_CTA = {
  TITLE_PREFIX: '¿Sabes qué proceso quieres',
  TITLE_HIGHLIGHT: 'mejorar',
  SUBTITLE: 'Cuéntanos en 2 minutos qué necesitas. Te respondemos en menos de 24 horas con una propuesta inicial y un estimado de inversión.',
  CTA_BUTTON: 'Solicitar propuesta',
  CTA_HREF: '/contacto',
} as const;
