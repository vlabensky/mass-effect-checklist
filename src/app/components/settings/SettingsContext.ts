import { createContext } from 'react';
import type { Theme } from './constants';

const SettingsContext = createContext<{
  fontSizeMultiplier: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  activeTheme: Theme;
  setActiveTheme: (activeTheme: Theme) => void;
} | null>(null);

export default SettingsContext;
