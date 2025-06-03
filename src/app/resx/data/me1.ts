import { ch, cl, loc, m, sys } from './builders';
import { GameData } from './types';

export const predicates = {
  isPrologueCompleted: () => me1_mission_prologue_find_the_beacon.isCompleted,
  isExposeSarenCompleted: () => me1_mission_expose_saren.isCompleted,
  onePlotMissionCompleted: () => {
    return me1_mission_find_liara_t_soni.isCompleted
      || me1_mission_the_thorian.isCompleted
      || me1_mission_rift_station_matriarch_benezia.isCompleted;
  },
  twoPlotMissionsCompleted: () => {
    let count = 0;

    if (me1_mission_find_liara_t_soni.isCompleted) count++;
    if (me1_mission_the_thorian.isCompleted) count++;
    if (me1_mission_rift_station_matriarch_benezia.isCompleted) count++;

    return count >= 2;
  },
  isNoveriaCompleted: () => me1_mission_rift_station_matriarch_benezia.isCompleted,
  isVirmireCompleted: () => me1_mission_assault.isCompleted,
  isIlosCompleted: () => me1_mission_find_the_conduit.isCompleted,
  isWrexRecruited: () => me1_mission_wrex.isCompleted,
  isGarrusRecruited: () => me1_mission_garrus.isCompleted,
  isGethIncursionsCompleted: () => me1_mission_geth_incursions.isCompleted,
  isMissingMarinesCompleted: () => me1_mission_missing_marines.isCompleted,
  isCerberusCompleted: () => me1_mission_cerberus.isCompleted,
  listeningPostsCompleted: () => me1_mission_listening_post_alpha.isCompleted && me1_mission_listening_post_theta.isCompleted,
};

// Prologue

const me1_mission_prologue_find_the_beacon = m('Find the Beacon', 'Prologue:_Find_the_Beacon', 'Find_the_Beacon')
  .build();

const me1_chapter_prologue = ch('Prologue')
  .hasMissions(me1_mission_prologue_find_the_beacon)
  .build();

// The Citadel I

  const me1_mission_expose_saren = m('Expose Saren', 'The_Citadel:_Expose_Saren', 'Expose_Saren')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

const me1_mission_asari_consort = m('Asari Consort', 'The_Citadel:_Asari_Consort', 'Asari_Consort')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

const me1_mission_doctor_michel = m('Doctor Michel', 'The_Citadel:_Doctor_Michel', 'Doctor_Michel')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

const me1_mission_homecoming = m('Homecoming', 'The_Citadel:_Homecoming', 'Homecoming')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

const me1_mission_jahleeds_fears = m('Jahleed\'s Fears', 'The_Citadel:_Jahleed\'s_Fears', 'Jahleeds_Fears')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

const me1_mission_presidium_prophet = m('Presidium Prophet', 'The_Citadel:_Presidium_Prophet', 'Presidium_Prophet')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

const me1_mission_reporters_request = m('Reporter\'s Request', 'The_Citadel:_Reporter\'s_Request', 'Reporters_Request')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

const me1_mission_ritas_sister = m('Rita\'s Sister', 'The_Citadel:_Rita\'s_Sister', 'Ritas_Sister')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

const me1_mission_scan_the_keepers = m('Scan the Keepers', 'The_Citadel:_Scan_the_Keepers', 'Scan_the_Keepers')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

const me1_mission_schells_the_gambler = m('Schells the Gambler', 'The_Citadel:_Schells_the_Gambler', 'Schells_the_Gambler')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

const me1_mission_signal_tracking = m('Signal Tracking', 'The_Citadel:_Signal_Tracking', 'Signal_Tracking')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

const me1_mission_the_fan_1 = m('The Fan I', 'The_Citadel:_The_Fan_I', 'The_Fan_I')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

const me1_mission_xeltans_complaint = m('Xeltan\'s Complaint', 'The_Citadel:_Xeltan\'s_Complaint', 'Xeltans_Complaint')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

const me1_mission_wrex = m('Wrex', 'The_Citadel:_Wrex', 'Wrex')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

const me1_mission_garrus = m('Garrus', 'The_Citadel:_Garrus', 'Garrus')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

const me1_mission_hostile_takeover = m('Hostile Takeover', 'The_Citadel:_Hostile_Takeover', 'Hostile_Takeover')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

const me1_mission_privateers = m('Privateers', 'The_Citadel:_Privateers', 'Privateers')
  .availableWhen(predicates.isPrologueCompleted)
  .build();
  
const me1_mission_unusual_readings = m('Unusual Readings/Distress call', 'The_Citadel:_Unusual_Readings', 'Unusual_Readings')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

const me1_mission_strange_transmission = m('Strange Transmission/Major Kyle', 'The_Citadel:_Strange_Transmission', 'Strange_Transmission')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

const me1_mission_missing_marines = m('Missing Marines', 'The_Citadel:_Missing_Marines', 'Missing_Marines')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

const me1_chapter_the_citadel_1 = ch('The Citadel I')
  .hasMissions(
    me1_mission_expose_saren,
    me1_mission_asari_consort,
    me1_mission_doctor_michel,
    me1_mission_homecoming,
    me1_mission_jahleeds_fears,
    me1_mission_presidium_prophet,
    me1_mission_reporters_request,
    me1_mission_ritas_sister,
    me1_mission_scan_the_keepers,
    me1_mission_schells_the_gambler,
    me1_mission_signal_tracking,
    me1_mission_the_fan_1,
    me1_mission_xeltans_complaint,
    me1_mission_wrex,
    me1_mission_garrus,
  )
  .canAcquireMissions(
    me1_mission_hostile_takeover,
    me1_mission_privateers,
    me1_mission_unusual_readings,
    me1_mission_strange_transmission,
    me1_mission_missing_marines,
  )
  .build();

// Therum

const me1_mission_find_liara_t_soni = m('Find Liara T\'soni', 'Therum:_Find_Liara_T\'soni', 'Find_Liara_T_soni')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_chapter_therum = ch('Therum')
  .hasMissions(me1_mission_find_liara_t_soni)
  .build();

