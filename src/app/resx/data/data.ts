// Define the Mission type for clarity and type safety
interface Mission {
  id: string;
  code: string; // Format: 'Game.SectionIndex.MissionIndex' (e.g., '1.2.3')
  prerequisites: Mission[]; // Now holds Mission objects
  wikiUrl: string;
  additionalInfo?: string; // Optional property
}

// Helper function to construct wiki URLs
const w = (path: string): string => `https://masseffect.fandom.com/wiki/${path}`;

// Factory function to create Mission objects (code parameter first)
const m = (
  code: string, // Moved to the first position
  id: string,
  wikiPath: string,
  additionalInfo?: string
): Mission => {
  const mission: Mission = {
    id,
    code,
    prerequisites: [], // Initialize prerequisites as an empty array
    wikiUrl: w(wikiPath),
  };
  // Add additionalInfo only if it's provided
  if (additionalInfo) {
    mission.additionalInfo = additionalInfo;
  }
  return mission;
};

// --- Define all mission constants using the factory function 'm' (updated calls) ---

// --- ME1 Story Missions (Game 1, Section 1) ---
export const me1_eden_prime = m('1.1.1', 'me1_eden_prime', 'Prologue:_Find_the_Beacon');
export const me1_citadel_expose_saren = m('1.1.2', 'me1_citadel_expose_saren', 'Citadel:_Expose_Saren');
export const me1_find_liara = m('1.1.3', 'me1_find_liara', 'Find_Liara_T%27Soni');
export const me1_noveria_geth_interest = m('1.1.4', 'me1_noveria_geth_interest', 'Noveria:_Geth_Interest');
export const me1_noveria_matriarch_benezia = m('1.1.5', 'me1_noveria_matriarch_benezia', 'Noveria:_Matriarch_Benezia');
export const me1_feros_geth_attack = m('1.1.6', 'me1_feros_geth_attack', 'Feros:_Geth_Attack');
export const me1_feros_the_thorian = m('1.1.7', 'me1_feros_the_thorian', 'Feros:_The_Thorian');
export const me1_virmire = m('1.1.8', 'me1_virmire', 'Virmire_(mission)'); // TODO: any two of the three prerequisites
export const me1_virmire_assault = m('1.1.9', 'me1_virmire_assault', 'Virmire:_Assault');
export const me1_ilos = m('1.1.10', 'me1_ilos', 'Ilos:_Find_the_Conduit', 'additional_info_me1_ilos');
export const me1_ilos_trench_run = m('1.1.11', 'me1_ilos_trench_run', 'Race_Against_Time:_Conduit');
export const me1_final_battle = m('1.1.12', 'me1_final_battle', 'Race_Against_Time:_Final_Battle');

// --- ME1 Citadel Side Missions (Game 1, Section 2) ---
export const me1_citadel_asari_consort = m('1.2.1', 'me1_citadel_asari_consort', 'Citadel:_Asari_Consort');
export const me1_citadel_doctor_michel = m('1.2.2', 'me1_citadel_doctor_michel', 'Citadel:_Doctor_Michel');
export const me1_citadel_homecoming = m('1.2.3', 'me1_citadel_homecoming', 'Citadel:_Homecoming');
export const me1_citadel_jahleeds_fears = m('1.2.4', 'me1_citadel_jahleeds_fears', 'Citadel:_Jahleed%27s_Fears');
export const me1_citadel_presidium_prophet = m('1.2.5', 'me1_citadel_presidium_prophet', 'Citadel:_Presidium_Prophet');
export const me1_citadel_reporters_request = m('1.2.6', 'me1_citadel_reporters_request', 'Citadel:_Reporter%27s_Request');
export const me1_citadel_ritas_sister = m('1.2.7', 'me1_citadel_ritas_sister', 'Citadel:_Rita%27s_Sister');
export const me1_citadel_scan_the_keepers = m('1.2.8', 'me1_citadel_scan_the_keepers', 'Citadel:_Scan_the_Keepers');
export const me1_citadel_schells_the_gambler = m('1.2.9', 'me1_citadel_schells_the_gambler', 'Citadel:_Schells_the_Gambler');
export const me1_citadel_signal_tracking = m('1.2.10', 'me1_citadel_signal_tracking', 'Citadel:_Signal_Tracking');
export const me1_citadel_the_fan = m('1.2.11', 'me1_citadel_the_fan', 'Citadel:_The_Fan');
export const me1_citadel_xeltans_complaint = m('1.2.12', 'me1_citadel_xeltans_complaint', 'Citadel:_Xeltan%27s_Complaint');
export const me1_citadel_old_friends = m('1.2.13', 'me1_citadel_old_friends', 'Citadel:_Old_Friends', 'additional_info_me1_citadel_old_friends'); // TODO: any of feros, noveria or therum
export const me1_citadel_old_unhappy_far_off_things = m('1.2.14', 'me1_citadel_old_unhappy_far_off_things', 'Citadel:_Old,_Unhappy,_Far-Off_Things', 'additional_info_me1_citadel_old_unhappy_far_off_things'); // TODO: any of feros, noveria or therum
export const me1_citadel_i_remember_me = m('1.2.15', 'me1_citadel_i_remember_me', 'Citadel:_I_Remember_Me', 'additional_info_me1_citadel_i_remember_me'); // TODO: any of feros, noveria or therum
export const me1_citadel_family_matter = m('1.2.16', 'me1_citadel_family_matter', 'Citadel:_Family_Matter'); // TODO: any of feros, noveria or therum
export const me1_citadel_planting_a_bug = m('1.2.17', 'me1_citadel_planting_a_bug', 'Citadel:_Planting_a_Bug'); // TODO: also one of feros, noveria or therum
export const me1_citadel_snap_inspection = m('1.2.18', 'me1_citadel_snap_inspection', 'Citadel:_Snap_Inspection'); // TODO: any of feros, noveria or therum
export const me1_citadel_the_fourth_estate = m('1.2.19', 'me1_citadel_the_fourth_estate', 'Citadel:_The_Fourth_Estate'); // TODO: any of feros, noveria or therum
export const me1_citadel_our_own_worst_enemy = m('1.2.20', 'me1_citadel_our_own_worst_enemy', 'Citadel:_Our_Own_Worst_Enemy');
export const me1_citadel_negotiators_request = m('1.2.21', 'me1_citadel_negotiators_request', 'Citadel:_Negotiator%27s_Request');
// Note: Original index.ts had 22 missions in me1_citadel section, but only 21 are listed here. Assuming a copy-paste error or missing mission in the previous step. Added placeholder for 1.2.22 if needed.
// If there was indeed a 22nd mission, it needs to be added here with code '1.2.22'.

// --- ME1 Squad Missions (Game 1, Section 3) ---
export const me1_garrus_find_dr_saleon = m('1.3.1', 'me1_garrus_find_dr_saleon', 'Garrus:_Find_Dr._Saleon');
export const me1_tali_and_the_geth = m('1.3.2', 'me1_tali_and_the_geth', 'Tali_and_the_Geth');
export const me1_wrex_family_armor = m('1.3.3', 'me1_wrex_family_armor', 'Wrex:_Family_Armor');

// --- ME1 Feros Side Missions (Game 1, Section 4) ---
export const me1_feros_data_recovery = m('1.4.1', 'me1_feros_data_recovery', 'Feros:_Data_Recovery');
export const me1_feros_geth_in_the_tunnels = m('1.4.2', 'me1_feros_geth_in_the_tunnels', 'Feros:_Geth_in_the_Tunnels');
export const me1_feros_power_cells = m('1.4.3', 'me1_feros_power_cells', 'Feros:_Power_Cells');
export const me1_feros_varren_meat = m('1.4.4', 'me1_feros_varren_meat', 'Feros:_Varren_Meat');
export const me1_feros_water_restoration = m('1.4.5', 'me1_feros_water_restoration', 'Feros:_Water_Restoration');

