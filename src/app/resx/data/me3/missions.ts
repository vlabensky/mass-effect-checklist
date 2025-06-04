import { m } from '../builders';

export const predicates = {
  isCitadel1Completed: () => me3_mission_priority_the_citadel_1.isCompleted,
  isPalavenCompleted: () => me3_mission_priority_palaven.isCompleted,
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
  .availableWhen(() => me3_mission_priority_geth_dreadnought.isCompleted)
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