// Feros

const me1_mission_geth_attack = m('Geth Attack', 'Feros:_Geth_Attack', 'Geth_Attack')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();
  
const me1_mission_the_thorian = m('The Thorian', 'Feros:_The_Thorian', 'The_Thorian')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_data_recovery = m('Data Recovery', 'Feros:_Data_Recovery', 'Data_Recovery')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_data_geth_in_the_tunnels = m('Geth in the Tunnels', 'Feros:_Geth_in_the_Tunnels', 'Geth_in_the_Tunnels')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_power_cells = m('Power Cells', 'Feros:_Power_Cells', 'Power_Cells')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_varren_meat = m('Varren Meat', 'Feros:_Varren_Meat', 'Varren_Meat')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_water_restoration = m('Water Restoration', 'Feros:_Water_Restoration', 'Water_Restoration')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_chapter_feros = ch('Feros')
  .hasMissions(
    me1_mission_geth_attack,
    me1_mission_the_thorian,
    me1_mission_data_recovery,
    me1_mission_data_geth_in_the_tunnels,
    me1_mission_power_cells,
    me1_mission_varren_meat,
    me1_mission_water_restoration,
  )
  .build();

// Noveria

const me1_mission_geth_interest = m('Geth Interest', 'Noveria:_Geth_Interest', 'Geth_Interest')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_espionage = m('Espionage', 'Noveria:_Espionage', 'Espionage')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_smuggling = m('Smuggling', 'Noveria:_Smuggling', 'Smuggling')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_leave_port_hanshan = m('Leave Port Hanshan', 'Noveria:_Leave_Port_Hanshan', 'Leave_Port_Hanshan')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_leave_port_hanshan_lorik_qui_in = m('Leave Port Hanshan: Lorik Qui\'in', 'Noveria:_Leave_Port_Hanshan_Lorik_Qui\'in', 'Leave_Port_Hanshan_Lorik_Qui_in')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_peak_15 = m('Peak 15', 'Noveria:_Peak_15', 'Peak_15')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_peak_15_reconnect_landlines = m('Peak 15: Reconnect Landlines', 'Noveria:_Peak_15_Reconnect_Landlines', 'Peak_15_Reconnect_Landlines')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_peak_15_reactor_repair = m('Peak 15: Reactor Repair', 'Noveria:_Peak_15_Reactor_Repair', 'Peak_15_Reactor_Repair')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_peak_15_contamination = m('Peak 15: Contamination', 'Noveria:_Peak_15_Contamination', 'Peak_15_Contamination')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_rift_station = m('Rift Station', 'Noveria:_Rift_Station', 'Rift_Station')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_rift_station_quarantine = m('Rift Station: Quarantine', 'Noveria:_Rift_Station_Quarantine', 'Rift_Station_Quarantine')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_rift_station_matriarch_benezia = m('Rift Station: Matriarch Benezia', 'Noveria:_Rift_Station_Matriarch_Benezia', 'Rift_Station_Matriarch_Benezia')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_rift_station_hot_labs = m('Rift Station: Hot Labs', 'Noveria:_Rift_Station_Hot_Labs', 'Rift_Station_Hot_Labs')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_asari_diplomacy = m('Asari Diplomacy', 'The_Citadel:_Asari_Diplomacy', 'Asari_Diplomacy')
  .availableWhen(predicates.onePlotMissionCompleted)
  .build();

const me1_chapter_noveria = ch('Noveria')
  .hasMissions(
    me1_mission_geth_interest,
    me1_mission_espionage,
    me1_mission_smuggling,
    me1_mission_leave_port_hanshan,
    me1_mission_leave_port_hanshan_lorik_qui_in,
    me1_mission_peak_15,
    me1_mission_peak_15_reconnect_landlines,
    me1_mission_peak_15_reactor_repair,
    me1_mission_peak_15_contamination,
    me1_mission_rift_station,
    me1_mission_rift_station_quarantine,
    me1_mission_rift_station_matriarch_benezia,
    me1_mission_rift_station_hot_labs,
  )
  .canAcquireMissions(me1_mission_asari_diplomacy)
  .build();

// The Citadel II

const me1_mission_snap_inspection = m('Snap Inspection', 'The_Citadel:_Snap_Inspection', 'Snap_Inspection')
  .availableWhen(predicates.onePlotMissionCompleted)
  .build();

const me1_mission_i_remember_me = m('I Remember Me', 'The_Citadel:_I_Remember_Me', 'I_Remember_Me')
  .availableWhen(predicates.onePlotMissionCompleted)
  .withAdditionalInfo('Only available if Shepard has the Colonist background.')
  .build();

const me1_mission_old_friends = m('Old Friends', 'The_Citadel:_Old_Friends', 'Old_Friends')
  .availableWhen(predicates.onePlotMissionCompleted)
  .withAdditionalInfo('Only available if Shepard has the Earthborn background.')
  .build();

const me1_mission_old_unhappy_far_off_things = m('Old, Unhappy, Far-Off Things', 'The_Citadel:_Old,_Unhappy,_Far-Off_Things', 'Old_Unhappy_Far_off_Things')
  .availableWhen(predicates.onePlotMissionCompleted)
  .withAdditionalInfo('Only available if Shepard has the Spacer background.')
  .build();

const me1_mission_the_fourth_estate = m('The Fourth Estate', 'The_Citadel:_The_Fourth_Estate', 'The_Fourth_Estate')
  .availableWhen(predicates.onePlotMissionCompleted)
  .build();

const me1_mission_the_fan_2 = m('The Fan II', 'The_Citadel:_The_Fan_II', 'The_Fan_II')
  .availableWhen(() => predicates.onePlotMissionCompleted() && me1_mission_the_fan_1.isCompleted)
  .build();

const me1_mission_family_matter = m('Family Matter', 'The_Citadel:_Family_Matter', 'Family_Matter')
  .availableWhen(predicates.onePlotMissionCompleted)
  .build();

