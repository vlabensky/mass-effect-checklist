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

export const me1_mission_prologue_find_the_beacon = m('Find the Beacon')
  .build();

// The Citadel I

export const me1_mission_expose_saren = m('Expose Saren')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_asari_consort = m('Asari Consort')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_doctor_michel = m('Doctor Michel')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_homecoming = m('Homecoming')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_jahleeds_fears = m('Jahleed\'s Fears')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_presidium_prophet = m('Presidium Prophet')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_reporters_request = m('Reporter\'s Request')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_ritas_sister = m('Rita\'s Sister')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_scan_the_keepers = m('Scan the Keepers')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_schells_the_gambler = m('Schells the Gambler')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_signal_tracking = m('Signal Tracking')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_the_fan_1 = m('The Fan I')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_xeltans_complaint = m('Xeltan\'s Complaint')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_wrex = m('Wrex')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_garrus = m('Garrus')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_hostile_takeover = m('Hostile Takeover')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_privateers = m('Privateers')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_unusual_readings = m('Unusual Readings/Distress call')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_strange_transmission = m('Strange Transmission/Major Kyle')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

export const me1_mission_missing_marines = m('Missing Marines')
  .availableWhen(predicates.isPrologueCompleted)
  .build();

// Therum

export const me1_mission_find_liara_t_soni = m('Find Liara T\'Soni')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

// Feros

export const me1_mission_geth_attack = m('Geth Attack')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_the_thorian = m('The Thorian')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_data_recovery = m('Data Recovery')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_data_geth_in_the_tunnels = m('Geth in the Tunnels')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_power_cells = m('Power Cells')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_varren_meat = m('Varren Meat')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_water_restoration = m('Water Restoration')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

// Noveria

export const me1_mission_geth_interest = m('Geth Interest')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_espionage = m('Espionage')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_smuggling = m('Smuggling')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_leave_port_hanshan = m('Leave Port Hanshan')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_leave_port_hanshan_lorik_qui_in = m('Lorik Qui\'In')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_peak_15 = m('Peak 15')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_peak_15_reconnect_landlines = m('Peak 15: Reconnect Landlines')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_peak_15_reactor_repair = m('Peak 15: Reactor Repair')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_peak_15_contamination = m('Peak 15: Contamination')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_rift_station = m('Rift Station')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_rift_station_quarantine = m('Rift Station: Quarantine')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_rift_station_matriarch_benezia = m('Rift Station: Matriarch Benezia')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_rift_station_hot_labs = m('Rift Station: Hot Labs')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_asari_diplomacy = m('Asari Diplomacy')
  .availableWhen(predicates.onePlotMissionCompleted)
  .build();

// The Citadel II

export const me1_mission_snap_inspection = m('Snap Inspection')
  .availableWhen(predicates.onePlotMissionCompleted)
  .build();

export const me1_mission_i_remember_me = m('I Remember Me')
  .availableWhen(predicates.onePlotMissionCompleted)
  .withAdditionalInfo('Only available if Shepard has the Colonist background.')
  .build();

export const me1_mission_old_friends = m('Old Friends')
  .availableWhen(predicates.onePlotMissionCompleted)
  .withAdditionalInfo('Only available if Shepard has the Earthborn background.')
  .build();

export const me1_mission_old_unhappy_far_off_things = m('Old, Unhappy, Far-Off Things')
  .availableWhen(predicates.onePlotMissionCompleted)
  .withAdditionalInfo('Only available if Shepard has the Spacer background.')
  .build();

export const me1_mission_the_fourth_estate = m('The Fourth Estate')
  .availableWhen(predicates.onePlotMissionCompleted)
  .build();

export const me1_mission_the_fan_2 = m('The Fan II')
  .availableWhen(() => predicates.onePlotMissionCompleted() && me1_mission_the_fan_1.isCompleted)
  .build();

export const me1_mission_family_matter = m('Family Matter')
  .availableWhen(predicates.onePlotMissionCompleted)
  .build();

export const me1_mission_planting_a_bug = m('Planting a Bug')
  .availableWhen(predicates.onePlotMissionCompleted)
  .build();

// The Citadel III

export const me1_mission_the_fan_3 = m('The Fan III')
  .availableWhen(() => predicates.twoPlotMissionsCompleted() && me1_mission_the_fan_2.isCompleted)
  .build();

// Virmire

export const me1_mission_virmire = m('Virmire')
  .availableWhen(predicates.twoPlotMissionsCompleted)
  .build();

export const me1_mission_wrex_and_the_genophage = m('Wrex and the Genophage')
  .availableWhen(predicates.twoPlotMissionsCompleted)
  .build();

export const me1_mission_assault = m('Assault')
  .availableWhen(predicates.twoPlotMissionsCompleted)
  .build();

export const me1_mission_assisting_kirrahes_team = m('Assisting Kirrahe\'s Team')
  .availableWhen(predicates.twoPlotMissionsCompleted)
  .build();

