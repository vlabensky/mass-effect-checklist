import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Nimbus Cluster

export const me3_location_nimbus_cluster_pelion_south_of_aitis = loc('South of Aitis')
  .withAdditionalInfo('Wreckage: Fuel 650')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_nimbus_cluster_pelion_trategos = loc('Trategos')
  .withAdditionalInfo('Intact Reaper Weapon')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_nimbus_cluster_pelion_northeast_of_trategos = loc('Northeast of Trategos')
  .withAdditionalInfo('Wreckage: Fuel 750')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_nimbus_cluster_pelion_northwest_of_sthenia = loc('Northwest of Sthenia')
  .withAdditionalInfo('Wreckage: Fuel 850')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_nimbus_cluster_pelion = sys('Pelion')
  .hasLocations(
    me3_location_nimbus_cluster_pelion_south_of_aitis,
    me3_location_nimbus_cluster_pelion_trategos,
    me3_location_nimbus_cluster_pelion_northeast_of_trategos,
    me3_location_nimbus_cluster_pelion_northwest_of_sthenia,
  )
  .build();

export const me3_location_nimbus_cluster_agaiou_carcosa = loc('Carcosa')
  .hasMissions(m.me3_mission_nimbus_cluster_library_of_asha)
  .build();

export const me3_system_nimbus_cluster_agaiou = sys('Agaiou')
  .hasLocations(
    me3_location_nimbus_cluster_agaiou_carcosa,
  )
  .build();

export const me3_location_nimbus_cluster_kallini_south_of_pania = loc('South of Pania')
  .withAdditionalInfo('Wreckage: Fuel 300')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_nimbus_cluster_kallini = sys('Kallini')
  .hasLocations(
    me3_location_nimbus_cluster_kallini_south_of_pania,
  )
  .build();

export const me3_cluster_nimbus_cluster = cl('Nimbus Cluster', 'Nimbus_Cluster', 'Nimbus_Cluster')
  .hasSystems(
    me3_system_nimbus_cluster_pelion,
    me3_system_nimbus_cluster_agaiou,
    me3_system_nimbus_cluster_kallini,
  )
  .build();
