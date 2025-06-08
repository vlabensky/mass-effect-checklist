import { m } from '../builders';

export const predicates = {
  isPrologueCompleted: () => me2_mission_prologue_freedoms_progress.isCompleted,
  isHorizonEnabled: () => me2_mission_dossier_warlord.isCompleted
    && me2_mission_dossier_archangel.isCompleted
    && me2_mission_dossier_the_professor.isCompleted
    && me2_mission_dossier_the_convict.isCompleted,
  isHorizonCompleted: () => me2_mission_horizon.isCompleted,
  isCollectorShipCompleted: () => me2_mission_collector_ship.isCompleted,
};

// Prologue

export const me2_mission_prologue_save_joker = m('Save Joker')
  .build();

export const me2_mission_prologue_awakening = m('Awakening')
  .availableWhen(() => me2_mission_prologue_save_joker.isCompleted)
  .build();

export const me2_mission_prologue_freedoms_progress = m('Freedom\'s Progress')
  .availableWhen(() => me2_mission_prologue_awakening.isCompleted)
  .build();

// Plot Missions

export const me2_mission_horizon = m('Horizon')
  .availableWhen(predicates.isHorizonEnabled)
  .withAdditionalInfo('This mission will be triggered automatically as soon as the player completes four main dossiers. So after recruiting Archangel, Jack, and Mordin Solus, as well as recovering Grunt in his tank from Korlus (waking up Grunt is not necessary), the player will be forced to play this mission.')
  .build();

export const me2_mission_collector_ship = m('Collector Ship')
  .availableWhen(predicates.isHorizonCompleted)
  .withAdditionalInfo('This mission will be triggered automatically as soon as the player completes any five missions after Horizon. Also there are additional conditions that can be found in the mission\'s Wiki article.')
  .build();

export const me2_mission_acquire_reaper_iff = m('Stop The Collectors: Acquire Reaper IFF')
  .availableWhen(predicates.isCollectorShipCompleted)
  .withAdditionalInfo('A countdown begins once the player completes this mission, with potentially dire consequences for the crew of the Normandy if Shepard delays too long in proceeding through the Omega 4 Relay.')
  .build();

export const me2_mission_await_iff_installation = m('Stop The Collectors: Await IFF Installation')
  .availableWhen(() => me2_mission_acquire_reaper_iff.isCompleted)
  .build();

export const me2_mission_use_omega4_relay = m('Stop The Collectors: Use Omega-4 Relay')
  .availableWhen(() => me2_mission_await_iff_installation.isCompleted)
  .build();

export const me2_mission_suicide_mission_infiltration = m('Suicide Mission: Infiltration')
  .availableWhen(() => me2_mission_use_omega4_relay.isCompleted)
  .build();

export const me2_mission_suicide_mission_the_long_walk = m('Suicide Mission: The Long Walk')
  .availableWhen(() => me2_mission_suicide_mission_infiltration.isCompleted)
  .build();

export const me2_mission_suicide_mission_final_battle = m('Suicide Mission: Final Battle')
  .availableWhen(() => me2_mission_suicide_mission_the_long_walk.isCompleted)
  .build();

// Normandy

export const me2_mission_normandy_fba_couplings = m('FBA Couplings')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_normandy_serrice_ice_brandy = m('Serrice Ice Brandy')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_normandy_special_ingredients = m('Special Ingredients')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_normandy_normandy_crash_site = m('Normandy Crash Site (DLC)')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

// Dossiers

export const me2_mission_dossier_master_thief = m('The Master Thief')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_dossier_veteran = m('The Veteran')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_dossier_warlord = m('The Warlord')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_archangel_datapad_recovered = m('Archangel: Datapad Recovered')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_dossier_archangel = m('Archangel')
  .availableWhen(predicates.isPrologueCompleted)
  .hasInnerMissions(me2_mission_archangel_datapad_recovered)
  .build();

export const me2_mission_the_professor_missing_assistant = m('The Professor: Missing Assistant')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_dossier_the_professor = m('The Professor')
  .availableWhen(predicates.isPrologueCompleted)
  .hasInnerMissions(me2_mission_the_professor_missing_assistant)
  .build();