// The Citadel IV (Lockdown)

export const me1_mission_our_own_worst_enemy = m('Our Own Worst Enemy')
  .availableWhen(predicates.isVirmireCompleted)
  .build();

export const me1_mission_negotiators_request = m('Negotiator\'s Request')
  .availableWhen(predicates.isVirmireCompleted)
  .build();

// Race against time

export const me1_mission_find_the_conduit = m('Ilos: Find the Conduit')
  .availableWhen(predicates.isVirmireCompleted)
  .withAdditionalInfo('This is the point of no return. Once the player heads to Ilos, the rest of the game proceeds in locked progression with no possibility to complete any assignments.')
  .build();

export const me1_mission_final_battle = m('Final Battle')
  .availableWhen(predicates.isIlosCompleted)
  .build();

// Uncharted systems & assignments

export const me1_mission_the_negotiation = m('The Negotiation')
  .availableWhen(predicates.isExposeSarenCompleted)
  .withAdditionalInfo('Only available when the player hits 80% Renegade, or 90% Renegade if the player had attained 80% Paragon first.')
  .build();

export const me1_mission_lost_freighter = m('Lost Freighter')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_missing_survey_team = m('Missing Survey Team')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_besieged_base = m('Besieged Base')
  .availableWhen(predicates.isExposeSarenCompleted)
  .withAdditionalInfo('Only available when the player hits 80% Paragon, or 90% Paragon if the player had attained 80% Renegade first.')
  .build();

export const me1_mission_hostage = m('Hostage')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_lost_module = m('Lost Module')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_geth_incursions = m('Geth Incursions')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_cerberus = m('Cerberus')
  .availableWhen(predicates.isMissingMarinesCompleted)
  .build();

export const me1_mission_hades_dogs = m('Hades Dogs\'')
  .availableWhen(predicates.isCerberusCompleted)
  .build();

export const me1_mission_espionage_probe = m('Espionage Probe')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_dead_scientists = m('Dead Scientists')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_wrex_family_armor = m('Wrex: Family Armor')
  .availableWhen(predicates.isWrexRecruited)
  .build();

export const me1_mission_garrus_find_dr_saleon = m('Garrus: Find Dr. Saleon')
  .availableWhen(predicates.isGarrusRecruited)
  .build();

export const me1_mission_tali_pilgrimage = m('Tali: Pilgrimage/Tali and the Geth')
  .availableWhen(predicates.isGethIncursionsCompleted)
  .build();

export const me1_mission_rogue_vi = m('Rogue VI')
  .availableWhen(predicates.isExposeSarenCompleted)
  .withAdditionalInfo('This assignment is triggered after reaching level 20 (or level 11 in Mass Effect Legendary Edition with Legendary Mode) when next traveling to another system.')
  .build();

export const me1_mission_listening_post_alpha = m('Listening Post Alpha')
  .availableWhen(predicates.isNoveriaCompleted)
  .build();

export const me1_mission_listening_post_theta = m('Listening Post Theta')
  .availableWhen(predicates.isNoveriaCompleted)
  .build();

export const me1_mission_depot_sigma_23 = m('Depot Sigma-23')
  .availableWhen(predicates.listeningPostsCompleted)
  .build();

export const me1_mission_derelict_freighter = m('Derelict Freighter')
  .availableWhen(predicates.isFerosCompleted)
  .build();

export const me1_mission_colony_of_the_dead = m('Colony of the Dead')
  .availableWhen(predicates.isFerosCompleted)
  .build();

export const me1_mission_exogeni_facility = m('ExoGeni Facility')
  .availableWhen(predicates.isFerosCompleted)
  .build();

// Bring Down the Sky (DLC)

export const me1_mission_bring_down_the_sky = m('X57: Bring Down the Sky')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_avoid_the_blasting_caps = m('X57: Avoid the Blasting Caps')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

export const me1_mission_missing_engineers = m('X57: Missing Engineers')
  .availableWhen(predicates.isExposeSarenCompleted)
  .build();

// Discovery Assignments

export const me1_mission_asari_writings = m('Asari Writings')
  .build();

export const me1_mission_locate_signs_of_battle = m('Locate Signs of Battle')
  .build();

export const me1_mission_prothean_data_discs = m('Prothean Data Discs')
  .build();

export const me1_mission_turian_insignias = m('Turian Insignias')
  .build();

export const me1_mission_valuable_minerals_light_metals = m('Valuable Minerals: Light Metals')
  .build();

export const me1_mission_valuable_minerals_rare_metals = m('Valuable Minerals: Rare Metals')
  .build();

export const me1_mission_valuable_minerals_heavy_metals = m('Valuable Minerals: Heavy Metals')
  .build();

export const me1_mission_valuable_minerals_gasses = m('Valuable Minerals: Gasses')
  .build();
