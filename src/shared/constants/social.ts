export type SocialLink = {
  key: 'mastodon' | 'twitter' | 'github';
  href: string;
  label: string;
};

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    key: 'mastodon',
    href: '/contacto',
    label: 'Contáctanos',
  },
  {
    key: 'twitter',
    href: 'https://wa.me/59170000000',
    label: 'Escríbenos por WhatsApp',
  },
  {
    key: 'github',
    href: 'mailto:contacto@llajtasoft.com',
    label: 'Envíanos un correo',
  },
] as const;