const me1_mission_planting_a_bug = m('Planting a Bug', 'The_Citadel:_Planting_a_Bug', 'Planting_a_Bug')
  .availableWhen(predicates.onePlotMissionCompleted)
  .build();

const me1_chapter_the_citadel_2 = ch('The Citadel II')
  .hasMissions(
    me1_mission_snap_inspection,
    me1_mission_i_remember_me,
    me1_mission_old_friends,
    me1_mission_old_unhappy_far_off_things,
    me1_mission_the_fourth_estate,
    me1_mission_the_fan_2,
    me1_mission_family_matter,
    me1_mission_planting_a_bug,
  )
  .build();

// The Citadel III

const me1_mission_the_fan_3 = m('The Fan III', 'The_Citadel:_The_Fan_III', 'The_Fan_III')
  .availableWhen(() => predicates.twoPlotMissionsCompleted() && me1_mission_the_fan_2.isCompleted)
  .build();

const me1_chapter_the_citadel_3 = ch('The Citadel III')
  .hasMissions(me1_mission_the_fan_3)
  .build();

// Virmire

const me1_mission_saren_plan = m('Saren\'s Plan', 'Virmire:_Saren\'s_Plan', 'Saren\'s_Plan')
  .availableWhen(predicates.twoPlotMissionsCompleted)
  .build();

const me1_mission_assault = m('Assault', 'Virmire:_Assault', 'Assault')
  .availableWhen(predicates.twoPlotMissionsCompleted)
  .build();

const me1_chapter_virmire = ch('Virmire')
  .hasMissions(
    me1_mission_saren_plan,
    me1_mission_assault,
  )
  .build();

// The Citadel IV (Lockdown)

const me1_mission_our_own_worst_enemy = m('Our Own Worst Enemy', 'The_Citadel:_Our_Own_Worst_Enemy', 'Our_Own_Worst_Enemy')
  .availableWhen(predicates.isVirmireCompleted)
  .build();

const me1_mission_negotiators_request = m('Negotiator\'s Request', 'The_Citadel:_Negotiator\'s_Request', 'Negotiator\'s_Request')
  .availableWhen(predicates.isVirmireCompleted)
  .build();

const me1_chapter_the_citadel_4 = ch('The Citadel IV (Lockdown)')
  .hasMissions(
    me1_mission_our_own_worst_enemy,
    me1_mission_negotiators_request,
  )
  .build();

// Race against time

const me1_mission_find_the_conduit = m('Ilos: Find the Conduit', 'Ilos:_Find_the_Conduit', 'Find_the_Conduit')
  .availableWhen(predicates.isVirmireCompleted)
  .withAdditionalInfo('This is the point of no return. Once the player heads to Ilos, the rest of the game proceeds in locked progression with no possibility to complete any assignments.')
  .build();

const me1_mission_final_battle = m('Final Battle', 'Final_Battle', 'Final_Battle')
  .availableWhen(predicates.isIlosCompleted)
  .build();

const me1_chapter_race_against_time = ch('Race against time')
  .hasMissions(
    me1_mission_find_the_conduit,
    me1_mission_final_battle,
  )
  .build();

// Uncharted systems & assignments

const me1_mission_the_negotiation = m('The Negotiation', 'The_Negotiation', 'The_Negotiation')
  .availableWhen(predicates.isExposeSarenCompleted)
  .withAdditionalInfo('Only available when the player hits 80% Renegade, or 90% Renegade if the player had attained 80% Paragon first.')
  .build();

const me1_mission_lost_freighter = m('Lost Freighter', 'Lost_Freighter', 'Lost_Freighter')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_missing_survey_team = m('Missing Survey Team', 'Missing_Survey_Team', 'Missing_Survey_Team')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_besieged_base = m('Besieged Base', 'Besieged_Base', 'Besieged_Base')
  .availableWhen(predicates.isExposeSarenCompleted)
  .withAdditionalInfo('Only available when the player hits 80% Paragon, or 90% Paragon if the player had attained 80% Renegade first.')
  .build();

const me1_mission_hostage = m('Hostage', 'Hostage', 'Hostage')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_lost_module = m('Lost Module', 'Lost_Module', 'Lost_Module')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_geth_incursions = m('Geth Incursions', 'Geth_Incursions', 'Geth_Incursions')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_cerberus = m('Cerberus', 'Cerberus', 'Cerberus')
  .availableWhen(predicates.isMissingMarinesCompleted)
  .build();

const me1_mission_hades_dogs = m('Hades Dogs', 'Hades_Dogs', 'Hades_Dogs')
  .availableWhen(predicates.isCerberusCompleted)
  .build();

const me1_mission_espionage_probe = m('Espionage Probe', 'Espionage_Probe', 'Espionage_Probe')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_dead_scientists = m('Dead Scientists', 'Dead_Scientists', 'Dead_Scientists')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

const me1_mission_wrex_family_armor = m('Wrex: Family Armor', 'Wrex:_Family_Armor', 'Wrex_Family_Armor')
  .availableWhen(predicates.isWrexRecruited)
  .build();

const me1_mission_garrus_find_dr_saleon = m('Garrus: Find Dr. Saleon', 'Garrus:_Find_Dr._Saleon', 'Garrus_Find_Dr._Saleon')
  .availableWhen(predicates.isGarrusRecruited)
  .build();

const me1_mission_tali_pilgrimage = m('Tali: Pilgrimage/Tali and the Geth', 'Tali:_Pilgrimage', 'Tali_Pilgrimage')
  .availableWhen(predicates.isGethIncursionsCompleted)
  .build();

const me1_mission_rogue_vi = m('Rogue VI', 'Rogue_VI', 'Rogue_VI')
  .availableWhen(predicates.isExposeSarenCompleted)
  .withAdditionalInfo('This assignment is triggered after reaching level 20 (or level 11 in Mass Effect Legendary Edition with Legendary Mode) when next traveling to another system.')
  .build();

