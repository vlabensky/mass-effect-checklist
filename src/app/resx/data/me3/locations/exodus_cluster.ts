import { cl, loc, sys } from '../../builders';

// Exodus Cluster

export const me3_location_exodus_cluster_utopia_south_of_eden_prime = loc('South of Eden Prime (3rd Ring)')
  .withAdditionalInfo('Wreckage: Fuel 200')
  .build();

export const me3_location_exodus_cluster_utopia_zion = loc('Zion')
  .withAdditionalInfo('Prothean Data Files')
  .build();

export const me3_system_exodus_cluster_utopia = sys('Utopia')
  .hasLocations(
    me3_location_exodus_cluster_utopia_south_of_eden_prime,
    me3_location_exodus_cluster_utopia_zion,
  )
  .build();

export const me3_location_exodus_cluster_asgard_borr = loc('Borr')
  .withAdditionalInfo('Remains of Reaper Destroyer')
  .build();

export const me3_location_exodus_cluster_asgard_tyr = loc('Tyr')
  .withAdditionalInfo('Alliance Naval Exploration Flotilla')
  .build();

export const me3_location_exodus_cluster_asgard_terra_nova = loc('Terra Nova')
  .withAdditionalInfo('Alliance Cruiser Shanghai')
  .build();

export const me3_location_exodus_cluster_asgard_loki = loc('Loki')
  .withAdditionalInfo('Alliance Spec Ops Team Delta')
  .build();

export const me3_location_exodus_cluster_asgard_northwest_of_star = loc('Northwest of Star')
  .withAdditionalInfo('Wreckage: Fuel 250')
  .build();

export const me3_system_exodus_cluster_asgard = sys('Asgard')
  .hasLocations(
    me3_location_exodus_cluster_asgard_borr,
    me3_location_exodus_cluster_asgard_tyr,
    me3_location_exodus_cluster_asgard_terra_nova,
    me3_location_exodus_cluster_asgard_loki,
    me3_location_exodus_cluster_asgard_northwest_of_star,
  )
  .build();

export const me3_cluster_exodus_cluster = cl('Exodus Cluster', 'Exodus_Cluster', 'Exodus_Cluster')
  .hasSystems(
    me3_system_exodus_cluster_utopia,
    me3_system_exodus_cluster_asgard,
  )
  .build();
