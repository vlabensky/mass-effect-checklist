import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Maroon Sea

export const me1_location_maroon_sea_caspian_clotanca = loc('Clotanca')
  .hasMissions(m.me1_mission_valuable_minerals_heavy_metals)
  .build();

export const me1_location_maroon_sea_caspian_farnuri = loc('Farnuri')
  .hasMissions(m.me1_mission_valuable_minerals_heavy_metals)
  .build();

export const me1_location_maroon_sea_caspian_antida = loc('Antida')
  .hasMissions(m.me1_mission_turian_insignias)
  .build();

export const me1_location_maroon_sea_caspian_msv_cornucopia = loc('MSV Cornucopia')
  .hasMissions(m.me1_mission_derelict_freighter)
  .build();

export const me1_system_maroon_sea_caspian = sys('Caspian')
  .hasLocations(
    me1_location_maroon_sea_caspian_clotanca,
    me1_location_maroon_sea_caspian_farnuri,
    me1_location_maroon_sea_caspian_antida,
    me1_location_maroon_sea_caspian_msv_cornucopia,
  )
  .build();

export const me1_location_maroon_sea_matano_metallic_asteroid = loc('Metallic Asteroid')
  .hasMissions(m.me1_mission_valuable_minerals_heavy_metals)
  .build();

export const me1_location_maroon_sea_matano_rocky_asteroid = loc('Rocky Asteroid')
  .hasMissions(m.me1_mission_prothean_data_discs)
  .build();

export const me1_location_maroon_sea_matano_supay = loc('Supay')
  .hasMissions(m.me1_mission_valuable_minerals_light_metals)
  .build();

export const me1_location_maroon_sea_matano_chasca = loc('Chasca')
  .hasMissions(m.me1_mission_colony_of_the_dead)
  .build();

export const me1_system_maroon_sea_matano = sys('Matano')
  .hasLocations(
    me1_location_maroon_sea_matano_metallic_asteroid,
    me1_location_maroon_sea_matano_rocky_asteroid,
    me1_location_maroon_sea_matano_supay,
    me1_location_maroon_sea_matano_chasca,
  )
  .build();

export const me1_location_maroon_sea_vostok_metallic_asteroid = loc('Metallic Asteroid')
  .hasMissions(m.me1_mission_valuable_minerals_heavy_metals)
  .build();

export const me1_location_maroon_sea_vostok_pataiton = loc('Pataiton')
  .hasMissions(m.me1_mission_asari_writings)
  .build();

export const me1_location_maroon_sea_vostok_nodacrux = loc('Nodacrux')
  .hasMissions(m.me1_mission_exogeni_facility)
  .build();

export const me1_system_maroon_sea_vostok = sys('Vostok')
  .hasLocations(
    me1_location_maroon_sea_vostok_metallic_asteroid,
    me1_location_maroon_sea_vostok_pataiton,
    me1_location_maroon_sea_vostok_nodacrux,
  )
  .build();

export const me1_cluster_maroon_sea = cl('Maroon Sea', 'Maroon_Sea', 'Maroon_Sea')
  .hasSystems(
    me1_system_maroon_sea_caspian,
    me1_system_maroon_sea_matano,
    me1_system_maroon_sea_vostok,
  )
  .build();