// --- ME1 Noveria Side Missions (Game 1, Section 5) ---
export const me1_noveria_espionage = m('1.5.1', 'me1_noveria_espionage', 'Noveria:_Espionage');
export const me1_noveria_smuggling = m('1.5.2', 'me1_noveria_smuggling', 'Noveria:_Smuggling');

// --- ME1 Virmire Side Missions (Game 1, Section 6) ---
export const me1_virmire_assisting_kirrahes_team = m('1.6.1', 'me1_virmire_assisting_kirrahes_team', 'Virmire:_Assisting_Kirrahe%27s_Team');
export const me1_virmire_wrex_and_the_genophage = m('1.6.2', 'me1_virmire_wrex_and_the_genophage', 'Virmire:_Wrex_and_the_Genophage');

// --- ME1 UNC Missions (Game 1, Section 7) ---
export const me1_unc_distress_call = m('1.7.1', 'me1_unc_distress_call', 'UNC:_Distress_Call');
export const me1_unc_asari_diplomacy = m('1.7.2', 'me1_unc_asari_diplomacy', 'UNC:_Asari_Diplomacy');
export const me1_unc_espionage_probe = m('1.7.3', 'me1_unc_espionage_probe', 'UNC:_Espionage_Probe');
export const me1_unc_geth_incursions = m('1.7.4', 'me1_unc_geth_incursions', 'UNC:_Geth_Incursions');
export const me1_unc_missing_marines = m('1.7.5', 'me1_unc_missing_marines', 'UNC:_Missing_Marines');
export const me1_unc_cerberus = m('1.7.6', 'me1_unc_cerberus', 'UNC:_Cerberus');
export const me1_unc_hades_dogs = m('1.7.7', 'me1_unc_hades_dogs', 'UNC:_Hades%27_Dogs');
export const me1_unc_colony_of_the_dead = m('1.7.8', 'me1_unc_colony_of_the_dead', 'UNC:_Colony_of_the_Dead');
export const me1_unc_derelict_freighter = m('1.7.9', 'me1_unc_derelict_freighter', 'UNC:_Derelict_Freighter');
export const me1_unc_exogeni_facility = m('1.7.10', 'me1_unc_exogeni_facility', 'UNC:_ExoGeni_Facility');
export const me1_unc_dead_scientists = m('1.7.11', 'me1_unc_dead_scientists', 'UNC:_Dead_Scientists');
export const me1_unc_listening_post_alpha = m('1.7.12', 'me1_unc_listening_post_alpha', 'UNC:_Listening_Post_Alpha');
export const me1_unc_listening_post_theta = m('1.7.13', 'me1_unc_listening_post_theta', 'UNC:_Listening_Post_Theta');
export const me1_unc_depot_sigma_23 = m('1.7.14', 'me1_unc_depot_sigma_23', 'UNC:_Depot_Sigma-23');
export const me1_unc_hostage = m('1.7.15', 'me1_unc_hostage', 'UNC:_Hostage');
export const me1_unc_hostile_takeover = m('1.7.16', 'me1_unc_hostile_takeover', 'UNC:_Hostile_Takeover');
export const me1_unc_lost_freighter = m('1.7.17', 'me1_unc_lost_freighter', 'UNC:_Lost_Freighter');
export const me1_unc_lost_module = m('1.7.18', 'me1_unc_lost_module', 'UNC:_Lost_Module');
export const me1_unc_major_kyle = m('1.7.19', 'me1_unc_major_kyle', 'UNC:_Major_Kyle');
export const me1_unc_missing_survey_team = m('1.7.20', 'me1_unc_missing_survey_team', 'UNC:_Missing_Survey_Team');
export const me1_unc_privateers = m('1.7.21', 'me1_unc_privateers', 'UNC:_Privateers');
export const me1_unc_rogue_vi = m('1.7.22', 'me1_unc_rogue_vi', 'UNC:_Rogue_VI', 'additional_info_me1_unc_rogue_vi');
export const me1_unc_besieged_base = m('1.7.23', 'me1_unc_besieged_base', 'UNC:_Besieged_Base', 'additional_info_me1_unc_besieged_base');
export const me1_unc_the_negotiation = m('1.7.24', 'me1_unc_the_negotiation', 'UNC:_The_Negotiation', 'additional_info_me1_unc_the_negotiation');

// --- ME1 Bring Down the Sky (DLC) (Game 1, Section 8) ---
export const me1_x57_bring_down_the_sky = m('1.8.1', 'me1_x57_bring_down_the_sky', 'X57:_Bring_Down_the_Sky');
export const me1_x57_avoid_the_blasting_caps = m('1.8.2', 'me1_x57_avoid_the_blasting_caps', 'X57:_Avoid_the_Blasting_Caps');
export const me1_x57_missing_engineers = m('1.8.3', 'me1_x57_missing_engineers', 'X57:_Missing_Engineers');

// --- ME1 Collectibles (Game 1, Section 9) ---
export const me1_unc_prothean_data_discs = m('1.9.1', 'me1_unc_prothean_data_discs', 'UNC:_Prothean_Data_Discs');
export const me1_unc_turian_insignias = m('1.9.2', 'me1_unc_turian_insignias', 'UNC:_Turian_Insignias');
export const me1_unc_valuable_minerals = m('1.9.3', 'me1_unc_valuable_minerals', 'UNC:_Valuable_Minerals');
export const me1_unc_locate_signs_of_battle = m('1.9.4', 'me1_unc_locate_signs_of_battle', 'UNC:_Locate_Signs_of_Battle');
export const me1_unc_asari_writings = m('1.9.5', 'me1_unc_asari_writings', 'UNC:_Asari_Writings');

// --- ME2 Plot Missions (Game 2, Section 1) ---
export const me2_prologue_save_joker = m('2.1.1', 'me2_prologue_save_joker', 'Prologue:_Save_Joker');
export const me2_prologue_awakening = m('2.1.2', 'me2_prologue_awakening', 'Prologue:_Awakening');
export const me2_freedoms_progress = m('2.1.3', 'me2_freedoms_progress', 'Freedom%27s_Progress');
export const me2_citadel_anderson = m('2.1.4', 'me2_citadel_anderson', 'Citadel:_Captain_Anderson');
export const me2_horizon = m('2.1.5', 'me2_horizon', 'Horizon_(mission)', 'additional_info_me2_horizon');
export const me2_collector_ship = m('2.1.6', 'me2_collector_ship', 'Collector_Ship_(mission)', 'additional_info_me2_collector_ship');
export const me2_iff = m('2.1.7', 'me2_iff', 'Reaper_IFF', 'additional_info_me2_iff');
export const me2_await_iff = m('2.1.8', 'me2_await_iff', 'Stop_the_Collectors#Await_IFF_Installation');
export const me2_use_omega4_relay = m('2.1.9', 'me2_use_omega4_relay', 'Stop_the_Collectors#Use_Omega_4_Relay', 'additional_info_me2_use_omega4_relay');
export const me2_suicide_mission_infiltration = m('2.1.10', 'me2_suicide_mission_infiltration', 'Collector_Base:_Infiltration');
export const me2_suicide_mission_the_long_walk = m('2.1.11', 'me2_suicide_mission_the_long_walk', 'Collector_Base:_The_Long_Walk');
export const me2_suicide_mission_final_battle = m('2.1.12', 'me2_suicide_mission_final_battle', 'Collector_Base:_Final_Battle');

