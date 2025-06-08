import { m } from '../builders';

export const predicates = {
  isCitadel1Completed: () => me3_mission_priority_the_citadel_1.isCompleted,
  isPalavenCompleted: () => me3_mission_priority_palaven.isCompleted,
  isSurkeshCompleted: () => me3_mission_priority_surkesh.isCompleted,
  isTurianPlatoonCompleted: () => me3_mission_tuchanka_turian_platoon.isCompleted,
  isTurianPlatoonOrKroganTeamCompleted: () => me3_mission_attican_traverse_krogan_team_the_rachni.isCompleted || predicates.isTurianPlatoonCompleted(),
  isTuchankaCompleted: () => me3_mission_priority_tuchanka.isCompleted,
  isCitadel2Completed: () => me3_mission_priority_citadel_2.isCompleted,
  isGethDreadnoughtCompleted: () => me3_mission_priority_geth_dreadnought.isCompleted,
  isGethFighterSquadronsOrAdmiralKorisCompleted: () => me3_mission_rannoch_geth_fighter_squadrons.isCompleted || me3_mission_rannoch_admiral_koris.isCompleted,
  isRannochCompleted: () => me3_mission_priority_rannoch.isCompleted,
  isThessiaCompleted: () => me3_mission_priority_thessia.isCompleted,
};

// Main Plot

export const me3_mission_prologue_earth = m('Prologue: Earth')
  .build();

export const me3_mission_priority_mars = m('Priority: Mars')
  .availableWhen(() => me3_mission_prologue_earth.isCompleted)
  .build();

export const me3_mission_priority_the_citadel_1 = m('Priority: The Citadel I')
  .availableWhen(() => me3_mission_priority_mars.isCompleted)
  .build();

export const me3_mission_priority_palaven = m('Priority: Palaven')
  .availableWhen(() => me3_mission_priority_the_citadel_1.isCompleted)
  .build();

export const me3_mission_priority_surkesh = m('Priority: Sur\'Kesh')
  .availableWhen(() => me3_mission_priority_palaven.isCompleted)
  .build();

export const me3_mission_priority_tuchanka = m('Priority: Tuchanka')
  .availableWhen(() => me3_mission_priority_surkesh.isCompleted)
  .build();

export const me3_mission_priority_citadel_2 = m('Priority: The Citadel II')
  .availableWhen(() => me3_mission_priority_tuchanka.isCompleted)
  .build();

export const me3_mission_priority_perseus_veil = m('Priority: Perseus Veil')
  .availableWhen(() => me3_mission_priority_citadel_2.isCompleted)
  .build();

export const me3_mission_priority_geth_dreadnought = m('Priority: Geth Dreadnought')
  .availableWhen(() => me3_mission_priority_perseus_veil.isCompleted)
  .build();

export const me3_mission_priority_rannoch = m('Priority: Rannoch')
  .availableWhen(predicates.isGethFighterSquadronsOrAdmiralKorisCompleted)
  .build();

export const me3_mission_priority_citadel_3 = m('Priority: The Citadel III')
  .availableWhen(() => me3_mission_priority_rannoch.isCompleted)
  .build();

export const me3_mission_priority_thessia = m('Priority: Thessia')
  .availableWhen(() => me3_mission_priority_citadel_3.isCompleted)
  .build();

export const me3_mission_priority_horizon = m('Priority: Horizon')
  .availableWhen(() => me3_mission_priority_thessia.isCompleted)
  .build();

export const me3_mission_priority_cerberus_hq = m('Priority: Cerberus Headquarters')
  .withAdditionalInfo('This is the point of no return. Once the mission is started, the remainder of the game runs in locked progression with no possibility to complete side missions or visit the Citadel.')
  .availableWhen(() => me3_mission_priority_horizon.isCompleted)
  .build();

export const me3_mission_priority_earth = m('Priority: Earth')
  .availableWhen(() => me3_mission_priority_cerberus_hq.isCompleted)
  .build();

// After The Citadel I

export const me3_mission_citadel_alien_medi_gel_formula = m('Citadel: Alien Medi-Gel Formula')
  .availableWhen(predicates.isCitadel1Completed)
  .expiresAfter(predicates.isTuchankaCompleted)
  .build();

export const me3_mission_n7_cerberus_lab = m('N7: Cerberus Lab')
  .availableWhen(predicates.isCitadel1Completed)
  .hasInnerMissions(me3_mission_citadel_alien_medi_gel_formula)
  .build();

export const me3_mission_eden_prime_resistance_movement = m('Eden Prime: Resistance Movement')
  .availableWhen(predicates.isCitadel1Completed)
  .build();

export const me3_mission_priority_eden_prime = m('Priority: Eden Prime (From Ashes DLC)')
  .availableWhen(predicates.isCitadel1Completed)
  .hasInnerMissions(me3_mission_eden_prime_resistance_movement)
  .build();

// Post-Palaven Missions

export const me3_mission_aria_blood_pack = m('Aria: Blood Pack')
  .availableWhen(predicates.isPalavenCompleted)
  .build();

