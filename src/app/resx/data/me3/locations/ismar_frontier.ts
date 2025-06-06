import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Ismar Frontier

export const me3_location_ismar_frontier_aquila_metaponto = loc('Metaponto')
  .withAdditionalInfo('Ismar Frontier: Prototype Components\n- Advanced Biotic Implants')
  .build();

export const me3_system_ismar_frontier_aquila = sys('Aquila')
  .hasLocations(
    me3_location_ismar_frontier_aquila_metaponto,
  )
  .build();

export const me3_cluster_ismar_frontier = cl('Ismar Frontier', 'Ismar_Frontier', 'Ismar_Frontier')
  .hasSystems(
    me3_system_ismar_frontier_aquila,
  )
  .build();
