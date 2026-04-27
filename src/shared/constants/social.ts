export type SocialLink = {
  key: 'mastodon' | 'twitter' | 'github';
  href: string;
  label: string;
};

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    key: 'mastodon',
    href: 'https://m.webtoo.ls/@astro',
    label: 'Síguenos en Mastodon',
  },
  {
    key: 'twitter',
    href: 'https://twitter.com/astrodotbuild',
    label: 'Síguenos en Twitter',
  },
  {
    key: 'github',
    href: 'https://github.com/withastro/astro',
    label: 'Visita nuestro repositorio en GitHub',
  },
] as const;
