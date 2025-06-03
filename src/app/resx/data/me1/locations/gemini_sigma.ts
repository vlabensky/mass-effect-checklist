import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Gemini Sigma

export const me1_location_gemini_sigma_han_mavigon = loc('Mavigon')
  .hasMissions(m.me1_mission_hostile_takeover)
  .build();

export const me1_location_gemini_sigma_han_patatanlis = loc('Patatanlis')
  .build();

export const me1_location_gemini_sigma_han_paravlin = loc('Paravlin')
  .build();

export const me1_system_gemini_sigma_han = sys('Han')
  .hasLocations(
    me1_location_gemini_sigma_han_mavigon,
    me1_location_gemini_sigma_han_patatanlis,
    me1_location_gemini_sigma_han_paravlin,
  )
  .build();

export const me1_location_gemini_sigma_ming_parag = loc('Parag')
  .build();

export const me1_location_gemini_sigma_ming_altanorch = loc('Altanorch')
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