const me1_mission_listening_post_alpha = m('Listening Post Alpha', 'Listening_Post_Alpha', 'Listening_Post_Alpha')
  .availableWhen(predicates.isNoveriaCompleted)
  .build();

const me1_mission_listening_post_theta = m('Listening Post Theta', 'Listening_Post_Theta', 'Listening_Post_Theta')
  .availableWhen(predicates.isNoveriaCompleted)
  .build();

const me1_mission_depot_sigma_23 = m('Depot Sigma-23', 'Depot_Sigma_23', 'Depot_Sigma_23')
  .availableWhen(predicates.listeningPostsCompleted)
  .build();

const me1_mission_bring_down_the_sky = m('Bring Down the Sky', 'Bring_Down_the_Sky', 'Bring_Down_the_Sky')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

// Gemini Sigma

const me1_location_gemini_sigma_han_mavigon = loc('Mavigon')
  .hasMissions(me1_mission_hostile_takeover)
  .build();

const me1_location_gemini_sigma_han_patatanlis = loc('Patatanlis')
  .build();

const me1_location_gemini_sigma_han_paravlin = loc('Paravlin')
  .build();

const me1_system_gemini_sigma_han = sys('Han')
  .hasLocations(
    me1_location_gemini_sigma_han_mavigon,
    me1_location_gemini_sigma_han_patatanlis,
    me1_location_gemini_sigma_han_paravlin,
  )
  .build();

const me1_location_gemini_sigma_ming_parag = loc('Parag')
  .build();

const me1_location_gemini_sigma_ming_altanorch = loc('Altanorch')
  .build();

const me1_location_gemini_sigma_ming_msv_worthington = loc('MSV Worthington')
  .hasMissions(me1_mission_lost_freighter)
  .build();

const me1_system_gemini_sigma_ming = sys('Ming')
  .hasLocations(
    me1_location_gemini_sigma_ming_parag,
    me1_location_gemini_sigma_ming_altanorch,
    me1_location_gemini_sigma_ming_msv_worthington,
  )
  .build();

const me1_cluster_gemini_sigma = cl('Gemini Sigma', 'Gemini_Sigma', 'Gemini_Sigma')
  .hasSystems(
    me1_system_gemini_sigma_han,
    me1_system_gemini_sigma_ming,
  )
  .build();

// Hades Gamma

const me1_location_hades_gamma_antaeus_edmos = loc('Edmos')
  .build();

const me1_location_hades_gamma_antaeus_ploba = loc('Ploba')
  .build();

const me1_location_hades_gamma_antaeus_vemal = loc('Vemal')
  .build();

const me1_location_hades_gamma_antaeus_trebin = loc('Trebin')
  .hasMissions(me1_mission_missing_survey_team)
  .build();

const me1_system_hades_gamma_antaeus = sys('Antaeus')
  .hasLocations(
    me1_location_hades_gamma_antaeus_edmos,
    me1_location_hades_gamma_antaeus_ploba,
    me1_location_hades_gamma_antaeus_vemal,
    me1_location_hades_gamma_antaeus_trebin,
  )
  .build();

const me1_location_hades_gamma_cacus_zayarter = loc('Zayarter')
  .build();

const me1_location_hades_gamma_cacus_faringar = loc('Faringar')
  .build();

const me1_location_hades_gamma_cacus_chohe = loc('Chohe')
  .hasMissions(me1_mission_besieged_base)
  .build();

const me1_system_hades_gamma_cacus = sys('Cacus')
  .hasLocations(
    me1_location_hades_gamma_cacus_zayarter,
    me1_location_hades_gamma_cacus_faringar,
    me1_location_hades_gamma_cacus_chohe,
  )
  .build();

const me1_location_hades_gamma_dis_nearrum = loc('Nearrum')
  .build();

const me1_location_hades_gamma_dis_metallic_asteroid = loc('Metallic Asteroid')
  .build();

const me1_location_hades_gamma_dis_raysha = loc('Raysha')
  .build();

const me1_location_hades_gamma_dis_klensal = loc('Klensal')
  .hasMissions(me1_mission_hostile_takeover)
  .build();

const me1_system_hades_gamma_dis = sys('Dis')
  .hasLocations(
    me1_location_hades_gamma_dis_nearrum,
    me1_location_hades_gamma_dis_metallic_asteroid,
    me1_location_hades_gamma_dis_raysha,
    me1_location_hades_gamma_dis_klensal,
  )
  .build();

const me1_location_hades_gamma_farinata_rocky_asteroid = loc('Rocky Asteroid')
  .build();

const me1_location_hades_gamma_farinata_juntauma = loc('Juntauma')
  .build();

const me1_location_hades_gamma_farinata_nepneu = loc('Nepneu')
  .build();

const me1_location_hades_gamma_farinata_msv_ontario = loc('MSV Ontario')
  .hasMissions(me1_mission_hostage)
  .build();

const me1_system_hades_gamma_farinata = sys('Farinata')
  .hasLocations(
    me1_location_hades_gamma_farinata_rocky_asteroid, 
    me1_location_hades_gamma_farinata_juntauma,
    me1_location_hades_gamma_farinata_nepneu,
    me1_location_hades_gamma_farinata_msv_ontario,
  )
  .build();

const me1_location_hades_gamma_plutus_mingito = loc('Mingito')
  .build();

const me1_location_hades_gamma_plutus_clocrolis = loc('Clocrolis')
  .build();

const me1_location_hades_gamma_plutus_nonuel = loc('Nonuel')
  .hasMissions(me1_mission_the_negotiation)
  .build();

const me1_system_hades_gamma_plutus = sys('Plutus')
  .hasLocations(
    me1_location_hades_gamma_plutus_mingito,
    me1_location_hades_gamma_plutus_clocrolis,
    me1_location_hades_gamma_plutus_nonuel,
  )
  .build();

