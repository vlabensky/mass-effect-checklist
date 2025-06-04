import { m } from '../builders';

export const predicates = {
  isCitadel1Completed: () => me3_mission_priority_the_citadel_1.isCompleted,
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