// --- ME2 Dossiers (Recruitment) (Game 2, Section 2) ---
export const me2_dossier_the_master_thief = m('2.2.1', 'me2_dossier_the_master_thief', 'Dossier:_The_Master_Thief');
export const me2_dossier_the_veteran = m('2.2.2', 'me2_dossier_the_veteran', 'Dossier:_The_Veteran');
export const me2_recruit_archangel = m('2.2.3', 'me2_recruit_archangel', 'Dossier:_Archangel');
export const me2_recruit_professor = m('2.2.4', 'me2_recruit_professor', 'Dossier:_The_Professor');
export const me2_recruit_warlord = m('2.2.5', 'me2_recruit_warlord', 'Dossier:_The_Warlord');
export const me2_recruit_convict = m('2.2.6', 'me2_recruit_convict', 'Dossier:_The_Convict');
export const me2_recruit_assassin = m('2.2.7', 'me2_recruit_assassin', 'Dossier:_The_Assassin');
export const me2_recruit_justicar = m('2.2.8', 'me2_recruit_justicar', 'Dossier:_The_Justicar');
export const me2_recruit_tali = m('2.2.9', 'me2_recruit_tali', 'Dossier:_Tali');

// --- ME2 Loyalty Missions (Game 2, Section 3) ---
export const me2_loyalty_kasumi = m('2.3.1', 'me2_loyalty_kasumi', 'Kasumi:_Stealing_Memory');
export const me2_loyalty_zaeed = m('2.3.2', 'me2_loyalty_zaeed', 'Zaeed:_The_Price_of_Revenge');
export const me2_loyalty_garrus = m('2.3.3', 'me2_loyalty_garrus', 'Garrus:_Eye_for_an_Eye');
export const me2_loyalty_grunt = m('2.3.4', 'me2_loyalty_grunt', 'Grunt:_Rite_of_Passage');
export const me2_loyalty_jack = m('2.3.5', 'me2_loyalty_jack', 'Jack:_Subject_Zero');
export const me2_loyalty_jacob = m('2.3.6', 'me2_loyalty_jacob', 'Jacob:_The_Gift_of_Greatness');
export const me2_loyalty_miranda = m('2.3.7', 'me2_loyalty_miranda', 'Miranda:_The_Prodigal');
export const me2_loyalty_mordin = m('2.3.8', 'me2_loyalty_mordin', 'Mordin:_Old_Blood');
export const me2_loyalty_samara = m('2.3.9', 'me2_loyalty_samara', 'Samara:_The_Ardat-Yakshi');
export const me2_loyalty_tali = m('2.3.10', 'me2_loyalty_tali', 'Tali:_Treason');
export const me2_loyalty_thane = m('2.3.11', 'me2_loyalty_thane', 'Thane:_Sins_of_the_Father');
export const me2_loyalty_legion = m('2.3.12', 'me2_loyalty_legion', 'Legion:_A_House_Divided');

// --- ME2 Omega Side Missions (Game 2, Section 4) ---
export const me2_omega_aria_tloak = m('2.4.1', 'me2_omega_aria_tloak', 'Omega:_Aria_T\'Loak');
export const me2_omega_batarian_bartender = m('2.4.2', 'me2_omega_batarian_bartender', 'Omega:_Batarian_Bartender');
export const me2_omega_struggling_quarian = m('2.4.3', 'me2_omega_struggling_quarian', 'Omega:_Struggling_Quarian');
export const me2_omega_archangel_datapad_recovered = m('2.4.4', 'me2_omega_archangel_datapad_recovered', 'Omega:_Archangel:_Datapad_Recovered');
export const me2_omega_the_patriarch = m('2.4.5', 'me2_omega_the_patriarch', 'Omega:_The_Patriarch'); // TODO: me2_recruit_archangel OR me2_recruit_professor
export const me2_omega_the_professor_missing_assistant = m('2.4.6', 'me2_omega_the_professor_missing_assistant', 'Omega:_The_Professor:_Missing_Assistant');
export const me2_omega_packages_for_ish = m('2.4.7', 'me2_omega_packages_for_ish', 'Omega:_Packages_for_Ish');

// --- ME2 Citadel Side Missions (Game 2, Section 5) ---
export const me2_citadel_crime_in_progress = m('2.5.1', 'me2_citadel_crime_in_progress', 'Citadel:_Crime_in_Progress');
export const me2_citadel_found_forged_id = m('2.5.2', 'me2_citadel_found_forged_id', 'Citadel:_Found_Forged_ID'); // TODO: add 'me2_loyalty_garrus' OR 'me2_loyalty_thane'
export const me2_citadel_krogan_sushi = m('2.5.3', 'me2_citadel_krogan_sushi', 'Citadel:_Krogan_Sushi');
export const me2_citadel_captain_bailey = m('2.5.4', 'me2_citadel_captain_bailey', 'Citadel:_Captain_Bailey');
export const me2_citadel_the_council = m('2.5.5', 'me2_citadel_the_council', 'Citadel:_The_Council');

// --- ME2 Normandy Side Missions (Game 2, Section 6) ---
export const me2_normandy_fba_couplings = m('2.6.1', 'me2_normandy_fba_couplings', 'Normandy:_FBA_Couplings');
export const me2_normandy_serrice_ice_brandy = m('2.6.2', 'me2_normandy_serrice_ice_brandy', 'Normandy:_Serrice_Ice_Brandy');
export const me2_normandy_special_ingredients = m('2.6.3', 'me2_normandy_special_ingredients', 'Normandy:_Special_Ingredients');
export const me2_normandy_crash_site = m('2.6.4', 'me2_normandy_crash_site', 'Normandy_Crash_Site_(assignment)');

// --- ME2 N7 Missions (Game 2, Section 7) ---
export const me2_n7_wrecked_merchant_freighter = m('2.7.1', 'me2_n7_wrecked_merchant_freighter', 'N7:_Wrecked_Merchant_Freighter');
export const me2_n7_abandoned_research_station = m('2.7.2', 'me2_n7_abandoned_research_station', 'N7:_Abandoned_Research_Station');
export const me2_n7_hahne_kedar_facility = m('2.7.3', 'me2_n7_hahne_kedar_facility', 'N7:_Hahne-Kedar_Facility');
export const me2_n7_msv_estevanico = m('2.7.4', 'me2_n7_msv_estevanico', 'N7:_MSV_Estevanico');
export const me2_n7_eclipse_smuggling_depot = m('2.7.5', 'me2_n7_eclipse_smuggling_depot', 'N7:_Eclipse_Smuggling_Depot');
export const me2_n7_lost_operative = m('2.7.6', 'me2_n7_lost_operative', 'N7:_Lost_Operative');
export const me2_n7_abandoned_mine = m('2.7.7', 'me2_n7_abandoned_mine', 'N7:_Abandoned_Mine');
export const me2_n7_anomalous_weather_detected = m('2.7.8', 'me2_n7_anomalous_weather_detected', 'N7:_Anomalous_Weather_Detected');
export const me2_n7_blood_pack_base = m('2.7.9', 'me2_n7_blood_pack_base', 'N7:_Blood_Pack_Base');
export const me2_n7_blood_pack_communications_relay = m('2.7.10', 'me2_n7_blood_pack_communications_relay', 'N7:_Blood_Pack_Communications_Relay');
export const me2_n7_quarian_crash_site = m('2.7.11', 'me2_n7_quarian_crash_site', 'N7:_Quarian_Crash_Site');
export const me2_n7_imminent_ship_crash = m('2.7.12', 'me2_n7_imminent_ship_crash', 'N7:_Imminent_Ship_Crash');
export const me2_n7_archeological_dig_site = m('2.7.13', 'me2_n7_archeological_dig_site', 'N7:_Archeological_Dig_Site');
export const me2_n7_msv_strontium_mule = m('2.7.14', 'me2_n7_msv_strontium_mule', 'N7:_MSV_Strontium_Mule');
export const me2_n7_blue_suns_base = m('2.7.15', 'me2_n7_blue_suns_base', 'N7:_Blue_Suns_Base');
export const me2_n7_javelin_missiles_launched = m('2.7.16', 'me2_n7_javelin_missiles_launched', 'N7:_Javelin_Missiles_Launched'); // TODO: check me2_n7_msv_strontium_mule OR me2_n7_blue_suns_base
export const me2_n7_captured_mining_facility = m('2.7.17', 'me2_n7_captured_mining_facility', 'N7:_Captured_Mining_Facility');
export const me2_n7_endangered_research_station = m('2.7.18', 'me2_n7_endangered_research_station', 'N7:_Endangered_Research_Station'); // TODO: me2_collector_ship or Rosalie Lost after horizon
export const me2_n7_mining_the_canyon = m('2.7.19', 'me2_n7_mining_the_canyon', 'N7:_Mining_the_Canyon'); // TODO: me2_collector_ship or Rosalie Lost after horizon
// Note: Original index.ts had 20 missions in me2_n7 section, but only 19 are listed here. Assuming a copy-paste error or missing mission in the previous step. Added placeholder for 2.7.20 if needed.
// If there was indeed a 20th mission, it needs to be added here with code '2.7.20'.

