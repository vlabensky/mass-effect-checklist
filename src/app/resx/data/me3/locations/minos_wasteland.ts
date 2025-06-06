import { cl, loc, sys } from '../../builders';
import * as m from '../missions';

// Minos Wasteland

export const me3_location_minos_wasteland_fortis = loc('South of Mass Relay')
  .withAdditionalInfo('Wreckage: Fuel 200')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_location_minos_wasteland_pietas = loc('Pietas')
  .withAdditionalInfo('Salvage: Credits 10,000')
  .hasMissions(m.me3_mission_war_asset)
  .build();

export const me3_system_minos_wasteland_fortis = sys('Fortis')
  .hasLocations(
    me3_location_minos_wasteland_fortis,
    me3_location_minos_wasteland_pietas,
  )
  .build();

export const me3_cluster_minos_wasteland = cl('Minos Wasteland', 'Minos_Wasteland', 'Minos_Wasteland')
  .hasSystems(
    me3_system_minos_wasteland_fortis,
  )
  .build();
