import { cl, loc, sys } from '../../builders';

// Minos Wasteland

export const me3_location_minos_wasteland_fortis = loc('Fortis')
  .withAdditionalInfo('No additional information available')
  .build();

export const me3_system_minos_wasteland_fortis = sys('Fortis')
  .hasLocations(
    me3_location_minos_wasteland_fortis,
  )
  .build();

export const me3_cluster_minos_wasteland = cl('Minos Wasteland', 'Minos_Wasteland', 'Minos_Wasteland')
  .hasSystems(
    me3_system_minos_wasteland_fortis,
  )
  .build();