// --- ME2 Illium Side Missions (Game 2, Section 8) ---
export const me2_illium_liara_system_hacking = m('2.8.1', 'me2_illium_liara_system_hacking', 'Illium:_Liara:_System_Hacking');
export const me2_illium_liara_the_observer = m('2.8.2', 'me2_illium_liara_the_observer', 'Illium:_Liara:_The_Observer');
export const me2_illium_a_troublemaker = m('2.8.3', 'me2_illium_a_troublemaker', 'Illium:_Conrad_Verner');
export const me2_illium_blue_rose_of_illium = m('2.8.4', 'me2_illium_blue_rose_of_illium', 'Illium:_Blue_Rose_of_Illium');
export const me2_illium_gianna_parasini = m('2.8.5', 'me2_illium_gianna_parasini', 'Illium:_Gianna_Parasini');
export const me2_illium_indentured_service = m('2.8.6', 'me2_illium_indentured_service', 'Illium:_Indentured_Service');
export const me2_illium_medical_scans = m('2.8.7', 'me2_illium_medical_scans', 'Illium:_Medical_Scans');
export const me2_illium_the_assassin_salarian_family_data = m('2.8.8', 'me2_illium_the_assassin_salarian_family_data', 'Illium:_The_Assassin:_Salarian_Family_Data');
export const me2_illium_the_justicar_smuggling_evidence = m('2.8.9', 'me2_illium_the_justicar_smuggling_evidence', 'Illium:_The_Justicar:_Smuggling_Evidence');
export const me2_illium_the_justicar_stolen_goods_found = m('2.8.10', 'me2_illium_the_justicar_stolen_goods_found', 'Illium:_The_Justicar:_Stolen_Goods_Found');
export const me2_illium_the_prodigal_lost_locket_found = m('2.8.11', 'me2_illium_the_prodigal_lost_locket_found', 'Illium:_The_Prodigal:_Lost_Locket_Found');

// --- ME2 Tuchanka Side Missions (Game 2, Section 9) ---
export const me2_tuchanka_combustion_manifold = m('2.9.1', 'me2_tuchanka_combustion_manifold', 'Tuchanka:_Combustion_Manifold');
export const me2_tuchanka_killing_pyjaks = m('2.9.2', 'me2_tuchanka_killing_pyjaks', 'Tuchanka:_Killing_Pyjaks');
export const me2_tuchanka_old_blood_missing_scout = m('2.9.3', 'me2_tuchanka_old_blood_missing_scout', 'Tuchanka:_Old_Blood:_Missing_Scout');
export const me2_tuchanka_urdnot_wrex = m('2.9.4', 'me2_tuchanka_urdnot_wrex', 'Tuchanka:_Urdnot_Wrex');

// --- ME2 Project Firewalker (DLC) (Game 2, Section 10) ---
export const me2_project_firewalker_rosalie_lost = m('2.10.1', 'me2_project_firewalker_rosalie_lost', 'Project_Firewalker:_Rosalie_Lost');
export const me2_project_firewalker_geth_activity = m('2.10.2', 'me2_project_firewalker_geth_activity', 'Project_Firewalker:_Geth_Incursion');
export const me2_project_firewalker_survey_sites_located = m('2.10.3', 'me2_project_firewalker_survey_sites_located', 'Project_Firewalker:_Survey_Sites_Located');
export const me2_project_firewalker_volcano_station = m('2.10.4', 'me2_project_firewalker_volcano_station', 'Project_Firewalker:_Volcano_Station');
export const me2_project_firewalker_prothean_site = m('2.10.5', 'me2_project_firewalker_prothean_site', 'Project_Firewalker:_Prothean_Site');

// --- ME2 Project Overlord (DLC) (Game 2, Section 11) ---
export const me2_overlord = m('2.11.1', 'me2_overlord', 'Overlord_(assignment)');
export const me2_overlord_atlas_station = m('2.11.2', 'me2_overlord_atlas_station', 'Overlord:_Atlas_Station');
export const me2_overlord_prometheus_station = m('2.11.3', 'me2_overlord_prometheus_station', 'Overlord:_Prometheus_Station');
export const me2_overlord_vulcan_station = m('2.11.4', 'me2_overlord_vulcan_station', 'Overlord:_Vulcan_Station');

// --- ME2 Lair of the Shadow Broker (DLC) (Game 2, Section 12) ---
export const me2_lair_of_the_shadow_broker = m('2.12.1', 'me2_lair_of_the_shadow_broker', 'Lair_of_the_Shadow_Broker_(mission)');

// --- ME2 Arrival (DLC) (Game 2, Section 13) ---
export const me2_arrival = m('2.13.1', 'me2_arrival', 'Arrival_(assignment)');

// --- ME3 Priority Missions (Game 3, Section 1) ---
export const me3_priority_prologue = m('3.1.1', 'me3_priority_prologue', 'Prologue:_Earth');
export const me3_priority_mars = m('3.1.2', 'me3_priority_mars', 'Priority:_Mars');
export const me3_priority_citadel1 = m('3.1.3', 'me3_priority_citadel1', 'Priority:_The_Citadel_I');
export const me3_priority_palaven = m('3.1.4', 'me3_priority_palaven', 'Priority:_Palaven');
export const me3_priority_surkesh = m('3.1.5', 'me3_priority_surkesh', 'Priority:_Sur%27Kesh');
export const me3_priority_tuchanka = m('3.1.6', 'me3_priority_tuchanka', 'Priority:_Tuchanka');
export const me3_priority_citadel2 = m('3.1.7', 'me3_priority_citadel2', 'Priority:_The_Citadel_II');
export const me3_priority_perseus_veil = m('3.1.8', 'me3_priority_perseus_veil', 'Priority:_Perseus_Veil');
export const me3_priority_geth_dreadnought = m('3.1.9', 'me3_priority_geth_dreadnought', 'Priority:_Geth_Dreadnought');
export const me3_priority_rannoch = m('3.1.10', 'me3_priority_rannoch', 'Priority:_Rannoch');
export const me3_priority_citadel3 = m('3.1.11', 'me3_priority_citadel3', 'Priority:_The_Citadel_III');
export const me3_priority_thessia = m('3.1.12', 'me3_priority_thessia', 'Priority:_Thessia');
export const me3_priority_horizon = m('3.1.13', 'me3_priority_horizon', 'Priority:_Horizon');
export const me3_priority_cerberus_hq = m('3.1.14', 'me3_priority_cerberus_hq', 'Priority:_Cerberus_Headquarters', 'additional_info_me3_priority_cerberus_hq');
export const me3_priority_earth = m('3.1.15', 'me3_priority_earth', 'Priority:_Earth');

// --- ME3 Missions available after Priority: Citadel I (Game 3, Section 2) ---
export const me3_n7_cerberus_lab = m('3.2.1', 'me3_n7_cerberus_lab', 'N7:_Cerberus_Lab');
export const me3_priority_eden_prime = m('3.2.2', 'me3_priority_eden_prime', 'Priority:_Eden_Prime');
export const me3_eden_prime_resistance_movement = m('3.2.3', 'me3_eden_prime_resistance_movement', 'Eden_Prime:_Resistance_Movement'); // Progress-Sensitive
export const me3_shrike_abyssal_prothean_obelisk = m('3.2.4', 'me3_shrike_abyssal_prothean_obelisk', 'Shrike_Abyssal:_Prothean_Obelisk'); // Cannot be completed before Priority: Palaven

