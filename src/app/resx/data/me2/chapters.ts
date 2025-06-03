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

// Citadel

export const me2_chapter_citadel = ch('Citadel')
  .hasMissions(
    m.me2_mission_citadel_the_council,
    m.me2_mission_citadel_captain_bailey,
    m.me2_mission_citadel_crime_in_progress,
    m.me2_mission_citadel_krogan_sushi,
  )
  .build();

// Omega

export const me2_chapter_omega = ch('Omega')
  .hasMissions(
    m.me2_mission_omega_aria_t_loak,
    m.me2_mission_omega_batarian_bartender,
    m.me2_mission_omega_struggling_quarian,
  )
  .build();

// N7 Assignments

export const me2_chapter_n7_assignments = ch('N7 Assignments')
  .hasMissions(
    m.me2_mission_n7_assignments_wrecked_merchant_freighter,
    m.me2_mission_n7_assignments_abandoned_research_station,
    m.me2_mission_n7_assignments_hahne_kedar_facility,
  )
  .build();
