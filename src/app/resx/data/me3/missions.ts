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
};

// Main Plot

export const me3_mission_prologue_earth = m('Prologue: Earth', 'Prologue:_Earth', 'Prologue_Earth')
  .build();

export const me3_mission_priority_mars = m('Priority: Mars', 'Priority:_Mars', 'Priority_Mars')
  .availableWhen(() => me3_mission_prologue_earth.isCompleted)
  .build();

export const me3_mission_priority_the_citadel_1 = m('Priority: The Citadel I', 'Priority:_The_Citadel_I', 'Priority_The_Citadel_1')
  .availableWhen(() => me3_mission_priority_mars.isCompleted)
  .build();

export const me3_mission_priority_palaven = m('Priority: Palaven', 'Priority:_Palaven', 'Priority_Palaven')
  .availableWhen(() => me3_mission_priority_the_citadel_1.isCompleted)
  .build();

export const me3_mission_priority_surkesh = m('Priority: Sur\'Kesh', 'Priority:_Sur%27Kesh', 'Priority_SurKesh')
  .availableWhen(() => me3_mission_priority_palaven.isCompleted)
  .build();

export const me3_mission_priority_tuchanka = m('Priority: Tuchanka', 'Priority:_Tuchanka', 'Priority_Tuchanka')
  .availableWhen(() => me3_mission_priority_surkesh.isCompleted)
  .build();

export const me3_mission_priority_citadel_2 = m('Priority: The Citadel II', 'Priority:_The_Citadel_II', 'Priority_The_Citadel_2')
  .availableWhen(() => me3_mission_priority_tuchanka.isCompleted)
  .build();

export const me3_mission_priority_perseus_veil = m('Priority: Perseus Veil', 'Priority:_Perseus_Veil', 'Priority_Perseus_Veil')
  .availableWhen(() => me3_mission_priority_citadel_2.isCompleted)
  .build();

export const me3_mission_priority_geth_dreadnought = m('Priority: Geth Dreadnought', 'Priority:_Geth_Dreadnought', 'Priority_Geth_Dreadnought')
  .availableWhen(() => me3_mission_priority_perseus_veil.isCompleted)
  .build();

export const me3_mission_priority_rannoch = m('Priority: Rannoch', 'Priority:_Rannoch', 'Priority_Rannoch')
  .availableWhen(predicates.isGethFighterSquadronsOrAdmiralKorisCompleted)
  .build();

export const me3_mission_priority_citadel_3 = m('Priority: The Citadel III', 'Priority:_The_Citadel_III', 'Priority_The_Citadel_3')
  .availableWhen(() => me3_mission_priority_rannoch.isCompleted)
  .build();

export const me3_mission_priority_thessia = m('Priority: Thessia', 'Priority:_Thessia', 'Priority_Thessia')
  .availableWhen(() => me3_mission_priority_citadel_3.isCompleted)
  .build();

export const me3_mission_priority_horizon = m('Priority: Horizon', 'Priority:_Horizon', 'Priority_Horizon')
  .availableWhen(() => me3_mission_priority_thessia.isCompleted)
  .build();

export const me3_mission_priority_cerberus_hq = m('Priority: Cerberus Headquarters', 'Priority:_Cerberus_Headquarters', 'Priority_Cerberus_HQ')
  .withAdditionalInfo('This is the point of no return. Once the mission is started, the remainder of the game runs in locked progression with no possibility to complete side missions or visit the Citadel.')
  .availableWhen(() => me3_mission_priority_horizon.isCompleted)
  .build();

export const me3_mission_priority_earth = m('Priority: Earth', 'Priority:_Earth', 'Priority_Earth')
  .availableWhen(() => me3_mission_priority_cerberus_hq.isCompleted)
  .build();

// After The Citadel I

export const me3_mission_citadel_alien_medi_gel_formula = m('Citadel: Alien Medi-Gel Formula', 'Citadel:_Alien_Medi-Gel_Formula', 'Citadel_Alien_MediGel_Formula')
  .availableWhen(predicates.isCitadel1Completed)
  .build();

export const me3_mission_n7_cerberus_lab = m('N7: Cerberus Lab', 'N7:_Cerberus_Lab', 'N7_Cerberus_Lab')
  .availableWhen(predicates.isCitadel1Completed)
  .hasInnerMissions(me3_mission_citadel_alien_medi_gel_formula)
  .build();

export const me3_mission_eden_prime_resistance_movement = m('Eden Prime: Resistance Movement', 'Eden_Prime:_Resistance_Movement', 'Eden_Prime_Resistance_Movement')
  .availableWhen(predicates.isCitadel1Completed)
  .build();

