import { m } from '../builders';

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

export const me1_mission_prologue_find_the_beacon = m('Find the Beacon', 'Prologue:_Find_the_Beacon', 'Find_the_Beacon')
  .build();

// The Citadel I

export const me1_mission_expose_saren = m('Expose Saren', 'The_Citadel:_Expose_Saren', 'Expose_Saren')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_asari_consort = m('Asari Consort', 'The_Citadel:_Asari_Consort', 'Asari_Consort')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_doctor_michel = m('Doctor Michel', 'The_Citadel:_Doctor_Michel', 'Doctor_Michel')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_homecoming = m('Homecoming', 'The_Citadel:_Homecoming', 'Homecoming')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_jahleeds_fears = m('Jahleed\'s Fears', 'The_Citadel:_Jahleed\'s_Fears', 'Jahleeds_Fears')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_presidium_prophet = m('Presidium Prophet', 'The_Citadel:_Presidium_Prophet', 'Presidium_Prophet')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_reporters_request = m('Reporter\'s Request', 'The_Citadel:_Reporter\'s_Request', 'Reporters_Request')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_ritas_sister = m('Rita\'s Sister', 'The_Citadel:_Rita\'s_Sister', 'Ritas_Sister')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_scan_the_keepers = m('Scan the Keepers', 'The_Citadel:_Scan_the_Keepers', 'Scan_the_Keepers')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_schells_the_gambler = m('Schells the Gambler', 'The_Citadel:_Schells_the_Gambler', 'Schells_the_Gambler')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_signal_tracking = m('Signal Tracking', 'The_Citadel:_Signal_Tracking', 'Signal_Tracking')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_the_fan_1 = m('The Fan I', 'The_Citadel:_The_Fan_I', 'The_Fan_I')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_xeltans_complaint = m('Xeltan\'s Complaint', 'The_Citadel:_Xeltan\'s_Complaint', 'Xeltans_Complaint')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_wrex = m('Wrex', 'The_Citadel:_Wrex', 'Wrex')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_garrus = m('Garrus', 'The_Citadel:_Garrus', 'Garrus')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_hostile_takeover = m('Hostile Takeover', 'The_Citadel:_Hostile_Takeover', 'Hostile_Takeover')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_privateers = m('Privateers', 'The_Citadel:_Privateers', 'Privateers')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_unusual_readings = m('Unusual Readings/Distress call', 'The_Citadel:_Unusual_Readings', 'Unusual_Readings')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_strange_transmission = m('Strange Transmission/Major Kyle', 'The_Citadel:_Strange_Transmission', 'Strange_Transmission')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_missing_marines = m('Missing Marines', 'The_Citadel:_Missing_Marines', 'Missing_Marines')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

// Therum

export const me1_mission_find_liara_t_soni = m('Find Liara T\'soni', 'Therum:_Find_Liara_T\'soni', 'Find_Liara_T_soni')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

// Feros

export const me1_mission_geth_attack = m('Geth Attack', 'Feros:_Geth_Attack', 'Geth_Attack')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_the_thorian = m('The Thorian', 'Feros:_The_Thorian', 'The_Thorian')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_data_recovery = m('Data Recovery', 'Feros:_Data_Recovery', 'Data_Recovery')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_data_geth_in_the_tunnels = m('Geth in the Tunnels', 'Feros:_Geth_in_the_Tunnels', 'Geth_in_the_Tunnels')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_power_cells = m('Power Cells', 'Feros:_Power_Cells', 'Power_Cells')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_varren_meat = m('Varren Meat', 'Feros:_Varren_Meat', 'Varren_Meat')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_water_restoration = m('Water Restoration', 'Feros:_Water_Restoration', 'Water_Restoration')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

// Noveria

export const me1_mission_geth_interest = m('Geth Interest', 'Noveria:_Geth_Interest', 'Geth_Interest')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_espionage = m('Espionage', 'Noveria:_Espionage', 'Espionage')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_smuggling = m('Smuggling', 'Noveria:_Smuggling', 'Smuggling')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_leave_port_hanshan = m('Leave Port Hanshan', 'Noveria:_Leave_Port_Hanshan', 'Leave_Port_Hanshan')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_leave_port_hanshan_lorik_qui_in = m('Leave Port Hanshan: Lorik Qui\'in', 'Noveria:_Leave_Port_Hanshan_Lorik_Qui\'in', 'Leave_Port_Hanshan_Lorik_Qui_in')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_peak_15 = m('Peak 15', 'Noveria:_Peak_15', 'Peak_15')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_peak_15_reconnect_landlines = m('Peak 15: Reconnect Landlines', 'Noveria:_Peak_15_Reconnect_Landlines', 'Peak_15_Reconnect_Landlines')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_peak_15_reactor_repair = m('Peak 15: Reactor Repair', 'Noveria:_Peak_15_Reactor_Repair', 'Peak_15_Reactor_Repair')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_peak_15_contamination = m('Peak 15: Contamination', 'Noveria:_Peak_15_Contamination', 'Peak_15_Contamination')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_rift_station = m('Rift Station', 'Noveria:_Rift_Station', 'Rift_Station')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_rift_station_quarantine = m('Rift Station: Quarantine', 'Noveria:_Rift_Station_Quarantine', 'Rift_Station_Quarantine')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_rift_station_matriarch_benezia = m('Rift Station: Matriarch Benezia', 'Noveria:_Rift_Station_Matriarch_Benezia', 'Rift_Station_Matriarch_Benezia')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_rift_station_hot_labs = m('Rift Station: Hot Labs', 'Noveria:_Rift_Station_Hot_Labs', 'Rift_Station_Hot_Labs')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_asari_diplomacy = m('Asari Diplomacy', 'The_Citadel:_Asari_Diplomacy', 'Asari_Diplomacy')
  .availableWhen(predicates.onePlotMissionCompleted)
  .build();

