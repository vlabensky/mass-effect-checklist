export enum Theme {
  dark = 'theme-dark',
  light = 'theme-light',
  highContrastDark = 'theme-hc-dark',
  highContrastLight = 'theme-hc-light',
};

export const DEFAULT_FONT_SIZE_MULTIPLIER = 1.0;
export const DEFAULT_THEME = Theme.dark;
export const LOCAL_STORAGE_FONT_KEY = 'f';
export const MIN_FONT_SIZE_MULTIPLIER = 0.7;
export const MAX_FONT_SIZE_MULTIPLIER = 1.5;
export const LOCAL_STORAGE_THEME_KEY = 't';
export const BASE_HTML_FONT_SIZE_PX = 16;
export const FONT_SIZE_STEP = 0.1;
