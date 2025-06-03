import { ch } from '../builders';
import * as m from './missions';

// Prologue

export const me2_chapter_prologue = ch('Prologue')
  .hasMissions(
    m.me2_mission_prologue_save_joker,
    m.me2_mission_prologue_awakening,
    m.me2_mission_prologue_freedoms_progress,
  )
  .build();

// Normandy

export const me2_chapter_normandy = ch('Normandy')
  .hasMissions(
    m.me2_mission_normandy_fba_couplings,
    m.me2_mission_normandy_serrice_ice_brandy,
    m.me2_mission_normandy_special_ingredients,
    m.me2_mission_normandy_normandy_crash_site,
  )
  .build();

