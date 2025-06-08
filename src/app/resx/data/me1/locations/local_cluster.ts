import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Local Cluster

export const me1_location_local_cluster_sol_luna = loc('Luna')
  .hasMissions(m.me1_mission_rogue_vi)
  .build();

export const me1_system_local_cluster_sol = sys('Sol')
  .hasLocations(
    me1_location_local_cluster_sol_luna,
  )
  .build();

export const me1_cluster_local_cluster = cl('Local Cluster')
  .hasSystems(
    me1_system_local_cluster_sol,
  )
  .build();