// The Citadel II

export const me1_mission_snap_inspection = m('Snap Inspection', 'The_Citadel:_Snap_Inspection', 'Snap_Inspection')
  .availableWhen(predicates.onePlotMissionCompleted)
  .build();

export const me1_mission_i_remember_me = m('I Remember Me', 'The_Citadel:_I_Remember_Me', 'I_Remember_Me')
  .availableWhen(predicates.onePlotMissionCompleted)
  .withAdditionalInfo('Only available if Shepard has the Colonist background.')
  .build();

export const me1_mission_old_friends = m('Old Friends', 'The_Citadel:_Old_Friends', 'Old_Friends')
  .availableWhen(predicates.onePlotMissionCompleted)
  .withAdditionalInfo('Only available if Shepard has the Earthborn background.')
  .build();

export const me1_mission_old_unhappy_far_off_things = m('Old, Unhappy, Far-Off Things', 'The_Citadel:_Old,_Unhappy,_Far-Off_Things', 'Old_Unhappy_Far_off_Things')
  .availableWhen(predicates.onePlotMissionCompleted)
  .withAdditionalInfo('Only available if Shepard has the Spacer background.')
  .build();

export const me1_mission_the_fourth_estate = m('The Fourth Estate', 'The_Citadel:_The_Fourth_Estate', 'The_Fourth_Estate')
  .availableWhen(predicates.onePlotMissionCompleted)
  .build();

export const me1_mission_the_fan_2 = m('The Fan II', 'The_Citadel:_The_Fan_II', 'The_Fan_II')
  .availableWhen(() => predicates.onePlotMissionCompleted() && me1_mission_the_fan_1.isCompleted)
  .build();

export const me1_mission_family_matter = m('Family Matter', 'The_Citadel:_Family_Matter', 'Family_Matter')
  .availableWhen(predicates.onePlotMissionCompleted)
  .build();

export const me1_mission_planting_a_bug = m('Planting a Bug', 'The_Citadel:_Planting_a_Bug', 'Planting_a_Bug')
  .availableWhen(predicates.onePlotMissionCompleted)
  .build();

// The Citadel III

export const me1_mission_the_fan_3 = m('The Fan III', 'The_Citadel:_The_Fan_III', 'The_Fan_III')
  .availableWhen(() => predicates.twoPlotMissionsCompleted() && me1_mission_the_fan_2.isCompleted)
  .build();

// Virmire

export const me1_mission_saren_plan = m('Saren\'s Plan', 'Virmire:_Saren\'s_Plan', 'Saren\'s_Plan')
  .availableWhen(predicates.twoPlotMissionsCompleted)
  .build();

export const me1_mission_assault = m('Assault', 'Virmire:_Assault', 'Assault')
  .availableWhen(predicates.twoPlotMissionsCompleted)
  .build();

// The Citadel IV (Lockdown)

export const me1_mission_our_own_worst_enemy = m('Our Own Worst Enemy', 'The_Citadel:_Our_Own_Worst_Enemy', 'Our_Own_Worst_Enemy')
  .availableWhen(predicates.isVirmireCompleted)
  .build();

export const me1_mission_negotiators_request = m('Negotiator\'s Request', 'The_Citadel:_Negotiator\'s_Request', 'Negotiator\'s_Request')
  .availableWhen(predicates.isVirmireCompleted)
  .build();

// Race against time

export const me1_mission_find_the_conduit = m('Ilos: Find the Conduit', 'Ilos:_Find_the_Conduit', 'Find_the_Conduit')
  .availableWhen(predicates.isVirmireCompleted)
  .withAdditionalInfo('This is the point of no return. Once the player heads to Ilos, the rest of the game proceeds in locked progression with no possibility to complete any assignments.')
  .build();

export const me1_mission_final_battle = m('Final Battle', 'Final_Battle', 'Final_Battle')
  .availableWhen(predicates.isIlosCompleted)
  .build();

// Uncharted systems & assignments