const me1_cluster_hades_gamma = cl('Hades Gamma', 'Hades_Gamma', 'Hades_Gamma')
  .hasSystems(
    me1_system_hades_gamma_antaeus,
    me1_system_hades_gamma_cacus,
    me1_system_hades_gamma_dis,
    me1_system_hades_gamma_farinata,
    me1_system_hades_gamma_plutus,
  )
  .build();

const me1_location_horse_head_nebula_fortuna_maganlis = loc('Maganlis')
  .build();

const me1_location_horse_head_nebula_fortuna_therumlon = loc('Therumlon')
  .build();

const me1_location_horse_head_nebula_fortuna_amaranthine = loc('Amaranthine')
  .hasMissions(me1_mission_hostile_takeover)
  .build();

const me1_system_horse_head_nebula_fortuna = sys('Fortuna')
  .hasLocations(
    me1_location_horse_head_nebula_fortuna_maganlis,
    me1_location_horse_head_nebula_fortuna_therumlon,
    me1_location_horse_head_nebula_fortuna_amaranthine,
  )
  .build();

const me1_location_horse_head_nebula_pax_veles = loc('Veles')
  .build();

const me1_system_horse_head_nebula_pax = sys('Pax')
  .hasLocations(
    me1_location_horse_head_nebula_pax_veles,
  )
  .build();

const me1_location_horse_head_nebula_strenuus_yunthorl = loc('Yunthorl')
  .build();

const me1_location_horse_head_nebula_strenuus_antitarra = loc('Antitarra')
  .build();

const me1_location_horse_head_nebula_strenuus_msv_majesty = loc('MSV Majesty')
  .build();

const me1_location_horse_head_nebula_strenuus_xawin = loc('Xawin')
  .hasMissions(me1_mission_privateers)
  .build();

const me1_system_horse_head_nebula_strenuus = sys('Strenuus')
  .hasLocations(
    me1_location_horse_head_nebula_strenuus_yunthorl,
    me1_location_horse_head_nebula_strenuus_antitarra,
    me1_location_horse_head_nebula_strenuus_msv_majesty,
    me1_location_horse_head_nebula_strenuus_xawin,
  )
  .build();

const me1_cluster_horse_head_nebula = cl('Horse Head Nebula', 'Horse_Head_Nebula', 'Horse_Head_Nebula')
  .hasSystems(
    me1_system_horse_head_nebula_fortuna,
    me1_system_horse_head_nebula_pax,
    me1_system_horse_head_nebula_strenuus,
  )
  .build();

// Argos Rho

const me1_location_argos_rho_gorgon_unidentified_space_facility = loc('Unidentified Space Facility')
  .hasMissions(me1_mission_depot_sigma_23)
  .build();

const me1_system_argos_rho_gorgon = sys('Gorgon')
  .hasLocations(
    me1_location_argos_rho_gorgon_unidentified_space_facility,
  )
  .build();

const me1_location_argos_rho_hydra_canrum = loc('Canrum')
  .build();

const me1_location_argos_rho_hydra_syba = loc('Syba')
  .build();

const me1_location_argos_rho_hydra_metgos = loc('Metgos')
.hasMissions(me1_mission_unusual_readings)
  .build();

const me1_system_argos_rho_hydra = sys('Hydra')
  .hasLocations(
    me1_location_argos_rho_hydra_canrum,
    me1_location_argos_rho_hydra_syba,
    me1_location_argos_rho_hydra_metgos,
  )
  .build();

const me1_location_argos_rho_phoenix_patashi = loc('Patashi')
  .build();

const me1_location_argos_rho_phoenix_carbonaceous_asteroid = loc('Carbonaceous Asteroid')
  .build();

const me1_location_argos_rho_phoenix_vebinok = loc('Vebinok')
  .build();

const me1_location_argos_rho_phoenix_tuntau = loc('Tuntau')
  .hasMissions(me1_mission_wrex_family_armor)
  .build();

const me1_system_argos_rho_phoenix = sys('Phoenix')
  .hasLocations(
    me1_location_argos_rho_phoenix_patashi,
    me1_location_argos_rho_phoenix_carbonaceous_asteroid,
    me1_location_argos_rho_phoenix_vebinok,
    me1_location_argos_rho_phoenix_tuntau,
  )
  .build();

const me1_cluster_argos_rho = cl('Argos Rho', 'Argos_Rho', 'Argos_Rho')
  .hasSystems(
    me1_system_argos_rho_gorgon,
    me1_system_argos_rho_hydra,
    me1_system_argos_rho_phoenix,
  )
  .build();

// Attican Beta

const me1_location_attican_beta_hercules_syided = loc('Syided')
  .build();

const me1_location_attican_beta_hercules_zatorus = loc('Zatorus')
  .build();

const me1_location_attican_beta_hercules_eletania = loc('Eletania')
  .hasMissions(me1_mission_lost_module)
  .build();

const me1_system_attican_beta_hercules = sys('Hercules')
  .hasLocations(
    me1_location_attican_beta_hercules_syided,
    me1_location_attican_beta_hercules_zatorus,
    me1_location_attican_beta_hercules_eletania,
  )
  .build();

const me1_location_attican_beta_theseus_sharring = loc('Sharring')
  .build();

const me1_location_attican_beta_theseus_quana = loc('Quana')
  .build();

const me1_system_attican_beta_theseus = sys('Theseus')
  .hasLocations(
    me1_location_attican_beta_theseus_sharring,
    me1_location_attican_beta_theseus_quana,
  )
  .build();

const me1_cluster_attican_beta = cl('Attican Beta', 'Attican_Beta', 'Attican_Beta')
  .hasSystems(
    me1_system_attican_beta_hercules,
    me1_system_attican_beta_theseus,
  )
  .build();

// Armstrong Nebula

const me1_location_armstrong_nebula_gagarin_junthor = loc('Junthor')
  .build();

const me1_location_armstrong_nebula_gagarin_antirumgon = loc('Antirumgon')
  .build();

const me1_location_armstrong_nebula_gagarin_rayingri = loc('Rayingri')
  .hasMissions(me1_mission_geth_incursions)
  .build();

