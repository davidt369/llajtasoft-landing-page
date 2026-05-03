export const FOOTER_LABELS = {
  BRAND_DESCRIPTION:
    'Automatizamos procesos manuales e integramos sistemas existentes para que PYMEs operen con menos errores, menos trabajo repetitivo y más control.',
  SERVICES_TITLE: 'Servicios',
  INFO_TITLE: 'Información',
  SOCIAL_TITLE: 'Síguenos',
  CONTACT_TITLE: 'Contacto',
  PRIVACY_POLICY: 'Política de Privacidad',
  TERMS: 'Términos y Condiciones',
  COOKIES: 'Cookies',
  SITEMAP: 'Mapa del Sitio',
  COPYRIGHT_SUFFIX: 'Todos los derechos reservados.',
  ADDRESS_LABEL: 'Dirección:',
  ADDRESS_VALUE: 'Bolivia',
  PHONE_LABEL: 'Teléfono:',
  PHONE_VALUE: '+591 70000000',
  EMAIL_LABEL: 'Email:',
  EMAIL_VALUE: 'contacto@llajtasoft.com',
} as const;

export type FooterLink = {
  href: string;
  label: string;
  icon: 'web' | 'mobile' | 'desktop' | 'mail' | 'faq' | 'shield' | 'document';
};

export const FOOTER_SERVICES: readonly FooterLink[] = [
  { href: '/servicios', label: 'Automatización de procesos', icon: 'web' },
  { href: '/servicios', label: 'Integración de sistemas', icon: 'desktop' },
  { href: '/servicios', label: 'Sistemas a medida', icon: 'mobile' },
] as const;

export const FOOTER_INFO: readonly FooterLink[] = [
  { href: '/contacto', label: 'Contáctanos', icon: 'mail' },
  { href: '/contacto#faq', label: 'FAQ', icon: 'faq' },
  { href: '#', label: 'Política de Privacidad', icon: 'shield' },
  { href: '#', label: 'Términos y Condiciones', icon: 'document' },
] as const;

export type FooterSocialLink = {
  href: string;
  label: string;
  icon: 'facebook' | 'twitter' | 'linkedin';
};

export const FOOTER_SOCIAL: readonly FooterSocialLink[] = [
  { href: '#', label: 'Facebook', icon: 'facebook' },
  { href: '#', label: 'Twitter', icon: 'twitter' },
  { href: '#', label: 'LinkedIn', icon: 'linkedin' },
] as const;

export const FOOTER_LEGAL = [
  { href: '#', label: FOOTER_LABELS.PRIVACY_POLICY },
  { href: '#', label: FOOTER_LABELS.TERMS },
  { href: '#', label: FOOTER_LABELS.COOKIES },
  { href: '#', label: FOOTER_LABELS.SITEMAP },
] as const;
