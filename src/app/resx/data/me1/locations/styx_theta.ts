import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Styx Theta

export const me1_location_styx_theta_acheron_carbonaceous_asteroid = loc('Carbonaceous Asteroid')
  .hasMissions(m.me1_mission_turian_insignias)
  .build();

export const me1_location_styx_theta_acheron_grosalgen = loc('Grosalgen')
  .hasMissions(m.me1_mission_valuable_minerals_light_metals)
  .build();

export const me1_location_styx_theta_acheron_altahe = loc('Altahe')
  .hasMissions(m.me1_mission_listening_post_theta)
  .build();

export const me1_system_styx_theta_acheron = sys('Acheron')
  .hasLocations(
    me1_location_styx_theta_acheron_carbonaceous_asteroid,
    me1_location_styx_theta_acheron_grosalgen,
    me1_location_styx_theta_acheron_altahe,
  )
  .build();

export const me1_location_styx_theta_erebus_quaji = loc('Quaji')
  .hasMissions(m.me1_mission_valuable_minerals_heavy_metals)
  .build();

export const me1_location_styx_theta_erebus_wermani = loc('Wermani')
  .hasMissions(m.me1_mission_prothean_data_discs)
  .build();

export const me1_location_styx_theta_erebus_nepmos = loc('Nepmos')
  .hasMissions(m.me1_mission_listening_post_alpha)
  .build();

export const me1_system_styx_theta_erebus = sys('Erebus')
  .hasLocations(
    me1_location_styx_theta_erebus_quaji,
    me1_location_styx_theta_erebus_wermani,
    me1_location_styx_theta_erebus_nepmos,
  )
  .build();

export const me1_cluster_styx_theta = cl('Styx Theta')
  .hasSystems(
    me1_system_styx_theta_acheron,
    me1_system_styx_theta_erebus,
  )
  .build();