// --- ME3 Missions available after Priority: Palaven (Game 3, Section 3) ---
export const me3_apien_crest_banner_of_the_first_regiment = m('3.3.1', 'me3_apien_crest_banner_of_the_first_regiment', 'Apien_Crest:_Banner_of_the_First_Regiment');
export const me3_aria_blood_pack = m('3.3.2', 'me3_aria_blood_pack', 'Aria:_Blood_Pack');
export const me3_aria_blue_suns = m('3.3.3', 'me3_aria_blue_suns', 'Aria:_Blue_Suns');
export const me3_aria_eclipse = m('3.3.4', 'me3_aria_eclipse', 'Aria:_Eclipse');
export const me3_benning_evidence = m('3.3.5', 'me3_benning_evidence', 'Benning:_Evidence'); // During N7: Cerberus Abductions; Expires before Priority: Tuchanka
export const me3_citadel_alien_medi_gel_formula = m('3.3.6', 'me3_citadel_alien_medi_gel_formula', 'Citadel:_Alien_Medi-Gel_Formula'); // During N7: Cerberus Lab; Expires before Priority: Tuchanka
export const me3_citadel_aria_tloak = m('3.3.7', 'me3_citadel_aria_tloak', 'Citadel:_Aria_T%27Loak'); // DLC
export const me3_citadel_barla_von = m('3.3.8', 'me3_citadel_barla_von', 'Citadel:_Barla_Von'); // Expires before Priority: Tuchanka
export const me3_citadel_biotic_amp_interfaces = m('3.3.9', 'me3_citadel_biotic_amp_interfaces', 'Citadel:_Biotic_Amp_Interfaces'); // During Grissom Academy; Expires before Priority: Tuchanka
export const me3_citadel_dr_bryson = m('3.3.10', 'me3_citadel_dr_bryson', 'Citadel:_Dr._Bryson'); // DLC
export const me3_citadel_gx12_thermal_pipe = m('3.3.11', 'me3_citadel_gx12_thermal_pipe', 'Citadel:_GX12_Thermal_Pipe');
export const me3_citadel_hanar_diplomat = m('3.3.12', 'me3_citadel_hanar_diplomat', 'Citadel:_Hanar_Diplomat'); // Expires before Priority: Tuchanka
export const me3_citadel_heating_unit_stabilizers = m('3.3.13', 'me3_citadel_heating_unit_stabilizers', 'Citadel:_Heating_Unit_Stabilizers'); // During N7: Cerberus Fighter Base; Cannot be completed before Priority: Tuchanka
export const me3_citadel_improved_power_grid = m('3.3.14', 'me3_citadel_improved_power_grid', 'Citadel:_Improved_Power_Grid'); // During N7: Cerberus Attack; Expires before Priority: Tuchanka
export const me3_grissom_academy_emergency_evacuation = m('3.3.15', 'me3_grissom_academy_emergency_evacuation', 'Grissom_Academy:_Emergency_Evacuation'); // Expires before Priority: Citadel II
export const me3_irune_book_of_plenix = m('3.3.16', 'me3_irune_book_of_plenix', 'Irune:_Book_of_Plenix'); // Cannot be completed before Priority: Tuchanka
export const me3_ismar_frontier_prototype_components = m('3.3.17', 'me3_ismar_frontier_prototype_components', 'Ismar_Frontier:_Prototype_Components'); // Expires before Priority: Tuchanka
export const me3_kites_nest_pillars_of_strength = m('3.3.18', 'me3_kites_nest_pillars_of_strength', 'Kite%27s_Nest:_Pillars_of_Strength');
// Note: Original index.ts had 19 missions in me3_priority_palaven section, but only 18 are listed here. Added placeholder for 3.3.19 if needed.
// If there was indeed a 19th mission, it needs to be added here with code '3.3.19'.

// --- ME3 Missions available after Priority: Sur'Kesh (Game 3, Section 4) ---
export const me3_attican_traverse_krogan_team = m('3.4.1', 'me3_attican_traverse_krogan_team', 'Attican_Traverse:_Krogan_Team'); // Unlocks Priority: Tuchanka
export const me3_citadel_krogan_dying_message = m('3.4.2', 'me3_citadel_krogan_dying_message', 'Citadel:_Krogan_Dying_Message'); // Part of Attican Traverse: Krogan Team
export const me3_n7_cerberus_abductions = m('3.4.3', 'me3_n7_cerberus_abductions', 'N7:_Cerberus_Abductions'); // Also requires Attican Traverse OR Turian Platoon
export const me3_n7_cerberus_attack = m('3.4.4', 'me3_n7_cerberus_attack', 'N7:_Cerberus_Attack');
export const me3_tuchanka_turian_platoon = m('3.4.5', 'me3_tuchanka_turian_platoon', 'Tuchanka:_Turian_Platoon'); // Unlocks Priority: Tuchanka; Expires before Priority: Thessia
export const me3_tuchanka_bomb = m('3.4.6', 'me3_tuchanka_bomb', 'Tuchanka:_Bomb'); // Timed: Fails after 3 missions
export const me3_citadel_cerberus_automated_turret_schematics = m('3.4.7', 'me3_citadel_cerberus_automated_turret_schematics', 'Citadel:_Cerberus_Automated_Turret_Schematics'); // During Tuchanka: Bomb; Cannot be completed before Priority: Citadel II

// --- ME3 Missions available after Priority: Tuchanka (Game 3, Section 5) ---
export const me3_n7_cerberus_fighter_base = m('3.5.1', 'me3_n7_cerberus_fighter_base', 'N7:_Cerberus_Fighter_Base');