export const me1_mission_the_negotiation = m('The Negotiation', 'The_Negotiation', 'The_Negotiation')
  .availableWhen(predicates.isExposeSarenCompleted)
  .withAdditionalInfo('Only available when the player hits 80% Renegade, or 90% Renegade if the player had attained 80% Paragon first.')
  .build();

export const me1_mission_lost_freighter = m('Lost Freighter', 'Lost_Freighter', 'Lost_Freighter')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_missing_survey_team = m('Missing Survey Team', 'Missing_Survey_Team', 'Missing_Survey_Team')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_besieged_base = m('Besieged Base', 'Besieged_Base', 'Besieged_Base')
  .availableWhen(predicates.isExposeSarenCompleted)
  .withAdditionalInfo('Only available when the player hits 80% Paragon, or 90% Paragon if the player had attained 80% Renegade first.')
  .build();

export const me1_mission_hostage = m('Hostage', 'Hostage', 'Hostage')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_lost_module = m('Lost Module', 'Lost_Module', 'Lost_Module')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_geth_incursions = m('Geth Incursions', 'Geth_Incursions', 'Geth_Incursions')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_cerberus = m('Cerberus', 'Cerberus', 'Cerberus')
  .availableWhen(predicates.isMissingMarinesCompleted)
  .build();

export const me1_mission_hades_dogs = m('Hades Dogs', 'Hades_Dogs', 'Hades_Dogs')
  .availableWhen(predicates.isCerberusCompleted)
  .build();

export const me1_mission_espionage_probe = m('Espionage Probe', 'Espionage_Probe', 'Espionage_Probe')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_dead_scientists = m('Dead Scientists', 'Dead_Scientists', 'Dead_Scientists')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_wrex_family_armor = m('Wrex: Family Armor', 'Wrex:_Family_Armor', 'Wrex_Family_Armor')
  .availableWhen(predicates.isWrexRecruited)
  .build();

export const me1_mission_garrus_find_dr_saleon = m('Garrus: Find Dr. Saleon', 'Garrus:_Find_Dr._Saleon', 'Garrus_Find_Dr._Saleon')
  .availableWhen(predicates.isGarrusRecruited)
  .build();

export const me1_mission_tali_pilgrimage = m('Tali: Pilgrimage/Tali and the Geth', 'Tali:_Pilgrimage', 'Tali_Pilgrimage')
  .availableWhen(predicates.isGethIncursionsCompleted)
  .build();

export const me1_mission_rogue_vi = m('Rogue VI', 'Rogue_VI', 'Rogue_VI')
  .availableWhen(predicates.isExposeSarenCompleted)
  .withAdditionalInfo('This assignment is triggered after reaching level 20 (or level 11 in Mass Effect Legendary Edition with Legendary Mode) when next traveling to another system.')
  .build();

export const me1_mission_listening_post_alpha = m('Listening Post Alpha', 'Listening_Post_Alpha', 'Listening_Post_Alpha')
  .availableWhen(predicates.isNoveriaCompleted)
  .build();

export const me1_mission_listening_post_theta = m('Listening Post Theta', 'Listening_Post_Theta', 'Listening_Post_Theta')
  .availableWhen(predicates.isNoveriaCompleted)
  .build();

export const me1_mission_depot_sigma_23 = m('Depot Sigma-23', 'Depot_Sigma_23', 'Depot_Sigma_23')
  .availableWhen(predicates.listeningPostsCompleted)
  .build();

export const me1_mission_bring_down_the_sky = m('Bring Down the Sky', 'Bring_Down_the_Sky', 'Bring_Down_the_Sky')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

// Discovery Assignments

export const me1_mission_asari_writings = m('Asari Writings', 'Asari_Writings', 'Asari_Writings')
  .build();

export const me1_mission_locate_signs_of_battle = m('Locate Signs of Battle', 'Locate_Signs_of_Battle', 'Locate_Signs_of_Battle')
  .build();

export const me1_mission_prothean_data_discs = m('Prothean Data Discs', 'Prothean_Data_Discs', 'Prothean_Data_Discs')
  .build();

export const me1_mission_turian_insignias = m('Turian Insignias', 'Turian_Insignias', 'Turian_Insignias')
  .build();

export const me1_mission_valuable_minerals_light_metals = m('Valuable Minerals: Light Metals', 'Valuable_Minerals:_Light_Metals', 'Valuable_Minerals:_Light_Metals')
  .build();

export const me1_mission_valuable_minerals_rare_metals = m('Valuable Minerals: Rare Metals', 'Valuable_Minerals:_Rare_Metals', 'Valuable_Minerals:_Rare_Metals')
  .build();

export const me1_mission_valuable_minerals_heavy_metals = m('Valuable Minerals: Heavy Metals', 'Valuable_Minerals:_Heavy_Metals', 'Valuable_Minerals:_Heavy_Metals')
  .build();

export const me1_mission_valuable_minerals_gasses = m('Valuable Minerals: Gasses', 'Valuable_Minerals:_Gasses', 'Valuable_Minerals:_Gasses')
  .build();
