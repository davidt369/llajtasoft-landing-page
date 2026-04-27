export const FOOTER_LABELS = {
  BRAND_DESCRIPTION:
    'Transformamos tus ideas en soluciones tecnológicas de alto impacto. Con más de 5 años de experiencia, creamos aplicaciones web, móviles y de escritorio personalizadas para tu negocio.',
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
  ADDRESS_VALUE: 'Calle Ficticia 123, Ciudad, País',
  PHONE_LABEL: 'Teléfono:',
  PHONE_VALUE: '+1 234 567 890',
  EMAIL_LABEL: 'Email:',
  EMAIL_VALUE: 'contacto@llajtasoft.com',
} as const;

export type FooterLink = {
  href: string;
  label: string;
  icon: 'web' | 'mobile' | 'desktop' | 'mail' | 'faq' | 'shield' | 'document';
};

export const FOOTER_SERVICES: readonly FooterLink[] = [
  { href: '#servicios', label: 'Desarrollo Web', icon: 'web' },
  { href: '#servicios', label: 'Desarrollo Móvil', icon: 'mobile' },
  { href: '#servicios', label: 'Desarrollo de Escritorio', icon: 'desktop' },
] as const;

export const FOOTER_INFO: readonly FooterLink[] = [
  { href: '#contacto', label: 'Contáctanos', icon: 'mail' },
  { href: '#faq', label: 'FAQ', icon: 'faq' },
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