export const me3_mission_aria_blue_suns = m('Aria: Blue Suns')
  .availableWhen(predicates.isPalavenCompleted)
  .build();

export const me3_mission_aria_eclipse = m('Aria: Eclipse')
  .availableWhen(predicates.isPalavenCompleted)
  .build();

export const me3_mission_citadel_gx12_thermal_pipe = m('Citadel: GX12 Thermal Pipe')
  .availableWhen(predicates.isPalavenCompleted)
  .build();

export const me3_mission_citadel_hanar_diplomat = m('Citadel: Hanar Diplomat')
  .availableWhen(predicates.isPalavenCompleted)
  .expiresAfter(predicates.isTuchankaCompleted)
  .build();

export const me3_mission_citadel_biotic_amp_interfaces = m('Citadel: Biotic Amp Interfaces')
  .availableWhen(predicates.isPalavenCompleted)
  .build();

export const me3_mission_grissom_academy_emergency_evacuation = m('Grissom Academy: Emergency Evacuation')
  .availableWhen(predicates.isPalavenCompleted)
  .hasInnerMissions(me3_mission_citadel_biotic_amp_interfaces)
  .expiresAfter(predicates.isTuchankaCompleted)
  .build();

export const me3_mission_apien_crest_banner_of_the_first_regiment = m('Apien Crest: Banner of the First Regiment')
  .availableWhen(predicates.isPalavenCompleted)
  .build();

export const me3_mission_ismar_frontier_prototype_components = m('Ismar Frontier: Prototype Components')
  .availableWhen(predicates.isPalavenCompleted)
  .expiresAfter(predicates.isTuchankaCompleted)
  .build();

export const me3_mission_kites_nest_pillars_of_strength = m('Kite\'s Nest: Pillars of Strength')
  .availableWhen(predicates.isPalavenCompleted)
  .build();

export const me3_mission_shrike_abyssal_prothean_obelisk = m('Shrike Abyssal: Prothean Obelisk')
  .availableWhen(predicates.isPalavenCompleted)
  .build();

export const me3_mission_citadel_aria_t_loak = m('Citadel: Aria T\'Loak (Omega DLC)')
  .availableWhen(predicates.isPalavenCompleted)
  .build();

export const me3_mission_citadel_dr_bryson = m('Citadel: Dr. Bryson (Leviathan DLC)')
  .availableWhen(predicates.isPalavenCompleted)
  .build();

// Post-Sur'Kesh Missions

export const me3_mission_citadel_krogan_dying_message = m('Citadel: Krogan Dying Message')
  .availableWhen(predicates.isSurkeshCompleted)
  .build();

export const me3_mission_attican_traverse_krogan_team_the_rachni = m('Attican Traverse: Krogan Team/The Rachni')
  .availableWhen(predicates.isSurkeshCompleted)
  .hasInnerMissions(me3_mission_citadel_krogan_dying_message)
  .build();

export const me3_mission_tuchanka_turian_platoon = m('Tuchanka: Turian Platoon')
  .availableWhen(predicates.isSurkeshCompleted)
  .expiresAfter(predicates.isThessiaCompleted)
  .build();

export const me3_mission_citadel_cerberus_automated_turret_schematics = m('Citadel: Cerberus Automated Turret Schematics')
  .availableWhen(predicates.isTurianPlatoonCompleted)
  .build();

export const me3_mission_tuchanka_bomb = m('Tuchanka: Bomb')
  .availableWhen(predicates.isTurianPlatoonCompleted)
  .hasInnerMissions(me3_mission_citadel_cerberus_automated_turret_schematics)
  .build();

export const me3_mission_benning_evidence = m('Benning: Evidence')
  .availableWhen(predicates.isTurianPlatoonOrKroganTeamCompleted)
  .build();

export const me3_mission_n7_cerberus_abductions = m('N7: Cerberus Abductions')
  .availableWhen(predicates.isTurianPlatoonOrKroganTeamCompleted)
  .hasInnerMissions(me3_mission_benning_evidence)
  .build();

export const me3_mission_citadel_improved_power_grid = m('Citadel: Improved Power Grid')
  .availableWhen(predicates.isSurkeshCompleted)
  .build();

export const me3_mission_n7_cerberus_attack = m('N7: Cerberus Attack')
  .availableWhen(predicates.isSurkeshCompleted)
  .hasInnerMissions(me3_mission_citadel_improved_power_grid)
  .build();

export const me3_mission_citadel_barla_von = m('Citadel: Barla Von')
  .availableWhen(predicates.isSurkeshCompleted)
  .build();

// Post-Tuchanka Missions

export const me3_mission_irune_book_of_plenix = m('Irune: Book of Plenix')
  .availableWhen(predicates.isTuchankaCompleted)
  .build();

export const me3_mission_citadel_heating_unit_stabilizers = m('Citadel: Heating Unit Stabilizers')
  .availableWhen(predicates.isTuchankaCompleted)
  .build();

export const me3_mission_n7_cerberus_fighter_base = m('N7: Cerberus Fighter Base')
  .availableWhen(predicates.isTuchankaCompleted)
  .hasInnerMissions(me3_mission_citadel_heating_unit_stabilizers)
  .build();

