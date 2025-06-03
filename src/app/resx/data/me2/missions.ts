import { m } from '../builders';

export const predicates = {
  isPrologueCompleted: () => me2_mission_prologue_freedoms_progress.isCompleted,
  isHorizonEnabled: () => me2_mission_dossier_warlord.isCompleted
    && me2_mission_dossier_archangel.isCompleted
    && me2_mission_dossier_the_professor.isCompleted
    && me2_mission_dossier_the_convict.isCompleted,
  isHorizonCompleted: () => me2_mission_horizon.isCompleted,
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

// Plot Missions

export const me2_mission_the_council = m('The Council', 'Plot:_The_Council', 'The_Council')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_horizon = m('Horizon', 'Horizon:_Horizon', 'Horizon')
  .availableWhen(predicates.isHorizonEnabled)
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

// Dossiers

export const me2_mission_dossier_master_thief = m('The Master Thief', 'Dossier:_The_Master_Thief', 'The_Master_Thief')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_dossier_veteran = m('The Veteran', 'Dossier:_The_Veteran', 'The_Veteran')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_dossier_warlord = m('The Warlord', 'Dossier:_The_Warlord', 'The_Warlord')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_archangel_datapad_recovered = m('Archangel: Datapad Recovered', 'Archangel:_Datapad_Recovered', 'Archangel_Datapad_Recovered')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_dossier_archangel = m('Archangel', 'Dossier:_Archangel', 'Archangel')
  .availableWhen(predicates.isPrologueCompleted)
  .hasInnerMissions(me2_mission_archangel_datapad_recovered)
  .build();

export const me2_mission_the_professor_missing_assistant = m('The Professor: Missing Assistant', 'The_Professor:_Missing_Assistant', 'The_Professor_Missing_Assistant')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_dossier_the_professor = m('The Professor', 'Dossier:_The_Professor', 'The_Professor')
  .availableWhen(predicates.isPrologueCompleted)
  .hasInnerMissions(me2_mission_the_professor_missing_assistant)
  .build();

export const me2_mission_dossier_the_convict = m('The Convict', 'Dossier:_The_Convict', 'The_Convict')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_the_assassin_salarian_family_data = m('The Assassin: Salarian Family Data', 'Dossier:_The_Assassin:_Salarian_Family_Data', 'The_Assassin_Salarian_Family_Data')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_dossier_the_assassin = m('The Assassin', 'Dossier:_The_Assassin', 'The_Assassin')
  .availableWhen(predicates.isHorizonCompleted)
  .hasInnerMissions(me2_mission_the_assassin_salarian_family_data)
  .build();

export const me2_mission_the_justicar_smuggling_evidence = m('The Justicar: Smuggling Evidence', 'Dossier:_The_Justicar:_Smuggling_Evidence', 'The_Justicar_Smuggling_Evidence')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_the_justicar_stolen_goods_found = m('The Justicar: Stolen Goods Found', 'Dossier:_The_Justicar:_Stolen_Goods_Found', 'The_Justicar_Stolen_Goods_Found')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_dossier_the_justicar = m('The Justicar', 'Dossier:_The_Justicar', 'The_Justicar')
  .availableWhen(predicates.isHorizonCompleted)
  .hasInnerMissions(
    me2_mission_the_justicar_smuggling_evidence,
    me2_mission_the_justicar_stolen_goods_found,
  )
  .build();

export const me2_mission_dossier_tali = m('Tali', 'Dossier:_Tali', 'Tali')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

// Citadel

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

export const me2_mission_omega_the_patriarch = m('The Patriarch', 'Omega:_The_Patriarch', 'The_Patriarch')
  .availableWhen(() => me2_mission_dossier_archangel.isCompleted || me2_mission_dossier_the_professor.isCompleted)
  .build();

export const me2_mission_omega_packages_for_ish = m('Packages for Ish', 'Omega:_Packages_for_Ish', 'Packages_for_Ish')
  .availableWhen(predicates.isHorizonCompleted)
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

export const me2_mission_n7_assignments_abandoned_mine = m('Abandoned Mine', 'N7_Assignments:_Abandoned_Mine', 'Abandoned_Mine')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_n7_assignments_anomalous_weather_detected = m('Anomalous Weather Detected', 'N7_Assignments:_Anomalous_Weather_Detected', 'Anomalous_Weather_Detected')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_n7_assignments_blood_pack_base = m('Blood Pack Base', 'N7_Assignments:_Blood_Pack_Base', 'Blood_Pack_Base')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_n7_assignments_blood_pack_communications_relay = m('Blood Pack Communications Relay', 'N7_Assignments:_Blood_Pack_Communications_Relay', 'Blood_Pack_Communications_Relay')
  .availableWhen(() => me2_mission_n7_assignments_blood_pack_base.isCompleted)
  .build();

export const me2_mission_n7_assignments_quarian_crash_site = m('Quarian Crash Site', 'N7_Assignments:_Quarian_Crash_Site', 'Quarian_Crash_Site')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_n7_assignments_imminent_ship_crash = m('Imminent Ship Crash', 'N7_Assignments:_Imminent_Ship_Crash', 'Imminent_Ship_Crash')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_n7_assignments_captured_mining_facility = m('Captured Mining Facility', 'N7_Assignments:_Captured_Mining_Facility', 'Captured_Mining_Facility')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_n7_assignments_archeological_dig_site = m('Archeological Dig Site', 'N7_Assignments:_Archeological_Dig_Site', 'Archeological_Dig_Site')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_n7_assignments_msv_strontium_mule = m('MSV Strontium Mule', 'N7_Assignments:_MSV_Strontium_Mule', 'MSV_Strontium_Mule')
  .availableWhen(() => me2_mission_n7_assignments_archeological_dig_site.isCompleted)
  .build();

export const me2_mission_n7_assignments_blue_suns_base = m('Blue Suns Base', 'N7_Assignments:_Blue_Suns_Base', 'Blue_Suns_Base')
  .availableWhen(() => me2_mission_n7_assignments_msv_strontium_mule.isCompleted)
  .build();

export const me2_mission_n7_assignments_javelin_missiles_launched = m('Javelin Missiles Launched', 'N7_Assignments:_Javelin_Missiles_Launched', 'Javelin_Missiles_Launched')
  .availableWhen(() => me2_mission_n7_assignments_msv_strontium_mule.isCompleted)
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

// Loyalty

export const me2_mission_loyalty_zaeed = m('Zaeed: The Price of Revenge', 'Zaeed_The_Price_of_Revenge', 'Zaeed_The_Price_of_Revenge')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_loyalty_kasumi = m('Kasumi: Stealing Memory', 'Kasumi_Stealing_Memory', 'Kasumi_Stealing_Memory')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_loyalty_grunt_rite_of_passage = m('Grunt: Rite of Passage', 'Grunt_Rite_of_Passage', 'Grunt_Rite_of_Passage')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_combustion_manifold = m('Combustion Manifold', 'Combustion_Manifold', 'Combustion_Manifold')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_mordin_old_blood_missing_scout = m('Mordin: Old Blood: Missing Scout', 'Mordin:_Old_Blood:_Missing_Scout', 'Mordin_Old_Blood_Missing_Scout')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_loyalty_mordin_old_blood = m('Mordin: Old Blood', 'Mordin:_Old_Blood', 'Mordin_Old_Blood')
  .availableWhen(predicates.isHorizonCompleted)
  .hasInnerMissions(
    me2_mission_combustion_manifold,
    me2_mission_mordin_old_blood_missing_scout,
  )
  .build();

export const me2_mission_citadel_found_forged_id = m('Citadel: Found Forged ID', 'Citadel:_Found_Forged_ID', 'Citadel_Found_Forged_ID')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_loyalty_garrus_eye_for_an_eye = m('Garrus: Eye for an Eye', 'Garrus:_Eye_for_an_Eye', 'Garrus_Eye_for_an_Eye')
  .availableWhen(predicates.isHorizonCompleted)
  .hasInnerMissions(
    me2_mission_citadel_found_forged_id,
  )
  .build();

export const me2_mission_loyalty_thane_sins_of_the_father = m('Thane: Sins of the Father', 'Thane:_Sins_of_the_Father', 'Thane_Sins_of_the_Father')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_the_prodigal_lost_locket_found = m('The Prodigal: Lost Locket Found', 'The_Prodigal:_Lost_Locket_Found', 'The_Prodigal_Lost_Locket_Found')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_loyalty_miranda_the_prodigal = m('Miranda: The Prodigal', 'Miranda:_The_Prodigal', 'Miranda_The_Prodigal')
  .availableWhen(predicates.isHorizonCompleted)
  .hasInnerMissions(
    me2_mission_the_prodigal_lost_locket_found,
  )
  .build();

export const me2_mission_loyalty_jack_subject_zero = m('Jack: Subject Zero', 'Jack:_Subject_Zero', 'Jack_Subject_Zero')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_loyalty_jacob_gift_of_greatness = m('Jacob: The Gift of Greatness', 'Jacob:_The_Gift_of_Greatness', 'Jacob_Gift_of_Greatness')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_loyalty_samara_ardat_yakshi = m('Samara: The Ardat-Yakshi', 'Samara:_The_Ardat_Yakshi', 'Samara_Ardat_Yakshi')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_loyalty_tali_treason = m('Tali: Treason', 'Tali:_Treason', 'Tali_Treason')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

// Illium

export const me2_mission_illium_liara_system_hacking = m('Liara: System Hacking', 'Liara:_System_Hacking', 'Liara_System_Hacking')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_illium_liara_the_observer = m('Liara: The Observer', 'Liara:_The_Observer', 'Liara_The_Observer')
  .availableWhen(() => me2_mission_illium_liara_system_hacking.isCompleted)
  .build();

export const me2_mission_illium_a_troublemaker = m('A Troublemaker', 'A_Troublemaker', 'A_Troublemaker')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_illium_blue_rose_of_illium = m('Blue Rose of Illium', 'Illium:_Blue_Rose_of_Illium', 'Blue_Rose_of_Illium')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_illium_gianna_parasini = m('Gianna Parasini', 'Illium:_Gianna_Parasini', 'Gianna_Parasini')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_illium_indentured_service = m('Indentured Service', 'Illium:_Indentured_Service', 'Indentured_Service')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_illium_medical_scans = m('Medical Scans', 'Illium:_Medical_Scans', 'Medical_Scans')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

// Tuchanka

export const me2_mission_tuchanka_urdnot_wrex = m('Urdnot Wrex', 'Tuchanka:_Urdnot_Wrex', 'Urdnot_Wrex')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_tuchanka_killing_pyjaks = m('Killing Pyjaks', 'Tuchanka:_Killing_Pyjaks', 'Killing_Pyjaks')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

// Shadow Broker

export const me2_mission_lair_of_the_shadow_broker = m('Lair of the Shadow Broker', 'Lair_of_the_Shadow_Broker', 'Lair_of_the_Shadow_Broker')
  .availableWhen(predicates.isHorizonCompleted)
  .build();
