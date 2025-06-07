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

export const me2_mission_prologue_save_joker = m('Save Joker', 'Prologue:_Save_Joker', 'Prologue_-_Save_Joker')
  .build();

export const me2_mission_prologue_awakening = m('Awakening', 'Prologue:_Awakening', 'Prologue_-_Awakening')
  .availableWhen(() => me2_mission_prologue_save_joker.isCompleted)
  .build();

export const me2_mission_prologue_freedoms_progress = m('Freedom\'s Progress', 'Freedom%27s_Progress_(mission)', 'Freedom%27s_Progress')
  .availableWhen(() => me2_mission_prologue_awakening.isCompleted)
  .build();

// Plot Missions

export const me2_mission_horizon = m('Horizon', 'Horizon_(mission)', 'Horizon')
  .availableWhen(predicates.isHorizonEnabled)
  .withAdditionalInfo('This mission will be triggered automatically as soon as the player completes four main dossiers. So after recruiting Archangel, Jack, and Mordin Solus, as well as recovering Grunt in his tank from Korlus (waking up Grunt is not necessary), the player will be forced to play this mission.')
  .build();

export const me2_mission_collector_ship = m('Collector Ship', 'Collector_Ship_(mission)', 'Collector_Ship')
  .availableWhen(predicates.isHorizonCompleted)
  .withAdditionalInfo('This mission will be triggered automatically as soon as the player completes any five missions after Horizon. Also there are additional conditions that can be found in the mission\'s Wiki article.')
  .build();

export const me2_mission_acquire_reaper_iff = m('Stop The Collectors: Acquire Reaper IFF', 'Stop_the_Collectors#Acquire_Reaper_IFF', 'The_Reaper_IFF')
  .availableWhen(predicates.isCollectorShipCompleted)
  .withAdditionalInfo('A countdown begins once the player completes this mission, with potentially dire consequences for the crew of the Normandy if Shepard delays too long in proceeding through the Omega 4 Relay.')
  .build();

export const me2_mission_await_iff_installation = m('Stop The Collectors: Await IFF Installation', 'Stop_the_Collectors#Await_IFF_Installation', 'The_Reaper_IFF#Post-Reaper_IFF_Roadmap')
  .availableWhen(() => me2_mission_acquire_reaper_iff.isCompleted)
  .build();

export const me2_mission_use_omega4_relay = m('Stop The Collectors: Use Omega-4 Relay', 'Stop_the_Collectors#Use_Omega_4_Relay', 'Tartarus_Debris_Field')
  .availableWhen(() => me2_mission_await_iff_installation.isCompleted)
  .build();

export const me2_mission_suicide_mission_infiltration = m('Suicide Mission: Infiltration', 'Collector_Base:_Infiltration', 'Base_Infiltration')
  .availableWhen(() => me2_mission_use_omega4_relay.isCompleted)
  .build();

export const me2_mission_suicide_mission_the_long_walk = m('Suicide Mission: The Long Walk', 'Collector_Base:_The_Long_Walk', 'The_Long_Walk')
  .availableWhen(() => me2_mission_suicide_mission_infiltration.isCompleted)
  .build();

export const me2_mission_suicide_mission_final_battle = m('Suicide Mission: Final Battle', 'Collector_Base:_Final_Battle', 'The_Reaper_Finale')
  .availableWhen(() => me2_mission_suicide_mission_the_long_walk.isCompleted)
  .build();

// Normandy

export const me2_mission_normandy_fba_couplings = m('FBA Couplings', 'Normandy:_FBA_Couplings', 'Normandy_-_FBA_Couplings')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_normandy_serrice_ice_brandy = m('Serrice Ice Brandy', 'Normandy:_Serrice_Ice_Brandy', 'Normandy_-_Serrice_Ice_Brandy')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_normandy_special_ingredients = m('Special Ingredients', 'Normandy:_Special_Ingredients', 'Normandy_-_Special_Ingredients')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_normandy_normandy_crash_site = m('Normandy Crash Site (DLC)', 'Normandy_Crash_Site_(assignment)', 'Normandy_Crash_Site')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

// Dossiers

