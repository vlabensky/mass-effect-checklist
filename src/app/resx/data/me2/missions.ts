import { m } from '../builders';

export const predicates = {
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
