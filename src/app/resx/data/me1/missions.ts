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
  isFerosCompleted: () => me1_mission_the_thorian.isCompleted,
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

export const me1_mission_expose_saren = m('Expose Saren', 'Citadel:_Expose_Saren', 'Expose_Saren')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_asari_consort = m('Asari Consort', 'Citadel:_Asari_Consort', 'Asari_Consort')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_doctor_michel = m('Doctor Michel', 'Citadel:_Doctor_Michel', 'Dr._Michel')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_homecoming = m('Homecoming', 'Citadel:_Homecoming', 'Homecoming')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_jahleeds_fears = m('Jahleed\'s Fears', 'Citadel:_Jahleed%27s_Fears', 'Jahleeds_Fears')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_presidium_prophet = m('Presidium Prophet', 'Citadel:_Presidium_Prophet', 'Presidium_Prophet')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_reporters_request = m('Reporter\'s Request', 'Citadel:_Reporter%27s_Request', 'Reporter%27s_Request')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_ritas_sister = m('Rita\'s Sister', 'Citadel:_Rita%27s_Sister', 'Rita%27s_Sister')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_scan_the_keepers = m('Scan the Keepers', 'Citadel:_Scan_the_Keepers', 'Scan_the_Keepers')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_schells_the_gambler = m('Schells the Gambler', 'Citadel:_Schells_the_Gambler', 'Schells_the_Gambler')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_signal_tracking = m('Signal Tracking', 'Citadel:_Signal_Tracking', 'Signal_Tracking')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_the_fan_1 = m('The Fan I', 'Citadel:_The_Fan', 'The_Fan')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_xeltans_complaint = m('Xeltan\'s Complaint', 'Citadel:_Xeltan%27s_Complaint', 'Xeltan%27s_Complaint')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_wrex = m('Wrex', 'Citadel:_Wrex', 'Citadel:_Wrex')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_garrus = m('Garrus', 'Citadel:_Garrus', 'Citadel:_Garrus')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_hostile_takeover = m('Hostile Takeover', 'UNC:_Hostile_Takeover', 'Hostile_Takeover')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_privateers = m('Privateers', 'UNC:_Privateers', 'Privateers')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_unusual_readings = m('Unusual Readings/Distress call', 'UNC:_Distress_Call', 'Distress_Call')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_strange_transmission = m('Strange Transmission/Major Kyle', 'UNC:_Major_Kyle', 'Major_Kyle')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_missing_marines = m('Missing Marines', 'UNC:_Missing_Marines', 'Missing_Marines')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

// Therum

export const me1_mission_find_liara_t_soni = m('Find Liara T\'Soni', 'Find_Liara_T%27Soni', 'Find_Liara_T%27Soni')
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

export const me1_mission_leave_port_hanshan = m('Leave Port Hanshan', 'Noveria:_Geth_Interest#Port_Hanshan', 'Leave_Port_Hanshan')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_leave_port_hanshan_lorik_qui_in = m('Lorik Qui\'In', 'Noveria:_Lorik_Qui%27in', 'Lorik_Qui%27in')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_peak_15 = m('Peak 15', 'Noveria:_Peak_15', 'Peak_15')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_peak_15_reconnect_landlines = m('Peak 15: Reconnect Landlines', 'Noveria:_Reconnect_Landlines', 'Reconnect_Landlines')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_peak_15_reactor_repair = m('Peak 15: Reactor Repair', 'Noveria:_Reactor_Repair', 'Reactor_Repair')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_peak_15_contamination = m('Peak 15: Contamination', 'Noveria:_Contamination', 'Contamination')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_rift_station = m('Rift Station', 'Noveria:_Rift_Station', 'Rift_Station')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_rift_station_quarantine = m('Rift Station: Quarantine', 'Noveria:_Quarantine', 'Quarantine')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_rift_station_matriarch_benezia = m('Rift Station: Matriarch Benezia', 'Noveria:_Matriarch_Benezia', 'Matriarch_Benezia')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_rift_station_hot_labs = m('Rift Station: Hot Labs', 'Noveria:_The_Hot_Labs', 'Hot_Labs')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_asari_diplomacy = m('Asari Diplomacy', 'UNC:_Asari_Diplomacy', 'Asari_Diplomacy')
  .availableWhen(predicates.onePlotMissionCompleted)
  .build();

// The Citadel II

export const me1_mission_snap_inspection = m('Snap Inspection', 'Citadel:_Snap_Inspection', 'Snap_Inspection')
  .availableWhen(predicates.onePlotMissionCompleted)
  .build();

export const me1_mission_i_remember_me = m('I Remember Me', 'Citadel:_I_Remember_Me', 'I_Remember_Me')
  .availableWhen(predicates.onePlotMissionCompleted)
  .withAdditionalInfo('Only available if Shepard has the Colonist background.')
  .build();

export const me1_mission_old_friends = m('Old Friends', 'Citadel:_Old_Friends', 'Old_Friends')
  .availableWhen(predicates.onePlotMissionCompleted)
  .withAdditionalInfo('Only available if Shepard has the Earthborn background.')
  .build();