export const me2_mission_dossier_master_thief = m('The Master Thief', 'Dossier:_The_Master_Thief', 'Kasumi:_Stolen_Memory#Dossier:_The_Thief')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_dossier_veteran = m('The Veteran', 'Dossier:_The_Veteran', 'Zaeed:_The_Price_of_Revenge#Dossier:_The_Veteran')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_dossier_warlord = m('The Warlord', 'Dossier:_The_Warlord', 'Dossier_-_The_Warlord')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_archangel_datapad_recovered = m('Archangel: Datapad Recovered', 'Omega:_Archangel:_Datapad_Recovered', 'Omega_-_Archangel:_Datapad_Recovered')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_dossier_archangel = m('Archangel', 'Dossier:_Archangel', 'Dossier_-_Archangel')
  .availableWhen(predicates.isPrologueCompleted)
  .hasInnerMissions(me2_mission_archangel_datapad_recovered)
  .build();

export const me2_mission_the_professor_missing_assistant = m('The Professor: Missing Assistant', 'Omega:_The_Professor:_Missing_Assistant', 'Omega_-_The_Professor:_Missing_Assistant')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_dossier_the_professor = m('The Professor', 'Dossier:_The_Professor', 'Dossier_-_The_Professor')
  .availableWhen(predicates.isPrologueCompleted)
  .hasInnerMissions(me2_mission_the_professor_missing_assistant)
  .build();

export const me2_mission_dossier_the_convict = m('The Convict', 'Dossier:_The_Convict', 'Dossier_-_The_Convict')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_the_assassin_salarian_family_data = m('The Assassin: Salarian Family Data', 'Illium:_The_Assassin:_Salarian_Family_Data', 'Illium_-_The_Assassin:_Salarian_Family_Data')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_dossier_the_assassin = m('The Assassin', 'Dossier:_The_Assassin', 'Dossier_-_The_Assassin')
  .availableWhen(predicates.isHorizonCompleted)
  .hasInnerMissions(me2_mission_the_assassin_salarian_family_data)
  .build();

export const me2_mission_the_justicar_smuggling_evidence = m('The Justicar: Smuggling Evidence', 'Illium:_The_Justicar:_Smuggling_Evidence', 'Illium_-_The_Justicar:_Smuggling_Evidence')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_the_justicar_stolen_goods_found = m('The Justicar: Stolen Goods Found', 'Illium:_The_Justicar:_Stolen_Goods_Found', 'Illium_-_The_Justicar:_Stolen_Goods_Found')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_dossier_the_justicar = m('The Justicar', 'Dossier:_The_Justicar', 'Dossier_-_The_Justicar')
  .availableWhen(predicates.isHorizonCompleted)
  .hasInnerMissions(
    me2_mission_the_justicar_smuggling_evidence,
    me2_mission_the_justicar_stolen_goods_found,
  )
  .build();

export const me2_mission_dossier_tali = m('Tali', 'Dossier:_Tali', 'Dossier_-_Tali')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

// Citadel

export const me2_mission_the_council = m('The Council', 'Citadel:_The_Council', 'The_Citadel_-_The_Council')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_citadel_captain_bailey = m('Captain Bailey', 'Citadel:_Captain_Bailey', 'The_Citadel_-_The_Council_and_Shopping#Captain_Bailey')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_citadel_crime_in_progress = m('Crime in Progress', 'Citadel:_Crime_in_Progress', 'Citadel_-_Crime_in_Progress')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_citadel_krogan_sushi = m('Krogan Sushi', 'Citadel:_Krogan_Sushi', 'Citadel_-_Krogan_Sushi')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

// Omega

export const me2_mission_omega_aria_t_loak = m('Aria T\'Loak', 'Omega:_Aria_T%27Loak', 'Afterlife_Side_Quests')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_omega_batarian_bartender = m('Batarian Bartender', 'Omega:_Batarian_Bartender', 'Omega_-_Batarian_Bartender')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_omega_struggling_quarian = m('Struggling Quarian', 'Omega:_Struggling_Quarian', 'Omega_-_Struggling_Quarian')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_omega_the_patriarch = m('The Patriarch', 'Omega:_The_Patriarch', 'Omega_-_Patriarch')
  .availableWhen(() => me2_mission_dossier_archangel.isCompleted || me2_mission_dossier_the_professor.isCompleted)
  .build();