export const me2_mission_dossier_the_convict = m('The Convict')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_the_assassin_salarian_family_data = m('The Assassin: Salarian Family Data')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_dossier_the_assassin = m('The Assassin')
  .availableWhen(predicates.isHorizonCompleted)
  .hasInnerMissions(me2_mission_the_assassin_salarian_family_data)
  .build();

export const me2_mission_the_justicar_smuggling_evidence = m('The Justicar: Smuggling Evidence')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_the_justicar_stolen_goods_found = m('The Justicar: Stolen Goods Found')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_dossier_the_justicar = m('The Justicar')
  .availableWhen(predicates.isHorizonCompleted)
  .hasInnerMissions(
    me2_mission_the_justicar_smuggling_evidence,
    me2_mission_the_justicar_stolen_goods_found,
  )
  .build();

export const me2_mission_dossier_tali = m('Tali')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

// Citadel

export const me2_mission_the_council = m('The Council')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_citadel_captain_bailey = m('Captain Bailey')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_citadel_crime_in_progress = m('Crime in Progress')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_citadel_krogan_sushi = m('Krogan Sushi')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

// Omega

export const me2_mission_omega_aria_t_loak = m('Aria T\'Loak')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_omega_batarian_bartender = m('Batarian Bartender')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_omega_struggling_quarian = m('Struggling Quarian')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_omega_the_patriarch = m('The Patriarch')
  .availableWhen(() => me2_mission_dossier_archangel.isCompleted || me2_mission_dossier_the_professor.isCompleted)
  .build();

export const me2_mission_omega_packages_for_ish = m('Packages for Ish')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

// N7 Assignments

export const me2_mission_n7_assignments_wrecked_merchant_freighter = m('Wrecked Merchant Freighter')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_n7_assignments_abandoned_research_station = m('Abandoned Research Station')
  .availableWhen(() => me2_mission_n7_assignments_wrecked_merchant_freighter.isCompleted)
  .build();

export const me2_mission_n7_assignments_hahne_kedar_facility = m('Hahne Kedar Facility')
  .availableWhen(() => me2_mission_n7_assignments_abandoned_research_station.isCompleted)
  .build();

export const me2_mission_n7_assignments_msv_estevanico = m('MSV Estevanico')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_n7_assignments_eclipse_smuggling_depot = m('Eclipse Smuggling Depot')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_n7_assignments_lost_operative = m('Lost Operative')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_n7_assignments_abandoned_mine = m('Abandoned Mine')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_n7_assignments_anomalous_weather_detected = m('Anomalous Weather Detected')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_n7_assignments_blood_pack_base = m('Blood Pack Base')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_n7_assignments_blood_pack_communications_relay = m('Blood Pack Communications Relay')
  .availableWhen(() => me2_mission_n7_assignments_blood_pack_base.isCompleted)
  .build();

export const me2_mission_n7_assignments_quarian_crash_site = m('Quarian Crash Site')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_n7_assignments_imminent_ship_crash = m('Imminent Ship Crash')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_n7_assignments_captured_mining_facility = m('Captured Mining Facility')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_n7_assignments_archeological_dig_site = m('Archeological Dig Site')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_n7_assignments_msv_strontium_mule = m('MSV Strontium Mule')
  .availableWhen(() => me2_mission_n7_assignments_archeological_dig_site.isCompleted)
  .build();

export const me2_mission_n7_assignments_blue_suns_base = m('Blue Suns Base')
  .availableWhen(() => me2_mission_n7_assignments_msv_strontium_mule.isCompleted)
  .build();

export const me2_mission_n7_assignments_javelin_missiles_launched = m('Javelin Missiles Launched')
  .availableWhen(() => me2_mission_n7_assignments_msv_strontium_mule.isCompleted)
  .build();

export const me2_mission_n7_assignments_endangered_research_station = m('Endangered Research Station')
  .availableWhen(predicates.isCollectorShipCompleted)
  .build();

export const me2_mission_n7_assignments_mining_the_canyon = m('Mining the Canyon')
  .availableWhen(predicates.isCollectorShipCompleted)
  .build();

// Project Firewalker

export const me2_mission_project_firewalker_rosalie_lost = m('Rosalie Lost')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_project_firewalker_geth_activity = m('Geth Activity/Incursion')
  .availableWhen(() => me2_mission_project_firewalker_rosalie_lost.isCompleted)
  .build();