export const me1_mission_old_unhappy_far_off_things = m('Old, Unhappy, Far-Off Things', 'Citadel:_Old,_Unhappy,_Far-Off_Things', 'Old,_Unhappy,_Far-Off_Things')
  .availableWhen(predicates.onePlotMissionCompleted)
  .withAdditionalInfo('Only available if Shepard has the Spacer background.')
  .build();

export const me1_mission_the_fourth_estate = m('The Fourth Estate', 'Citadel:_The_Fourth_Estate', 'The_Fourth_Estate')
  .availableWhen(predicates.onePlotMissionCompleted)
  .build();

export const me1_mission_the_fan_2 = m('The Fan II', 'Citadel:_The_Fan', 'The_Fan')
  .availableWhen(() => predicates.onePlotMissionCompleted() && me1_mission_the_fan_1.isCompleted)
  .build();

export const me1_mission_family_matter = m('Family Matter', 'Citadel:_Family_Matter', 'Family_Matter')
  .availableWhen(predicates.onePlotMissionCompleted)
  .build();

export const me1_mission_planting_a_bug = m('Planting a Bug', 'Citadel:_Planting_a_Bug', 'Planting_a_Bug')
  .availableWhen(predicates.onePlotMissionCompleted)
  .build();

// The Citadel III

export const me1_mission_the_fan_3 = m('The Fan III', 'Citadel:_The_Fan', 'The_Fan')
  .availableWhen(() => predicates.twoPlotMissionsCompleted() && me1_mission_the_fan_2.isCompleted)
  .build();

// Virmire

export const me1_mission_virmire = m('Virmire', 'Virmire_(mission)', 'Virmire')
  .availableWhen(predicates.twoPlotMissionsCompleted)
  .build();

export const me1_mission_wrex_and_the_genophage = m('Wrex and the Genophage', 'Virmire:_Wrex_and_the_Genophage', 'How_to_Save_Wrex')
  .availableWhen(predicates.twoPlotMissionsCompleted)
  .build();

export const me1_mission_assault = m('Assault', 'Virmire:_Assault', 'Assault')
  .availableWhen(predicates.twoPlotMissionsCompleted)
  .build();

export const me1_mission_assisting_kirrahes_team = m('Assisting Kirrahe\'s Team', 'Virmire:_Assisting_Kirrahe%27s_Team', 'How_to_Save_Kirrahe')
  .availableWhen(predicates.twoPlotMissionsCompleted)
  .build();

// The Citadel IV (Lockdown)

export const me1_mission_our_own_worst_enemy = m('Our Own Worst Enemy', 'Citadel:_Our_Own_Worst_Enemy', 'Our_Own_Worst_Enemy')
  .availableWhen(predicates.isVirmireCompleted)
  .build();

export const me1_mission_negotiators_request = m('Negotiator\'s Request', 'Citadel:_Negotiator%27s_Request', 'Negotiator%27s_Request')
  .availableWhen(predicates.isVirmireCompleted)
  .build();

// Race against time

export const me1_mission_find_the_conduit = m('Ilos: Find the Conduit', 'Ilos:_Find_the_Conduit', 'Ilos')
  .availableWhen(predicates.isVirmireCompleted)
  .withAdditionalInfo('This is the point of no return. Once the player heads to Ilos, the rest of the game proceeds in locked progression with no possibility to complete any assignments.')
  .build();

export const me1_mission_final_battle = m('Final Battle', 'Race_Against_Time:_Final_Battle', 'Race_Against_Time:_Final_Battle')
  .availableWhen(predicates.isIlosCompleted)
  .build();

// Uncharted systems & assignments

export const me1_mission_the_negotiation = m('The Negotiation', 'UNC:_The_Negotiation', 'The_Negotiation')
  .availableWhen(predicates.isExposeSarenCompleted)
  .withAdditionalInfo('Only available when the player hits 80% Renegade, or 90% Renegade if the player had attained 80% Paragon first.')
  .build();

export const me1_mission_lost_freighter = m('Lost Freighter', 'UNC:_Lost_Freighter', 'Lost_Freighter')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_missing_survey_team = m('Missing Survey Team', 'UNC:_Missing_Survey_Team', 'Missing_Survey_Team')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_besieged_base = m('Besieged Base', 'UNC:_Besieged_Base', 'Besieged_Base')
  .availableWhen(predicates.isExposeSarenCompleted)
  .withAdditionalInfo('Only available when the player hits 80% Paragon, or 90% Paragon if the player had attained 80% Renegade first.')
  .build();

export const me1_mission_hostage = m('Hostage', 'UNC:_Hostage', 'Hostage')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_lost_module = m('Lost Module', 'UNC:_Lost_Module', 'Lost_Module')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_geth_incursions = m('Geth Incursions', 'UNC:_Geth_Incursions', 'Geth_Incursions')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_cerberus = m('Cerberus', 'UNC:_Cerberus', 'Cerberus')
  .availableWhen(predicates.isMissingMarinesCompleted)
  .build();

