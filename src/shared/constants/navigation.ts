export const NAV_LABELS = {
  HOME: 'Inicio',
  ABOUT: 'Nosotros',
  SERVICES: 'Servicios',
  PORTFOLIO: 'Portafolio',
  BLOG: 'Blog',
  CONTACT: 'Contacto',
  MAIN_NAV_ARIA: 'Navegación principal',
  MOBILE_NAV_ARIA: 'Menú móvil',
  OPEN_MENU_ARIA: 'Abrir menú de navegación',
  SKIP_TO_CONTENT: 'Saltar al contenido principal',
  HOME_LINK_ARIA: 'Llajtasoft - Inicio',
} as const;

export type NavItem = {
  href: string;
  label: string;
  current?: boolean;
};

export const NAV_ITEMS: readonly NavItem[] = [
  { href: '/', label: NAV_LABELS.HOME, current: true },
  { href: '/nosotros', label: NAV_LABELS.ABOUT },
  { href: '/servicios', label: NAV_LABELS.SERVICES },
  { href: '/portafolio', label: NAV_LABELS.PORTFOLIO },
  { href: '/blog', label: NAV_LABELS.BLOG },
  { href: '/contacto', label: NAV_LABELS.CONTACT },
] as const;
