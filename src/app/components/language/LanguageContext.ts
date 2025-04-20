import type { getLanguages, LanguageCode, TextKey } from '@/app/behavior/translations';
import { createContext } from 'react';

const LanguageContext = createContext<{
  currentLanguage: LanguageCode,
  setCurrentLanguage: (code: LanguageCode) => void,
  t: (key: TextKey) => string,
  supportedLanguages: ReturnType<typeof getLanguages>,
} | null>(null);

export default LanguageContext;
