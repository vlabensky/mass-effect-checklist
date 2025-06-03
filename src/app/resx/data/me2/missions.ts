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

// Citadel

export const me2_mission_citadel_the_council = m('The Council', 'Citadel:_The_Council', 'The_Council')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_citadel_captain_bailey = m('Captain Bailey', 'Citadel:_Captain_Bailey', 'Captain_Bailey')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_citadel_crime_in_progress = m('Crime in Progress', 'Citadel:_Crime_in_Progress', 'Crime_in_Progress')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_citadel_krogan_sushi = m('Krogan Sushi', 'Citadel:_Krogan_Sushi', 'Krogan_Sushi')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

// Omega

export const me2_mission_omega_aria_t_loak = m('Aria T\'Loak', 'Omega:_Aria_T\'Loak', 'Aria_T\'Loak')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_omega_batarian_bartender = m('Batarian Bartender', 'Omega:_Batarian_Bartender', 'Batarian_Bartender')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_omega_struggling_quarian = m('Struggling Quarian', 'Omega:_Struggling_Quarian', 'Struggling_Quarian')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

// N7 Assignments

export const me2_mission_n7_assignments_wrecked_merchant_freighter = m('Wrecked Merchant Freighter', 'N7_Assignments:_Wrecked_Merchant_Freighter', 'Wrecked_Merchant_Freighter')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_n7_assignments_abandoned_research_station = m('Abandoned Research Station', 'N7_Assignments:_Abandoned_Research_Station', 'Abandoned_Research_Station')
  .availableWhen(() => me2_mission_n7_assignments_wrecked_merchant_freighter.isCompleted)
  .build();

export const me2_mission_n7_assignments_hahne_kedar_facility = m('Hahne Kedar Facility', 'N7_Assignments:_Hahne_Kedar_Facility', 'Hahne_Kedar_Facility')
  .availableWhen(() => me2_mission_n7_assignments_abandoned_research_station.isCompleted)
  .build();

export const me2_mission_n7_assignments_msv_estevanico = m('MSV Estevanico', 'N7_Assignments:_MSV_Estevanico', 'MSV_Estevanico')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_n7_assignments_eclipse_smuggling_depot = m('Eclipse Smuggling Depot', 'N7_Assignments:_Eclipse_Smuggling_Depot', 'Eclipse_Smuggling_Depot')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_n7_assignments_lost_operative = m('Lost Operative', 'N7_Assignments:_Lost_Operative', 'Lost_Operative')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

// Project Firewalker

export const me2_mission_project_firewalker_rosalie_lost = m('Rosalie Lost', 'Project_Firewalker:_Rosalie_Lost', 'Rosalie_Lost')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_project_firewalker_geth_activity = m('Geth Activity/Incursion', 'Project_Firewalker:_Geth_Activity_Incursion', 'Geth_Activity_Incursion')
  .availableWhen(() => me2_mission_project_firewalker_rosalie_lost.isCompleted)
  .build();

export const me2_mission_project_firewalker_survey_sites_located = m('Survey Sites Located', 'Project_Firewalker:_Survey_Sites_Located', 'Survey_Sites_Located')
  .availableWhen(() => me2_mission_project_firewalker_rosalie_lost.isCompleted)
  .build();

export const me2_mission_project_firewalker_volcano_station = m('Volcano Station', 'Project_Firewalker:_Volcano_Station', 'Volcano_Station')
  .availableWhen(() => me2_mission_project_firewalker_rosalie_lost.isCompleted)
  .build();

export const me2_mission_project_firewalker_prothean_site = m('Prothean Site', 'Project_Firewalker:_Prothean_Site', 'Prothean_Site')
  .availableWhen(() => me2_mission_project_firewalker_volcano_station.isCompleted)
  .build();

// Project Overlord

export const me2_mission_project_overlord_investigate_project_overlord = m('Investigate Project Overlord', 'Project_Overlord:_Investigate_Project_Overlord', 'Investigate_Project_Overlord')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_project_overlord_atlas_station = m('Atlas Station', 'Project_Overlord:_Atlas_Station', 'Atlas_Station')
  .availableWhen(() => me2_mission_project_overlord_investigate_project_overlord.isCompleted)
  .build();

export const me2_mission_project_overlord_prometheus_station = m('Prometheus Station', 'Project_Overlord:_Prometheus_Station', 'Prometheus_Station')
  .availableWhen(() => me2_mission_project_overlord_investigate_project_overlord.isCompleted)
  .build();

export const me2_mission_project_overlord_vulcan_station = m('Vulcan Station', 'Project_Overlord:_Vulcan_Station', 'Vulcan_Station')
  .availableWhen(() => me2_mission_project_overlord_investigate_project_overlord.isCompleted)
  .build();
