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

import * as me2 from '@/app/resx/data/me1/missions';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { predicates, ...missions } = me2;

const r: Record<string, string> = {};
for (const [key, value] of Object.entries(missions)) {
  r[key] = value.urls.ign;
}

console.log(r);