export const me3_mission_priority_eden_prime = m('Priority: Eden Prime (From Ashes DLC)', 'Priority:_Eden_Prime', 'Priority_Eden_Prime')
  .availableWhen(predicates.isCitadel1Completed)
  .hasInnerMissions(me3_mission_eden_prime_resistance_movement)
  .build();

// Post-Palaven Missions

export const me3_mission_aria_blood_pack = m('Aria: Blood Pack', 'Aria:_Blood_Pack', 'Aria_Blood_Pack')
  .availableWhen(predicates.isPalavenCompleted)
  .build();

export const me3_mission_aria_blue_suns = m('Aria: Blue Suns', 'Aria:_Blue_Suns', 'Aria_Blue_Suns')
  .availableWhen(predicates.isPalavenCompleted)
  .build();

export const me3_mission_aria_eclipse = m('Aria: Eclipse', 'Aria:_Eclipse', 'Aria_Eclipse')
  .availableWhen(predicates.isPalavenCompleted)
  .build();

export const me3_mission_citadel_gx12_thermal_pipe = m('Citadel: GX12 Thermal Pipe', 'Citadel:_GX12_Thermal_Pipe', 'Citadel_GX12_Thermal_Pipe')
  .availableWhen(predicates.isPalavenCompleted)
  .build();

export const me3_mission_citadel_hanar_diplomat = m('Citadel: Hanar Diplomat', 'Citadel:_Hanar_Diplomat', 'Citadel_Hanar_Diplomat')
  .availableWhen(predicates.isPalavenCompleted)
  .build();

export const me3_mission_citadel_biotic_amp_interfaces = m('Citadel: Biotic Amp Interfaces', 'Citadel:_Biotic_Amp_Interfaces', 'Citadel_Biotic_Amp_Interfaces')
  .availableWhen(predicates.isPalavenCompleted)
  .build();

export const me3_mission_grissom_academy_emergency_evacuation = m('Grissom Academy: Emergency Evacuation', 'Grissom_Academy:_Emergency_Evacuation', 'Grissom_Academy_Emergency_Evacuation')
  .availableWhen(predicates.isPalavenCompleted)
  .hasInnerMissions(me3_mission_citadel_biotic_amp_interfaces)
  .build();

export const me3_mission_apien_crest_banner_of_the_first_regiment = m('Apien Crest: Banner of the First Regiment', 'Apien_Crest:_Banner_of_the_First_Regiment', 'Apien_Crest_Banner_of_the_First_Regiment')
  .availableWhen(predicates.isPalavenCompleted)
  .build();

export const me3_mission_ismar_frontier_prototype_components = m('Ismar Frontier: Prototype Components', 'Ismar_Frontier:_Prototype_Components', 'Ismar_Frontier_Prototype_Components')
  .availableWhen(predicates.isPalavenCompleted)
  .build();

export const me3_mission_kites_nest_pillars_of_strength = m('Kite\'s Nest: Pillars of Strength', 'Kites_Nest:_Pillars_of_Strength', 'Kites_Nest_Pillars_of_Strength')
  .availableWhen(predicates.isPalavenCompleted)
  .build();

export const me3_mission_shrike_abyssal_prothean_obelisk = m('Shrike Abyssal: Prothean Obelisk', 'Shrike_Abyssal:_Prothean_Obelisk', 'Shrike_Abyssal_Prothean_Obelisk')
  .availableWhen(predicates.isPalavenCompleted)
  .build();

export const me3_mission_citadel_aria_t_loak = m('Citadel: Aria T\'Loak (Omega DLC)', 'Citadel:_Aria_T\'Loak', 'Citadel_Aria_T\'Loak')
  .availableWhen(predicates.isPalavenCompleted)
  .build();

export const me3_mission_citadel_dr_bryson = m('Citadel: Dr. Bryson (Leviathan DLC)', 'Citadel:_Dr._Bryson', 'Citadel_Dr_Bryson')
  .availableWhen(predicates.isPalavenCompleted)
  .build();

// Post-Sur'Kesh Missions

export const me3_mission_citadel_krogan_dying_message = m('Citadel: Krogan Dying Message', 'Citadel:_Krogan_Dying_Message', 'Citadel_Krogan_Dying_Message')
  .availableWhen(predicates.isSurkeshCompleted)
  .build();

export const me3_mission_attican_traverse_krogan_team_the_rachni = m('Attican Traverse: Krogan Team/The Rachni', 'Attican_Traverse:_Krogan_Team/The_Rachni', 'Attican_Traverse_Krogan_Team_The_Rachni')
  .availableWhen(predicates.isSurkeshCompleted)
  .hasInnerMissions(me3_mission_citadel_krogan_dying_message)
  .build();