export const me2_mission_project_firewalker_survey_sites_located = m('Survey Sites Located')
  .availableWhen(() => me2_mission_project_firewalker_rosalie_lost.isCompleted)
  .build();

export const me2_mission_project_firewalker_volcano_station = m('Volcano Station')
  .availableWhen(() => me2_mission_project_firewalker_rosalie_lost.isCompleted)
  .build();

export const me2_mission_project_firewalker_prothean_site = m('Prothean Site')
  .availableWhen(() => me2_mission_project_firewalker_volcano_station.isCompleted)
  .build();

// Project Overlord

export const me2_mission_project_overlord_investigate_project_overlord = m('Investigate Project Overlord')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_project_overlord_atlas_station = m('Atlas Station')
  .availableWhen(() => me2_mission_project_overlord_investigate_project_overlord.isCompleted)
  .build();

export const me2_mission_project_overlord_prometheus_station = m('Prometheus Station')
  .availableWhen(() => me2_mission_project_overlord_investigate_project_overlord.isCompleted)
  .build();

export const me2_mission_project_overlord_vulcan_station = m('Vulcan Station')
  .availableWhen(() => me2_mission_project_overlord_investigate_project_overlord.isCompleted)
  .build();

// Loyalty

export const me2_mission_loyalty_zaeed = m('Zaeed: The Price of Revenge')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_loyalty_kasumi = m('Kasumi: Stealing Memory')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_loyalty_grunt_rite_of_passage = m('Grunt: Rite of Passage')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_tuchanka_combustion_manifold = m('Tuchanka: Combustion Manifold')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_tuchanka_old_blood_missing_scout = m('Tuchanka: Old Blood: Missing Scout')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_loyalty_mordin_old_blood = m('Mordin: Old Blood')
  .availableWhen(predicates.isHorizonCompleted)
  .hasInnerMissions(
    me2_mission_tuchanka_combustion_manifold,
    me2_mission_tuchanka_old_blood_missing_scout,
  )
  .build();

export const me2_mission_citadel_found_forged_id = m('Citadel: Found Forged ID')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_loyalty_garrus_eye_for_an_eye = m('Garrus: Eye for an Eye')
  .availableWhen(predicates.isHorizonCompleted)
  .hasInnerMissions(
    me2_mission_citadel_found_forged_id,
  )
  .build();

export const me2_mission_loyalty_thane_sins_of_the_father = m('Thane: Sins of the Father')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_the_prodigal_lost_locket_found = m('Illium: The Prodigal: Lost Locket Found')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_loyalty_miranda_the_prodigal = m('Miranda: The Prodigal')
  .availableWhen(predicates.isHorizonCompleted)
  .hasInnerMissions(
    me2_mission_the_prodigal_lost_locket_found,
  )
  .build();

export const me2_mission_loyalty_jack_subject_zero = m('Jack: Subject Zero')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_loyalty_jacob_gift_of_greatness = m('Jacob: The Gift of Greatness')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_loyalty_samara_ardat_yakshi = m('Samara: The Ardat-Yakshi')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_loyalty_tali_treason = m('Tali: Treason')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_loyalty_legion_a_house_divided = m('Legion: A House Divided')
  .availableWhen(() => me2_mission_acquire_reaper_iff.isCompleted)
  .build();

// Illium

export const me2_mission_illium_liara_system_hacking = m('Liara: System Hacking')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_illium_liara_the_observer = m('Liara: The Observer')
  .availableWhen(() => me2_mission_illium_liara_system_hacking.isCompleted)
  .build();

export const me2_mission_illium_a_troublemaker = m('A Troublemaker')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_illium_blue_rose_of_illium = m('Blue Rose of Illium')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_illium_gianna_parasini = m('Gianna Parasini')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_illium_indentured_service = m('Indentured Service')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_illium_medical_scans = m('Medical Scans')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

// Tuchanka

export const me2_mission_tuchanka_urdnot_wrex = m('Urdnot Wrex')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_tuchanka_killing_pyjaks = m('Killing Pyjaks')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

// Shadow Broker

export const me2_mission_lair_of_the_shadow_broker = m('Lair of the Shadow Broker')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

// Arrival

export const me2_mission_arrival_rescue_dr_kenson = m('Rescue Dr. Kenson')
  .availableWhen(predicates.isHorizonCompleted)
  .build();
