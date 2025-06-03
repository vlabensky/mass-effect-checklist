import { m } from '../builders';

export const predicates = {
  isPrologueCompleted: () => me2_mission_prologue_freedoms_progress.isCompleted,
};

// Prologue

export const me2_mission_prologue_save_joker = m('Save Joker', 'Prologue:_Save_Joker', 'Save_Joker')
  .build();

export const me2_mission_prologue_awakening = m('Awakening', 'Prologue:_Awakening', 'Awakening')
  .availableWhen(() => me2_mission_prologue_save_joker.isCompleted)
  .build();

export const me2_mission_prologue_freedoms_progress = m('Freedom\'s Progress', 'Prologue:_Freedom\'s_Progress', 'Freedoms_Progress')
  .availableWhen(() => me2_mission_prologue_awakening.isCompleted)
  .build();

// Normandy

export const me2_mission_normandy_fba_couplings = m('FBA Couplings', 'Normandy:_FBA_Couplings', 'FBA_Couplings')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_normandy_serrice_ice_brandy = m('Serrice Ice Brandy', 'Normandy:_Serrice_Ice_Brandy', 'Serrice_Ice_Brandy')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_normandy_special_ingredients = m('Special Ingredients', 'Normandy:_Special_Ingredients', 'Special_Ingredients')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_normandy_normandy_crash_site = m('Normandy Crash Site', 'Normandy:_Normandy_Crash_Site', 'Normandy_Crash_Site')
  .availableWhen(predicates.isPrologueCompleted)
  .build();
