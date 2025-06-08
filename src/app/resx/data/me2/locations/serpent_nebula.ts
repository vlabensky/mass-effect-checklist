import { cl, loc, sys } from '../../builders';

// Serpent Nebula

export const me2_location_serpent_nebula_widow_citadel = loc('Citadel')
  .withAdditionalInfo('N/A')
  .build();

export const me2_system_serpent_nebula_widow = sys('Widow')
  .hasLocations(
    me2_location_serpent_nebula_widow_citadel,
  )
  .build();

export const me2_cluster_serpent_nebula = cl('Serpent Nebula')
  .hasSystems(
    me2_system_serpent_nebula_widow,
  )
  .build();