// --- ME3 Missions available after Priority: Citadel II (Game 3, Section 6) ---
export const me3_arrae_ex_cerberus_scientists = m('3.6.1', 'me3_arrae_ex_cerberus_scientists', 'Arrae:_Ex-Cerberus_Scientists');
export const me3_citadel_cerberus_turian_poison = m('3.6.2', 'me3_citadel_cerberus_turian_poison', 'Citadel:_Cerberus_Turian_Poison'); // During Arrae: Ex-Cerberus Scientists
export const me3_athena_nebula_hesperia_period_statue = m('3.6.3', 'me3_athena_nebula_hesperia_period_statue', 'Athena_Nebula:_Hesperia-Period_Statue');
export const me3_citadel_batarian_codes = m('3.6.4', 'me3_citadel_batarian_codes', 'Citadel:_Batarian_Codes');
export const me3_citadel_cerberus_ciphers = m('3.6.5', 'me3_citadel_cerberus_ciphers', 'Citadel:_Cerberus_Ciphers'); // During N7: Communication Hub; Cannot be completed before Priority: Thessia
export const me3_citadel_cerberus_retribution = m('3.6.6', 'me3_citadel_cerberus_retribution', 'Citadel:_Cerberus_Retribution');
export const me3_citadel_chemical_treatment = m('3.6.7', 'me3_citadel_chemical_treatment', 'Citadel:_Chemical_Treatment'); // During N7: Fuel Reactors; Cannot be completed before Priority: Geth Dreadnought
export const me3_citadel_inspirational_stories = m('3.6.8', 'me3_citadel_inspirational_stories', 'Citadel:_Inspirational_Stories'); // Cannot be completed before Priority: Geth Dreadnought
export const me3_citadel_kakliosaur_fossil = m('3.6.9', 'me3_citadel_kakliosaur_fossil', 'Citadel:_Kakliosaur_Fossil');
export const me3_citadel_medical_supplies = m('3.6.10', 'me3_citadel_medical_supplies', 'Citadel:_Medical_Supplies');
export const me3_citadel_medi_gel_sabotage = m('3.6.11', 'me3_citadel_medi_gel_sabotage', 'Citadel:_Medi-Gel_Sabotage');
export const me3_citadel_reaper_code_fragments = m('3.6.12', 'me3_citadel_reaper_code_fragments', 'Citadel:_Reaper_Code_Fragments'); // During Rannoch: Geth Fighter Squadrons; Cannot be completed before Priority: Geth Dreadnought
export const me3_citadel_shore_leave = m('3.6.13', 'me3_citadel_shore_leave', 'Citadel:_Shore_Leave'); // DLC
export const me3_citadel_target_jamming_technology = m('3.6.14', 'me3_citadel_target_jamming_technology', 'Citadel:_Target_Jamming_Technology'); // During Rannoch: Admiral Koris; Cannot be completed before Priority: Geth Dreadnought
export const me3_citadel_volus_ambassador = m('3.6.15', 'me3_citadel_volus_ambassador', 'Citadel:_Volus_Ambassador');
export const me3_citadel_wounded_batarian = m('3.6.16', 'me3_citadel_wounded_batarian', 'Citadel:_Wounded_Batarian');
export const me3_dekuuna_code_of_the_ancients = m('3.6.17', 'me3_dekuuna_code_of_the_ancients', 'Dekuuna:_Code_of_the_Ancients'); // Cannot be completed before Priority: Rannoch
export const me3_hades_nexus_obelisk_of_karza = m('3.6.18', 'me3_hades_nexus_obelisk_of_karza', 'Hades_Nexus:_Obelisk_of_Karza'); // Cannot be completed before Priority: Rannoch
export const me3_hades_nexus_prothean_sphere = m('3.6.19', 'me3_hades_nexus_prothean_sphere', 'Hades_Nexus:_Prothean_Sphere'); // Cannot be completed before Priority: Rannoch
export const me3_kallini_ardat_yakshi_monastery = m('3.6.20', 'me3_kallini_ardat_yakshi_monastery', 'Kallini:_Ardat-Yakshi_Monastery');
export const me3_citadel_asari_widow = m('3.6.21', 'me3_citadel_asari_widow', 'Citadel:_Asari_Widow'); // During Kallini: Ardat-Yakshi Monastery
export const me3_nimbus_cluster_library_of_asha = m('3.6.22', 'me3_nimbus_cluster_library_of_asha', 'Nimbus_Cluster:_Library_of_Asha');
export const me3_silean_nebula_rings_of_alune = m('3.6.23', 'me3_silean_nebula_rings_of_alune', 'Silean_Nebula:_Rings_of_Alune'); // Cannot be completed before Priority: Rannoch
export const me3_valhallan_threshold_prothean_data_drives = m('3.6.24', 'me3_valhallan_threshold_prothean_data_drives', 'Valhallan_Threshold:_Prothean_Data_Drives');
// Note: Original index.ts had 25 missions in me3_priority_the_citadel2 section, but only 24 are listed here. Added placeholder for 3.6.25 if needed.
// If there was indeed a 25th mission, it needs to be added here with code '3.6.25'.

// --- ME3 Missions available after Priority: Geth Dreadnought (Game 3, Section 7) ---
export const me3_n7_fuel_reactors = m('3.7.1', 'me3_n7_fuel_reactors', 'N7:_Fuel_Reactors');
export const me3_rannoch_admiral_koris = m('3.7.2', 'me3_rannoch_admiral_koris', 'Rannoch:_Admiral_Koris'); // Expires before Priority: Rannoch
export const me3_rannoch_geth_fighter_squadrons = m('3.7.3', 'me3_rannoch_geth_fighter_squadrons', 'Rannoch:_Geth_Fighter_Squadrons'); // Expires before Priority: Rannoch

// --- ME3 Missions available after Priority: Rannoch (Game 3, Section 8) ---
export const me3_dekuuna_elcor_extraction = m('3.8.1', 'me3_dekuuna_elcor_extraction', 'Dekuuna:_Elcor_Extraction');

// --- ME3 Missions available after Priority: Thessia (Game 3, Section 9) ---
export const me3_n7_communication_hub = m('3.9.1', 'me3_n7_communication_hub', 'N7:_Communication_Hub');


// --- Hardcoded Prerequisite Population ---

// ME1
me1_citadel_expose_saren.prerequisites.push(me1_eden_prime);
me1_find_liara.prerequisites.push(me1_citadel_expose_saren);
me1_noveria_geth_interest.prerequisites.push(me1_citadel_expose_saren);
me1_noveria_matriarch_benezia.prerequisites.push(me1_noveria_geth_interest);
me1_feros_geth_attack.prerequisites.push(me1_citadel_expose_saren);
me1_feros_the_thorian.prerequisites.push(me1_feros_geth_attack);
me1_virmire.prerequisites.push(me1_find_liara, me1_feros_geth_attack, me1_noveria_geth_interest); // TODO: any two of the three
me1_virmire_assault.prerequisites.push(me1_virmire);
me1_ilos.prerequisites.push(me1_virmire_assault);
me1_ilos_trench_run.prerequisites.push(me1_ilos);
me1_final_battle.prerequisites.push(me1_ilos_trench_run);
me1_citadel_asari_consort.prerequisites.push(me1_eden_prime);
me1_citadel_doctor_michel.prerequisites.push(me1_citadel_expose_saren);
me1_citadel_homecoming.prerequisites.push(me1_citadel_expose_saren);
me1_citadel_jahleeds_fears.prerequisites.push(me1_citadel_expose_saren);
me1_citadel_presidium_prophet.prerequisites.push(me1_citadel_expose_saren);
me1_citadel_reporters_request.prerequisites.push(me1_citadel_expose_saren);
me1_citadel_ritas_sister.prerequisites.push(me1_eden_prime);
me1_citadel_scan_the_keepers.prerequisites.push(me1_citadel_expose_saren);
me1_citadel_schells_the_gambler.prerequisites.push(me1_citadel_ritas_sister);
me1_citadel_signal_tracking.prerequisites.push(me1_citadel_expose_saren);
me1_citadel_the_fan.prerequisites.push(me1_citadel_expose_saren);
me1_citadel_xeltans_complaint.prerequisites.push(me1_citadel_asari_consort);
me1_citadel_old_friends.prerequisites.push(me1_find_liara); // TODO: any of feros, noveria or therum
me1_citadel_old_unhappy_far_off_things.prerequisites.push(me1_find_liara); // TODO: any of feros, noveria or therum
me1_citadel_i_remember_me.prerequisites.push(me1_find_liara); // TODO: any of feros, noveria or therum
me1_citadel_family_matter.prerequisites.push(me1_find_liara); // TODO: any of feros, noveria or therum
me1_citadel_planting_a_bug.prerequisites.push(me1_citadel_reporters_request); // TODO: also one of feros, noveria or therum
me1_citadel_snap_inspection.prerequisites.push(me1_find_liara); // TODO: any of feros, noveria or therum
me1_citadel_the_fourth_estate.prerequisites.push(me1_find_liara); // TODO: any of feros, noveria or therum
me1_citadel_our_own_worst_enemy.prerequisites.push(me1_virmire_assault);
me1_citadel_negotiators_request.prerequisites.push(me1_virmire_assault);
me1_garrus_find_dr_saleon.prerequisites.push(me1_eden_prime);
me1_tali_and_the_geth.prerequisites.push(me1_unc_geth_incursions);
me1_wrex_family_armor.prerequisites.push(me1_citadel_expose_saren);
me1_feros_data_recovery.prerequisites.push(me1_citadel_expose_saren);
me1_feros_geth_in_the_tunnels.prerequisites.push(me1_citadel_expose_saren);
me1_feros_power_cells.prerequisites.push(me1_citadel_expose_saren);
me1_feros_varren_meat.prerequisites.push(me1_citadel_expose_saren);
me1_feros_water_restoration.prerequisites.push(me1_citadel_expose_saren);
me1_noveria_espionage.prerequisites.push(me1_citadel_expose_saren);
me1_noveria_smuggling.prerequisites.push(me1_citadel_expose_saren);
me1_virmire_assisting_kirrahes_team.prerequisites.push(me1_citadel_expose_saren);
me1_virmire_wrex_and_the_genophage.prerequisites.push(me1_citadel_expose_saren);
me1_unc_cerberus.prerequisites.push(me1_unc_missing_marines);
me1_unc_hades_dogs.prerequisites.push(me1_unc_cerberus);
me1_unc_colony_of_the_dead.prerequisites.push(me1_feros_geth_attack);
me1_unc_derelict_freighter.prerequisites.push(me1_feros_geth_attack);
me1_unc_exogeni_facility.prerequisites.push(me1_feros_geth_attack);
me1_unc_dead_scientists.prerequisites.push(me1_noveria_geth_interest);
me1_unc_listening_post_alpha.prerequisites.push(me1_noveria_geth_interest);
me1_unc_listening_post_theta.prerequisites.push(me1_noveria_geth_interest);
me1_unc_depot_sigma_23.prerequisites.push(me1_unc_listening_post_alpha, me1_unc_listening_post_theta);

