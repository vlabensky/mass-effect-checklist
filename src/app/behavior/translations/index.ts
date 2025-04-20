import type { LanguageCode, TextKey } from './types';
import { DEFAULT_LANGUAGE } from './constants';
import { translations, languages } from '@/app/resx/text';

const getText = (language: LanguageCode, textKey: TextKey) => {
  const defaultLangTranslations = translations[DEFAULT_LANGUAGE];
  const langTranslations = translations[language] || defaultLangTranslations;
  return langTranslations[textKey];
};

const getLanguages = () => languages;

export { getText, getLanguages };

export type {
  LanguageCode,
  TextKey,
} from './types';

export {
  DEFAULT_LANGUAGE,
  STORAGE_LANGUAGE_KEY,
} from './constants';