export const me3_mission_tuchanka_turian_platoon = m('Tuchanka: Turian Platoon', 'Tuchanka:_Turian_Platoon', 'Tuchanka_Turian_Platoon')
  .availableWhen(predicates.isSurkeshCompleted)
  .build();

export const me3_mission_citadel_cerberus_automated_turret_schematics = m('Citadel: Cerberus Automated Turret Schematics', 'Citadel:_Cerberus_Automated_Turret_Schematics', 'Citadel_Cerberus_Automated_Turret_Schematics')
  .availableWhen(predicates.isTurianPlatoonCompleted)
  .build();

export const me3_mission_tuchanka_bomb = m('Tuchanka: Bomb', 'Tuchanka:_Bomb', 'Tuchanka_Bomb')
  .availableWhen(predicates.isTurianPlatoonCompleted)
  .hasInnerMissions(me3_mission_citadel_cerberus_automated_turret_schematics)
  .build();

export const me3_mission_benning_evidence = m('Benning: Evidence', 'Benning:_Evidence', 'Benning_Evidence')
  .availableWhen(predicates.isTurianPlatoonOrKroganTeamCompleted)
  .build();

export const me3_mission_n7_cerberus_abductions = m('N7: Cerberus Abductions', 'N7:_Cerberus_Abductions', 'N7_Cerberus_Abductions')
  .availableWhen(predicates.isTurianPlatoonOrKroganTeamCompleted)
  .hasInnerMissions(me3_mission_benning_evidence)
  .build();

export const me3_mission_citadel_improved_power_grid = m('Citadel: Improved Power Grid', 'Citadel:_Improved_Power_Grid', 'Citadel_Improved_Power_Grid')
  .availableWhen(predicates.isSurkeshCompleted)
  .build();

export const me3_mission_n7_cerberus_attack = m('N7: Cerberus Attack', 'N7:_Cerberus_Attack', 'N7_Cerberus_Attack')
  .availableWhen(predicates.isSurkeshCompleted)
  .hasInnerMissions(me3_mission_citadel_improved_power_grid)
  .build();

export const me3_mission_citadel_barla_von = m('Citadel: Barla Von', 'Citadel:_Barla_Von', 'Citadel_Barla_Von')
  .availableWhen(predicates.isSurkeshCompleted)
  .build();

// Post-Tuchanka Missions

export const me3_mission_irune_book_of_plenix = m('Irune: Book of Plenix', 'Irune:_Book_of_Plenix', 'Irune_Book_of_Plenix')
  .availableWhen(predicates.isTuchankaCompleted)
  .build();

export const me3_mission_citadel_heating_unit_stabilizers = m('Citadel: Heating Unit Stabilizers', 'Citadel:_Heating_Unit_Stabilizers', 'Citadel_Heating_Unit_Stabilizers')
  .availableWhen(predicates.isTuchankaCompleted)
  .build();

export const me3_mission_n7_cerberus_fighter_base = m('N7: Cerberus Fighter Base', 'N7:_Cerberus_Fighter_Base', 'N7_Cerberus_Fighter_Base')
  .availableWhen(predicates.isTuchankaCompleted)
  .hasInnerMissions(me3_mission_citadel_heating_unit_stabilizers)
  .build();

// Post-Citadel II Missions

export const me3_mission_citadel_cerberus_turian_poison = m('Citadel: Cerberus Turian Poison', 'Citadel:_Cerberus_Turian_Poison', 'Citadel_Cerberus_Turian_Poison')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

export const me3_mission_arrae_ex_cerberus_scientists = m('Arrae: Ex-Cerberus Scientists', 'Arrae:_Ex-Cerberus_Scientists', 'Arrae_Ex_Cerberus_Scientists')
  .availableWhen(predicates.isCitadel2Completed)
  .hasInnerMissions(me3_mission_citadel_cerberus_turian_poison)
  .build();

export const me3_mission_athena_nebula_hesperia_period_statue = m('Athena Nebula: Hesperia-Period Statue', 'Athena_Nebula:_Hesperia-Period_Statue', 'Athena_Nebula_Hesperia_Period_Statue')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

export const me3_mission_citadel_batarian_codes = m('Citadel: Batarian Codes', 'Citadel:_Batarian_Codes', 'Citadel_Batarian_Codes')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

export const me3_mission_citadel_cerberus_retribution = m('Citadel: Cerberus Retribution', 'Citadel:_Cerberus_Retribution', 'Citadel_Cerberus_Retribution')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

