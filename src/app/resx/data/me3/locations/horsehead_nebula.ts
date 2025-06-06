import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Horsehead Nebula

export const me3_location_horsehead_nebula_pax_noveria = loc('Noveria')
  .withAdditionalInfo('N7: Cerberus Fighter Base')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_horsehead_nebula_pax = sys('Pax')
  .hasLocations(
    me3_location_horsehead_nebula_pax_noveria,
  )
  .build();

export const me3_cluster_horsehead_nebula = cl('Horsehead Nebula', 'Horsehead_Nebula', 'Horsehead_Nebula')
  .hasSystems(
    me3_system_horsehead_nebula_pax,
  )
  .build();
