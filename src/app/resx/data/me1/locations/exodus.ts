import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Exodus

export const me1_location_exodus_asgard_asteroid_x57 = loc('Asteroid X57')
  .hasMissions(m.me1_mission_bring_down_the_sky)
  .build();

export const me1_system_exodus_asgard = sys('Asgard')
  .hasLocations(
    me1_location_exodus_asgard_asteroid_x57,
  )
  .build();

export const me1_cluster_exodus = cl('Exodus', 'Exodus', 'Exodus')
  .hasSystems(
    me1_system_exodus_asgard,
  )
  .build();
