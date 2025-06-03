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

// Plot Missions

export const me2_chapter_plot = ch('Plot Missions')
  .hasMissions(
    m.me2_mission_the_council,
    m.me2_mission_horizon,
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

// Dossiers

export const me2_chapter_dossiers = ch('Dossiers')
  .hasMissions(
    m.me2_mission_dossier_master_thief,
    m.me2_mission_dossier_veteran,
    m.me2_mission_dossier_warlord,
    m.me2_mission_dossier_archangel,
    m.me2_mission_dossier_the_professor,
    m.me2_mission_dossier_the_convict,
    m.me2_mission_dossier_the_assassin,
    m.me2_mission_dossier_the_justicar,
    m.me2_mission_dossier_tali,
  )
  .build();

// Citadel

export const me2_chapter_citadel = ch('Citadel')
  .hasMissions(
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
    m.me2_mission_omega_the_patriarch,
    m.me2_mission_omega_packages_for_ish,
  )
  .build();

// N7 Assignments

export const me2_chapter_n7_assignments = ch('N7 Assignments')
  .hasMissions(
    m.me2_mission_n7_assignments_wrecked_merchant_freighter,
    m.me2_mission_n7_assignments_abandoned_research_station,
    m.me2_mission_n7_assignments_hahne_kedar_facility,
    m.me2_mission_n7_assignments_msv_estevanico,
    m.me2_mission_n7_assignments_eclipse_smuggling_depot,
    m.me2_mission_n7_assignments_lost_operative,
    m.me2_mission_n7_assignments_abandoned_mine,
    m.me2_mission_n7_assignments_anomalous_weather_detected,
    m.me2_mission_n7_assignments_blood_pack_base,
    m.me2_mission_n7_assignments_blood_pack_communications_relay,
    m.me2_mission_n7_assignments_quarian_crash_site,
    m.me2_mission_n7_assignments_imminent_ship_crash,
    m.me2_mission_n7_assignments_captured_mining_facility,
    m.me2_mission_n7_assignments_archeological_dig_site,
    m.me2_mission_n7_assignments_msv_strontium_mule,
    m.me2_mission_n7_assignments_blue_suns_base,
    m.me2_mission_n7_assignments_javelin_missiles_launched,
  )
  .build();

// Project Firewalker

export const me2_chapter_project_firewalker = ch('Project Firewalker')
  .hasMissions(
    m.me2_mission_project_firewalker_rosalie_lost,
    m.me2_mission_project_firewalker_geth_activity,
    m.me2_mission_project_firewalker_survey_sites_located,
    m.me2_mission_project_firewalker_volcano_station,
    m.me2_mission_project_firewalker_prothean_site,
  )
  .build();

// Project Overlord

export const me2_chapter_project_overlord = ch('Project Overlord')
  .hasMissions(
    m.me2_mission_project_overlord_investigate_project_overlord,
    m.me2_mission_project_overlord_atlas_station,
    m.me2_mission_project_overlord_prometheus_station,
    m.me2_mission_project_overlord_vulcan_station,
  )
  .build();

// Loyalty Missions

export const me2_chapter_loyalty = ch('Loyalty Missions')
  .hasMissions(
    m.me2_mission_loyalty_zaeed,
    m.me2_mission_loyalty_kasumi,
    m.me2_mission_loyalty_grunt_rite_of_passage,
    m.me2_mission_loyalty_mordin_old_blood,
    m.me2_mission_loyalty_garrus_eye_for_an_eye,
    m.me2_mission_loyalty_thane_sins_of_the_father,
    m.me2_mission_loyalty_miranda_the_prodigal,
    m.me2_mission_loyalty_jack_subject_zero,
    m.me2_mission_loyalty_jacob_gift_of_greatness,
    m.me2_mission_loyalty_samara_ardat_yakshi,
    m.me2_mission_loyalty_tali_treason,
  )
  .build();

// Illium

export const me2_chapter_illium = ch('Illium')
  .hasMissions(
    m.me2_mission_illium_liara_system_hacking,
    m.me2_mission_illium_liara_the_observer,
    m.me2_mission_illium_a_troublemaker,
    m.me2_mission_illium_blue_rose_of_illium,
    m.me2_mission_illium_gianna_parasini,
    m.me2_mission_illium_indentured_service,
    m.me2_mission_illium_medical_scans,
  )
  .build();

// Tuchanka

export const me2_chapter_tuchanka = ch('Tuchanka')
  .hasMissions(
    m.me2_mission_tuchanka_urdnot_wrex,
    m.me2_mission_tuchanka_killing_pyjaks,
  )
  .build();
