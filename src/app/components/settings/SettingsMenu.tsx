import { type RefObject } from 'react';
import { type LanguageCode } from '@/app/behavior/translations';
import { useTranslations } from '../language';
import useSettings from './useSettings';
import { MAX_FONT_SIZE_MULTIPLIER, MIN_FONT_SIZE_MULTIPLIER, Theme } from './constants';
import FontSizeButton from './FontSizeButton';

type Props = {
  isOpen: boolean;
  menuRef: RefObject<HTMLDivElement>;
};

const SettingsMenu = ({ isOpen, menuRef }: Props) => {
  const {
    t,
    currentLanguage,
    setLanguage,
    supportedLanguages,
  } = useTranslations();

  const {
    fontSizeMultiplier,
    increaseFontSize,
    decreaseFontSize,
    activeTheme,
    setActiveTheme,
  } = useSettings();

  if (!isOpen)
    return null;

  return (
    <div
      ref={menuRef}
      id="settings-menu"
      role="menu"
      className="absolute top-full right-0 mt-2 w-64 p-4 rounded-md shadow-lg bg-background-list border border-border z-20"
    >
      {/* Font Size Controls */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-text-secondary mb-2">{t('fontSizeLabel')}</label>
        <div className="flex items-center justify-center">
          {/* TODO: make ARIA labels translatable */}
          <FontSizeButton
            onClick={decreaseFontSize}
            ariaLabel="Decrease font size"
            disabled={fontSizeMultiplier <= MIN_FONT_SIZE_MULTIPLIER}
          >
            A-
          </FontSizeButton>
          <span className="mx-2 text-text-primary tabular-nums">
            {(fontSizeMultiplier * 100).toFixed(0)}%
          </span>
          <FontSizeButton
            onClick={increaseFontSize}
            ariaLabel="Increase font size"
            disabled={fontSizeMultiplier >= MAX_FONT_SIZE_MULTIPLIER}
          >
            A+
          </FontSizeButton>
        </div>
      </div>
      {/* Theme Selector */}
      <div className="mb-4">
        <label htmlFor="theme-select" className="block text-sm font-medium text-text-secondary mb-2">{t('themeLabel')}</label>
        <select
          id="theme-select"
          value={activeTheme}
          onChange={e => setActiveTheme(e.target.value as Theme)}
          className="w-full px-2 py-1 rounded-md border border-border-input bg-input-bg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
        >
          {Object.values(Theme).map(themeKey => (
            <option key={themeKey} value={themeKey}>{t(`themeName_${themeKey}`)}</option>
          ))}
        </select>
      </div>
      {/* Language Selector */}
      <div>
        <label htmlFor="language-select" className="block text-sm font-medium text-text-secondary mb-2">{t('languageLabel')}</label>
        <select
          id="language-select"
          value={currentLanguage}
          onChange={e => setLanguage(e.target.value as LanguageCode)}
          className="w-full px-2 py-1 rounded-md border border-border-input bg-input-bg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
        >
          {supportedLanguages.map(({ code, displayName }) => (
            <option key={code} value={code}>{displayName}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SettingsMenu;