const me1_system_armstrong_nebula_gagarin = sys('Gagarin')
  .hasLocations(
    me1_location_armstrong_nebula_gagarin_junthor,
    me1_location_armstrong_nebula_gagarin_antirumgon,
    me1_location_armstrong_nebula_gagarin_rayingri,
  )
  .build();

const me1_location_armstrong_nebula_grissom_benda = loc('Benda')
  .build();

const me1_location_armstrong_nebula_grissom_zaherux = loc('Zaherux')
  .build();

const me1_location_armstrong_nebula_grissom_rocky_asteroid = loc('Rocky Asteroid')
  .build();

const me1_location_armstrong_nebula_grissom_solcrum = loc('Solcrum')
  .hasMissions(me1_mission_geth_incursions)
  .build();

const me1_system_armstrong_nebula_grissom = sys('Grissom')
  .hasLocations(
    me1_location_armstrong_nebula_grissom_benda,
    me1_location_armstrong_nebula_grissom_zaherux,
    me1_location_armstrong_nebula_grissom_rocky_asteroid,
    me1_location_armstrong_nebula_grissom_solcrum,
  )
  .build();

const me1_location_armstrong_nebula_hong_matar = loc('Matar')
  .build();

const me1_location_armstrong_nebula_hong_treagir = loc('Treagir')
  .build();

const me1_location_armstrong_nebula_hong_casbin = loc('Casbin')
  .hasMissions(me1_mission_geth_incursions)
  .build();

const me1_system_armstrong_nebula_hong = sys('Hong')
  .hasLocations(
    me1_location_armstrong_nebula_hong_matar,
    me1_location_armstrong_nebula_hong_treagir,
    me1_location_armstrong_nebula_hong_casbin,
  )
  .build();

const me1_location_armstrong_nebula_tereshkova_carbonaceus_asteroid = loc('Carbonaceus Asteroid')
  .build();

const me1_location_armstrong_nebula_tereshkova_patamalrus = loc('Patamalrus')
  .build();

const me1_location_armstrong_nebula_tereshkova_thegeuse = loc('Thegeuse')
  .build();

const me1_location_armstrong_nebula_tereshkova_antibaar = loc('Antibaar')
  .hasMissions(me1_mission_geth_incursions)
  .build();

const me1_system_armstrong_nebula_tereshkova = sys('Tereshkova')
  .hasLocations(
    me1_location_armstrong_nebula_tereshkova_carbonaceus_asteroid,
    me1_location_armstrong_nebula_tereshkova_patamalrus,
    me1_location_armstrong_nebula_tereshkova_thegeuse,
    me1_location_armstrong_nebula_tereshkova_antibaar,
  )
  .build();

const me1_location_armstrong_nebula_vamshi_pregel = loc('Pregel')
  .build();

const me1_location_armstrong_nebula_vamshi_maji = loc('Maji')
  .hasMissions(me1_mission_geth_incursions)
  .build();

const me1_system_armstrong_nebula_vamshi = sys('Vamshi')
  .hasLocations(
    me1_location_armstrong_nebula_vamshi_pregel,
    me1_location_armstrong_nebula_vamshi_maji,
  )
  .build();

const me1_cluster_armstrong_nebula = cl('Armstrong Nebula', 'Armstrong_Nebula', 'Armstrong_Nebula')
  .hasSystems(
    me1_system_armstrong_nebula_gagarin,
    me1_system_armstrong_nebula_grissom,
    me1_system_armstrong_nebula_hong,
    me1_system_armstrong_nebula_tereshkova,
    me1_system_armstrong_nebula_vamshi,
  )
  .build();

// Hawking Eta

const me1_location_hawking_eta_century_metallic_asteroid = loc('Metallic Asteroid')
  .build();

const me1_location_hawking_eta_century_canctra = loc('Canctra')
  .build();

const me1_location_hawking_eta_century_tharopto = loc('Tharopto')
  .build();

const me1_location_hawking_eta_century_presrop = loc('Presrop')
  .hasMissions(me1_mission_strange_transmission)
  .build();

const me1_system_hawking_eta_century = sys('Century')
  .hasLocations(
    me1_location_hawking_eta_century_metallic_asteroid,
    me1_location_hawking_eta_century_canctra,
    me1_location_hawking_eta_century_tharopto,
    me1_location_hawking_eta_century_presrop,
  )
  .build();

const me1_cluster_hawking_eta = cl('Hawking Eta', 'Hawking_Eta', 'Hawking_Eta')
  .hasSystems(
    me1_system_hawking_eta_century,
  )
  .build();

// Artemis Tau

const me1_location_artemis_tau_athens_proteus = loc('Proteus')
  .build();

const me1_location_artemis_tau_athens_circe = loc('Circe')
  .build();

const me1_location_artemis_tau_athens_pharos = loc('Pharos')
  .build();

const me1_system_artemis_tau_athens = sys('Athens')
  .hasLocations(
    me1_location_artemis_tau_athens_proteus,
    me1_location_artemis_tau_athens_circe,
    me1_location_artemis_tau_athens_pharos,
  )
  .build();

const me1_location_artemis_tau_knossos_metallic_asteroid = loc('Metallic Asteroid')
  .build();

const me1_location_artemis_tau_knossos_carbonaceous_asteroid = loc('Carbonaceous Asteroid')
  .build();

const me1_location_artemis_tau_knossos_archanes = loc('Archanes')
  .build();

const me1_system_artemis_tau_knossos = sys('Knossos')
  .hasLocations(
    me1_location_artemis_tau_knossos_metallic_asteroid,
    me1_location_artemis_tau_knossos_carbonaceous_asteroid,
    me1_location_artemis_tau_knossos_archanes,
  )
  .build();

const me1_location_artemis_tau_macedon_porolan = loc('Porolan')
  .build();

const me1_location_artemis_tau_macedon_metallic_asteroid = loc('Metallic Asteroid')
  .build();

