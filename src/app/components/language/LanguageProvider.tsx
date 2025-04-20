import { type ReactNode, useEffect, useMemo, useState } from 'react';
import {
  type LanguageCode,
  type TextKey,
  getText,
  getLanguages,
  DEFAULT_LANGUAGE,
  STORAGE_LANGUAGE_KEY,
} from '@/app/behavior/translations';
import LanguageContext from './LanguageContext';

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState(DEFAULT_LANGUAGE);
  const languages = getLanguages();

  // Load language from local storage on mount
  useEffect(() => {
    if (typeof window === 'undefined')
      return;

    const savedLanguageCode = localStorage.getItem(STORAGE_LANGUAGE_KEY) as LanguageCode | null;
    if (savedLanguageCode && languages.some(({ code }) => code === savedLanguageCode))
      setCurrentLanguage(savedLanguageCode);
  }, [languages]);

  // Save language to local storage when it changes
  useEffect(() => {
    if (typeof window === 'undefined')
      return;

    localStorage.setItem(STORAGE_LANGUAGE_KEY, currentLanguage);
  }, [currentLanguage]);

  // Translation function 't'
  const t = useMemo(() => (key: TextKey) => getText(currentLanguage, key), [currentLanguage]);

  const value = {
    currentLanguage,
    setCurrentLanguage,
    t,
    supportedLanguages: languages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
