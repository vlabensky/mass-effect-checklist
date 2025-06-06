import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Gemini Sigma

export const me3_location_gemini_sigma_han_near_mass_relay = loc('Near Mass Relay')
  .withAdditionalInfo('Wreckage: Fuel 470')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_gemini_sigma_han_mavigon = loc('Mavigon')
  .withAdditionalInfo('Salvage: Credits 10,000')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_gemini_sigma_han = sys('Han')
  .hasLocations(
    me3_location_gemini_sigma_han_near_mass_relay,
    me3_location_gemini_sigma_han_mavigon,
  )
  .build();

export const me3_location_gemini_sigma_ming_south_east_of_star = loc('South East of Star (Between 1st & 2nd rings)')
  .withAdditionalInfo('Wreckage: Fuel 320')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_gemini_sigma_ming_parag = loc('Parag')
  .withAdditionalInfo('Alliance Cruiser Nairobi, Alliance Third Fleet')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_gemini_sigma_ming = sys('Ming')
  .hasLocations(
    me3_location_gemini_sigma_ming_south_east_of_star,
    me3_location_gemini_sigma_ming_parag,
  )
  .build();

export const me3_cluster_gemini_sigma = cl('Gemini Sigma', 'Gemini_Sigma', 'Gemini_Sigma')
  .hasSystems(
    me3_system_gemini_sigma_han,
    me3_system_gemini_sigma_ming,
  )
  .build();