const me1_location_artemis_tau_macedon_fargeluse = loc('Fargeluse')
  .build();

const me1_location_artemis_tau_macedon_sharjila = loc('Sharjila')
  .hasMissions(me1_mission_asari_diplomacy)
  .build();

const me1_system_artemis_tau_macedon = sys('Macedon')
  .hasLocations(
    me1_location_artemis_tau_macedon_porolan,
    me1_location_artemis_tau_macedon_metallic_asteroid,
    me1_location_artemis_tau_macedon_fargeluse,
    me1_location_artemis_tau_macedon_sharjila,
  )
  .build();

const me1_location_artemis_tau_sparta_asteroid_cluster = loc('Asteroid Cluster')
  .build();

const me1_location_artemis_tau_sparta_ontamalca = loc('Ontamalca')
  .build();

const me1_location_artemis_tau_sparta_alsages = loc('Alsages')
  .build();

const me1_location_artemis_tau_sparta_edolus = loc('Edolus')
  .hasMissions(me1_mission_missing_marines)
  .build();

const me1_system_artemis_tau_sparta = sys('Sparta')
  .hasLocations(
    me1_location_artemis_tau_sparta_asteroid_cluster,
    me1_location_artemis_tau_sparta_ontamalca,
    me1_location_artemis_tau_sparta_alsages,
    me1_location_artemis_tau_sparta_edolus,
  )
  .build();

const me1_cluster_artemis_tau = cl('Artemis Tau', 'Artemis_Tau', 'Artemis_Tau')
  .hasSystems(
    me1_system_artemis_tau_athens,
    me1_system_artemis_tau_knossos,
    me1_system_artemis_tau_macedon,
    me1_system_artemis_tau_sparta,
  )
  .build();

// Voyager Cluster

const me1_location_voyager_cluster_amazon_sonedma = loc('Sonedma')
  .build();

const me1_location_voyager_cluster_amazon_sybin = loc('Sybin')
  .build();

const me1_location_voyager_cluster_amazon_tremar = loc('Tremar')
  .build();

const me1_location_voyager_cluster_amazon_agebinium = loc('Agebinium')
  .hasMissions(me1_mission_espionage_probe)
  .build();

const me1_system_voyager_cluster_amazon = sys('Amazon')
  .hasLocations(
    me1_location_voyager_cluster_amazon_sonedma,
    me1_location_voyager_cluster_amazon_sybin,
    me1_location_voyager_cluster_amazon_tremar,
    me1_location_voyager_cluster_amazon_agebinium,
  )
  .build();

const me1_location_voyager_cluster_columbia_ontaheter = loc('Ontaheter')
  .build();

const me1_location_voyager_cluster_columbia_gromar = loc('Gromar')
  .build();

const me1_location_voyager_cluster_columbia_nepheron = loc('Nepheron')
  .hasMissions(me1_mission_hades_dogs)
  .build();

const me1_system_voyager_cluster_columbia = sys('Columbia')
  .hasLocations(
    me1_location_voyager_cluster_columbia_ontaheter,
    me1_location_voyager_cluster_columbia_gromar,
    me1_location_voyager_cluster_columbia_nepheron,
  )
  .build();

const me1_location_voyager_cluster_yangtze_dregir = loc('Dregir')
  .build();

const me1_location_voyager_cluster_yangtze_alrumter = loc('Alrumter')
  .build();

const me1_location_voyager_cluster_yangtze_patajiri = loc('Patajiri')
  .build();

const me1_location_voyager_cluster_yangtze_binthu = loc('Binthu')
  .hasMissions(me1_mission_cerberus)
  .build();

const me1_system_voyager_cluster_yangtze = sys('Yangtze')
  .hasLocations(
    me1_location_voyager_cluster_yangtze_dregir,
    me1_location_voyager_cluster_yangtze_alrumter,
    me1_location_voyager_cluster_yangtze_patajiri,
    me1_location_voyager_cluster_yangtze_binthu,
  )
  .build();

const me1_cluster_voyager_cluster = cl('Voyager Cluster', 'Voyager', 'Voyager')
  .hasSystems(
    me1_system_voyager_cluster_amazon,
    me1_system_voyager_cluster_columbia,
    me1_system_voyager_cluster_yangtze,
  )
  .build();

// Kepler Verge

const me1_location_kepler_verge_herschel_rocky_asteroid = loc('Rocky Asteroid')
  .build();

const me1_location_kepler_verge_herschel_msv_fedele = loc('MSV Fedele')
  .hasMissions(me1_mission_garrus_find_dr_saleon)
  .build();

const me1_system_kepler_verge_herschel = sys('Herschel')
  .hasLocations(
    me1_location_kepler_verge_herschel_rocky_asteroid,
    me1_location_kepler_verge_herschel_msv_fedele,
  )
  .build();

const me1_location_kepler_verge_newton_klencory = loc('Klencory')
  .build();

const me1_location_kepler_verge_newton_juncro = loc('Juncro')
  .build();

const me1_location_kepler_verge_newton_ontarom = loc('Ontarom')
  .hasMissions(me1_mission_dead_scientists)
  .build();

const me1_system_kepler_verge_newton = sys('Newton')
  .hasLocations(
    me1_location_kepler_verge_newton_klencory,
    me1_location_kepler_verge_newton_juncro,
    me1_location_kepler_verge_newton_ontarom,
  )
  .build();

const me1_cluster_kepler_verge = cl('Kepler Verge', 'Kepler_Verge', 'Kepler_Verge')
  .hasSystems(
    me1_system_kepler_verge_herschel,
    me1_system_kepler_verge_newton
  )
  .build();

// Local Cluster

const me1_location_local_cluster_sol_luna = loc('Luna')
  .hasMissions(me1_mission_rogue_vi)
  .build();

const me1_system_local_cluster_sol = sys('Sol')
  .hasLocations(
    me1_location_local_cluster_sol_luna,
  )
  .build();