export const me2_mission_omega_packages_for_ish = m('Packages for Ish', 'Omega:_Packages_for_Ish', 'Omega_-_Packages_for_Ish')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

// N7 Assignments

export const me2_mission_n7_assignments_wrecked_merchant_freighter = m('Wrecked Merchant Freighter', 'N7:_Wrecked_Merchant_Freighter', 'N7_-_Wrecked_Merchant_Freighter')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_n7_assignments_abandoned_research_station = m('Abandoned Research Station', 'N7:_Abandoned_Research_Station', 'N7_-_Abandoned_Research_Station')
  .availableWhen(() => me2_mission_n7_assignments_wrecked_merchant_freighter.isCompleted)
  .build();

export const me2_mission_n7_assignments_hahne_kedar_facility = m('Hahne Kedar Facility', 'N7:_Hahne-Kedar_Facility', 'N7_-_Hahne-Kedar_Facility')
  .availableWhen(() => me2_mission_n7_assignments_abandoned_research_station.isCompleted)
  .build();

export const me2_mission_n7_assignments_msv_estevanico = m('MSV Estevanico', 'N7:_MSV_Estevanico', 'N7_-_MSV_Estevanico')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_n7_assignments_eclipse_smuggling_depot = m('Eclipse Smuggling Depot', 'N7:_Eclipse_Smuggling_Depot', 'N7_-_Eclipse_Smuggling_Depot')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_n7_assignments_lost_operative = m('Lost Operative', 'N7:_Lost_Operative', 'N7_-_Lost_Operative')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_n7_assignments_abandoned_mine = m('Abandoned Mine', 'N7:_Abandoned_Mine', 'N7_-_Abandoned_Mine')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_n7_assignments_anomalous_weather_detected = m('Anomalous Weather Detected', 'N7:_Anomalous_Weather_Detected', 'N7_-_Anomalous_Weather_Detected')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_n7_assignments_blood_pack_base = m('Blood Pack Base', 'N7:_Blood_Pack_Base', 'N7_-_Blood_Pack_Base')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_n7_assignments_blood_pack_communications_relay = m('Blood Pack Communications Relay', 'N7:_Blood_Pack_Communications_Relay', 'N7_-_Blood_Pack_Communications_Relay')
  .availableWhen(() => me2_mission_n7_assignments_blood_pack_base.isCompleted)
  .build();

export const me2_mission_n7_assignments_quarian_crash_site = m('Quarian Crash Site', 'N7:_Quarian_Crash_Site', 'N7_-_Quarian_Crash_Site')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_n7_assignments_imminent_ship_crash = m('Imminent Ship Crash', 'N7:_Imminent_Ship_Crash', 'N7_-_Imminent_Ship_Crash')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_n7_assignments_captured_mining_facility = m('Captured Mining Facility', 'N7_Assignments:_Captured_Mining_Facility', 'Captured_Mining_Facility')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_n7_assignments_archeological_dig_site = m('Archeological Dig Site', 'N7:_Archeological_Dig_Site', 'N7_-_Archaeological_Dig_Site')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_n7_assignments_msv_strontium_mule = m('MSV Strontium Mule', 'N7:_MSV_Strontium_Mule', 'N7_-_MSV_Strontium_Mule')
  .availableWhen(() => me2_mission_n7_assignments_archeological_dig_site.isCompleted)
  .build();

export const me2_mission_n7_assignments_blue_suns_base = m('Blue Suns Base', 'N7:_Blue_Suns_Base', 'N7_-_Blue_Suns_Base')
  .availableWhen(() => me2_mission_n7_assignments_msv_strontium_mule.isCompleted)
  .build();

export const me2_mission_n7_assignments_javelin_missiles_launched = m('Javelin Missiles Launched', 'N7:_Javelin_Missiles_Launched', 'N7_-_Javelin_Missiles_Launched')
  .availableWhen(() => me2_mission_n7_assignments_msv_strontium_mule.isCompleted)
  .build();

export const me2_mission_n7_assignments_endangered_research_station = m('Endangered Research Station', 'N7:_Endangered_Research_Station', 'N7_-_Endangered_Research_Station')
  .availableWhen(predicates.isCollectorShipCompleted)
  .build();

