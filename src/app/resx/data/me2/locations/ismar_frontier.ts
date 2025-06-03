import { cl, loc, sys } from '../../builders';

// Ismar Frontier

export const me2_location_ismar_frontier_aquila_euntanta = loc('Euntanta')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_ismar_frontier_aquila_farinata = loc('Farinata')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_ismar_frontier_aquila_metaponto = loc('Metaponto')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_ismar_frontier_aquila_vecchio = loc('Vecchio')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_ismar_frontier_aquila = sys('Aquila')
  .hasLocations(
    me2_location_ismar_frontier_aquila_euntanta,
    me2_location_ismar_frontier_aquila_farinata,
    me2_location_ismar_frontier_aquila_metaponto,
    me2_location_ismar_frontier_aquila_vecchio,
  )
  .build();

export const me2_location_ismar_frontier_elysta_chalkhos = loc('Chalkhos')
  .withAdditionalInfo('Rich (Element Zero)')
  .build();

export const me2_location_ismar_frontier_elysta_thegan = loc('Thegan')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_ismar_frontier_elysta_zanethu = loc('Zanethu')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_ismar_frontier_elysta = sys('Elysta')
  .hasLocations(
    me2_location_ismar_frontier_elysta_chalkhos,
    me2_location_ismar_frontier_elysta_thegan,
    me2_location_ismar_frontier_elysta_zanethu,
  )
  .build();

export const me2_location_ismar_frontier_salahiel_ekram = loc('Ekram')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_ismar_frontier_salahiel_zaherux = loc('Zaherux')
  .withAdditionalInfo('Moderate')
  .build();

export const me2_system_ismar_frontier_salahiel = sys('Salahiel')
  .hasLocations(
    me2_location_ismar_frontier_salahiel_ekram,
    me2_location_ismar_frontier_salahiel_zaherux,
  )
  .build();

export const me2_location_ismar_frontier_tassrah_cernunnos = loc('Cernunnos')
  .withAdditionalInfo('Rich')
  .build();

export const me2_location_ismar_frontier_tassrah_taitus = loc('Taitus')
  .withAdditionalInfo('Rich')
  .build();

export const me2_system_ismar_frontier_tassrah = sys('Tassrah')
  .hasLocations(
    me2_location_ismar_frontier_tassrah_cernunnos,
    me2_location_ismar_frontier_tassrah_taitus,
  )
  .build();

export const me2_cluster_ismar_frontier = cl('Ismar Frontier', 'Ismar_Frontier', 'Ismar_Frontier')
  .hasSystems(
    me2_system_ismar_frontier_aquila,
    me2_system_ismar_frontier_elysta,
    me2_system_ismar_frontier_salahiel,
    me2_system_ismar_frontier_tassrah,
  )
  .build();
