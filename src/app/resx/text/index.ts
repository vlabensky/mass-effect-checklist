import type { LanguageCode, Translations } from '@/app/behavior/translations/types';
import { default as en } from './translations/_en';

const translations: Translations = {
  en,
};

const languages = Object.keys(translations).map(key => {
  const code = <LanguageCode>key;
  return {
    code,
    displayName: translations[code].languageDisplayName,
  }
});

export { translations, languages };
