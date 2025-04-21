export type LanguageCode =
  | 'en'
  ;

export type Translations = {
  readonly [key in LanguageCode]: TranslationMap;
}

export type TranslationMap = {
  readonly [key in TextKey]: string;
};

export type TextKey = keyof TextStrings;

export type TextStrings = {
  languageDisplayName: string;
  pageTitle: string;
  settingsLabel: string;
  fontSizeLabel: string;
  themeLabel: string;
  languageLabel: string;
  prerequisitesLabel: string;
  wikiLinkAlt: string;
  hidePrereqsTitle: string;
  showPrereqsTitle: string;
  footerSource: string;
  footerSave: string;
  tabME1: string;
  tabME2: string;
  tabME3: string;
  themeName_theme_dark: string;
  themeName_theme_light: string;
  themeName_theme_hc_dark: string;
  themeName_theme_hc_light: string;
  group_me1_prologue: string,
  group_me1_story: string,
  group_me2_plot: string,
  group_me2_dossiers: string,
  group_me2_citadel: string,
  group_me2_loyalty: string,
  group_me3_priority: string,
  mission_me1_eden_prime: string;
  mission_me1_citadel_expose_saren: string;
  mission_me1_find_liara: string;
  mission_me1_feros: string;
  mission_me1_noveria: string;
  mission_me1_virmire: string;
  mission_me1_ilos: string;
  mission_me1_final_battle: string;
  mission_me2_prologue_save_joker: string,
  mission_me2_prologue_awakening: string;
  mission_me2_freedoms_progress: string;
  mission_me2_omega_aria_tloak: string;
  mission_me2_citadel_anderson: string;
  mission_me2_dossier_the_master_thief: string;
  mission_me2_dossier_the_veteran: string;
  mission_me2_recruit_archangel: string;
  mission_me2_recruit_professor: string;
  mission_me2_recruit_warlord: string;
  mission_me2_recruit_convict: string;
  mission_me2_horizon: string;
  mission_me2_recruit_assassin: string;
  mission_me2_recruit_justicar: string;
  mission_me2_recruit_tali: string;
  mission_me2_collector_ship: string;
  mission_me2_iff: string;
  mission_me2_await_iff: string;
  mission_me2_use_omega4_relay: string;
  mission_me2_suicide_mission_infiltration: string;
  mission_me2_suicide_mission_the_long_walk: string;
  mission_me2_suicide_mission_final_battle: string;
  mission_me2_citadel_crime_in_progress: string;
  mission_me2_citadel_found_forged_id: string;
  mission_me2_citadel_krogan_sushi: string;
  mission_me2_citadel_captain_bailey: string;
  mission_me2_citadel_the_council: string;
  mission_me2_loyalty_garrus: string;
  mission_me2_loyalty_grunt: string;
  mission_me2_loyalty_jack: string;
  mission_me2_loyalty_jacob: string;
  mission_me2_loyalty_miranda: string;
  mission_me2_loyalty_mordin: string;
  mission_me2_loyalty_samara: string;
  mission_me3_prologue: string;
  mission_me3_mars: string;
  mission_me3_citadel1: string;
  mission_me3_palaven: string;
  mission_me3_surkesh: string;
  mission_me3_tuchanka: string;
  mission_me3_citadel2: string;
  mission_me3_perseus_veil: string;
  mission_me3_rannoch: string;
  mission_me3_thessia: string;
  mission_me3_horizon: string;
  mission_me3_cerberus_hq: string;
  mission_me3_earth: string;
  unknownMission: string;
};