export const me2_mission_n7_assignments_mining_the_canyon = m('Mining the Canyon', 'N7:_Mining_the_Canyon', 'N7_-_Mining_the_Canyon')
  .availableWhen(predicates.isCollectorShipCompleted)
  .build();

// Project Firewalker

export const me2_mission_project_firewalker_rosalie_lost = m('Rosalie Lost', 'Project_Firewalker:_Rosalie_Lost', 'Project_Firewalker:_Rosalie_Lost')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_project_firewalker_geth_activity = m('Geth Activity/Incursion', 'Project_Firewalker:_Geth_Incursion', 'Project_Firewalker:_Geth_Incursion')
  .availableWhen(() => me2_mission_project_firewalker_rosalie_lost.isCompleted)
  .build();

export const me2_mission_project_firewalker_survey_sites_located = m('Survey Sites Located', 'Project_Firewalker:_Survey_Sites_Located', 'Project_Firewalker:_Survey_Sites_Located')
  .availableWhen(() => me2_mission_project_firewalker_rosalie_lost.isCompleted)
  .build();

export const me2_mission_project_firewalker_volcano_station = m('Volcano Station', 'Project_Firewalker:_Volcano_Station', 'Project_Firewalker:_Volcano_Station')
  .availableWhen(() => me2_mission_project_firewalker_rosalie_lost.isCompleted)
  .build();

export const me2_mission_project_firewalker_prothean_site = m('Prothean Site', 'Project_Firewalker:_Prothean_Site', 'Project_Firewalker:_Prothean_Site')
  .availableWhen(() => me2_mission_project_firewalker_volcano_station.isCompleted)
  .build();

// Project Overlord

export const me2_mission_project_overlord_investigate_project_overlord = m('Investigate Project Overlord', 'Overlord_(assignment)', 'Overlord')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_project_overlord_atlas_station = m('Atlas Station', 'Overlord:_Atlas_Station', 'Overlord#Atlas_Station')
  .availableWhen(() => me2_mission_project_overlord_investigate_project_overlord.isCompleted)
  .build();

export const me2_mission_project_overlord_prometheus_station = m('Prometheus Station', 'Overlord:_Prometheus_Station', 'Overlord#Prometheus_Station')
  .availableWhen(() => me2_mission_project_overlord_investigate_project_overlord.isCompleted)
  .build();

export const me2_mission_project_overlord_vulcan_station = m('Vulcan Station', 'Overlord:_Vulcan_Station', 'Overlord#Vulcan_Station')
  .availableWhen(() => me2_mission_project_overlord_investigate_project_overlord.isCompleted)
  .build();

// Loyalty

export const me2_mission_loyalty_zaeed = m('Zaeed: The Price of Revenge', 'Zaeed:_The_Price_of_Revenge', 'Zaeed:_The_Price_of_Revenge')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_loyalty_kasumi = m('Kasumi: Stealing Memory', 'Kasumi:_Stealing_Memory', 'Kasumi:_Stolen_Memory')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me2_mission_loyalty_grunt_rite_of_passage = m('Grunt: Rite of Passage', 'Grunt:_Rite_of_Passage', 'Grunt_-_Rite_of_Passage')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_tuchanka_combustion_manifold = m('Tuchanka: Combustion Manifold', 'Tuchanka:_Combustion_Manifold', 'Tuchanka_-_Combustion_Manifold')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_tuchanka_old_blood_missing_scout = m('Tuchanka: Old Blood: Missing Scout', 'Tuchanka:_Old_Blood:_Missing_Scout', 'Tuchanka_-_Old_Blood:_Missing_Scout')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_loyalty_mordin_old_blood = m('Mordin: Old Blood', 'Mordin:_Old_Blood', 'Mordin_-_Old_Blood')
  .availableWhen(predicates.isHorizonCompleted)
  .hasInnerMissions(
    me2_mission_tuchanka_combustion_manifold,
    me2_mission_tuchanka_old_blood_missing_scout,
  )
  .build();