// Post-Citadel II Missions

export const me3_mission_citadel_cerberus_turian_poison = m('Citadel: Cerberus Turian Poison')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

export const me3_mission_arrae_ex_cerberus_scientists = m('Arrae: Ex-Cerberus Scientists')
  .availableWhen(predicates.isCitadel2Completed)
  .hasInnerMissions(me3_mission_citadel_cerberus_turian_poison)
  .build();

export const me3_mission_athena_nebula_hesperia_period_statue = m('Athena Nebula: Hesperia-Period Statue')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

export const me3_mission_citadel_batarian_codes = m('Citadel: Batarian Codes')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

export const me3_mission_citadel_cerberus_retribution = m('Citadel: Cerberus Retribution')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

export const me3_mission_citadel_inspirational_stories = m('Citadel: Inspirational Stories')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

export const me3_mission_citadel_medical_supplies = m('Citadel: Medical Supplies')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

export const me3_mission_citadel_medi_gel_sabotage = m('Citadel: Medi-Gel Sabotage')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

export const me3_mission_citadel_volus_ambassador = m('Citadel: Volus Ambassador')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

export const me3_mission_citadel_wounded_batarian = m('Citadel: Wounded Batarian')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

export const me3_mission_citadel_asari_widow = m('Citadel: Asari Widow')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

export const me3_mission_kallini_ardat_yakshi_monastery = m('Kallini: Ardat-Yakshi Monastery')
  .availableWhen(predicates.isCitadel2Completed)
  .hasInnerMissions(me3_mission_citadel_asari_widow)
  .build();

export const me3_mission_nimbus_cluster_library_of_asha = m('Nimbus Cluster: Library of Asha')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

export const me3_mission_valhallan_threshold_prothean_data_drives = m('Valhallan Threshold: Prothean Data Drives')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

export const me3_mission_citadel_shore_leave = m('Citadel: Shore Leave (Citadel DLC)')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

// Post-Geth Dreadnought Missions

export const me3_mission_citadel_kakliosaur_fossil = m('Citadel: Kakliosaur Fossil')
  .availableWhen(predicates.isGethDreadnoughtCompleted)
  .build();

export const me3_mission_citadel_chemical_treatment = m('Citadel: Chemical Treatment')
  .availableWhen(predicates.isGethDreadnoughtCompleted)
  .build();

export const me3_mission_n7_fuel_reactors = m('N7: Fuel Reactors')
  .availableWhen(predicates.isGethDreadnoughtCompleted)
  .hasInnerMissions(me3_mission_citadel_chemical_treatment)
  .build();

export const me3_mission_citadel_target_jamming_technology = m('Citadel: Target Jamming Technology')
  .availableWhen(predicates.isGethDreadnoughtCompleted)
  .build();

export const me3_mission_rannoch_admiral_koris = m('Rannoch: Admiral Koris')
  .availableWhen(predicates.isGethDreadnoughtCompleted)
  .expiresAfter(predicates.isRannochCompleted)
  .hasInnerMissions(me3_mission_citadel_target_jamming_technology)
  .build();

export const me3_mission_citadel_reaper_code_fragments = m('Citadel: Reaper Code Fragments')
  .availableWhen(predicates.isGethDreadnoughtCompleted)
  .build();

export const me3_mission_rannoch_geth_fighter_squadrons = m('Rannoch: Geth Fighter Squadrons')
  .availableWhen(predicates.isGethDreadnoughtCompleted)
  .expiresAfter(predicates.isRannochCompleted)
  .hasInnerMissions(me3_mission_citadel_reaper_code_fragments)
  .build();

// Post-Rannoch Missions

export const me3_mission_dekuuna_code_of_the_ancients = m('Dekuuna: Code of the Ancients')
  .availableWhen(predicates.isRannochCompleted)
  .build();

export const me3_mission_dekuuna_elcor_extraction = m('Dekuuna: Elcor Extraction')
  .availableWhen(predicates.isRannochCompleted)
  .build();

export const me3_mission_silean_nebula_rings_of_alune = m('Silean Nebula: Rings of Alune')
  .availableWhen(predicates.isRannochCompleted)
  .build();

export const me3_mission_hades_nexus_prothean_sphere = m('Hades Nexus: Prothean Sphere')
  .availableWhen(predicates.isRannochCompleted)
  .build();

export const me3_mission_hades_nexus_obelisk_of_karza = m('Hades Nexus: Obelisk of Karza')
  .availableWhen(predicates.isRannochCompleted)
  .build();

// Post-Thessia Missions

export const me3_mission_citadel_cerberus_ciphers = m('Citadel: Cerberus Ciphers')
  .availableWhen(predicates.isThessiaCompleted)
  .build();

export const me3_mission_n7_communication_hub = m('N7: Communication Hub')
  .availableWhen(predicates.isThessiaCompleted)
  .hasInnerMissions(me3_mission_citadel_cerberus_ciphers)
  .build();

// Search & Rescue Missions

export const me3_mission_war_asset = m('War Asset')
  .build();
