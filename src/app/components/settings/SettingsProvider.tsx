import {
  type ReactNode,
  useEffect,
  useState,
} from 'react';
import {
  BASE_HTML_FONT_SIZE_PX,
  DEFAULT_FONT_SIZE_MULTIPLIER,
  DEFAULT_THEME,
  FONT_SIZE_STEP,
  LOCAL_STORAGE_FONT_KEY,
  LOCAL_STORAGE_THEME_KEY,
  MAX_FONT_SIZE_MULTIPLIER,
  MIN_FONT_SIZE_MULTIPLIER,
  Theme,
} from './constants';
import SettingsContext from './SettingsContext';

const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [fontSizeMultiplier, setFontSizeMultiplier] = useState(DEFAULT_FONT_SIZE_MULTIPLIER);
  const [activeTheme, setActiveTheme] = useState(DEFAULT_THEME);

  // Load settings from localStorage
  useEffect(() => {
    if (typeof window === 'undefined')
      return;

    const savedFontSize = localStorage.getItem(LOCAL_STORAGE_FONT_KEY);
    if (savedFontSize) {
      const parsedFontSize = parseFloat(savedFontSize);
      if (!isNaN(parsedFontSize) && parsedFontSize >= MIN_FONT_SIZE_MULTIPLIER && parsedFontSize <= MAX_FONT_SIZE_MULTIPLIER)
        setFontSizeMultiplier(parsedFontSize);
      else
        localStorage.removeItem(LOCAL_STORAGE_FONT_KEY);
    }

    const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme | null;
    if (savedTheme && Object.values(Theme).includes(savedTheme))
      setActiveTheme(savedTheme);
    else
      localStorage.removeItem(LOCAL_STORAGE_THEME_KEY);
  }, []);

  // Save font size state & apply
  useEffect(() => {
    if (typeof window === "undefined")
      return;

    localStorage.setItem(
      LOCAL_STORAGE_FONT_KEY,
      fontSizeMultiplier.toString()
    );

    const newSize = BASE_HTML_FONT_SIZE_PX * fontSizeMultiplier;
    document.documentElement.style.fontSize = `${newSize}px`;
  }, [fontSizeMultiplier]);

  useEffect(() => {
    if (typeof window === "undefined")
      return;

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, activeTheme);

    const root = document.body;
    const attribute = document.createAttribute('data-theme');
    attribute.value = activeTheme;
    root.attributes.setNamedItem(attribute);
  }, [activeTheme]);

  const increaseFontSize = () => setFontSizeMultiplier(prev => Math.min(MAX_FONT_SIZE_MULTIPLIER, prev + FONT_SIZE_STEP));

  const decreaseFontSize = () => setFontSizeMultiplier(prev => Math.max(MIN_FONT_SIZE_MULTIPLIER, prev - FONT_SIZE_STEP));

  const value = {
    fontSizeMultiplier,
    increaseFontSize,
    decreaseFontSize,
    activeTheme,
    setActiveTheme,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
