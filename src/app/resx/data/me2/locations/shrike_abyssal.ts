import { cl, loc, sys } from '../../builders';

// The Shrike Abyssal

export const me2_location_shrike_abyssal_urla_rast_bovis_tor = loc('Bovis Tor')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_shrike_abyssal_urla_rast_doz_atab = loc('Doz Atab')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_shrike_abyssal_urla_rast_talis_fia = loc('Talis Fia')
  .withAdditionalInfo('Good (Element Zero)')
  .build();

export const me2_system_shrike_abyssal_urla_rast = sys('Urla Rast')
  .hasLocations(
    me2_location_shrike_abyssal_urla_rast_bovis_tor,
    me2_location_shrike_abyssal_urla_rast_doz_atab,
    me2_location_shrike_abyssal_urla_rast_talis_fia,
  )
  .build();

export const me2_location_shrike_abyssal_xe_cha_aphras = loc('Aphras')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_shrike_abyssal_xe_cha_tosal_nym = loc('Tosal Nym')
  .withAdditionalInfo('Rich (Element Zero)')
  .build();

export const me2_location_shrike_abyssal_xe_cha_vem_osca = loc('Vem Osca')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_shrike_abyssal_xe_cha_zada_ban = loc('Zada Ban')
  .withAdditionalInfo('Rich (Element Zero)')
  .build();

export const me2_system_shrike_abyssal_xe_cha = sys('Xe Cha')
  .hasLocations(
    me2_location_shrike_abyssal_xe_cha_aphras,
    me2_location_shrike_abyssal_xe_cha_tosal_nym,
    me2_location_shrike_abyssal_xe_cha_vem_osca,
    me2_location_shrike_abyssal_xe_cha_zada_ban,
  )
  .build();

export const me2_cluster_shrike_abyssal = cl('The Shrike Abyssal', 'The_Shrike_Abyssal', 'The_Shrike_Abyssal')
  .hasSystems(
    me2_system_shrike_abyssal_urla_rast,
    me2_system_shrike_abyssal_xe_cha,
  )
  .build();