export const me1_mission_hades_dogs = m('Hades Dogs\'', 'UNC:_Hades%27s_Dogs', 'Hades%27s_Dogs')
  .availableWhen(predicates.isCerberusCompleted)
  .build();

export const me1_mission_espionage_probe = m('Espionage Probe', 'UNC:_Espionage_Probe', 'Espionage_Probe')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_dead_scientists = m('Dead Scientists', 'UNC:_Dead_Scientists', 'Dead_Scientists')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_wrex_family_armor = m('Wrex: Family Armor', 'Wrex:_Family_Armor', 'Wrex:_Family_Armor')
  .availableWhen(predicates.isWrexRecruited)
  .build();

export const me1_mission_garrus_find_dr_saleon = m('Garrus: Find Dr. Saleon', 'Garrus:_Find_Dr._Saleon', 'Garrus:_Find_Dr._Saleon')
  .availableWhen(predicates.isGarrusRecruited)
  .build();

export const me1_mission_tali_pilgrimage = m('Tali: Pilgrimage/Tali and the Geth', 'Tali_and_the_Geth', 'Tali:_Pilgrimage')
  .availableWhen(predicates.isGethIncursionsCompleted)
  .build();

export const me1_mission_rogue_vi = m('Rogue VI', 'UNC:_Rogue_VI', 'Rogue_VI')
  .availableWhen(predicates.isExposeSarenCompleted)
  .withAdditionalInfo('This assignment is triggered after reaching level 20 (or level 11 in Mass Effect Legendary Edition with Legendary Mode) when next traveling to another system.')
  .build();

export const me1_mission_listening_post_alpha = m('Listening Post Alpha', 'UNC:_Listening_Post_Alpha', 'Listening_Post_Alpha')
  .availableWhen(predicates.isNoveriaCompleted)
  .build();

export const me1_mission_listening_post_theta = m('Listening Post Theta', 'UNC:_Listening_Post_Theta', 'Listening_Post_Theta')
  .availableWhen(predicates.isNoveriaCompleted)
  .build();

export const me1_mission_depot_sigma_23 = m('Depot Sigma-23', 'UNC:_Depot_Sigma_23', 'Depot_Sigma_23')
  .availableWhen(predicates.listeningPostsCompleted)
  .build();

export const me1_mission_derelict_freighter = m('Derelict Freighter', 'UNC:_Derelict_Freighter', 'Derelict_Freighter')
  .availableWhen(predicates.isFerosCompleted)
  .build();

export const me1_mission_colony_of_the_dead = m('Colony of the Dead', 'UNC:_Colony_of_the_Dead', 'Colony_of_the_Dead')
  .availableWhen(predicates.isFerosCompleted)
  .build();

export const me1_mission_exogeni_facility = m('ExoGeni Facility', 'UNC:_ExoGeni_Facility', 'ExoGeni_Facility')
  .availableWhen(predicates.isFerosCompleted)
  .build();

// Bring Down the Sky (DLC)

export const me1_mission_bring_down_the_sky = m('X57: Bring Down the Sky', 'X57:_Bring_Down_the_Sky', 'X57:_Bring_Down_the_Sky')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_avoid_the_blasting_caps = m('X57: Avoid the Blasting Caps', 'X57:_Avoid_the_Blasting_Caps', 'Avoid_the_Blasting_Caps')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_missing_engineers = m('X57: Missing Engineers', 'X57:_Missing_Engineers', 'Missing_Engineers')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

// Discovery Assignments

export const me1_mission_asari_writings = m('Asari Writings', 'UNC:_Asari_Writings', 'Asari_Writings')
  .build();

export const me1_mission_locate_signs_of_battle = m('Locate Signs of Battle', 'UNC:_Locate_Signs_of_Battle', 'Locate_Signs_of_Battle')
  .build();

export const me1_mission_prothean_data_discs = m('Prothean Data Discs', 'UNC:_Prothean_Data_Discs', 'Prothean_Data_Discs')
  .build();

export const me1_mission_turian_insignias = m('Turian Insignias', 'UNC:_Turian_Insignias', 'Turian_Insignias')
  .build();

export const me1_mission_valuable_minerals_light_metals = m('Valuable Minerals: Light Metals', 'UNC:_Valuable_Minerals', 'Valuable_Minerals')
  .build();

export const me1_mission_valuable_minerals_rare_metals = m('Valuable Minerals: Rare Metals', 'UNC:_Valuable_Minerals', 'Valuable_Minerals')
  .build();

export const me1_mission_valuable_minerals_heavy_metals = m('Valuable Minerals: Heavy Metals', 'UNC:_Valuable_Minerals', 'Valuable_Minerals')
  .build();

export const me1_mission_valuable_minerals_gasses = m('Valuable Minerals: Gasses', 'UNC:_Valuable_Minerals', 'Valuable_Minerals')
  .build();