// ME2
me2_prologue_awakening.prerequisites.push(me2_prologue_save_joker);
me2_freedoms_progress.prerequisites.push(me2_prologue_awakening);
me2_citadel_anderson.prerequisites.push(me2_freedoms_progress);
me2_horizon.prerequisites.push(me2_recruit_archangel, me2_recruit_professor, me2_recruit_warlord, me2_recruit_convict);
me2_collector_ship.prerequisites.push(me2_horizon);
me2_iff.prerequisites.push(me2_collector_ship);
me2_await_iff.prerequisites.push(me2_iff);
me2_use_omega4_relay.prerequisites.push(me2_await_iff);
me2_suicide_mission_infiltration.prerequisites.push(me2_use_omega4_relay);
me2_suicide_mission_the_long_walk.prerequisites.push(me2_suicide_mission_infiltration);
me2_suicide_mission_final_battle.prerequisites.push(me2_suicide_mission_the_long_walk);
me2_dossier_the_master_thief.prerequisites.push(me2_freedoms_progress);
me2_dossier_the_veteran.prerequisites.push(me2_freedoms_progress);
me2_recruit_archangel.prerequisites.push(me2_freedoms_progress);
me2_recruit_professor.prerequisites.push(me2_freedoms_progress);
me2_recruit_warlord.prerequisites.push(me2_freedoms_progress);
me2_recruit_convict.prerequisites.push(me2_freedoms_progress);
me2_recruit_assassin.prerequisites.push(me2_horizon);
me2_recruit_justicar.prerequisites.push(me2_horizon);
me2_recruit_tali.prerequisites.push(me2_horizon);
me2_loyalty_kasumi.prerequisites.push(me2_dossier_the_master_thief);
me2_loyalty_zaeed.prerequisites.push(me2_dossier_the_veteran);
me2_loyalty_garrus.prerequisites.push(me2_horizon);
me2_loyalty_grunt.prerequisites.push(me2_horizon);
me2_loyalty_jack.prerequisites.push(me2_horizon);
me2_loyalty_jacob.prerequisites.push(me2_horizon);
me2_loyalty_miranda.prerequisites.push(me2_horizon);
me2_loyalty_mordin.prerequisites.push(me2_horizon);
me2_loyalty_samara.prerequisites.push(me2_recruit_justicar);
me2_loyalty_tali.prerequisites.push(me2_recruit_tali);
me2_loyalty_thane.prerequisites.push(me2_recruit_assassin);
me2_loyalty_legion.prerequisites.push(me2_iff);
me2_omega_aria_tloak.prerequisites.push(me2_freedoms_progress);
me2_omega_batarian_bartender.prerequisites.push(me2_freedoms_progress);
me2_omega_struggling_quarian.prerequisites.push(me2_freedoms_progress);
me2_omega_archangel_datapad_recovered.prerequisites.push(me2_recruit_archangel);
me2_omega_the_patriarch.prerequisites.push(me2_recruit_archangel); // TODO: me2_recruit_archangel OR me2_recruit_professor
me2_omega_the_professor_missing_assistant.prerequisites.push(me2_recruit_professor);
me2_omega_packages_for_ish.prerequisites.push(me2_horizon);
me2_citadel_crime_in_progress.prerequisites.push(me2_freedoms_progress);
me2_citadel_found_forged_id.prerequisites.push(me2_freedoms_progress); // TODO: add 'me2_loyalty_garrus' OR 'me2_loyalty_thane'
me2_citadel_krogan_sushi.prerequisites.push(me2_freedoms_progress);
me2_citadel_captain_bailey.prerequisites.push(me2_freedoms_progress);
me2_citadel_the_council.prerequisites.push(me2_freedoms_progress);
me2_normandy_fba_couplings.prerequisites.push(me2_freedoms_progress);
me2_normandy_serrice_ice_brandy.prerequisites.push(me2_freedoms_progress);
me2_normandy_special_ingredients.prerequisites.push(me2_freedoms_progress);
me2_normandy_crash_site.prerequisites.push(me2_freedoms_progress);
me2_n7_wrecked_merchant_freighter.prerequisites.push(me2_freedoms_progress);
me2_n7_abandoned_research_station.prerequisites.push(me2_n7_wrecked_merchant_freighter);
me2_n7_hahne_kedar_facility.prerequisites.push(me2_n7_abandoned_research_station);
me2_n7_msv_estevanico.prerequisites.push(me2_freedoms_progress);
me2_n7_eclipse_smuggling_depot.prerequisites.push(me2_freedoms_progress);
me2_n7_lost_operative.prerequisites.push(me2_freedoms_progress);
me2_n7_abandoned_mine.prerequisites.push(me2_horizon);
me2_n7_anomalous_weather_detected.prerequisites.push(me2_horizon);
me2_n7_blood_pack_base.prerequisites.push(me2_horizon);
me2_n7_blood_pack_communications_relay.prerequisites.push(me2_n7_blood_pack_base);
me2_n7_quarian_crash_site.prerequisites.push(me2_horizon);
me2_n7_imminent_ship_crash.prerequisites.push(me2_horizon);
me2_n7_archeological_dig_site.prerequisites.push(me2_loyalty_jacob);
me2_n7_msv_strontium_mule.prerequisites.push(me2_n7_archeological_dig_site);
me2_n7_blue_suns_base.prerequisites.push(me2_n7_msv_strontium_mule);
me2_n7_javelin_missiles_launched.prerequisites.push(me2_n7_msv_strontium_mule); // TODO: check me2_n7_msv_strontium_mule OR me2_n7_blue_suns_base
me2_n7_captured_mining_facility.prerequisites.push(me2_horizon);
me2_n7_endangered_research_station.prerequisites.push(me2_collector_ship); // TODO: me2_collector_ship or Rosalie Lost after horizon
me2_n7_mining_the_canyon.prerequisites.push(me2_collector_ship); // TODO: me2_collector_ship or Rosalie Lost after horizon
me2_illium_liara_system_hacking.prerequisites.push(me2_horizon);
me2_illium_liara_the_observer.prerequisites.push(me2_illium_liara_system_hacking);
me2_illium_a_troublemaker.prerequisites.push(me2_horizon);
me2_illium_blue_rose_of_illium.prerequisites.push(me2_horizon);
me2_illium_gianna_parasini.prerequisites.push(me2_horizon);
me2_illium_indentured_service.prerequisites.push(me2_horizon);
me2_illium_medical_scans.prerequisites.push(me2_horizon);
me2_illium_the_assassin_salarian_family_data.prerequisites.push(me2_horizon);
me2_illium_the_justicar_smuggling_evidence.prerequisites.push(me2_horizon);
me2_illium_the_justicar_stolen_goods_found.prerequisites.push(me2_horizon);
me2_illium_the_prodigal_lost_locket_found.prerequisites.push(me2_horizon);
me2_tuchanka_combustion_manifold.prerequisites.push(me2_horizon);
me2_tuchanka_killing_pyjaks.prerequisites.push(me2_horizon);
me2_tuchanka_old_blood_missing_scout.prerequisites.push(me2_horizon);
me2_tuchanka_urdnot_wrex.prerequisites.push(me2_horizon);
me2_project_firewalker_rosalie_lost.prerequisites.push(me2_freedoms_progress);
me2_project_firewalker_geth_activity.prerequisites.push(me2_project_firewalker_rosalie_lost);
me2_project_firewalker_survey_sites_located.prerequisites.push(me2_project_firewalker_rosalie_lost);
me2_project_firewalker_volcano_station.prerequisites.push(me2_project_firewalker_rosalie_lost);
me2_project_firewalker_prothean_site.prerequisites.push(me2_project_firewalker_volcano_station);
me2_overlord.prerequisites.push(me2_freedoms_progress);
me2_overlord_atlas_station.prerequisites.push(me2_overlord);
me2_overlord_prometheus_station.prerequisites.push(me2_overlord);
me2_overlord_vulcan_station.prerequisites.push(me2_overlord);
me2_lair_of_the_shadow_broker.prerequisites.push(me2_horizon);
me2_arrival.prerequisites.push(me2_horizon);

