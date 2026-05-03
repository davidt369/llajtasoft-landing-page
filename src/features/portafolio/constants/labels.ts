export const PORTAFOLIO_HERO = {
  BADGE: 'Proyectos reales',
  TITLE: 'Lo que hemos construido',
  SUBTITLE: 'Cada proyecto resolvió un problema concreto: ventas que no se controlaban, equipos sin visibilidad, procesos manuales que tomaban horas. Estos son los resultados.',
} as const;

export const PROJECTS = {
  CTA_TEXT: '¿Tu negocio tiene un problema similar? Hablemos',
  CTA_HREF: '/contacto',
  ITEMS: [
    {
      title: 'Sistema de Ventas Multicanal',
      description: 'E-commerce integrado con punto de venta físico para una cadena de retail. Stock unificado entre tienda web y 3 sucursales, con pagos QR y seguimiento de envíos.',
      image: 'https://i.pinimg.com/736x/db/3b/d5/db3bd50218eeeb1173b353effe1773b7.jpg',
      imageAlt: 'Sistema de ventas multicanal',
      category: 'E-commerce + POS',
      accentColor: 'blue',
      technologies: ['React', 'Next.js', 'Stripe', 'PostgreSQL'],
      projectUrl: '#',
      githubUrl: 'https://github.com/llajtasoft',
    },
    {
      title: 'App de Control de Repartidores',
      description: 'Aplicación móvil para una empresa de distribución: GPS en tiempo real, foto de entrega, firma digital y reportes automáticos al sistema central.',
      image: 'https://i.pinimg.com/736x/db/3b/d5/db3bd50218eeeb1173b353effe1773b7.jpg',
      imageAlt: 'App de control de repartidores',
      category: 'App Móvil',
      accentColor: 'purple',
      technologies: ['Flutter', 'Firebase', 'Google Maps API'],
      projectUrl: '#',
      githubUrl: 'https://github.com/llajtasoft',
    },
    {
      title: 'ERP para Distribuidora',
      description: 'Sistema web que unificó ventas, inventario, cuentas por cobrar y facturación electrónica para una distribuidora con 3 sucursales y 15 vendedores en campo.',
      image: 'https://i.pinimg.com/736x/db/3b/d5/db3bd50218eeeb1173b353effe1773b7.jpg',
      imageAlt: 'ERP para distribuidora',
      category: 'ERP Web',
      accentColor: 'teal',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Docker'],
      projectUrl: '#',
      githubUrl: 'https://github.com/llajtasoft',
    },
    {
      title: 'Punto de Venta con Impresión Térmica',
      description: 'Software de escritorio para farmacias: búsqueda por código de barras, control de lotes y vencimientos, impresión de tickets y sincronización con el sistema contable.',
      image: 'https://i.pinimg.com/736x/db/3b/d5/db3bd50218eeeb1173b353effe1773b7.jpg',
      imageAlt: 'Punto de venta para farmacias',
      category: 'Desktop',
      accentColor: 'amber',
      technologies: ['Electron.js', 'React', 'SQLite'],
      projectUrl: '#',
      githubUrl: 'https://github.com/llajtasoft',
    },
    {
      title: 'Plataforma de Capacitación Interna',
      description: 'Sistema de cursos online para una empresa de 200 empleados: videos, evaluaciones, certificados automáticos y dashboard de progreso para RRHH.',
      image: 'https://i.pinimg.com/736x/db/3b/d5/db3bd50218eeeb1173b353effe1773b7.jpg',
      imageAlt: 'Plataforma de capacitación',
      category: 'E-Learning',
      accentColor: 'green',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'WebRTC'],
      projectUrl: '#',
      githubUrl: 'https://github.com/llajtasoft',
    },
    {
      title: 'Monitor de Sensores Industriales',
      description: 'Dashboard en tiempo real para una planta de producción: temperatura, humedad y consumo energético de 40 sensores con alertas automáticas por WhatsApp.',
      image: 'https://i.pinimg.com/736x/db/3b/d5/db3bd50218eeeb1173b353effe1773b7.jpg',
      imageAlt: 'Monitor de sensores industriales',
      category: 'IoT',
      accentColor: 'indigo',
      technologies: ['React', 'Node.js', 'MQTT', 'Raspberry Pi'],
      projectUrl: '#',
      githubUrl: 'https://github.com/llajtasoft',
    },
  ],
} as const;

export const SUCCESS_CASES = {
  BADGE: 'Impacto medible',
  TITLE: 'Resultados que importan',
  SUBTITLE: 'No hablamos de "transformación digital" en abstracto. Estos son números reales de proyectos entregados.',
  CTA_TEXT: 'Quiero resultados similares para mi negocio',
  CTA_HREF: '/contacto',
  ITEMS: [
    {
      title: 'Stock sin errores',
      description: 'Una distribuidora pasó de 12% de errores en inventario a menos del 2% con un ERP web conectado a sus puntos de venta y facturación electrónica.',
      accentColor: 'blue',
    },
    {
      title: '3 horas menos al día',
      description: 'El equipo administrativo de una empresa de servicios dejó de cargar datos manualmente. El sistema ahora captura, valida y reporta automáticamente.',
      accentColor: 'purple',
    },
    {
      title: 'Ventas online desde cero',
      description: 'Un negocio que solo vendía en tienda física lanzó su e-commerce y en 3 meses ya generaba el 25% de sus ingresos totales por canal digital.',
      accentColor: 'teal',
    },
  ],
} as const;

export const PORTAFOLIO_CTA = {
  TITLE_PREFIX: '¿Tu negocio tiene un desafío',
  TITLE_HIGHLIGHT: 'similar',
  SUBTITLE: 'Cuéntanos qué problema quieres resolver. Analizamos tu caso y te proponemos una solución con alcance, tiempos y costos claros — sin compromiso.',
  CTA_BUTTON: 'Agendar consulta gratuita',
  CTA_HREF: '/contacto',
} as const;
