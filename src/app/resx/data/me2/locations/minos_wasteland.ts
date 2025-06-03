import { cl, loc, sys } from '../../builders';

// Minos Wasteland

export const me2_location_minos_wasteland_caestus_invictus = loc('Invictus')
  .withAdditionalInfo('Rich (Element Zero)')
  .build();

export const me2_location_minos_wasteland_caestus_temerarus = loc('Temerarus')
  .withAdditionalInfo('Rich')
  .build();

export const me2_system_minos_wasteland_caestus = sys('Caestus')
  .hasLocations(
    me2_location_minos_wasteland_caestus_invictus,
    me2_location_minos_wasteland_caestus_temerarus,
  )
  .build();

export const me2_location_minos_wasteland_fortis_aequitas = loc('Aequitas')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_minos_wasteland_fortis_pietas = loc('Pietas')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_minos_wasteland_fortis_vir = loc('Vir')
  .withAdditionalInfo('Good')
  .build();

export const me2_system_minos_wasteland_fortis = sys('Fortis')
  .hasLocations(
    me2_location_minos_wasteland_fortis_aequitas,
    me2_location_minos_wasteland_fortis_pietas,
    me2_location_minos_wasteland_fortis_vir,
  )
  .build();

export const me2_cluster_minos_wasteland = cl('Minos Wasteland', 'Minos_Wasteland', 'Minos_Wasteland')
  .hasSystems(
    me2_system_minos_wasteland_caestus,
    me2_system_minos_wasteland_fortis,
  )
  .build();