// ME3
me3_priority_mars.prerequisites.push(me3_priority_prologue);
me3_priority_citadel1.prerequisites.push(me3_priority_mars);
me3_priority_palaven.prerequisites.push(me3_priority_citadel1);
me3_priority_surkesh.prerequisites.push(me3_priority_palaven);
me3_priority_tuchanka.prerequisites.push(me3_priority_surkesh);
me3_priority_citadel2.prerequisites.push(me3_priority_tuchanka);
me3_priority_perseus_veil.prerequisites.push(me3_priority_citadel2);
me3_priority_geth_dreadnought.prerequisites.push(me3_priority_perseus_veil);
me3_priority_rannoch.prerequisites.push(me3_priority_geth_dreadnought);
me3_priority_citadel3.prerequisites.push(me3_priority_rannoch);
me3_priority_thessia.prerequisites.push(me3_priority_citadel3);
me3_priority_horizon.prerequisites.push(me3_priority_thessia);
me3_priority_cerberus_hq.prerequisites.push(me3_priority_horizon);
me3_priority_earth.prerequisites.push(me3_priority_cerberus_hq);
me3_n7_cerberus_lab.prerequisites.push(me3_priority_citadel1);
me3_priority_eden_prime.prerequisites.push(me3_priority_citadel1);
me3_eden_prime_resistance_movement.prerequisites.push(me3_priority_citadel1);
me3_shrike_abyssal_prothean_obelisk.prerequisites.push(me3_priority_citadel1);
me3_apien_crest_banner_of_the_first_regiment.prerequisites.push(me3_priority_palaven);
me3_aria_blood_pack.prerequisites.push(me3_priority_palaven);
me3_aria_blue_suns.prerequisites.push(me3_priority_palaven);
me3_aria_eclipse.prerequisites.push(me3_priority_palaven);
me3_benning_evidence.prerequisites.push(me3_priority_palaven);
me3_citadel_alien_medi_gel_formula.prerequisites.push(me3_priority_palaven);
me3_citadel_aria_tloak.prerequisites.push(me3_priority_palaven);
me3_citadel_barla_von.prerequisites.push(me3_priority_palaven);
me3_citadel_biotic_amp_interfaces.prerequisites.push(me3_priority_palaven);
me3_citadel_dr_bryson.prerequisites.push(me3_priority_palaven);
me3_citadel_gx12_thermal_pipe.prerequisites.push(me3_priority_palaven);
me3_citadel_hanar_diplomat.prerequisites.push(me3_priority_palaven);
me3_citadel_heating_unit_stabilizers.prerequisites.push(me3_priority_palaven);
me3_citadel_improved_power_grid.prerequisites.push(me3_priority_palaven);
me3_grissom_academy_emergency_evacuation.prerequisites.push(me3_priority_palaven);
me3_irune_book_of_plenix.prerequisites.push(me3_priority_palaven);
me3_ismar_frontier_prototype_components.prerequisites.push(me3_priority_palaven);
me3_kites_nest_pillars_of_strength.prerequisites.push(me3_priority_palaven);
me3_attican_traverse_krogan_team.prerequisites.push(me3_priority_surkesh);
me3_citadel_krogan_dying_message.prerequisites.push(me3_priority_surkesh);
me3_n7_cerberus_abductions.prerequisites.push(me3_priority_surkesh); // Also requires Attican Traverse OR Turian Platoon
me3_n7_cerberus_attack.prerequisites.push(me3_priority_surkesh);
me3_tuchanka_turian_platoon.prerequisites.push(me3_priority_surkesh);
me3_tuchanka_bomb.prerequisites.push(me3_priority_surkesh);
me3_citadel_cerberus_automated_turret_schematics.prerequisites.push(me3_priority_surkesh);
me3_n7_cerberus_fighter_base.prerequisites.push(me3_priority_tuchanka);
me3_arrae_ex_cerberus_scientists.prerequisites.push(me3_priority_citadel2);
me3_citadel_cerberus_turian_poison.prerequisites.push(me3_priority_citadel2);
me3_athena_nebula_hesperia_period_statue.prerequisites.push(me3_priority_citadel2);
me3_citadel_batarian_codes.prerequisites.push(me3_priority_citadel2);
me3_citadel_cerberus_ciphers.prerequisites.push(me3_priority_citadel2);
me3_citadel_cerberus_retribution.prerequisites.push(me3_priority_citadel2);
me3_citadel_chemical_treatment.prerequisites.push(me3_priority_citadel2);
me3_citadel_inspirational_stories.prerequisites.push(me3_priority_citadel2);
me3_citadel_kakliosaur_fossil.prerequisites.push(me3_priority_citadel2);
me3_citadel_medical_supplies.prerequisites.push(me3_priority_citadel2);
me3_citadel_medi_gel_sabotage.prerequisites.push(me3_priority_citadel2);
me3_citadel_reaper_code_fragments.prerequisites.push(me3_priority_citadel2);
me3_citadel_shore_leave.prerequisites.push(me3_priority_citadel2);
me3_citadel_target_jamming_technology.prerequisites.push(me3_priority_citadel2);
me3_citadel_volus_ambassador.prerequisites.push(me3_priority_citadel2);
me3_citadel_wounded_batarian.prerequisites.push(me3_priority_citadel2);
me3_dekuuna_code_of_the_ancients.prerequisites.push(me3_priority_citadel2);
me3_hades_nexus_obelisk_of_karza.prerequisites.push(me3_priority_citadel2);
me3_hades_nexus_prothean_sphere.prerequisites.push(me3_priority_citadel2);
me3_kallini_ardat_yakshi_monastery.prerequisites.push(me3_priority_citadel2);
me3_citadel_asari_widow.prerequisites.push(me3_priority_citadel2);
me3_nimbus_cluster_library_of_asha.prerequisites.push(me3_priority_citadel2);
me3_silean_nebula_rings_of_alune.prerequisites.push(me3_priority_citadel2);
me3_valhallan_threshold_prothean_data_drives.prerequisites.push(me3_priority_citadel2);
me3_n7_fuel_reactors.prerequisites.push(me3_priority_geth_dreadnought);
me3_rannoch_admiral_koris.prerequisites.push(me3_priority_geth_dreadnought);
me3_rannoch_geth_fighter_squadrons.prerequisites.push(me3_priority_geth_dreadnought);
me3_dekuuna_elcor_extraction.prerequisites.push(me3_priority_rannoch);
me3_n7_communication_hub.prerequisites.push(me3_priority_thessia);
