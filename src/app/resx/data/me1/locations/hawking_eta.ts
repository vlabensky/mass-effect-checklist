import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Hawking Eta

export const me1_location_hawking_eta_century_metallic_asteroid = loc('Metallic Asteroid')
  .hasMissions(m.me1_mission_valuable_minerals_heavy_metals)
  .build();

export const me1_location_hawking_eta_century_canctra = loc('Canctra')
  .hasMissions(m.me1_mission_valuable_minerals_light_metals)
  .build();

export const me1_location_hawking_eta_century_tharopto = loc('Tharopto')
  .hasMissions(m.me1_mission_locate_signs_of_battle)
  .build();

export const me1_location_hawking_eta_century_presrop = loc('Presrop')
  .hasMissions(m.me1_mission_strange_transmission)
  .build();

export const me1_system_hawking_eta_century = sys('Century')
  .hasLocations(
    me1_location_hawking_eta_century_metallic_asteroid,
    me1_location_hawking_eta_century_canctra,
    me1_location_hawking_eta_century_tharopto,
    me1_location_hawking_eta_century_presrop,
  )
  .build();

export const me1_cluster_hawking_eta = cl('Hawking Eta')
  .hasSystems(
    me1_system_hawking_eta_century,
  )
  .build();