export const me2_mission_citadel_found_forged_id = m('Citadel: Found Forged ID', 'Citadel:_Found_Forged_ID', 'Citadel_-_Found_Forged_ID')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_loyalty_garrus_eye_for_an_eye = m('Garrus: Eye for an Eye', 'Garrus:_Eye_for_an_Eye', 'Garrus_-_Eye_for_an_Eye')
  .availableWhen(predicates.isHorizonCompleted)
  .hasInnerMissions(
    me2_mission_citadel_found_forged_id,
  )
  .build();

export const me2_mission_loyalty_thane_sins_of_the_father = m('Thane: Sins of the Father', 'Thane:_Sins_of_the_Father', 'Thane_-_Sins_of_the_Father')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_the_prodigal_lost_locket_found = m('Illium: The Prodigal: Lost Locket Found', 'Illium:_The_Prodigal:_Lost_Locket_Found', 'Illium_-_The_Prodigal:_Lost_Locket_Found')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_loyalty_miranda_the_prodigal = m('Miranda: The Prodigal', 'Miranda:_The_Prodigal', 'Miranda_-_The_Prodigal')
  .availableWhen(predicates.isHorizonCompleted)
  .hasInnerMissions(
    me2_mission_the_prodigal_lost_locket_found,
  )
  .build();

export const me2_mission_loyalty_jack_subject_zero = m('Jack: Subject Zero', 'Jack:_Subject_Zero', 'Jack_-_Subject_Zero')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_loyalty_jacob_gift_of_greatness = m('Jacob: The Gift of Greatness', 'Jacob:_The_Gift_of_Greatness', 'Jacob_-_The_Gift_of_Greatness')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_loyalty_samara_ardat_yakshi = m('Samara: The Ardat-Yakshi', 'Samara:_The_Ardat-Yakshi', 'Samara_-_The_Ardat-Yakshi')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_loyalty_tali_treason = m('Tali: Treason', 'Tali:_Treason', 'Tali_-_Treason')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_loyalty_legion_a_house_divided = m('Legion: A House Divided', 'Legion:_A_House_Divided', 'Legion_-_A_House_Divided')
  .availableWhen(() => me2_mission_acquire_reaper_iff.isCompleted)
  .build();

// Illium

export const me2_mission_illium_liara_system_hacking = m('Liara: System Hacking', 'Illium:_Liara:_System_Hacking', 'Illium_-_Liara:_System_Hacking')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_illium_liara_the_observer = m('Liara: The Observer', 'Illium:_Liara:_The_Observer', 'Illium_-_Liara:_The_Observer')
  .availableWhen(() => me2_mission_illium_liara_system_hacking.isCompleted)
  .build();

export const me2_mission_illium_a_troublemaker = m('A Troublemaker', 'Illium:_Conrad_Verner', 'Illium_Conrad_Verner')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_illium_blue_rose_of_illium = m('Blue Rose of Illium', 'Illium:_Blue_Rose_of_Illium', 'Illium_-_Blue_Rose_of_Illium')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_illium_gianna_parasini = m('Gianna Parasini', 'Illium:_Gianna_Parasini', 'Illium_-_Gianna_Parasini')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_illium_indentured_service = m('Indentured Service', 'Illium:_Indentured_Service', 'Illium_-_Indentured_Service')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_illium_medical_scans = m('Medical Scans', 'Illium:_Medical_Scans', 'Illium_-_Medical_Scans')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

// Tuchanka

export const me2_mission_tuchanka_urdnot_wrex = m('Urdnot Wrex', 'Tuchanka:_Urdnot_Wrex', 'Tuchanka_-_Shopping_and_Side_Quests#Urdnot_Throne')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

export const me2_mission_tuchanka_killing_pyjaks = m('Killing Pyjaks', 'Tuchanka:_Killing_Pyjaks', 'Tuchanka_-_Killing_Pyjaks')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

// Shadow Broker

export const me2_mission_lair_of_the_shadow_broker = m('Lair of the Shadow Broker', 'Lair_of_the_Shadow_Broker', 'Lair_of_the_Shadow_Broker')
  .availableWhen(predicates.isHorizonCompleted)
  .build();

// Arrival

export const me2_mission_arrival_rescue_dr_kenson = m('Rescue Dr. Kenson', 'Arrival_(assignment)', 'Arrival')
  .availableWhen(predicates.isHorizonCompleted)
  .build();