const me1_cluster_local_cluster = cl('Local Cluster', 'Local_Cluster', 'Local_Cluster')
  .hasSystems(
    me1_system_local_cluster_sol,
  )
  .build();

// Exodus

const me1_location_exodus_asgard_asteroid_x57 = loc('Asteroid X57')
  .hasMissions(me1_mission_bring_down_the_sky)
  .build();

const me1_system_exodus_asgard = sys('Asgard')
  .hasLocations(
    me1_location_exodus_asgard_asteroid_x57,
  )
  .build();

const me1_cluster_exodus = cl('Exodus', 'Exodus', 'Exodus')
  .hasSystems(
    me1_system_exodus_asgard,
  )
  .build();

// Styx Theta

const me1_location_styx_theta_acheron_carbonaceous_asteroid = loc('Carbonaceous Asteroid')
  .build();

const me1_location_styx_theta_acheron_grosalgen = loc('Grosalgen')
  .build();

const me1_location_styx_theta_acheron_altahe = loc('Altahe')
  .hasMissions(me1_mission_listening_post_theta)
  .build();

const me1_system_styx_theta_acheron = sys('Acheron')
  .hasLocations(
    me1_location_styx_theta_acheron_carbonaceous_asteroid,
    me1_location_styx_theta_acheron_grosalgen,
    me1_location_styx_theta_acheron_altahe,
  )
  .build();

const me1_location_styx_theta_erebus_quaji = loc('Quaji')
  .build();

const me1_location_styx_theta_erebus_wermani = loc('Wermani')
  .build();

const me1_location_styx_theta_erebus_nepmos = loc('Nepmos')
  .hasMissions(me1_mission_listening_post_alpha)
  .build();

const me1_system_styx_theta_erebus = sys('Erebus')
  .hasLocations(
    me1_location_styx_theta_erebus_quaji,
    me1_location_styx_theta_erebus_wermani,
    me1_location_styx_theta_erebus_nepmos,
  )
  .build();

const me1_cluster_styx_theta = cl('Styx Theta', 'Styx_Theta', 'Styx_Theta')
  .hasSystems(
    me1_system_styx_theta_acheron,
    me1_system_styx_theta_erebus,
  )
  .build();

export const me1_game_data: GameData = {
  chapters: [
    me1_chapter_prologue,
    me1_chapter_the_citadel_1,
    me1_chapter_therum,
    me1_chapter_feros,
    me1_chapter_noveria,
    me1_chapter_the_citadel_2,
    me1_chapter_the_citadel_3,
    me1_chapter_virmire,
    me1_chapter_the_citadel_4,
    me1_chapter_race_against_time,
  ],
  missions: [
    me1_mission_prologue_find_the_beacon,
    me1_mission_expose_saren,
    me1_mission_asari_consort,
    me1_mission_doctor_michel,
    me1_mission_homecoming,
    me1_mission_jahleeds_fears,
    me1_mission_presidium_prophet,
    me1_mission_reporters_request,
    me1_mission_ritas_sister,
    me1_mission_scan_the_keepers,
    me1_mission_schells_the_gambler,
    me1_mission_signal_tracking,
    me1_mission_the_fan_1,
    me1_mission_xeltans_complaint,
    me1_mission_wrex,
    me1_mission_garrus,
    me1_mission_hostile_takeover,
    me1_mission_privateers,
    me1_mission_unusual_readings,
    me1_mission_strange_transmission,
    me1_mission_missing_marines,
    me1_mission_geth_attack,
    me1_mission_the_thorian,
    me1_mission_data_recovery,
    me1_mission_data_geth_in_the_tunnels,
    me1_mission_power_cells,
    me1_mission_varren_meat,
    me1_mission_water_restoration,
    me1_mission_geth_interest,
    me1_mission_espionage,
    me1_mission_smuggling,
    me1_mission_leave_port_hanshan,
    me1_mission_leave_port_hanshan_lorik_qui_in,
    me1_mission_peak_15,
    me1_mission_peak_15_reconnect_landlines,
    me1_mission_peak_15_reactor_repair,
    me1_mission_peak_15_contamination,
    me1_mission_rift_station,
    me1_mission_rift_station_quarantine,
    me1_mission_rift_station_matriarch_benezia,
    me1_mission_rift_station_hot_labs,
    me1_mission_snap_inspection,
    me1_mission_i_remember_me,
    me1_mission_old_friends,
    me1_mission_old_unhappy_far_off_things,
    me1_mission_asari_diplomacy,
    me1_mission_the_fourth_estate,
    me1_mission_the_fan_2,
    me1_mission_family_matter,
    me1_mission_planting_a_bug,
    me1_mission_the_fan_3,
    me1_mission_saren_plan,
    me1_mission_assault,
    me1_mission_our_own_worst_enemy,
    me1_mission_negotiators_request,
    me1_mission_find_the_conduit,
    me1_mission_final_battle,
    me1_mission_besieged_base,
    me1_mission_hostage,
    me1_mission_lost_module,
    me1_mission_geth_incursions,
    me1_mission_cerberus,
    me1_mission_hades_dogs,
    me1_mission_espionage_probe,
    me1_mission_dead_scientists,
    me1_mission_wrex_family_armor,
    me1_mission_garrus_find_dr_saleon,
    me1_mission_tali_pilgrimage,
    me1_mission_rogue_vi,
    me1_mission_listening_post_alpha,
    me1_mission_listening_post_theta,
    me1_mission_depot_sigma_23,
    me1_mission_bring_down_the_sky,
  ],
  clusters: [
    me1_cluster_gemini_sigma,
    me1_cluster_hades_gamma,
    me1_cluster_horse_head_nebula,
    me1_cluster_argos_rho,
    me1_cluster_attican_beta,
    me1_cluster_armstrong_nebula,
    me1_cluster_hawking_eta,
    me1_cluster_artemis_tau,
    me1_cluster_voyager_cluster,
    me1_cluster_kepler_verge,
    me1_cluster_local_cluster,
    me1_cluster_exodus,
    me1_cluster_styx_theta,
  ],
};
