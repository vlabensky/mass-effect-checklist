import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// The Shrike Abyssal

export const me3_location_shrike_abyssal_xe_cha_zada_ban = loc('Zada Ban')
  .withAdditionalInfo('Salvage: Credits 10,000')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_shrike_abyssal_xe_cha_south_of_star = loc('South of Star (Between 2nd & 3rd ring)')
  .withAdditionalInfo('Wreckage: Fuel 150')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_shrike_abyssal_xe_cha = sys('Xe Cha')
  .hasLocations(
    me3_location_shrike_abyssal_xe_cha_zada_ban,
    me3_location_shrike_abyssal_xe_cha_south_of_star,
  )
  .build();

export const me3_location_shrike_abyssal_urla_rast_northeast_of_star = loc('Northeast of Star (Between 2nd and 3rd ring)')
  .withAdditionalInfo('Wreckage: Fuel 300')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_shrike_abyssal_urla_rast_talis_fia = loc('Talis Fia')
  .hasMissions(m.me3_mission_shrike_abyssal_prothean_obelisk)
  .build();

export const me3_system_shrike_abyssal_urla_rast = sys('Urla Rast')
  .hasLocations(
    me3_location_shrike_abyssal_urla_rast_northeast_of_star,
    me3_location_shrike_abyssal_urla_rast_talis_fia,
  )
  .build();

export const me3_location_shrike_abyssal_thal_southwest_of_star = loc('Southwest of star (between 1st and 2nd rings)')
  .withAdditionalInfo('Wreckage: Fuel 400')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_shrike_abyssal_thal_tyrix = loc('Tyrix (Very small asteroid North of sun, between 3rd and 4th ring)')
  .withAdditionalInfo('Vorcha Labor Team')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_shrike_abyssal_thal = sys('Thal')
  .hasLocations(
    me3_location_shrike_abyssal_thal_southwest_of_star,
    me3_location_shrike_abyssal_thal_tyrix,
  )
  .build();

export const me3_location_shrike_abyssal_kyzil_heshtok = loc('Heshtok')
  .withAdditionalInfo('Void Devils Fighter Wing')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_shrike_abyssal_kyzil_just_southwest_of_rustaka = loc('Just a little Southwest of Rustaka')
  .withAdditionalInfo('Fuel 350')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_shrike_abyssal_kyzil = sys('Kyzil')
  .hasLocations(
    me3_location_shrike_abyssal_kyzil_heshtok,
    me3_location_shrike_abyssal_kyzil_just_southwest_of_rustaka,
  )
  .build();

export const me3_cluster_shrike_abyssal = cl('The Shrike Abyssal', 'Shrike_Abyssal', 'Shrike_Abyssal')
  .hasSystems(
    me3_system_shrike_abyssal_xe_cha,
    me3_system_shrike_abyssal_urla_rast,
    me3_system_shrike_abyssal_thal,
    me3_system_shrike_abyssal_kyzil,
  )
  .build();
