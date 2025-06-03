import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Gemini Sigma

export const me1_location_gemini_sigma_han_paravin = loc('Paravin')
  .hasMissions(m.me1_mission_asari_writings)
  .build();

export const me1_location_gemini_sigma_han_patatanlis = loc('Patatanlis')
  .hasMissions(m.me1_mission_valuable_minerals_light_metals)
  .build();

export const me1_location_gemini_sigma_han_mavigon = loc('Mavigon')
  .hasMissions(m.me1_mission_hostile_takeover)
  .build();

export const me1_system_gemini_sigma_han = sys('Han')
  .hasLocations(
    me1_location_gemini_sigma_han_paravin,
    me1_location_gemini_sigma_han_patatanlis,
    me1_location_gemini_sigma_han_mavigon,
  )
  .build();

export const me1_location_gemini_sigma_ming_parag = loc('Parag')
  .hasMissions(m.me1_mission_valuable_minerals_light_metals)
  .build();

export const me1_location_gemini_sigma_ming_altanorch = loc('Altanorch')
  .hasMissions(m.me1_mission_locate_signs_of_battle)
  .build();

export const me1_location_gemini_sigma_ming_msv_worthington = loc('MSV Worthington')
  .hasMissions(m.me1_mission_lost_freighter)
  .build();

export const me1_system_gemini_sigma_ming = sys('Ming')
  .hasLocations(
    me1_location_gemini_sigma_ming_parag,
    me1_location_gemini_sigma_ming_altanorch,
    me1_location_gemini_sigma_ming_msv_worthington,
  )
  .build();

export const me1_cluster_gemini_sigma = cl('Gemini Sigma', 'Gemini_Sigma', 'Gemini_Sigma')
  .hasSystems(
    me1_system_gemini_sigma_han,
    me1_system_gemini_sigma_ming,
  )
  .build();
