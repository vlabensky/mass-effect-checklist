import { cl, loc, sys } from '../../builders';

// Titan Nebula

export const me2_location_titan_nebula_haskins_capek = loc('Capek')
  .withAdditionalInfo('Rich (Element Zero)')
  .build();

export const me2_system_titan_nebula_haskins = sys('Haskins')
  .hasLocations(
    me2_location_titan_nebula_haskins_capek,
  )
  .build();

export const me2_cluster_titan_nebula = cl('Titan Nebula', 'Titan_Nebula', 'Titan_Nebula')
  .hasSystems(
    me2_system_titan_nebula_haskins,
  )
  .build();