export const me3_mission_citadel_inspirational_stories = m('Citadel: Inspirational Stories', 'Citadel:_Inspirational_Stories', 'Citadel_Inspirational_Stories')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

export const me3_mission_citadel_medical_supplies = m('Citadel: Medical Supplies', 'Citadel:_Medical_Supplies', 'Citadel_Medical_Supplies')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

export const me3_mission_citadel_medi_gel_sabotage = m('Citadel: Medi-Gel Sabotage', 'Citadel:_Medi-Gel_Sabotage', 'Citadel_MediGel_Sabotage')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

export const me3_mission_citadel_volus_ambassador = m('Citadel: Volus Ambassador', 'Citadel:_Volus_Ambassador', 'Citadel_Volus_Ambassador')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

export const me3_mission_citadel_wounded_batarian = m('Citadel: Wounded Batarian', 'Citadel:_Wounded_Batarian', 'Citadel_Wounded_Batarian')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

export const me3_mission_citadel_asari_widow = m('Citadel: Asari Widow', 'Citadel:_Asari_Widow', 'Citadel_Asari_Widow')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

export const me3_mission_kallini_ardat_yakshi_monastery = m('Kallini: Ardat-Yakshi Monastery', 'Kallini:_Ardat-Yakshi_Monastery', 'Kallini_Ardat_Yakshi_Monastery')
  .availableWhen(predicates.isCitadel2Completed)
  .hasInnerMissions(me3_mission_citadel_asari_widow)
  .build();

export const me3_mission_nimbus_cluster_library_of_asha = m('Nimbus Cluster: Library of Asha', 'Nimbus_Cluster:_Library_of_Asha', 'Nimbus_Cluster_Library_of_Asha')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

export const me3_mission_valhallan_threshold_prothean_data_drives = m('Valhallan Threshold: Prothean Data Drives', 'Valhallan_Threshold:_Prothean_Data_Drives', 'Valhallan_Threshold_Prothean_Data_Drives')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

export const me3_mission_citadel_shore_leave = m('Citadel: Shore Leave (Citadel DLC)', 'Citadel:_Shore_Leave_(Citadel_DLC)', 'Citadel_Shore_Leave_Citadel_DLC')
  .availableWhen(predicates.isCitadel2Completed)
  .build();

// Post-Geth Dreadnought Missions

export const me3_mission_citadel_kakliosaur_fossil = m('Citadel: Kakliosaur Fossil', 'Citadel:_Kakliosaur_Fossil', 'Citadel_Kakliosaur_Fossil')
  .availableWhen(predicates.isGethDreadnoughtCompleted)
  .build();

export const me3_mission_citadel_chemical_treatment = m('Citadel: Chemical Treatment', 'Citadel:_Chemical_Treatment', 'Citadel_Chemical_Treatment')
  .availableWhen(predicates.isGethDreadnoughtCompleted)
  .build();

export const me3_mission_n7_fuel_reactors = m('N7: Fuel Reactors', 'N7:_Fuel_Reactors', 'N7_Fuel_Reactors')
  .availableWhen(predicates.isGethDreadnoughtCompleted)
  .hasInnerMissions(me3_mission_citadel_chemical_treatment)
  .build();

export const me3_mission_citadel_target_jamming_technology = m('Citadel: Target Jamming Technology', 'Citadel:_Target_Jamming_Technology', 'Citadel_Target_Jamming_Technology')
  .availableWhen(predicates.isGethDreadnoughtCompleted)
  .build();

export const me3_mission_rannoch_admiral_koris = m('Rannoch: Admiral Koris', 'Rannoch:_Admiral_Koris', 'Rannoch_Admiral_Koris')
  .availableWhen(predicates.isGethDreadnoughtCompleted)
  .hasInnerMissions(me3_mission_citadel_target_jamming_technology)
  .build();

export const me3_mission_citadel_reaper_code_fragments = m('Citadel: Reaper Code Fragments', 'Citadel:_Reaper_Code_Fragments', 'Citadel_Reaper_Code_Fragments')
  .availableWhen(predicates.isGethDreadnoughtCompleted)
  .build();

export const me3_mission_rannoch_geth_fighter_squadrons = m('Rannoch: Geth Fighter Squadrons', 'Rannoch:_Geth_Fighter_Squadrons', 'Rannoch_Geth_Fighter_Squadrons')
  .availableWhen(predicates.isGethDreadnoughtCompleted)
  .hasInnerMissions(me3_mission_citadel_reaper_code_fragments)
  .build();
