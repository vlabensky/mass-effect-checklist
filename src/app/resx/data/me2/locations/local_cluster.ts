import { cl, loc, sys } from '../../builders';

// Local Cluster

export const me2_location_local_cluster_sol_earth = loc('Earth')
  .withAdditionalInfo('N/A')
  .build();

export const me2_location_local_cluster_sol_jupiter = loc('Jupiter')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_local_cluster_sol_mars = loc('Mars')
  .withAdditionalInfo('N/A')
  .build();

export const me2_location_local_cluster_sol_mercury = loc('Mercury')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_local_cluster_sol_neptune = loc('Neptune')
  .withAdditionalInfo('Poor')
  .build();

export const me2_location_local_cluster_sol_pluto = loc('Pluto')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_location_local_cluster_sol_saturn = loc('Saturn')
  .withAdditionalInfo('Good')
  .build();

export const me2_location_local_cluster_sol_uranus = loc('Uranus')
  .withAdditionalInfo('Depleted')
  .build();

export const me2_location_local_cluster_sol_venus = loc('Venus')
  .withAdditionalInfo('Good')
  .build();

export const me2_system_local_cluster_sol = sys('Sol')
  .hasLocations(
    me2_location_local_cluster_sol_earth,
    me2_location_local_cluster_sol_jupiter,
    me2_location_local_cluster_sol_mars,
    me2_location_local_cluster_sol_mercury,
    me2_location_local_cluster_sol_neptune,
    me2_location_local_cluster_sol_pluto,
    me2_location_local_cluster_sol_saturn,
    me2_location_local_cluster_sol_uranus,
    me2_location_local_cluster_sol_venus,
  )
  .build();

export const me2_cluster_local_cluster = cl('Local Cluster')
  .hasSystems(
    me2_system_local_cluster_sol,
  )
  .build();
