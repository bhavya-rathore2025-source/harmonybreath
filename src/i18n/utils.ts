import { ui, defaultLang, languages, type SupportedLanguage } from './ui';

export function getLangFromUrl(url: URL): SupportedLanguage {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) {
    return lang as SupportedLanguage;
  }
  return defaultLang;
}

export function useTranslations(lang: SupportedLanguage) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    const localized = ui[lang];
    if (localized && key in localized) {
      return (localized as Record<string, string>)[key];
    }
    return ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: SupportedLanguage) {
  return function translatePath(path: string, targetLang: SupportedLanguage = lang): string {
    const cleanPath = path.replace(/^\/+|\/+$/g, '');
    if (targetLang === defaultLang) {
      return cleanPath ? `/${cleanPath}/` : '/';
    }
    return cleanPath ? `/${targetLang}/${cleanPath}/` : `/${targetLang}/`;
  };
}

export function getHreflangLinks(techniqueSlug: string, siteUrl: string = 'https://harmonybreath.com') {
  const cleanBase = siteUrl.replace(/\/+$/, '');
  const cleanSlug = techniqueSlug.replace(/^\/+|\/+$/g, '');

  const links: { lang: string; href: string }[] = [
    {
      lang: 'x-default',
      href: `${cleanBase}/${cleanSlug}/`,
    },
    {
      lang: 'en',
      href: `${cleanBase}/${cleanSlug}/`,
    },
  ];

  const otherLocales: SupportedLanguage[] = ['es', 'de', 'fr', 'pt', 'ja', 'it'];
  for (const loc of otherLocales) {
    links.push({
      lang: loc,
      href: `${cleanBase}/${loc}/${cleanSlug}/`,
    });
  }

  return links;
}
